import { memo, useEffect, useRef, useState } from 'react';
import {
  animate,
  m,
  useInView,
  useReducedMotion,
} from 'motion/react';
import { SectionEsportsSymbol, type SectionSymbolVariant } from './EsportsEmblems';

export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const VIEWPORT_CONFIG = { once: true, amount: 0.12 } as const;

/**
 * 1. Animated Section Heading & Eyebrow Reveal
 */
interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  symbol?: SectionSymbolVariant;
  className?: string;
}

export const SectionHeading = memo(function SectionHeading({
  eyebrow,
  title,
  symbol,
  className = '',
}: SectionHeadingProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={className}>
      <m.div
        initial={{ opacity: 0, x: prefersReduced ? 0 : -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT_CONFIG}
        transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
        className="flex items-center gap-2.5"
      >
        <m.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.42, delay: 0.06, ease: EASE_OUT_EXPO }}
          className="inline-block h-[2px] w-5 origin-left bg-[#F43F5E]"
        />
        {symbol && <SectionEsportsSymbol variant={symbol} className="h-4 w-4" />}
        <p className="text-xs font-bold tracking-[0.2em] text-[#FB7185] uppercase">
          {eyebrow}
        </p>
      </m.div>

      <m.h2
        initial={{
          opacity: 0,
          y: prefersReduced ? 0 : 16,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={VIEWPORT_CONFIG}
        transition={{ duration: 0.5, delay: 0.05, ease: EASE_OUT_EXPO }}
        className="font-display text-platinum-chrome mt-2 text-[clamp(2.4rem,4.5vw,3.8rem)] font-black leading-[0.94] tracking-[0.02em] uppercase"
        style={{ textWrap: 'balance' }}
      >
        {title}
      </m.h2>
    </div>
  );
});

/**
 * 2. Smooth Tabular Number Counter
 */
interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  padZero?: number;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = memo(function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  padZero = 0,
  duration = 0.95,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState<string>(() => {
    const base = padZero > 0 ? String(target).padStart(padZero, '0') : String(target);
    return `${prefix}${base}${suffix}`;
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (prefersReduced) {
      const finalStr = padZero > 0 ? String(target).padStart(padZero, '0') : String(target);
      setDisplay(`${prefix}${finalStr}${suffix}`);
      return;
    }

    const controls = animate(0, target, {
      duration,
      ease: EASE_OUT_EXPO,
      onUpdate(latest) {
        const rounded = Math.round(latest);
        const numStr = padZero > 0 ? String(rounded).padStart(padZero, '0') : String(rounded);
        setDisplay(`${prefix}${numStr}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, target, prefix, suffix, padZero, duration, prefersReduced]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
});

/**
 * 3. Optimized Hero Atmospheric Depth Layer
 * Pauses automatically when scrolled out of viewport via Intersection Observer.
 * Uses 6 lightweight GPU-only particles & feathered beam (zero CSS blur filter).
 */
const HERO_PARTICLES = [
  { left: '10%', top: '76%', size: 2, duration: '14s', delay: '0s', ruby: false },
  { left: '24%', top: '72%', size: 2, duration: '15.5s', delay: '1.8s', ruby: true },
  { left: '42%', top: '80%', size: 2, duration: '16s', delay: '0.8s', ruby: false },
  { left: '58%', top: '84%', size: 2.5, duration: '15s', delay: '2.6s', ruby: true },
  { left: '74%', top: '70%', size: 2, duration: '14.5s', delay: '1.2s', ruby: false },
  { left: '88%', top: '78%', size: 2.5, duration: '16.5s', delay: '3.1s', ruby: true },
];

export const HeroAtmosphere = memo(function HeroAtmosphere() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.02 });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-paused={!isInView}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Architectural Grid (Drifts gently on desktop, static on mobile, paused offscreen) */}
      <div className="bg-esports-grid animate-grid-drift absolute -inset-[72px] opacity-80" />

      {/* Diagonal Carbon Micro-Weave */}
      <div className="bg-carbon-diagonal absolute inset-0 opacity-60" />

      {/* Feathered Diagonal Lighting Beam (Zero CSS blur filter) */}
      <div className="animate-beam-drift absolute -top-36 right-[10%] h-[700px] w-[300px] bg-[radial-gradient(ellipse_at_50%_20%,rgba(225,29,72,0.16)_0%,rgba(226,232,240,0.05)_42%,transparent_74%)]" />

      {/* 6 Lightweight GPU-Composited Particles */}
      {HERO_PARTICLES.map((p, i) => (
        <span
          key={i}
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            ['--particle-duration' as string]: p.duration,
            ['--particle-delay' as string]: p.delay,
          }}
          className={`animate-particle-float absolute rounded-full ${
            p.ruby ? 'bg-[#FB7185]/80' : 'bg-slate-200/75'
          }`}
        />
      ))}
    </div>
  );
});

/**
 * 4. Lightweight Static Atmospheric Section Aura (Zero Scroll-Listener Overhead)
 */
export const ParallaxSectionAura = memo(function ParallaxSectionAura({
  position = 'right',
  tone = 'ruby',
}: {
  position?: 'left' | 'right' | 'center';
  tone?: 'ruby' | 'steel';
}) {
  const posClass =
    position === 'left'
      ? 'left-[-8%] top-1/2 -translate-y-1/2'
      : position === 'center'
        ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        : 'right-[-8%] top-1/2 -translate-y-1/2';

  const bgGradient =
    tone === 'ruby'
      ? 'bg-[radial-gradient(circle,rgba(225,29,72,0.15)_0%,rgba(148,163,184,0.05)_48%,transparent_72%)]'
      : 'bg-[radial-gradient(circle,rgba(148,163,184,0.12)_0%,rgba(225,29,72,0.06)_48%,transparent_72%)]';

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`absolute h-[440px] w-[440px] rounded-full ${posClass} ${bgGradient}`} />
    </div>
  );
});

/**
 * 5. Viewport-Aware Thin Telemetry Scanning Energy Line
 * Automatically pauses when outside viewport.
 */
export const TelemetryScanBar = memo(function TelemetryScanBar({
  className = '',
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.05 });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-paused={!isInView}
      className={`pointer-events-none absolute inset-x-0 top-0 h-[1px] overflow-hidden ${className}`}
    >
      <div className="animate-scan-sweep h-full w-1/3 bg-gradient-to-r from-transparent via-[#F43F5E] to-transparent opacity-80" />
    </div>
  );
});

/**
 * 6. Sleek HUD Corner Targeting Frame
 */
export const HudCornerFrame = memo(function HudCornerFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="absolute top-2.5 left-2.5 h-3 w-3 border-t border-l border-slate-300/45 transition-colors duration-200 group-hover:border-[#FB7185]" />
      <span className="absolute top-2.5 right-2.5 h-3 w-3 border-t border-r border-slate-300/45 transition-colors duration-200 group-hover:border-[#FB7185]" />
      <span className="absolute bottom-2.5 left-2.5 h-3 w-3 border-b border-l border-slate-300/45 transition-colors duration-200 group-hover:border-[#FB7185]" />
      <span className="absolute right-2.5 bottom-2.5 h-3 w-3 border-r border-b border-slate-300/45 transition-colors duration-200 group-hover:border-[#FB7185]" />
    </div>
  );
});
