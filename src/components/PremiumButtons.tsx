import { memo, useCallback, useEffect, useRef, useState, type ReactNode, type PointerEvent } from 'react';
import { m } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface RippleWave {
  id: number;
  x: number;
  y: number;
}

function useTapRipple() {
  const [ripples, setRipples] = useState<RippleWave[]>([]);
  const nextId = useRef(0);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  const spawnRipple = useCallback((e: PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX ? e.clientX - rect.left : rect.width / 2;
    const y = e.clientY ? e.clientY - rect.top : rect.height / 2;
    const id = ++nextId.current;

    setRipples((prev) => [...prev.slice(-1), { id, x, y }]);
    const timer = window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 520);
    timersRef.current.push(timer);
  }, []);

  return { ripples, spawnRipple };
}

/**
 * Official WhatsApp Vector Glyph
 */
export const WhatsAppBrandIcon = memo(function WhatsAppBrandIcon({
  className = 'h-4 w-4',
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12.04 2C6.51 2 2.02 6.48 2.02 12c0 1.88.52 3.72 1.51 5.31L2 22l4.84-1.48A9.97 9.97 0 0 0 12.04 22C17.56 22 22.05 17.51 22.05 12S17.56 2 12.04 2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        fill="rgba(52, 211, 153, 0.16)"
      />
      <path
        d="M9.18 8.35c-.2-.45-.41-.46-.6-.47h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.21 0 1.3.95 2.56 1.08 2.74.13.18 1.84 2.94 4.54 4 2.24.88 2.7.71 3.19.66.49-.04 1.57-.64 1.79-1.26.22-.62.22-1.15.15-1.26-.06-.11-.24-.18-.51-.31-.27-.13-1.57-.77-1.81-.86-.24-.09-.42-.13-.6.13-.18.27-.69.86-.85 1.04-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.33-.79-.71-1.33-1.58-1.49-1.85-.15-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.59-1.45-.83-1.97Z"
        fill="currentColor"
      />
    </svg>
  );
});

/**
 * Official Instagram Vector Glyph
 */
export const InstagramBrandIcon = memo(function InstagramBrandIcon({
  className = 'h-4 w-4',
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="rgba(244, 114, 182, 0.14)"
      />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.25" cy="6.75" r="1.15" fill="currentColor" />
    </svg>
  );
});

interface PortalLinkProps {
  href: string;
  label: string;
  sublabel?: string;
  size?: 'nav' | 'hero' | 'full' | 'mobile';
  className?: string;
  onClick?: () => void;
}

const SIZE_CLASSES: Record<NonNullable<PortalLinkProps['size']>, string> = {
  nav: 'min-h-[40px] px-4 py-2 text-xs gap-2',
  hero: 'min-h-[52px] px-6 py-3.5 text-xs sm:text-sm gap-2.5',
  full: 'min-h-[50px] w-full justify-between px-5 py-3 text-sm gap-3',
  mobile: 'min-h-[46px] w-full justify-center px-4 py-2.5 text-xs gap-2',
};

/**
 * Coordinated Official WhatsApp Channel Portal Button
 */
export const WhatsAppPortalButton = memo(function WhatsAppPortalButton({
  href,
  label,
  sublabel,
  size = 'hero',
  className = '',
  onClick,
}: PortalLinkProps) {
  const { ripples, spawnRipple } = useTapRipple();

  return (
    <m.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      onPointerDown={spawnRipple}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.968, y: 1.5 }}
      transition={{ type: 'spring', stiffness: 520, damping: 28, mass: 0.6 }}
      className={`btn-whatsapp-portal clip-chamfer touch-tactile group inline-flex shrink-0 items-center justify-center font-bold tracking-[0.1em] uppercase whitespace-nowrap select-none ${SIZE_CLASSES[size]} ${className}`}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          aria-hidden="true"
          style={{ left: ripple.x, top: ripple.y }}
          className="animate-tap-ripple pointer-events-none absolute h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(167,243,208,0.52)_0%,rgba(52,211,153,0.18)_45%,transparent_72%)]"
        />
      ))}

      <span className="relative z-10 flex items-center gap-2.5">
        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border border-[#34D399]/40 bg-[#062C1E]/85 text-[#4ADE80] transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3">
          <WhatsAppBrandIcon className="h-3.5 w-3.5" />
        </span>
        <span className="flex flex-col text-left leading-tight">
          <span>{label}</span>
          {sublabel && (
            <span className="text-[10px] font-semibold tracking-[0.12em] text-emerald-200/80">
              {sublabel}
            </span>
          )}
        </span>
      </span>

      <ArrowUpRight
        aria-hidden="true"
        className="relative z-10 h-4 w-4 shrink-0 text-[#6EE7B7] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </m.a>
  );
});

