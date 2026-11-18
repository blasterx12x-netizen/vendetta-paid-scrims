import { memo, useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import { Compass, Layers, MapPin, Shuffle } from 'lucide-react';
import { MAP_POOL, type MapConfig } from '../data/scrimConfig';
import {
  EASE_OUT_EXPO,
  HudCornerFrame,
  ParallaxSectionAura,
  SectionHeading,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';

const MapVisualCardMedia = memo(function MapVisualCardMedia({
  map,
  isSelected,
}: {
  map: MapConfig;
  isSelected: boolean;
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="relative aspect-video w-full overflow-hidden border-b border-slate-300/14 bg-[#070A13]"
      style={{
        backgroundImage: `radial-gradient(circle at 72% 28%, ${map.palette.glow}, transparent 68%)`,
      }}
    >
      {!imgFailed ? (
        <m.img
          initial={{ scale: 1.07, opacity: 0.8 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.62, ease: EASE_OUT_EXPO }}
          src={map.imagePath}
          alt={
            map.isRandom
              ? 'Free Fire Battle Royale Random Map rotation artwork'
              : `Free Fire ${map.name} official map showcase`
          }
          width={960}
          height={540}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className={`h-full w-full object-cover object-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] ${
            map.isRandom ? 'brightness-90 contrast-105' : ''
          }`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#0D1221] text-slate-300">
          {map.isRandom ? (
            <Shuffle className="h-7 w-7 text-[#F43F5E]" aria-hidden="true" />
          ) : (
            <Compass className="h-7 w-7 text-[#F43F5E]" aria-hidden="true" />
          )}
          <span className="font-display text-lg font-bold tracking-wider text-white uppercase">
            {map.name}
          </span>
        </div>
      )}

      {/* Measured Steel-Obsidian Contrast Scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B101D] via-[#0B101D]/28 to-black/25"
      />
      {/* Precision Inner Frame & Targeting Brackets */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-2 ring-1 ring-inset ring-slate-200/15 transition-colors duration-200 group-hover:ring-[#FB7185]/45"
      />
      <HudCornerFrame />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-[#F43F5E] via-white to-[#F43F5E] transition-transform duration-300 ${
          isSelected ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />

      {/* Order & Sector Overlay */}
      <div className="absolute right-4 bottom-3 left-4 flex items-center justify-between text-xs font-semibold tracking-[0.14em] uppercase">
        <span className="font-mono-tabular inline-flex items-center gap-1.5 text-[#FDA4AF]">
          {map.isRandom ? (
            <Shuffle className="h-3.5 w-3.5 text-[#7DD3FC]" strokeWidth={1.75} aria-hidden="true" />
          ) : (
            <MapPin className="h-3.5 w-3.5 text-[#7DD3FC]" strokeWidth={1.75} aria-hidden="true" />
          )}
          <span>{map.order}</span>
        </span>
        <span className="text-slate-100">{map.sectorTag}</span>
      </div>
    </div>
  );
});

export const MapShowcase = memo(function MapShowcase() {
  const [activeMapId, setActiveMapId] = useState<string>(MAP_POOL[0].id);
  const activeMap = MAP_POOL.find((m) => m.id === activeMapId) ?? MAP_POOL[0];

  return (
    <section
      id="maps"
      className="relative overflow-hidden border-b border-slate-300/14 bg-gradient-to-b from-[#0A0E19] via-[#0E1424] to-[#080B14] py-16 md:py-24"
    >
      <ParallaxSectionAura position="center" tone="steel" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-5 border-b border-slate-300/14 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Map Rotation & Match Format"
            title="B2B Six-Map Competitive Rotation"
            symbol="maps"
          />

          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.42, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="flex items-center gap-3 text-sm text-slate-300"
          >
            <Layers className="h-4 w-4 shrink-0 text-[#F43F5E]" aria-hidden="true" />
            <span>
              Every lobby executes{' '}
              <strong className="text-keyword-shimmer font-bold">
                6 consecutive B2B matches
              </strong>{' '}
              across five fixed battlegrounds plus one dynamic Random Map decider.
            </span>
          </m.div>
        </div>

        {/* 6 Individual Chamfered Map Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MAP_POOL.map((map, idx) => {
            const isSelected = activeMapId === map.id;

            return (
              <m.button
                key={map.id}
                type="button"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.44, delay: idx * 0.05, ease: EASE_OUT_EXPO }}
                whileTap={{ scale: 0.985 }}
                onClick={() => setActiveMapId(map.id)}
                aria-pressed={isSelected}
                className={`clip-chamfer touch-tactile group flex flex-col overflow-hidden border text-left transition-transform duration-200 hover:-translate-y-1.5 ${
                  isSelected
                    ? 'surface-ruby-command border-[#F43F5E]/80 shadow-[0_16px_40px_rgba(225,29,72,0.2)]'
                    : 'surface-titanium border-slate-300/16 hover:border-slate-200/45'
                }`}
              >
                <MapVisualCardMedia map={map} isSelected={isSelected} />

                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-3xl font-extrabold tracking-[0.04em] text-white uppercase transition-colors duration-200 group-hover:text-[#FDA4AF]">
                        {map.name}
                      </h3>
                      {map.isRandom ? (
                        <Shuffle
                          className="h-4 w-4 shrink-0 text-[#F43F5E] transition-transform duration-300 group-hover:rotate-12"
                          aria-hidden="true"
                        />
                      ) : (
                        <Compass
                          className={`h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-45 ${
                            isSelected
                              ? 'text-[#FB7185]'
                              : 'text-slate-400 group-hover:text-[#FB7185]'
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <p className="mt-2.5 text-sm leading-[1.65] text-slate-300">
                      {map.terrainProfile}
                    </p>
                  </div>

                  <p className="mt-4 border-t border-slate-300/12 pt-3 text-xs font-medium text-slate-200">
                    {map.tacticalNote}
                  </p>
                </div>
              </m.button>
            );
          })}
        </div>

        {/* Focused B2B Sequence Briefing Bar */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.42, delay: 0.12, ease: EASE_OUT_EXPO }}
          className="surface-ruby-command clip-chamfer relative mt-8 flex flex-col justify-between gap-4 overflow-hidden border border-rose-400/25 p-5 sm:flex-row sm:items-center sm:px-6"
        >
          <AnimatePresence mode="wait">
            <m.div
              key={activeMap.id}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs"
            >
              <span className="font-mono-tabular inline-flex items-center gap-1.5 font-bold tracking-[0.12em] text-[#FDA4AF] uppercase">
                <Compass className="h-3.5 w-3.5 text-[#7DD3FC]" strokeWidth={1.75} aria-hidden="true" />
                <span>Selected Briefing · {activeMap.order}</span>
              </span>
              <span aria-hidden="true" className="text-slate-500">
                /
              </span>
              <span className="font-bold text-white uppercase">{activeMap.name}</span>
              <span aria-hidden="true" className="text-slate-500">
                ·
              </span>
              <span className="text-slate-200">{activeMap.tacticalNote}</span>
            </m.div>
          </AnimatePresence>

          <span className="font-mono-tabular shrink-0 text-xs font-bold tracking-[0.12em] text-[#FB7185] uppercase">
            6-Match B2B Sequence
          </span>
        </m.div>
      </div>
    </section>
  );
});

export default MapShowcase;
