import './globals.css';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '@/providers/ReduxProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextTemplate - Production Ready Next.js Template',
  description: 'A comprehensive Next.js template with Redux Toolkit, JSX, Tailwind CSS, and modern development practices.',
  keywords: ['Next.js', 'React', 'JSX', 'Redux', 'Tailwind CSS', 'Template'],
  authors: [{ name: 'NextTemplate Team' }],
  openGraph: {
    title: 'NextTemplate - Production Ready Next.js Template',
    description: 'A comprehensive Next.js template with Redux Toolkit, JSX, Tailwind CSS, and modern development practices.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}