import Link from 'next/link';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  backgroundColor?: 'navy' | 'steel-grey' | 'white';
}

export default function CTASection({
  title,
  subtitle,
  primaryBtnText = 'Request a Quote',
  primaryBtnHref = '/contact',
  secondaryBtnText = 'Learn More',
  secondaryBtnHref = '/about',
  backgroundColor = 'navy',
}: CTASectionProps) {
  const bgClass = backgroundColor === 'navy' ? 'bg-navy text-white' : backgroundColor === 'steel-grey' ? 'bg-steel-grey text-white' : 'bg-white text-slate-900';
  const textColorClass = backgroundColor === 'white' ? 'text-slate-600' : 'text-slate-200';

  return (
    <section className={`${bgClass} section-padding text-center`}>
      <div className="container-venn">
        <h2 className="text-white mb-4">{title}</h2>
        {subtitle && <p className={`${textColorClass} text-lg md:text-xl mb-8 max-w-2xl mx-auto`}>{subtitle}</p>}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link href={primaryBtnHref} className="btn-primary">
            {primaryBtnText}
          </Link>
          {secondaryBtnHref && (
            <Link href={secondaryBtnHref} className={backgroundColor === 'white' ? 'btn-secondary' : 'btn-outline-teal'}>
              {secondaryBtnText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
