import { useState } from 'react';
import { Compass, Layers, Shuffle } from 'lucide-react';
import { MAP_POOL, type MapConfig } from '../data/scrimConfig';

function MapVisualCardMedia({ map, isSelected }: { map: MapConfig; isSelected: boolean }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="relative aspect-video w-full overflow-hidden border-b border-[#DFBA82]/18 bg-[#120C1B]"
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
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#1A1226] text-[#C8BECF]">
          {map.isRandom ? (
            <Shuffle className="h-7 w-7 text-[#F4D8A8]" aria-hidden="true" />
          ) : (
            <Compass className="h-7 w-7 text-[#F4D8A8]" aria-hidden="true" />
          )}
          <span className="font-display text-lg font-bold tracking-wider text-[#FAF4EB] uppercase">
            {map.name}
          </span>
        </div>
      )}

      {/* Measured Plum-Obsidian & Garnet Contrast Scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#160F22] via-[#160F22]/32 to-[#120A18]/25"
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#B52340] via-[#F4D8A8] to-[#B52340] transition-opacity duration-200 ${
          isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-90'
        }`}
      />

      {/* Order & Sector Overlay */}
      <div className="absolute right-4 bottom-3 left-4 flex items-center justify-between text-xs font-medium tracking-[0.12em] uppercase">
        <span className="font-mono-tabular font-semibold text-[#F4D8A8]">
          {map.order}
        </span>
        <span className="text-[#FAF4EB]">{map.sectorTag}</span>
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
      className="relative border-b border-[#DFBA82]/20 bg-gradient-to-b from-[#171123] via-[#1D1328] to-[#150E20] py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFBA82]/45 to-transparent"
      />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-5 border-b border-[#DFBA82]/16 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#DFBA82] uppercase">
              Map Rotation & Match Format
            </p>
            <h2
              className="font-display mt-2 text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-none tracking-tight text-[#FAF4EB] uppercase"
              style={{ textWrap: 'balance' }}
            >
              B2B Six-Map Competitive Rotation
            </h2>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#D4CBDA]">
            <Layers className="h-4 w-4 shrink-0 text-[#E8859A]" aria-hidden="true" />
            <span>
              Every lobby runs <strong className="text-[#F4D8A8]">6 consecutive B2B matches</strong> across five fixed battlegrounds plus one dynamic Random Map decider.
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
                className={`group flex flex-col overflow-hidden rounded-sm border text-left transition-all duration-150 hover:-translate-y-0.5 ${
                  isSelected
                    ? 'card-garnet-velvet border-[#F4D8A8]/75'
                    : 'card-plum-glass border-[#DFBA82]/18 hover:border-[#DFBA82]/48'
                }`}
              >
                <MapVisualCardMedia map={map} isSelected={isSelected} />

                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-2xl font-bold tracking-wide text-[#FAF4EB] uppercase">
                        {map.name}
                      </h3>
                      {map.isRandom ? (
                        <Shuffle
                          className="h-4 w-4 shrink-0 text-[#E8859A]"
                          aria-hidden="true"
                        />
                      ) : (
                        <Compass
                          className={`h-4 w-4 shrink-0 transition-colors ${
                            isSelected
                              ? 'text-[#F4D8A8]'
                              : 'text-[#9D92AA] group-hover:text-[#F4D8A8]'
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#C8BECF]">
                      {map.terrainProfile}
                    </p>
                  </div>

                  <p className="mt-4 border-t border-[#DFBA82]/14 pt-3 text-xs font-medium text-[#E4DCE9]">
                    {map.tacticalNote}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Focused B2B Sequence Briefing Bar */}
        <div className="card-garnet-velvet mt-8 flex flex-col justify-between gap-4 rounded-sm border border-[#DFBA82]/28 p-5 sm:flex-row sm:items-center sm:px-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="font-mono-tabular font-semibold tracking-[0.12em] text-[#F4D8A8] uppercase">
              Selected Briefing · {activeMap.order}
            </span>
            <span aria-hidden="true" className="text-[#DFBA82]/35">
              /
            </span>
            <span className="font-semibold text-[#FAF4EB] uppercase">{activeMap.name}</span>
            <span aria-hidden="true" className="text-[#DFBA82]/35">
              ·
            </span>
            <span className="text-[#D4CBDA]">{activeMap.tacticalNote}</span>
          </div>

          <span className="font-mono-tabular shrink-0 text-xs font-semibold tracking-[0.1em] text-[#E8859A] uppercase">
            6-Match B2B Sequence
          </span>
        </div>
      </div>
    </section>
  );
}
