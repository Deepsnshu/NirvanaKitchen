import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuoteForm from '@/components/QuoteForm'
import { Phone, Mail, MapPin, Clock, Building2, ShieldCheck, Award } from 'lucide-react'

export const metadata = {
  title: 'Contact Us & Request a Quote | Nirvana Niche Products Private Limited',
  description:
    'Contact Nirvana Niche Products Private Limited (Proud to be part of Samvardhana Motherson). Factory & Office at Sector-6, Noida. Commercial kitchen equipment and custom fabrication quotations.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-light">
        {/* Header Banner */}
        <section className="bg-brand-dark text-white py-12 sm:py-16 md:py-20 border-b border-brand-border">
          <div className="site-container">
            <div className="max-w-3xl">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-red block mb-2 sm:mb-3">
                Direct Manufacturer Contact
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Connect with Our <em>Engineering Team</em>
              </h1>
              <div className="w-16 h-1 bg-brand-red rounded-full my-4 sm:my-5" />
              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
                Whether you need individual commercial equipment models, custom SS 304 fabrication, or a complete turnkey commercial kitchen setup, our engineering sales team is ready to assist.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Details & Form */}
        <section className="section">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              
              {/* Left Column — Direct Contact Cards */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                <div>
                  <span className="section-label">Company Credentials</span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">
                    Nirvana Niche Products Private Limited
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-brand-red mt-0.5">
                    Proud to be part of Samvardhana Motherson
                  </p>
                  <p className="text-xs text-brand-charcoal/80 mt-2 leading-relaxed">
                    Registered as Nirvana Niche Products Private Limited · ISO 9001:2015 Certified Commercial Kitchen Manufacturer
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-border shadow-sm flex items-start gap-3.5 sm:gap-4">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-brand-light text-brand-red flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-brand-charcoal/70 block">Direct Telephone</span>
                      <div className="flex flex-col gap-1 mt-1">
                        <a href="tel:+917042933825" className="text-sm font-bold text-brand-dark hover:text-brand-red transition-colors py-0.5 min-h-[36px] inline-flex items-center">
                          +91 7042933825
                        </a>
                        <a href="tel:+917303090998" className="text-sm font-bold text-brand-dark hover:text-brand-red transition-colors py-0.5 min-h-[36px] inline-flex items-center">
                          +91 7303090998
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-border shadow-sm flex items-start gap-3.5 sm:gap-4">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-brand-light text-brand-red flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-semibold text-brand-charcoal/70 block">Official Sales Email</span>
                      <a
                        href="mailto:Info.nnpplindia@motherson.com"
                        className="text-xs sm:text-sm font-bold text-brand-dark hover:text-brand-red transition-colors break-all mt-1 block py-0.5"
                      >
                        Info.nnpplindia@motherson.com
                      </a>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-border shadow-sm flex items-start gap-3.5 sm:gap-4">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-brand-light text-brand-red flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-brand-charcoal/70 block">Manufacturing Plant & Office</span>
                      <p className="text-xs sm:text-sm font-medium text-brand-dark mt-1 leading-snug">
                        Plot D 59–60, Sector-6, Noida, Uttar Pradesh 201301, India
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-border shadow-sm flex items-start gap-3.5 sm:gap-4">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-brand-light text-brand-red flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-brand-charcoal/70 block">Working Hours</span>
                      <p className="text-xs sm:text-sm font-medium text-brand-dark mt-1 leading-snug">
                        Monday – Saturday: 9:30 AM – 6:30 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                {/* ISO Trust badge */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-white border-l-4 border-brand-red border border-brand-border text-xs text-brand-charcoal/80 leading-relaxed">
                  <span className="font-bold text-brand-dark block">ISO 9001:2015 Certified Manufacturing</span>
                  Certificate No. VW26100063 · Issued by Vatsin World Services Pvt. Ltd. with IAF accreditation.
                </div>
              </div>

              {/* Right Column — Live Quote Form */}
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
