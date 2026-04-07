'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container-venn flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-orange to-orange/80 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:shadow-md transition-shadow">
            V
          </div>
          <div className="hidden sm:block">
            <p className="text-navy font-bold text-base">Venntech</p>
            <p className="text-xs text-slate-600">Advanced Composites & HVAC</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <Link href="/about" className="nav-link px-4 py-2 rounded-lg hover:bg-gray-100">About</Link>
          <Link href="/products" className="nav-link px-4 py-2 rounded-lg hover:bg-gray-100">Products</Link>
          <Link href="/industries" className="nav-link px-4 py-2 rounded-lg hover:bg-gray-100">Industries</Link>
          <Link href="/capabilities" className="nav-link px-4 py-2 rounded-lg hover:bg-gray-100">Capabilities</Link>
          <Link href="/contact" className="nav-link px-4 py-2 rounded-lg hover:bg-gray-100">Contact</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-navy hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4">
          <div className="container-venn flex flex-col space-y-1">
            <Link href="/about" className="nav-link block px-4 py-3 rounded-lg hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/products" className="nav-link block px-4 py-3 rounded-lg hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link href="/industries" className="nav-link block px-4 py-3 rounded-lg hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
            <Link href="/capabilities" className="nav-link block px-4 py-3 rounded-lg hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>Capabilities</Link>
            <Link href="/contact" className="nav-link block px-4 py-3 rounded-lg hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <hr className="my-2 border-t border-gray-200" />
            <Link href="/contact" className="btn-primary block text-center py-3 mx-2" onClick={() => setMobileMenuOpen(false)}>
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
