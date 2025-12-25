# AI MVP Suite - Three Complete B2B SaaS Applications

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://www.javascript.com/) [![GitHub stars](https://img.shields.io/github/stars/yksanjo/ai-mvp-suite?style=social)](https://github.com/yksanjo/ai-mvp-suite/stargazers) [![GitHub forks](https://img.shields.io/github/forks/yksanjo/ai-mvp-suite.svg)](https://github.com/yksanjo/ai-mvp-suite/network/members) [![GitHub issues](https://img.shields.io/github/issues/yksanjo/ai-mvp-suite.svg)](https://github.com/yksanjo/ai-mvp-suite/issues)
[![Last commit](https://img.shields.io/github/last-commit/yksanjo/ai-mvp-suite.svg)](https://github.com/yksanjo/ai-mvp-suite/commits/main)


This repository contains three production-ready MVP applications built with Next.js 14, Supabase, and Anthropic Claude AI. Each MVP is designed to solve a specific B2B problem and can be deployed independently.

## 🚀 The Three MVPs

### 1. DealPulse - Deal Intelligence for Enterprise Sales
**Location**: `/dealpulse`

AI-powered deal intelligence platform that analyzes meeting recordings, emails, and notes to provide:
- Risk scores (0-100)
- Next action recommendations
- Stakeholder mapping
- Follow-up email drafts

**Pricing**: $199-$999/month

### 2. ProposalAI - Proposal Automation for Professional Services
**Location**: `/proposalai`

AI-powered proposal generation that creates 80% complete proposals from RFPs:
- RFP requirement extraction
- Proposal generation using company assets
- Rich text editing
- PDF/Word export

**Pricing**: $99/proposal or $299-$699/month

### 3. ChurnGuard - Customer Success AI for SaaS Companies
**Location**: `/churnguard`

AI-powered customer health monitoring and churn prediction:
- Customer health scores
- Churn risk assessment
- Intervention recommendations
- Upsell opportunity identification

**Pricing**: $299-$1,499/month

## 🛠 Tech Stack (All MVPs)

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI**: Anthropic Claude API (Claude Sonnet 4)
- **Payments**: Stripe
- **Deployment**: Vercel

## 📋 Quick Start

Each MVP is independent. To get started with any of them:

1. **Navigate to the MVP directory**
   ```bash
   cd dealpulse  # or proposalai or churnguard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a project at [supabase.com](https://supabase.com)
   - Run the SQL migration in `supabase/migrations/001_initial_schema.sql`
   - Copy your API keys

4. **Set up Anthropic API**
   - Sign up at [anthropic.com](https://anthropic.com)
   - Create an API key
   - Add credits to your account

5. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   # Fill in all the keys
   ```

6. **Run locally**
   ```bash
   npm run dev
   ```

7. **Deploy to Vercel**
   - Push to GitHub
   - Import in Vercel
   - Add environment variables
   - Deploy!

## 📁 Project Structure

```
ai-mvp-suite/
├── dealpulse/          # MVP #1: Deal Intelligence
│   ├── app/            # Next.js pages and API routes
│   ├── components/     # React components
│   ├── lib/           # Utilities and integrations
│   └── supabase/       # Database migrations
├── proposalai/        # MVP #2: Proposal Automation
│   └── (same structure)
└── churnguard/         # MVP #3: Customer Success AI
    └── (same structure)
```

## 🔑 Required API Keys

For each MVP, you'll need:

1. **Supabase**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

2. **Anthropic**
   - `ANTHROPIC_API_KEY`

3. **Stripe** (for payments)
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_WEBHOOK_SECRET`

4. **App URL**
   - `NEXT_PUBLIC_APP_URL` (e.g., `http://localhost:3000`)

## 💰 Cost Estimates

**Free Tier (for testing):**
- Supabase: Free (up to 500MB database, 2GB bandwidth)
- Anthropic: ~$0.50-2 per analysis/generation
- Vercel: Free (hobby plan)
- Stripe: 2.9% + $0.30 per transaction

**Monthly Costs (with customers):**
- Supabase: $25/month (Pro plan)
- Anthropic: Pay per use (~$0.50-2 per request)
- Vercel: $20/month (Pro plan)
- Total: ~$45-50/month base + usage

## 🎯 Next Steps

1. **Choose one MVP** to focus on first
2. **Set up your API keys** (Supabase, Anthropic, Stripe)
3. **Run the database migration** in Supabase SQL Editor
4. **Test locally** and customize branding
5. **Deploy to Vercel** and get your first customers!

## 📚 Documentation

Each MVP has its own README with:
- Detailed setup instructions
- Feature descriptions
- API documentation
- Deployment guide

## 🔒 Security Notes

- All MVPs use Row Level Security (RLS) in Supabase
- API keys should never be committed to git
- Use environment variables for all secrets
- Stripe webhooks should verify signatures

## 🤝 Support

Each MVP is production-ready but may need customization for your specific use case. The code is well-structured and documented for easy modification.

## 📝 License

These MVPs are provided as-is for building your own SaaS products. Customize as needed!

---

**Built with ❤️ using Next.js, Supabase, and Claude AI**

