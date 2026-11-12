/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── NIRVANA BRAND PALETTE ───────────────────────────────────────────
        // Red family — dominates the website
        'brand-red':       '#D21516',  // Primary: CTAs, active states, highlights
        'brand-red-deep':  '#B5000D',  // Hover states, button pressed
        // Charcoal family — text and dark surfaces
        'brand-charcoal':  '#3D3D3B',  // Primary text, nav links
        'brand-dark':      '#232424',  // Footer background, darkest text
        // Logo colours — used ONLY within the logo element itself
        'logo-indigo':     '#2E1787',  // Logo oval — do not use elsewhere
        'logo-gold':       '#FABF09',  // Logo sunburst — do not use elsewhere
        // Neutral surfaces
        'brand-light':     '#F4F6F9',  // Alternating section backgrounds
        'brand-border':    '#DFE7F5',  // Card borders, dividers, input borders
        'brand-white':     '#FFFFFF',  // Primary canvas
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': ['3.5rem',  { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-lg':  ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'hero-md':  ['2rem',    { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        'nav':       '0 1px 3px 0 rgba(0,0,0,0.08)',
        'card':      '0 2px 12px 0 rgba(0,0,0,0.06)',
        'card-hover':'0 6px 24px 0 rgba(210,21,22,0.10)',
      },
      borderRadius: {
        'btn': '6px',
      },
      maxWidth: {
        'site': '1280px',
      },
    },
  },
  plugins: [],
}
