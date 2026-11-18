import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/scrimConfig';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative border-b border-[#DFBA82]/20 bg-gradient-to-b from-[#171123] via-[#130E1D] to-[#0E0B16] py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFBA82]/45 to-transparent"
      />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Sticky Header */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#DFBA82] uppercase">
              Frequently Asked Questions
            </p>
            <h2
              className="font-display mt-2 text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-none tracking-tight text-[#FAF4EB] uppercase"
              style={{ textWrap: 'balance' }}
            >
              Everything Before You Drop
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#C8BECF]">
              Clear answers on daily lobby timings, entry fee tiers, prize pools, the
              B2B six-map format, and WhatsApp slot booking.
            </p>
          </div>

          {/* Right Expandable Accordion (All 10 Questions) */}
          <div className="space-y-3 lg:col-span-8">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-btn-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={`rounded-sm border transition-colors duration-150 ${
                    isOpen
                      ? 'card-garnet-velvet border-[#DFBA82]/50'
                      : 'card-plum-glass border-[#DFBA82]/16 hover:border-[#DFBA82]/38'
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="flex min-h-[60px] w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors sm:px-5"
                  >
                    <span className="flex items-baseline gap-3.5">
                      <span className="font-mono-tabular text-xs font-semibold text-[#F4D8A8]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-semibold text-[#FAF4EB] sm:text-base">
                        {item.question}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#DFBA82] transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-[#F4D8A8]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="border-t border-[#DFBA82]/14 px-4 pt-3 pb-5 pl-11 text-sm leading-relaxed text-[#E4DCE9] sm:px-5 sm:pl-12"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
