import { ArrowRight, Check } from 'lucide-react';
import { ENTRY_TIERS, type TierConfig } from '../data/scrimConfig';

interface PrizeTiersProps {
  selectedTierId: string;
  onSelectTier: (tierId: string) => void;
}

const TIER_STYLES: Record<
  TierConfig['accentTone'],
  { surface: string; prizeClass: string; divider: string; badgeText: string; divisionText: string }
> = {
  steel: {
    surface:
      'border-[#8FA3C7]/35 bg-gradient-to-b from-[#1A2136] via-[#131828] to-[#0D101B] hover:border-[#B5C6E4]/65',
    prizeClass: 'text-[#EEF3FC]',
    divider: 'border-[#8FA3C7]/20',
    badgeText: 'text-[#B5C6E4]',
    divisionText: 'text-[#9FB0CE]',
  },
  crimson: {
    surface:
      'border-[#B08AC9]/38 bg-gradient-to-b from-[#261938] via-[#1A1228] to-[#110C1B] hover:border-[#D2B4E8]/65',
    prizeClass: 'text-[#F3E8FA]',
    divider: 'border-[#B08AC9]/22',
    badgeText: 'text-[#D7BCEB]',
    divisionText: 'text-[#BA9FD0]',
  },
  blood: {
    surface:
      'border-[#D95C76]/50 bg-gradient-to-b from-[#451123] via-[#2A0D19] to-[#160911] hover:border-[#F07C95]/80',
    prizeClass: 'text-garnet-metallic',
    divider: 'border-[#D95C76]/26',
    badgeText: 'text-[#F7A3B2]',
    divisionText: 'text-[#DFA0AE]',
  },
  obsidian: {
    surface:
      'border-[#DFBA82]/65 bg-[linear-gradient(150deg,rgba(146,20,48,0.48)_0%,rgba(66,42,20,0.68)_46%,rgba(22,12,24,0.96)_100%)] shadow-[0_20px_50px_rgba(146,20,48,0.28)] hover:border-[#F4D8A8]',
    prizeClass: 'text-gold-metallic',
    divider: 'border-[#DFBA82]/30',
    badgeText: 'text-[#F4D8A8]',
    divisionText: 'text-[#DFBA82]',
  },
};

export function PrizeTiers({ selectedTierId, onSelectTier }: PrizeTiersProps) {
  return (
    <section
      id="tiers"
      className="relative border-b border-[#DFBA82]/20 bg-gradient-to-b from-[#110C1A] via-[#1B0D19] to-[#140D1E] py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 h-[440px] w-[440px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(223,186,130,0.12)_0%,rgba(146,20,48,0.16)_45%,transparent_72%)]"
      />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-[#DFBA82]/18 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#DFBA82] uppercase">
              Entry Fees & Prize Pools
            </p>
            <h2
              className="font-display mt-2 text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-none tracking-tight text-[#FAF4EB] uppercase"
              style={{ textWrap: 'balance' }}
            >
              Four Competitive Lobby Tiers
            </h2>
          </div>
          <p className="max-w-[46ch] text-sm leading-relaxed text-[#C8BECF]">
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
                className={`flex flex-col justify-between rounded-sm border p-6 transition-all duration-150 hover:-translate-y-0.5 ${
                  style.surface
                } ${isSelected ? 'ring-2 ring-[#F4D8A8]' : ''}`}
              >
                <div>
                  {/* Tier Header */}
                  <div className={`flex items-center justify-between border-b pb-3 ${style.divider}`}>
                    <span className={`font-mono-tabular text-xs font-semibold tracking-[0.12em] uppercase ${style.badgeText}`}>
                      {tier.tierLabel}
                    </span>
                    <span className={`text-xs font-medium ${style.divisionText}`}>
                      {tier.tierName}
                    </span>
                  </div>

                  {/* Prominent Prize Pool Highlight */}
                  <div className="mt-6">
                    <p className="text-xs font-medium tracking-[0.12em] text-[#B8AEC2] uppercase">
                      Prize Pool
                    </p>
                    <p
                      className={`font-display mt-1 text-5xl font-extrabold leading-none tracking-tight tabular-nums ${style.prizeClass}`}
                    >
                      {tier.prizeDisplay}
                    </p>
                  </div>

                  {/* Entry Fee Row */}
                  <div className={`mt-5 flex items-baseline justify-between border-y py-3 ${style.divider}`}>
                    <span className="text-xs font-medium tracking-[0.1em] text-[#D4CBDA] uppercase">
                      Entry Fee
                    </span>
                    <span className="font-mono-tabular text-xl font-bold text-[#FAF4EB]">
                      {tier.entryDisplay}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#D4CBDA]">
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
                    className={`flex min-h-[44px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-sm px-4 py-2.5 text-xs font-bold tracking-[0.08em] uppercase transition-all duration-150 ${
                      isSelected
                        ? 'btn-gold-luxury'
                        : 'btn-plum-outline'
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
                        <ArrowRight className="h-3.5 w-3.5 text-[#DFBA82]" aria-hidden="true" />
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
