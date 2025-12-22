# ProposalAI - AI-Powered Proposal Generation Platform

ProposalAI helps consultants, agencies, and professional services firms generate winning proposals in minutes instead of hours. Upload RFPs and company assets, and get 80% complete proposals tailored to each client.

## Features

- **AI-Powered Generation**: Generate 80% complete proposals using Claude AI
- **RFP Analysis**: Automatically extract requirements from uploaded RFPs
- **Company Asset Library**: Store and reuse past proposals, case studies, and pricing models
- **Rich Text Editor**: Edit generated proposals with full formatting
- **Export Options**: Export as PDF or Word documents
- **Template Customization**: Brand proposals with your company information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI**: Anthropic Claude API
- **Rich Text**: Tiptap
- **PDF Export**: jsPDF + html2canvas
- **Payments**: Stripe
- **Deployment**: Vercel

## Setup Instructions

### 1. Install Dependencies

```bash
cd proposalai
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Run the migration: `supabase/migrations/001_initial_schema.sql`
3. Copy your API keys from Settings > API

### 3. Set Up Anthropic API

1. Sign up at [anthropic.com](https://anthropic.com)
2. Create an API key
3. Add credits to your account

### 4. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your keys.

### 5. Run Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Deployment

Deploy to Vercel following the same process as DealPulse. Add all environment variables in the Vercel dashboard.

## Pricing Plans

- **Pay Per Proposal**: $99 per proposal
- **Pro**: $299/month (10 proposals)
- **Agency**: $699/month (unlimited proposals)

## Project Structure

```
proposalai/
├── app/
│   ├── api/              # API routes
│   ├── dashboard/        # Protected pages
│   ├── login/           # Auth pages
│   └── signup/
├── components/
│   └── ui/              # UI components
├── lib/
│   ├── supabase/       # Supabase setup
│   ├── ai.ts          # AI functions
│   └── stripe.ts      # Stripe integration
└── supabase/
    └── migrations/    # Database migrations
```
