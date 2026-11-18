'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const FABRICATION_SOLUTIONS = [
  {
    id: 'worktables',
    num: '01',
    title: 'Stainless Steel Worktables',
    tagline: 'Heavy-Duty Prep & Butchery Surfaces',
    desc: 'Custom-designed stainless steel worktables for food preparation, ingredient handling, and everyday commercial kitchen operations. Available in configurations suited to your workspace and functional requirements.',
    image: '/images/fab-ss-worktable.png',
    badge: 'AISI 304 Food-Grade',
    features: [
      'Sound-deadened 16 SWG under-tops with heavy reinforcement channels',
      'Adjustable heavy-duty bullet feet for uneven floor leveling',
      'Custom splashback height (50mm–150mm) & undershelf configurations',
      'Available with removable polyethylene butcher cutting blocks',
    ],
    specs: {
      gauge: '16 / 14 SWG (1.5mm – 2.0mm)',
      grade: 'AISI 304 / AISI 316',
      finish: 'No. 4 Satin Brush Finish',
      load: 'Up to 350 kg uniform load',
    },
  },
  {
    id: 'prep-counters',
    num: '02',
    title: 'Customized Preparation Counters',
    tagline: 'Optimized Workflow & Ergonomic Heights',
    desc: 'Practical preparation counters designed around your kitchen layout, working height, storage needs, and operational workflow to support organized food preparation.',
    image: '/images/fab-prep-counter.jpg',
    badge: 'Ergonomic Workflow',
    features: [
      'Integrated food-grade HDPE cutting board inserts',
      'Built-in prep sink bowls with swivel gooseneck faucets',
      'Drop-in GN 1/3, 1/6 pan cutouts for instant topping & spice access',
      'Undercounter ambient or refrigerated storage integration',
    ],
    specs: {
      gauge: '16 SWG Stainless Steel',
      grade: 'AISI 304 (Food Contact Safe)',
      finish: 'Scotch-Brite Satin',
      height: 'Standard 850mm or custom tailored',
    },
  },
  {
    id: 'washing-stations',
    num: '03',
    title: 'Stainless Steel Sinks & Washing Stations',
    tagline: 'Deep-Drawn Sanitary Pot & Utensil Sinks',
    desc: 'Customized washing solutions for commercial kitchens, including sink units and washing stations planned according to available space and operational requirements.',
    image: '/images/fab-washing-sink.png',
    badge: 'Sanitary TIG Welded',
    features: [
      'Single, double & triple deep-drawn sink bowls (up to 450mm depth)',
      'Integral pitched drainboards for rapid sanitary water runoff',
      'Pre-punched tap holes for commercial pre-rinse spray units',
      'Continuous rear splashguards with 90° returned edge to prevent seepage',
    ],
    specs: {
      gauge: '14 / 16 SWG Heavy Duty',
      grade: 'AISI 304 Non-Corrosive',
      welding: 'Argon Purged Sanitary TIG',
      waste: 'Standard 38mm / 50mm Brass/SS coupling',
    },
  },
  {
    id: 'storage-racks',
    num: '04',
    title: 'Storage Racks & Shelving Systems',
    tagline: 'High-Density Space-Efficient Organization',
    desc: 'Space-efficient storage solutions for kitchen utensils, ingredients, cookware, and supplies, helping maintain an organized working environment.',
    image: '/images/fab-storage-shelving.jpg',
    badge: 'High Load Capacity',
    features: [
      'Available in 4-tier and 5-tier solid or slotted / dunnage shelf profiles',
      'Perforated air-circulation shelves for dry store and walk-in cold rooms',
      'Square tube uprights with heavy-duty gusset support brackets',
      'Rust-proof & moisture-resistant construction for damp dish-pit areas',
    ],
    specs: {
      gauge: '16 SWG Shelves / 14 SWG Uprights',
      grade: 'AISI 304 / 202 options',
      load: '200 kg per shelf tier',
      adjustability: 'Fixed or 50mm pitch adjustable',
    },
  },
  {
    id: 'trolleys',
    num: '05',
    title: 'Stainless Steel Trolleys',
    tagline: 'Smooth Transportation & Clearing Solutions',
    desc: 'Functional utility and transportation trolleys designed to support the movement of kitchen supplies, utensils, and materials within commercial facilities.',
    image: '/images/fab-trolleys.jpg',
    badge: 'Heavy-Duty Castors',
    features: [
      '2-tier & 3-tier deep-lipped utility and clearing trolley models',
      'Four non-marking swivel polyurethane castors (2 equipped with brakes)',
      'Ergonomic tubular push handles welded seamlessly to chassis',
      'Impact corner rubber bumpers to safeguard doors and walls',
    ],
    specs: {
      gauge: '16 SWG Pressed Trays',
      grade: 'AISI 304 Stainless Steel',
      castors: '100mm / 125mm Heavy Duty Swivel',
      capacity: 'Up to 150 kg payload',
    },
  },
  {
    id: 'exhaust-hoods',
    num: '06',
    title: 'Customized Exhaust Hoods & Counters',
    tagline: 'High-Velocity Smoke & Heat Extraction',
    desc: 'Fabrication options for selected kitchen hoods, counters, and related stainless steel fixtures, based on project specifications and kitchen requirements.',
    image: '/images/fab-exhaust-island.png',
    badge: 'Baffle Filter System',
    features: [
      'Island canopies, wall-mounted box type & compensator hoods',
      'Removable commercial stainless steel baffle grease filters',
      'Continuous grease gutter trough with brass drainage drain tap',
      'Integrated heat-resistant vapor-proof LED flush lighting',
    ],
    specs: {
      gauge: '18 / 16 SWG Stainless Steel',
      grade: 'AISI 304 / AISI 430',
      extraction: 'Calculated CFM sizing per equipment line',
      filters: 'Flame-retardant SS Baffle Filters',
    },
  },
  {
    id: 'dish-landing',
    num: '07',
    title: 'Dish Landing Tables & Utility Units',
    tagline: 'Hygienic Flow for Warewashing Areas',
    desc: 'Practical stainless steel units designed for dishwashing areas, utensil handling, and organized movement between washing and storage zones.',
    image: '/images/fab-dish-landing.jpg',
    badge: 'Hygienic Flow',
    features: [
      'Direct slide-in rail channels connecting to hood-type dishwashers',
      'Circular rubber-collared scraping holes for quick organic waste bin drop',
      'Overhead basket storage racks for clean commercial 500x500mm racks',
      'Sloped drain surfaces preventing water pooling and bacterial buildup',
    ],
    specs: {
      gauge: '16 SWG 304 Stainless Steel',
      grade: 'AISI 304 Full Corrosion Resistance',
      design: 'Left-to-Right or Right-to-Left entry',
      accessories: 'Pre-rinse sink with scraper collar',
    },
  },
  {
    id: 'made-to-measure',
    num: '08',
    title: 'Made-to-Measure Kitchen Equipment',
    tagline: 'Custom Shapes & CNC Laser Blueprints',
    desc: 'Have a specific design or unusual kitchen requirement? We help explore customized fabrication options based on your dimensions, intended application, material preferences, and functional needs.',
    image: '/images/fab-cnc-laser.jpg',
    badge: '100% Bespoke CNC',
    features: [
      'High-precision fiber laser cutting with ±0.1mm dimensional tolerance',
      'CNC press-brake hydraulic bending for seamless crevice-free folds',
      'Bespoke shapes for columns, curved corners, and narrow galleys',
      'Prototype sample validation before volume commercial production',
    ],
    specs: {
      cutting: 'High-Power CNC Fiber Laser',
      forming: 'Multi-axis CNC Press Brake',
      tolerance: '± 0.1 mm precision',
      customization: 'Any dimension, grade or geometry',
    },
  },
]

