import { ArrowRight, Check } from 'lucide-react';
import { ENTRY_TIERS, type TierConfig } from '../data/scrimConfig';

interface PrizeTiersProps {
  selectedTierId: string;
  onSelectTier: (tierId: string) => void;
}

const TIER_STYLES: Record<
  TierConfig['accentTone'],
  { surface: string; prizeColor: string; divider: string }
> = {
  steel: {
    surface: 'border-white/12 bg-gradient-to-b from-[#16181E] to-[#0D0E12]',
    prizeColor: 'text-[#F4F1EC]',
    divider: 'border-white/10',
  },
  crimson: {
    surface: 'border-[#991B1B]/50 bg-gradient-to-b from-[#1A1316] to-[#0D0E12]',
    prizeColor: 'text-[#F4F1EC]',
    divider: 'border-[#991B1B]/30',
  },
  blood: {
    surface: 'border-[#B91C1C]/65 bg-gradient-to-b from-[#201215] to-[#0D0E12]',
    prizeColor: 'text-[#FCA5A5]',
    divider: 'border-[#B91C1C]/40',
  },
  obsidian: {
    surface: 'border-[#DC2626] bg-gradient-to-b from-[#2A1114] via-[#150C0E] to-[#0B0B0E]',
    prizeColor: 'text-[#F87171]',
    divider: 'border-[#DC2626]/40',
  },
};

export function PrizeTiers({ selectedTierId, onSelectTier }: PrizeTiersProps) {
  return (
    <section
      id="tiers"
      className="border-b border-white/10 bg-[#070709] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#DC2626] uppercase">
              Entry Fees & Prize Pools
            </p>
            <h2
              className="font-display mt-2 text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-none tracking-tight text-[#F4F1EC] uppercase"
              style={{ textWrap: 'balance' }}
            >
              Four Competitive Lobby Tiers
            </h2>
          </div>
          <p className="max-w-[46ch] text-sm leading-relaxed text-[#A9A59E]">
            Fixed entry fees and transparent prize pools across every daily lobby timing.
            Pick the bracket suited to your squad roster.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ENTRY_TIERS.map((tier) => {
            const isSelected = selectedTierId === tier.id;
            const style = TIER_STYLES[tier.accentTone];

            return (
              <article
                key={tier.id}
                className={`flex flex-col justify-between rounded-sm border p-6 transition-transform duration-150 hover:-translate-y-0.5 ${
                  style.surface
                } ${isSelected ? 'ring-1 ring-[#DC2626]' : ''}`}
              >
                <div>
                  {/* Tier Header */}
                  <div className={`flex items-center justify-between border-b pb-3 ${style.divider}`}>
                    <span className="font-mono-tabular text-xs font-semibold tracking-[0.12em] text-[#DC2626] uppercase">
                      {tier.tierLabel}
                    </span>
                    <span className="text-xs font-medium text-[#A9A59E]">
                      {tier.tierName}
                    </span>
                  </div>

                  {/* Prominent Prize Pool Highlight */}
                  <div className="mt-6">
                    <p className="text-xs font-medium tracking-[0.12em] text-[#8D8880] uppercase">
                      Prize Pool
                    </p>
                    <p
                      className={`font-display mt-1 text-5xl font-extrabold leading-none tracking-tight tabular-nums ${style.prizeColor}`}
                    >
                      {tier.prizeDisplay}
                    </p>
                  </div>

                  {/* Entry Fee Row */}
                  <div className={`mt-5 flex items-baseline justify-between border-y py-3 ${style.divider}`}>
                    <span className="text-xs font-medium tracking-[0.1em] text-[#A9A59E] uppercase">
                      Entry Fee
                    </span>
                    <span className="font-mono-tabular text-xl font-bold text-[#F4F1EC]">
                      {tier.entryDisplay}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#A9A59E]">
                    {tier.summary}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectTier(tier.id);
                      const el = document.getElementById('register');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex min-h-[44px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-sm border px-4 py-2.5 text-xs font-semibold tracking-[0.08em] uppercase transition-colors duration-150 ${
                      isSelected
                        ? 'border-[#EF4444]/60 bg-[#B91C1C] text-white hover:bg-[#DC2626]'
                        : 'border-white/15 bg-[#121318] text-[#F4F1EC] hover:border-[#DC2626]/60 hover:bg-[#1A1C23]'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Selected · Register Tier</span>
                      </>
                    ) : (
                      <>
                        <span>Choose {tier.entryDisplay} Tier</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
