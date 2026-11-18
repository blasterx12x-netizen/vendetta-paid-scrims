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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070709]/92 backdrop-blur-md">
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
            className="h-10 w-10 shrink-0 rounded-sm border border-white/15 bg-black object-contain"
          />
          <span className="font-display text-xl font-bold tracking-[0.06em] text-[#F4F1EC] uppercase">
            {BRAND_CONFIG.shortName}
          </span>
        </a>

        {/* Zone 2: Single-line Navigation Links + Official Instagram */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 text-sm font-medium text-[#A9A59E] lg:flex"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-[#F4F1EC]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SOCIAL_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap py-1 text-[#D6D1C9] transition-colors duration-150 hover:text-[#DC2626]"
          >
            <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Instagram</span>
          </a>
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={SOCIAL_LINKS.whatsappChannel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[40px] shrink-0 items-center gap-2 whitespace-nowrap rounded-sm border border-[#DC2626]/70 bg-[#B91C1C] px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase transition-colors duration-150 hover:bg-[#DC2626] sm:inline-flex"
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 bg-[#111216] text-[#F4F1EC] transition-colors hover:border-white/30 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-white/10 bg-[#0A0B0E] px-4 py-5 lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center justify-between border-b border-white/5 px-2 text-sm font-medium text-[#D6D1C9] transition-colors hover:text-white"
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
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-sm bg-[#B91C1C] px-4 py-2.5 text-xs font-semibold tracking-wider text-white uppercase transition-colors hover:bg-[#DC2626]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Join WhatsApp Channel</span>
            </a>
            <a
              href={SOCIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-sm border border-white/15 bg-[#14151A] px-4 py-2.5 text-xs font-semibold tracking-wider text-[#F4F1EC] uppercase transition-colors hover:border-white/30"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              <span>Follow Instagram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
