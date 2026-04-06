import Link from 'next/link';
import CTASection from '../components/CTASection';
import ImagePlaceholder from '../components/ImagePlaceholder';

export const metadata = {
  title: 'Engineering Capabilities | Venntech',
  description: 'Venntech\'s advanced composite fabrication, HVAC design, and custom engineering capabilities serving global industries.',
};

export default function Capabilities() {
  const capabilities = [
    {
      icon: '🔧',
      title: 'Composite Fabrication',
      description: 'Advanced FRP and composite manufacturing using hand lay-up, infusion, and compression molding techniques.',
      details: [
        'Hand lay-up construction for custom shapes',
        'Resin infusion for high-strength components',
        'Compression molding for precision parts',
        'Custom curing and post-processing',
        'CNC machining and finishing',
      ],
    },
    {
      icon: '❄️',
      title: 'HVAC System Design',
      description: 'CAD-driven design of air treatment, cooling, and filtration systems optimized for application requirements.',
      details: [
        '3D CAD modeling and design',
        'Thermal and pressure analysis',
        'Filtration efficiency calculations',
        'Flow dynamics simulation',
        'Prototype testing and validation',
      ],
    },
    {
      icon: '⚙️',
      title: 'Custom Engineering',
      description: 'End-to-end custom design and manufacturing tailored to unique application challenges and specifications.',
      details: [
        'Concept development and feasibility studies',
        'Material selection and analysis',
        'Design optimization and FEA',
        'Prototype build and field testing',
        'Production scaling and validation',
      ],
    },
    {
      icon: '🛡️',
      title: 'Corrosion Resistance',
      description: 'Advanced materials and surface treatments for extended equipment lifespan in harsh environments.',
      details: [
        'Composite material selection for durability',
        'Stainless steel and specialized alloys',
        'Protective coating systems',
        'Saltwater and chemical resistance testing',
        'Accelerated aging testing',
      ],
    },
    {
      icon: '📈',
      title: 'Scalable Manufacturing',
      description: 'State-of-the-art facilities capable of handling both prototype and large-scale production efficiently.',
      details: [
        'Prototype and low-volume production',
        'Small to medium batch manufacturing',
        'Industrial-scale production runs',
        'Lean manufacturing principles',
        'Inventory and supply chain optimization',
      ],
    },
    {
      icon: '✅',
      title: 'Quality Assurance',
      description: 'Rigorous testing and validation ensuring defence-grade quality standards on every component.',
      details: [
        'Material testing and certification',
        'Dimensional quality control',
        'Pressure and load testing',
        'Environmental stress testing',
        'Full traceability and documentation',
      ],
    },
  ];

  const manufacturingProcess = [
    {
      step: 1,
      title: 'Consultation & Design',
      description: 'Understand requirements and engineer initial design concepts',
    },
    {
      step: 2,
      title: 'Material Selection',
      description: 'Choose optimal materials based on application and environment',
    },
    {
      step: 3,
      title: 'Prototype Development',
      description: 'Build and test prototype to validate design and performance',
    },
    {
      step: 4,
      title: 'Optimization',
      description: 'Refine design based on test results and feedback',
    },
    {
      step: 5,
      title: 'Production Setup',
      description: 'Prepare manufacturing process and quality procedures',
    },
    {
      step: 6,
      title: 'Manufacturing',
      description: 'Execute production with rigorous quality control',
    },
    {
      step: 7,
      title: 'Testing & Certification',
      description: 'Final testing and compliance certification',
    },
    {
      step: 8,
      title: 'Delivery & Support',
      description: 'Timely delivery and ongoing technical support',
    },
  ];

  const testingCapabilities = [
    'Tensile and compression testing',
    'Impact and fatigue testing',
    'Pressure vessel testing',
    'Thermal cycling and shock',
    'Saltwater immersion testing',
    'Chemical resistance testing',
    'Vibration and acoustic testing',
    'Material composition analysis',
  ];

  const certifications = [
    'ISO 9001:2015 – Quality Management',
    'ISO 14001:2015 – Environmental Management',
    'AS9100 – Aerospace Quality Standards',
    'Defence Export Approved Vendor',
    'NADCAP Certifications',
    'International Safety Standards',
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-navy text-white section-padding">
        <div className="container-venn">
          <h1 className="text-white mb-6">Engineering Capabilities</h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            Advanced manufacturing and engineering expertise spanning composite fabrication, HVAC system design, and custom solutions for defence-grade applications.
          </p>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="bg-white section-padding border-b border-slate-200">
        <div className="container-venn">
          <h2 className="text-center text-navy mb-12">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, idx) => (
              <div key={idx} className="card-shadow border border-slate-200 rounded-lg p-8 bg-white">
                <div className="text-5xl mb-4">{capability.icon}</div>
                <h3 className="text-navy font-bold mb-2">{capability.title}</h3>
                <p className="text-steel-grey text-sm mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.details.map((detail, detailIdx) => (
                    <li key={detailIdx} className="flex items-start space-x-2 text-sm">
                      <span className="text-teal flex-shrink-0">✓</span>
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="bg-light-grey section-padding border-b border-slate-200">
        <div className="container-venn">
          <h2 className="text-center text-navy mb-12">Our Engineering Process</h2>
          
          {/* Process Flow Diagram */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2">
              {manufacturingProcess.map((process, idx) => (
                <div key={process.step} className="flex flex-col">
                  <div className="bg-white rounded-lg border-2 border-navy p-4 md:p-6 text-center card-shadow">
                    <div className="text-3xl font-bold text-teal mb-2">{process.step}</div>
                    <h4 className="text-navy font-bold text-sm md:text-base mb-2">{process.title}</h4>
                    <p className="text-steel-grey text-xs md:text-sm">{process.description}</p>
                  </div>
                  {idx < manufacturingProcess.length - 1 && (
                    <div className="hidden md:flex justify-center my-2">
                      <div className="text-teal text-2xl">→</div>
                    </div>
                  )}
                  {idx < manufacturingProcess.length - 1 && idx % 4 === 3 && (
                    <div className="md:hidden col-span-2 flex justify-center">
                      <div className="text-teal text-2xl">↓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Process Description */}
          <div className="bg-white rounded-lg border border-slate-200 p-8 md:p-12">
            <h3 className="text-navy font-bold mb-4">Phase-by-Phase Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div>
                <p className="mb-3"><strong className="text-navy">Initial Consultation:</strong> We listen to your requirements, understand your application environment, and identify optimal solutions.</p>
                <p className="mb-3"><strong className="text-navy">Design & Development:</strong> Our engineering team creates detailed designs with 3D modeling, analysis, and simulations to ensure performance.</p>
                <p><strong className="text-navy">Prototype Testing:</strong> We build prototypes and conduct rigorous testing to validate design assumptions before production.</p>
              </div>
              <div>
                <p className="mb-3"><strong className="text-navy">Optimization:</strong> Based on test results, we refine designs for optimal performance, cost efficiency, and manufacturability.</p>
                <p className="mb-3"><strong className="text-navy">Production Scaling:</strong> We establish manufacturing processes that maintain quality at scale, from low-volume to high-volume production.</p>
                <p><strong className="text-navy">Quality & Support:</strong> Final components undergo comprehensive testing and certification before delivery, with ongoing technical support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & Quality */}
      <section className="bg-white section-padding border-b border-slate-200">
        <div className="container-venn">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-navy mb-6">Testing & Quality Assurance</h2>
              <p className="text-steel-grey text-lg leading-relaxed mb-6">
                Every component undergoes comprehensive testing to ensure it meets defence-grade standards and performs reliably in its intended application.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {testingCapabilities.map((test, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <span className="text-teal text-lg flex-shrink-0">✓</span>
                    <span className="text-slate-700 text-sm">{test}</span>
                  </div>
                ))}
              </div>
              <p className="text-steel-grey text-sm mt-6">All testing is documented and traced, providing full traceability and certification for regulatory compliance.</p>
            </div>
            <div>
              <ImagePlaceholder type="industry" />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="bg-light-grey section-padding border-b border-slate-200">
        <div className="container-venn">
          <h2 className="text-center text-navy mb-12">Certifications & Standards</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg border border-slate-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <span className="text-teal text-2xl flex-shrink-0">✓</span>
                  <span className="text-slate-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Capabilities */}
      <section className="bg-white section-padding border-b border-slate-200">
        <div className="container-venn">
          <h2 className="text-center text-navy mb-12">Investing in Tomorrow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-shadow border border-slate-200 p-8 rounded-lg">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-navy font-bold mb-2">R&D Initiatives</h3>
              <p className="text-steel-grey">Continuous investment in next-generation materials and manufacturing techniques.</p>
            </div>
            <div className="card-shadow border border-slate-200 p-8 rounded-lg">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-navy font-bold mb-2">Sustainability</h3>
              <p className="text-steel-grey">Developing eco-friendly composites and minimizing manufacturing waste.</p>
            </div>
            <div className="card-shadow border border-slate-200 p-8 rounded-lg">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-navy font-bold mb-2">Digital Integration</h3>
              <p className="text-steel-grey">IoT and data analytics for predictive maintenance and performance optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Leverage Our Engineering Expertise"
        subtitle="Discuss your technical challenges with our team of expert engineers."
        primaryBtnText="Schedule a Consultation"
        primaryBtnHref="/contact"
        secondaryBtnText="View Products"
        secondaryBtnHref="/products"
        backgroundColor="navy"
      />
    </div>
  );
}