/**
 * Coordinated Official Instagram Portal Button
 */
export const InstagramPortalButton = memo(function InstagramPortalButton({
  href,
  label,
  sublabel,
  size = 'hero',
  className = '',
  onClick,
}: PortalLinkProps) {
  const { ripples, spawnRipple } = useTapRipple();

  return (
    <m.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      onPointerDown={spawnRipple}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.968, y: 1.5 }}
      transition={{ type: 'spring', stiffness: 520, damping: 28, mass: 0.6 }}
      className={`btn-instagram-portal clip-chamfer touch-tactile group inline-flex shrink-0 items-center justify-center font-bold tracking-[0.1em] uppercase whitespace-nowrap select-none ${SIZE_CLASSES[size]} ${className}`}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          aria-hidden="true"
          style={{ left: ripple.x, top: ripple.y }}
          className="animate-tap-ripple pointer-events-none absolute h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(251,207,232,0.52)_0%,rgba(244,114,182,0.2)_45%,transparent_72%)]"
        />
      ))}

      <span className="relative z-10 flex items-center gap-2.5">
        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-sm border border-[#F472B6]/45 bg-[#2A0E24]/85 text-[#F9A8D4] transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3">
          <InstagramBrandIcon className="h-3.5 w-3.5" />
        </span>
        <span className="flex flex-col text-left leading-tight">
          <span>{label}</span>
          {sublabel && (
            <span className="text-[10px] font-semibold tracking-[0.12em] text-pink-200/80">
              {sublabel}
            </span>
          )}
        </span>
      </span>

      <ArrowUpRight
        aria-hidden="true"
        className="relative z-10 h-4 w-4 shrink-0 text-[#F9A8D4] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </m.a>
  );
});

/**
 * Tactile Animated Button Wrapper for Interactive Controls
 */
interface TactileButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  role?: string;
  'aria-selected'?: boolean;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  'aria-label'?: string;
  id?: string;
}

export const TactileButton = memo(function TactileButton({
  children,
  onClick,
  type = 'button',
  className = '',
  ...ariaProps
}: TactileButtonProps) {
  const { ripples, spawnRipple } = useTapRipple();

  return (
    <m.button
      type={type}
      onClick={onClick}
      onPointerDown={spawnRipple}
      whileHover={{ y: -1.5 }}
      whileTap={{ scale: 0.968, y: 1 }}
      transition={{ type: 'spring', stiffness: 520, damping: 30, mass: 0.55 }}
      className={`touch-tactile relative overflow-hidden select-none ${className}`}
      {...ariaProps}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          aria-hidden="true"
          style={{ left: ripple.x, top: ripple.y }}
          className="animate-tap-ripple pointer-events-none absolute h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.34)_0%,rgba(244,63,94,0.16)_45%,transparent_72%)]"
        />
      ))}
      <span className="relative z-10 inline-flex w-full items-center justify-center gap-2">
        {children}
      </span>
    </m.button>
  );
});

/**
 * Tactile Animated Anchor Wrapper for Internal Navigation Buttons
 */
interface TactileLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const TactileLink = memo(function TactileLink({
  href,
  children,
  className = '',
}: TactileLinkProps) {
  const { ripples, spawnRipple } = useTapRipple();

  return (
    <m.a
      href={href}
      onPointerDown={spawnRipple}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.968, y: 1.5 }}
      transition={{ type: 'spring', stiffness: 520, damping: 28, mass: 0.6 }}
      className={`touch-tactile relative overflow-hidden select-none ${className}`}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          aria-hidden="true"
          style={{ left: ripple.x, top: ripple.y }}
          className="animate-tap-ripple pointer-events-none absolute h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.45)_0%,rgba(226,232,240,0.18)_45%,transparent_72%)]"
        />
      ))}
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </m.a>
  );
});
