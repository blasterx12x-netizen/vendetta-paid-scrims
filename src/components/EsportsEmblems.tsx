import { motion } from 'motion/react';

/**
 * 1. 3D-Inspired Dual-Ring Tactical Targeting Orbit & Crosshair Insignia (Hero Stage)
 * Precision metallic vector rings + counter-rotating HUD arcs in Platinum Chrome & Luminous Ruby.
 */
export function TacticalOrbitEmblem() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-6 flex items-center justify-center sm:-inset-9"
    >
      {/* Outer Clockwise Calibration Ring */}
      <motion.svg
        viewBox="0 0 420 420"
        className="h-full w-full opacity-85"
        animate={{ rotate: 360 }}
        transition={{ duration: 54, ease: 'linear', repeat: Infinity }}
      >
        <defs>
          <linearGradient id="orbit-platinum-3d" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="48%" stopColor="#F43F5E" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#64748B" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <circle
          cx="210"
          cy="210"
          r="198"
          fill="none"
          stroke="url(#orbit-platinum-3d)"
          strokeWidth="1.25"
          strokeDasharray="20 12 4 12"
        />
        <circle
          cx="210"
          cy="210"
          r="182"
          fill="none"
          stroke="rgba(226, 232, 240, 0.16)"
          strokeWidth="0.8"
        />
        {/* Cardinal targeting diamond pips */}
        <polygon points="210,3 214,12 210,21 206,12" fill="#F43F5E" />
        <polygon points="210,399 214,408 210,417 206,408" fill="#F43F5E" />
        <line x1="4" y1="210" x2="22" y2="210" stroke="#E2E8F0" strokeWidth="1.75" />
        <line x1="398" y1="210" x2="416" y2="210" stroke="#E2E8F0" strokeWidth="1.75" />
      </motion.svg>

      {/* Inner Counter-Rotating Precision Crosshair Arc */}
      <motion.svg
        viewBox="0 0 420 420"
        className="absolute inset-0 h-full w-full opacity-65"
        animate={{ rotate: -360 }}
        transition={{ duration: 42, ease: 'linear', repeat: Infinity }}
      >
        <path
          d="M 62 145 A 164 164 0 0 1 145 62"
          fill="none"
          stroke="#FB7185"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 358 275 A 164 164 0 0 1 275 358"
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}

/**
 * 2. 3D-Beveled Metallic Championship Trophy Crest (Prize Tiers Division Header)
 */
export function ChampionshipTrophyEmblem({ className = 'h-14 w-14' }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4.6, ease: [0.45, 0, 0.55, 1], repeat: Infinity }}
      className={`inline-flex shrink-0 items-center justify-center drop-shadow-[0_10px_22px_rgba(225,29,72,0.28)] ${className}`}
    >
      <svg viewBox="0 0 64 64" className="h-full w-full">
        <defs>
          <linearGradient id="trophy-chrome-3d" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
          <linearGradient id="trophy-shade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="52%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="trophy-ruby-3d" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDA4AF" />
            <stop offset="50%" stopColor="#F43F5E" />
            <stop offset="100%" stopColor="#881337" />
          </linearGradient>
        </defs>
        {/* Outer Beveled Diamond Frame */}
        <polygon
          points="32,2 62,32 32,62 2,32"
          fill="rgba(10, 14, 25, 0.85)"
          stroke="url(#trophy-chrome-3d)"
          strokeWidth="1.2"
        />
        <polygon
          points="32,7 57,32 32,57 7,32"
          fill="none"
          stroke="rgba(244, 63, 94, 0.35)"
          strokeWidth="0.75"
        />
        {/* Cup Body with 3D Right-Side Shading */}
        <path
          d="M20 16 H44 L40 32 C39 38 36 41 32 42 C28 41 25 38 24 32 Z"
          fill="url(#trophy-shade)"
        />
        {/* Cup Specular Left Edge */}
        <path
          d="M21 17 H29 L28 38 C26 36 25 34 24 31 Z"
          fill="rgba(255,255,255,0.28)"
        />
        {/* Metallic Handles */}
        <path
          d="M20 19 H14 L16.5 29 L23.5 31"
          fill="none"
          stroke="url(#trophy-chrome-3d)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M44 19 H50 L47.5 29 L40.5 31"
          fill="none"
          stroke="url(#trophy-chrome-3d)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Faceted Ruby Core */}
        <polygon points="32,21 36.5,27 32,33.5 27.5,27" fill="url(#trophy-ruby-3d)" />
        {/* Stem & Pedestal Base */}
        <rect x="30" y="42" width="4" height="6" fill="#CBD5E1" />
        <polygon points="21,49 43,49 46,53.5 18,53.5" fill="url(#trophy-chrome-3d)" />
      </svg>
    </motion.div>
  );
}

