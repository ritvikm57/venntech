import Link from 'next/link';
import CTASection from '../components/CTASection';
import ImagePlaceholder from '../components/ImagePlaceholder';

export const metadata = {
  title: 'Industries | Venntech Engineering Solutions',
  description: 'Venntech serves defence, aerospace, railways, oil & gas, and cement industries with custom composite and HVAC solutions.',
};

const industries = [
  {
    id: 1,
    name: 'Defence & Naval Systems',
    icon: null,
    overview: 'Over 16 years of defence-sector credibility with proven reliability in mission-critical applications.',
    applications: [
      'Naval vessel HVAC and air treatment systems',
      'Defence aircraft composite components',
      'Submarine pneumatic systems',
      'Military vehicle cooling solutions',
      'Defence facility environmental systems',
    ],
    relevantProducts: [1, 2, 4, 5, 6],
    productNames: ['FRP Centrifugal Blowers', 'Critical Components', 'Air Treatment Units', 'Coolers', 'Silencers'],
  },
  {
    id: 2,
    name: 'Aerospace',
    icon: null,
    overview: 'Engineered solutions meeting AS9100 aerospace quality standards with precision manufacturing capabilities.',
    applications: [
      'Aircraft environmental control systems',
      'Engine compartment cooling systems',
      'Cabin air filtration units',
      'Composite fuselage components',
      'Landing gear systems',
    ],
    relevantProducts: [1, 3, 4, 7, 8],
    productNames: ['FRP Blowers', 'FRP Ductwork', 'Air Treatment', 'Moisture Separators', 'Custom Assemblies'],
  },
  {
    id: 3,
    name: 'Railways & Infrastructure',
    icon: null,
    overview: 'Robust systems for high-vibration, temperature-variable environments in modern rail and transit systems.',
    applications: [
      'Locomotive cooling and air treatment',
      'Coach ventilation systems',
      'Wayside infrastructure equipment',
      'Electrified track support systems',
      'Metro and transit HVAC systems',
    ],
    relevantProducts: [1, 4, 5, 6, 9],
    productNames: ['FRP Blowers', 'ATUs', 'Coolers', 'Silencers', 'Custom HVAC'],
  },
  {
    id: 4,
    name: 'Oil & Gas',
    icon: null,
    overview: 'Corrosion and pressure-resistant equipment for offshore platforms, refineries, and processing facilities.',
    applications: [
      'Offshore platform HVAC systems',
      'Refinery air treatment and cooling',
      'Wellhead auxiliary systems',
      'Separator and treatment equipment',
      'Storage facility ventilation',
    ],
    relevantProducts: [1, 2, 4, 5, 7],
    productNames: ['FRP Blowers', 'Composite Components', 'ATUs', 'Coolers', 'Vessels'],
  },
  {
    id: 5,
    name: 'Cement & Heavy Industries',
    icon: null,
    overview: 'Durable, maintenance-efficient systems for high-dust, abrasive, and extreme-temperature industrial environments.',
    applications: [
      'Cement kiln cooling and ventilation',
      'Dust collection and treatment systems',
      'Heat recovery systems',
      'Blower and compressor systems',
      'Pollution control equipment',
    ],
    relevantProducts: [1, 4, 5, 6, 8],
    productNames: ['FRP Blowers', 'ATUs', 'Coolers', 'Silencers', 'Pressure Vessels'],
  },
];

