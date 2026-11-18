import { memo } from 'react';
import { ArrowDownRight, Clock, Headset, MapPin, Trophy, Wallet } from 'lucide-react';
import { m } from 'motion/react';
import { BRAND_CONFIG, HERO_STATS, SOCIAL_LINKS } from '../data/scrimConfig';
import { TacticalOrbitEmblem } from './EsportsEmblems';
import {
  AnimatedCounter,
  EASE_OUT_EXPO,
  HeroAtmosphere,
  HudCornerFrame,
} from './MotionPrimitives';
import {
  InstagramPortalButton,
  TactileLink,
  WhatsAppPortalButton,
} from './PremiumButtons';

const STAT_ICONS: Record<string, typeof Clock> = {
  'daily-lobbies': Clock,
  'map-format': MapPin,
  'entry-range': Wallet,
  'top-prize': Trophy,
};

export const Hero = memo(function Hero() {
  const headlineParts = BRAND_CONFIG.heroHeadline.split('. ');
  const primaryLine = headlineParts[0] ? `${headlineParts[0]}.` : BRAND_CONFIG.heroHeadline;
  const secondaryLine = headlineParts[1] ?? '';

  return (
    <section
      id="top"
      className="bg-vendetta-stage relative overflow-hidden border-b border-slate-300/14"
    >
      {/* Dynamic Viewport-Gated Atmospheric Grid Drift, Feathered Beam & 6 Fine Particles */}
      <HeroAtmosphere />

      <div className="relative mx-auto max-w-[1280px] px-4 pt-12 pb-14 sm:px-6 md:pt-18 md:pb-18 lg:px-8 lg:pt-24 lg:pb-22">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Staggered Kinetic Esports Typography & Actions */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <m.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
              className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-[0.2em] text-slate-300 uppercase"
            >
              <span aria-hidden="true" className="inline-block h-[2px] w-5 bg-[#F43F5E]" />
              <span className="text-white">{BRAND_CONFIG.name}</span>
              <span aria-hidden="true" className="text-[#F43F5E]">
                /
              </span>
              <span className="text-slate-400">{BRAND_CONFIG.regionLabel}</span>
            </m.div>

            <h1
              className="font-display text-[clamp(3.35rem,7vw,6.2rem)] font-black leading-[0.89] tracking-[0.015em] uppercase"
              style={{ textWrap: 'balance' }}
            >
              <m.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.52, delay: 0.05, ease: EASE_OUT_EXPO }}
                className="text-platinum-chrome block"
              >
                {primaryLine}
              </m.span>
              {secondaryLine && (
                <m.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.56, delay: 0.12, ease: EASE_OUT_EXPO }}
                  className="text-ruby-luminous mt-1 block"
                >
                  {secondaryLine}
                </m.span>
              )}
            </h1>

            <m.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.46, delay: 0.18, ease: EASE_OUT_EXPO }}
              className="mt-5 font-sans text-sm font-bold tracking-[0.18em] text-slate-200 uppercase sm:text-base"
            >
              <span className="text-keyword-shimmer">{BRAND_CONFIG.heroSubheadline}</span>
            </m.p>

            <m.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.44, delay: 0.24, ease: EASE_OUT_EXPO }}
              className="mt-4 max-w-[54ch] text-[15px] leading-[1.75] text-slate-300/90 sm:text-base"
            >
              {BRAND_CONFIG.communityIntro}
            </m.p>

            {/* Primary & Secondary Action Buttons */}
            <m.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.44, delay: 0.3, ease: EASE_OUT_EXPO }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <WhatsAppPortalButton
                href={SOCIAL_LINKS.whatsappChannel.url}
                label={SOCIAL_LINKS.whatsappChannel.ctaHero}
                size="hero"
              />

              <TactileLink
                href="#schedule"
                className="btn-platinum-primary clip-chamfer group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 whitespace-nowrap px-7 py-3.5 text-xs font-bold tracking-[0.11em] uppercase transition-all duration-200 sm:text-sm"
              >
                <span>View Lobby Schedule</span>
                <ArrowDownRight
                  className="h-4 w-4 text-[#E11D48] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </TactileLink>
            </m.div>

            {/* Coordinated Official Community Portals Row */}
            <m.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.36, ease: EASE_OUT_EXPO }}
              className="mt-8 flex flex-col gap-3 border-t border-slate-300/14 pt-6 sm:flex-row sm:items-center sm:gap-5"
            >
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.18em] text-slate-400 uppercase">
                <Headset className="h-3.5 w-3.5 text-[#7DD3FC]" strokeWidth={1.75} aria-hidden="true" />
                <span>Official Portals</span>
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <InstagramPortalButton
                  href={SOCIAL_LINKS.instagram.url}
                  label={`Instagram · ${SOCIAL_LINKS.instagram.handle}`}
                  size="nav"
                />
                <WhatsAppPortalButton
                  href={SOCIAL_LINKS.whatsappChannel.url}
                  label="Official Channel"
                  size="nav"
                />
              </div>
            </m.div>
          </div>

          {/* Right Column: Chamfered Trophy Pedestal + Dual-Ring Tactical Orbit + Untouched VENDETTA Logo */}
          <m.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.12, ease: EASE_OUT_EXPO }}
            className="flex items-center justify-center py-6 lg:col-span-5 lg:py-0"
          >
            <div className="group relative w-full max-w-[410px]">
              {/* Dual-Ring 3D-Inspired Targeting Orbit & Crosshair HUD (Pauses Offscreen) */}
              <TacticalOrbitEmblem />

              {/* Static Radial Ambient Halo (No CSS Blur Filter Overhead) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(225,29,72,0.2)_0%,rgba(148,163,184,0.09)_46%,transparent_72%)]"
              />

              <div className="surface-titanium clip-chamfer-lg animate-levitate relative overflow-hidden border border-slate-200/20 p-4 sm:p-5">
                <HudCornerFrame />
                <div className="overflow-hidden rounded-sm border border-slate-200/15 bg-black">
                  <img
                    src={BRAND_CONFIG.logoPath}
                    alt={BRAND_CONFIG.logoAlt}
                    width={400}
                    height={400}
                    fetchPriority="high"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="aspect-square w-full object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Full-Width 4-Column Chamfered Arena Telemetry Strip */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, delay: 0.34, ease: EASE_OUT_EXPO }}
          className="surface-titanium clip-chamfer relative mt-14 grid grid-cols-2 overflow-hidden border border-slate-300/15 md:mt-18 md:grid-cols-4"
        >
          {HERO_STATS.map((stat, idx) => {
            const StatIcon = STAT_ICONS[stat.id] ?? Trophy;
            return (
              <div
                key={stat.id}
                className={`p-5 transition-colors duration-200 hover:bg-white/[0.03] sm:p-6 ${
                  idx < HERO_STATS.length - 1
                    ? 'border-b border-slate-300/10 md:border-r md:border-b-0'
                    : ''
                } ${idx % 2 === 0 ? 'border-r border-slate-300/10 md:border-r' : ''}`}
              >
                <p className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] text-[#FB7185] uppercase">
                  <StatIcon
                    className="h-3.5 w-3.5 text-[#7DD3FC]"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span>{stat.label}</span>
                </p>
                <p className="font-display text-platinum-chrome mt-2 text-4xl font-black tracking-[0.02em] tabular-nums sm:text-[2.75rem]">
                  {stat.id === 'daily-lobbies' ? (
                    <AnimatedCounter target={4} padZero={2} duration={0.85} />
                  ) : stat.id === 'map-format' ? (
                    <AnimatedCounter target={6} suffix=" Maps" duration={0.9} />
                  ) : stat.id === 'top-prize' ? (
                    <AnimatedCounter target={550} prefix="₹" duration={1.05} />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{stat.detail}</p>
              </div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
});
