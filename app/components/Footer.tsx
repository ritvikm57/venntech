import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container-venn section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center text-white font-bold text-lg">
                V
              </div>
              <div>
                <p className="font-bold text-base">Venntech</p>
                <p className="text-xs text-slate-300">Advanced Composites & HVAC</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Engineering advanced composite and HVAC systems trusted in defence and built for global markets.
            </p>
          </div>

          {/* Products Link */}
          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/products#composite" className="hover:text-teal transition-colors">Composite Systems</Link></li>
              <li><Link href="/products#hvac" className="hover:text-teal transition-colors">HVAC Metal Systems</Link></li>
              <li><Link href="/contact" className="hover:text-teal transition-colors">Download Datasheets</Link></li>
            </ul>
          </div>

          {/* Company Link */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-teal transition-colors">About Us</Link></li>
              <li><Link href="/capabilities" className="hover:text-teal transition-colors">Capabilities</Link></li>
              <li><Link href="/industries" className="hover:text-teal transition-colors">Industries</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-white">Email:</span><br />
                <a href="mailto:info@venntech.com" className="hover:text-teal transition-colors">info@venntech.com</a>
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span><br />
                <a href="tel:+919876543210" className="hover:text-teal transition-colors">+91 98765 43210</a>
              </p>
              <p>
                <span className="font-semibold text-white">Location:</span><br />
                Bangalore, India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
            <p>&copy; {currentYear} Venntech Private Limited. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="https://linkedin.com/company/venntech" target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-teal transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
