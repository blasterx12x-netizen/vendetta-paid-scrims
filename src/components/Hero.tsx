import { ArrowDownRight, ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_CONFIG, HERO_STATS, SOCIAL_LINKS } from '../data/scrimConfig';

export function Hero() {
  const headlineParts = BRAND_CONFIG.heroHeadline.split('. ');
  const primaryLine = headlineParts[0] ? `${headlineParts[0]}.` : BRAND_CONFIG.heroHeadline;
  const secondaryLine = headlineParts[1] ?? '';

  return (
    <section
      id="top"
      className="bg-vendetta-hero relative overflow-hidden border-b border-[#DFBA82]/22"
    >
      {/* Subtle gold architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-arena-grid opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-6%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(223,186,130,0.14)_0%,rgba(148,22,52,0.22)_45%,transparent_72%)]"
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
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-[0.16em] text-[#C8BECF] uppercase">
              <span className="text-[#F4D8A8]">{BRAND_CONFIG.name}</span>
              <span aria-hidden="true" className="text-[#E8859A]">
                ·
              </span>
              <span>{BRAND_CONFIG.regionLabel}</span>
            </div>

            <h1
              className="font-display text-[clamp(2.85rem,5.5vw,4.95rem)] font-extrabold leading-[0.94] tracking-[-0.01em] uppercase"
              style={{ textWrap: 'balance' }}
            >
              <span className="block text-[#FAF4EB]">{primaryLine}</span>
              {secondaryLine && (
                <span className="text-gold-metallic mt-1 block">{secondaryLine}</span>
              )}
            </h1>

            <p className="font-display text-garnet-metallic mt-4 text-lg font-bold tracking-[0.1em] uppercase sm:text-xl">
              {BRAND_CONFIG.heroSubheadline}
            </p>

            <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-[#D4CBDA]">
              {BRAND_CONFIG.communityIntro}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SOCIAL_LINKS.whatsappChannel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-luxury inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-sm px-6 py-3 text-sm font-bold tracking-[0.07em] uppercase transition-all duration-150"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>{SOCIAL_LINKS.whatsappChannel.ctaHero}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#schedule"
                className="btn-garnet-luxury inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm px-6 py-3 text-sm font-semibold tracking-[0.07em] uppercase transition-all duration-150"
              >
                <span>View Lobby Schedule</span>
                <ArrowDownRight className="h-4 w-4 text-[#F4D8A8]" aria-hidden="true" />
              </a>
            </div>

            {/* Official Social Links Row (Strictly WhatsApp Channel & Instagram) */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#DFBA82]/18 pt-6 text-xs text-[#C8BECF]">
              <span className="font-semibold tracking-[0.12em] text-[#DFBA82] uppercase">
                Official Channels
              </span>
              <a
                href={SOCIAL_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[36px] items-center gap-2 font-medium text-[#FAF4EB] transition-colors hover:text-[#F4D8A8]"
              >
                <Instagram className="h-4 w-4 text-[#E8859A]" aria-hidden="true" />
                <span>Instagram ({SOCIAL_LINKS.instagram.handle})</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#DFBA82]" aria-hidden="true" />
              </a>
              <span aria-hidden="true" className="text-[#DFBA82]/30">
                /
              </span>
              <a
                href={SOCIAL_LINKS.whatsappChannel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[36px] items-center gap-2 font-medium text-[#FAF4EB] transition-colors hover:text-[#F4D8A8]"
              >
                <MessageCircle className="h-4 w-4 text-[#DFBA82]" aria-hidden="true" />
                <span>Official WhatsApp Channel</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#DFBA82]" aria-hidden="true" />
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
            <div className="relative w-full max-w-[440px]">
              {/* Warm gold & royal wine ambient halo framing the untouched black square logo */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-5 rounded-sm bg-[radial-gradient(circle,rgba(223,186,130,0.28)_0%,rgba(155,20,50,0.26)_48%,transparent_72%)] blur-xl"
              />
              <div className="card-plum-glass relative rounded-sm border border-[#DFBA82]/38 p-4 shadow-[0_28px_80px_rgba(8,4,14,0.85)] sm:p-5">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-[#F4D8A8]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 bottom-0 h-6 w-6 border-r-2 border-b-2 border-[#E8859A]"
                />

                <div className="overflow-hidden rounded-sm border border-[#DFBA82]/24 bg-black">
                  <img
                    src={BRAND_CONFIG.logoPath}
                    alt={BRAND_CONFIG.logoAlt}
                    referrerPolicy="no-referrer"
                    className="aspect-square w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Editable Arena Stats Strip */}
        <div className="card-plum-glass mt-12 grid grid-cols-2 rounded-sm border border-[#DFBA82]/24 md:mt-16 md:grid-cols-4">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className={`p-5 sm:p-6 ${
                idx < HERO_STATS.length - 1
                  ? 'border-b border-[#DFBA82]/14 md:border-r md:border-b-0'
                  : ''
              } ${idx % 2 === 0 ? 'border-r border-[#DFBA82]/14 md:border-r' : ''}`}
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-[#E8859A] uppercase">
                {stat.label}
              </p>
              <p className="font-display text-gold-metallic mt-2 text-3xl font-bold tracking-tight tabular-nums sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs leading-snug text-[#D4CBDA]">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
