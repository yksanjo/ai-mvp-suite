# DealPulse - AI-Powered Deal Intelligence Platform

DealPulse is a B2B SaaS application that helps enterprise sales teams analyze deals using AI. Upload meeting recordings, email threads, or notes to get instant risk scores, next actions, stakeholder maps, and follow-up emails.

## Features

- **AI-Powered Deal Analysis**: Analyze meeting recordings, emails, and notes using Claude AI
- **Risk Scoring**: Get instant deal risk scores (0-100) with detailed explanations
- **Next Actions**: Receive prioritized, specific steps to move deals forward
- **Stakeholder Mapping**: Automatically identify key players, their influence, and concerns
- **Follow-up Emails**: Generate personalized follow-up emails ready to send
- **Deal Management**: Track and organize all your deals in one place

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI**: Anthropic Claude API
- **Payments**: Stripe
- **Deployment**: Vercel

## Setup Instructions

### 1. Clone and Install

```bash
cd dealpulse
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the migration file: `supabase/migrations/001_initial_schema.sql`
3. Go to Settings > API and copy your:
   - Project URL
   - Anon public key
   - Service role key (keep this secret!)

### 3. Set Up Anthropic API

1. Sign up at [anthropic.com](https://anthropic.com)
2. Create an API key in your dashboard
3. Add credits to your account

### 4. Set Up Stripe (Optional for MVP)

1. Create account at [stripe.com](https://stripe.com)
2. Get your API keys from the dashboard
3. Set up webhook endpoint: `https://yourdomain.com/api/webhooks/stripe`

### 5. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

Fill in all the values from the steps above.

### 6. Run Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add all environment variables in Vercel dashboard
4. Deploy!

### Environment Variables in Vercel

Add all the same variables from `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ANTHROPIC_API_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_APP_URL`

## Database Schema

- **profiles**: User profiles extending Supabase auth
- **deals**: Sales deals with company info and stage
- **analyses**: AI-generated analyses linked to deals

All tables have Row Level Security (RLS) enabled for data protection.

## Pricing Plans

- **Starter**: $199/month (50 analyses)
- **Professional**: $499/month (200 analyses)
- **Enterprise**: $999/month (unlimited analyses)

## API Endpoints

- `POST /api/analyze` - Analyze a deal with AI
- `POST /api/auth/signout` - Sign out user

## Project Structure

```
dealpulse/
├── app/
│   ├── api/          # API routes
│   ├── dashboard/    # Protected dashboard pages
│   ├── login/        # Authentication pages
│   └── signup/
├── components/       # React components
│   └── ui/          # Shadcn/ui components
├── lib/             # Utilities and helpers
│   ├── supabase/   # Supabase client setup
│   ├── ai.ts       # AI analysis functions
│   └── stripe.ts   # Stripe integration
└── supabase/
    └── migrations/  # Database migrations
```

## Next Steps

1. Set up your API keys
2. Run the database migration
3. Test locally
4. Deploy to Vercel
5. Start getting customers!

## Support

For issues or questions, check the documentation or open an issue.
