import { ArrowDownRight, ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_CONFIG, HERO_STATS, SOCIAL_LINKS } from '../data/scrimConfig';

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-[#070709]"
    >
      {/* Atmospheric blood-red & charcoal lighting backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-arena-grid opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(185,28,28,0.22)_0%,rgba(127,29,29,0.08)_45%,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(153,27,27,0.16)_0%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1240px] px-4 pt-12 pb-12 sm:px-6 md:pt-16 md:pb-16 lg:px-8 lg:pt-20 lg:pb-20">
        {/* Two-Column Hero Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Brand Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            {/* Unboxed Metadata Kicker (zero-pill rule) */}
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tracking-[0.14em] text-[#A9A59E] uppercase">
              <span className="text-[#DC2626]">{BRAND_CONFIG.name}</span>
              <span aria-hidden="true">·</span>
              <span>{BRAND_CONFIG.regionLabel}</span>
            </div>

            <h1
              className="font-display text-[clamp(2.75rem,5.4vw,4.85rem)] font-extrabold leading-[0.95] tracking-[-0.01em] text-[#F4F1EC] uppercase"
              style={{ textWrap: 'balance' }}
            >
              {BRAND_CONFIG.heroHeadline}
            </h1>

            <p className="mt-4 font-display text-lg font-semibold tracking-[0.08em] text-[#DC2626] uppercase sm:text-xl">
              {BRAND_CONFIG.heroSubheadline}
            </p>

            <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-[#B8B3AA]">
              {BRAND_CONFIG.communityIntro}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SOCIAL_LINKS.whatsappChannel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-sm border border-[#EF4444]/60 bg-[#B91C1C] px-6 py-3 text-sm font-semibold tracking-[0.06em] text-white uppercase transition-colors duration-150 hover:bg-[#DC2626]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>{SOCIAL_LINKS.whatsappChannel.ctaHero}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#schedule"
                className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-white/20 bg-[#121318] px-6 py-3 text-sm font-semibold tracking-[0.06em] text-[#F4F1EC] uppercase transition-colors duration-150 hover:border-white/40 hover:bg-[#191B22]"
              >
                <span>View Lobby Schedule</span>
                <ArrowDownRight className="h-4 w-4 text-[#DC2626]" aria-hidden="true" />
              </a>
            </div>

            {/* Official Social Links Row (Strictly WhatsApp Channel & Instagram) */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-[#A9A59E]">
              <span className="font-medium tracking-[0.1em] text-[#848079] uppercase">
                Official Channels
              </span>
              <a
                href={SOCIAL_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[36px] items-center gap-2 font-medium text-[#E5E0D8] transition-colors hover:text-[#DC2626]"
              >
                <Instagram className="h-4 w-4 text-[#DC2626]" aria-hidden="true" />
                <span>Instagram ({SOCIAL_LINKS.instagram.handle})</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#848079]" aria-hidden="true" />
              </a>
              <span aria-hidden="true" className="text-white/20">
                /
              </span>
              <a
                href={SOCIAL_LINKS.whatsappChannel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[36px] items-center gap-2 font-medium text-[#E5E0D8] transition-colors hover:text-[#DC2626]"
              >
                <MessageCircle className="h-4 w-4 text-[#DC2626]" aria-hidden="true" />
                <span>Official WhatsApp Channel</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#848079]" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Official Untouched VENDETTA Emblem Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center lg:col-span-5"
          >
            <div className="relative w-full max-w-[440px] rounded-sm border border-white/12 bg-[#0B0C10] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.75)] sm:p-5">
              {/* Subtle metallic corner brackets */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 h-5 w-5 border-t-2 border-l-2 border-[#DC2626]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 bottom-0 h-5 w-5 border-r-2 border-b-2 border-[#DC2626]"
              />

              <div className="overflow-hidden rounded-sm border border-white/10 bg-black">
                <img
                  src={BRAND_CONFIG.logoPath}
                  alt={BRAND_CONFIG.logoAlt}
                  referrerPolicy="no-referrer"
                  className="aspect-square w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Editable Arena Stats Strip */}
        <div className="mt-12 grid grid-cols-2 border border-white/10 bg-[#0D0E12] md:mt-16 md:grid-cols-4">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className={`p-5 sm:p-6 ${
                idx < HERO_STATS.length - 1 ? 'border-b border-white/10 md:border-r md:border-b-0' : ''
              } ${idx % 2 === 0 ? 'border-r border-white/10 md:border-r' : ''}`}
            >
              <p className="text-xs font-medium tracking-[0.12em] text-[#8D8880] uppercase">
                {stat.label}
              </p>
              <p className="font-display mt-2 text-3xl font-bold tracking-tight text-[#F4F1EC] tabular-nums sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs leading-snug text-[#A9A59E]">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
