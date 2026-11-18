import { memo, useState } from 'react';
import { m } from 'motion/react';
import {
  BadgeCheck,
  Check,
  Clock,
  Copy,
  Headset,
  Megaphone,
  UserPlus,
  Wallet,
} from 'lucide-react';
import {
  ENTRY_TIERS,
  LOBBY_SCHEDULE,
  REGISTRATION_STEPS,
  SOCIAL_LINKS,
} from '../data/scrimConfig';
import {
  EASE_OUT_EXPO,
  HudCornerFrame,
  ParallaxSectionAura,
  SectionHeading,
  TelemetryScanBar,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';
import { TactileButton, WhatsAppPortalButton } from './PremiumButtons';

interface RegistrationFlowProps {
  selectedLobbyId: string;
  selectedTierId: string;
  onSelectLobby: (lobbyId: string) => void;
  onSelectTier: (tierId: string) => void;
}

const STEP_ICONS = [Clock, Wallet, Megaphone, Headset, UserPlus, BadgeCheck];

export const RegistrationFlow = memo(function RegistrationFlow({
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
  const inquiryMessage = `Hi Admin, we want to book a slot in VENDETTA PAID SCRIMS.\n• Lobby Time: ${selectedLobby.timeLabel} IST (${selectedLobby.sessionTitle})\n• Series: ${selectedTier.tierLabel} (Entry Fee ${selectedTier.entryDisplay} / Prize Pool ${selectedTier.prizeDisplay})\n• Squad Name: ${cleanSquad}\nPlease share available slots and registration instructions.`;

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
      className="relative overflow-hidden border-b border-slate-300/14 bg-gradient-to-b from-[#06080F] via-[#0B101D] to-[#070A13] py-16 md:py-24"
    >
      <ParallaxSectionAura position="left" tone="ruby" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-slate-300/14 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="How It Works · WhatsApp Slot Registration"
            title="Six Steps to Lock Your Squad Slot"
            symbol="register"
          />

          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.42, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="flex items-start gap-2.5 text-xs leading-[1.65] text-slate-300 lg:max-w-[44ch]"
          >
            <Megaphone
              className="mt-0.5 h-4 w-4 shrink-0 text-[#7DD3FC]"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <span>
              All slot bookings and confirmations are handled strictly by the official
              admin listed inside our WhatsApp Channel. No automated online payment
              gateway is used.
            </span>
          </m.div>
        </div>

        {/* Two-Column Split: 6 Chamfered Steps + Ruby Command Slot Inquiry Desk */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: 6 Official Steps */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {REGISTRATION_STEPS.map((item, idx) => {
              const StepIcon = STEP_ICONS[idx] ?? UserPlus;
              return (
                <m.div
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{ duration: 0.4, delay: idx * 0.05, ease: EASE_OUT_EXPO }}
                  className="surface-titanium clip-chamfer group relative flex flex-col justify-between overflow-hidden border border-slate-300/15 p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:border-slate-200/45 sm:p-6"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-[#F43F5E]/70 via-slate-200/45 to-transparent opacity-60 transition-opacity duration-200 group-hover:opacity-100"
                  />

                  <div>
                    <div className="flex items-center justify-between border-b border-slate-300/10 pb-2.5">
                      <span className="font-mono-tabular inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] text-[#FB7185] uppercase">
                        <StepIcon
                          className="h-3.5 w-3.5 text-[#7DD3FC]"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <span>{item.step}</span>
                      </span>
                      <span className="font-mono-tabular text-[11px] text-slate-400">
                        0{idx + 1}/06
                      </span>
                    </div>
                    <h3 className="mt-3.5 text-[15px] font-bold leading-snug text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.65] text-slate-300">
                      {item.detail}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </div>

          {/* Right: Interactive Slot Inquiry Helper & Coordinated WhatsApp Portal CTA */}
          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.46, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="surface-ruby-command clip-chamfer-lg group relative flex flex-col justify-between overflow-hidden border border-rose-400/35 p-6 sm:p-8 lg:col-span-5"
          >
            <TelemetryScanBar />
            <HudCornerFrame />

            <div>
              <p className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] text-[#FDA4AF] uppercase">
                <UserPlus
                  className="h-3.5 w-3.5 text-[#7DD3FC]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span>Prepare Your Admin Message</span>
              </p>
              <h3 className="font-display text-platinum-chrome mt-1 text-3xl font-extrabold tracking-[0.04em] uppercase">
                Slot Inquiry Builder
              </h3>
              <p className="mt-2 text-sm leading-[1.65] text-slate-200">
                Select your lobby timing and series below to prepare your message before
                joining our WhatsApp Channel and contacting the listed admin.
              </p>

              {/* Lobby Time Selector */}
              <div className="mt-6">
                <label className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.12em] text-slate-300 uppercase">
                  <Clock className="h-3.5 w-3.5 text-[#7DD3FC]" strokeWidth={1.75} aria-hidden="true" />
                  <span>1. Preferred Lobby Time (IST)</span>
                </label>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {LOBBY_SCHEDULE.map((slot) => {
                    const active = slot.id === selectedLobby.id;
                    return (
                      <TactileButton
                        key={slot.id}
                        onClick={() => onSelectLobby(slot.id)}
                        className={`font-mono-tabular min-h-[42px] whitespace-nowrap rounded-sm px-2 py-2 text-xs font-bold transition-colors duration-150 ${
                          active
                            ? 'btn-platinum-primary'
                            : 'border border-slate-300/20 bg-[#080C17] text-slate-200 hover:border-rose-400/60'
                        }`}
                      >
                        {slot.timeLabel}
                      </TactileButton>
                    );
                  })}
                </div>
              </div>

              {/* Series Selector */}
              <div className="mt-5">
                <label className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.12em] text-slate-300 uppercase">
                  <Wallet className="h-3.5 w-3.5 text-[#7DD3FC]" strokeWidth={1.75} aria-hidden="true" />
                  <span>2. Entry Fee & Prize Pool Series</span>
                </label>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {ENTRY_TIERS.map((tier) => {
                    const active = tier.id === selectedTier.id;
                    return (
                      <TactileButton
                        key={tier.id}
                        onClick={() => onSelectTier(tier.id)}
                        className={`flex min-h-[48px] w-full items-center justify-between rounded-sm px-3 py-2 text-xs transition-colors duration-150 ${
                          active
                            ? 'btn-platinum-primary font-bold'
                            : 'border border-slate-300/20 bg-[#080C17] text-slate-200 hover:border-rose-400/60'
                        }`}
                      >
                        <span className="flex w-full items-center justify-between gap-2">
                          <span className="text-left font-bold tracking-[0.04em] uppercase">
                            {tier.tierLabel}
                          </span>
                          <span
                            className={`font-mono-tabular shrink-0 font-bold ${
                              active ? 'text-[#BE123C]' : 'text-[#FDA4AF]'
                            }`}
                          >
                            {tier.entryDisplay}/{tier.prizeDisplay}
                          </span>
                        </span>
                      </TactileButton>
                    );
                  })}
                </div>
              </div>

              {/* Squad Name Input */}
              <div className="mt-5">
                <label
                  htmlFor="squad-name-input"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.12em] text-slate-300 uppercase"
                >
                  <UserPlus className="h-3.5 w-3.5 text-[#7DD3FC]" strokeWidth={1.75} aria-hidden="true" />
                  <span>3. Squad Name (Optional)</span>
                </label>
                <input
                  id="squad-name-input"
                  type="text"
                  value={squadName}
                  onChange={(e) => setSquadName(e.target.value)}
                  placeholder="Enter your squad / guild name"
                  maxLength={40}
                  className="mt-2 min-h-[44px] w-full rounded-sm border border-slate-300/22 bg-[#070A13] px-3.5 py-2.5 text-sm text-white placeholder-slate-500 transition-colors focus:border-[#F43F5E] focus:outline-none"
                />
              </div>

              {/* Preview Box */}
              <div className="mt-5 rounded-sm border border-slate-300/15 bg-[#060912]/95 p-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold tracking-[0.1em] text-[#FDA4AF] uppercase">
                    Ready-to-Send Message Preview
                  </span>
                  <TactileButton
                    onClick={handleCopyInquiry}
                    className="btn-titanium-outline inline-flex min-h-[32px] items-center gap-1.5 rounded-sm px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-[#4ADE80]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 text-slate-300" aria-hidden="true" />
                        <span>Copy Text</span>
                      </>
                    )}
                  </TactileButton>
                </div>
                <pre className="mt-2 whitespace-pre-wrap font-sans text-xs leading-relaxed text-slate-200">
                  {inquiryMessage}
                </pre>
              </div>
            </div>

            {/* Primary WhatsApp Channel Registration Portal CTA */}
            <div className="mt-6 border-t border-slate-300/15 pt-5">
              <WhatsAppPortalButton
                href={SOCIAL_LINKS.whatsappChannel.url}
                label={SOCIAL_LINKS.whatsappChannel.ctaRegister}
                size="full"
              />
              <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-xs leading-relaxed text-slate-300">
                <Headset
                  className="h-3.5 w-3.5 shrink-0 text-[#7DD3FC]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span>
                  Opens our official WhatsApp Channel. Contact the admin number listed
                  inside the channel to confirm slot availability.
                </span>
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
});

export default RegistrationFlow;
