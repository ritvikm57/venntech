import Link from 'next/link';

interface CTAStripProps {
  heading: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: 'dark' | 'light';
}

export default function CTAStrip({
  heading,
  description,
  primaryButtonText = 'Get Started',
  primaryButtonHref = '/contact',
  secondaryButtonText = 'Learn More',
  secondaryButtonHref = '/products',
  variant = 'dark',
}: CTAStripProps) {
  const isDark = variant === 'dark';

  return (
    <section className={`py-16 md:py-20 ${isDark ? 'bg-navy-dark' : 'bg-off-white'}`}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className={`text-2xl md:text-4xl font-bold mb-4 ${isDark ? 'text-off-white' : 'text-navy-dark'}`}>
          {heading}
        </h2>
        {description && (
          <p className={`text-lg mb-8 ${isDark ? 'text-steel-light' : 'text-steel-dark'}`}>
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButtonHref}
            className="px-8 py-3 bg-teal hover:bg-teal-light text-navy-dark font-bold uppercase text-sm tracking-wide rounded transition-all duration-300 inline-block"
          >
            {primaryButtonText}
          </Link>
          <Link
            href={secondaryButtonHref}
            className={`px-8 py-3 border-2 font-bold uppercase text-sm tracking-wide rounded transition-all duration-300 inline-block ${
              isDark
                ? 'border-steel-light/30 text-off-white hover:border-teal hover:text-teal'
                : 'border-steel-dark text-navy-dark hover:bg-navy-dark hover:text-off-white'
            }`}
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
