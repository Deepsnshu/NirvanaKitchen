'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ_ITEMS = [
  {
    q: 'What types of commercial kitchen equipment does Nirvana offer?',
    a: 'Nirvana Commercial Pvt. Ltd. provides a complete industrial portfolio across 18 specialized categories — including heavy-duty commercial cooking ranges (single, two & stock pot burners), automatic chapati machines, commercial refrigeration units, SS 304 worktables & trolleys, food preparation machines, warewashing sink stations, commercial ventilation hoods, and bakery ovens.',
  },
  {
    q: 'Can Nirvana manufacture customized stainless steel kitchen equipment?',
    a: 'Yes. Custom stainless steel fabrication is one of our core manufacturing strengths. At our Noida Sector-6 plant, we build custom worktables, preparation counters with built-in splashbacks, sink units, mobile service trolleys, and specialized kitchen fixtures fabricated precisely to your architectural floor plan and operational dimensions.',
  },
  {
    q: 'Which fabrication materials and grades are supported?',
    a: 'We work primarily with food-grade Stainless Steel (SS 304 for food contact, hygiene, and corrosion resistance; SS 316 for enhanced chemical resistance), heavy-gauge Mild Steel (MS) for load-bearing structural frames and storage systems, and specialized Aluminium for lightweight panels and enclosures.',
  },
  {
    q: 'Does Nirvana provide kitchen planning and 3D layout engineering?',
    a: 'Yes. We deliver complete turnkey solutions from the initial concept stage. Our engineering team creates 3D CAD kitchen layouts and space plans, optimizing workflow routes, utility connections (plumbing, gas, electrical), and hygiene zoning for hotels, restaurants, industrial canteens, and institutional facilities.',
  },
  {
    q: 'Is on-site installation and after-sales service available across India?',
    a: 'Yes. Nirvana operates a comprehensive Pan-India delivery, installation, and after-sales maintenance network. Our certified technicians coordinate on-site equipment commissioning and offer preventive maintenance contracts (AMC) backed by our ISO 9001:2015 certified quality management system.',
  },
  {
    q: 'How can a customer or consultant request a manufacturer quotation?',
    a: 'You can submit your project requirements using our online quotation form on this page, email our engineering desk at Info.nnpplindia@motherson.com, or call us directly at +91 9654981312 or +91 7303090998. We provide itemized factory quotations with detailed technical equipment specifications within 24 hours.',
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0) // First item open by default

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {FAQ_ITEMS.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={item.q}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-brand-red/40 shadow-md ring-1 ring-brand-red/10'
                : 'bg-white/80 border-brand-border/80 hover:border-brand-border hover:bg-white'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full px-4 sm:px-5 py-3.5 sm:py-4 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none min-h-[48px]"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
                <HelpCircle
                  className={`w-4 h-4 flex-shrink-0 transition-colors ${
                    isOpen ? 'text-brand-red' : 'text-brand-charcoal/50'
                  }`}
                />
                <span className={`text-xs sm:text-sm md:text-base font-bold transition-colors leading-snug ${
                  isOpen ? 'text-brand-dark' : 'text-brand-charcoal'
                }`}>
                  {item.q}
                </span>
              </div>
              <ChevronDown
                className={`w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-brand-red' : 'text-brand-charcoal/50'
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-brand-charcoal/85 leading-relaxed border-t border-brand-border/40 pl-8 sm:pl-12">
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
