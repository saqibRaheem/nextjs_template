import { CheckCircle, Code, Zap, Shield } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const technologies = [
  'Next.js 13',
  'React 18',
  'JSX',
  'Redux Toolkit',
  'Tailwind CSS',
  'shadcn/ui',
  'Lucide Icons',
  'Jest',
  'React Testing Library',
];

const features = [
  {
    title: 'Modern Architecture',
    description: 'Built with the latest React patterns and Next.js app router for optimal performance.',
    icon: Code,
  },
  {
    title: 'JSX Support',
    description: 'Full JSX implementation with proper configuration throughout the entire application.',
    icon: Shield,
  },
  {
    title: 'Performance First',
    description: 'Optimized for Core Web Vitals with automatic code splitting and image optimization.',
    icon: Zap,
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <PageHeader
        title="About NextTemplate"
        description="A comprehensive, production-ready Next.js template designed for modern web development with JSX."
      />

      {/* Overview Section */}
      <section className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Built for Developers</h2>
            <p className="text-lg text-muted-foreground">
              NextTemplate is more than just a starter template. It's a carefully crafted 
              foundation that incorporates industry best practices, modern tooling, and 
              production-ready patterns to help you build exceptional web applications with JSX.
            </p>
            <p className="text-lg text-muted-foreground">
              Every component, utility, and configuration has been thoughtfully designed 
              to provide a seamless developer experience while maintaining code quality 
              and performance standards.
            </p>
          </div>
          
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span>{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
          <p className="text-muted-foreground">
            Built with the most popular and battle-tested technologies
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* What's Included Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">What's Included</h2>
          <p className="text-muted-foreground">
            Everything you need to start building immediately
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Redux Toolkit for state management</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Theme system with dark/light mode</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Responsive navigation with mobile menu</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Reusable UI components</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Developer Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>JSX configuration</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>ESLint and Prettier setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Testing framework ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Organized folder structure</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}