const WHY_CHOOSE = [
  {
    title: 'Made to Your Specifications',
    desc: 'Equipment dimensions and configurations can be planned around your available space and project requirements.',
    icon: '📏',
    stat: '100% Custom',
  },
  {
    title: 'Practical Space Utilization',
    desc: 'Custom fabrication helps accommodate challenging layouts and make better use of available kitchen space.',
    icon: '📐',
    stat: 'Zero Wasted Space',
  },
  {
    title: 'Durable Material Options',
    desc: 'Stainless steel grades, finishes, and construction specifications can be selected according to the intended application and project needs.',
    icon: '🛡️',
    stat: 'SS 304 / 316 Food-Grade',
  },
  {
    title: 'Hygiene-Conscious Design',
    desc: 'Smooth, accessible surfaces and practical construction details can support routine cleaning and maintenance.',
    icon: '✨',
    stat: 'Crevice-Free TIG Joints',
  },
  {
    title: 'Functional & Efficient Layouts',
    desc: 'Equipment placement and design can help support convenient movement between preparation, cooking, washing, and storage areas.',
    icon: '⚡',
    stat: 'Ergonomic Flow',
  },
  {
    title: 'Solutions for Multiple Industries',
    desc: 'We support customized equipment requirements for hospitality, food service, healthcare, educational institutions, industrial kitchens, and catering operations.',
    icon: '🌐',
    stat: 'Cross-Industry',
  },
]

