"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ShieldCheck, BarChart3, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "brancho-cookie-consent";

type ConsentValue = "accepted" | "rejected" | "custom";

type Preferences = {
  analytics: boolean;
  marketing: boolean;
};

function persistConsent(value: ConsentValue, prefs: Preferences) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ value, ...prefs, at: new Date().toISOString() })
    );
  } catch {
    // storage unavailable — banner will show again next visit
  }
  document.cookie = `brancho_consent=${value}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

function Toggle({
  on,
  onChange,
  label,
}: {
  on: boolean;
  onChange?: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={!onChange}
      onClick={() => onChange?.(!on)}
      className={cn(
        "relative h-6 w-11 shrink-0 rounded-full transition-colors",
        on ? "bg-accent" : "bg-line",
        !onChange && "opacity-70"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all",
          on ? "left-[1.375rem]" : "left-0.5"
        )}
      />
    </button>
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [prefs, setPrefs] = useState<Preferences>({
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    if (stored) return;
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const reopen = () => {
      setCustomizing(false);
      setVisible(true);
    };
    window.addEventListener("brancho:open-cookie-settings", reopen);
    return () =>
      window.removeEventListener("brancho:open-cookie-settings", reopen);
  }, []);

  const choose = useCallback(
    (value: ConsentValue, next: Preferences = prefs) => {
      persistConsent(value, next);
      setVisible(false);
    },
    [prefs]
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          data-native-cursor
          className="fixed inset-x-4 bottom-4 z-[90] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[26rem]"
        >
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-2xl shadow-navy/20 dark:bg-navy dark:shadow-black/40">
            <button
              onClick={() => choose("rejected")}
              aria-label="Dismiss cookie notice"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-ink dark:hover:text-white"
            >
              <X size={14} />
            </button>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold dark:bg-gold dark:text-navy">
                <Cookie size={19} />
              </span>
              <div>
                <h2 className="font-heading text-base font-semibold text-ink dark:text-white">
                  Your privacy matters
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted dark:text-white/65">
                  We use cookies to run the site securely, remember your
                  preferences and — with your permission — understand how the
                  site is used so we can improve it. Read our{" "}
                  <Link
                    href="/legal/cookie-policy"
                    className="font-semibold text-accent-deep underline-offset-2 hover:underline"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {customizing && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-5 space-y-3 rounded-2xl border border-line bg-surface-soft p-4 dark:bg-white/5">
                    <li className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2.5 text-sm">
                        <ShieldCheck size={15} className="shrink-0 text-accent" />
                        <span>
                          <span className="block font-semibold text-ink dark:text-white">
                            Essential
                          </span>
                          <span className="block text-xs text-muted dark:text-white/60">
                            Security, consent memory. Always on.
                          </span>
                        </span>
                      </span>
                      <Toggle on label="Essential cookies (always on)" />
                    </li>
                    <li className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2.5 text-sm">
                        <BarChart3 size={15} className="shrink-0 text-accent" />
                        <span>
                          <span className="block font-semibold text-ink dark:text-white">
                            Analytics
                          </span>
                          <span className="block text-xs text-muted dark:text-white/60">
                            Anonymous usage statistics.
                          </span>
                        </span>
                      </span>
                      <Toggle
                        on={prefs.analytics}
                        onChange={(v) =>
                          setPrefs((p) => ({ ...p, analytics: v }))
                        }
                        label="Analytics cookies"
                      />
                    </li>
                    <li className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2.5 text-sm">
                        <Megaphone size={15} className="shrink-0 text-accent" />
                        <span>
                          <span className="block font-semibold text-ink dark:text-white">
                            Marketing
                          </span>
                          <span className="block text-xs text-muted dark:text-white/60">
                            Relevant offers and reminders.
                          </span>
                        </span>
                      </span>
                      <Toggle
                        on={prefs.marketing}
                        onChange={(v) =>
                          setPrefs((p) => ({ ...p, marketing: v }))
                        }
                        label="Marketing cookies"
                      />
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            {customizing ? (
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <button
                  onClick={() => choose("custom")}
                  className="flex-1 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-soft dark:bg-gold dark:text-navy dark:hover:brightness-110"
                >
                  Save my choices
                </button>
                <button
                  onClick={() => setCustomizing(false)}
                  className="flex-1 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink dark:text-white dark:hover:border-white"
                >
                  Back
                </button>
              </div>
            ) : (
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <button
                  onClick={() =>
                    choose("accepted", { analytics: true, marketing: true })
                  }
                  className="flex-1 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-soft dark:bg-gold dark:text-navy dark:hover:brightness-110"
                >
                  Accept all
                </button>
                <button
                  onClick={() =>
                    choose("rejected", { analytics: false, marketing: false })
                  }
                  className="flex-1 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink dark:text-white dark:hover:border-white"
                >
                  Reject
                </button>
              </div>
            )}

            {!customizing && (
              <button
                onClick={() => setCustomizing(true)}
                className="mt-3 w-full text-center text-xs font-semibold text-muted underline-offset-2 transition-colors hover:text-ink dark:text-white/60 dark:hover:text-white hover:underline"
              >
                Customize preferences
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
