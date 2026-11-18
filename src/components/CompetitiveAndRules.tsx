import { memo, useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import { Headset, Layers, ShieldCheck, Trophy } from 'lucide-react';
import { COMPETITIVE_PILLARS, RULES_CATEGORIES } from '../data/scrimConfig';
import { BattleShieldEmblem } from './EsportsEmblems';
import {
  EASE_OUT_EXPO,
  SectionHeading,
  TelemetryScanBar,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';
import { TactileButton } from './PremiumButtons';

const PILLAR_ICONS: Record<string, typeof ShieldCheck> = {
  'fair-competition': ShieldCheck,
  'organised-matches': Layers,
  'pro-management': Headset,
  'transparent-prizes': Trophy,
};

const RULE_TAB_ICONS: Record<string, typeof Trophy> = {
  'tournament-rules': Trophy,
  'fair-play': ShieldCheck,
  'match-conduct': Headset,
};

export const CompetitiveAndRules = memo(function CompetitiveAndRules() {
  const [activeRuleId, setActiveRuleId] = useState<string>(RULES_CATEGORIES[0].id);
  const activeGroup =
    RULES_CATEGORIES.find((group) => group.id === activeRuleId) ?? RULES_CATEGORIES[0];

  return (
    <>
      {/* Competitive Experience Section */}
      <section
        id="experience"
        className="relative overflow-hidden border-b border-slate-300/14 bg-gradient-to-b from-[#0A0E19] via-[#0E1424] to-[#080B14] py-16 md:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Editorial Summary + Animated Battle Shield Emblem */}
            <div className="lg:col-span-5">
              <div className="flex items-start gap-4">
                <m.div
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                  className="mt-0.5 shrink-0"
                >
                  <BattleShieldEmblem className="h-12 w-12" />
                </m.div>
                <SectionHeading
                  eyebrow="Competitive Experience"
                  title="Built Like an Official Circuit"
                  symbol="experience"
                />
              </div>

              <m.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.42, delay: 0.1, ease: EASE_OUT_EXPO }}
                className="mt-4 text-sm leading-[1.75] text-slate-300 sm:text-[15px]"
              >
                Serious Free Fire rosters in India demand punctual custom rooms,
                uncompromising anti-cheat enforcement, and disciplined administration.
                Every VENDETTA session delivers championship-caliber practice.
              </m.p>

              <m.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.42, delay: 0.16, ease: EASE_OUT_EXPO }}
                className="mt-8 border-t border-slate-300/14 pt-6"
              >
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-100">
                  <ShieldCheck
                    className="h-5 w-5 shrink-0 text-[#7DD3FC]"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span>Verified Squad Lobbies · Indian Competitive Standards</span>
                </div>
              </m.div>
            </div>

            {/* Right Asymmetric 2x2 Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
              {COMPETITIVE_PILLARS.map((pillar, idx) => {
                const PillarIcon = PILLAR_ICONS[pillar.id] ?? ShieldCheck;
                return (
                  <m.article
                    key={pillar.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_CONFIG}
                    transition={{ duration: 0.42, delay: idx * 0.06, ease: EASE_OUT_EXPO }}
                    className="surface-titanium clip-chamfer group relative flex flex-col justify-between overflow-hidden border border-slate-300/16 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-slate-200/45"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] origin-left scale-x-0 bg-gradient-to-r from-[#F43F5E] via-white to-transparent transition-transform duration-300 group-hover:scale-x-100"
                    />
                    <div>
                      <div className="flex items-center justify-between border-b border-slate-300/12 pb-3 text-xs">
                        <span className="font-mono-tabular inline-flex items-center gap-1.5 font-bold tracking-[0.14em] text-[#FB7185]">
                          <PillarIcon
                            className="h-3.5 w-3.5 text-[#7DD3FC]"
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                          <span>{pillar.index}</span>
                        </span>
                        <span className="text-[11px] font-semibold tracking-wider text-slate-300 uppercase">
                          {pillar.metric}
                        </span>
                      </div>
                      <h3 className="mt-4 text-base font-bold leading-snug text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-[1.65] text-slate-300">
                        {pillar.description}
                      </p>
                    </div>
                  </m.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Fair Play Section */}
      <section
        id="rules"
        className="border-b border-slate-300/14 bg-gradient-to-b from-[#06080F] to-[#0B101D] py-16 md:py-24"
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 border-b border-slate-300/14 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Rules & Fair Play"
              title="Arena Integrity & Match Conduct"
              symbol="rules"
            />

            {/* Functional Tab Selector */}
            <div
              role="tablist"
              aria-label="Rulebook categories"
              className="flex flex-wrap gap-2"
            >
              {RULES_CATEGORIES.map((group) => {
                const active = group.id === activeGroup.id;
                const TabIcon = RULE_TAB_ICONS[group.id] ?? ShieldCheck;
                return (
                  <div key={group.id} className="relative">
                    <TactileButton
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveRuleId(group.id)}
                      className={`clip-chamfer min-h-[42px] whitespace-nowrap px-4 py-2 text-xs font-bold tracking-[0.08em] uppercase transition-colors duration-150 ${
                        active
                          ? 'btn-ruby-primary'
                          : 'btn-titanium-outline text-slate-300 hover:text-white'
                      }`}
                    >
                      <TabIcon
                        className={`h-3.5 w-3.5 ${active ? 'text-white' : 'text-[#7DD3FC]'}`}
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <span>{group.title}</span>
                    </TactileButton>
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute right-3 -bottom-1 left-3 h-[2px] origin-center bg-[#FDA4AF] transition-transform duration-200 ${
                        active ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Rules Panel */}
          <m.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.44, ease: EASE_OUT_EXPO }}
            role="tabpanel"
            aria-label={activeGroup.title}
            className="surface-ruby-command clip-chamfer-lg relative mt-8 overflow-hidden border border-rose-400/25 p-6 sm:p-8"
          >
            <TelemetryScanBar />
            <AnimatePresence mode="wait">
              <m.div
                key={activeGroup.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
              >
                <div className="border-b border-slate-300/14 pb-5">
                  <h3 className="font-display text-3xl font-extrabold tracking-[0.04em] text-white uppercase">
                    {activeGroup.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-300">{activeGroup.summary}</p>
                </div>

                <ol className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                  {activeGroup.rules.map((ruleText, idx) => (
                    <li
                      key={`${activeGroup.id}-${idx}`}
                      className="flex items-start gap-4 border-b border-slate-300/10 pb-4 md:border-b-0 md:pb-0"
                    >
                      <span className="font-mono-tabular mt-0.5 shrink-0 text-xs font-bold tracking-widest text-[#FB7185]">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <p className="text-sm leading-[1.7] text-slate-200">{ruleText}</p>
                    </li>
                  ))}
                </ol>
              </m.div>
            </AnimatePresence>
          </m.div>
        </div>
      </section>
    </>
  );
});

export default CompetitiveAndRules;
