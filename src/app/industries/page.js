import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import {
  Hotel,
  Stethoscope,
  UtensilsCrossed,
  Coffee,
  Factory,
  Building2,
  Flame,
  GraduationCap,
  ChefHat,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

export const metadata = {
  title: 'Industries We Serve | Nirvana Commercial Kitchen Equipment',
  description:
    'Commercial kitchen equipment solutions for hotels, hospitals, restaurants, corporate canteens, industrial facilities, and cloud kitchens across India.',
}

const INDUSTRIES = [
  {
    icon: Hotel,
    title: 'Hotel Kitchens & Banquets',
    desc: 'Heavy-duty cooking batteries, cold rooms, 3D workflow-planned banquet staging lines, and room service equipment built to high-volume 5-star operational specifications.',
    requirements: ['Multi-cuisine cooking ranges', 'Reach-in & walk-in chillers', 'High-capacity dishwash landing lines'],
  },
  {
    icon: Stethoscope,
    title: 'Hospital & Dietary Kitchens',
    desc: 'Sanitary food preparation and distribution infrastructure complying with clinical hygiene norms. Complete stainless steel SS 304 surfaces and sealed joins.',
    requirements: ['Strict hygiene zoning', 'Insulated meal distribution trolleys', 'Stainless steel preparation tables'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & QSR Chains',
    desc: 'Ergonomic, high-output cooking lines designed for fast order turnaround, energy efficiency, and reliable chef execution during peak lunch and dinner rushes.',
    requirements: ['High-pressure Chinese ranges', 'Commercial tandoors & griddles', 'Custom pickup & plating counters'],
  },
  {
    icon: Coffee,
    title: 'Café & Beverage Stations',
    desc: 'Compact, space-efficient undercounter refrigeration, sandwich preparation units, commercial espresso stations, and display counters for premium cafés.',
    requirements: ['Undercounter glass door coolers', 'Compact bakery display cases', 'Custom bar & coffee counters'],
  },
  {
    icon: Factory,
    title: 'Industrial Manufacturing Plants',
    desc: 'Mass-cooking equipment and heavy-gauge industrial dining systems built to prepare and serve thousands of meals daily with robust reliability.',
    requirements: ['Bulk cooking boiling kettles', 'Automatic chapati making machines', 'Heavy-gauge SS canteen tables'],
  },
  {
    icon: Building2,
    title: 'Corporate Canteens & IT Parks',
    desc: 'Self-service buffet counters, heated bain maries, cold salad bars, and heavy-duty institutional dining setups for tech parks and corporate headquarters.',
    requirements: ['Heated & refrigerated buffet counters', 'Tray slide & cutlery stations', 'Fixed-seat dining tables'],
  },
  {
    icon: Flame,
    title: 'Bulk Cooking & Central Commissaries',
    desc: 'Engineered for central kitchen hubs and catering organizations requiring massive daily output, standardized batch cooking, and automated processing.',
    requirements: ['Tilting bratt pans & boiling pans', 'Automatic dough ball cutters', 'Continuous chapati puffing lines'],
  },
  {
    icon: GraduationCap,
    title: 'Institutional Kitchens & Defense Messes',
    desc: 'High-durability commercial equipment engineered to withstand heavy continuous duty in universities, military messes, and public institutions.',
    requirements: ['Large-scale cooking vessels', 'Heavy SS pot wash sinks', 'Modular storage shelving racks'],
  },
  {
    icon: ChefHat,
    title: 'Cloud Kitchens & Commissary Hubs',
    desc: 'Optimized multi-brand kitchen layouts, space-saving modular workstations, and heavy-duty ventilation hoods engineered for rapid delivery fulfillment.',
    requirements: ['High-CFM exhaust systems', 'Modular stainless workstations', 'High-density vertical storage'],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-light">
        {/* Header */}
        <section className="bg-brand-dark text-white py-12 sm:py-16 md:py-20 border-b border-brand-border">
          <div className="site-container">
            <div className="max-w-3xl">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-red block mb-2 sm:mb-3">
                Sectors We Equip & Commission
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Commercial Kitchen Solutions for <em>Every Industry</em>
              </h1>
              <div className="w-16 h-1 bg-brand-red rounded-full my-4 sm:my-5" />
              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
                From luxury 5-star hotel banquets and clinical hospital dietary kitchens to massive corporate canteens and central base kitchens across India.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="section">
          <div className="site-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {INDUSTRIES.map((ind) => {
                const IconComponent = ind.icon
                return (
                  <div
                    key={ind.title}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-red transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="p-3 rounded-xl bg-brand-light text-brand-red w-fit mb-4 shadow-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-brand-dark text-base sm:text-lg mb-2">
                        {ind.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed mb-4">
                        {ind.desc}
                      </p>
                      
                      <div className="space-y-1.5 pt-3 border-t border-brand-border/60">
                        {ind.requirements.map((req) => (
                          <div key={req} className="flex items-center gap-2 text-xs text-brand-charcoal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 sm:mt-6 pt-4 border-t border-brand-border/60">
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-brand-red hover:text-brand-red-deep inline-flex items-center gap-1.5 min-h-[40px]"
                      >
                        <span>Discuss Sector Equipment</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom Consultation CTA */}
            <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-brand-dark text-white flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xl text-center md:text-left">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-snug">
                  Planning a Commercial Kitchen for Your Sector?
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1 leading-relaxed">
                  Our engineering team will assess your site layout, seating capacity, and menu requirements.
                </p>
              </div>
              <Link href="/contact" className="btn-primary flex-shrink-0 w-full sm:w-auto text-center justify-center min-h-[44px]">
                Request Facility Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