export default function Industries() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-white section-padding-lg border-b border-gray-200">
        <div className="container-venn">
          <div className="inline-block mb-6 px-4 py-2 bg-teal/10 rounded-full">
            <p className="text-teal font-bold text-sm uppercase tracking-wide">Sector Solutions</p>
          </div>
          <h1 className="text-navy mb-6">Industries We Serve</h1>
          <p className="text-xl text-slate-700 max-w-3xl leading-relaxed">
            Custom-engineered composite and HVAC solutions tailored to the unique demands of defence, aerospace, railways, oil & gas, and heavy industries.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="space-y-16">
            {industries.map((industry, idx) => (
              <div key={industry.id} className={idx % 2 === 0 ? 'bg-white p-8 rounded-lg' : 'bg-gray-50 p-8 rounded-lg'}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className={idx % 2 === 0 ? '' : 'lg:order-2'}>
                    <h2 className="text-navy mb-4">{industry.name}</h2>
                    <p className="text-slate-700 text-lg leading-relaxed mb-6">{industry.overview}</p>
                    
                    <h3 className="text-navy font-bold mb-4">Key Applications</h3>
                    <ul className="space-y-2 mb-8">
                      {industry.applications.map((app, appIdx) => (
                        <li key={appIdx} className="flex items-start space-x-3">
                          <span className="text-teal text-lg flex-shrink-0">•</span>
                          <span className="text-slate-700">{app}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3">
                      <Link href="/contact" className="btn-primary">
                        Discuss Your Needs
                      </Link>
                      <a href="#products" className="btn-secondary">
                        View Products
                      </a>
                    </div>
                  </div>
                  <div className={idx % 2 === 0 ? '' : 'lg:order-1'}>
                    <ImagePlaceholder type="industry" />
                  </div>
                </div>

                {/* Relevant Products */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-navy font-bold mb-4">Relevant Solutions</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.productNames.map((product, prodIdx) => (
                      <Link
                        key={prodIdx}
                        href="/products"
                        className="inline-block px-4 py-2 bg-gray-200 text-slate-700 rounded-full text-sm hover:bg-teal hover:text-white transition-colors"
                      >
                        {product}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Venntech for Your Industry */}
      <section className="bg-white section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-orange/10 rounded-full">
              <p className="text-orange font-bold text-sm uppercase tracking-wide">Why Venntech</p>
            </div>
            <h2 className="text-navy">Why Choose Venntech for Your Industry</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-base p-6">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-navy font-bold mb-2">Sector Expertise</h3>
              <p className="text-slate-700 text-sm">16+ years of industry-specific knowledge and proven applications.</p>
            </div>
            <div className="card-base p-6">
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="text-navy font-bold mb-2">Custom Solutions</h3>
              <p className="text-slate-700 text-sm">Engineered to your specific application and environmental requirements.</p>
            </div>
            <div className="card-base p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-navy font-bold mb-2">Standards Compliance</h3>
              <p className="text-slate-700 text-sm">ISO, AS9100, defence certifications, and international quality benchmarks.</p>
            </div>
            <div className="card-base p-6">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-navy font-bold mb-2">Technical Support</h3>
              <p className="text-slate-700 text-sm">Expert guidance from design through deployment and after-sales support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study / Success */}
      <section className="bg-gray-50 section-padding border-b border-gray-200">
        <div className="container-venn">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-orange/10 rounded-full">
              <p className="text-orange font-bold text-sm uppercase tracking-wide">Track Record</p>
            </div>
            <h2 className="text-navy">Our Track Record</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange mb-2">#1</div>
              <p className="text-slate-700 font-semibold mb-1">Defence Sector Trust</p>
              <p className="text-slate-700 text-sm">16+ years of proven reliability in mission-critical defence applications</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange mb-2">500+</div>
              <p className="text-slate-700 font-semibold mb-1">Successful Projects</p>
              <p className="text-slate-700 text-sm">Across defence, aerospace, railways, oil & gas, and industrial sectors</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange mb-2">30+</div>
              <p className="text-slate-700 font-semibold mb-1">Countries Served</p>
              <p className="text-slate-700 text-sm">Global export presence with international quality certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Let's Engineer Your Industry Solution"
        subtitle="Discuss your sector-specific requirements with our team of expert engineers."
        primaryBtnText="Start a Conversation"
        primaryBtnHref="/contact"
        secondaryBtnText="View All Products"
        secondaryBtnHref="/products"
        backgroundColor="white"
      />
    </div>
  );
}
