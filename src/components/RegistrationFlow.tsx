import { useState } from 'react';
import { ArrowUpRight, Check, Copy, MessageCircle, ShieldAlert } from 'lucide-react';
import {
  ENTRY_TIERS,
  LOBBY_SCHEDULE,
  REGISTRATION_STEPS,
  SOCIAL_LINKS,
} from '../data/scrimConfig';

interface RegistrationFlowProps {
  selectedLobbyId: string;
  selectedTierId: string;
  onSelectLobby: (lobbyId: string) => void;
  onSelectTier: (tierId: string) => void;
}

export function RegistrationFlow({
  selectedLobbyId,
  selectedTierId,
  onSelectLobby,
  onSelectTier,
}: RegistrationFlowProps) {
  const [squadName, setSquadName] = useState('');
  const [copied, setCopied] = useState(false);

  const selectedLobby =
    LOBBY_SCHEDULE.find((l) => l.id === selectedLobbyId) ?? LOBBY_SCHEDULE[0];
  const selectedTier =
    ENTRY_TIERS.find((t) => t.id === selectedTierId) ?? ENTRY_TIERS[0];

  const cleanSquad = squadName.trim() || '[Your Squad Name]';
  const inquiryMessage = `Hi Admin, we want to book a slot in VENDETTA PAID SCRIMS.\n• Lobby Time: ${selectedLobby.timeLabel} IST (${selectedLobby.sessionTitle})\n• Tier: ${selectedTier.tierLabel} (Entry Fee ${selectedTier.entryDisplay} / Prize Pool ${selectedTier.prizeDisplay})\n• Squad Name: ${cleanSquad}\nPlease share available slots and registration instructions.`;

  const handleCopyInquiry = async () => {
    try {
      await navigator.clipboard.writeText(inquiryMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="register"
      className="relative border-b border-[#DFBA82]/20 bg-gradient-to-b from-[#120B1B] via-[#180C18] to-[#0E0B16] py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(146,20,48,0.18)_0%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-[#DFBA82]/18 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#DFBA82] uppercase">
              How It Works · WhatsApp Slot Registration
            </p>
            <h2
              className="font-display mt-2 text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-none tracking-tight text-[#FAF4EB] uppercase"
              style={{ textWrap: 'balance' }}
            >
              Six Steps to Lock Your Squad Slot
            </h2>
          </div>

          <div className="flex items-start gap-2.5 text-xs leading-relaxed text-[#C8BECF] lg:max-w-[44ch]">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#F4D8A8]" aria-hidden="true" />
            <span>
              All slot bookings and confirmations are handled strictly by the official
              admin listed inside our WhatsApp Channel. No automated online payment
              gateway is used.
            </span>
          </div>
        </div>

        {/* Two-Column Split: 6 Steps + Interactive WhatsApp Inquiry Builder */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: 6 Official Steps */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {REGISTRATION_STEPS.map((item) => (
              <div
                key={item.step}
                className="card-plum-glass flex flex-col justify-between rounded-sm border border-[#DFBA82]/18 p-5 transition-colors duration-150 hover:border-[#DFBA82]/42"
              >
                <div>
                  <span className="font-mono-tabular text-xs font-semibold tracking-[0.14em] text-[#F4D8A8] uppercase">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-[#FAF4EB]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#C8BECF]">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Interactive Slot Inquiry Helper & Official WhatsApp CTA */}
          <div className="card-garnet-velvet flex flex-col justify-between rounded-sm border border-[#DFBA82]/38 p-6 sm:p-7 lg:col-span-5">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-[#F4D8A8] uppercase">
                Prepare Your Admin Message
              </p>
              <h3 className="font-display mt-1.5 text-2xl font-bold tracking-wide text-[#FAF4EB] uppercase">
                Slot Inquiry Builder
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#D4CBDA]">
                Select your lobby timing and tier below to prepare your message before
                joining our WhatsApp Channel and contacting the listed admin.
              </p>

              {/* Lobby Time Selector */}
              <div className="mt-6">
                <label className="block text-xs font-medium tracking-[0.1em] text-[#DFBA82] uppercase">
                  1. Preferred Lobby Time (IST)
                </label>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {LOBBY_SCHEDULE.map((slot) => {
                    const active = slot.id === selectedLobby.id;
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => onSelectLobby(slot.id)}
                        className={`font-mono-tabular min-h-[40px] whitespace-nowrap rounded-sm px-2 py-2 text-xs font-bold transition-all ${
                          active
                            ? 'btn-gold-luxury'
                            : 'border border-[#DFBA82]/22 bg-[#160F22] text-[#FAF4EB] hover:border-[#DFBA82]/50'
                        }`}
                      >
                        {slot.timeLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tier Selector */}
              <div className="mt-5">
                <label className="block text-xs font-medium tracking-[0.1em] text-[#DFBA82] uppercase">
                  2. Entry Fee & Prize Pool Tier
                </label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {ENTRY_TIERS.map((tier) => {
                    const active = tier.id === selectedTier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => onSelectTier(tier.id)}
                        className={`flex min-h-[44px] items-center justify-between rounded-sm px-3 py-2 text-xs transition-all ${
                          active
                            ? 'btn-gold-luxury font-bold'
                            : 'border border-[#DFBA82]/22 bg-[#160F22] text-[#FAF4EB] hover:border-[#DFBA82]/50'
                        }`}
                      >
                        <span className="font-semibold uppercase">
                          {tier.tierLabel.replace('LOBBY ', '')}
                        </span>
                        <span
                          className={`font-mono-tabular font-bold ${
                            active ? 'text-[#18090F]' : 'text-[#F4D8A8]'
                          }`}
                        >
                          {tier.entryDisplay} / {tier.prizeDisplay}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Squad Name Input */}
              <div className="mt-5">
                <label
                  htmlFor="squad-name-input"
                  className="block text-xs font-medium tracking-[0.1em] text-[#DFBA82] uppercase"
                >
                  3. Squad Name (Optional)
                </label>
                <input
                  id="squad-name-input"
                  type="text"
                  value={squadName}
                  onChange={(e) => setSquadName(e.target.value)}
                  placeholder="Enter your squad / guild name"
                  maxLength={40}
                  className="mt-2 min-h-[44px] w-full rounded-sm border border-[#DFBA82]/25 bg-[#120B1B] px-3.5 py-2.5 text-sm text-[#FAF4EB] placeholder-[#8E839B] focus:border-[#F4D8A8] focus:outline-none"
                />
              </div>

              {/* Preview Box */}
              <div className="mt-5 rounded-sm border border-[#DFBA82]/20 bg-[#120B1B]/95 p-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-medium tracking-[0.1em] text-[#DFBA82] uppercase">
                    Ready-to-Send Message Preview
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyInquiry}
                    className="btn-plum-outline inline-flex min-h-[32px] items-center gap-1.5 rounded-sm px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-[#4ADE80]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 text-[#F4D8A8]" aria-hidden="true" />
                        <span>Copy Text</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="mt-2 whitespace-pre-wrap font-sans text-xs leading-relaxed text-[#E4DCE9]">
                  {inquiryMessage}
                </pre>
              </div>
            </div>

            {/* Primary WhatsApp Channel Registration CTA */}
            <div className="mt-6 border-t border-[#DFBA82]/20 pt-5">
              <a
                href={SOCIAL_LINKS.whatsappChannel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-luxury flex min-h-[50px] w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-sm px-6 py-3 text-sm font-extrabold tracking-[0.08em] uppercase transition-all duration-150"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>{SOCIAL_LINKS.whatsappChannel.ctaRegister}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-2.5 text-center text-xs text-[#D4CBDA]">
                Opens our official WhatsApp Channel. Contact the admin number listed inside
                the channel to confirm slot availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
