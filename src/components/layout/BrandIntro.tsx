"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
import { introSounds, getIntroSoundPref, setIntroSoundPref } from "./intro-sound";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Golden geometric frame composed of tiny editorial "sketch" strokes drawn around the logo.
// viewBox 0 0 1000 300 — frame is rendered centered with a 10/3 aspect ratio.
const FRAME_LINES: string[] = [
  // corner brackets (top/bottom, left/right)
  "M130 66V118", "M130 118H188",
  "M130 234V182", "M130 182H188",
  "M870 66V118", "M870 118H812",
  "M870 234V182", "M870 182H812",
  // fine diagonal accents near the outer corners
  "M120 76L140 96", "M880 76L860 96",
  // vertical hairlines flanking the logo
  "M330 98V202", "M670 98V202",
  // inward-facing chevrons that "aim" at the logo
  "M352 136L378 150L352 164", "M648 136L622 150L648 164",
  // long approach hairlines drawing toward the logo
  "M0 150H318", "M1000 150H682",
];

const DRAW_BASE = 500; // ms — golden lines start drawing
const DRAW_STEP = 40; // ms — stagger between strokes
const DRAW_DUR = 280; // ms — each stroke draw time

interface BrandIntroProps {
  onNavbarReveal: () => void;
  onLogoLanding: () => void;
  onFinish: () => void;
}

