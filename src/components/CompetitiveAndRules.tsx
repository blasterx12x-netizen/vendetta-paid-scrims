import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { COMPETITIVE_PILLARS, RULES_CATEGORIES } from '../data/scrimConfig';

export function CompetitiveAndRules() {
  const [activeRuleId, setActiveRuleId] = useState<string>(RULES_CATEGORIES[0].id);
  const activeGroup =
    RULES_CATEGORIES.find((group) => group.id === activeRuleId) ?? RULES_CATEGORIES[0];

  return (
    <>
      {/* Competitive Experience Section */}
      <section
        id="experience"
        className="relative border-b border-[#DFBA82]/20 bg-gradient-to-b from-[#171123] via-[#1C1329] to-[#140E1E] py-16 md:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFBA82]/45 to-transparent"
        />

        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Editorial Summary */}
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#DFBA82] uppercase">
                Competitive Experience
              </p>
              <h2
                className="font-display mt-2 text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-none tracking-tight text-[#FAF4EB] uppercase"
                style={{ textWrap: 'balance' }}
              >
                Built Like an Official Circuit
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#C8BECF] sm:text-base">
                Serious Free Fire rosters in India need consistent lobbies, zero tolerance
                for unfair play, and clear administrative execution. Every VENDETTA
                session is structured to deliver tournament-grade practice.
              </p>

              <div className="mt-8 border-t border-[#DFBA82]/18 pt-6">
                <div className="flex items-center gap-3 text-sm font-medium text-[#F4D8A8]">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#E8859A]" aria-hidden="true" />
                  <span>Verified Squad Lobbies · Indian Competitive Standards</span>
                </div>
              </div>
            </div>

            {/* Right Asymmetric 2x2 Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
              {COMPETITIVE_PILLARS.map((pillar) => (
                <article
                  key={pillar.id}
                  className="card-plum-glass flex flex-col justify-between rounded-sm border border-[#DFBA82]/18 p-6 transition-colors duration-150 hover:border-[#DFBA82]/45"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-[#DFBA82]/14 pb-3 text-xs">
                      <span className="font-mono-tabular font-semibold tracking-[0.14em] text-[#F4D8A8]">
                        {pillar.index}
                      </span>
                      <span className="font-medium tracking-wider text-[#E8859A] uppercase">
                        {pillar.metric}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold leading-snug text-[#FAF4EB]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#C8BECF]">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Fair Play Section */}
      <section
        id="rules"
        className="border-b border-[#DFBA82]/20 bg-gradient-to-b from-[#110C1A] to-[#170E1A] py-16 md:py-24"
      >
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 border-b border-[#DFBA82]/16 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#DFBA82] uppercase">
                Rules & Fair Play
              </p>
              <h2
                className="font-display mt-2 text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-none tracking-tight text-[#FAF4EB] uppercase"
                style={{ textWrap: 'balance' }}
              >
                Arena Integrity & Match Conduct
              </h2>
            </div>

            {/* Functional Tab Selector */}
            <div
              role="tablist"
              aria-label="Rulebook categories"
              className="flex flex-wrap gap-2"
            >
              {RULES_CATEGORIES.map((group) => {
                const active = group.id === activeGroup.id;
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveRuleId(group.id)}
                    className={`min-h-[40px] whitespace-nowrap rounded-sm px-4 py-2 text-xs font-bold tracking-[0.06em] uppercase transition-all duration-150 ${
                      active
                        ? 'btn-gold-luxury'
                        : 'btn-plum-outline text-[#D4CBDA] hover:text-[#FAF4EB]'
                    }`}
                  >
                    {group.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Rules Panel */}
          <div
            role="tabpanel"
            aria-label={activeGroup.title}
            className="card-garnet-velvet mt-8 rounded-sm border border-[#DFBA82]/28 p-6 sm:p-8"
          >
            <div className="border-b border-[#DFBA82]/16 pb-5">
              <h3 className="font-display text-2xl font-bold tracking-wide text-[#F4D8A8] uppercase">
                {activeGroup.title}
              </h3>
              <p className="mt-1.5 text-sm text-[#D4CBDA]">{activeGroup.summary}</p>
            </div>

            <ol className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              {activeGroup.rules.map((ruleText, idx) => (
                <li
                  key={`${activeGroup.id}-${idx}`}
                  className="flex items-start gap-4 border-b border-[#DFBA82]/10 pb-4 md:border-b-0 md:pb-0"
                >
                  <span className="font-mono-tabular mt-0.5 shrink-0 text-xs font-bold tracking-widest text-[#F4D8A8]">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <p className="text-sm leading-relaxed text-[#EFEAE2]">{ruleText}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
