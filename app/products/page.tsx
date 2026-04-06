import Link from 'next/link';
import CTASection from '../components/CTASection';
import ImagePlaceholder from '../components/ImagePlaceholder';

export const metadata = {
  title: 'Products | Venntech - Composite & HVAC Systems',
  description: 'Explore Venntech\'s range of FRP composite systems and HVAC metal systems for defence, aerospace, and industrial applications.',
};

export default function Products() {
  const compositeProducts = [
    {
      id: 1,
      name: 'FRP Centrifugal Blowers',
      specs: ['Corrosion-resistant', 'High efficiency', 'Custom sizes'],
      description: 'Advanced fibre-reinforced plastic centrifugal blowers engineered for harsh environments. Ideal for chemical, marine, and aerospace applications where corrosion resistance is critical.',
    },
    {
      id: 2,
      name: 'Critical Composite Components',
      specs: ['Precision tolerances', 'Lightweight', 'High strength'],
      description: 'Bespoke composite structures for mission-critical applications. Including brackets, housings, and structural elements for defence and aerospace systems.',
    },
    {
      id: 3,
      name: 'FRP Ductwork & Piping',
      specs: ['Chemical resistant', 'Fire retardant', 'Custom configurations'],
      description: 'Durable composite ductwork and piping systems for air treatment, cooling, and ventilation applications in industrial and marine environments.',
    },
  ];

  const hvacProducts = [
    {
      id: 4,
      name: 'Air Treatment Units (ATUs)',
      specs: ['Multi-stage filtration', 'High efficiency', 'Low maintenance'],
      description: 'Comprehensive air treatment solutions with activated carbon, HEPA, and pre-filters. Engineered for clean-room and industrial applications.',
    },
    {
      id: 5,
      name: 'Coolers & Heat Exchangers',
      specs: ['Aluminum / stainless steel', 'Compact design', 'High performance'],
      description: 'Precision-engineered heat exchange systems for cooling hydraulic, pneumatic, and process fluids in demanding industrial and defence applications.',
    },
    {
      id: 6,
      name: 'Industrial Silencers',
      specs: ['Low pressure drop', 'Acoustic rated', 'Custom sizes'],
      description: 'Advanced noise reduction systems for compressors, pneumatic systems, and exhaust applications. Engineered for aerospace and naval vessels.',
    },
    {
      id: 7,
      name: 'Moisture Separators',
      specs: ['High efficiency', 'Automated drains', 'Low maintenance'],
      description: 'Efficient moisture removal systems for compressed air networks. Critical for precision pneumatic instruments and clean manufacturing environments.',
    },
    {
      id: 8,
      name: 'Pressure Vessels',
      specs: ['ASME certified', 'Stainless steel', 'Customizable'],
      description: 'Custom-designed and manufactured pressure vessels for compressed air, nitrogen, and gas storage in industrial and offshore applications.',
    },
    {
      id: 9,
      name: 'Custom HVAC Assemblies',
      specs: ['Integrated systems', 'Modular design', 'Field-tested'],
      description: 'Complete HVAC system assemblies combining filtration, cooling, and treatment. Ready for integration into larger systems or shipboard installations.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-navy text-white section-padding">
        <div className="container-venn">
          <h1 className="text-white mb-6">Our Products</h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            Engineered composite and HVAC systems designed for defence-grade reliability and global industrial standards.
          </p>
        </div>
      </section>

      {/* Composite Systems */}
      <section className="bg-white section-padding border-b border-slate-200" id="composite">
        <div className="container-venn">
          <div className="mb-12">
            <h2 className="text-navy mb-4">Composite Systems</h2>
            <p className="text-steel-grey text-lg max-w-2xl">
              Advanced fibre-reinforced plastic (FRP) components engineered for corrosive and demanding environments across defence, aerospace, and industrial sectors.
            </p>
          </div>
          <div className="grid-products">
            {compositeProducts.map((product) => (
              <div key={product.id} className="card-shadow border border-slate-200 overflow-hidden transition-all hover:shadow-lg">
                <ImagePlaceholder type="card" />
                <div className="p-6">
                  <h3 className="text-navy font-bold mb-3">{product.name}</h3>
                  <p className="text-steel-grey text-sm mb-4">{product.description}</p>
                  <div className="mb-6 space-y-2">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <span className="text-teal">•</span>
                        <span className="text-slate-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/contact?product=${product.id}`} className="btn-primary text-sm flex-1 text-center">
                      Quote
                    </Link>
                    <a href="#" className="btn-secondary text-sm flex-1 text-center">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVAC Systems */}
      <section className="bg-light-grey section-padding border-b border-slate-200" id="hvac">
        <div className="container-venn">
          <div className="mb-12">
            <h2 className="text-navy mb-4">HVAC Metal Systems</h2>
            <p className="text-steel-grey text-lg max-w-2xl">
              Precision-engineered air treatment, cooling, and filtration systems built for industrial and defence applications with uncompromising reliability.
            </p>
          </div>
          <div className="grid-products">
            {hvacProducts.map((product) => (
              <div key={product.id} className="card-shadow bg-white border border-slate-200 overflow-hidden transition-all hover:shadow-lg">
                <ImagePlaceholder type="card" />
                <div className="p-6">
                  <h3 className="text-navy font-bold mb-3">{product.name}</h3>
                  <p className="text-steel-grey text-sm mb-4">{product.description}</p>
                  <div className="mb-6 space-y-2">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <span className="text-teal">•</span>
                        <span className="text-slate-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/contact?product=${product.id}`} className="btn-primary text-sm flex-1 text-center">
                      Quote
                    </Link>
                    <a href="#" className="btn-secondary text-sm flex-1 text-center">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="bg-white section-padding border-b border-slate-200">
        <div className="container-venn">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-navy mb-6">Custom Engineering Solutions</h2>
              <p className="text-steel-grey text-lg leading-relaxed mb-6">
                Not finding the exact solution? Our engineering team specializes in designing and manufacturing custom composite and HVAC systems tailored to your specific requirements and application challenges.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <span className="text-teal text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="text-slate-900 font-semibold">Design & Development</p>
                    <p className="text-steel-grey text-sm">CAD modeling, FEA analysis, and prototype validation</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teal text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="text-slate-900 font-semibold">Material Selection</p>
                    <p className="text-steel-grey text-sm">Expert guidance on composites, metals, and coatings for your environment</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-teal text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="text-slate-900 font-semibold">Testing & Certification</p>
                    <p className="text-steel-grey text-sm">Full compliance testing and documentation for defence and aerospace standards</p>
                  </div>
                </li>
              </ul>
              <Link href="/contact" className="btn-primary">
                Request Custom Solution
              </Link>
            </div>
            <div>
              <ImagePlaceholder type="industry" />
            </div>
          </div>
        </div>
      </section>

      {/* Datasheets & Technical Resources */}
      <section className="bg-light-grey section-padding border-b border-slate-200">
        <div className="container-venn">
          <h2 className="text-center text-navy mb-12">Technical Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-shadow bg-white p-6 border border-slate-200 text-center">
              <div className="text-4xl mb-3">📄</div>
              <h3 className="text-navy font-bold mb-2">Product Datasheets</h3>
              <p className="text-steel-grey text-sm mb-4">Download detailed specifications for all products</p>
              <a href="#" className="btn-secondary text-sm inline-block">Download</a>
            </div>
            <div className="card-shadow bg-white p-6 border border-slate-200 text-center">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-navy font-bold mb-2">Material Properties</h3>
              <p className="text-steel-grey text-sm mb-4">Technical data on composites and metal materials</p>
              <a href="#" className="btn-secondary text-sm inline-block">View Data</a>
            </div>
            <div className="card-shadow bg-white p-6 border border-slate-200 text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-navy font-bold mb-2">Certifications</h3>
              <p className="text-steel-grey text-sm mb-4">ISO, aerospace, and defence certifications</p>
              <a href="#" className="btn-secondary text-sm inline-block">Access</a>
            </div>
            <div className="card-shadow bg-white p-6 border border-slate-200 text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-navy font-bold mb-2">Technical Support</h3>
              <p className="text-steel-grey text-sm mb-4">Get expert advice on product selection</p>
              <Link href="/contact" className="btn-secondary text-sm inline-block">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Specify Venntech Products?"
        subtitle="Contact our sales team to get quotes, datasheets, and technical support."
        primaryBtnText="Request a Quote"
        primaryBtnHref="/contact"
        secondaryBtnText="Schedule a Call"
        secondaryBtnHref="/contact"
        backgroundColor="navy"
      />
    </div>
  );
}
