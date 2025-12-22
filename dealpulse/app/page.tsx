import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">DealPulse</div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI-Powered Deal Intelligence
          <br />
          for Enterprise Sales
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform meeting recordings, emails, and notes into actionable insights.
          Close more deals with AI-powered risk analysis and next-step recommendations.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
            </Button>
          </Link>
          <Link href="#demo">
            <Button size="lg" variant="outline" className="text-lg px-8">
              See Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Risk Scoring</CardTitle>
              <CardDescription>
                Get instant deal risk scores (0-100) with detailed explanations
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Next Actions</CardTitle>
              <CardDescription>
                Receive prioritized, specific steps to move deals forward
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Stakeholder Mapping</CardTitle>
              <CardDescription>
                Identify key players, their influence, and concerns automatically
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Upload Your Data</h3>
            <p className="text-gray-600">
              Upload meeting recordings, paste email threads, or input deal notes
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">AI Analysis</h3>
            <p className="text-gray-600">
              Our AI analyzes everything and generates comprehensive insights
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Take Action</h3>
            <p className="text-gray-600">
              Get risk scores, next steps, stakeholder maps, and follow-up emails
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Perfect for small teams</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$199</span>
                <span className="text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>50 analyses per month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Unlimited deals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Email support</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="border-blue-500 border-2">
            <CardHeader>
              <CardTitle>Professional</CardTitle>
              <CardDescription>For growing sales teams</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$499</span>
                <span className="text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>200 analyses per month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Unlimited deals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Export to PDF</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$999</span>
                <span className="text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Unlimited analyses</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Unlimited deals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button className="w-full">Contact Sales</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>How accurate is the risk scoring?</CardTitle>
              <CardDescription>
                Our AI analyzes multiple signals including stakeholder engagement, timeline indicators, and budget signals to provide accurate risk assessments.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What file formats do you support?</CardTitle>
              <CardDescription>
                We support audio/video recordings, PDFs, and text input. Email threads can be pasted directly.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Is my data secure?</CardTitle>
              <CardDescription>
                Yes, all data is encrypted in transit and at rest. We use enterprise-grade security and never share your data.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Can I export the analyses?</CardTitle>
              <CardDescription>
                Yes, Professional and Enterprise plans include PDF export functionality.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Do you offer a free trial?</CardTitle>
              <CardDescription>
                Yes, all plans include a 14-day free trial. No credit card required.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 DealPulse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
