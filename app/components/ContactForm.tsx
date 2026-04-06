'use client';

import Link from 'next/link';
import { useState } from 'react';

interface FormData {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  productInterest: string;
  message: string;
  fileUpload: string | null;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    productInterest: '',
    message: '',
    fileUpload: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileUpload: e.target.files![0].name }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        country: '',
        email: '',
        phone: '',
        productInterest: '',
        message: '',
        fileUpload: null,
      });
    }, 3000);
  };

  return (
    <div className="border border-slate-200 rounded-lg p-8">
      <h2 className="text-navy font-bold mb-6">Request for Quote (RFQ)</h2>
      
      {submitted && (
        <div className="mb-6 p-4 bg-teal text-white rounded-lg">
          ✓ Thank you! Your RFQ has been received. We'll contact you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-slate-700 font-semibold mb-2 text-sm">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-slate-700 font-semibold mb-2 text-sm">
              Company Name *
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal"
              placeholder="Your Company"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-slate-700 font-semibold mb-2 text-sm">
              Country *
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal"
              placeholder="Your Country"
            />
          </div>
          <div>
            <label className="block text-slate-700 font-semibold mb-2 text-sm">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-2 text-sm">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-2 text-sm">
            Product Interest
          </label>
          <select
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal"
          >
            <option value="">Select a product category</option>
            <option value="composite">Composite Systems</option>
            <option value="hvac">HVAC Metal Systems</option>
            <option value="custom">Custom Engineering</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-2 text-sm">
            Details & Requirements *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal resize-none"
            placeholder="Describe your requirements, application, and any technical specifications..."
          />
        </div>

        <div>
          <label className="block text-slate-700 font-semibold mb-2 text-sm">
            Upload Drawings/Specs (Optional)
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal text-sm"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg"
          />
          <p className="text-xs text-steel-grey mt-1">Accepted: PDF, DOC, XLS, DWG (Max 10MB)</p>
        </div>

        <div>
          <button
            type="submit"
            className="w-full btn-primary py-3 font-semibold"
          >
            Submit RFQ
          </button>
        </div>

        <p className="text-xs text-steel-grey">
          * Required fields. We respect your privacy and will only use your information to respond to your inquiry.
        </p>
      </form>
    </div>
  );
}
