'use client'

import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirement: 'Cooking Equipment',
    message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [feedback, setFeedback] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setFeedback('')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setFeedback(data.message || 'Your enquiry has been received successfully.')
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          requirement: 'Cooking Equipment',
          message: '',
        })
      } else {
        setStatus('error')
        setFeedback(data.error || 'Something went wrong. Please check your inputs or call us.')
      }
    } catch (err) {
      setStatus('error')
      setFeedback('Unable to connect to the server. Please call us directly at +91 9654981312.')
    }
  }

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-7 md:p-8 shadow-xl border border-brand-border/80">
      <div className="mb-5 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark leading-snug">
          Request a Manufacturer Quotation
        </h3>
        <p className="text-xs text-brand-charcoal/70 mt-1 leading-relaxed">
          Direct factory pricing, custom fabrication estimates & equipment specifications.
        </p>
      </div>

      {status === 'success' ? (
        <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-emerald-800 text-base">Enquiry Submitted!</h4>
          <p className="text-xs text-emerald-700 leading-relaxed max-w-sm mx-auto">{feedback}</p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-3 text-xs font-bold text-emerald-800 underline hover:no-underline min-h-[44px] inline-flex items-center"
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
          {status === 'error' && (
            <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{feedback}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-brand-dark mb-1">
                Full Name <span className="text-brand-red">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rajesh Kumar"
                className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-brand-border text-sm text-brand-dark focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-bold text-brand-dark mb-1">
                Company / Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Hotel, Restaurant or Canteen"
                className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-brand-border text-sm text-brand-dark focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-brand-dark mb-1">
                Phone Number <span className="text-brand-red">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-brand-border text-sm text-brand-dark focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-brand-dark mb-1">
                Email Address <span className="text-brand-red">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="rajesh@company.com"
                className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-brand-border text-sm text-brand-dark focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="requirement" className="block text-xs font-bold text-brand-dark mb-1">
              Equipment or Service Requirement
            </label>
            <select
              id="requirement"
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 min-h-[44px] rounded-lg border border-brand-border text-sm text-brand-dark focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all bg-white"
            >
              <option value="Cooking Equipment">Commercial Cooking Equipment</option>
              <option value="Chapati Machines">Automatic Chapati Machines</option>
              <option value="Refrigeration Equipment">Refrigeration & Cold Rooms</option>
              <option value="Custom SS Fabrication">Custom Stainless Steel Fabrication</option>
              <option value="Bakery Equipment">Commercial Bakery Equipment</option>
              <option value="Preparation Equipment">Food Preparation Equipment</option>
              <option value="Washing Equipment">Commercial Warewashing & Sinks</option>
              <option value="Ventilation System">Kitchen Exhaust & Ventilation Hoods</option>
              <option value="Complete Turnkey Project">Complete Turnkey Commercial Kitchen</option>
              <option value="Other">Other Equipment Inquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold text-brand-dark mb-1">
              Project Details or Equipment Specs
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your kitchen dimensions, capacity requirements, or equipment models needed..."
              className="w-full px-3.5 py-2 rounded-lg border border-brand-border text-sm text-brand-dark focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary w-full py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20 hover:shadow-brand-red/40 transition-all disabled:opacity-60 min-h-[48px]"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Enquiry to Factory...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Quotation Request</span>
              </>
            )}
          </button>

          <p className="text-[10px] sm:text-[11px] text-center text-brand-charcoal/60 pt-1 leading-normal">
            Official response guaranteed from Nirvana Commercial Pvt. Ltd. (Plot D-59, Sector-6, Noida).
          </p>
        </form>
      )}
    </div>
  )
}
