# ChurnGuard - AI-Powered Customer Success Platform

ChurnGuard helps SaaS companies predict churn and take proactive action. Upload customer data, get AI-powered health scores, churn risk assessments, and personalized intervention recommendations.

## Features

- **Health Scoring**: AI-powered customer health scores (0-100)
- **Churn Prediction**: Identify at-risk customers before they churn
- **Actionable Insights**: Get specific intervention recommendations
- **Upsell Opportunities**: Identify expansion opportunities for healthy customers
- **Automated Outreach**: Generate personalized emails ready to send
- **Data Visualization**: Track trends and intervention success rates

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI**: Anthropic Claude API
- **Charts**: Recharts
- **Payments**: Stripe
- **Deployment**: Vercel

## Setup Instructions

### 1. Install Dependencies

```bash
cd churnguard
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

Deploy to Vercel following the same process as the other MVPs. Add all environment variables in the Vercel dashboard.

## Pricing Plans

- **Starter**: $299/month (up to 100 customers)
- **Growth**: $699/month (up to 500 customers)
- **Scale**: $1,499/month (unlimited customers)

## CSV Import Format

Import customer data with these columns:
- customer_name
- customer_email
- mrr
- signup_date
- last_login_date
- monthly_active_days
- feature_usage_score
- support_tickets_30d
- payment_status

## Project Structure

```
churnguard/
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