/**
 * 3. Sculpted 3D-Inspired Armored Sentinel Shield Emblem (Competitive Experience)
 */
export function BattleShieldEmblem({ className = 'h-12 w-12' }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ scale: [1, 1.035, 1] }}
      transition={{ duration: 5.2, ease: [0.45, 0, 0.55, 1], repeat: Infinity }}
      className={`inline-flex shrink-0 items-center justify-center drop-shadow-[0_8px_18px_rgba(225,29,72,0.24)] ${className}`}
    >
      <svg viewBox="0 0 64 64" className="h-full w-full">
        <defs>
          <linearGradient id="shield-steel-3d" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="shield-ruby-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FB7185" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#881337" stopOpacity="0.16" />
          </linearGradient>
        </defs>
        <polygon
          points="32,5 55,14 51,40 32,59 13,40 9,14"
          fill="rgba(10, 14, 25, 0.92)"
          stroke="url(#shield-steel-3d)"
          strokeWidth="1.8"
        />
        <polygon
          points="32,14 45,20 42,37 32,49 22,37 19,20"
          fill="url(#shield-ruby-fill)"
          stroke="#F43F5E"
          strokeWidth="1.25"
        />
        {/* Metallic V Blade */}
        <path
          d="M24.5 23 L32 40 L39.5 23 L35 23 L32 31 L29 23 Z"
          fill="#F8FAFC"
        />
      </svg>
    </motion.div>
  );
}

/**
 * 4. Strategic Section Transition Energy Crosshair Insignia
 * Restrained futuristic targeting divider between major architectural bands.
 */
export function CrosshairTransitionInsignia() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mx-auto flex h-0 max-w-[1280px] items-center justify-center px-4"
    >
      {/* Subtle Horizontal Energy Pulse Line */}
      <div className="absolute inset-x-8 top-1/2 h-[1px] -translate-y-1/2 overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '220%'] }}
          transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1.5 }}
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#F43F5E]/65 to-transparent"
        />
      </div>

      <div className="relative z-20 flex items-center gap-3 rounded-sm border border-slate-300/22 bg-[#06080F] px-3.5 py-1 shadow-[0_0_24px_rgba(225,29,72,0.24)]">
        <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-slate-300/70" />
        <motion.svg
          viewBox="0 0 28 28"
          className="h-5 w-5"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
        >
          <polygon
            points="14,2 26,14 14,26 2,14"
            fill="rgba(225,29,72,0.18)"
            stroke="#CBD5E1"
            strokeWidth="1.25"
          />
          <polygon points="14,8 20,14 14,20 8,14" fill="#F43F5E" />
        </motion.svg>
        <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-slate-300/70" />
      </div>
    </div>
  );
}

/**
 * 5. Geometric Series Rank Insignia (Elite / Pro / Champions / Legend Series)
 * Thin-line metallic platinum & icy-blue geometric esports badges.
 */
