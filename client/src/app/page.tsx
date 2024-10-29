import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Shield, Zap, Users, Code } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Unified Communications
              <span className="text-primary"> Made Simple</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              Streamline your business communications with our powerful SMS and
              Email management platform. Send, track, and analyze all your messages
              in one place.
            </p>
            <div className="flex gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="h-12 px-8">
                  Get Started
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="h-12 px-8">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Everything you need to manage communications
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<MessageCircle className="h-8 w-8" />}
              title="SMS Management"
              description="Send single or bulk SMS messages with advanced tracking and analytics."
            />
            <FeatureCard
              icon={<Mail className="h-8 w-8" />}
              title="Email Campaigns"
              description="Create and manage email campaigns with beautiful templates."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="AI Spam Protection"
              description="Advanced AI-powered spam filtering for clean communication."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="OTP Services"
              description="Secure OTP SMS service for authentication needs."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Contact Management"
              description="Organize and manage your contacts efficiently."
            />
            <FeatureCard
              icon={<Code className="h-8 w-8" />}
              title="API Access"
              description="Integrate our services into your applications."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}