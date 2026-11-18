import { memo } from 'react';
import { m } from 'motion/react';
import { ArrowRight, Check, Trophy, Wallet } from 'lucide-react';
import { ENTRY_TIERS, type TierConfig } from '../data/scrimConfig';
import { ChampionshipTrophyEmblem, SeriesRankInsignia } from './EsportsEmblems';
import {
  AnimatedCounter,
  EASE_OUT_EXPO,
  HudCornerFrame,
  ParallaxSectionAura,
  SectionHeading,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';
import { TactileButton } from './PremiumButtons';

interface PrizeTiersProps {
  selectedTierId: string;
  onSelectTier: (tierId: string) => void;
}

const TIER_STYLES: Record<
  TierConfig['accentTone'],
  {
    surface: string;
    prizeClass: string;
    divider: string;
    seriesTitleClass: string;
    divisionText: string;
    topBar: string;
  }
> = {
  steel: {
    surface:
      'border-slate-400/25 bg-gradient-to-b from-[#131B2E] via-[#0D1322] to-[#080B14] hover:border-slate-300/55',
    prizeClass: 'text-platinum-chrome',
    divider: 'border-slate-400/18',
    seriesTitleClass: 'text-platinum-chrome',
    divisionText: 'text-slate-400',
    topBar: 'from-slate-400/50 via-slate-200/85 to-slate-400/50',
  },
  crimson: {
    surface:
      'border-indigo-300/25 bg-gradient-to-b from-[#171E36] via-[#101528] to-[#080B14] hover:border-indigo-200/55',
    prizeClass: 'text-platinum-chrome',
    divider: 'border-indigo-300/18',
    seriesTitleClass: 'text-indigo-100',
    divisionText: 'text-indigo-200/75',
    topBar: 'from-indigo-400/50 via-slate-100/85 to-indigo-400/50',
  },
  blood: {
    surface:
      'border-rose-500/40 bg-gradient-to-b from-[#2A1020] via-[#170D19] to-[#0A0C16] hover:border-rose-400/80',
    prizeClass: 'text-ruby-luminous',
    divider: 'border-rose-400/24',
    seriesTitleClass: 'text-rose-200',
    divisionText: 'text-rose-300/80',
    topBar: 'from-rose-600 via-rose-300 to-rose-600',
  },
  obsidian: {
    surface:
      'border-rose-400/65 bg-[linear-gradient(155deg,rgba(225,29,72,0.28)_0%,rgba(24,29,48,0.92)_48%,rgba(7,10,19,0.98)_100%)] shadow-[0_20px_50px_rgba(225,29,72,0.18)] hover:border-white/80',
    prizeClass: 'text-platinum-chrome',
    divider: 'border-rose-300/28',
    seriesTitleClass: 'text-white',
    divisionText: 'text-rose-300',
    topBar: 'from-[#F43F5E] via-white to-[#F43F5E]',
  },
};

export const PrizeTiers = memo(function PrizeTiers({
  selectedTierId,
  onSelectTier,
}: PrizeTiersProps) {
  return (
    <section
      id="tiers"
      className="relative overflow-hidden border-b border-slate-300/14 bg-gradient-to-b from-[#06080F] via-[#0B0F1C] to-[#070A13] py-16 md:py-24"
    >
      <ParallaxSectionAura position="right" tone="ruby" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 border-b border-slate-300/14 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="flex items-start gap-4">
            <m.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
              className="mt-1 hidden sm:inline-flex"
            >
              <ChampionshipTrophyEmblem className="h-14 w-14" />
            </m.div>
            <SectionHeading
              eyebrow="Entry Fees & Prize Pools"
              title="Four Competitive Scrim Series"
              symbol="tiers"
            />
          </div>

          <m.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.42, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="max-w-[46ch] text-sm leading-[1.7] text-slate-300"
          >
            Fixed entry fees and guaranteed prize pools across every daily deployment window.
            Select the competitive series built for your squad.
          </m.p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ENTRY_TIERS.map((tier, index) => {
            const isSelected = selectedTierId === tier.id;
            const style = TIER_STYLES[tier.accentTone];
            const isFlagship = tier.accentTone === 'obsidian';

            return (
              <m.article
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.46, delay: index * 0.06, ease: EASE_OUT_EXPO }}
                className={`clip-chamfer group relative flex flex-col justify-between overflow-hidden border p-6 transition-transform duration-200 hover:-translate-y-1.5 ${
                  style.surface
                } ${isSelected ? 'ring-2 ring-[#F43F5E]' : ''}`}
              >
                {/* Animated Top Metallic Bar */}
                <m.div
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.48, delay: 0.1 + index * 0.06, ease: EASE_OUT_EXPO }}
                  className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r ${style.topBar}`}
                />

                {isFlagship && <HudCornerFrame />}

                <div>
                  {/* Integrated Premium Series Header + Geometric Rank Insignia */}
                  <div className={`border-b pb-3.5 ${style.divider}`}>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-mono-tabular text-[10px] font-bold tracking-[0.18em] uppercase ${style.divisionText}`}
                      >
                        {tier.tierName}
                      </span>
                      <SeriesRankInsignia seriesId={tier.id} className="h-5 w-5" />
                    </div>
                    <h3
                      className={`font-display mt-1 text-2xl font-black tracking-[0.06em] uppercase ${style.seriesTitleClass}`}
                    >
                      {tier.tierLabel}
                    </h3>
                  </div>

                  {/* Prominent Animated Prize Pool Counter */}
                  <div className="mt-5">
                    <p className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] text-slate-400 uppercase">
                      <Trophy
                        className="h-3.5 w-3.5 text-[#7DD3FC]"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <span>Prize Pool</span>
                    </p>
                    <p
                      className={`font-display mt-1.5 text-[3.75rem] font-black leading-none tracking-[0.01em] tabular-nums ${style.prizeClass}`}
                    >
                      <AnimatedCounter
                        target={tier.prizePool}
                        prefix="₹"
                        duration={0.9 + index * 0.08}
                      />
                    </p>
                  </div>

                  {/* Entry Fee Row */}
                  <div className={`mt-5 flex items-baseline justify-between border-y py-3.5 ${style.divider}`}>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.12em] text-slate-300 uppercase">
                      <Wallet
                        className="h-3.5 w-3.5 text-[#7DD3FC]"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <span>Entry Fee</span>
                    </span>
                    <span className="font-mono-tabular text-xl font-bold text-white">
                      {tier.entryDisplay}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-[1.65] text-slate-300">
                    {tier.summary}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <TactileButton
                    onClick={() => {
                      onSelectTier(tier.id);
                      const el = document.getElementById('register');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`clip-chamfer flex min-h-[44px] w-full items-center justify-center gap-2 whitespace-nowrap px-4 py-2.5 text-xs font-bold tracking-[0.09em] uppercase transition-colors duration-200 ${
                      isSelected
                        ? 'btn-ruby-primary'
                        : isFlagship
                          ? 'btn-platinum-primary'
                          : 'btn-titanium-outline'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Selected · Register</span>
                      </>
                    ) : (
                      <>
                        <span>Select {tier.entryDisplay} Entry</span>
                        <ArrowRight
                          className={`h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 ${
                            isFlagship ? 'text-[#E11D48]' : 'text-[#FB7185]'
                          }`}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </TactileButton>
                </div>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
});
