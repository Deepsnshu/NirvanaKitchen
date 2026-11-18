'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Consultation & Requirement Analysis',
    desc: 'We begin by understanding your business model, available space, kitchen capacity, menu requirements, and operational goals to identify the most suitable equipment solutions.',
    icon: '📋',
    tag: 'Phase 1: Discovery',
  },
  {
    step: '02',
    title: 'Kitchen Design & Planning',
    desc: 'We help plan practical kitchen layouts that support smooth workflow, efficient space utilization, organized operations, and convenient movement between preparation, cooking, storage, and serving areas.',
    icon: '📐',
    tag: 'Phase 2: Architecture',
  },
  {
    step: '03',
    title: 'Equipment Selection & Customization',
    desc: 'Based on your requirements, we help you identify suitable commercial kitchen equipment designed for durability, performance, hygiene, and the demands of daily commercial use.',
    icon: '🍳',
    tag: 'Phase 3: Curation',
  },
  {
    step: '04',
    title: 'Fabrication & Quality Focus',
    desc: 'Where applicable, equipment fabrication and customization are planned around project specifications, with a focus on suitable materials, dependable construction, and long-term usability.',
    icon: '⚙️',
    tag: 'Phase 4: Manufacturing',
  },
  {
    step: '05',
    title: 'Installation & Commissioning Support',
    desc: 'We coordinate the implementation process to help ensure that equipment is positioned appropriately and integrated into the kitchen setup according to project requirements.',
    icon: '🔧',
    tag: 'Phase 5: Deployment',
  },
  {
    step: '06',
    title: 'Customer Support & Continuous Improvement',
    desc: 'Our commitment extends beyond equipment selection. We aim to build lasting business relationships through responsive assistance, practical guidance, and a continuous focus on improving kitchen efficiency.',
    icon: '🤝',
    tag: 'Phase 6: Lifetime Care',
  },
]

const INDUSTRIES = [
  { name: 'Hotels & Hospitality', icon: '🏨', desc: 'Full-scale central kitchens, banquet cooking ranges, and 24/7 all-day dining solutions.' },
  { name: 'Restaurants & Cafés', icon: '🍽️', desc: 'Compact high-efficiency cook lines, griddles, fryers, and custom service counters.' },
  { name: 'Hospitals & Healthcare Facilities', icon: '🏥', desc: 'Sanitary stainless steel diet prep, warm holding units, and sterile tray lines.' },
  { name: 'Schools, Colleges & Institutions', icon: '🎓', desc: 'High-capacity mess kitchens, bulk boilers, steam pans, and automatic roti lines.' },
  { name: 'Corporate Offices & Industrial Canteens', icon: '🏢', desc: 'Modular employee dining counters, hygienic dishwashing, and bulk cooking ranges.' },
  { name: 'Bakeries & Confectioneries', icon: '🥐', desc: 'Deck ovens, spiral dough mixers, proofers, and temperature-controlled display chillers.' },
  { name: 'Food Courts & Quick-Service Restaurants', icon: '⚡', desc: 'High-speed prep stations, exhaust hoods, quick fryers, and pick-up pass counters.' },
  { name: 'Cloud Kitchens & Catering Services', icon: '🚀', desc: 'Maximized cubic space layouts, heavy-duty Chinese ranges, and bulk prep sinks.' },
  { name: 'Large-Scale Food Service Operations', icon: '🏭', desc: 'Heavy industrial institutional food production with complete workflow automation.' },
]

const WHY_CHOOSE_US = [
  {
    title: 'Business-Focused Solutions',
    desc: 'Equipment recommendations specifically tailored to your menu, capacity, and operational needs.',
    icon: '🎯',
  },
  {
    title: 'Practical Kitchen Planning',
    desc: 'A laser focus on ergonomics, seamless space utilization, and unhindered cooking workflow.',
    icon: '📐',
  },
  {
    title: 'Quality & Durability',
    desc: 'Food-grade SS 304 and robust components selected with long-term commercial performance in mind.',
    icon: '🛡️',
  },
  {
    title: 'Industry Versatility',
    desc: 'Deep domain expertise across hotels, QSRs, hospitals, bakeries, institutions, and cloud kitchens.',
    icon: '🌐',
  },
  {
    title: 'Customer-Centric Approach',
    desc: 'Clear communication, transparent timelines, and dedicated attention to project specifications.',
    icon: '🤝',
  },
  {
    title: 'Long-Term Value',
    desc: 'A steadfast focus on energy efficiency, equipment reliability, and informed capital investment.',
    icon: '📈',
  },
]