export default function BrandIntro({ onNavbarReveal, onLogoLanding, onFinish }: BrandIntroProps) {
  const [phase, setPhase] = useState<"enter" | "move">("enter");
  const [visible, setVisible] = useState(true);
  const [target, setTarget] = useState({ x: 0, y: 0, scale: 1 });
  const [soundOn, setSoundOn] = useState(() => getIntroSoundPref());
  const [reduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    introSounds.setEnabled(soundOn);
  }, [soundOn]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => {
      timers.push(setTimeout(fn, ms));
    };

    const startTravel = () => {
      const from = logoRef.current?.getBoundingClientRect();
      const nav = document.getElementById("nav-logo")?.getBoundingClientRect();
      if (from && nav) {
        setTarget({
          x: nav.left + nav.width / 2 - (from.left + from.width / 2),
          y: nav.top + nav.height / 2 - (from.top + from.height / 2),
          scale: nav.width / from.width,
        });
      }
      setPhase("move");
    };

    if (reduced) {
      at(350, startTravel);
      at(430, onNavbarReveal);
      at(690, onLogoLanding);
      at(700, () => setVisible(false));
      at(900, onFinish);
      return () => timers.forEach(clearTimeout);
    }

    // Normal (non-reduced) intro
    introSounds.beginSession();

    at(550, () => introSounds.playDraw());
    at(850, () => introSounds.playSweep());
    at(1500, () => introSounds.playWhoosh());
    at(1500, startTravel);
    at(1800, onNavbarReveal);
    at(2450, onLogoLanding);
    at(2520, () => introSounds.playLanding());
    at(2520, () => setVisible(false));
    at(3000, onFinish);

    // Poll every 80ms — the moment the AudioContext becomes "running" (after
    // any prior-site interaction, focus, or visibility change), each past-due
    // cue fires immediately so sound plays without any tap on this page.
    const pollId = setInterval(() => introSounds.pollCues(), 80);

    const onGesture = () => introSounds.unlock();
    window.addEventListener("pointerdown", onGesture);
    window.addEventListener("touchstart", onGesture);
    window.addEventListener("keydown", onGesture);

    const html = document.documentElement;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(pollId);
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("touchstart", onGesture);
      window.removeEventListener("keydown", onGesture);
      html.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [reduced, onNavbarReveal, onLogoLanding, onFinish]);

  const travelDur = reduced ? 0.4 : 1.0;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: reduced ? 0.2 : 0.46, ease: EASE }}
      className="fixed inset-0 z-[100] overflow-hidden"
      style={{
        background: "radial-gradient(130% 130% at 50% 42%, #1b1e26 0%, #13161c 46%, #0a0b0e 100%)",
      }}
    >
      {/* cinematic vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 52%, rgba(0,0,0,0.5) 100%)",
        }}
      />
      <div className="dot-grid-light absolute inset-0 opacity-20" aria-hidden="true" />
      {/* warm amber ambience */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-10vmin] h-[52vmin] w-[74vmin] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex h-full w-full items-center justify-center">
        {/* breathing glow behind the logo */}
        {!reduced && (
          <motion.div
            initial={{ opacity: 0.35, scale: 1 }}
            animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.14, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute z-0 h-[30vmin] w-[56vmin] rounded-[50%] bg-gold/10 blur-3xl"
            aria-hidden="true"
          />
        )}

        {/* golden sketch frame that draws around the logo, then collapses into it */}
        {!reduced && (
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-[1] aspect-[10/3] w-[min(92vw,700px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            aria-hidden="true"
          >
            <motion.div
              className="origin-center"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4, ease: EASE }}
            >
              <motion.div
                className="origin-center"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 0.55 }}
                transition={{ delay: 1.42, duration: 0.45, ease: EASE }}
              >
                <svg
                  viewBox="0 0 1000 300"
                  width="100%"
                  height="100%"
                  fill="none"
                  overflow="visible"
                >
                  {FRAME_LINES.map((d, i) => (
                    <motion.path
                      key={i}
                      d={d}
                      stroke="#c6a55a"
                      strokeOpacity={0.55}
                      strokeWidth={2}
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        delay: (DRAW_BASE + i * DRAW_STEP) / 1000,
                        duration: DRAW_DUR / 1000,
                        ease: EASE,
                      }}
                    />
                  ))}
                </svg>
              </motion.div>
            </motion.div>
          </div>
        )}

        {/* the brand logo — emerges, sweeps, then travels seamlessly into the navbar */}
        <motion.div
          ref={logoRef}
          className="relative z-[2]"
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 10,
            ...(!reduced && { filter: "blur(8px)" }),
          }}
          animate={{
            opacity: 1,
            x: phase === "move" ? target.x : 0,
            y: phase === "move" ? target.y : 0,
            scale: phase === "move" ? target.scale : 1,
            ...(!reduced && { filter: "blur(0px)" }),
          }}
          transition={
            phase === "move"
              ? { duration: travelDur, ease: EASE }
              : { duration: reduced ? 0.15 : 0.6, delay: reduced ? 0 : 0.2, ease: EASE }
          }
        >
          {/* brief prominence bump the instant the frame finishes */}
          {!reduced && (
            <motion.div
              className="origin-center"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.035, 1] }}
              transition={{ delay: 1.32, duration: 0.22, ease: EASE }}
            >
              <div className="relative w-[min(78vw,560px)]">
                <Image
                  src="/logo2.png"
                  alt=""
                  width={176}
                  height={40}
                  priority
                  className="h-auto w-full object-contain"
                />
                {/* golden light sweep across the lettering */}
                <motion.div
                  className="pointer-events-none absolute inset-y-[-15%] left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-gold-soft/50 to-transparent mix-blend-screen"
                  initial={{ x: "-150%", opacity: 0 }}
                  animate={{ x: "380%", opacity: [0, 0.85, 0] }}
                  transition={{
                    delay: 0.85,
                    duration: 0.5,
                    times: [0, 0.45, 1],
                    ease: EASE,
                  }}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* optional intro sound control */}
      {!reduced && (
        <button
          onClick={() =>
            setSoundOn((prev) => {
              const next = !prev;
              setIntroSoundPref(next);
              return next;
            })
          }
          aria-label="Toggle intro sound"
          aria-pressed={soundOn}
          className="absolute right-4 top-5 z-[5] flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gold/80 transition-colors hover:bg-white/10 hover:text-gold"
        >
          {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>
      )}
    </motion.div>
  );
}