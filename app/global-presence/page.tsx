import Link from 'next/link';
import CTASection from '../components/CTASection';
import ImagePlaceholder from '../components/ImagePlaceholder';

export const metadata = {
  title: 'Global Presence | Venntech Export & International Partnerships',
  description: 'Venntech\'s global expansion strategy, certified exports, and international standards compliance for worldwide markets.',
};

export default function GlobalPresence() {
  const regions = [
    {
      region: 'South Asia',
      countries: ['India (HQ)', 'Bangladesh', 'Sri Lanka'],
      focus: 'Domestic and regional manufacturing hub for defence and industrial sectors',
    },
    {
      region: 'Middle East',
      countries: ['UAE', 'Saudi Arabia', 'Oman'],
      focus: 'Oil & gas projects and aerospace applications',
    },
    {
      region: 'Southeast Asia & Asia-Pacific',
      countries: ['Singapore', 'Malaysia', 'Thailand', 'Indonesia'],
      focus: 'Aerospace, marine, and industrial applications',
    },
    {
      region: 'Europe',
      countries: ['UK', 'Germany', 'Netherlands'],
      focus: 'Advanced manufacturing partnerships and OEM specifications',
    },
  ];

  const exportReadiness = [
    {
      icon: '📋',
      title: 'Regulatory Compliance',
      description: 'Full adherence to international export regulations and defence equipment controls.',
    },
    {
      icon: '✈️',
      title: 'Logistics & Shipping',
      description: 'Experienced in international shipping, documentation, and customs clearance.',
    },
    {
      icon: '🔐',
      title: 'Quality Certifications',
      description: 'ISO, aerospace, and international standards recognized globally.',
    },
    {
      icon: '🤝',
      title: 'Partnership Network',
      description: 'Established relationships with distributors, integrators, and OEM partners.',
    },
  ];

  const standards = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'AS9100 Aerospace Standards',
    'Defence Export Approved Vendor (India)',
    'IATF 16949 Automotive',
    'IEC 61439 Electrical Safety',
    'ASME Pressure Vessel Standards',
    'International Maritime Standards',
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-white section-padding-lg border-b border-gray-200">
        <div className="container-venn">
          <div className="inline-block mb-6 px-4 py-2 bg-teal/10 rounded-full">
            <p className="text-teal font-bold text-sm uppercase tracking-wide">Worldwide Reach</p>
          </div>
          <h1 className="text-navy mb-6">Global Presence & Export Vision</h1>
          <p className="text-xl text-slate-700 max-w-3xl leading-relaxed">
            Venntech is expanding globally, serving international markets with certified exports and world-class engineering solutions.
          </p>
        </div>
      </section>

      {/* Current Presence */}
      <section className="bg-gray-50 section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-orange/10 rounded-full">
              <p className="text-orange font-bold text-sm uppercase tracking-wide">Presence</p>
            </div>
            <h2 className="text-navy">Our Global Footprint</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-6">
                {regions.map((item, idx) => (
                  <div key={idx} className="card-base p-6 rounded-lg">
                    <h3 className="text-navy font-bold mb-3">{item.region}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.countries.map((country, countryIdx) => (
                        <span key={countryIdx} className="inline-block px-3 py-1 bg-teal text-white text-xs font-semibold rounded-full">
                          {country}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-700 text-sm">{item.focus}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ImagePlaceholder type="industry" />
            </div>
          </div>

          {/* Map Placeholder Note */}
          <div className="card-base rounded-lg p-8 text-center">
            <p className="text-slate-700 text-sm">Interactive world map showing Venntech's global reach and distribution network will be displayed here</p>
          </div>
        </div>
      </section>

      {/* Manufacturing Hub */}
      <section className="bg-light-grey section-padding border-b border-slate-200">
        <div className="container-venn">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-navy mb-6">Indian Manufacturing Hub</h2>
              <p className="text-steel-grey text-lg leading-relaxed mb-6">
                Our primary manufacturing facility is based in Bangalore, India — a strategic location with access to skilled engineering talent, established supply chains, and proximity to key defence and industrial customers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <span className="text-teal text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="text-slate-900 font-semibold">Large-scale manufacturing capacity</p>
                    <p className="text-steel-grey text-sm">Equipped for prototype to large-volume production</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teal text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="text-slate-900 font-semibold">Technology infrastructure</p>
                    <p className="text-steel-grey text-sm">CNC machining, testing labs, quality control systems</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teal text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="text-slate-900 font-semibold">Skilled workforce</p>
                    <p className="text-steel-grey text-sm">Engineers, technicians, and quality specialists with defence sector experience</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teal text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="text-slate-900 font-semibold">Export infrastructure</p>
                    <p className="text-steel-grey text-sm">Established logistics, customs, and regulatory compliance frameworks</p>
                  </div>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Tour Our Facility
              </Link>
            </div>
            <div>
              <ImagePlaceholder type="industry" />
            </div>
          </div>
        </div>
      </section>

      {/* Export Readiness */}
      <section className="bg-white section-padding border-b border-slate-200">
        <div className="container-venn">
          <h2 className="text-center text-navy mb-12">Export Readiness & Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exportReadiness.map((item, idx) => (
              <div key={idx} className="card-shadow border border-slate-200 p-6 rounded-lg text-center bg-white">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-navy font-bold mb-2">{item.title}</h3>
                <p className="text-steel-grey text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Standards */}
      <section className="bg-light-grey section-padding border-b border-slate-200">
        <div className="container-venn">
          <h2 className="text-center text-navy mb-12">International Standards & Certifications</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg border border-slate-200 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {standards.map((standard, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal text-white">
                      ✓
                    </div>
                  </div>
                  <span className="text-slate-700 font-medium">{standard}</span>
                </div>
              ))}
            </div>
            <p className="text-steel-grey text-sm mt-8 pt-8 border-t border-slate-200">
              These international certifications ensure that Venntech products meet global quality, safety, and performance standards, facilitating seamless integration into international supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="bg-white section-padding border-b border-slate-200">
        <div className="container-venn">
          <h2 className="text-center text-navy mb-12">Strategic Partnerships & Distribution</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-shadow border border-slate-200 p-8 rounded-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-navy font-bold mb-3">OEM Partnerships</h3>
              <p className="text-steel-grey mb-4">
                Direct collaborations with original equipment manufacturers in aerospace, defence, and industrial sectors.
              </p>
              <Link href="/contact" className="text-teal font-semibold hover:underline text-sm">
                Discuss Partnership →
              </Link>
            </div>
            <div className="card-shadow border border-slate-200 p-8 rounded-lg">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-navy font-bold mb-3">Regional Distributors</h3>
              <p className="text-steel-grey mb-4">
                Established distribution networks in key markets across Asia, Middle East, and Europe for efficient market reach.
              </p>
              <Link href="/contact" className="text-teal font-semibold hover:underline text-sm">
                Become a Distributor →
              </Link>
            </div>
            <div className="card-shadow border border-slate-200 p-8 rounded-lg">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-navy font-bold mb-3">Technology Licensing</h3>
              <p className="text-steel-grey mb-4">
                Opportunities for technology transfer and joint ventures in emerging markets where local manufacturing is preferred.
              </p>
              <Link href="/contact" className="text-teal font-semibold hover:underline text-sm">
                Explore Options →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Export Journey */}
      <section className="bg-light-grey section-padding border-b border-slate-200">
        <div className="container-venn">
          <h2 className="text-center text-navy mb-12">Our Export Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-steel-grey leading-relaxed mb-6">
              What began as a domestic manufacturer serving India's defence sector has evolved into a global supplier. In 2020, we launched our international export program with a focus on quality, compliance, and long-term partnerships. Today, Venntech products reach over 30 countries across multiple continents.
            </p>
            <p className="text-lg text-steel-grey leading-relaxed mb-8">
              We're committed to growing this presence by:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 text-2xl flex-shrink-0">→</span>
                <span className="text-slate-700"><strong>Expanding manufacturing capacity</strong> to meet growing international demand</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 text-2xl flex-shrink-0">→</span>
                <span className="text-slate-700"><strong>Establishing regional offices</strong> in key markets for better customer support</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 text-2xl flex-shrink-0">→</span>
                <span className="text-slate-700"><strong>Investing in R&D</strong> to develop next-generation products</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-600 text-2xl flex-shrink-0">→</span>
                <span className="text-slate-700"><strong>Deepening partnerships</strong> with international distributors and technology partners</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Join Our Global Network"
        subtitle="Whether as a distributor, technology partner, or customer, we're ready to collaborate globally."
        primaryBtnText="Discuss Partnership"
        primaryBtnHref="/contact"
        secondaryBtnText="Request Export Info"
        secondaryBtnHref="/contact"
        backgroundColor="navy"
      />
    </div>
  );
}
