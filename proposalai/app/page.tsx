import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FileText, Zap, Clock } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">ProposalAI</div>
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

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Generate Winning Proposals
          <br />
          in Minutes, Not Hours
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Upload your RFP and company assets. Our AI generates 80% complete proposals
          tailored to each client, saving you 20-40 hours per proposal.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Zap className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>80% Complete</CardTitle>
              <CardDescription>
                AI generates professional proposals that are 80% ready to send
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Save 20-40 Hours</CardTitle>
              <CardDescription>
                Cut proposal writing time from days to minutes
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <FileText className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Export Anywhere</CardTitle>
              <CardDescription>
                Export as PDF or Word, edit in our rich text editor
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">1</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Upload RFP & Assets</h3>
            <p className="text-gray-600">
              Upload the RFP and your company assets (past proposals, case studies, pricing)
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">2</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">AI Generation</h3>
            <p className="text-gray-600">
              Our AI analyzes requirements and generates a tailored proposal
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Edit & Export</h3>
            <p className="text-gray-600">
              Review, edit, and export as PDF or Word document
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Pay Per Proposal</CardTitle>
              <CardDescription>Perfect for occasional use</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-600">/proposal</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>One proposal</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Full AI generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>PDF & Word export</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="border-purple-500 border-2">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>For growing teams</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>10 proposals/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Unlimited assets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Priority support</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Agency</CardTitle>
              <CardDescription>For agencies</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$699</span>
                <span className="text-gray-600">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Unlimited proposals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button className="w-full">Contact Sales</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 ProposalAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
