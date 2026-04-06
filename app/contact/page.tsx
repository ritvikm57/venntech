import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import ImagePlaceholder from '../components/ImagePlaceholder';

export const metadata = {
  title: 'Contact & RFQ | Venntech',
  description: 'Contact Venntech for quotes, technical support, and partnership inquiries. Submit your RFQ online or reach out directly.',
};

export default function Contact() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-navy text-white section-padding">
        <div className="container-venn">
          <h1 className="text-white mb-6">Contact & RFQ</h1>
          <p className="text-xl text-slate-200 max-w-3xl">
            Get in touch with our team. We're here to discuss your requirements, provide quotes, and explore partnership opportunities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white section-padding border-b border-slate-200">
        <div className="container-venn">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-navy font-bold mb-2">📍 Headquarters</h3>
                <p className="text-steel-grey text-sm leading-relaxed">
                  Venntech Private Limited<br />
                  Bangalore, Karnataka<br />
                  India - 560001
                </p>
              </div>

              <div>
                <h3 className="text-navy font-bold mb-2">📧 Email</h3>
                <p className="text-sm">
                  <a href="mailto:info@venntech.com" className="text-teal hover:underline">
                    info@venntech.com
                  </a><br />
                  <a href="mailto:sales@venntech.com" className="text-teal hover:underline">
                    sales@venntech.com
                  </a><br />
                  <a href="mailto:support@venntech.com" className="text-teal hover:underline">
                    support@venntech.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-navy font-bold mb-2">📞 Phone</h3>
                <p className="text-sm">
                  <a href="tel:+919876543210" className="text-teal hover:underline">
                    +91 98765 43210
                  </a><br />
                  <span className="text-steel-grey">Mon-Fri, 9:00 AM - 6:00 PM IST</span>
                </p>
              </div>

              <div className="bg-light-grey rounded-lg p-6">
                <h3 className="text-navy font-bold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/products" className="text-teal hover:underline">
                      → View Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/capabilities" className="text-teal hover:underline">
                      → Engineering Capabilities
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries" className="text-teal hover:underline">
                      → Industries We Serve
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* RFQ Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-light-grey section-padding border-b border-slate-200">
        <div className="container-venn">
          <h2 className="text-center text-navy mb-12">Visit Us</h2>
          <div className="rounded-lg overflow-hidden border border-slate-200">
            <ImagePlaceholder type="custom" aspectRatio="16 / 9" className="w-full" />
          </div>
          <p className="text-center text-steel-grey text-sm mt-4">
            Interactive Google Maps or location map will be displayed here
          </p>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="bg-white section-padding border-b border-slate-200">
        <div className="container-venn">
          <h2 className="text-center text-navy mb-12">Other Ways to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-shadow border border-slate-200 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-navy font-bold mb-2">Sales Inquiry</h3>
              <p className="text-steel-grey text-sm mb-3">
                <a href="mailto:sales@venntech.com" className="text-teal hover:underline">
                  sales@venntech.com
                </a>
              </p>
              <p className="text-xs text-slate-600">Response time: 24 hours</p>
            </div>

            <div className="card-shadow border border-slate-200 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-navy font-bold mb-2">Technical Support</h3>
              <p className="text-steel-grey text-sm mb-3">
                <a href="mailto:support@venntech.com" className="text-teal hover:underline">
                  support@venntech.com
                </a>
              </p>
              <p className="text-xs text-slate-600">Expert guidance on products</p>
            </div>

            <div className="card-shadow border border-slate-200 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-navy font-bold mb-2">Partnerships</h3>
              <p className="text-steel-grey text-sm mb-3">
                <a href="mailto:partnerships@venntech.com" className="text-teal hover:underline">
                  partnerships@venntech.com
                </a>
              </p>
              <p className="text-xs text-slate-600">Distributor & partner programs</p>
            </div>

            <div className="card-shadow border border-slate-200 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="text-navy font-bold mb-2">Careers</h3>
              <p className="text-steel-grey text-sm mb-3">
                <a href="mailto:careers@venntech.com" className="text-teal hover:underline">
                  careers@venntech.com
                </a>
              </p>
              <p className="text-xs text-slate-600">Join our team</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Support */}
      <section className="bg-light-grey section-padding border-b border-slate-200">
        <div className="container-venn">
          <h2 className="text-center text-navy mb-12">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-navy font-bold mb-2">How long does the RFQ process take?</h3>
              <p className="text-steel-grey text-sm">
                Most RFQs receive an initial response within 24 hours. Quote turnaround is typically 3-5 business days depending on complexity.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-navy font-bold mb-2">Do you offer custom manufacturing?</h3>
              <p className="text-steel-grey text-sm">
                Yes, custom engineering and manufacturing is one of our core strengths. Discuss your requirements with our engineering team.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-navy font-bold mb-2">What is your minimum order quantity?</h3>
              <p className="text-steel-grey text-sm">
                MOQ varies by product. We handle everything from small prototype runs to large-scale production. Discuss with sales team.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-navy font-bold mb-2">Do you provide technical support after delivery?</h3>
              <p className="text-steel-grey text-sm">
                Absolutely. We provide comprehensive technical support, training, and after-sales service for all products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy text-white section-padding text-center">
        <div className="container-venn">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            Submit your requirements above or reach out directly to our team.
          </p>
          <Link href="#" className="btn-primary">
            Start Your RFQ
          </Link>
        </div>
      </section>
    </div>
  );
}
