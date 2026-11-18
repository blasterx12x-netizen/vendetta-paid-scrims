import { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'motion/react';
import { Menu, X, ArrowUpRight, Instagram } from 'lucide-react';
import { BRAND_CONFIG, SOCIAL_LINKS } from '../data/scrimConfig';
import { InstagramPortalButton, WhatsAppPortalButton } from './PremiumButtons';

const NAV_LINKS = [
  { label: 'Schedule', href: '#schedule' },
  { label: 'Prize Tiers', href: '#tiers' },
  { label: 'Map Pool', href: '#maps' },
  { label: 'Register', href: '#register' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const isNowScrolled = latest > 24;
    if (isNowScrolled !== scrolled) {
      setScrolled(isNowScrolled);
    }
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 backdrop-blur-xl ${
        scrolled
          ? 'border-rose-400/25 bg-[#05070D]/95 shadow-[0_12px_36px_rgba(2,4,10,0.72)]'
          : 'border-slate-300/12 bg-[#06080F]/88'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-8">
        {/* Zone 1: Official VENDETTA Brand Mark */}
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-3 whitespace-nowrap focus-visible:rounded-sm"
          aria-label="VENDETTA PAID SCRIMS Home"
        >
          <img
            src={BRAND_CONFIG.logoPath}
            alt={BRAND_CONFIG.logoAlt}
            width={40}
            height={40}
            referrerPolicy="no-referrer"
            className="h-10 w-10 shrink-0 rounded-sm border border-slate-200/25 bg-black object-contain transition-transform duration-200 group-hover:scale-[1.05]"
          />
          <span className="font-display text-platinum-chrome text-2xl font-extrabold tracking-[0.1em] uppercase transition-all duration-200 group-hover:tracking-[0.12em]">
            {BRAND_CONFIG.shortName}
          </span>
        </a>

        {/* Zone 2: Single-line Navigation Links + Official Instagram */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-xs font-semibold tracking-[0.12em] text-slate-300 uppercase lg:flex"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative shrink-0 whitespace-nowrap py-1.5 transition-colors duration-200 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[#F43F5E] after:transition-transform after:duration-200 hover:text-white hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SOCIAL_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap py-1.5 text-pink-300 transition-colors duration-200 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-pink-400 after:transition-transform after:duration-200 hover:text-white hover:after:scale-x-100"
          >
            <Instagram
              className="h-3.5 w-3.5 text-[#F472B6] transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            />
            <span>Instagram</span>
          </a>
        </nav>

        {/* Zone 3: Coordinated WhatsApp Portal Action + Mobile Menu Trigger */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden sm:block">
            <WhatsAppPortalButton
              href={SOCIAL_LINKS.whatsappChannel.url}
              label="WhatsApp Channel"
              size="nav"
            />
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="touch-tactile inline-flex h-11 w-11 items-center justify-center rounded-sm border border-slate-300/20 bg-[#0D1322] text-slate-100 transition-all duration-150 hover:border-[#F43F5E]/60 active:scale-[0.95] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-slate-300/12 bg-[#080C17]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="px-4 py-5">
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                {NAV_LINKS.map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: idx * 0.035 }}
                    onClick={() => setMobileOpen(false)}
                    className="touch-tactile flex min-h-[44px] items-center justify-between border-b border-slate-300/8 px-2 text-sm font-semibold tracking-wider text-slate-200 uppercase transition-colors hover:text-[#FB7185] active:text-white"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <WhatsAppPortalButton
                  href={SOCIAL_LINKS.whatsappChannel.url}
                  label="Join WhatsApp Channel"
                  size="mobile"
                  onClick={() => setMobileOpen(false)}
                />
                <InstagramPortalButton
                  href={SOCIAL_LINKS.instagram.url}
                  label="Follow Instagram"
                  size="mobile"
                  onClick={() => setMobileOpen(false)}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
