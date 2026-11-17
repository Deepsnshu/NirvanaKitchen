import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteForm from '@/components/QuoteForm'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'
import Image from 'next/image'
import {
  Flame,
  Cog,
  Snowflake,
  Layers,
  Boxes,
  UtensilsCrossed,
  ChefHat,
  Waves,
  Store,
  Wind,
  Wrench,
  Coffee,
  ShieldCheck,
  Award,
  Building2,
  Factory,
  Hotel,
  Stethoscope,
  Warehouse,
  GraduationCap,
  Headphones,
  Compass,
  Truck,
  Settings,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
} from 'lucide-react'

// ── PRODUCT CATEGORIES (CORE COMMERCIAL EQUIPMENT LINES) ──────────────────────
const PRODUCT_CATEGORIES = [
  {
    id: 'cooking-equipment',
    icon: Flame,
    label: 'Cooking Equipment',
    desc: 'Heavy-duty burner ranges, stock pots, Indian & Chinese ranges, tandoors, griddles & boiling pans.',
    tag: 'Heavy-Duty',
  },
  {
    id: 'refrigeration-equipment',
    icon: Snowflake,
    label: 'Refrigeration Equipment',
    desc: 'Upright commercial chillers & freezers, undercounter refrigerators, cold rooms, and blast chillers.',
    tag: 'Energy-Smart',
  },
  {
    id: 'tables-trolleys',
    icon: Layers,
    label: 'Tables & Trolleys',
    desc: 'Heavy-gauge SS 304 work tables, preparation tables with splashbacks, service & clearing trolleys.',
    tag: 'SS 304 Certified',
  },
  {
    id: 'washing-equipment',
    icon: Waves,
    label: 'Washing Equipment',
    desc: 'Single, double & triple bowl commercial sink units, pot wash sinks, pre-rinse sprays & mop sinks.',
    tag: 'Sanitary Grade',
  },
  {
    id: 'display-counters',
    icon: Store,
    label: 'Display Counters',
    desc: 'Curved & flat glass heated display counters, refrigerated sweet display counters, and pickup counters.',
    tag: 'Front of House',
  },
  {
    id: 'customize-equipment',
    icon: Settings,
    label: 'Customize Equipment',
    desc: 'Bespoke live food counters, chaat & fruit stations, barbecue units, plate warmers & customized catering equipment.',
    tag: 'Custom Built',
  },
]

// ── TURNKEY 4 STAGES ─────────────────────────────────────────────────────────
const TURNKEY_STAGES = [
  {
    step: '01',
    icon: Compass,
    title: 'Kitchen Planning & Design',
    desc: 'Comprehensive space planning, 3D CAD modeling, MEP utility coordination, and ergonomic workflow optimization for kitchen staff and chef teams.',
  },
  {
    step: '02',
    icon: Factory,
    title: 'In-House Precision Supply',
    desc: 'Direct manufacturing and procurement of industrial cooking lines, refrigeration, custom SS prep counters, and bakery equipment from our plant.',
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Coordinated Installation',
    desc: 'Turnkey on-site mechanical, electrical, and gas commissioning led by factory-trained technicians, adhering to strict hygiene and fire safety protocols.',
  },
  {
    step: '04',
    icon: Headphones,
    title: 'Pan-India Service & Support',
    desc: 'Preventive maintenance contracts (AMC), rapid genuine spare parts deployment, and nationwide support backed by our ISO 9001:2015 system.',
  },
]

// ── MANUFACTURING HIGHLIGHTS ─────────────────────────────────────────────────
const MANUFACTURING_CAPABILITIES = [
  {
    image: '/images/fab-cnc-laser.jpg',
    title: 'CNC Laser Cutting & Bending',
    desc: 'High-precision computer-controlled cutting and sheet metal bending for flawless seams, accurate miters, and micron-level fabrication tolerances.',
    tag: 'Precision Engineering',
  },
  {
    image: '/images/fab-tig-welding.jpg',
    title: 'Sanitary TIG & MIG SS Welding',
    desc: 'Continuous argon-shielded sanitary welds ground and satin-finished to hairline perfection, eliminating bacteria-harboring crevices in food contact zones.',
    tag: 'Sanitary Quality',
  },
  {
    image: '/images/fab-prep-counter.jpg',
    title: 'Custom SS Preparation Counters',
    desc: 'Heavy-gauge SS 304 workstations with sound-deadening underlay, integrated sink bowls, marine anti-drip edges, and customized under-counter storage.',
    tag: 'SS 304 Fabrication',
  },
  {
    image: '/images/fab-exhaust-island.png',
    title: 'Commercial Ventilation & Exhaust',
    desc: 'Engineered island and wall-mounted commercial exhaust hoods featuring SS baffle grease filters, fire-rated construction, and optimal static-pressure CFM.',
    tag: 'Airflow & Safety',
  },
]

