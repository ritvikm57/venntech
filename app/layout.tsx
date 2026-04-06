import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Venntech | Advanced Composites & HVAC Engineering',
  description: 'Engineering advanced composite and HVAC systems trusted in defence and built for global markets. 16+ years of experience in defence-grade manufacturing.',
  keywords: 'composites, HVAC, engineering, defence, blowers, coolers, India',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Venntech | Advanced Composites & HVAC Engineering',
    description: 'Trusted in Defence. Built for the World.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
