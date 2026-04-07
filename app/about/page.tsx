import Link from 'next/link';
import CTASection from '../components/CTASection';
import ImagePlaceholder from '../components/ImagePlaceholder';

export const metadata = {
  title: 'About Venntech | Advanced Composites & HVAC Engineering',
  description: 'Discover Venntech\'s 16+ years of expertise in defence-grade composite and HVAC manufacturing. Our mission, values, and leadership.',
};

export default function About() {
  const values = [
    {
      icon: null,
      title: 'Engineering-First',
      description: 'Innovation and technical excellence drive every decision and product development.',
    },
    {
      icon: null,
      title: 'Quality & Trust',
      description: 'Defence-grade standards and rigorous quality assurance in every component.',
    },
    {
      icon: null,
      title: 'Global Vision',
      description: 'Building world-class manufacturing with international standards and export readiness.',
    },
  ];

  const certifications = [
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'Defence Export Approved Vendor Status',
    'AS9100 Aerospace Quality Standards',
    'International Safety Certifications',
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-white section-padding-lg border-b border-gray-200">
        <div className="container-venn">
          <div className="inline-block mb-6 px-4 py-2 bg-orange/10 rounded-full">
            <p className="text-orange font-bold text-sm uppercase tracking-wide">Our Story</p>
          </div>
          <h1 className="text-navy mb-6">About Venntech</h1>
          <p className="text-xl text-slate-700 max-w-3xl leading-relaxed">
            Over 16 years of pioneering expertise in advanced composite and HVAC systems engineering. Trusted by defence sectors, scaled for global markets.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-gray-50 section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-navy mb-6">Our Story</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Founded in 2008, Venntech began as a vision to engineer advanced composite systems for India's defence sector. With a small but dedicated team of engineers, we set out to deliver precision-engineered components that could withstand the most demanding conditions.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Over the past 16 years, we've grown from a niche manufacturer to a trusted OEM supplier for defence, aerospace, railways, and industrial applications. Our reputation for quality and innovation has opened doors to international partnerships and export opportunities.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                Today, we combine decades of manufacturing expertise with modern engineering capabilities, positioning Venntech as a global player in composite and HVAC solutions.
              </p>
            </div>
            <div>
              <ImagePlaceholder type="industry" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-white section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-teal/10 rounded-full">
              <p className="text-teal font-bold text-sm uppercase tracking-wide">Core Values</p>
            </div>
            <h2 className="text-navy mb-4">Our Mission & Values</h2>
          </div>
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h3 className="text-2xl text-navy font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              To engineer and manufacture world-class composite and HVAC systems that empower critical industries with reliable, innovative, and sustainable solutions while maintaining an unwavering commitment to defence-grade quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="card-base p-8">
                <h3 className="text-navy font-bold mb-3">{value.title}</h3>
                <p className="text-slate-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-orange/10 rounded-full">
              <p className="text-orange font-bold text-sm uppercase tracking-wide">Leadership</p>
            </div>
            <h2 className="text-navy">Leadership Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-base overflow-hidden">
              <ImagePlaceholder type="card" />
              <div className="p-6">
                <h3 className="text-navy font-bold mb-1">Rajesh Kumar</h3>
                <p className="text-teal text-sm font-semibold mb-3">Founder & Managing Director</p>
                <p className="text-slate-700 text-sm">20+ years of manufacturing expertise in composites and defence systems.</p>
              </div>
            </div>
            <div className="card-base overflow-hidden">
              <ImagePlaceholder type="card" />
              <div className="p-6">
                <h3 className="text-navy font-bold mb-1">Priya Sharma</h3>
                <p className="text-teal text-sm font-semibold mb-3">Chief Engineering Officer</p>
                <p className="text-slate-700 text-sm">Advanced materials and HVAC systems design with aerospace background.</p>
              </div>
            </div>
            <div className="card-base overflow-hidden">
              <ImagePlaceholder type="card" />
              <div className="p-6">
                <h3 className="text-navy font-bold mb-1">Vikram Desai</h3>
                <p className="text-teal text-sm font-semibold mb-3">Operations Director</p>
                <p className="text-slate-700 text-sm">Manufacturing excellence and quality assurance specialist.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="bg-white section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-teal/10 rounded-full">
              <p className="text-teal font-bold text-sm uppercase tracking-wide">Certifications</p>
            </div>
            <h2 className="text-navy">Certifications & Standards</h2>
          </div>
          <div className="max-w-3xl mx-auto card-base p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <span className="text-slate-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-700 text-sm mt-8 pt-8 border-t border-gray-200">
              Our commitment to maintaining the highest standards ensures that every component meets or exceeds international quality benchmarks, providing our clients with confidence in the reliability and durability of our products.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-orange/10 rounded-full">
              <p className="text-orange font-bold text-sm uppercase tracking-wide">Journey</p>
            </div>
            <h2 className="text-navy">Our Journey</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center text-white font-bold">2008</div>
                <div className="w-1 h-24 bg-gray-300 mt-2"></div>
              </div>
              <div className="pb-6">
                <h3 className="text-navy font-bold mb-2">Founded</h3>
                <p className="text-slate-700">Started as a composite manufacturing startup focused on defence sector applications.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center text-white font-bold">2012</div>
                <div className="w-1 h-24 bg-gray-300 mt-2"></div>
              </div>
              <div className="pb-6">
                <h3 className="text-navy font-bold mb-2">Expanded to HVAC Systems</h3>
                <p className="text-slate-700">Added metal systems and air treatment capabilities to serve industrial markets.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center text-white font-bold">2016</div>
                <div className="w-1 h-24 bg-gray-300 mt-2"></div>
              </div>
              <div className="pb-6">
                <h3 className="text-navy font-bold mb-2">International Certifications</h3>
                <p className="text-slate-700">Achieved ISO 9001, ISO 14001, and aerospace standards compliance.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center text-white font-bold">2020</div>
                <div className="w-1 h-24 bg-gray-300 mt-2"></div>
              </div>
              <div className="pb-6">
                <h3 className="text-navy font-bold mb-2">Global Export Initiatives</h3>
                <p className="text-slate-700">Began exporting to Asia-Pacific, Middle East, and European markets.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center text-white font-bold">2024</div>
              </div>
              <div>
                <h3 className="text-navy font-bold mb-2">Current State</h3>
                <p className="text-slate-700">Over 16 years of proven excellence with global reach and continued innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Join Our Growing Network"
        subtitle="Partner with Venntech for reliable, innovative composite and HVAC solutions."
        primaryBtnText="Contact Our Team"
        primaryBtnHref="/contact"
        secondaryBtnText="View Products"
        secondaryBtnHref="/products"
        backgroundColor="white"
      />
    </div>
  );
}