// ── WHY CHOOSE NIRVANA ───────────────────────────────────────────────────────
const WHY_CHOOSE = [
  {
    icon: Award,
    title: 'ISO 9001:2015 Certified',
    subtitle: 'Certificate No. VW26100063',
    desc: 'Certified by Vatsin World Services Pvt. Ltd. under IAF accreditation for the manufacturing of commercial kitchen equipment and stainless steel products.',
  },
  {
    icon: Truck,
    title: 'Pan-India Service Network',
    subtitle: 'Prompt Nationwide Response',
    desc: 'Strategically coordinated engineering network providing swift on-site installation, technical commissioning, and preventive maintenance across India.',
  },
  {
    icon: Building2,
    title: '1,000+ Clients Nationwide',
    subtitle: 'Proven Industry Track Record',
    desc: 'Chosen by India’s leading hotel chains, industrial food production plants, corporate canteens, dairy cooperatives, and fast-growing QSR franchises.',
  },
  {
    icon: Settings,
    title: 'Bespoke Custom Engineering',
    subtitle: 'Tailored to Every Blueprint',
    desc: 'Dedicated drafting and fabrication team capable of creating custom-dimensioned equipment and modular assemblies to fit any architectural kitchen layout.',
  },
]

// ── CUSTOM FABRICATION MATERIALS ─────────────────────────────────────────────
const FABRICATION_MATERIALS = [
  {
    grade: 'Stainless Steel (SS 304 / 316)',
    desc: 'Certified food-grade stainless steel fabrication. Highly resistant to heat, food acids, and corrosion. Satin hairline finish for superior sanitation in commercial prep areas.',
    features: ['SS 304 food-contact surfaces', 'SS 316 for high-corrosion zones', 'Argon-shielded sanitary welds'],
  },
  {
    grade: 'Mild Steel (MS)',
    desc: 'Heavy-duty structural framework, industrial storage racks, base support channels, and skid assemblies built to endure heavy continuous loads in commissary setups.',
    features: ['High load-bearing capacity', 'Anti-corrosive primer coating', 'Engineered structural integrity'],
  },
  {
    grade: 'Aluminium',
    desc: 'Precision lightweight panels, equipment enclosures, specialized cladding, and thermal heat shields engineered for specialized commercial kitchen requirements.',
    features: ['Lightweight & rustproof', 'Precision CNC punched panels', 'Clean industrial aesthetic'],
  },
]

// ── INDUSTRIES WE SERVE ──────────────────────────────────────────────────────
const INDUSTRIES = [
  { icon: Hotel, label: 'Hotel Kitchens', desc: '5-star hotel banquet cooking, room service lines & all-day dining' },
  { icon: Stethoscope, label: 'Hospital Kitchens', desc: 'Hygienic dietary preparation, patient meal staging & sanitize zones' },
  { icon: UtensilsCrossed, label: 'Restaurant Kitchens', desc: 'High-speed cooking ranges, tandoors & chef plating stations' },
  { icon: Coffee, label: 'Café Kitchens', desc: 'Compact prep counters, undercounter chillers & beverage stations' },
  { icon: Factory, label: 'Industrial Kitchens', desc: 'Heavy-capacity bulk cooking lines for manufacturing facilities' },
  { icon: Building2, label: 'Corporate Canteens', desc: 'Fast-flow automated service lines, bain maries & SS dining tables' },
  { icon: Flame, label: 'Bulk Cooking Kitchens', desc: 'High-volume central kitchens, catering units & steam jacketed pans' },
  { icon: GraduationCap, label: 'Institutional Kitchens', desc: 'Universities, defense messes, residential schools & public canteens' },
  { icon: ChefHat, label: 'Commercial Kitchens', desc: 'Cloud kitchens, commissary hubs & retail food production setups' },
]

