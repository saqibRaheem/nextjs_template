import Link from 'next/link';
import { ArrowRight, Zap, Shield, Code, Palette, Package, TestTube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/common/PageHeader';
import { FeatureCard } from '@/components/common/FeatureCard';
import { Counter } from '@/components/Counter';

const features = [
  {
    title: 'Redux Toolkit',
    description: 'State management made simple with Redux Toolkit and JSX support.',
    icon: Package,
  },
  {
    title: 'Theme System',
    description: 'Light/dark mode with system preference detection and localStorage persistence.',
    icon: Palette,
  },
  {
    title: 'JSX Ready',
    description: 'Full JSX support with proper configuration throughout the application.',
    icon: Code,
  },
  {
    title: 'Performance Optimized',
    description: 'Built with Next.js best practices for optimal performance and SEO.',
    icon: Zap,
  },
  {
    title: 'Production Ready',
    description: 'Enterprise-grade architecture with proper error handling and testing setup.',
    icon: Shield,
  },
  {
    title: 'Testing Included',
    description: 'Jest and React Testing Library configured for comprehensive testing.',
    icon: TestTube,
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <PageHeader
          title="Next.js JSX Template"
          description="A production-ready template with Redux Toolkit, JSX, Tailwind CSS, and modern development practices."
        />
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/about">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>

      {/* Demo Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Redux Demo</h2>
          <p className="text-muted-foreground">
            Interactive counter to demonstrate Redux Toolkit integration
          </p>
        </div>
        <Counter />
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <p className="text-muted-foreground">
            Everything you need to build modern web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-8 py-16 bg-muted/30 rounded-lg">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clone this template and start building your next great application 
            with all the modern tools and best practices already configured.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/about">
              View Documentation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}