const FAB_PROCESS = [
  {
    step: 'Step 1',
    num: '01',
    title: 'Requirement Discussion',
    desc: 'We understand your business needs, equipment requirements, kitchen dimensions, and intended use.',
    tag: 'Consultation',
  },
  {
    step: 'Step 2',
    num: '02',
    title: 'Design & Measurements',
    desc: 'We review the available space and discuss suitable dimensions, configurations, and functional requirements.',
    tag: 'CAD Blueprints',
  },
  {
    step: 'Step 3',
    num: '03',
    title: 'Material & Specification Selection',
    desc: 'We help determine appropriate material grades, finishes, and construction details according to the project.',
    tag: 'SS 304/316 Specs',
  },
  {
    step: 'Step 4',
    num: '04',
    title: 'Fabrication',
    desc: 'Once the specifications are approved, fabrication proceeds according to the agreed design and requirements.',
    tag: 'CNC & TIG Welding',
  },
  {
    step: 'Step 5',
    num: '05',
    title: 'Quality Inspection',
    desc: 'The finished equipment is checked against the agreed specifications, including dimensions, finish, and workmanship.',
    tag: 'ISO 9001 Audit',
  },
  {
    step: 'Step 6',
    num: '06',
    title: 'Delivery & Installation Coordination',
    desc: 'Delivery and installation arrangements are coordinated according to the project scope and agreed terms.',
    tag: 'Site Handover',
  },
]

const INDUSTRIES = [
  { name: 'Hotels & Resorts', icon: '🏨', desc: 'Heavy-duty buffet, banqueting & prep stations' },
  { name: 'Restaurants & Cafés', icon: '🍽️', desc: 'Compact pass counters & bespoke cook lines' },
  { name: 'Commercial Kitchens', icon: '🍳', desc: 'High-capacity production kitchens' },
  { name: 'Industrial Canteens', icon: '🏭', desc: 'Mass feeding & high-throughput washing zones' },
  { name: 'Hospitals & Healthcare Facilities', icon: '🏥', desc: 'Sanitary AISI 304 sterile kitchen gear' },
  { name: 'Schools, Colleges & Universities', icon: '🎓', desc: 'Durable institutional dining counters' },
  { name: 'Bakeries & Food Production Units', icon: '🥐', desc: 'Flour-proof & humidity-tolerant tables' },
  { name: 'Cloud Kitchens & Catering Businesses', icon: '🚀', desc: 'Modular multi-brand kitchen bays' },
  { name: 'Food Courts & Institutional Kitchens', icon: '🏢', desc: 'Quick-service pickup & display counters' },
]

