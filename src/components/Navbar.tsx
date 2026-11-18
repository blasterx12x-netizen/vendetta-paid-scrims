import { useState } from 'react';
import { Menu, X, ArrowUpRight, Instagram, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, SOCIAL_LINKS } from '../data/scrimConfig';

const NAV_LINKS = [
  { label: 'Schedule', href: '#schedule' },
  { label: 'Prize Tiers', href: '#tiers' },
  { label: 'Map Pool', href: '#maps' },
  { label: 'Register', href: '#register' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DFBA82]/20 bg-[#140D1E]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-8">
        {/* Zone 1: Official VENDETTA Brand Mark */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3 whitespace-nowrap focus-visible:rounded-sm"
          aria-label="VENDETTA PAID SCRIMS Home"
        >
          <img
            src={BRAND_CONFIG.logoPath}
            alt={BRAND_CONFIG.logoAlt}
            width={40}
            height={40}
            referrerPolicy="no-referrer"
            className="h-10 w-10 shrink-0 rounded-sm border border-[#DFBA82]/40 bg-black object-contain"
          />
          <span className="font-display text-gold-metallic text-xl font-extrabold tracking-[0.09em] uppercase">
            {BRAND_CONFIG.shortName}
          </span>
        </a>

        {/* Zone 2: Single-line Navigation Links + Official Instagram */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 text-sm font-medium text-[#C8BECF] lg:flex"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap py-1 transition-colors duration-150 hover:text-[#F4D8A8]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SOCIAL_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap py-1 text-[#F4D8A8] transition-colors duration-150 hover:text-white"
          >
            <Instagram className="h-3.5 w-3.5 text-[#E8859A]" aria-hidden="true" />
            <span>Instagram</span>
          </a>
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={SOCIAL_LINKS.whatsappChannel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-luxury hidden min-h-[40px] shrink-0 items-center gap-2 whitespace-nowrap rounded-sm px-4 py-2 text-xs font-bold tracking-[0.08em] uppercase transition-all duration-150 sm:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            <span>WhatsApp Channel</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#DFBA82]/30 bg-[#1E142B] text-[#FAF4EB] transition-colors hover:border-[#DFBA82]/60 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-[#DFBA82]/20 bg-[#140D1E]/98 px-4 py-5 backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center justify-between border-b border-[#DFBA82]/10 px-2 text-sm font-medium text-[#E4DCE9] transition-colors hover:text-[#F4D8A8]"
              >
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={SOCIAL_LINKS.whatsappChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-gold-luxury flex min-h-[44px] items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-xs font-bold tracking-wider uppercase transition-all"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Join WhatsApp Channel</span>
            </a>
            <a
              href={SOCIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-garnet-luxury flex min-h-[44px] items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all"
            >
              <Instagram className="h-4 w-4 text-[#F4D8A8]" aria-hidden="true" />
              <span>Follow Instagram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
