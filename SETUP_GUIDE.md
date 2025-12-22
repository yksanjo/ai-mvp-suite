# Complete Setup Guide for AI MVP Suite

This guide will help you set up and deploy all three MVPs: DealPulse, ProposalAI, and ChurnGuard.

## 🎯 Quick Overview

You now have three complete, production-ready B2B SaaS MVPs:

1. **DealPulse** (`/dealpulse`) - Deal intelligence for enterprise sales
2. **ProposalAI** (`/proposalai`) - Proposal automation for professional services  
3. **ChurnGuard** (`/churnguard`) - Customer success AI for SaaS companies

Each MVP is fully functional with:
- ✅ Authentication (Supabase Auth)
- ✅ Database (Supabase PostgreSQL with RLS)
- ✅ AI Integration (Anthropic Claude API)
- ✅ Payment Processing (Stripe)
- ✅ Modern UI (Next.js 14 + Tailwind + Shadcn/ui)
- ✅ Deployment Ready (Vercel)

## 📋 Step-by-Step Setup

### Step 1: Choose Your MVP

Decide which MVP you want to launch first. You can set up all three, but focus on one to start.

### Step 2: Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click "New Project"
3. Fill in:
   - Project name: `dealpulse` (or `proposalai` or `churnguard`)
   - Database password: (save this!)
   - Region: Choose closest to you
4. Wait for project to be created (~2 minutes)

5. **Run the Database Migration:**
   - Go to SQL Editor in Supabase dashboard
   - Open the file: `[your-mvp]/supabase/migrations/001_initial_schema.sql`
   - Copy the entire SQL content
   - Paste into SQL Editor
   - Click "Run"

6. **Get Your API Keys:**
   - Go to Settings > API
   - Copy:
     - Project URL
     - `anon` `public` key
     - `service_role` `secret` key (keep this secret!)

### Step 3: Set Up Anthropic API

1. Go to [anthropic.com](https://anthropic.com) and sign up
2. Go to API Keys section
3. Create a new API key
4. Add credits to your account (minimum $5 recommended)
5. Copy your API key

### Step 4: Set Up Stripe (Optional for MVP Testing)

1. Go to [stripe.com](https://stripe.com) and create account
2. Go to Developers > API keys
3. Copy:
   - Publishable key
   - Secret key (test mode is fine for MVP)
4. For webhooks (later):
   - Go to Developers > Webhooks
   - Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
   - Copy webhook signing secret

### Step 5: Configure Environment Variables

1. Navigate to your MVP directory:
   ```bash
   cd dealpulse  # or proposalai or churnguard
   ```

2. Copy the example env file:
   ```bash
   cp .env.example .env.local
   ```

3. Open `.env.local` and fill in:

   ```env
   # Supabase (from Step 2)
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

   # Anthropic (from Step 3)
   ANTHROPIC_API_KEY=sk-ant-your-key

   # Stripe (from Step 4)
   STRIPE_SECRET_KEY=sk_test_your-key
   STRIPE_PUBLISHABLE_KEY=pk_test_your-key
   STRIPE_WEBHOOK_SECRET=whsec_your-secret

   # App URL
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

### Step 6: Install Dependencies & Run Locally

```bash
# Make sure you're in the MVP directory
cd dealpulse  # or proposalai or churnguard

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Step 7: Test the Application

1. **Sign Up**: Create a test account
2. **Test Core Features**:
   - DealPulse: Create a deal and run an analysis
   - ProposalAI: Upload an RFP and generate a proposal
   - ChurnGuard: Import customer data and run health analysis

### Step 8: Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Create repo on GitHub and push
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Next.js
     - Root Directory: `dealpulse` (or your MVP folder)
   - Add Environment Variables:
     - Add ALL variables from your `.env.local`
   - Click "Deploy"

3. **Update App URL:**
   - After deployment, update `NEXT_PUBLIC_APP_URL` in Vercel to your production URL
   - Redeploy

### Step 9: Customize Your MVP

1. **Branding:**
   - Update app name in `app/layout.tsx`
   - Change colors in `app/globals.css`
   - Update landing page copy in `app/page.tsx`

2. **Pricing:**
   - Update pricing in landing page
   - Create products in Stripe dashboard matching your pricing

3. **Domain:**
   - Add custom domain in Vercel settings
   - Update `NEXT_PUBLIC_APP_URL`

## 🔧 Common Issues & Solutions

### Issue: "Invalid API key" errors
**Solution**: Double-check your `.env.local` file. Make sure there are no extra spaces or quotes.

### Issue: Database errors
**Solution**: Make sure you ran the SQL migration in Supabase SQL Editor.

### Issue: Authentication not working
**Solution**: 
- Check Supabase project is active
- Verify RLS policies are enabled
- Check browser console for errors

### Issue: AI analysis fails
**Solution**:
- Verify Anthropic API key is correct
- Check you have credits in Anthropic account
- Check API usage limits

### Issue: Stripe payments not working
**Solution**:
- Use test mode keys for development
- Verify webhook endpoint is set up
- Check Stripe dashboard for webhook events

## 📊 Database Schema Overview

Each MVP has its own database schema:

- **DealPulse**: `deals`, `analyses`, `profiles`
- **ProposalAI**: `rfps`, `proposals`, `company_assets`, `profiles`
- **ChurnGuard**: `customers`, `health_analyses`, `interventions`, `profiles`

All use Row Level Security (RLS) for data protection.

## 🚀 Next Steps After Setup

1. **Get Your First Customer:**
   - Share with your network
   - Post on Product Hunt
   - Reach out to potential users

2. **Iterate Based on Feedback:**
   - Add requested features
   - Improve AI prompts
   - Optimize pricing

3. **Scale:**
   - Add more features
   - Integrate with other tools
   - Build marketing site

## 💡 Pro Tips

1. **Start with one MVP** - Don't try to launch all three at once
2. **Test thoroughly** - Make sure core flows work before sharing
3. **Customize branding** - Make it yours, not generic
4. **Monitor costs** - Keep an eye on Anthropic API usage
5. **Collect feedback** - Early users will tell you what to build next

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Anthropic API Docs](https://docs.anthropic.com)
- [Stripe Documentation](https://stripe.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

## ✅ Checklist

Before launching:

- [ ] Supabase project created and migration run
- [ ] Anthropic API key configured with credits
- [ ] Stripe account set up (test mode OK for MVP)
- [ ] Environment variables configured
- [ ] Application runs locally without errors
- [ ] Tested core user flows
- [ ] Deployed to Vercel
- [ ] Environment variables set in Vercel
- [ ] Custom domain configured (optional)
- [ ] Landing page customized
- [ ] Pricing updated
- [ ] Ready to share!

---

**You're all set! 🎉**

Each MVP is production-ready. Pick one, customize it, and start getting customers!

