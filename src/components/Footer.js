import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { MapPin, Phone, Mail } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home',               href: '/' },
  { label: 'About Us',           href: '/about' },
  { label: 'Products',           href: '/products' },
  { label: 'Custom Fabrication', href: '/fabrication' },
  { label: 'Industries',         href: '/industries' },
  { label: 'Contact',            href: '/contact' },
]

const PRODUCT_CATEGORIES = [
  { label: 'Cooking Equipment', id: 'cooking-equipment' },
  { label: 'Refrigeration Equipment', id: 'refrigeration-equipment' },
  { label: 'Tables & Trolleys', id: 'tables-trolleys' },
  { label: 'Washing Equipment', id: 'washing-equipment' },
  { label: 'Display Counters', id: 'display-counters' },
  { label: 'Customize Equipment', id: 'customize-equipment' },
]

// Contact details — verified from catalogue PDF
const CONTACT = {
  address: 'Plot No. D 59–60, Sector-6, Noida, U.P. 201301',
  phone1:  '+91 7042933825',
  phone2:  '+91 7303090998',
  email:   'Info.nnpplindia@motherson.com',
  website: 'www.nirvanacommercialkitchen.com',
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white">

      {/* ── MAIN FOOTER GRID ─────────────────────────────────────────────── */}
      <div className="site-container py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Column 1 — Logo + About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 sm:mb-6 flex flex-col items-start">
              <Logo variant="stacked" theme="dark" size="lg" showTagline={false} />
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4 max-w-sm">
              Complete commercial kitchen solutions — Design, Supply, Installation and Support.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded border border-white/20 text-xs text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block" />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-red mb-4 sm:mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-white/70 hover:text-brand-red
                               transition-colors duration-200 flex items-center gap-2 py-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-red flex-shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Products */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-red mb-4 sm:mb-5">
              Products
            </h3>
            <ul className="space-y-2 text-xs">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="text-white/70 hover:text-brand-red
                               transition-colors duration-200 flex items-center gap-2 py-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-red flex-shrink-0" />
                    <span>{cat.label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/products"
                  className="text-brand-red hover:underline font-semibold flex items-center gap-1.5"
                >
                  <span>View All 18 Categories →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-red mb-4 sm:mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-red" />
                <span className="leading-snug">{CONTACT.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone1.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 hover:text-white transition-colors duration-200 py-0.5"
                >
                  <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>{CONTACT.phone1}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone2.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 hover:text-white transition-colors duration-200 py-0.5"
                >
                  <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>{CONTACT.phone2}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 hover:text-white transition-colors duration-200 break-all py-0.5"
                >
                  <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="btn-primary mt-5 sm:mt-6 inline-flex text-xs sm:text-sm"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ───────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="site-container py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs text-white/40">
            © {year} Nirvana Niche Products Private Limited. All rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs text-white/30">
            Proud to be part of Samvardhana Motherson &nbsp;·&nbsp; ISO 9001:2015
          </p>
        </div>
      </div>
    </footer>
  )
}