export default function AboutPage() {
  const [activeWorkflow, setActiveWorkflow] = useState(0)

  return (
    <div className="min-h-screen bg-brand-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* ════════════════════════════════════════════════════════════════
            HERO BANNER
        ════════════════════════════════════════════════════════════════ */}
        <section className="relative bg-brand-dark text-white py-10 sm:py-12 md:py-14 lg:py-16 overflow-hidden">
          {/* Background image with multi-layer cinematic overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-hero-technicians.jpg"
              alt="Nirvana Niche Products Private Limited Commercial Kitchen Assembly & Fabrication"
              fill
              priority
              sizes="100vw"
              className="object-cover object-right lg:object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/45 lg:from-brand-dark/95 lg:via-brand-dark/75 lg:to-brand-dark/30" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="site-container relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-white/60 mb-3 sm:mb-4 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-red font-semibold">About Us</span>
            </div>

            {/* Sub-label pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>Nirvana Niche Products Private Limited</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
              Our Story. Our Expertise.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                Your Kitchen Partner.
              </span>
            </h1>

            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-brand-red rounded-full my-3 sm:my-4" />

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl font-light leading-relaxed mb-5 sm:mb-6">
              Welcome to Nirvana Niche Products Private Limited, your trusted partner for innovative and reliable
              commercial kitchen equipment solutions. We are committed to helping businesses build
              efficient, hygienic, and high-performance commercial kitchens tailored to their operational needs.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a href="#who-we-are" className="btn-primary text-xs sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 shadow-xl text-center justify-center min-h-[44px]">
                Explore Our Story ↓
              </a>
              <Link href="/contact" className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-btn bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-xs sm:text-base border border-white/30 transition-all text-center inline-flex items-center justify-center min-h-[44px]">
                Contact Leadership
              </Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            WHO WE ARE
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-white relative" id="who-we-are">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column — Core Narrative */}
              <div className="lg:col-span-7">
                <span className="section-label">Who We Are</span>
                <h2 className="section-title">
                  Building the Foundation for <em>Successful Food Service Operations</em>
                </h2>
                <span className="red-bar" />

                <div className="space-y-4 text-brand-charcoal text-base sm:text-lg leading-relaxed">
                  <p>
                    We understand that every commercial kitchen has unique requirements. That is why we focus on providing thoughtfully designed equipment and customized solutions that combine <strong>functionality, durability, and operational efficiency</strong>.
                  </p>
                  <p className="text-sm sm:text-base text-brand-charcoal/85">
                    Our solutions are suitable for a wide range of industries, including hotels, restaurants, hospitals, educational institutions, corporate cafeterias, bakeries, food courts, cloud kitchens, and catering businesses.
                  </p>
                  <p className="text-sm sm:text-base text-brand-charcoal/85">
                    From understanding your requirements to equipment selection, kitchen planning, installation coordination, and ongoing support, our goal is to make your commercial kitchen setup <strong>smooth, practical, and cost-effective</strong>.
                  </p>
                </div>

                {/* Highlight Quote Box */}
                <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-brand-light border-l-4 border-brand-red shadow-sm">
                  <p className="text-sm sm:text-base font-semibold text-brand-dark italic">
                    &ldquo;At Nirvana Niche Products Private Limited, we believe that the right kitchen equipment is more than just a business investment — it is the foundation of a productive and successful food service operation.&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column — Visual Artwork */}
              <div className="lg:col-span-5">
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-brand-border bg-brand-dark aspect-[4/3]">
                  <Image
                    src="/images/about-dd.png"
                    alt="Kitchen Design and CAD Planning Studio"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 bg-brand-dark/85 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                    Planning & CAD Engineering
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-xs font-bold text-brand-red uppercase tracking-wider">Turnkey Coordination</p>
                    <p className="text-sm font-medium text-white/95 mt-0.5">Custom equipment planned around your menu, space, and volume.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            MISSION & VISION (Interactive Split Cards)
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-light border-y border-brand-border">
          <div className="site-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Mission Card */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-red transition-all duration-300 relative group overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">Purpose & Commitment</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">Our Mission</h3>
                <p className="text-brand-charcoal text-base leading-relaxed mb-4">
                  To provide reliable, efficient, and high-quality commercial kitchen equipment solutions that help businesses <strong>improve productivity, maintain hygiene, optimize space, and deliver consistent service</strong>.
                </p>
                <p className="text-brand-charcoal/80 text-sm leading-relaxed">
                  We aim to combine practical expertise, customer-focused service, and innovative solutions to meet the evolving needs of the food service industry.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-brand-red">
                  <span>Productivity · Hygiene · Space Optimization</span>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-red transition-all duration-300 relative group overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  🔭
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-1">Our Future Aspiration</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mb-4">Our Vision</h3>
                <p className="text-brand-charcoal text-base leading-relaxed mb-4">
                  To become a <strong>trusted name in the commercial kitchen equipment industry</strong> by delivering dependable solutions, promoting operational efficiency, and setting high standards for quality, service, and customer satisfaction.
                </p>
                <p className="text-brand-charcoal/80 text-sm leading-relaxed">
                  We aspire to support the growth of food service businesses through smarter kitchen solutions and a long-term commitment to excellence.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-brand-red">
                  <span>Dependability · Innovation · Long-Term Partnership</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            OUR WORKFLOW (A Systematic Approach to Every Project)
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-white" id="workflow">
          <div className="site-container">
            <div className="max-w-3xl mb-14">
              <span className="section-label">Our Workflow</span>
              <h2 className="section-title">
                A Systematic Approach to <em>Every Project</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                At Nirvana Niche Products Private Limited, we follow a structured approach to help our clients find the right commercial kitchen solutions. Our process focuses on quality, efficiency, and customer satisfaction at every stage.
              </p>
            </div>

            {/* Desktop / Tablet Interactive Step Navigator */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10 p-2 bg-brand-light rounded-2xl border border-brand-border">
              {WORKFLOW_STEPS.map((step, idx) => {
                const isActive = activeWorkflow === idx
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveWorkflow(idx)}
                    className={`p-3 rounded-xl text-left transition-all duration-300 ${
                      isActive
                        ? 'bg-brand-red text-white shadow-lg scale-100'
                        : 'text-brand-charcoal hover:bg-white hover:text-brand-dark'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-black ${isActive ? 'text-white' : 'text-brand-red'}`}>{step.step}</span>
                      <span className="text-base">{step.icon}</span>
                    </div>
                    <span className="text-xs font-bold line-clamp-1 block">{step.title.split('&')[0]}</span>
                  </button>
                )
              })}
            </div>

            {/* Active Step Feature Showcase with Transition */}
            <div className="bg-brand-light/60 p-6 sm:p-10 rounded-3xl border border-brand-border shadow-sm mb-12 animate-fadeIn transition-all duration-500">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-brand-border">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-red text-white flex items-center justify-center font-black text-xl sm:text-2xl shadow-md">
                    {WORKFLOW_STEPS[activeWorkflow].step}
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
                      {WORKFLOW_STEPS[activeWorkflow].tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark">
                      {WORKFLOW_STEPS[activeWorkflow].title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveWorkflow((prev) => (prev > 0 ? prev - 1 : WORKFLOW_STEPS.length - 1))}
                    className="p-2.5 rounded-xl border border-brand-border bg-white hover:bg-brand-red hover:text-white transition-colors"
                    aria-label="Previous step"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setActiveWorkflow((prev) => (prev < WORKFLOW_STEPS.length - 1 ? prev + 1 : 0))}
                    className="p-2.5 rounded-xl border border-brand-border bg-white hover:bg-brand-red hover:text-white transition-colors"
                    aria-label="Next step"
                  >
                    →
                  </button>
                </div>
              </div>
              <p className="text-base sm:text-lg text-brand-charcoal leading-relaxed max-w-4xl">
                {WORKFLOW_STEPS[activeWorkflow].desc}
              </p>
            </div>

            {/* Complete 6-Step Grid for Easy Scanning */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORKFLOW_STEPS.map((ws, idx) => (
                <div
                  key={ws.step}
                  onClick={() => setActiveWorkflow(idx)}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 bg-white ${
                    activeWorkflow === idx
                      ? 'border-brand-red ring-2 ring-brand-red/20 shadow-card-hover -translate-y-1'
                      : 'border-brand-border shadow-sm hover:border-brand-red/60 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-extrabold px-2.5 py-1 rounded-lg bg-brand-light text-brand-red">
                      Step {ws.step}
                    </span>
                    <span className="text-2xl">{ws.icon}</span>
                  </div>
                  <h4 className="font-bold text-brand-dark text-base mb-2">{ws.title}</h4>
                  <p className="text-xs text-brand-charcoal/80 leading-relaxed">{ws.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            OUR PROCESS CALLOUT
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-dark text-white relative overflow-hidden">
          <div className="site-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red block mb-3">Our Process</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Understanding Your Needs.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
                    Delivering the Right Solutions.
                  </span>
                </h2>
                <div className="w-20 h-1.5 bg-brand-red rounded-full my-6" />
                <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-6 font-light">
                  Every successful commercial kitchen begins with the right planning and equipment selection. We work closely with our clients to understand their operational challenges, assess their requirements, and recommend suitable solutions that offer practical value.
                </p>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                  Our approach emphasizes <strong>efficient layouts, durable equipment, smooth kitchen workflows, hygiene, and long-term usability</strong> — helping businesses make informed decisions for their kitchen infrastructure.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center font-bold text-sm">✓</span>
                    <span className="text-sm font-semibold text-white">Efficient Kitchen Layouts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center font-bold text-sm">✓</span>
                    <span className="text-sm font-semibold text-white">Durable Commercial Equipment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center font-bold text-sm">✓</span>
                    <span className="text-sm font-semibold text-white">Smooth Kitchen Workflows</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center font-bold text-sm">✓</span>
                    <span className="text-sm font-semibold text-white">Food Safety & Hygiene Focus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center font-bold text-sm">✓</span>
                    <span className="text-sm font-semibold text-white">Long-Term Usability & Value</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            INDUSTRIES WE SERVE (9 Sectors Grid)
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-white" id="industries">
          <div className="site-container">
            <div className="max-w-3xl mb-14">
              <span className="section-label">Industries We Serve</span>
              <h2 className="section-title">
                Versatile Solutions for <em>Every Food Service Sector</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                We support commercial kitchen requirements across a variety of sectors, ensuring every equipment piece matches local codes, volume, and operational pace.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIES.map((ind) => (
                <div
                  key={ind.name}
                  className="p-6 rounded-2xl border border-brand-border bg-white shadow-sm hover:shadow-card-hover hover:border-brand-red hover:-translate-y-1.5 transition-all duration-300 group flex items-start gap-4"
                >
                  <span className="text-3xl p-3 rounded-2xl bg-brand-light group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {ind.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-brand-dark text-base group-hover:text-brand-red transition-colors duration-200">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-brand-charcoal mt-1.5 leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            WHY CHOOSE NIRVANA NICHE PRODUCTS PRIVATE LIMITED?
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-light border-y border-brand-border">
          <div className="site-container">
            <div className="max-w-3xl mb-14">
              <span className="section-label">Our Advantages</span>
              <h2 className="section-title">
                Why Choose <em>Nirvana Niche Products Private Limited?</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                Partner with a dedicated commercial kitchen specialist committed to performance, dependability, and lasting value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_US.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-7 rounded-2xl border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-red hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl p-2.5 rounded-xl bg-brand-light inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <h3 className="font-bold text-brand-dark text-base mb-2 group-hover:text-brand-red transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-charcoal leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            LET'S BUILD A BETTER COMMERCIAL KITCHEN (CTA)
        ════════════════════════════════════════════════════════════════ */}
        <section className="bg-brand-red text-white py-16 lg:py-20 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"
          />
          <div className="site-container relative z-10 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-white/80 block mb-2">
              Next Step
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Let&apos;s Build a Better Commercial Kitchen
            </h2>
            <p className="text-white/90 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed font-light">
              Whether you are setting up a new kitchen, expanding an existing facility, or upgrading your equipment, Nirvana Niche Products Private Limited is ready to help you explore the right solutions for your business.
            </p>
            <p className="text-white text-base font-medium mt-2">
              Let&apos;s work together to create a commercial kitchen that supports efficiency, reliability, and growth.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link
                href="/contact"
                className="btn-white text-base px-8 py-3.5 shadow-xl font-bold hover:scale-105 transition-transform"
              >
                Request a Custom Quote
              </Link>
              <a
                href="tel:+917042933825"
                className="px-7 py-3.5 rounded-btn bg-brand-red-deep/40 hover:bg-brand-red-deep border border-white/30 text-white font-semibold text-base transition-colors"
              >
                Call: +91 7042933825
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            GET IN TOUCH (Official Leadership & Contact Cards)
        ════════════════════════════════════════════════════════════════ */}
        <section className="section bg-brand-white" id="contact">
          <div className="site-container">
            <div className="max-w-2xl mb-12">
              <span className="section-label">Direct Contacts</span>
              <h2 className="section-title">
                Get in Touch With <em>Our Leadership</em>
              </h2>
              <span className="red-bar" />
              <p className="section-desc">
                Connect directly with our Line Chief and Sales &amp; Marketing heads for project inquiries and factory visits.
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
                    Manager – Sales & Marketing
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-dark mb-3">Abhay Asthana</h3>
                  <p className="text-xs text-brand-charcoal mb-4">
                    Client consultations, equipment selection, and commercial proposals.
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

              {/* Leadership Card 2 — Operations */}
              <div className="p-7 rounded-3xl border border-brand-border bg-white shadow-card hover:shadow-card-hover hover:border-brand-red transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center text-xl font-bold mb-4">
                    👔
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-dark mb-3">Ajay Kumar Abbi</h3>
                  <p className="text-xs text-brand-charcoal mb-4">
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
                    Head Office & Works
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-dark mb-2">Nirvana Niche Products Private Limited</h3>
                  <p className="text-xs text-brand-charcoal leading-relaxed mb-4">
                    Plot No. D-59, Sector 6, Noida, Uttar Pradesh – 201301
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
              Nirvana Niche Products Private Limited &mdash; Your Partner in Commercial Kitchen Solutions.
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
