import Link from 'next/link';
import CTASection from './components/CTASection';
import ImagePlaceholder from './components/ImagePlaceholder';

export default function Home() {
  const industries = [
    { name: 'Defence & Naval', icon: '⚓' },
    { name: 'Aerospace', icon: '✈️' },
    { name: 'Railways', icon: '🚂' },
    { name: 'Oil & Gas', icon: '⛽' },
    { name: 'Cement & Heavy', icon: '🏭' },
  ];

  const stats = [
    { number: '16+', label: 'Years of Experience' },
    { number: 'Defence', label: 'Grade Credibility' },
    { number: 'Custom', label: 'Engineering Solutions' },
    { number: 'Global', label: 'Export Ready' },
  ];

  const products = [
    {
      id: 1,
      name: 'FRP Centrifugal Blowers',
      category: 'Composite Systems',
      description: 'Engineered for corrosive environments in defence and aerospace applications',
    },
    {
      id: 2,
      name: 'Critical Composite Components',
      category: 'Composite Systems',
      description: 'High-performance structural components for mission-critical systems',
    },
    {
      id: 3,
      name: 'Air Treatment Units (ATUs)',
      category: 'HVAC Metal Systems',
      description: 'Advanced filtration and treatment systems for industrial applications',
    },
    {
      id: 4,
      name: 'Coolers & Heat Exchangers',
      category: 'HVAC Metal Systems',
      description: 'Precision-engineered cooling solutions for demanding environments',
    },
    {
      id: 5,
      name: 'Industrial Silencers',
      category: 'HVAC Metal Systems',
      description: 'Custom noise reduction systems for aerospace and naval applications',
    },
    {
      id: 6,
      name: 'Moisture Separators',
      category: 'HVAC Metal Systems',
      description: 'Reliable moisture removal for critical pneumatic systems',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white section-padding-lg border-b border-gray-200">
        <div className="container-venn">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-orange/10 rounded-full">
                <p className="text-orange font-bold text-sm uppercase tracking-wide">Engineering Excellence</p>
              </div>
              <h1 className="text-navy mb-6 leading-tight">
                Advanced Composite & HVAC Systems
              </h1>
              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Trusted in Defence. Built for the World. Over 16 years of expertise in manufacturing defence-grade composite and HVAC solutions with global export capability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Request a Quote
                </Link>
                <Link href="/products" className="btn-secondary text-center">
                  Explore Products
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImagePlaceholder type="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-gray-50 section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-teal/10 rounded-full">
              <p className="text-teal font-bold text-sm uppercase tracking-wide">Industries We Serve</p>
            </div>
            <h2 className="text-navy mb-4">Operating Across Critical Sectors</h2>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto">
              Our engineered solutions power mission-critical systems across diverse industries worldwide
            </p>
          </div>
          <div className="grid-industries">
            {industries.map((industry, idx) => (
              <Link
                key={idx}
                href={`/industries?sector=${industry.name.replace(/\s+/g, '-')}`}
                className="card-base p-8 hover:shadow-lg hover:border-teal transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h3 className="text-navy font-bold mb-2">{industry.name}</h3>
                <p className="text-slate-600 text-sm">Custom engineering solutions tailored to sector-specific demands</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Venntech Stats */}
      <section className="bg-white section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-orange/10 rounded-full">
              <p className="text-orange font-bold text-sm uppercase tracking-wide">Why Venntech</p>
            </div>
            <h2 className="text-navy">Trusted by Industry Leaders</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-item text-center">
                <div className="stat-number text-orange">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Teaser */}
      <section className="bg-gray-50 section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-teal/10 rounded-full">
              <p className="text-teal font-bold text-sm uppercase tracking-wide">Featured Solutions</p>
            </div>
            <h2 className="text-navy mb-4">Our Engineering Portfolio</h2>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto">
              A selection of our engineered solutions for composite and HVAC applications
            </p>
          </div>
          <div className="grid-products">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="card-base overflow-hidden hover:shadow-lg transition-all">
                <div className="relative overflow-hidden">
                  <ImagePlaceholder type="card" />
                </div>
                <div className="p-6">
                  <p className="text-teal text-xs font-bold uppercase tracking-wide mb-2">{product.category}</p>
                  <h3 className="text-navy font-bold mb-3">{product.name}</h3>
                  <p className="text-slate-600 text-sm mb-6">{product.description}</p>
                  <div className="flex gap-3">
                    <Link href={`/contact?product=${product.id}`} className="btn-primary text-sm">
                      Quote
                    </Link>
                    <Link href="/products" className="btn-outline-teal text-sm">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence Preview */}
      <section className="bg-white section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImagePlaceholder type="industry" />
            </div>
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-teal/10 rounded-full">
                <p className="text-teal font-bold text-sm uppercase tracking-wide">Global Reach</p>
              </div>
              <h2 className="text-navy mb-6">Worldwide Manufacturing & Export</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                With manufacturing facilities in India and export-ready certifications, Venntech is scaling its presence across Asia-Pacific, Europe, and the Middle East. Our commitment to international standards ensures seamless integration into global supply chains.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <span className="text-orange text-xl font-bold">✓</span>
                  <span className="text-slate-700">ISO & International Certifications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange text-xl font-bold">✓</span>
                  <span className="text-slate-700">Defence Export Approved Vendor Status</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-orange text-xl font-bold">✓</span>
                  <span className="text-slate-700">Logistics & Compliance Ready</span>
                </li>
              </ul>
              <Link href="/global-presence" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Preview */}
      <section className="bg-gray-50 section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-orange/10 rounded-full">
              <p className="text-orange font-bold text-sm uppercase tracking-wide">Capabilities</p>
            </div>
            <h2 className="text-navy mb-4">Engineering Prowess</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-base p-8">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-navy font-bold mb-3">Composite Fabrication</h3>
              <p className="text-slate-600 text-sm">Advanced FRP and composite manufacturing with precision tolerances for aerospace and defence applications.</p>
            </div>
            <div className="card-base p-8">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-navy font-bold mb-3">HVAC System Design</h3>
              <p className="text-slate-600 text-sm">Custom air treatment, cooling, and filtration systems engineered for demanding industrial environments.</p>
            </div>
            <div className="card-base p-8">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-navy font-bold mb-3">Custom Engineering</h3>
              <p className="text-slate-600 text-sm">Bespoke design and manufacturing solutions tailored to unique application requirements and specifications.</p>
            </div>
            <div className="card-base p-8">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-navy font-bold mb-3">Corrosion Resistance</h3>
              <p className="text-slate-600 text-sm">Advanced materials and coatings for extended equipment lifespan in harsh marine and industrial environments.</p>
            </div>
            <div className="card-base p-8">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-navy font-bold mb-3">Scalable Production</h3>
              <p className="text-slate-600 text-sm">State-of-the-art manufacturing facilities capable of handling both prototype and large-scale production runs.</p>
            </div>
            <div className="card-base p-8">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-navy font-bold mb-3">Quality Assurance</h3>
              <p className="text-slate-600 text-sm">Rigorous testing and validation protocols ensuring defence-grade quality standards on every component.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/capabilities" className="btn-secondary">
              View Full Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Partner with Venntech?"
        subtitle="Discuss your engineering requirements with our technical team. Defence-grade quality. Global standards compliance. Custom solutions for your challenges."
        primaryBtnText="Request a Quote"
        primaryBtnHref="/contact"
        secondaryBtnText="Browse Products"
        secondaryBtnHref="/products"
        backgroundColor="navy"
      />
    </div>
  );
}