// ── CLIENTS ──────────────────────────────────────────────────────────────────
const CLIENTS = [
  'Amul',
  'Patanjali',
  "Giani's Ice Cream",
  "Hong's Kitchen",
  'Jubilant Lifesciences',
  'Vadilal',
  'Paras',
  'Nandini',
  'Dawat Soft Drinks',
  'Samvardhana Motherson',
]

// ── REAL WORKING ENVIRONMENT GALLERY ─────────────────────────────────────────
const GALLERY_ITEMS = [
  {
    image: '/images/about-dd.png',
    title: '3D CAD Turnkey Kitchen Layout & Workflow Engineering',
    category: 'Kitchen Planning',
    desc: 'Integrated layout design optimizing raw-material intake, prep zones, cooking battery, and warewashing circulation.',
  },
  {
    image: '/images/hero-commercial-kitchen.jpg',
    title: 'Commercial Cooking Line & Stainless Workstations',
    category: 'Commercial Installation',
    desc: 'Heavy-gauge commercial cooking range paired with custom stainless steel exhaust hood and pickup counters.',
  },
  {
    image: '/images/fab-dish-landing.jpg',
    title: 'Heavy-Duty Warewashing & Dish Landing System',
    category: 'Sanitary Warewashing',
    desc: 'Custom-fabricated sorting tables, pre-rinse sinks, and dishwasher entry/exit roller integration in SS 304.',
  },
  {
    image: '/images/fab-trolleys.jpg',
    title: 'SS 304 Food Transport & Mobile Clearing Trolleys',
    category: 'Custom Fabrication',
    desc: 'Ergonomic mobile equipment with heavy-duty swivel casters engineered for high-turnover banquet and canteen transit.',
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-brand-white">

        {/* ════════════════════════════════════════════════════════════════
            SECTION 1: REBUILT CINEMATIC HERO (Fits cleanly inside 100vh)
        ════════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center bg-brand-dark text-white overflow-hidden">
          {/* Full-bleed background image with responsive cinematic darkening */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-manufacturing-facility.jpg"
              alt="Nirvana Niche Products Private Limited Manufacturing & Fabrication Facility"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-[1.01]"
            />
            {/* Engineering gradient scrim for high readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/40 lg:from-brand-dark/95 lg:via-brand-dark/80 lg:to-brand-dark/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="site-container relative z-10 pt-6 pb-20 sm:pt-8 sm:pb-20 lg:pt-8 lg:pb-16 w-full">
            <div className="max-w-3xl lg:max-w-4xl">
              
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                <span>Proud to be part of Samvardhana Motherson</span>
                <span className="text-white/40 hidden sm:inline">|</span>
                <span className="text-white/80 hidden sm:inline text-[11px] font-normal normal-case">
                  Industrial Engineering Rigor
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-[42px] xl:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
                Commercial Kitchen{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/70">
                  Equipment Manufacturers
                </span>{' '}
                <span className="text-brand-red">&</span> Turnkey Solutions
              </h1>

              {/* Red Bar Accent */}
              <div className="w-16 h-1 sm:h-1.5 bg-brand-red rounded-full my-3 sm:my-3.5 shadow-md shadow-brand-red/50" />

              {/* Subheading / Description */}
              <p className="text-xs sm:text-sm lg:text-[15px] text-white/90 max-w-2xl font-normal leading-relaxed mb-5 sm:mb-6">
                In-house precision stainless steel (SS 204/304/316) fabrication and heavy-duty commercial cooking, refrigeration, bakery, and institutional kitchen equipment. Serving hotels, restaurants, industrial canteens, and cloud kitchens across India.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-5 sm:mb-6">
                <Link
                  href="/products"
                  className="btn-primary text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 shadow-xl shadow-brand-red/30 hover:shadow-brand-red/50 inline-flex items-center justify-center gap-2 font-bold min-h-[44px]"
                >
                  <span>Explore Products & Equipment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#quote-form"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-btn bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-xs sm:text-sm border border-white/30 transition-all duration-200 shadow-lg inline-flex items-center justify-center min-h-[44px]"
                >
                  Request a Manufacturer Quote
                </Link>
                <Link
                  href="/fabrication"
                  className="text-xs font-semibold text-white/80 hover:text-white inline-flex items-center justify-center gap-1.5 underline underline-offset-4 transition-colors py-1 sm:py-0"
                >
                  Explore Custom Fabrication →
                </Link>
              </div>

              {/* Hero Trust Indicators (Clean 4 cards inside 100vh) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 lg:gap-3.5 max-w-4xl pt-3 sm:pt-4 border-t border-white/20">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-2 sm:p-2.5 lg:p-3 hover:bg-white/15 transition-colors flex items-start gap-2 sm:gap-2.5 min-w-0">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/10 text-white flex-shrink-0">
                    <Factory className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-red" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] sm:text-xs font-bold text-white block truncate">In-House Manufacturing</span>
                    <span className="text-[9px] sm:text-[10px] text-white/70 block truncate">Noida Sector-6 Plant</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-2 sm:p-2.5 lg:p-3 hover:bg-white/15 transition-colors flex items-start gap-2 sm:gap-2.5 min-w-0">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/10 text-white flex-shrink-0">
                    <ShieldCheck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-red" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] sm:text-xs font-bold text-white block truncate">SS 304/316 Fabrication</span>
                    <span className="text-[9px] sm:text-[10px] text-white/70 block truncate">Certified Food-Grade</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-2 sm:p-2.5 lg:p-3 hover:bg-white/15 transition-colors flex items-start gap-2 sm:gap-2.5 min-w-0">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/10 text-white flex-shrink-0">
                    <Boxes className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-red" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] sm:text-xs font-bold text-white block truncate">Complete Equipment</span>
                    <span className="text-[9px] sm:text-[10px] text-white/70 block truncate">18 Specialized Ranges</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-2 sm:p-2.5 lg:p-3 hover:bg-white/15 transition-colors flex items-start gap-2 sm:gap-2.5 min-w-0">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-white/10 text-white flex-shrink-0">
                    <Truck className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-red" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] sm:text-xs font-bold text-white block truncate">Pan-India Support</span>
                    <span className="text-[9px] sm:text-[10px] text-white/70 block truncate">Installation & Service</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Plant status badge in desktop header — shifted down cleanly */}
          <div className="hidden lg:flex absolute top-16 right-8 xl:top-20 xl:right-10 z-10 bg-brand-dark/85 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full shadow-2xl items-center gap-2 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Industrial Manufacturing Plant · Noida, U.P.</span>
          </div>

          {/* ── CORPORATE TRUST STRIP — inside hero, bottom anchor, always in first view ── */}
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-brand-dark/90 backdrop-blur-md border-t border-white/15">
            <div className="site-container">
              <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 py-2.5 text-[11px] sm:text-xs font-medium text-white/85 overflow-x-auto whitespace-nowrap">

                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                  <span>Proud to be part of Samvardhana Motherson</span>
                </div>
                <span className="text-white/30">|</span>

                <div className="flex items-center gap-1.5">
                  <Factory className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                  <span>In-House Manufacturing (Noida)</span>
                </div>
                <span className="text-white/30">|</span>

                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                  <span>SS 304/316 Food-Grade Fabrication</span>
                </div>
                <span className="text-white/30">|</span>

                <div className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                  <span>Turnkey Commercial Kitchen Solutions</span>
                </div>
                <span className="text-white/30">|</span>

                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                  <span>Pan-India Installation & Service</span>
                </div>

              </div>
            </div>
          </div>

        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 3: REDESIGNED ABOUT NIRVANA
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-white" id="about">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column — Story & Capabilities */}
              <div className="lg:col-span-7">
                <span className="section-label">About Nirvana Niche Products</span>
                <h2 className="section-title">
                  Our Story. Our Expertise.{' '}
                  <em>Your Kitchen Partner.</em>
                </h2>
                <span className="red-bar" />
                
                <p className="text-brand-charcoal text-base sm:text-lg leading-relaxed mb-4">
                  Welcome to <strong>Nirvana Niche Products Private Limited</strong>, an enterprise commercial kitchen equipment manufacturer and turnkey solutions provider, proudly associated with <strong>Samvardhana Motherson</strong>.
                </p>
                <p className="text-brand-charcoal/80 text-sm sm:text-base leading-relaxed mb-8">
                  From architectural requirement analysis and 3D CAD kitchen layouts to precision stainless steel fabrication, heavy-duty commercial cooking lines, cold chain integration, on-site commissioning, and lifecycle service — we build reliable, hygienic, and high-performance kitchen infrastructure tailored to high-volume commercial demands.
                </p>

                {/* 4 Refined Capability Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-brand-light border border-brand-border/70 hover:border-brand-red/50 transition-all duration-200">
                    <div className="p-2.5 rounded-lg bg-white text-brand-red shadow-sm flex-shrink-0">
                      <Factory className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-brand-dark">In-House Manufacturing</h4>
                      <p className="text-[11px] sm:text-xs text-brand-charcoal/70 mt-0.5">
                        Facility in Plot D 59–60, Sector-6, Noida with precision CNC cutting, bending & assembly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-brand-light border border-brand-border/70 hover:border-brand-red/50 transition-all duration-200">
                    <div className="p-2.5 rounded-lg bg-white text-brand-red shadow-sm flex-shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-brand-dark">Samvardhana Motherson Heritage</h4>
                      <p className="text-[11px] sm:text-xs text-brand-charcoal/70 mt-0.5">
                        Rooted in world-class manufacturing systems, engineering precision, and corporate trust.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-brand-light border border-brand-border/70 hover:border-brand-red/50 transition-all duration-200">
                    <div className="p-2.5 rounded-lg bg-white text-brand-red shadow-sm flex-shrink-0">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-brand-dark">CAD-Based Kitchen Planning</h4>
                      <p className="text-[11px] sm:text-xs text-brand-charcoal/70 mt-0.5">
                        Detailed layout blueprints, MEP coordinates, and ergonomic chef workflow optimization.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-brand-light border border-brand-border/70 hover:border-brand-red/50 transition-all duration-200">
                    <div className="p-2.5 rounded-lg bg-white text-brand-red shadow-sm flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-brand-dark">ISO 9001:2015 Certified</h4>
                      <p className="text-[11px] sm:text-xs text-brand-charcoal/70 mt-0.5">
                        Quality management system certified by Vatsin World Services Pvt. Ltd. (IAF accredited).
                      </p>
                    </div>
                  </div>

                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/about" className="btn-primary inline-flex items-center gap-2 group">
                    <span>Learn More About Nirvana</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="#quote-form" className="btn-outline">
                    Request Consultation
                  </Link>
                </div>
              </div>

              {/* Right Column — 3D Planning & Engineering Image */}
              <div className="lg:col-span-5">
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-brand-border/80 bg-brand-dark aspect-[4/3] lg:aspect-[5/4]">
                  <Image
                    src="/images/about-dd.png"
                    alt="Commercial Kitchen Planning & 3D Layout Engineering"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-brand-dark/85 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-brand-red" />
                    <span>3D CAD & Workflow Engineering</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-xs font-bold text-brand-red uppercase tracking-wider">Turnkey Project Delivery</p>
                    <p className="text-sm font-medium text-white/95 mt-1">
                      Custom commercial kitchens engineered for seamless food prep, hygiene separation, and rapid dish throughput.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 4: EXPANDED TURNKEY SOLUTIONS (4 STAGES)
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-light border-y border-brand-border" id="turnkey">
          <div className="site-container">
            
            <div className="max-w-3xl mb-12">
              <span className="section-label">Turnkey Project Execution</span>
              <h2 className="section-title">
                From Kitchen Planning to <em>Operational Readiness</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                Integrated commercial kitchen solutions designed around your space, workflow, equipment requirements, and operational needs.
              </p>
            </div>

            {/* 4 Connected Process Stages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {TURNKEY_STAGES.map((s, idx) => {
                const IconComponent = s.icon
                return (
                  <div
                    key={s.step}
                    className="bg-white p-6 rounded-2xl border border-brand-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between"
                  >
                    <div>
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-brand-dark/20 group-hover:text-brand-red transition-colors duration-200">
                          {s.step}
                        </span>
                        <div className="p-3 rounded-xl bg-brand-light text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-200 shadow-sm">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      <h3 className="font-bold text-brand-dark text-base sm:text-lg mb-2 group-hover:text-brand-red transition-colors duration-200">
                        {s.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center text-xs font-semibold text-brand-dark/70">
                      <span>Phase {idx + 1} Deliverable</span>
                      <Check className="w-3.5 h-3.5 text-brand-red ml-auto" />
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 5: COMPLETE PRODUCT CATEGORIES (ALL 18 PRESERVED)
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-white" id="products">
          <div className="site-container">
            
            <div className="max-w-3xl mb-12">
              <span className="section-label">Complete Commercial Kitchen Equipment</span>
              <h2 className="section-title">
                Engineered Equipment for <em>Professional Kitchens</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                Nirvana manufactures and supplies comprehensive commercial kitchen equipment — built with heavy-gauge SS 304, industrial heating elements, and energy-efficient compressors.
              </p>
            </div>

            {/* 18 Product Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {PRODUCT_CATEGORIES.map((cat) => {
                const IconComponent = cat.icon
                return (
                  <Link
                    key={cat.id}
                    href={`/products?category=${cat.id}`}
                    className="card p-5 group block hover:border-brand-red hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="p-2.5 rounded-xl bg-brand-light text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors duration-200 shadow-sm">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-brand-gray-light text-brand-charcoal/70 border border-brand-border/60">
                          {cat.tag}
                        </span>
                      </div>

                      <h3 className="font-bold text-brand-dark mb-2 text-base group-hover:text-brand-red transition-colors duration-200">
                        {cat.label}
                      </h3>
                      <p className="text-xs text-brand-charcoal/80 leading-relaxed line-clamp-3">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-semibold text-brand-red">
                      <span>Explore Models</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )
              })}

              {/* Bespoke Custom Fabrication Card */}
              <div className="bg-brand-dark text-white rounded-xl p-5 flex flex-col justify-between border border-brand-dark shadow-card">
                <div>
                  <div className="p-2.5 rounded-xl bg-white/10 text-white w-fit mb-3.5">
                    <Settings className="w-5 h-5 text-brand-red" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red block mb-1">
                    Custom Manufacturing
                  </span>
                  <h3 className="font-bold text-white text-base mb-2">
                    Need Custom Dimensions?
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    We fabricate custom-dimensioned stainless steel preparation tables, sinks, dish landings & exhaust canopies in SS 304, MS & Aluminium.
                  </p>
                </div>
                
                <Link
                  href="/fabrication"
                  className="mt-4 btn-primary text-xs px-4 py-2.5 inline-flex items-center justify-center gap-1.5 font-bold"
                >
                  <span>Explore Fabrication</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 6: MANUFACTURING CAPABILITIES SHOWCASE
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-light border-y border-brand-border" id="capabilities">
          <div className="site-container">
            
            <div className="max-w-3xl mb-12">
              <span className="section-label">Precision Manufacturing</span>
              <h2 className="section-title">
                Built with Precision. <em>Fabricated for Performance.</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                Inside our specialized Noida fabrication plant where high-precision machinery, certified SS 304 raw materials, and experienced craftsmen converge to build industrial-grade commercial kitchen equipment.
              </p>
            </div>

            {/* 4 Capabilities Grid with Real Local Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MANUFACTURING_CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="bg-white rounded-2xl overflow-hidden border border-brand-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-brand-dark/85 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                      {cap.tag}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-brand-dark text-base mb-2 group-hover:text-brand-red transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center text-xs font-semibold text-brand-red">
                      <span>Certified Process</span>
                      <ShieldCheck className="w-3.5 h-3.5 ml-auto text-brand-red" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 7: WHY CHOOSE NIRVANA
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-white" id="why-us">
          <div className="site-container">
            
            <div className="max-w-2xl mb-12">
              <span className="section-label">Corporate Reliability</span>
              <h2 className="section-title">
                Why Choose <em>Nirvana Niche Products Private Limited</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                Engineering excellence backed by Samvardhana Motherson standards, verified ISO 9001:2015 certifications, and nationwide lifecycle support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_CHOOSE.map((item) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={item.title}
                    className="card p-6 border border-brand-border hover:border-brand-red hover:shadow-card-hover transition-all duration-300 bg-white flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-3.5 rounded-xl bg-brand-light text-brand-red w-fit mb-4 shadow-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-brand-dark text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-brand-red mb-2">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 8: CUSTOM FABRICATION IN SS, MS & ALUMINIUM
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-light border-y border-brand-border" id="fabrication">
          <div className="site-container">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7">
                <span className="section-label">Custom Manufacturing</span>
                <h2 className="section-title">
                  Custom Fabrication in{' '}
                  <em>SS, MS & Aluminium</em>
                </h2>
                <span className="red-bar" />
                <p className="section-desc">
                  Purpose-built kitchen equipment and fabrication solutions developed around your dimensions, specifications, and site requirements. Every piece is fabricated in our Noida plant with industrial precision.
                </p>

                {/* 3 Material Highlights */}
                <div className="mt-8 space-y-4">
                  {FABRICATION_MATERIALS.map((m) => (
                    <div
                      key={m.grade}
                      className="p-4 rounded-xl bg-white border border-brand-border shadow-sm hover:border-brand-red/50 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                        <h4 className="font-bold text-brand-dark text-sm sm:text-base">
                          {m.grade}
                        </h4>
                      </div>
                      <p className="text-xs text-brand-charcoal/80 leading-relaxed mb-2.5 ml-4">
                        {m.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 ml-4">
                        {m.features.map((feat) => (
                          <span
                            key={feat}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-charcoal/90 bg-brand-light px-2.5 py-0.5 rounded-full border border-brand-border/60"
                          >
                            <CheckCircle2 className="w-3 h-3 text-brand-red" />
                            <span>{feat}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-8">
                  <Link href="#quote-form" className="btn-primary inline-flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <span>Request Custom Fabrication Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/fabrication" className="btn-outline inline-flex items-center justify-center text-xs sm:text-sm">
                    Explore Fabrication Services
                  </Link>
                </div>
              </div>

              {/* Large Image Showcase */}
              <div className="lg:col-span-5">
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-brand-border bg-brand-dark aspect-[4/3] lg:aspect-[5/6]">
                  <Image
                    src="/images/hero-commercial-kitchen.jpg"
                    alt="Custom Stainless Steel Commercial Kitchen Fabrication & Equipment Setup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent pointer-events-none" />
                  
                  <div className="absolute top-4 right-4 bg-brand-dark/85 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                    SS 304 / MS / Aluminium
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-red block mb-1">
                      Bespoke Factory Assembly
                    </span>
                    <h4 className="text-lg font-bold text-white mb-1">
                      Engineered to Architectural Drawings
                    </h4>
                    <p className="text-xs sm:text-sm font-normal text-white/90 leading-relaxed">
                      Custom SS 304 counters, heavy-duty cooking ranges, dishlanding sink units, and exhaust canopies built to exact kitchen floor plans.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 9: INDUSTRIES WE SERVE
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-white" id="industries">
          <div className="site-container">
            
            <div className="max-w-2xl mb-12">
              <span className="section-label">Sectors We Supply</span>
              <h2 className="section-title">
                Built for Every <em>Commercial Kitchen</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                We manufacture, supply, and commission commercial kitchen equipment across India&apos;s most demanding hospitality, medical, corporate, and institutional facilities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {INDUSTRIES.map((ind) => {
                const IconComponent = ind.icon
                return (
                  <div
                    key={ind.label}
                    className="card p-5 hover:border-brand-red hover:shadow-card-hover transition-all duration-300 cursor-default bg-white flex items-start gap-4"
                  >
                    <div className="p-3 rounded-xl bg-brand-light text-brand-red flex-shrink-0 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-brand-dark mb-1">
                        {ind.label}
                      </h3>
                      <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 10: CLIENT LOGOS & CERTIFICATION PRESENTATION
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-light border-y border-brand-border" id="clients">
          <div className="site-container">
            
            <div className="max-w-2xl mb-10">
              <span className="section-label">Enterprise Credentials</span>
              <h2 className="section-title">
                Trusted by <em>1,000+ Clients</em> Across India
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                From national dairy cooperatives and quick-service restaurant chains to pharmaceutical and industrial facilities.
              </p>
            </div>

            {/* Authentic Client Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 mb-12">
              {CLIENTS.map((name) => (
                <div
                  key={name}
                  className="px-4 py-3 rounded-xl border border-brand-border bg-white text-center shadow-sm flex items-center justify-center font-bold text-sm text-brand-dark hover:border-brand-red hover:shadow-card transition-all"
                >
                  <span>{name}</span>
                </div>
              ))}
            </div>

            {/* Official ISO 9001:2015 Certification Element */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 sm:p-7 rounded-2xl border-l-4 border-brand-red bg-white shadow-card border border-brand-border">
              <div className="p-3.5 rounded-xl bg-brand-light text-brand-red flex-shrink-0">
                <Award className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className="font-extrabold text-brand-dark text-base sm:text-lg">
                    ISO 9001:2015 Quality Management Certified
                  </h4>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    Active & Verified
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                  Certificate No. <strong>VW26100063</strong> — Issued by Vatsin World Services Pvt. Ltd. with International Accreditation Forum (IAF) accreditation for manufacturing of commercial kitchen equipment, stainless steel fabrication, and turnkey kitchen solutions.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 11: REAL PROJECT / APPLICATION GALLERY
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-white" id="gallery">
          <div className="site-container">
            
            <div className="max-w-3xl mb-12">
              <span className="section-label">Real Working Environments</span>
              <h2 className="section-title">
                Commercial Kitchen Solutions in <em>Real Working Environments</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                Engineering designs, stainless steel fabrication, and turnkey commercial equipment installations deployed across high-demand culinary spaces.
              </p>
            </div>

            {/* 4 Curated Real Application Photos in Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {GALLERY_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl overflow-hidden border border-brand-border shadow-card bg-white hover:shadow-card-hover transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-4 left-4 bg-brand-dark/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-brand-dark text-base sm:text-lg mb-2 group-hover:text-brand-red transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs font-semibold text-brand-red">
                      <span>Stainless Steel Execution</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 12: INFORMATIVE FAQ SECTION
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-light border-y border-brand-border" id="faq">
          <div className="site-container">
            
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="section-label">Buyer Guidance & Specifications</span>
              <h2 className="section-title">
                Frequently Asked <em>Questions</em>
              </h2>
              <span className="red-bar mx-auto" />
              <p className="section-desc mx-auto">
                Verified answers covering commercial kitchen equipment selection, custom stainless steel fabrication, materials, planning, and pan-India support.
              </p>
            </div>

            {/* Embedded Accessible Accordion Component */}
            <FAQAccordion />

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SECTION 13: HIGH-CONVERSION CONTACT SECTION & LIVE QUOTE FORM
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-dark text-white relative overflow-hidden" id="quote-form">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="site-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column — Direct Contact Information */}
              <div className="lg:col-span-5 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-3">
                  Direct Manufacturer Engagement
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Ready to Build Your <em>Commercial Kitchen?</em>
                </h2>
                <div className="w-16 h-1 bg-brand-red rounded-full my-6" />
                
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                  Discuss your commercial equipment requirements, custom SS fabrication needs, or complete turnkey kitchen project directly with our factory engineering team.
                </p>

                {/* Direct Verified Contact Channels */}
                <div className="space-y-4 mb-8">
                  
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                    <div className="p-2.5 rounded-lg bg-white/10 text-brand-red flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-white/60 block">Direct Sales & Project Inquiries</span>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                        <a href="tel:+917042933825" className="text-sm font-bold text-white hover:text-brand-red transition-colors">
                          +91 7042933825
                        </a>
                        <span className="text-white/40">·</span>
                        <a href="tel:+917303090998" className="text-sm font-bold text-white hover:text-brand-red transition-colors">
                          +91 7303090998
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                    <div className="p-2.5 rounded-lg bg-white/10 text-brand-red flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-white/60 block">Official Engineering Email</span>
                      <a
                        href="mailto:Info.nnpplindia@motherson.com"
                        className="text-sm font-bold text-white hover:text-brand-red transition-colors break-all"
                      >
                        Info.nnpplindia@motherson.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                    <div className="p-2.5 rounded-lg bg-white/10 text-brand-red flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-white/60 block">Factory & Head Office</span>
                      <p className="text-sm font-medium text-white/90 mt-0.5">
                        Plot D 59–60, Sector-6, Noida, Uttar Pradesh 201301, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                    <div className="p-2.5 rounded-lg bg-white/10 text-brand-red flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-white/60 block">Operating Hours</span>
                      <p className="text-sm font-medium text-white/90 mt-0.5">
                        Monday – Saturday: 9:30 AM – 6:30 PM IST
                      </p>
                    </div>
                  </div>

                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="tel:+917042933825"
                    className="btn-primary text-xs sm:text-sm px-5 sm:px-6 py-3 inline-flex items-center justify-center gap-2 font-bold min-h-[44px]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Sales Desk Now</span>
                  </a>
                  <a
                    href="mailto:Info.nnpplindia@motherson.com"
                    className="px-5 py-3 rounded-btn bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-colors inline-flex items-center justify-center min-h-[44px]"
                  >
                    Send Email
                  </a>
                </div>
              </div>

              {/* Right Column — Live Interactive Quote Form */}
              <div className="lg:col-span-7">
                <QuoteForm />
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
