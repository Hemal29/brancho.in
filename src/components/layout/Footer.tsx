import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import Newsletter from "@/components/corporate/Newsletter";
import { CookieSettingsButton } from "@/components/layout/CookieConsent";
import { CONTACT, BUSINESSES, LEGAL_FAQ_LINKS } from "@/lib/corporate";

const SocialLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V24H.24V8.25zM8.34 8.25h4.33v2.15h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.92V24h-4.52v-8.02c0-1.91-.03-4.37-2.66-4.37-2.67 0-3.08 2.08-3.08 4.23V24H8.34V8.25z" />
  </svg>
);

const SocialInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const SocialWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.79h-.02a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.73 9.73 0 0 1-1.5-5.19c0-5.4 4.4-9.8 9.82-9.8a9.76 9.76 0 0 1 9.8 9.8c0 5.41-4.4 9.8-9.79 9.8zM20.42 3.6A11.7 11.7 0 0 0 12.04 0C5.51 0 .23 5.28.23 11.81c0 2.09.55 4.12 1.59 5.92L.06 24l6.4-1.68a11.8 11.8 0 0 0 5.57 1.42h.01c6.54 0 11.81-5.28 11.81-11.81 0-3.16-1.23-6.13-3.43-8.33z" />
  </svg>
);

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Brancho", href: "/about" },
      { label: "Founder", href: "/founder" },
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Brand Guidelines", href: "/brand-guidelines" },
    ],
  },
  {
    title: "Businesses",
    links: [
      ...BUSINESSES.map((b) => ({ label: b.name, href: `/businesses/${b.slug}` })),
      { label: "View All Businesses", href: "/businesses" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Services", href: "/services" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Brancho Professionals", href: "/professionals" },
      { label: "Technology", href: "/technology" },
      { label: "Trust & Safety", href: "/trust" },
      { label: "Cities", href: "/cities" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Mobile App", href: "/app" },
      { label: "Download Center", href: "/downloads" },
      { label: "Media Gallery", href: "/media/gallery" },
      { label: "Press Resources", href: "/media/press" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "Legal",
    links: LEGAL_FAQ_LINKS.map((l) => ({ label: l.label, href: l.href })),
  },
];

const socials = [
  { label: "LinkedIn", icon: SocialLinkedIn, href: "https://www.linkedin.com/company/brancho-india/" },
  { label: "Instagram", icon: SocialInstagram, href: "https://www.instagram.com/brancho.group?stkn=anJxN25pOTA5NHo3&utm_source=qr" },
  { label: "WhatsApp", icon: SocialWhatsApp, href: `https://wa.me/${CONTACT.whatsapp.value.replace(/[^\d]/g, "")}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="container-wide pt-20">
        <Newsletter dark />
      </div>

      <div className="container-wide relative pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2.2fr]">
          <div>
            <Link href="/" aria-label="Brancho home">
              <Image
                src="/logo2.png"
                alt="Brancho logo"
                width={176}
                height={40}
                className="h-8 w-auto object-contain sm:h-10"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              India&apos;s trusted home services platform — built on verification,
              transparency and respect for the professionals who do the work.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                {CONTACT.corporate.value}
              </li>
              <li className="flex items-center gap-3">
                <span className="shrink-0 text-gold">
                  <SocialWhatsApp />
                </span>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.value.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {CONTACT.whatsapp.value}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-gold" />
                <a href={`mailto:${CONTACT.support.email}`} className="transition-colors hover:text-white">
                  {CONTACT.support.email}
                </a>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
            {footerColumns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Brancho Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <CookieSettingsButton className="text-xs text-white/50 transition-colors hover:text-white" />
            <p className="text-xs text-white/50">Made with care in Veraval, Gujarat, India.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
