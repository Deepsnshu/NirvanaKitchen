import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const data = await request.json()

    const { name, company, phone, email, requirement, message } = data

    // Validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone number, and email address are required.' },
        { status: 400 }
      )
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Phone format validation (min 8 digits)
    const phoneClean = phone.replace(/[^\d+]/g, '')
    if (phoneClean.length < 8) {
      return NextResponse.json(
        { error: 'Please provide a valid phone number.' },
        { status: 400 }
      )
    }

    const enquiryId = `NVP-${Date.now().toString(36).toUpperCase()}`

    // Log the enquiry on the server
    console.log('[NIRVANA NICHE PRODUCTS ENQUIRY RECEIVED]', {
      enquiryId,
      timestamp: new Date().toISOString(),
      name,
      company: company || 'N/A',
      phone,
      email,
      requirement: requirement || 'General Commercial Kitchen Enquiry',
      message: message || '',
    })

    return NextResponse.json({
      success: true,
      enquiryId,
      message: 'Thank you! Your commercial kitchen enquiry has been received. Our engineering team at Plot D-59, Sector-6, Noida will contact you within 24 hours.',
    })
  } catch (error) {
    console.error('[ENQUIRY API ERROR]', error)
    return NextResponse.json(
      { error: 'Failed to process enquiry. Please call us directly at +91 7042933825.' },
      { status: 500 }
    )
  }
}
