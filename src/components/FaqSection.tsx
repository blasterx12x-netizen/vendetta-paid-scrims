import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Headset } from 'lucide-react';
import { FAQ_ITEMS } from '../data/scrimConfig';
import {
  EASE_OUT_EXPO,
  SectionHeading,
  TelemetryScanBar,
  VIEWPORT_CONFIG,
} from './MotionPrimitives';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-slate-300/14 bg-gradient-to-b from-[#0A0E19] via-[#0D1221] to-[#070A13] py-16 md:py-24"
    >
      <TelemetryScanBar />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Sticky Header */}
          <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Everything Before You Drop"
              symbol="faq"
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.45, delay: 0.14, ease: EASE_OUT_EXPO }}
              className="mt-4 text-sm leading-[1.7] text-slate-300"
            >
              Clear answers on daily lobby timings, entry fee series, prize pools, the
              B2B six-map format, and WhatsApp slot booking.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.45, delay: 0.2, ease: EASE_OUT_EXPO }}
              className="mt-6 flex items-center gap-2 border-t border-slate-300/12 pt-4 text-xs font-semibold text-slate-300"
            >
              <Headset className="h-4 w-4 shrink-0 text-[#7DD3FC]" strokeWidth={1.75} aria-hidden="true" />
              <span>Need slot help? Reach the admin via WhatsApp Channel.</span>
            </motion.div>
          </div>

          {/* Right Expandable Accordion (All 10 Questions) */}
          <div className="space-y-3 lg:col-span-8">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-btn-${item.id}`;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_CONFIG}
                  transition={{
                    duration: 0.38,
                    delay: Math.min(idx * 0.04, 0.28),
                    ease: EASE_OUT_EXPO,
                  }}
                  className={`clip-chamfer relative overflow-hidden border transition-colors duration-200 ${
                    isOpen
                      ? 'surface-ruby-command border-rose-400/50'
                      : 'surface-titanium border-slate-300/15 hover:border-slate-200/35'
                  }`}
                >
                  {isOpen && <TelemetryScanBar />}
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="touch-tactile flex min-h-[60px] w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors active:bg-white/[0.03] sm:px-6"
                  >
                    <span className="flex items-baseline gap-3.5">
                      <span className="font-mono-tabular text-xs font-bold text-[#FB7185]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-semibold text-white sm:text-[15px]">
                        {item.question}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-300 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#FB7185]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-300/14 px-5 pt-3.5 pb-5 pl-12 text-sm leading-[1.7] text-slate-200 sm:px-6 sm:pl-14">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
