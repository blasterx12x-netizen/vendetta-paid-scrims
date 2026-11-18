import { useEffect, useState } from 'react';
import { Clock, Check, ArrowRight } from 'lucide-react';
import {
  COUNTDOWN_CONFIG,
  ENTRY_TIERS,
  LOBBY_SCHEDULE,
  type LobbySlotConfig,
} from '../data/scrimConfig';

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

  // Convert current UTC instant to IST wall-clock components (+05:30 = 330 minutes)
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

  // All today's IST lobbies have passed -> target tomorrow's first lobby (12:00 PM IST)
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

export function LobbySchedule({ selectedLobbyId, onSelectLobby }: LobbyScheduleProps) {
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

  const entrySummary = ENTRY_TIERS.map((t) => t.entryDisplay).join(' · ');

  return (
    <section
      id="schedule"
      className="border-b border-white/10 bg-[#0A0B0E] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#DC2626] uppercase">
              Official Lobby Schedule
            </p>
            <h2
              className="font-display mt-2 text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-none tracking-tight text-[#F4F1EC] uppercase"
              style={{ textWrap: 'balance' }}
            >
              Four Daily IST Scrim Windows
            </h2>
            <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-[#A9A59E] sm:text-base">
              Consistent daily custom room timings running B2B six-map sessions. Select a
              lobby below to pre-fill your WhatsApp registration request.
            </p>
          </div>

          {/* Schedule-Driven IST Countdown (only rendered when schedule is configured) */}
          {COUNTDOWN_CONFIG.isScheduleConfigured && countdown && (
            <div className="flex flex-col gap-3 rounded-sm border border-white/12 bg-[#111217] px-5 py-4 sm:flex-row sm:items-center sm:gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium tracking-[0.1em] text-[#A9A59E] uppercase">
                  <Clock className="h-3.5 w-3.5 text-[#DC2626]" aria-hidden="true" />
                  <span>Next Scheduled Lobby · {countdown.dateLabel}</span>
                </div>
                <p className="font-display mt-1 text-lg font-bold tracking-wide text-[#F4F1EC] uppercase">
                  {countdown.targetLabel} — {countdown.sessionTitle}
                </p>
              </div>

              <div
                aria-label={`Time until ${countdown.targetLabel}`}
                className="font-mono-tabular flex items-center gap-1.5 text-2xl font-bold text-[#F4F1EC]"
              >
                <span className="rounded-sm border border-white/10 bg-[#070709] px-2.5 py-1.5">
                  {countdown.hours}
                </span>
                <span className="text-[#DC2626]">:</span>
                <span className="rounded-sm border border-white/10 bg-[#070709] px-2.5 py-1.5">
                  {countdown.minutes}
                </span>
                <span className="text-[#DC2626]">:</span>
                <span className="rounded-sm border border-white/10 bg-[#070709] px-2.5 py-1.5">
                  {countdown.seconds}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 4 Lobby Timetable Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LOBBY_SCHEDULE.map((lobby, index) => {
            const isSelected = selectedLobbyId === lobby.id;
            const slotNumber = String(index + 1).padStart(2, '0');

            return (
              <article
                key={lobby.id}
                className={`group flex flex-col justify-between rounded-sm border p-6 transition-colors duration-150 ${
                  isSelected
                    ? 'border-[#DC2626] bg-crimson-sheen'
                    : 'border-white/10 bg-metallic-surface hover:border-white/25'
                }`}
              >
                <div>
                  {/* Quiet Typographic Metadata Line (no pills) */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-medium tracking-[0.12em] text-[#8D8880] uppercase">
                    <span>Lobby {slotNumber}</span>
                    <span>{lobby.sessionTitle}</span>
                  </div>

                  {/* Digital Clock Timing */}
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-mono-tabular text-3xl font-bold tracking-tight text-[#F4F1EC] sm:text-4xl">
                      {lobby.timeLabel}
                    </span>
                    <span className="text-xs font-semibold tracking-widest text-[#DC2626] uppercase">
                      IST
                    </span>
                  </div>

                  {/* Details */}
                  <dl className="mt-6 space-y-3 border-t border-white/10 pt-4 text-xs">
                    <div>
                      <dt className="font-medium tracking-wider text-[#848079] uppercase">
                        Registration Availability
                      </dt>
                      <dd className="mt-0.5 text-sm font-medium text-[#E5E0D8]">
                        {lobby.availabilityNote}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium tracking-wider text-[#848079] uppercase">
                        Entry Fee Options
                      </dt>
                      <dd className="font-mono-tabular mt-0.5 text-sm font-semibold text-[#F4F1EC]">
                        {entrySummary}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-medium tracking-wider text-[#848079] uppercase">
                        WhatsApp Registration
                      </dt>
                      <dd className="mt-0.5 leading-relaxed text-[#A9A59E]">
                        {lobby.registrationInstruction}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectLobby(lobby.id);
                      const el = document.getElementById('register');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex min-h-[44px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-sm border px-4 py-2.5 text-xs font-semibold tracking-[0.08em] uppercase transition-colors duration-150 ${
                      isSelected
                        ? 'border-[#EF4444]/60 bg-[#B91C1C] text-white hover:bg-[#DC2626]'
                        : 'border-white/15 bg-[#16181F] text-[#F4F1EC] hover:border-[#DC2626]/60 hover:bg-[#1E2029]'
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