export function SeriesRankInsignia({
  seriesId,
  className = 'h-5 w-5',
}: {
  seriesId: string;
  className?: string;
}) {
  const uid = `rank-${seriesId}`;

  if (seriesId === 'tier-04') {
    // Legend Series: Geometric Apex Crown Crest
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={`shrink-0 drop-shadow-[0_0_8px_rgba(125,211,252,0.32)] ${className}`}
      >
        <defs>
          <linearGradient id={`${uid}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#7DD3FC" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>
        </defs>
        <path
          d="M3.5 17.5L2.5 7.5L7.5 11.5L12 4.5L16.5 11.5L21.5 7.5L20.5 17.5H3.5Z"
          stroke={`url(#${uid}-grad)`}
          strokeWidth="1.65"
          strokeLinejoin="round"
          fill="rgba(125, 211, 252, 0.1)"
        />
        <line
          x1="4.5"
          y1="20.5"
          x2="19.5"
          y2="20.5"
          stroke={`url(#${uid}-grad)`}
          strokeWidth="1.65"
          strokeLinecap="round"
        />
        <polygon points="12,10.5 13.7,13.5 12,15.5 10.3,13.5" fill="#FB7185" />
      </svg>
    );
  }

  if (seriesId === 'tier-03') {
    // Champions Series: Faceted Laurel-Shield Crest
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={`shrink-0 drop-shadow-[0_0_6px_rgba(125,211,252,0.25)] ${className}`}
      >
        <path
          d="M12 2.75L19.25 6V12C19.25 16.4 16.1 19.9 12 21.5C7.9 19.9 4.75 16.4 4.75 12V6L12 2.75Z"
          stroke="#E2E8F0"
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="rgba(244, 63, 94, 0.1)"
        />
        <path
          d="M8.5 11.2L12 8.2L15.5 11.2M9.5 14.5L12 12.2L14.5 14.5"
          stroke="#7DD3FC"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (seriesId === 'tier-02') {
    // Pro Series: Dual-Chevron Tactical Rank Shield
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={`shrink-0 drop-shadow-[0_0_6px_rgba(125,211,252,0.2)] ${className}`}
      >
        <polygon
          points="12,2.5 20.5,7.2 20.5,16.8 12,21.5 3.5,16.8 3.5,7.2"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="rgba(125, 211, 252, 0.08)"
        />
        <path
          d="M8 11.2L12 7.8L16 11.2M8 15.2L12 11.8L16 15.2"
          stroke="#7DD3FC"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Elite Series: Precision Single-Chevron Shield Emblem
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path
        d="M12 3L19 6.5V12C19 16 16 19.3 12 20.8C8 19.3 5 16 5 12V6.5L12 3Z"
        stroke="#94A3B8"
        strokeWidth="1.55"
        strokeLinejoin="round"
        fill="rgba(148, 163, 184, 0.08)"
      />
      <path
        d="M8.5 13L12 9.5L15.5 13"
        stroke="#7DD3FC"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type SectionSymbolVariant =
  | 'schedule'
  | 'tiers'
  | 'maps'
  | 'register'
  | 'experience'
  | 'rules'
  | 'faq';

/**
 * 6. Subtle Custom Esports HUD Symbol for Section Headings
 */
export function SectionEsportsSymbol({
  variant,
  className = 'h-4 w-4',
}: {
  variant: SectionSymbolVariant;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-[#7DD3FC] drop-shadow-[0_0_6px_rgba(125,211,252,0.28)] ${className}`}
    >
      {variant === 'schedule' && (
        <>
          <polygon
            points="10,1.5 18.5,10 10,18.5 1.5,10"
            stroke="#94A3B8"
            strokeWidth="1.35"
          />
          <path
            d="M10 5.5V10L13 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {variant === 'tiers' && (
        <>
          <path
            d="M5 4H15L13.8 10.2C13.4 12.2 11.9 13.5 10 13.8C8.1 13.5 6.6 12.2 6.2 10.2L5 4Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path
            d="M10 14V16.8M7 17H13"
            stroke="#E2E8F0"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </>
      )}
      {variant === 'maps' && (
        <>
          <circle cx="10" cy="10" r="7.2" stroke="#94A3B8" strokeWidth="1.35" />
          <polygon
            points="10,5.2 12,10 10,14.8 8,10"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
        </>
      )}
      {variant === 'register' && (
        <>
          <rect
            x="2.5"
            y="2.5"
            width="15"
            height="15"
            rx="2"
            stroke="#94A3B8"
            strokeWidth="1.35"
          />
          <path
            d="M10 6.5V13.5M6.5 10H13.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}
      {variant === 'experience' && (
        <>
          <path
            d="M10 2.2L16.5 5V10.2C16.5 13.8 13.7 16.6 10 17.8C6.3 16.6 3.5 13.8 3.5 10.2V5L10 2.2Z"
            stroke="#94A3B8"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
          <path
            d="M7.4 10.2L9.3 12.1L12.8 8.2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {variant === 'rules' && (
        <>
          <polygon
            points="10,2 17,6 17,14 10,18 3,14 3,6"
            stroke="#94A3B8"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="10" r="2.2" fill="currentColor" />
        </>
      )}
      {variant === 'faq' && (
        <>
          <polygon
            points="10,2 18,10 10,18 2,10"
            stroke="#94A3B8"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="10" r="1.6" fill="currentColor" />
        </>
      )}
    </svg>
  );
}
