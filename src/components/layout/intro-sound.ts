"use client";

// Subtle, synthesized cinematic ident sounds (Web Audio API — no assets).
// Maximally aggressive unlock strategy:
//   1. Create AudioContext at module import (earliest possible client moment).
//   2. Immediately attempt resume + silent-buffer unlock.
//   3. Re-attempt on focus / visibility-change.
//   4. Poll the context state during the intro; play each cue the instant it unlocks.
//
// On a *completely fresh* browser session with zero prior interaction with this
// domain, every modern browser (Chrome, Safari, Firefox) still blocks audio.
// That is a hard browser policy no website can override.
// On repeat visits (or after any page interaction) the context stays unlocked
// and sound plays automatically — no tap required.

const PREF_KEY = "brancho-intro-sound";

export function getIntroSoundPref(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return window.localStorage.getItem(PREF_KEY) !== "0";
  } catch {
    return true;
  }
}

export function setIntroSoundPref(on: boolean) {
  try {
    window.localStorage.setItem(PREF_KEY, on ? "1" : "0");
  } catch {
    /* storage unavailable */
  }
}

// ── Audio singleton ──────────────────────────────────────────────────────────

type AudioContextCtor = typeof AudioContext;

class IntroSounds {
  private ctx: AudioContext | null = null;
  private noise: AudioBuffer | null = null;
  private enabled = true;
  private introStartTime = 0;
  private drawn = false;
  private swept = false;
  private whooshed = false;
  private landed = false;

  constructor() {
    this.enabled = getIntroSoundPref();
    if (typeof window !== "undefined") this.eagerInit();
  }

  setEnabled(on: boolean) {
    this.enabled = on;
  }

  isEnabled() {
    return this.enabled;
  }

  // Called once per intro. Resets the per-intro flags so cues aren't double-fired.
  beginSession() {
    this.introStartTime = performance.now();
    this.drawn = false;
    this.swept = false;
    this.whooshed = false;
    this.landed = false;
  }

  // ── Eager init ────────────────────────────────────────────────────────────
  private eagerInit() {
    try {
      const Ctx =
        window.AudioContext ??
        (window as Window & typeof globalThis & { webkitAudioContext?: AudioContextCtor })
          .webkitAudioContext;
      if (!Ctx) return;
      this.ctx = new Ctx();
      this.makeNoise();
      this.tryUnlock();
      // Re-attempt on every focus / visibility change.
      window.addEventListener("focus", this.handleFocus);
      document.addEventListener("visibilitychange", this.handleVisibility);
    } catch {
      /* AudioContext unavailable */
    }
  }

  private handleFocus = () => this.tryUnlock();
  private handleVisibility = () => {
    if (document.visibilityState === "visible") this.tryUnlock();
  };

  // Aggressively try to get the context into "running" state.
  private tryUnlock() {
    if (!this.ctx || this.enabled === false) return;
    if (this.ctx.state === "running") return;
    this.ctx.resume().catch(() => {});
    // Playing a silent buffer through the destination graph is a known
    // trick that transitions some browsers (esp. older Chrome / Safari)
    // to "running" when resume alone hangs.
    try {
      const buf = this.ctx.createBuffer(1, 1, 22050);
      const src = this.ctx.createBufferSource();
      src.buffer = buf;
      src.connect(this.ctx.destination);
      src.start(0);
    } catch {
      /* swallow */
    }
  }

  // Public: call from any user gesture (pointerdown / keydown / touchstart).
  unlock() {
    this.tryUnlock();
  }

  // ── Noise buffer ──────────────────────────────────────────────────────────
  private makeNoise() {
    if (!this.ctx) return;
    const len = Math.floor(this.ctx.sampleRate);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    this.noise = buf;
  }

  private isRunning(): boolean {
    return !!this.ctx && this.ctx.state === "running";
  }

  // ── Cues (return true if played, false if skipped) ────────────────────────

  playDraw(): boolean {
    if (this.drawn || !this.enabled || !this.isRunning() || !this.noise) return false;
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    const band = ctx.createBiquadFilter();
    band.type = "bandpass";
    band.Q.value = 3;
    band.frequency.setValueAtTime(700, t);
    band.frequency.exponentialRampToValueAtTime(2400, t + 0.32);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.035, t + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
    src.connect(band);
    band.connect(gain);
    gain.connect(ctx.destination);
    src.start(t);
    src.stop(t + 0.55);
    this.drawn = true;
    return true;
  }

  playSweep(): boolean {
    if (this.swept || !this.enabled || !this.isRunning()) return false;
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    [880, 1320, 1980].forEach((freq, i) => {
      const delay = i * 0.035;
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.value = freq;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, t + delay);
      gain.gain.linearRampToValueAtTime(0.014, t + delay + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + delay + 0.7);
      o.connect(gain);
      gain.connect(ctx.destination);
      o.start(t + delay);
      o.stop(t + delay + 0.8);
    });
    this.swept = true;
    return true;
  }

  playWhoosh(): boolean {
    if (this.whooshed || !this.enabled || !this.isRunning() || !this.noise) return false;
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    src.loop = true;
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(3600, t);
    lp.frequency.exponentialRampToValueAtTime(350, t + 0.75);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.linearRampToValueAtTime(0.055, t + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.85);
    src.connect(lp);
    lp.connect(gain);
    gain.connect(ctx.destination);
    src.start(t);
    src.stop(t + 0.9);
    this.whooshed = true;
    return true;
  }

  playLanding(): boolean {
    if (this.landed || !this.enabled || !this.isRunning()) return false;
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    [660, 990].forEach((freq, i) => {
      const delay = i * 0.07;
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.value = freq;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, t + delay);
      gain.gain.linearRampToValueAtTime(0.022, t + delay + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + delay + 1.1);
      o.connect(gain);
      gain.connect(ctx.destination);
      o.start(t + delay);
      o.stop(t + delay + 1.2);
    });
    this.landed = true;
    return true;
  }

  // ── Polling: try to play any past-due cue the instant the context unlocks.
  pollCues() {
    if (!this.enabled || !this.isRunning()) return;
    const elapsed = performance.now() - this.introStartTime;
    if (elapsed > 400) this.playDraw();
    if (elapsed > 700) this.playSweep();
    if (elapsed > 1300) this.playWhoosh();
    if (elapsed > 2300) this.playLanding();
  }
}

export const introSounds = new IntroSounds();
