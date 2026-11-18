import { ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, SOCIAL_LINKS } from '../data/scrimConfig';

const FOOTER_LINKS = [
  { label: 'Lobby Schedule', href: '#schedule' },
  { label: 'Entry Tiers', href: '#tiers' },
  { label: 'Map Pool', href: '#maps' },
  { label: 'How to Register', href: '#register' },
  { label: 'Rules & Fair Play', href: '#rules' },
  { label: 'FAQ', href: '#faq' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0712] py-14 text-[#C8BECF]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFBA82]/50 to-transparent"
      />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-[#DFBA82]/14 pb-12 md:grid-cols-12">
          {/* Official Brand Logo & Description */}
          <div className="md:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center gap-3.5 focus-visible:rounded-sm"
            >
              <img
                src={BRAND_CONFIG.logoPath}
                alt={BRAND_CONFIG.logoAlt}
                width={56}
                height={56}
                referrerPolicy="no-referrer"
                className="h-14 w-14 shrink-0 rounded-sm border border-[#DFBA82]/40 bg-black object-contain"
              />
              <div>
                <p className="font-display text-gold-metallic text-2xl font-bold tracking-[0.08em] uppercase">
                  {BRAND_CONFIG.name}
                </p>
                <p className="text-xs tracking-[0.14em] text-[#E8859A] uppercase">
                  India Competitive Free Fire Arena
                </p>
              </div>
            </a>

            <p className="mt-4 max-w-[44ch] text-sm leading-relaxed text-[#B8AEC2]">
              Organised daily Free Fire paid scrims across India featuring four structured
              IST lobby timings, B2B six-map rotations, and direct WhatsApp slot management.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.16em] text-[#DFBA82] uppercase">
              Arena Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors duration-150 hover:text-[#F4D8A8]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Social Links (Strictly Instagram & WhatsApp Channel Only) */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-[0.16em] text-[#DFBA82] uppercase">
              Official Social Channels
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-[#9D92AA]">
              Connect exclusively through our verified Instagram and WhatsApp Channel.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={SOCIAL_LINKS.whatsappChannel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-luxury flex min-h-[44px] items-center justify-between rounded-sm px-4 py-2.5 text-sm font-bold transition-all"
              >
                <span className="inline-flex items-center gap-2.5">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>WhatsApp Channel</span>
                </span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={SOCIAL_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-garnet-luxury flex min-h-[44px] items-center justify-between rounded-sm px-4 py-2.5 text-sm font-semibold transition-all"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Instagram className="h-4 w-4 text-[#F4D8A8]" aria-hidden="true" />
                  <span>Instagram ({SOCIAL_LINKS.instagram.handle})</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#F4D8A8]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-[#8B8098] sm:flex-row sm:items-center">
          <p>© {year} {BRAND_CONFIG.name}. All rights reserved.</p>
          <p className="tracking-[0.14em] text-[#DFBA82] uppercase">Play · Compete · Dominate</p>
        </div>
      </div>
    </footer>
  );
}
