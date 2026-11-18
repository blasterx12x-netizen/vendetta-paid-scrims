import { memo, useEffect, useState } from 'react';
import { m } from 'motion/react';
import { Clock, Check, ArrowRight, Megaphone, Wallet, Headset } from 'lucide-react';
import {
  COUNTDOWN_CONFIG,
  ENTRY_TIERS,
  LOBBY_SCHEDULE,
  type LobbySlotConfig,
} from '../data/scrimConfig';
import {
  EASE_OUT_EXPO,
  ParallaxSectionAura,
  SectionHeading,
  TelemetryScanBar,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';
import { TactileButton } from './PremiumButtons';

interface LobbyScheduleProps {
  selectedLobbyId: string;
  onSelectLobby: (lobbyId: string) => void;
}

interface NextLobbyCountdown {
  targetLabel: string;
  sessionTitle: string;
  hours: string;
  minutes: string;
  seconds: string;
  dateLabel: string;
}

function computeNextIstLobby(nowMs: number): NextLobbyCountdown {
  if (COUNTDOWN_CONFIG.explicitTargetIso) {
    const targetMs = Date.parse(COUNTDOWN_CONFIG.explicitTargetIso);
    const diffMs = Math.max(0, targetMs - nowMs);
    const totalSeconds = Math.floor(diffMs / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const formatted = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(new Date(targetMs));

    return {
      targetLabel: formatted,
      sessionTitle: 'Configured Scheduled Lobby',
      hours,
      minutes,
      seconds,
      dateLabel: 'Configured IST Fixture',
    };
  }

  const istOffsetMs = 330 * 60 * 1000;
  const istNow = new Date(nowMs + istOffsetMs);
  const year = istNow.getUTCFullYear();
  const month = istNow.getUTCMonth();
  const day = istNow.getUTCDate();

  let chosenLobby: LobbySlotConfig = LOBBY_SCHEDULE[0];
  let targetUtcMs = 0;

  for (const slot of LOBBY_SCHEDULE) {
    const candidateUtcMs =
      Date.UTC(year, month, day, slot.hour24, slot.minute, 0) - istOffsetMs;
    if (candidateUtcMs > nowMs) {
      chosenLobby = slot;
      targetUtcMs = candidateUtcMs;
      break;
    }
  }

  let dayLabel = 'Today (IST)';
  if (targetUtcMs === 0) {
    chosenLobby = LOBBY_SCHEDULE[0];
    targetUtcMs =
      Date.UTC(year, month, day + 1, chosenLobby.hour24, chosenLobby.minute, 0) -
      istOffsetMs;
    dayLabel = 'Tomorrow (IST)';
  }

  const diffMs = Math.max(0, targetUtcMs - nowMs);
  const totalSeconds = Math.floor(diffMs / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');

  return {
    targetLabel: `${chosenLobby.timeLabel} IST`,
    sessionTitle: chosenLobby.sessionTitle,
    hours,
    minutes,
    seconds,
    dateLabel: dayLabel,
  };
}

const ENTRY_SUMMARY = ENTRY_TIERS.map((t) => t.entryDisplay).join(' · ');

export const LobbySchedule = memo(function LobbySchedule({
  selectedLobbyId,
  onSelectLobby,
}: LobbyScheduleProps) {
  const [countdown, setCountdown] = useState<NextLobbyCountdown | null>(() =>
    COUNTDOWN_CONFIG.isScheduleConfigured ? computeNextIstLobby(Date.now()) : null
  );

  useEffect(() => {
    if (!COUNTDOWN_CONFIG.isScheduleConfigured) {
      setCountdown(null);
      return;
    }

    const update = () => setCountdown(computeNextIstLobby(Date.now()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="schedule"
      className="relative overflow-hidden border-b border-slate-300/14 bg-gradient-to-b from-[#0A0E19] via-[#0D1221] to-[#080B14] py-16 md:py-24"
    >
      <ParallaxSectionAura position="left" tone="steel" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 border-b border-slate-300/14 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionHeading
              eyebrow="Official Lobby Schedule"
              title="Four Daily IST Scrim Windows"
              symbol="schedule"
            />
            <m.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.42, delay: 0.1, ease: EASE_OUT_EXPO }}
              className="mt-3 max-w-[58ch] text-sm leading-[1.7] text-slate-300 sm:text-[15px]"
            >
              Consistent daily custom room timings running B2B six-map sessions. Select a
              lobby below to pre-fill your WhatsApp registration request.
            </m.p>
          </div>

          {/* Schedule-Driven IST Countdown Console */}
          {COUNTDOWN_CONFIG.isScheduleConfigured && countdown && (
            <m.div
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.45, delay: 0.12, ease: EASE_OUT_EXPO }}
              className="surface-ruby-command clip-chamfer relative flex flex-col gap-3 overflow-hidden border border-rose-400/30 px-5 py-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <TelemetryScanBar />
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-slate-200 uppercase">
                  <Clock className="h-3.5 w-3.5 text-[#7DD3FC]" strokeWidth={1.75} aria-hidden="true" />
                  <span>Next Scheduled Lobby · {countdown.dateLabel}</span>
                </div>
                <p className="font-display mt-1 text-2xl font-bold tracking-[0.06em] text-white uppercase">
                  {countdown.targetLabel} — {countdown.sessionTitle}
                </p>
              </div>

              <div
                aria-label={`Time until ${countdown.targetLabel}`}
                className="font-mono-tabular flex items-center gap-1.5 text-2xl font-bold text-white"
              >
                <span className="rounded-sm border border-slate-300/20 bg-[#06080F] px-2.5 py-1.5 text-slate-100">
                  {countdown.hours}
                </span>
                <span className="text-[#F43F5E]">:</span>
                <span className="rounded-sm border border-slate-300/20 bg-[#06080F] px-2.5 py-1.5 text-slate-100">
                  {countdown.minutes}
                </span>
                <span className="text-[#F43F5E]">:</span>
                <span className="rounded-sm border border-rose-400/30 bg-[#06080F] px-2.5 py-1.5 text-[#FDA4AF]">
                  {countdown.seconds}
                </span>
              </div>
            </m.div>
          )}
        </div>

        {/* Exact 4 Lobby Timetable Cards Preserved */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LOBBY_SCHEDULE.map((lobby, index) => {
            const isSelected = selectedLobbyId === lobby.id;
            const slotNumber = String(index + 1).padStart(2, '0');

            return (
              <m.article
                key={lobby.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.42, delay: index * 0.06, ease: EASE_OUT_EXPO }}
                className={`clip-chamfer group relative flex flex-col justify-between overflow-hidden border p-6 transition-transform duration-200 hover:-translate-y-1 ${
                  isSelected
                    ? 'surface-ruby-command border-[#F43F5E]/80 shadow-[0_16px_40px_rgba(225,29,72,0.2)]'
                    : 'surface-titanium border-slate-300/16 hover:border-slate-200/42'
                }`}
              >
                {/* Animated Top Border Beam on Hover / Selection */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-[#F43F5E] via-white to-[#F43F5E] transition-transform duration-300 ${
                    isSelected ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />

                <div>
                  {/* Metadata Header */}
                  <div className="flex items-center justify-between border-b border-slate-300/12 pb-3 text-[11px] font-bold tracking-[0.14em] uppercase">
                    <span className="font-mono-tabular text-slate-300">Lobby {slotNumber}</span>
                    <span className="text-[#FB7185]">{lobby.sessionTitle}</span>
                  </div>

                  {/* Digital Clock Timing with Premium Clock Icon */}
                  <div className="mt-5 flex items-center gap-2.5">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-sky-300/25 bg-[#0A1324] text-[#7DD3FC]">
                      <Clock className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono-tabular text-platinum-chrome text-3xl font-bold tracking-tight sm:text-[2rem]">
                        {lobby.timeLabel}
                      </span>
                      <span className="text-xs font-bold tracking-[0.18em] text-[#FB7185] uppercase">
                        IST
                      </span>
                    </div>
                  </div>

                  {/* Preserved Details with Meaningful Icons */}
                  <dl className="mt-6 space-y-3.5 border-t border-slate-300/12 pt-4 text-xs">
                    <div>
                      <dt className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] text-slate-400 uppercase">
                        <Megaphone
                          className="h-3.5 w-3.5 text-[#7DD3FC]"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <span>Registration Availability</span>
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-slate-100">
                        {lobby.availabilityNote}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] text-slate-400 uppercase">
                        <Wallet
                          className="h-3.5 w-3.5 text-[#7DD3FC]"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <span>Entry Fee Options</span>
                      </dt>
                      <dd className="font-mono-tabular mt-1 text-sm font-semibold text-white">
                        {ENTRY_SUMMARY}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] text-slate-400 uppercase">
                        <Headset
                          className="h-3.5 w-3.5 text-[#7DD3FC]"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <span>WhatsApp Registration</span>
                      </dt>
                      <dd className="mt-1 leading-relaxed text-slate-300">
                        {lobby.registrationInstruction}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-6 pt-2">
                  <TactileButton
                    onClick={() => {
                      onSelectLobby(lobby.id);
                      const el = document.getElementById('register');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`clip-chamfer flex min-h-[44px] w-full items-center justify-center gap-2 whitespace-nowrap px-4 py-2.5 text-xs font-bold tracking-[0.09em] uppercase transition-colors duration-200 ${
                      isSelected ? 'btn-ruby-primary' : 'btn-titanium-outline'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Selected · Go to Register</span>
                      </>
                    ) : (
                      <>
                        <span>Select {lobby.timeLabel} Lobby</span>
                        <ArrowRight
                          className="h-3.5 w-3.5 text-[#FB7185] transition-transform duration-200 group-hover:translate-x-0.5"
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
