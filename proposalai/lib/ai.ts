import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

export interface ProposalContent {
  executiveSummary: string
  understandingOfRequirements: string
  proposedApproach: string
  teamAndQualifications: string
  pricing: string
  termsAndConditions: string
}

export async function generateProposal(
  rfpRequirements: string,
  companyAssets: {
    pastProposals?: string
    caseStudies?: string
    pricingModels?: string
  }
): Promise<ProposalContent> {
  const prompt = `You are an expert proposal writer. Generate a professional consulting proposal based on:

RFP Requirements: ${rfpRequirements}

Company Assets:
- Past Proposals: ${companyAssets.pastProposals || 'None provided'}
- Case Studies: ${companyAssets.caseStudies || 'None provided'}
- Pricing Models: ${companyAssets.pricingModels || 'None provided'}

Create a proposal with these sections in JSON format:
{
  "executiveSummary": "<2-3 paragraphs summarizing the proposal>",
  "understandingOfRequirements": "<restate their needs and show you understand>",
  "proposedApproach": "<methodology, timeline, deliverables>",
  "teamAndQualifications": "<reference relevant past work and expertise>",
  "pricing": "<based on scope and company's pricing model>",
  "termsAndConditions": "<standard terms and conditions>"
}

Make it professional, persuasive, and specific to this client's needs. Provide ONLY valid JSON, no markdown formatting.`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
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
      const cleanedJson = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '')
      return JSON.parse(cleanedJson) as ProposalContent
    }

    throw new Error('Unexpected response format from AI')
  } catch (error) {
    console.error('AI proposal generation error:', error)
    throw new Error('Failed to generate proposal')
  }
}

export async function extractRFPRequirements(rfpText: string): Promise<string> {
  const prompt = `Extract key requirements, scope, deadlines, budget indicators, and evaluation criteria from this RFP:

${rfpText}

Provide a structured summary of all requirements.`

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
      return content.text.trim()
    }

    throw new Error('Unexpected response format from AI')
  } catch (error) {
    console.error('RFP extraction error:', error)
    throw new Error('Failed to extract RFP requirements')
  }
}

