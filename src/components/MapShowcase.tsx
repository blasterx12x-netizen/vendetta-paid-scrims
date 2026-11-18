import { useState } from 'react';
import { Compass, Layers, Shuffle } from 'lucide-react';
import { MAP_POOL, type MapConfig } from '../data/scrimConfig';

function MapVisualCardMedia({ map, isSelected }: { map: MapConfig; isSelected: boolean }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-[#090A0D]"
      style={{
        backgroundImage: `radial-gradient(circle at 72% 28%, ${map.palette.glow}, transparent 68%)`,
      }}
    >
      {!imgFailed ? (
        <img
          src={map.imagePath}
          alt={
            map.isRandom
              ? 'Free Fire Battle Royale Random Map rotation artwork'
              : `Free Fire ${map.name} official map showcase`
          }
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className={`h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.04] ${
            map.isRandom ? 'brightness-90 contrast-105' : ''
          }`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#0D0E12] text-[#A9A59E]">
          {map.isRandom ? (
            <Shuffle className="h-7 w-7 text-[#DC2626]" aria-hidden="true" />
          ) : (
            <Compass className="h-7 w-7 text-[#DC2626]" aria-hidden="true" />
          )}
          <span className="font-display text-lg font-bold tracking-wider text-[#F4F1EC] uppercase">
            {map.name}
          </span>
        </div>
      )}

      {/* Subtle Dark & Blood-Red Vignette + Contrast Scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-[#0B0C10]/35 to-black/25"
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-0.5 transition-opacity duration-200 ${
          isSelected
            ? 'bg-[#DC2626] opacity-100'
            : 'bg-[#DC2626] opacity-0 group-hover:opacity-80'
        }`}
      />

      {/* Order & Sector Overlay */}
      <div className="absolute right-4 bottom-3 left-4 flex items-center justify-between text-xs font-medium tracking-[0.12em] uppercase">
        <span className="font-mono-tabular font-semibold text-[#F87171]">
          {map.order}
        </span>
        <span className="text-[#E5E0D8]">{map.sectorTag}</span>
      </div>
    </div>
  );
}

export function MapShowcase() {
  const [activeMapId, setActiveMapId] = useState<string>(MAP_POOL[0].id);
  const activeMap = MAP_POOL.find((m) => m.id === activeMapId) ?? MAP_POOL[0];

  return (
    <section
      id="maps"
      className="border-b border-white/10 bg-[#0A0B0E] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-5 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#DC2626] uppercase">
              Map Rotation & Match Format
            </p>
            <h2
              className="font-display mt-2 text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-none tracking-tight text-[#F4F1EC] uppercase"
              style={{ textWrap: 'balance' }}
            >
              B2B Six-Map Competitive Rotation
            </h2>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#B8B3AA]">
            <Layers className="h-4 w-4 shrink-0 text-[#DC2626]" aria-hidden="true" />
            <span>
              Every lobby runs <strong className="text-[#F4F1EC]">6 consecutive B2B matches</strong> across five fixed battlegrounds plus one dynamic Random Map decider.
            </span>
          </div>
        </div>

        {/* 6 Individual Map Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MAP_POOL.map((map) => {
            const isSelected = activeMapId === map.id;

            return (
              <button
                key={map.id}
                type="button"
                onClick={() => setActiveMapId(map.id)}
                aria-pressed={isSelected}
                className={`group flex flex-col overflow-hidden rounded-sm border text-left transition-colors duration-150 ${
                  isSelected
                    ? 'border-[#DC2626] bg-[#131116]'
                    : 'border-white/10 bg-[#0E0F14] hover:border-[#DC2626]/60'
                }`}
              >
                <MapVisualCardMedia map={map} isSelected={isSelected} />

                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-2xl font-bold tracking-wide text-[#F4F1EC] uppercase">
                        {map.name}
                      </h3>
                      {map.isRandom ? (
                        <Shuffle
                          className="h-4 w-4 shrink-0 text-[#DC2626]"
                          aria-hidden="true"
                        />
                      ) : (
                        <Compass
                          className={`h-4 w-4 shrink-0 transition-colors ${
                            isSelected
                              ? 'text-[#DC2626]'
                              : 'text-[#848079] group-hover:text-[#DC2626]'
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#A9A59E]">
                      {map.terrainProfile}
                    </p>
                  </div>

                  <p className="mt-4 border-t border-white/10 pt-3 text-xs font-medium text-[#D6D1C9]">
                    {map.tacticalNote}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Focused B2B Sequence Briefing Bar */}
        <div className="mt-8 flex flex-col justify-between gap-4 rounded-sm border border-white/10 bg-[#070709] p-5 sm:flex-row sm:items-center sm:px-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="font-mono-tabular font-semibold tracking-[0.12em] text-[#DC2626] uppercase">
              Selected Briefing · {activeMap.order}
            </span>
            <span aria-hidden="true" className="text-white/25">
              /
            </span>
            <span className="font-semibold text-[#F4F1EC] uppercase">{activeMap.name}</span>
            <span aria-hidden="true" className="text-white/25">
              ·
            </span>
            <span className="text-[#A9A59E]">{activeMap.tacticalNote}</span>
          </div>

          <span className="font-mono-tabular shrink-0 text-xs font-semibold tracking-[0.1em] text-[#8D8880] uppercase">
            6-Match B2B Sequence
          </span>
        </div>
      </div>
    </section>
  );
}
