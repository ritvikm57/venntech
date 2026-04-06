'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container-venn flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-white font-bold text-lg">
            V
          </div>
          <div className="hidden md:block">
            <p className="text-navy font-bold text-sm md:text-base">Venntech</p>
            <p className="text-xs text-steel-grey">Advanced Composites & HVAC</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/products" className="nav-link">Products</Link>
          <Link href="/industries" className="nav-link">Industries</Link>
          <Link href="/capabilities" className="nav-link">Capabilities</Link>
          <Link href="/global-presence" className="nav-link">Global Presence</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-navy"
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
        <div className="lg:hidden bg-white border-t border-slate-200 py-4">
          <div className="container-venn flex flex-col space-y-4">
            <Link href="/about" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/products" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link href="/industries" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
            <Link href="/capabilities" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>Capabilities</Link>
            <Link href="/global-presence" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>Global Presence</Link>
            <Link href="/contact" className="nav-link block py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <hr className="my-2" />
            <Link href="/contact" className="btn-primary block text-center py-3" onClick={() => setMobileMenuOpen(false)}>
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
