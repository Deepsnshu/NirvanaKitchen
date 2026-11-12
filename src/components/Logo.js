'use client'
import Image from 'next/image'
import Link from 'next/link'

// Navbar (light): emblem + dark wordmark stacked, transparent bg
// Footer (dark):  emblem + white wordmark stacked, transparent bg
// Same layout, same quality — only wordmark color differs

const SIZE_CONFIG = {
  xs: { emblem: 40,  wordmark: 52,  gap: 2 },
  sm: { emblem: 50,  wordmark: 64,  gap: 3 },
  md: { emblem: 64,  wordmark: 80,  gap: 4 },
  lg: { emblem: 80,  wordmark: 100, gap: 5 },
  xl: { emblem: 100, wordmark: 124, gap: 6 },
}

// Wordmark PNG native: 1992×248
const WORDMARK_RATIO = 248 / 1992

export default function Logo({
  variant = 'default',
  align = 'left',
  theme = 'light',
  size = 'md',
  showTagline = false,
  showMotherson = true,
  href = '/',
  className = '',
}) {
  const isDark = theme === 'dark'
  const cfg = SIZE_CONFIG[size] || SIZE_CONFIG.md
  const wordmarkH = Math.max(Math.round(cfg.wordmark * WORDMARK_RATIO), 11)

  const wordmarkSrc = isDark
    ? '/nirvana-wordmark-centered-white.png'
    : '/nirvana-wordmark-centered-dark.png'

  const content = (
    <div
      className={`flex flex-col items-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 ${className}`}
    >
      {/* Circle Emblem — crisp HD, explicit px sizes, no fill */}
      <Image
        src="/logo-emblem-clean.png"
        alt="Nirvana Emblem"
        width={cfg.emblem}
        height={cfg.emblem}
        quality={100}
        priority
        unoptimized
        className="object-contain block"
        style={{ width: cfg.emblem, height: cfg.emblem }}
      />

      {/* NIRVANA Wordmark — wider than emblem, crisp HD */}
      <Image
        src={wordmarkSrc}
        alt="NIRVANA"
        width={cfg.wordmark}
        height={wordmarkH}
        quality={100}
        priority
        unoptimized
        className="object-contain block"
        style={{ width: cfg.wordmark, height: wordmarkH, marginTop: cfg.gap }}
      />
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
        aria-label="Nirvana Commercial Kitchens — Home"
      >
        {content}
      </Link>
    )
  }

  return <div className="inline-flex items-center">{content}</div>
}
