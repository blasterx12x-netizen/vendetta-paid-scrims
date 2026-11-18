import { memo } from 'react';
import { m } from 'motion/react';
import { Compass, Headset } from 'lucide-react';
import { BRAND_CONFIG, SOCIAL_LINKS } from '../data/scrimConfig';
import { EASE_OUT_EXPO, VIEWPORT_CONFIG } from './MotionPrimitives';
import { InstagramPortalButton, WhatsAppPortalButton } from './PremiumButtons';

const FOOTER_LINKS = [
  { label: 'Lobby Schedule', href: '#schedule' },
  { label: 'Entry Tiers', href: '#tiers' },
  { label: 'Map Pool', href: '#maps' },
  { label: 'How to Register', href: '#register' },
  { label: 'Rules & Fair Play', href: '#rules' },
  { label: 'FAQ', href: '#faq' },
];

export const Footer = memo(function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#04060C] py-16 text-slate-300">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-rose-400/45 to-transparent"
      />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
          className="grid grid-cols-1 gap-10 border-b border-slate-300/12 pb-12 md:grid-cols-12"
        >
          {/* Official Brand Logo & Description */}
          <div className="md:col-span-5">
            <a
              href="#top"
              className="group inline-flex items-center gap-4 focus-visible:rounded-sm"
            >
              <img
                src={BRAND_CONFIG.logoPath}
                alt={BRAND_CONFIG.logoAlt}
                width={60}
                height={60}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-15 w-15 shrink-0 rounded-sm border border-slate-200/25 bg-black object-contain transition-transform duration-200 group-hover:scale-[1.04]"
              />
              <div>
                <p className="font-display text-platinum-chrome text-3xl font-black tracking-[0.08em] uppercase">
                  {BRAND_CONFIG.name}
                </p>
                <p className="text-[11px] font-bold tracking-[0.18em] text-[#FB7185] uppercase">
                  India Competitive Free Fire Arena
                </p>
              </div>
            </a>

            <p className="mt-4 max-w-[44ch] text-sm leading-[1.7] text-slate-400">
              Precision-managed daily Free Fire paid scrims across India featuring four
              structured IST lobby timings, B2B six-map rotations, and direct WhatsApp slot
              operations.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h3 className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.18em] text-slate-200 uppercase">
              <Compass className="h-3.5 w-3.5 text-[#7DD3FC]" strokeWidth={1.75} aria-hidden="true" />
              <span>Arena Navigation</span>
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block py-0.5 text-slate-400 transition-all duration-150 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinated Official Social Portal Buttons (Strictly Instagram & WhatsApp Channel Only) */}
          <div className="md:col-span-4">
            <h3 className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.18em] text-slate-200 uppercase">
              <Headset className="h-3.5 w-3.5 text-[#7DD3FC]" strokeWidth={1.75} aria-hidden="true" />
              <span>Official Support & Portals</span>
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              Connect exclusively through our verified WhatsApp Channel and Instagram.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <WhatsAppPortalButton
                href={SOCIAL_LINKS.whatsappChannel.url}
                label="WhatsApp Channel"
                sublabel="Official Scrim Desk & Notices"
                size="full"
              />

              <InstagramPortalButton
                href={SOCIAL_LINKS.instagram.url}
                label={`Instagram (${SOCIAL_LINKS.instagram.handle})`}
                sublabel="Highlights & Announcements"
                size="full"
              />
            </div>
          </div>
        </m.div>

        {/* Quiet Copyright Bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {year} {BRAND_CONFIG.name}. All rights reserved.</p>
          <p className="font-semibold tracking-[0.18em] text-slate-400 uppercase">
            Play · Compete · Dominate
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
