"use client";

import { useCallback, useEffect, useState } from "react";
import { Star, Quote, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

function usePerView() {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqXl = window.matchMedia("(min-width: 1280px)");
    const update = () => setPerView(mqXl.matches ? 3 : mqMd.matches ? 2 : 1);
    update();
    mqMd.addEventListener("change", update);
    mqXl.addEventListener("change", update);
    return () => {
      mqMd.removeEventListener("change", update);
      mqXl.removeEventListener("change", update);
    };
  }, []);
  return perView;
}

export default function Testimonials() {
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(TESTIMONIALS.length - perView, 0);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const next = useCallback(
    () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
    [maxIndex]
  );
  const prev = useCallback(
    () => setIndex((i) => (i <= 0 ? maxIndex : i - 1)),
    [maxIndex]
  );

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [paused, maxIndex, next]);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-surface py-28 lg:py-36">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by homes. Trusted by professionals."
          description="Real stories from the customers and professionals who make Brancho what it is."
        />

        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="group flex shrink-0 flex-col rounded-3xl border border-line bg-surface-soft p-7 transition-colors duration-500 hover:border-transparent hover:bg-surface hover:shadow-2xl hover:shadow-navy/10"
                style={{ width: `calc(${100 / perView}% - 1rem)`, marginRight: "1rem" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, r) => (
                      <Star key={r} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <Quote size={28} className="text-ink/10 transition-colors group-hover:text-accent/20" />
                </div>

                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-4 border-t border-line pt-5">
                  <span
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-heading text-sm font-bold text-white",
                      t.type === "professional" ? "bg-navy" : "bg-accent"
                    )}
                    aria-hidden="true"
                  >
                    {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </span>
                  <div>
                    <p className="flex items-center gap-2 font-semibold text-ink">
                      {t.name}
                      {t.type === "professional" && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-navy/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink/60">
                          <Briefcase size={9} /> Partner
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-muted">
                      {t.location} · {t.service}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-all hover:border-navy hover:bg-navy hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index ? "w-8 bg-navy" : "w-2 bg-line hover:bg-muted"
                )}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonials"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-all hover:border-navy hover:bg-navy hover:text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
