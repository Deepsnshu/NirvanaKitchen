'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'
import {
  ChevronDown,
  Flame,
  Snowflake,
  Layers,
  Store,
  Waves,
  Menu,
  X,
  PhoneCall,
  ArrowRight,
} from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home',               href: '/' },
  { label: 'About Us',           href: '/about' },
  { label: 'Products',           href: '/products', hasDropdown: true },
  { label: 'Custom Fabrication', href: '/fabrication' },
  { label: 'Industries',         href: '/industries' },
  { label: 'Contact',            href: '/contact' },
]

const FEATURED_CATEGORIES = [
  { label: 'Cooking Equipment',       id: 'cooking-equipment',       icon: Flame,     desc: 'Heavy-duty ranges, stock pots & tandoors' },
  { label: 'Refrigeration Equipment', id: 'refrigeration-equipment', icon: Snowflake, desc: 'Commercial chillers, freezers & cold rooms' },
  { label: 'Custom SS Fabrication',   id: 'tables-trolleys',         icon: Layers,    desc: 'SS 304 worktables, trolleys & counters' },
  { label: 'Washing Equipment',       id: 'washing-equipment',       icon: Waves,     desc: 'Commercial sink units & pot wash stations' },
  { label: 'Display Counters',        id: 'display-counters',        icon: Store,     desc: 'Curved & flat glass heated display counters' },
  { label: 'Customize Equipment',     id: 'customize-equipment',     icon: Layers,    desc: 'Bespoke live food counters & catering stations' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
    setMobileProductsOpen(false)
  }, [pathname])

  // Helper for category navigation that notifies products page if already on /products
  const handleCategoryNav = (catId) => {
    setDropdownOpen(false)
    setMenuOpen(false)
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/products')) {
      window.dispatchEvent(new CustomEvent('nirvana-category-change', { detail: catId }))
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border/80 shadow-nav transition-all duration-300">
      <div className="site-container">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* ── LOGO ──────────────────────────────────────────────────────── */}
          <div className="flex-shrink-0">
            <Logo variant="horizontal" size="md" />
          </div>

          {/* ── DESKTOP NAV (Visible on lg: 1024px+) ───────────────────────── */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    ref={dropdownRef}
                    className="relative group"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`nav-link inline-flex items-center gap-1.5 py-2 font-medium text-sm transition-colors duration-200 ${
                        isActive || pathname.startsWith('/products') ? 'text-brand-red font-semibold' : 'text-brand-charcoal hover:text-brand-red'
                      }`}
                      aria-expanded={dropdownOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          dropdownOpen ? 'rotate-180 text-brand-red' : 'text-brand-charcoal/60'
                        }`}
                      />
                    </Link>

                    {/* Products Dropdown / Mega-Menu — safe max-width and bounds */}
                    <div
                      className={`absolute top-full -left-10 xl:-left-20 w-[580px] max-w-[calc(100vw-2.5rem)] bg-white rounded-2xl shadow-2xl border border-brand-border/80 p-5 transition-all duration-200 z-50 ${
                        dropdownOpen
                          ? 'opacity-100 translate-y-1 visible pointer-events-auto'
                          : 'opacity-0 translate-y-3 invisible pointer-events-none'
                      }`}
                    >
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-brand-border/60">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-brand-red">
                            Commercial Kitchen Equipment
                          </p>
                          <p className="text-xs text-brand-charcoal/70">
                            Manufactured to professional industrial specifications
                          </p>
                        </div>
                        <Link
                          href="/products"
                          onClick={() => handleCategoryNav('all')}
                          className="text-xs font-semibold text-brand-red hover:underline inline-flex items-center gap-1"
                        >
                          <span>All 18 Categories</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        {FEATURED_CATEGORIES.map((cat) => {
                          const IconComp = cat.icon
                          return (
                            <Link
                              key={cat.id}
                              href={`/products?category=${cat.id}`}
                              onClick={() => handleCategoryNav(cat.id)}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-light transition-all duration-150 group/item border border-transparent hover:border-brand-border/60"
                            >
                              <div className="w-8 h-8 rounded-lg bg-brand-light text-brand-red flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-red group-hover/item:text-white transition-colors duration-200">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-xs font-bold text-brand-dark group-hover/item:text-brand-red transition-colors duration-150 leading-tight">
                                  {cat.label}
                                </h4>
                                <p className="text-[11px] text-brand-charcoal/70 truncate mt-0.5">
                                  {cat.desc}
                                </p>
                              </div>
                            </Link>
                          )
                        })}
                      </div>

                      <div className="mt-4 pt-3 border-t border-brand-border/60 bg-brand-light/60 -mx-5 -mb-5 px-5 py-3 rounded-b-2xl flex items-center justify-between text-xs text-brand-charcoal">
                        <span className="font-medium text-brand-dark">
                          ISO 9001:2015 Certified Manufacturing · Noida Plant
                        </span>
                        <Link
                          href="/fabrication"
                          className="text-brand-red font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          <span>Custom SS Fabrication</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link relative py-2 font-medium text-sm transition-colors duration-200 ${
                    isActive ? 'text-brand-red font-semibold' : 'text-brand-charcoal hover:text-brand-red'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* ── CTA + HAMBURGER ───────────────────────────────────────────── */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="btn-primary hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Request a Quote</span>
            </Link>

            {/* Mobile hamburger (Visible below lg: 1024px) */}
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-brand-light text-brand-dark hover:bg-brand-border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE DRAWER ────────────────────────────────────────────────────── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-brand-border shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="site-container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.href} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => handleCategoryNav('all')}
                        className={`flex-1 flex items-center justify-between px-3.5 py-3 text-sm font-semibold rounded-xl min-h-[44px] transition-colors duration-150 ${
                          pathname.startsWith('/products')
                            ? 'bg-brand-red/10 text-brand-red'
                            : 'text-brand-charcoal hover:bg-brand-light hover:text-brand-red'
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className="text-brand-charcoal/40 text-xs">→</span>
                      </Link>
                      <button
                        type="button"
                        aria-label="Toggle products categories"
                        onClick={() => setMobileProductsOpen((prev) => !prev)}
                        className="px-3 py-3 text-brand-charcoal/60 hover:text-brand-red min-h-[44px] min-w-[44px] flex items-center justify-center"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-brand-red' : ''}`} />
                      </button>
                    </div>

                    {mobileProductsOpen && (
                      <div className="pl-3 pr-1 py-2 grid grid-cols-1 gap-1 border-l-2 border-brand-red/30 ml-3 mt-1 mb-2">
                        {FEATURED_CATEGORIES.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/products?category=${cat.id}`}
                            onClick={() => handleCategoryNav(cat.id)}
                            className="px-3 py-2 text-xs font-medium text-brand-charcoal hover:text-brand-red rounded-lg hover:bg-brand-light transition-colors"
                          >
                            {cat.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 text-sm font-semibold rounded-xl min-h-[44px] transition-colors duration-150 ${
                    pathname === link.href
                      ? 'bg-brand-red/10 text-brand-red'
                      : 'text-brand-charcoal hover:bg-brand-light hover:text-brand-red'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-brand-charcoal/40 text-xs">→</span>
                </Link>
              )
            })}

            <div className="pt-3 border-t border-brand-border mt-3 space-y-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full text-center py-3 flex items-center justify-center gap-2 font-bold min-h-[44px]"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Request a Quote</span>
              </Link>
              <a
                href="tel:+917042933825"
                className="btn-outline w-full text-center py-2.5 text-xs text-brand-charcoal font-semibold flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Call +91 7042933825</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
