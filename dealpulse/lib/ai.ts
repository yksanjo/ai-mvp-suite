import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

export interface DealAnalysis {
  riskScore: number
  nextActions: string[]
  stakeholderMap: {
    name: string
    role: string
    influence: 'high' | 'medium' | 'low'
    concerns: string[]
  }[]
  followUpDraft: string
  executiveSummary: string
}

export async function analyzeDeal(
  inputType: 'meeting' | 'email' | 'notes',
  inputData: string
): Promise<DealAnalysis> {
  const prompt = `You are an expert enterprise sales analyst. Analyze this ${inputType} and provide a JSON response with the following structure:

{
  "riskScore": <number 0-100>,
  "nextActions": [<array of 3-5 specific, prioritized steps>],
  "stakeholderMap": [
    {
      "name": "<person name>",
      "role": "<their role>",
      "influence": "<high|medium|low>",
      "concerns": [<array of their concerns>]
    }
  ],
  "followUpDraft": "<personalized email addressing key concerns>",
  "executiveSummary": "<3-4 sentence deal status>"
}

Input data: ${inputData}

Provide ONLY valid JSON, no markdown formatting.`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const content = message.content[0]
    if (content.type === 'text') {
      const jsonText = content.text.trim()
      // Remove markdown code blocks if present
      const cleanedJson = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '')
      return JSON.parse(cleanedJson) as DealAnalysis
    }

    throw new Error('Unexpected response format from AI')
  } catch (error) {
    console.error('AI analysis error:', error)
    throw new Error('Failed to analyze deal')
  }
}