export default function CustomFabricationPage() {
  const [selectedSolution, setSelectedSolution] = useState(FABRICATION_SOLUTIONS[0].id)
  const [activeStep, setActiveStep] = useState(0)
  const [galleryFilter, setGalleryFilter] = useState('all')

  // Quick form inquiry state
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    equipmentType: 'Stainless Steel Worktables',
    dimensions: '',
    ssGrade: 'SS 304 (Standard Food Grade)',
    notes: '',
  })

  const activeSolutionObj = FABRICATION_SOLUTIONS.find((s) => s.id === selectedSolution) || FABRICATION_SOLUTIONS[0]

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-brand-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* ════════════════════════════════════════════════════════════════
            HERO BANNER (With User's Exact Title & Subtitle)
        ════════════════════════════════════════════════════════════════ */}
        <section className="relative bg-brand-dark text-white py-10 sm:py-12 md:py-14 lg:py-16 overflow-hidden">
          {/* Background image of commercial kitchen with custom exhaust hoods - Full HD lossless */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/fab-exhaust-island.png"
              alt="Custom Stainless Steel Commercial Kitchen Equipment Fabrication"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-right md:object-center opacity-100"
            />
            {/* Subtle left scrim for text contrast - right side kitchen equipment is 100% crystal clear in Full HD */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent w-full md:w-2/3" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="site-container relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-white/60 mb-3 sm:mb-4 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-red font-semibold">Custom Fabrication Services</span>
            </div>

            {/* Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>Custom Fabrication Services</span>
            </div>

            {/* Exact User Headings */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl tracking-tight drop-shadow-lg">
              Custom Stainless Steel{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                Commercial Kitchen Equipment
              </span>{' '}
              Fabrication
            </h1>

            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-brand-red rounded-full my-4 sm:my-6 shadow-md" />

            <p className="text-base sm:text-lg md:text-xl text-white font-semibold max-w-3xl leading-relaxed mb-3 sm:mb-4 drop-shadow-md">
              Precision-Built. Space-Efficient. Designed Around Your Needs.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-3xl font-light leading-relaxed mb-6 sm:mb-8 drop-shadow-md">
              At Nirvana Niche Products Private Limited, we specialize in customized commercial kitchen fabrication solutions
              designed to meet the unique requirements of hotels, restaurants, industrial canteens, hospitals, bakeries,
              cloud kitchens, and institutional kitchens.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#custom-solutions"
                className="btn-primary text-xs sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 shadow-xl font-bold hover:scale-[1.02] active:scale-95 transition-all text-center justify-center min-h-[44px]"
              >
                Our 8 Fabrication Solutions ↓
              </a>
              <a
                href="#quote-form"
                className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-btn bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-xs sm:text-base border border-white/30 transition-all hover:scale-[1.02] text-center inline-flex items-center justify-center min-h-[44px]"
              >
                Request Custom Quote
              </a>
              <a
                href="tel:+917042933825"
                className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-btn bg-black/60 hover:bg-black/80 backdrop-blur-md text-white font-medium text-xs sm:text-sm border border-white/25 transition-all inline-flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] min-h-[44px]"
              >
                <span>📞 Abhay Asthana:</span>
                <span className="text-red-400 font-bold">+91 7042933825</span>
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            FABRICATION OVERVIEW & TIG WELDING CRAFTSMANSHIP
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-white" id="overview">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Exact Narrative Provided by User */}
              <div className="lg:col-span-7">
                <span className="section-label">Tailored Solutions</span>
                <h2 className="section-title">
                  Custom Fabrication Engineered for <em>Your Exact Blueprint</em>
                </h2>
                <span className="red-bar" />

                <div className="space-y-4 text-brand-charcoal text-base sm:text-lg leading-relaxed">
                  <p>
                    We understand that every commercial kitchen has different space constraints, workflow requirements, and operational demands. Our custom fabrication solutions help businesses make the most of their available space with practical designs, durable materials, and functional equipment tailored to their specifications.
                  </p>
                  <p className="text-sm sm:text-base text-brand-charcoal/85">
                    From stainless steel worktables and preparation counters to washing stations, storage racks, trolleys, and specialized kitchen fixtures, we help transform your kitchen requirements into practical equipment solutions.
                  </p>
                </div>

                {/* Capability highlight box */}
                <div className="mt-8 p-6 rounded-2xl bg-brand-light border-l-4 border-brand-red shadow-sm space-y-2">
                  <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wide flex items-center gap-2">
                    <span className="text-brand-red text-base">●</span>
                    Need customized kitchen equipment?
                  </h4>
                  <p className="text-sm text-brand-charcoal leading-relaxed">
                    Contact our team to discuss your project. We review drawings, perform on-site measurements, and deliver precision equipment fabricated at our Sector-6, Noida plant.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-4 items-center">
                    <a href="#quote-form" className="text-xs font-bold text-brand-red hover:underline inline-flex items-center gap-1">
                      <span>Submit Dimensions / Equipment List</span>
                      <span>→</span>
                    </a>
                    <span className="text-xs text-brand-charcoal/40">|</span>
                    <a href="tel:+917042933825" className="text-xs font-bold text-brand-dark hover:text-brand-red inline-flex items-center gap-1">
                      <span>Sales &amp; Marketing: +91 7042933825</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Visual — Precision TIG Welding Photo */}
              <div className="lg:col-span-5">
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-brand-border bg-brand-dark aspect-[4/3]">
                  <Image
                    src="/images/fab-tig-welding.jpg"
                    alt="Precision Stainless Steel TIG Welding at Nirvana Noida Plant"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/30 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-brand-dark/85 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                    AISI 304 / 316 Stainless Steel
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-xs font-bold text-brand-red uppercase tracking-wider">Sanitary Argon TIG Welding</p>
                    <p className="text-sm font-medium text-white/95 mt-1 leading-snug">
                      Seamless, crevice-free joint fabrication prevents bacterial accumulation, food particle trap, and kitchen corrosion.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            OUR CUSTOM FABRICATION SOLUTIONS (Interactive Solution Hub)
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-light border-y border-brand-border" id="custom-solutions">
          <div className="site-container">
            <div className="max-w-3xl mb-12">
              <span className="section-label">Equipment Lineup</span>
              <h2 className="section-title">
                Our Custom <em>Fabrication Solutions</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                Click on any solution below to preview full engineering details, equipment photography, and technical specifications.
              </p>
            </div>

            {/* Interactive Solution Selector Bar with Smooth Transition */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1.5 sm:gap-2 mb-8 p-2 sm:p-2.5 bg-white rounded-2xl border border-brand-border shadow-sm">
              {FABRICATION_SOLUTIONS.map((sol) => {
                const isSelected = selectedSolution === sol.id
                return (
                  <button
                    key={sol.id}
                    onClick={() => setSelectedSolution(sol.id)}
                    className={`p-2.5 sm:p-3 rounded-xl text-left transition-all duration-300 relative group min-h-[44px] ${
                      isSelected
                        ? 'bg-brand-red text-white shadow-lg scale-[1.02]'
                        : 'text-brand-charcoal hover:bg-brand-light hover:text-brand-dark'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[11px] font-black ${isSelected ? 'text-white' : 'text-brand-red'}`}>
                        {sol.num}
                      </span>
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      )}
                    </div>
                    <span className="text-xs font-bold line-clamp-1 block">
                      {sol.title.replace('Stainless Steel ', '').replace('Customized ', '')}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Active Solution Spotlight Feature Card with Smooth Transition */}
            <div
              key={activeSolutionObj.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-border shadow-card mb-12 animate-fadeIn transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Information */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="text-xs font-bold text-brand-red bg-brand-red/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {activeSolutionObj.badge}
                    </span>
                    <span className="text-xs font-semibold text-brand-charcoal/60">
                      Solution {activeSolutionObj.num} of 08
                    </span>
                    <span className="text-xs text-brand-charcoal/40">•</span>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      Custom Sizing Available
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark mb-2">
                    {activeSolutionObj.title}
                  </h3>
                  <p className="text-sm font-semibold text-brand-red mb-4">
                    {activeSolutionObj.tagline}
                  </p>

                  <p className="text-base sm:text-lg text-brand-charcoal leading-relaxed mb-6">
                    {activeSolutionObj.desc}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2.5 mb-8">
                    {activeSolutionObj.features.map((f) => (
                      <div key={f} className="flex items-start gap-3 text-sm text-brand-dark font-medium">
                        <span className="w-5 h-5 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Specs Pill Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-brand-light border border-brand-border/60 mb-8">
                    {Object.entries(activeSolutionObj.specs).map(([key, val]) => (
                      <div key={key}>
                        <span className="text-[10px] font-bold text-brand-charcoal/60 uppercase tracking-wider block">
                          {key}
                        </span>
                        <span className="text-xs font-bold text-brand-dark block mt-0.5">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="#quote-form"
                      onClick={() => setFormData((prev) => ({ ...prev, equipmentType: activeSolutionObj.title }))}
                      className="btn-primary text-sm px-7 py-3"
                    >
                      Request Quote for {activeSolutionObj.title.split(' ')[0]} →
                    </a>
                    <a
                      href="tel:+917042933825"
                      className="text-xs font-bold text-brand-charcoal hover:text-brand-red transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>📞 Direct Call: +91 7042933825</span>
                    </a>
                  </div>
                </div>

                {/* Right Visual Photo with Transition & Zoom */}
                <div className="lg:col-span-5">
                  <div className="relative group rounded-2xl overflow-hidden shadow-2xl border border-brand-border bg-brand-dark aspect-[4/3]">
                    <Image
                      src={activeSolutionObj.image}
                      alt={activeSolutionObj.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge on Photo */}
                    <div className="absolute top-4 right-4 bg-brand-dark/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                      Nirvana Niche Products Plant
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-bold text-brand-red uppercase tracking-wider">
                        {activeSolutionObj.badge}
                      </p>
                      <p className="text-sm font-bold text-white mt-0.5">
                        {activeSolutionObj.title}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Complete 8 Solutions Interactive Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FABRICATION_SOLUTIONS.map((sol) => {
                const isSelected = selectedSolution === sol.id
                return (
                  <div
                    key={sol.id}
                    onClick={() => setSelectedSolution(sol.id)}
                    className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 bg-white flex flex-col justify-between group ${
                      isSelected
                        ? 'border-brand-red ring-2 ring-brand-red/30 shadow-card-hover -translate-y-1.5'
                        : 'border-brand-border shadow-sm hover:border-brand-red/60 hover:-translate-y-1 hover:shadow-card'
                    }`}
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative h-44 rounded-xl overflow-hidden mb-4 bg-brand-light border border-brand-border/60">
                        <Image
                          src={sol.image}
                          alt={sol.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-brand-dark/90 backdrop-blur-md text-white text-[10px] font-black">
                          {sol.num}
                        </span>
                        {isSelected && (
                          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-brand-red text-white text-[10px] font-bold shadow-md">
                            Active
                          </span>
                        )}
                      </div>

                      <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider block mb-1">
                        {sol.badge}
                      </span>
                      <h4 className="font-extrabold text-brand-dark text-base mb-2 group-hover:text-brand-red transition-colors line-clamp-1">
                        {sol.title}
                      </h4>
                      <p className="text-xs text-brand-charcoal/80 leading-relaxed line-clamp-3 mb-4">
                        {sol.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-brand-border/70 flex items-center justify-between text-xs font-bold text-brand-red">
                      <span>View Specifications</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            WHY CHOOSE NIRVANA FOR CUSTOM FABRICATION? (6 Core Pillars)
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-white" id="why-choose">
          <div className="site-container">
            <div className="max-w-3xl mb-14">
              <span className="section-label">Our Advantages</span>
              <h2 className="section-title">
                Why Choose Nirvana for <em>Custom Fabrication?</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                We combine heavy industrial machinery with artisan stainless steel metalworking to deliver equipment that lasts for decades.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-7 rounded-3xl border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-red hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl p-3 rounded-2xl bg-brand-light inline-block group-hover:scale-110 group-hover:bg-brand-red/10 transition-all duration-300">
                        {item.icon}
                      </span>
                      <span className="text-[10px] font-bold text-brand-red bg-brand-red/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {item.stat}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-brand-dark text-lg mb-2 group-hover:text-brand-red transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-charcoal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            OUR CUSTOM FABRICATION PROCESS (Step 1 to Step 6)
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-dark text-white relative overflow-hidden" id="process">
          <div className="site-container relative z-10">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-3">Our Process</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Our Custom Fabrication{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                  Process
                </span>
              </h2>
              <div className="w-20 h-1.5 bg-brand-red rounded-full my-6" />
              <p className="text-white/85 text-base sm:text-lg leading-relaxed font-light">
                A disciplined six-stage methodology ensuring total accuracy from initial blueprint review to final on-site installation.
              </p>
            </div>

            {/* Stepper with Hover Transitions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FAB_PROCESS.map((p, idx) => (
                <div
                  key={p.num}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`p-7 rounded-3xl border transition-all duration-300 group relative ${
                    activeStep === idx
                      ? 'bg-white/10 border-brand-red shadow-2xl -translate-y-1.5 ring-1 ring-brand-red/50'
                      : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-brand-red text-white flex items-center justify-center font-black text-sm shadow-md group-hover:scale-110 transition-transform">
                      {p.num}
                    </div>
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider block mb-1">
                    {p.step}
                  </span>
                  <h4 className="font-extrabold text-white text-lg mb-2 group-hover:text-rose-300 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Noida Plant Callout */}
            <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <span className="text-3xl">🏭</span>
                <div>
                  <h5 className="font-bold text-white text-sm">State-of-the-Art Fabrication Plant at Sector 6, Noida</h5>
                  <p className="text-xs text-white/70 mt-0.5">Equipped with CNC fiber laser, hydraulic sheet bending & argon welding stations.</p>
                </div>
              </div>
              <a
                href="#quote-form"
                className="btn-primary text-xs px-5 sm:px-6 py-2.5 sm:py-3 whitespace-nowrap min-h-[44px] w-full sm:w-auto text-center inline-flex items-center justify-center"
              >
                Schedule Factory Visit →
              </a>
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            INDUSTRIES WE SERVE (9 Sectors Grid)
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-white" id="industries">
          <div className="site-container">
            <div className="max-w-3xl mb-12">
              <span className="section-label">Versatile Applications</span>
              <h2 className="section-title">
                Industries We <em>Serve</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                Our custom fabrication solutions are suitable for diverse hospitality, institutional, and commercial catering environments:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIES.map((ind) => (
                <div
                  key={ind.name}
                  className="p-6 rounded-2xl border border-brand-border bg-brand-light/40 hover:bg-white shadow-sm hover:shadow-card-hover hover:border-brand-red hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 group"
                >
                  <span className="text-3xl p-3 rounded-2xl bg-white group-hover:scale-110 transition-transform duration-200 shadow-sm flex-shrink-0">
                    {ind.icon}
                  </span>
                  <div>
                    <h4 className="font-extrabold text-brand-dark text-base group-hover:text-brand-red transition-colors">
                      {ind.name}
                    </h4>
                    <p className="text-xs text-brand-charcoal/80 mt-1 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            CUSTOM FABRICATION FOR YOUR NEXT KITCHEN PROJECT (CTA Banner)
        ════════════════════════════════════════════════════════════════ */}
        <section className="bg-brand-red text-white py-16 lg:py-20 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"
          />
          <div className="site-container relative z-10 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-white/80 block mb-2">
              Project Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Custom Fabrication for Your Next Kitchen Project
            </h2>
            <p className="text-white/95 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed font-light">
              Whether you are developing a new commercial kitchen, upgrading an existing facility, or replacing equipment with customized alternatives, Nirvana Niche Products Private Limited can help you explore a suitable solution.
            </p>
            <p className="text-white font-semibold text-base mt-2">
              Share your kitchen dimensions, equipment list, drawings, or project requirements with our team to discuss the next steps.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-8">
              <a
                href="#quote-form"
                className="btn-white text-xs sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 shadow-xl font-bold hover:scale-105 active:scale-95 transition-all text-center justify-center min-h-[44px]"
              >
                Request a Custom Fabrication Enquiry
              </a>
              <a
                href="tel:+917042933825"
                className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-btn bg-brand-red-deep/50 hover:bg-brand-red-deep border border-white/30 text-white font-semibold text-xs sm:text-base transition-colors text-center inline-flex items-center justify-center min-h-[44px]"
              >
                Call: +91 7042933825
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            INTERACTIVE CUSTOM FABRICATION INQUIRY FORM
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-light" id="quote-form">
          <div className="site-container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-2xl">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="section-label">Fast Track Quote</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark">
                    Share Your Fabrication Requirements
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal mt-2">
                    Enter your dimensions, preferred stainless steel grade, or equipment list. Our engineering team responds within 24 working hours.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fadeIn">
                    <span className="text-4xl block mb-2">✅</span>
                    <h4 className="text-lg font-bold text-emerald-900">Enquiry Submitted Successfully!</h4>
                    <p className="text-sm text-emerald-800 mt-2 max-w-md mx-auto">
                      Thank you for contacting Nirvana Niche Products Private Limited. Abhay Asthana and our engineering team will review your specifications and contact you shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 text-xs font-bold text-emerald-700 underline"
                    >
                      Submit another requirement
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikram Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red bg-brand-light/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                          Contact Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red bg-brand-light/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                          Official Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. kitchen@hotelgrand.com"
                          className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red bg-brand-light/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                          Equipment Solution Required
                        </label>
                        <select
                          value={formData.equipmentType}
                          onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red bg-brand-light/30"
                        >
                          {FABRICATION_SOLUTIONS.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.num}. {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                          Approx Dimensions (L x W x H in mm or feet)
                        </label>
                        <input
                          type="text"
                          value={formData.dimensions}
                          onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                          placeholder="e.g. 1800 x 750 x 850 mm"
                          className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red bg-brand-light/30"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                          Stainless Steel Grade Preference
                        </label>
                        <select
                          value={formData.ssGrade}
                          onChange={(e) => setFormData({ ...formData, ssGrade: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red bg-brand-light/30"
                        >
                          <option value="SS 304 (Standard Food Grade)">AISI 304 (Food-Grade Stainless Steel)</option>
                          <option value="SS 316 (Acid & Chemical Resistant)">AISI 316 (High Acid & Chemical Resistance)</option>
                          <option value="SS 202 (Economy Commercial)">AISI 202 (Economy Dry Area Commercial)</option>
                          <option value="Need Guidance">Need Engineering Recommendation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                        Project Details / Custom Specifications / Remarks
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us about your kitchen space, layout drawings, splashback requirements, or custom shelves..."
                        className="w-full px-4 py-3 rounded-xl border border-brand-border text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-red bg-brand-light/30"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-border">
                      <p className="text-[11px] text-brand-charcoal/70">
                        🔒 Direct dispatch to Sales Manager Abhay Asthana &amp; engineering team.
                      </p>
                      <button
                        type="submit"
                        className="btn-primary text-base px-8 py-3.5 shadow-lg w-full sm:w-auto"
                      >
                        Submit Custom Fabrication Request →
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            REQUEST A CUSTOM FABRICATION ENQUIRY (Exact Contacts Provided)
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-white" id="contact">
          <div className="site-container">
            <div className="max-w-2xl mb-12">
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title">
                Request a <em>Custom Fabrication Enquiry</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                Contact our Line Chief and Sales &amp; Marketing heads directly to discuss your project specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Leadership Card 1 — Sales & Marketing */}
              <div className="p-7 rounded-3xl border border-brand-border bg-white shadow-card hover:shadow-card-hover hover:border-brand-red transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center text-xl font-bold mb-4">
                    📊
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red block mb-1">
                    Sales &amp; Marketing
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-dark mb-1">Abhay Asthana</h3>
                  <p className="text-xs font-semibold text-brand-charcoal/70 mb-4">
                    Manager &ndash; Sales &amp; Marketing
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-border mt-auto">
                  <a
                    href="tel:+917042933825"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-red transition-colors"
                  >
                    <span>📞</span>
                    <span>+91 7042933825</span>
                  </a>
                </div>
              </div>

              {/* Leadership Card 2 — Line Chief */}
              <div className="p-7 rounded-3xl border border-brand-border bg-white shadow-card hover:shadow-card-hover hover:border-brand-red transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center text-xl font-bold mb-4">
                    👔
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red block mb-1">
                    Line Chief
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-dark mb-1">Ajay Kumar Abbi</h3>
                  <p className="text-xs font-semibold text-brand-charcoal/70 mb-4">
                    Overall operations, manufacturing oversight, and turnkey project execution.
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-border mt-auto">
                  <a
                    href="tel:+917303090998"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-red transition-colors"
                  >
                    <span>📞</span>
                    <span>+91 7303090998</span>
                  </a>
                </div>
              </div>

              {/* Office & Email Card */}
              <div className="p-7 rounded-3xl border border-brand-border bg-brand-light shadow-card hover:shadow-card-hover hover:border-brand-red transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center text-xl font-bold mb-4">
                    📍
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red block mb-1">
                    Head Office &amp; Works
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-dark mb-2">Nirvana Niche Products Private Limited</h3>
                  <p className="text-xs text-brand-charcoal leading-relaxed mb-4">
                    Plot No. D-59, Sector 6, Noida, Uttar Pradesh &ndash; 201301
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-border space-y-2 mt-auto">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 block">Official Email</span>
                    <a
                      href="mailto:Info.nnpplindia@motherson.com"
                      className="text-xs font-bold text-brand-red hover:underline"
                    >
                      Info.nnpplindia@motherson.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Brand Motto */}
            <div className="mt-12 text-center text-sm font-semibold text-brand-charcoal/80">
              Nirvana Niche Products Private Limited &mdash; Customized Fabrication Solutions for Modern Commercial Kitchens.
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
