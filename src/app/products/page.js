'use client'

import { useState, useMemo, useEffect, useRef, useCallback, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CATEGORIES, PRODUCTS } from '@/data/products'

// Static category mapping (kept outside component to avoid recreation)
const CATEGORY_MAP = {
  'cooking-equipment': ['cooking-range', 'bulk-cooking', 'cooking-equipment'],
  'refrigeration-equipment': ['refrigeration', 'refrigeration-equipment'],
  'tables-trolleys': ['racks-trolleys', 'tables-trolleys'],
  'washing-equipment': ['dishwashing', 'washing-equipment'],
  'display-counters': ['display-counters'],
  'customize-equipment': ['custom-counters', 'customize-equipment'],
}

function ProductsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category') || 'all'

  const [selectedCategory, setSelectedCategory] = useState(categoryParam)
  const [searchQuery, setSearchQuery] = useState('')

  const scrollAnchorRef = useRef(null)
  const activePillRef = useRef(null)
  const isInitialMount = useRef(true)

  // Calculate target offset and scroll smoothly to category showcase
  const scrollToShowcase = useCallback((smooth = true) => {
    if (typeof window === 'undefined') return

    // Ensure manual scroll restoration so browser doesn't retain old scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    requestAnimationFrame(() => {
      if (!scrollAnchorRef.current) return

      // Measure absolute document position of static anchor
      const anchorRect = scrollAnchorRef.current.getBoundingClientRect()
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0
      const absoluteAnchorTop = anchorRect.top + currentScrollY

      // Measure dynamic sticky header (Navbar) height
      const header = document.querySelector('header')
      const headerHeight = header ? header.getBoundingClientRect().height : (window.innerWidth >= 640 ? 80 : 64)

      const targetY = Math.max(0, Math.round(absoluteAnchorTop - headerHeight))

      window.scrollTo({
        top: targetY,
        behavior: smooth ? 'smooth' : 'auto',
      })
    })
  }, [])

  // Unified Category Change Handler
  const handleCategorySelect = useCallback((catId) => {
    setSelectedCategory(catId)
    setSearchQuery('')

    // Update URL query parameter shallowly
    const targetUrl = catId === 'all' ? '/products' : `/products?category=${catId}`
    router.replace(targetUrl, { scroll: false })

    // Automatically reset scroll position to top of category section
    scrollToShowcase(true)
  }, [router, scrollToShowcase])

  // Keep selectedCategory in sync when searchParams change (Navbar dropdown, browser Back/Forward)
  useEffect(() => {
    if (categoryParam !== selectedCategory) {
      setSelectedCategory(categoryParam)
      setSearchQuery('')
      scrollToShowcase(true)
    }
  }, [categoryParam, selectedCategory, scrollToShowcase])

  // Cold mount / deep link scroll handler: if landing with ?category=..., scroll to category showcase
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      if (categoryParam && categoryParam !== 'all') {
        const timer = setTimeout(() => {
          scrollToShowcase(false)
        }, 100)
        return () => clearTimeout(timer)
      }
    }
  }, [categoryParam, scrollToShowcase])

  // Listen to custom category navigation events from Navbar dropdown or Footer when on /products
  useEffect(() => {
    const handleCustomNav = (e) => {
      const targetCat = e.detail
      if (targetCat) {
        handleCategorySelect(targetCat)
      }
    }
    window.addEventListener('nirvana-category-change', handleCustomNav)
    return () => window.removeEventListener('nirvana-category-change', handleCustomNav)
  }, [handleCategorySelect])

  // Keep active category pill horizontally visible / centered in category bar
  useEffect(() => {
    if (activePillRef.current) {
      activePillRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [selectedCategory])

  // Filter products based on category and search
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category match
      let matchesCategory = true
      if (selectedCategory !== 'all') {
        const allowed = CATEGORY_MAP[selectedCategory] || [selectedCategory]
        matchesCategory = allowed.includes(item.category) ||
          item.name.toLowerCase().includes(selectedCategory.replace('-', ' '))
      }

      // Search match
      let matchesSearch = true
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        matchesSearch =
          item.name.toLowerCase().includes(q) ||
          (item.catLabel && item.catLabel.toLowerCase().includes(q)) ||
          (item.enquiryTag && item.enquiryTag.toLowerCase().includes(q))
      }

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const activeCategoryObj = CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0]

  return (
    <div className="min-h-screen bg-brand-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* ── HEADER BANNER ────────────────────────────────────────────── */}
        <section className="bg-brand-dark text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl pointer-events-none" />
          <div className="site-container relative z-10">
            <div className="flex items-center gap-2 text-xs text-white/60 mb-3 sm:mb-4 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-red font-semibold">Products & Equipment</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>Heavy-Duty Food-Grade SS 304 Equipment</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Commercial Kitchen Equipment &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                Complete Catalogue
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mt-3 sm:mt-4 font-light leading-relaxed">
              Explore our comprehensive catalogue of industrial cooking, refrigeration, washing,
              ventilation, and custom stainless steel fabrication machinery engineered for high performance.
            </p>

            {/* Live Search Bar */}
            <div className="mt-6 sm:mt-8 max-w-xl">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/50 text-base sm:text-lg">
                  🔍
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search equipment, range, fryer, counter..."
                  className="w-full pl-11 sm:pl-12 pr-12 py-3 sm:py-3.5 min-h-[44px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-red focus:bg-white/15 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-white/60 hover:text-white text-xs font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── STATIC SCROLL ANCHOR (Independent of position:sticky to guarantee invariant scroll position) ── */}
        <div ref={scrollAnchorRef} id="category-showcase" className="h-0 w-full pointer-events-none" aria-hidden="true" />

        {/* ── 18 CATEGORIES FILTER CAROUSEL / GRID ──────────────────────── */}
        <section className="bg-brand-light border-b border-brand-border py-4 sm:py-6 sticky top-16 sm:top-20 z-30 backdrop-blur-md bg-brand-light/95">
          <div className="site-container">
            <div className="flex items-center justify-between gap-4 mb-2.5 sm:mb-3">
              <span className="text-xs font-bold text-brand-dark uppercase tracking-wider flex items-center gap-1.5">
                <span>Select Category</span>
                <span className="px-2 py-0.5 rounded-full bg-brand-red text-white text-[10px]">
                  18 Categories
                </span>
              </span>
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => handleCategorySelect('all')}
                  className="text-xs text-brand-red font-semibold hover:underline"
                >
                  Reset to All Equipment
                </button>
              )}
            </div>

            {/* Scrollable Category Pills with Smooth Transitions */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    ref={isSelected ? activePillRef : null}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 min-h-[38px] ${
                      isSelected
                        ? 'bg-brand-red text-white shadow-md shadow-brand-red/25 scale-100'
                        : 'bg-white text-brand-charcoal hover:bg-brand-white hover:text-brand-dark border border-brand-border/80'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS SHOWCASE ─────────────────────────────────────────── */}
        <section className="pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-brand-white">
          <div className="site-container">

            {/* Category Intro Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-10 pb-4 sm:pb-6 border-b border-brand-border">
              <div>
                <span className="section-label">Selected Category</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-dark flex items-center gap-2 sm:gap-2.5">
                  <span>{activeCategoryObj.icon}</span>
                  <span>{activeCategoryObj.label}</span>
                </h2>
                <p className="text-xs sm:text-sm text-brand-charcoal mt-1 max-w-2xl leading-relaxed">
                  {activeCategoryObj.desc}
                </p>
              </div>
              <div className="text-xs font-semibold text-brand-charcoal/70 bg-brand-light px-3.5 py-2 rounded-xl border border-brand-border whitespace-nowrap self-start sm:self-auto">
                Showing {filteredProducts.length} Equipment Models
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    className="card p-4 sm:p-5 group flex flex-col justify-between hover:border-brand-red hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 bg-white rounded-2xl"
                  >
                    <div>
                      {/* Equipment Tag Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-2 py-0.5 rounded-full truncate">
                          {p.catLabel || 'Commercial Grade'}
                        </span>
                        <span className="text-[10px] font-semibold text-brand-charcoal/60 flex-shrink-0">
                          SS 304 Food-Grade
                        </span>
                      </div>

                      {/* Equipment Image or Fallback Artwork */}
                      {p.image && !p.image.includes('Catalogue') ? (
                        <div className="w-full h-44 sm:h-48 rounded-xl bg-white border border-brand-border/60 relative overflow-hidden flex items-center justify-center p-3 mb-4 group-hover:border-brand-red group-hover:shadow-sm transition-all">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            unoptimized
                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-40 rounded-xl bg-brand-light border border-brand-border/60 flex flex-col items-center justify-center p-4 mb-4 group-hover:bg-brand-red/5 transition-colors">
                          <span className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                            {activeCategoryObj.icon || '🍳'}
                          </span>
                          <span className="text-[11px] font-semibold text-brand-charcoal/70 text-center line-clamp-1">
                            Nirvana Precision Built
                          </span>
                        </div>
                      )}

                      {/* Title & Specs */}
                      <h3 className="font-bold text-brand-dark text-sm sm:text-base group-hover:text-brand-red transition-colors duration-200 mb-1 leading-snug">
                        {p.name}
                      </h3>
                      {p.note ? (
                        <p className="text-xs text-brand-charcoal/80 mb-2 italic leading-relaxed">{p.note}</p>
                      ) : (
                        <p className="text-xs text-brand-charcoal/70 mb-2 leading-relaxed">
                          Heavy-duty construction, ergonomic controls &amp; high-output efficiency.
                        </p>
                      )}
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-brand-border/70 mt-3 flex items-center justify-between gap-2">
                      <Link
                        href={`/contact?product=${encodeURIComponent(p.name)}`}
                        className="btn-primary text-xs w-full py-2.5 text-center font-bold min-h-[40px]"
                      >
                        Enquire / Get Quote
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 sm:py-20 bg-brand-light rounded-3xl border border-brand-border p-6 sm:p-8">
                <span className="text-3xl sm:text-4xl block mb-3">🔍</span>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-2">No Matching Equipment Found</h3>
                <p className="text-xs sm:text-sm text-brand-charcoal max-w-md mx-auto mb-6 leading-relaxed">
                  We manufacture custom configurations for this category in SS 304, MS, and Aluminium. Contact our sales engineers for specific dimensions and blueprints.
                </p>
                <button
                  onClick={() => handleCategorySelect('all')}
                  className="btn-primary text-xs sm:text-sm"
                >
                  View All Products
                </button>
              </div>
            )}

            {/* Custom Fabrication Callout Banner */}
            <div className="mt-12 sm:mt-16 bg-brand-dark text-white p-6 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <span className="text-[11px] sm:text-xs font-bold text-brand-red uppercase tracking-widest block mb-1.5 sm:mb-2">
                    Bespoke Commercial Fabrication
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug">
                    Need Custom Dimensions or Specific Blueprint Specs?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-2 max-w-2xl font-light leading-relaxed">
                    Every commercial kitchen is unique. Our in-house engineering and CNC fabrication plant in Sector-6 Noida builds custom cooking ranges, exhaust hoods, Bain Maries, counters, and sink units to your exact CAD blueprint.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
                  <Link href="/contact" className="btn-primary text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 font-bold text-center justify-center min-h-[44px]">
                    Request Custom Fabrication Quote
                  </Link>
                  <a
                    href="tel:+917042933825"
                    className="px-5 py-2.5 sm:py-3 rounded-btn bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-semibold transition-colors text-center inline-flex items-center justify-center min-h-[44px]"
                  >
                    Call: +91 7042933825
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-brand-charcoal">Loading Nirvana Products...</div>}>
      <ProductsContent />
    </Suspense>
  )
}
