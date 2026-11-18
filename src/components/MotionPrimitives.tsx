import { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import { SectionEsportsSymbol, type SectionSymbolVariant } from './EsportsEmblems';

export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const VIEWPORT_CONFIG = { once: true, amount: 0.14 } as const;

/**
 * 1. Animated Section Heading & Eyebrow Reveal
 * Subtle letter-spacing tighten + masked upward glide + staggered eyebrow + custom esports HUD symbol.
 */
interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  symbol?: SectionSymbolVariant;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  symbol,
  className = '',
}: SectionHeadingProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, x: prefersReduced ? 0 : -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT_CONFIG}
        transition={{ duration: 0.42, ease: EASE_OUT_EXPO }}
        className="flex items-center gap-2.5"
      >
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.45, delay: 0.08, ease: EASE_OUT_EXPO }}
          className="inline-block h-[2px] w-5 origin-left bg-[#F43F5E]"
        />
        {symbol && <SectionEsportsSymbol variant={symbol} className="h-4 w-4" />}
        <p className="text-xs font-bold tracking-[0.2em] text-[#FB7185] uppercase">
          {eyebrow}
        </p>
      </motion.div>

      <motion.h2
        initial={{
          opacity: 0,
          y: prefersReduced ? 0 : 18,
          letterSpacing: prefersReduced ? '0.02em' : '0.055em',
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          letterSpacing: '0.02em',
        }}
        viewport={VIEWPORT_CONFIG}
        transition={{ duration: 0.56, delay: 0.06, ease: EASE_OUT_EXPO }}
        className="font-display text-platinum-chrome mt-2 text-[clamp(2.4rem,4.5vw,3.8rem)] font-black leading-[0.94] uppercase"
        style={{ textWrap: 'balance' }}
      >
        {title}
      </motion.h2>
    </div>
  );
}

/**
 * 2. Smooth Tabular Number Counter
 * Counts smoothly from 0 to target when scrolled into view; preserves layout width.
 */
interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  padZero?: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  padZero = 0,
  duration = 1.05,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
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
}

/**
 * 3. Hero Atmospheric Depth Layer
 * Slow architectural grid drift, breathing diagonal light beam, and 14 ultra-fine drifting particles.
 */
const HERO_PARTICLES = [
  { left: '8%', top: '76%', size: 2, duration: '13s', delay: '0s', ruby: false },
  { left: '16%', top: '84%', size: 2.5, duration: '16s', delay: '2.2s', ruby: true },
  { left: '24%', top: '68%', size: 1.5, duration: '12s', delay: '1.1s', ruby: false },
  { left: '34%', top: '88%', size: 2, duration: '15s', delay: '4.1s', ruby: true },
  { left: '43%', top: '72%', size: 1.5, duration: '14s', delay: '0.6s', ruby: false },
  { left: '52%', top: '86%', size: 2, duration: '17s', delay: '3.2s', ruby: true },
  { left: '61%', top: '79%', size: 2, duration: '13.5s', delay: '1.8s', ruby: false },
  { left: '70%', top: '90%', size: 2.5, duration: '15.5s', delay: '0.4s', ruby: true },
  { left: '78%', top: '70%', size: 1.5, duration: '12.5s', delay: '2.9s', ruby: false },
  { left: '86%', top: '82%', size: 2, duration: '16.5s', delay: '1.4s', ruby: true },
  { left: '92%', top: '75%', size: 1.5, duration: '14.5s', delay: '3.8s', ruby: false },
  { left: '29%', top: '42%', size: 1.5, duration: '15s', delay: '2.5s', ruby: false },
  { left: '66%', top: '38%', size: 2, duration: '14s', delay: '0.9s', ruby: true },
  { left: '82%', top: '46%', size: 1.5, duration: '16s', delay: '3.1s', ruby: false },
];

export function HeroAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Subtle Drifting Architectural Grid */}
      <div className="bg-esports-grid animate-grid-drift absolute -inset-[72px] opacity-80 will-change-transform" />

      {/* Diagonal Carbon Micro-Weave */}
      <div className="bg-carbon-diagonal absolute inset-0 opacity-60" />

      {/* Slow Breathing Diagonal Lighting Beam */}
      <div className="animate-beam-drift absolute -top-36 right-[10%] h-[700px] w-[280px] bg-gradient-to-b from-rose-500/18 via-slate-200/6 to-transparent blur-2xl will-change-transform" />

      {/* Secondary Cool Titanium Ambient Glow */}
      <motion.div
        animate={{ opacity: [0.35, 0.58, 0.35], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity }}
        className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.14)_0%,transparent_70%)]"
      />

      {/* Fine Floating Particles */}
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
          className={`animate-particle-float absolute rounded-full will-change-transform ${
            p.ruby
              ? 'bg-[#FB7185] shadow-[0_0_8px_rgba(244,63,94,0.65)]'
              : 'bg-slate-200 shadow-[0_0_6px_rgba(226,232,240,0.45)]'
          }`}
        />
      ))}
    </div>
  );
}

/**
 * 4. Scroll-Linked Parallax Atmospheric Aura for Key Sections
 */
export function ParallaxSectionAura({
  position = 'right',
  tone = 'ruby',
}: {
  position?: 'left' | 'right' | 'center';
  tone?: 'ruby' | 'steel';
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [-36, 36]);

  const posClass =
    position === 'left'
      ? 'left-[-8%] top-1/2 -translate-y-1/2'
      : position === 'center'
        ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        : 'right-[-8%] top-1/2 -translate-y-1/2';

  const bgGradient =
    tone === 'ruby'
      ? 'bg-[radial-gradient(circle,rgba(225,29,72,0.17)_0%,rgba(148,163,184,0.06)_48%,transparent_72%)]'
      : 'bg-[radial-gradient(circle,rgba(148,163,184,0.14)_0%,rgba(225,29,72,0.07)_48%,transparent_72%)]';

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className={`absolute h-[480px] w-[480px] rounded-full will-change-transform ${posClass} ${bgGradient}`}
      />
    </div>
  );
}

/**
 * 5. Thin Telemetry Scanning Energy Line
 * Travels smoothly across top edges of command panels and section headers.
 */
export function TelemetryScanBar({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-0 h-[1px] overflow-hidden ${className}`}
    >
      <div className="animate-scan-sweep h-full w-1/3 bg-gradient-to-r from-transparent via-[#F43F5E] to-transparent opacity-80" />
    </div>
  );
}

/**
 * 6. Sleek HUD Corner Targeting Frame
 * Minimal corner brackets that subtly highlight key containers.
 */
export function HudCornerFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="absolute top-2.5 left-2.5 h-3 w-3 border-t border-l border-slate-300/45 transition-all duration-300 group-hover:top-2 group-hover:left-2 group-hover:border-[#FB7185]" />
      <span className="absolute top-2.5 right-2.5 h-3 w-3 border-t border-r border-slate-300/45 transition-all duration-300 group-hover:top-2 group-hover:right-2 group-hover:border-[#FB7185]" />
      <span className="absolute bottom-2.5 left-2.5 h-3 w-3 border-b border-l border-slate-300/45 transition-all duration-300 group-hover:bottom-2 group-hover:left-2 group-hover:border-[#FB7185]" />
      <span className="absolute right-2.5 bottom-2.5 h-3 w-3 border-r border-b border-slate-300/45 transition-all duration-300 group-hover:right-2 group-hover:bottom-2 group-hover:border-[#FB7185]" />
    </div>
  );
}
