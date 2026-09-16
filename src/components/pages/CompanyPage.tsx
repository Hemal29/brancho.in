"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  Cpu,
  HeartHandshake,
  ArrowRight,
  CircleCheck,
  Globe,
  Zap,
  Scale,
  TrendingUp,
  Users,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/sections/CTABand";
import { LEADERSHIP, VALUES } from "@/lib/data";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Trust & Safety",
    items: [
      "Police background verification on every professional",
      "OTP-verified entry at every home visit",
      "Live tracking with verified arrival confirmation",
      "Post-service photo evidence on every job",
    ],
  },
  {
    icon: Cpu,
    title: "Technology",
    items: [
      "AI-based professional allocation in seconds",
      "Real-time operations dashboard for every city",
      "Digital invoices and transparent pricing",
      "Quality monitoring on 100% of completed services",
    ],
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        image="/heroes/company.jpg"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Company", href: "/company" }]}
        eyebrow="About Brancho"
        title="Built in Gujarat. Built for every Indian home."
        description="Brancho is an Indian technology platform transforming home services through trust, transparency and skilled professionals — from a single Junagadh garage to a growing movement."
      />

      {/* Manifesto — long-form About Brancho content */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl space-y-20">

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">About Brancho</h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-accent-deep">Building the infrastructure for trusted home services</p>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Brancho is a technology-driven home services company built to bring trust, transparency,
                professionalism and convenience to one of the most fundamental parts of everyday life —
                maintaining and improving the home.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                A home inevitably requires services. Electrical work. Plumbing. Air-conditioning. Appliance
                repair. Carpentry. Cleaning. Painting. Installation. Maintenance. Repairs. Improvements.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">The requirement is universal.</p>
              <p className="mt-4 text-base leading-relaxed text-muted">The problem is the experience.</p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                For decades, customers have largely depended on fragmented networks of local professionals,
                personal references, informal contacts and unstructured service arrangements. While these
                professionals often possess years of practical experience and technical skill, the overall
                system remains inconsistent.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Customers may struggle to identify the right professional, understand pricing, judge quality,
                coordinate appointments or seek accountability when something goes wrong.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Professionals, meanwhile, often operate without the infrastructure that modern businesses take
                for granted — structured customer acquisition, digital identity, reputation systems,
                predictable demand, professional tools and organised support.
              </p>
              <p className="mt-4 text-base font-semibold text-ink">
                Brancho exists to solve this structural gap.
              </p>
            </motion.div>

            {/* 01 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">01 — WHO WE ARE</span>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Brancho is being built as a home-services ecosystem, not simply as a marketplace or directory.
                Our role is to connect the three elements that make a service experience work:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { title: "The Customer", desc: "A household that needs a problem solved." },
                  { title: "The Professional", desc: "A skilled individual or service provider capable of solving that problem." },
                  { title: "The Platform", desc: "The technology, systems and operational infrastructure that make the interaction more reliable." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-line bg-surface-soft p-5">
                    <p className="font-heading text-sm font-semibold text-ink">{item.title}</p>
                    <p className="mt-2 text-sm text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Brancho sits at the centre of this ecosystem. We help customers discover, evaluate, engage
                with and receive services from professionals, while giving professionals a structured platform
                through which they can build their presence, access demand and develop their careers or businesses.
              </p>
              <p className="mt-4 text-base font-semibold text-ink">
                The ultimate objective is simple: make professional home services feel less uncertain and
                more like a dependable, organised service experience.
              </p>
            </motion.div>

            {/* 02 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">02 — WHY BRANCHO EXISTS</span>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The home-services industry has a contradiction at its core. There is no shortage of skilled
                people. There is no shortage of customers who need their services. Yet connecting the two
                reliably remains difficult.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                A customer with a broken appliance does not necessarily have a reliable system for finding the
                right technician. A skilled electrician may be excellent at his work but have no efficient way
                to consistently reach new customers. A plumber may have strong local reputation but limited
                digital visibility. A technician may spend significant time travelling between jobs, negotiating
                prices and managing appointments manually.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The problem isn&apos;t simply a lack of service providers. The problem is the lack of organised
                infrastructure connecting demand and supply.
              </p>
              <p className="mt-4 text-base font-semibold text-ink">Brancho is designed around this opportunity.</p>
            </motion.div>

            {/* 03 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">03 — OUR PURPOSE</span>
              <p className="mt-2 font-heading text-xl font-semibold text-ink">To make getting help at home simpler, safer and more dependable.</p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Brancho&apos;s purpose goes beyond facilitating individual transactions. Every successful service
                creates something more valuable than a completed job: <span className="font-semibold text-ink">confidence</span>.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                When a customer knows that the person arriving is properly represented on the platform, the
                service process is clearly communicated, expectations are established and support exists when
                something goes wrong, the fundamental relationship between customer and professional changes.
              </p>
              <div className="mt-6 rounded-2xl border border-line bg-surface-soft p-6">
                <p className="text-sm text-muted">It moves from:</p>
                <p className="mt-2 font-heading text-lg font-semibold text-ink">&quot;I hope this person is good.&quot;</p>
                <p className="mt-3 text-sm text-muted">to:</p>
                <p className="mt-2 font-heading text-lg font-semibold text-accent-deep">&quot;I know what to expect.&quot;</p>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted">That transition is at the heart of Brancho.</p>
            </motion.div>

            {/* 04 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">04 — OUR VISION</span>
              <p className="mt-2 font-heading text-xl font-semibold text-ink">To become India&apos;s most trusted home-services ecosystem.</p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Brancho&apos;s long-term ambition is not limited to becoming a place where customers book individual
                services. We envision a platform capable of becoming an integral part of how households maintain,
                repair, manage and improve their homes.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Today, a customer may think: &quot;I need an electrician.&quot; Our long-term vision is for the customer
                to think: &quot;I need Brancho.&quot; That distinction matters. It means Brancho is no longer associated
                with a single service category. It becomes associated with the home itself.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                From an urgent repair to routine maintenance, from a single technician to recurring home-care
                requirements, Brancho aims to build the infrastructure that makes these experiences easier to manage.
              </p>
            </motion.div>

            {/* 05 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">05 — OUR MISSION</span>
              <p className="mt-2 font-heading text-xl font-semibold text-ink">To organise the fragmented home-services ecosystem through technology, trusted professionals and disciplined operations.</p>
              <div className="mt-6 space-y-4">
                {[
                  { n: "01", title: "Organise Demand", desc: "Make it easier for households to discover and request the services they need." },
                  { n: "02", title: "Organise Supply", desc: "Help skilled professionals participate in a structured ecosystem where identity, reputation, availability and service quality can be managed more effectively." },
                  { n: "03", title: "Build Trust", desc: "Create systems that reduce uncertainty before, during and after a service." },
                ].map((item) => (
                  <div key={item.n} className="flex items-start gap-4 rounded-2xl border border-line bg-surface-soft p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy text-xs font-bold text-gold">{item.n}</span>
                    <div>
                      <p className="font-heading text-sm font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted">
                Better organisation creates better experiences. Better experiences create trust. Trust creates
                repeat usage. Repeat usage creates a stronger ecosystem.
              </p>
            </motion.div>

            {/* 06 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">06 — WHAT BRANCHO STANDS FOR</span>
              <div className="mt-6 space-y-4">
                {[
                  { icon: ShieldCheck, title: "Trust", desc: "Trust is not a marketing slogan at Brancho. It is an operating principle. A customer should be able to feel confident about engaging a professional through the platform. A professional should feel confident that the platform provides a fair and structured environment in which to work." },
                  { icon: Eye, title: "Transparency", desc: "The customer should not have to navigate unnecessary uncertainty. Where information is available, it should be communicated clearly. Where pricing depends on inspection or the nature of the job, that should be made clear. Where limitations exist, they should not be hidden. Clarity creates confidence." },
                  { icon: Users, title: "Professionalism", desc: "Home services are often treated as informal transactions. Brancho's ambition is different. We want the people delivering these services to be recognised as professionals performing skilled work. That means standards matter: conduct, communication, punctuality, workmanship, cleanliness, accountability, customer interaction." },
                  { icon: Scale, title: "Accountability", desc: "A service does not end simply because the professional leaves the customer's home. A serious service platform needs mechanisms for: feedback → complaints → investigation → resolution → learning. Accountability protects both sides of the ecosystem." },
                  { icon: HeartHandshake, title: "Respect", desc: "Brancho exists for customers. But it also exists for the professionals who perform the work. The electrician, plumber, technician, carpenter, cleaner or specialist should not simply be treated as supply. They are a core part of the product experience." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-line bg-surface p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-gold">
                        <item.icon size={16} />
                      </span>
                      <h3 className="font-heading text-base font-semibold text-ink">{item.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 07 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">07 — THE BRANCHO DIFFERENCE</span>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Brancho is not intended to compete purely on the number of services listed on a platform.
                The real differentiation is the system behind the service.
              </p>
              <p className="mt-4 text-sm text-muted">A traditional transaction can look like:</p>
              <p className="mt-2 text-sm text-muted">Customer → Local Contact → Negotiation → Service → Payment</p>
              <p className="mt-4 text-sm font-semibold text-ink">Brancho aims to build:</p>
              <div className="mt-4 rounded-2xl border border-line bg-surface-soft p-6">
                <ol className="space-y-2 text-sm text-muted">
                  <li>Customer</li>
                  <li className="pl-4">→ Service Discovery</li>
                  <li className="pl-4">→ Professional Selection</li>
                  <li className="pl-4">→ Structured Booking</li>
                  <li className="pl-4">→ Transparent Communication</li>
                  <li className="pl-4">→ Service Delivery</li>
                  <li className="pl-4">→ Feedback &amp; Quality</li>
                  <li className="pl-4">→ Support</li>
                  <li className="pl-4">→ Repeat Relationship</li>
                </ol>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The difference is not merely digitalisation. It is standardisation. Technology is the enabler.
                Operations are the backbone. Professionals are the delivery engine. Trust is the outcome.
              </p>
            </motion.div>

            {/* 08 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">08 — BRANCHO AS AN ECOSYSTEM</span>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Brancho&apos;s opportunity extends beyond individual bookings. Over time, the ecosystem can connect:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Users, title: "Households", desc: "People who need reliable home services." },
                  { icon: Zap, title: "Professionals", desc: "Individuals and teams who deliver skilled services." },
                  { icon: Globe, title: "Service Businesses", desc: "Established local businesses looking for organised demand." },
                  { icon: TrendingUp, title: "Partners", desc: "Organisations that interact with homeowners and properties." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-line bg-surface-soft p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <item.icon size={15} />
                    </span>
                    <div>
                      <p className="font-heading text-sm font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted">
                This creates a network where every additional participant can strengthen the overall system.
                More customers create more demand. More demand attracts more professionals. More professionals
                improve availability. More completed services generate more operational data. Better data can
                improve matching and service quality. Better experiences encourage repeat customers. And repeat
                customers strengthen the economics of the platform.
              </p>
              <p className="mt-4 text-base font-semibold text-ink">That is the Brancho ecosystem flywheel.</p>
            </motion.div>

            {/* 09 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">09 — CUSTOMER VALUE</span>
              <p className="mt-4 text-base leading-relaxed text-muted">
                For the customer, Brancho is fundamentally about reducing friction. Instead of:
                &quot;Who should I call?&quot; — Brancho aims to provide: &quot;Here are the professionals and services
                available to solve this.&quot; Instead of: &quot;Is this person reliable?&quot; — the platform can provide
                relevant information and signals that help the customer make a decision. Instead of:
                &quot;What happens if there is a problem?&quot; — there is a defined support structure. Instead of:
                &quot;I&apos;ll save this number somewhere.&quot; — the relationship can exist inside an organised platform.
              </p>
              <p className="mt-4 text-base font-semibold text-ink">
                Brancho turns a fragmented service transaction into a structured customer experience.
              </p>
            </motion.div>

            {/* 10 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">10 — PROFESSIONAL VALUE</span>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Brancho&apos;s value proposition must work on the supply side as well. A skilled professional should
                have the opportunity to build more than a list of phone numbers in a customer&apos;s contact book.
                Through a structured ecosystem, Brancho can help professionals develop:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Digital Identity", desc: "A professional presence within the platform." },
                  { title: "Reputation", desc: "A history of service experiences and customer feedback." },
                  { title: "Discoverability", desc: "Greater access to relevant customers." },
                  { title: "Structure", desc: "Tools for managing work and service interactions." },
                  { title: "Opportunity", desc: "Access to new sources of demand." },
                  { title: "Growth", desc: "The potential to move from informal individual work toward a more organised professional business." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-line bg-surface-soft p-5">
                    <p className="font-heading text-sm font-semibold text-ink">{item.title}</p>
                    <p className="mt-2 text-sm text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted">
                This is important because Brancho does not win by extracting value from professionals.
                Brancho wins when the ecosystem creates value for both sides.
              </p>
            </motion.div>

            {/* 11 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">11 — THE BRANCHO STANDARD</span>
              <p className="mt-4 text-base leading-relaxed text-muted">
                As Brancho grows, the brand must mean something specific. A customer seeing the Brancho name
                should associate it with:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Verified", "Professional", "Transparent", "Accountable", "Reliable"].map((word) => (
                  <span key={word} className="rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white">{word}</span>
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted">
                These cannot remain advertising words. They must become operational standards. If Brancho says
                a professional is verified, there must be a verification process. If Brancho promises
                transparency, the service experience must reflect it. If Brancho claims professionalism,
                professionals must be held to measurable standards. If Brancho promises accountability,
                there must be a functioning resolution mechanism. The brand promise must always be backed
                by the operating system.
              </p>
            </motion.div>

            {/* 12 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">12 — WHAT WE ARE BUILDING</span>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Brancho is ultimately building three things simultaneously:
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { n: "01", title: "A Customer Platform", desc: "A simple and reliable way for households to access services." },
                  { n: "02", title: "A Professional Network", desc: "A structured ecosystem for skilled service providers." },
                  { n: "03", title: "A Trust Infrastructure", desc: "Systems that create confidence between the two." },
                ].map((item) => (
                  <div key={item.n} className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-6">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy text-xs font-bold text-gold">{item.n}</span>
                    <div>
                      <p className="font-heading text-base font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted">
                These three components are inseparable. Without customers, professionals have no demand.
                Without professionals, customers have no service. Without trust, neither side has a reason to stay.
              </p>
            </motion.div>

            {/* 13 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">13 — OUR LONG-TERM AMBITION</span>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Brancho begins with home services. But the ambition is larger. We want to build a company
                capable of becoming a long-term infrastructure layer for the Indian home. A platform that
                understands: what households need, which professionals can provide it, how services should
                be delivered, how quality should be measured, and how trust should be maintained.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The opportunity is not simply to create another app. The opportunity is to organise an
                enormous offline economy through technology and operational discipline.
              </p>
            </motion.div>

            {/* 14 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">14 — THE BRANCHO PHILOSOPHY</span>
              <div className="mt-6 rounded-2xl border border-line bg-surface-soft p-6">
                <ul className="space-y-3 text-base leading-relaxed text-muted">
                  <li>We believe that convenience without trust is fragile.</li>
                  <li>We believe that technology without execution is useless.</li>
                  <li>We believe that scale without standards is dangerous.</li>
                  <li>We believe that growth without accountability destroys brands.</li>
                </ul>
                <p className="mt-4 text-sm text-muted">
                  And we believe that the strongest businesses are built when customers, professionals and the
                  company all have a reason to participate in the ecosystem.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {["Build trust before scale.", "Build systems before complexity.", "Build quality before volume.", "Build for the long term."].map((line) => (
                  <div key={line} className="flex items-center gap-3">
                    <CircleCheck size={16} className="shrink-0 text-accent" />
                    <p className="text-sm font-semibold text-ink">{line}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 15 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-accent-deep">15 — THE BRANCHO PROMISE</span>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We want every interaction with Brancho to move the customer one step closer to a simple belief:
              </p>
              <p className="mt-4 font-heading text-xl font-semibold text-ink">
                &quot;I can trust Brancho to help me get this done.&quot;
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                That trust will not come from a logo. It will not come from advertising. It will not come from
                saying &quot;India&apos;s #1&quot; before earning it. It will come from thousands, then millions, of individual
                experiences where Brancho consistently does what it said it would do.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                One service. One professional. One household. One experience at a time. That is how the brand
                will be built.
              </p>
            </motion.div>

            {/* Closing */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-3xl bg-navy p-10 text-center text-white">
              <div className="dot-grid-light absolute inset-0 opacity-30" />
              <p className="relative font-heading text-2xl font-semibold sm:text-3xl">
                We are building more than a home-services platform.
              </p>
              <p className="relative mt-4 text-base text-white/70">
                We are building the trust infrastructure behind the modern Indian home.
              </p>
              <div className="relative mx-auto mt-8 h-px w-16 bg-gold/40" />
              <p className="relative mt-6 font-heading text-sm font-semibold tracking-wide text-gold">
                Trusted professionals. Transparent service. Better homes.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl bg-navy p-10 text-white"
            >
              <div className="dot-grid-light absolute inset-0 opacity-30" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                <Target size={24} />
              </span>
              <h2 className="relative mt-6 font-heading text-2xl font-semibold">Our Mission</h2>
              <p className="relative mt-4 text-sm leading-relaxed text-white/70">
                To make world-class home services a daily reality for every Indian
                family — through verification, transparency and respect for the
                professionals who do the work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-line bg-surface-soft p-10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Eye size={24} />
              </span>
              <h2 className="mt-6 font-heading text-2xl font-semibold text-ink">Our Vision</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                A future where no family ever worries about who enters their home —
                and where every skilled professional in India enjoys dignified,
                stable and fairly-paid work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder profile */}
      <section className="relative overflow-hidden bg-navy py-24 text-white lg:py-32">
        <div className="dot-grid-light absolute inset-0 opacity-25" />
        <div className="container-wide relative">
          <div className="mx-auto max-w-3xl space-y-20">

            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                The Founder
              </span>
              <h2 className="mt-6 text-balance font-heading text-3xl font-semibold sm:text-4xl">Bhavy Rajpopat</h2>
              <p className="mt-3 text-sm font-semibold text-gold">Founder, Brancho</p>
            </motion.div>

            {/* It started with curiosity */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-gold">IT STARTED WITH CURIOSITY.</span>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                My journey with Brancho didn&apos;t begin with funding, a team, or a business plan. It began
                with curiosity. In August 2025, late one night, I was sitting in a library, searching for
                things like:
              </p>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-white/60">&quot;How to start a business?&quot;</p>
                <p className="mt-2 text-sm text-white/60">&quot;How to build a startup?&quot;</p>
              </div>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                At the time, I was simply a 16-year-old student trying to understand entrepreneurship. I
                didn&apos;t know how companies were built. I didn&apos;t know how products were developed. I
                didn&apos;t have a team, funding, or a roadmap. I was just trying to understand how an idea
                could become something real.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">Then one simple thought came to me:</p>
              <p className="mt-3 font-heading text-lg font-semibold text-white">
                What if there was a WhatsApp group where people could easily find electricians, plumbers,
                AC technicians and other service professionals?
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                It was a small idea. But I decided to explore it.
              </p>
            </motion.div>

            {/* From an idea to a real problem */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-gold">FROM AN IDEA TO A REAL PROBLEM</span>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                As I thought about the idea more deeply, I realised something important. A WhatsApp group
                could certainly connect people. It could create value. But value alone doesn&apos;t necessarily
                create a sustainable business. There had to be something more.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                So I started learning. I started experimenting. I started building. And my first attempt was
                a website. It failed.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                That failure taught me something that research alone couldn&apos;t. I realised that in smaller
                cities, people don&apos;t necessarily want to open a website just to book a local service.
                They wanted something:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["faster", "simpler", "more convenient"].map((word) => (
                  <span key={word} className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">{word}.</span>
                ))}
              </div>
              <p className="mt-4 text-base font-semibold text-white">
                That was the moment the direction changed. The website became an app.
              </p>
            </motion.div>

            {/* Building with no playbook */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-gold">BUILDING WITH NO PLAYBOOK</span>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                I had never built a product before. I had no team. I had very little understanding of how
                startups actually worked. But I had one advantage:
              </p>
              <p className="mt-4 text-base font-semibold text-white">I was willing to learn.</p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Every day after school, I spent hours learning, building, testing and improving. There was
                no perfectly structured startup journey. There was simply:
              </p>
              <p className="mt-3 font-heading text-lg font-semibold text-gold">
                Learn → Build → Test → Fail → Fix → Repeat.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                And somewhere in that process, the idea that had once existed only as a thought began turning
                into something tangible. Brancho was taking shape.
              </p>
            </motion.div>

            {/* The first real test */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-gold">THE FIRST REAL TEST</span>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Building the product was only one part of the challenge. The bigger challenge was convincing
                people to believe in something that didn&apos;t yet have a proven track record. I started
                visiting local shops, appliance stores, service providers, and professionals across the city.
                I asked them to join the platform.
              </p>
              <p className="mt-4 text-base font-semibold text-white">Most of them said no.</p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Some didn&apos;t understand what Brancho was. Some couldn&apos;t see why customers would use
                an app for local services. Some simply didn&apos;t believe the idea would work. There were
                plenty of rejections. And every rejection forced me to ask the same question:
              </p>
              <p className="mt-3 font-heading text-lg font-semibold text-gold">&quot;What am I missing?&quot;</p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Instead of treating rejection as the end, I treated it as information. Every conversation
                taught me something about the market, the professionals and the people Brancho was ultimately
                being built for.
              </p>
            </motion.div>

            {/* October 2025 — The refrigerator */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-gold">OCTOBER 2025</span>
              <p className="mt-2 font-heading text-xl font-semibold text-white">Then came one of the hardest moments.</p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                In October 2025, after months of effort, the product suffered a major technical setback. It
                felt like everything I had worked for had disappeared. For the first time, the possibility
                of giving up felt real. And I seriously considered it.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                For several weeks, I stepped away from the idea. No building. No experimenting. No trying
                to fix it. Just distance.
              </p>
              <p className="mt-4 text-sm italic text-white/50">
                Sometimes you need to step away from something to understand whether you actually want to
                continue.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Then something happened that changed the direction of the journey.
              </p>
            </motion.div>

            {/* The refrigerator */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-gold">THE REFRIGERATOR</span>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                One day, our refrigerator stopped working at home. Like many families, we started calling
                different people. Searching for contacts. Trying to find someone reliable. Trying to figure
                out who could actually solve the problem.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                And suddenly, the problem I had been trying to solve as a startup founder was sitting inside
                my own home.
              </p>
              <p className="mt-4 text-base font-semibold text-white">
                That moment made something clear. This wasn&apos;t just my problem. It was a problem
                experienced by countless households every day.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                The idea suddenly felt real again. Not as a startup concept. Not as an app. But as a real
                problem affecting real people. And that brought me back to Brancho.
              </p>
            </motion.div>

            {/* Starting again */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-gold">STARTING AGAIN</span>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                I spoke with my father about rebuilding the project. Resources were limited. Building an app
                was expensive. There were still plenty of reasons to stop.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                But there was also something that mattered more:
              </p>
              <p className="mt-3 font-heading text-lg font-semibold text-gold">My family believed in me.</p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Despite the challenges, they supported the vision and gave me the confidence to continue. So
                I started again. Not from where I had left off. But from what I had learned.
              </p>
            </motion.div>

            {/* Rebuilding Brancho */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-gold">REBUILDING BRANCHO</span>
              <p className="mt-4 text-base leading-relaxed text-white/70">The months that followed were filled with:</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["learning", "rebuilding", "testing", "failing", "fixing", "trying again"].map((word) => (
                  <span key={word} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">{word}.</span>
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                There were no shortcuts. The product had to be rebuilt. The idea had to be refined. The
                assumptions had to be challenged. And slowly, the pieces started coming together. Until
                eventually, the idea that had started as a question in a library was ready to become
                something real.
              </p>
            </motion.div>

            {/* Launch */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-3xl border border-gold/20 bg-gold/5 p-8">
              <span className="font-heading text-xs font-bold text-gold">23 FEBRUARY 2026</span>
              <p className="mt-2 font-heading text-xl font-semibold text-white">Brancho officially launched.</p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                After months of rebuilding, Brancho officially launched on 23 February 2026. What had started
                as a simple thought had become a functioning platform. A platform built by a student who, only
                months earlier, had been sitting in a library searching:
              </p>
              <p className="mt-3 font-heading text-lg font-semibold text-gold">&quot;How do I start a business?&quot;</p>
            </motion.div>

            {/* What came next */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-gold">WHAT CAME NEXT</span>
              <p className="mt-4 text-base leading-relaxed text-white/70">Today, Brancho has grown to:</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {[
                  { value: "2,000+", label: "Users" },
                  { value: "200+", label: "Completed Bookings" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                    <p className="font-heading text-2xl font-bold text-gold">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                But to me, these numbers represent much more than growth. They represent every rejection,
                every technical setback, every late night, every failed attempt, every lesson. And most
                importantly: every person who believed in the vision when it was still just an idea.
              </p>
            </motion.div>

            {/* Numbers aren't the whole story */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-gold">THE NUMBERS AREN&apos;T THE WHOLE STORY</span>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Honestly, when I first started, I never imagined Brancho would come this far. There were
                failures. There were rejections. There were technical problems. And there were many moments
                when giving up felt easier than continuing.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">But every challenge taught me something.</p>
              <div className="mt-4 space-y-2">
                {[
                  "Every failure forced me to improve.",
                  "Every setback pushed me one step forward.",
                ].map((line) => (
                  <div key={line} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <p className="text-sm text-white/70">{line}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                And eventually, I understood something:
              </p>
              <p className="mt-3 font-heading text-lg font-semibold text-white">
                Progress doesn&apos;t always look like growth.
              </p>
              <div className="mt-4 space-y-2">
                {[
                  "Sometimes progress looks like rebuilding something that broke.",
                  "Sometimes it looks like hearing &quot;no&quot; for the tenth time.",
                  "Sometimes it looks like learning something completely new at midnight.",
                  "And sometimes it simply means deciding to continue when quitting would be easier.",
                ].map((line) => (
                  <div key={line} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <p className="text-sm text-white/70" dangerouslySetInnerHTML={{ __html: line }} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What makes me happiest */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-gold">WHAT MAKES ME HAPPIEST</span>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                What makes me happiest isn&apos;t the numbers. It&apos;s knowing that something that once
                existed only as an idea is now helping real people every day. That transformation means more
                than any single metric.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Because the original question was never: &quot;How big can I make this?&quot;
              </p>
              <p className="mt-2 text-base font-semibold text-white">
                The first question was simply: &quot;Can I build something useful?&quot;
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                And today, Brancho is beginning to answer that question.
              </p>
            </motion.div>

            {/* But this is only the beginning */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="font-heading text-xs font-bold text-gold">BUT THIS IS ONLY THE BEGINNING</span>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Brancho Home and Brancho Urgent Care are already live. But the vision doesn&apos;t stop there.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Brancho Students", desc: "A platform being imagined around students, opportunities, learning and growth." },
                  { title: "Brancho Smart Assist", desc: "An initiative envisioned around using technology to simplify everyday experiences in smarter ways." },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="font-heading text-sm font-semibold text-gold">{item.title}</p>
                    <p className="mt-2 text-sm text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                These aren&apos;t the end products. They represent something bigger: the willingness to keep
                exploring what Brancho can become.
              </p>
            </motion.div>

            {/* Journey continues */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <p className="text-base leading-relaxed text-white/70">
                I don&apos;t know exactly where this journey will lead. And honestly, I don&apos;t think I
                need to. Because entrepreneurship isn&apos;t about knowing every step ten years in advance.
                It&apos;s about having enough conviction to take the next step.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
                <ol className="space-y-2 text-sm text-white/60">
                  <li>I started with a question.</li>
                  <li className="pl-4">Then came an idea.</li>
                  <li className="pl-4">Then a failed website.</li>
                  <li className="pl-4">Then an app.</li>
                  <li className="pl-4">Then rejection.</li>
                  <li className="pl-4">Then a technical setback.</li>
                  <li className="pl-4">Then a moment when I nearly gave up.</li>
                  <li className="pl-4">Then a broken refrigerator.</li>
                  <li className="pl-4">Then a conversation with my father.</li>
                  <li className="pl-4">Then rebuilding.</li>
                  <li className="pl-4">Then launching.</li>
                  <li className="pl-4 font-semibold text-gold">And now — Brancho.</li>
                </ol>
              </div>
            </motion.div>

            {/* Closing */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
              <span className="font-heading text-xs font-bold text-gold">THE JOURNEY CONTINUES.</span>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Brancho is not the destination. It is only the beginning of a much larger journey. I started
                this journey at 16 with curiosity and very little certainty. Today, I have something real to
                build. And there is still a long way to go.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                I don&apos;t know exactly where Brancho will be tomorrow. I don&apos;t know how large it will
                become. But I know one thing:
              </p>
              <p className="mt-6 font-heading text-2xl font-bold text-white">I&apos;LL KEEP BUILDING.</p>
              <p className="mt-2 font-heading text-2xl font-bold text-gold">AND BRANCHO WILL KEEP GROWING.</p>
              <div className="mx-auto mt-8 h-px w-16 bg-gold/40" />
              <p className="mt-6 font-heading text-lg font-semibold text-white">Bhavy Rajpopat</p>
              <p className="mt-1 text-sm text-white/50">Founder — Brancho</p>
              <p className="mt-2 text-xs text-white/40">August 2025 → February 2026 → The journey continues.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-soft py-24 lg:py-32">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Core Values"
            title="The principles we never trade away"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.08 }}
                className="rounded-2xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
              >
                <span className="font-heading text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Leadership"
            title="The team building India's most trusted home services"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 4) * 0.08 }}
                className="group overflow-hidden rounded-3xl border border-line bg-surface-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-navy/15"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={person.image}
                    alt={`${person.name} — ${person.role}`}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-ink">{person.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-widest text-accent-deep">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology + Trust & Safety */}
      <section className="bg-surface-soft py-24 lg:py-32">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-2">
            {PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                className={`rounded-3xl p-10 ${
                  idx === 0
                    ? "bg-navy text-white"
                    : "border border-line bg-surface"
                }`}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    idx === 0 ? "bg-gold/15 text-gold" : "bg-accent/10 text-accent"
                  }`}
                >
                  <pillar.icon size={24} />
                </span>
                <h2 className={`mt-6 font-heading text-2xl font-semibold ${idx === 0 ? "text-white" : "text-ink"}`}>
                  {pillar.title}
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {pillar.items.map((item) => (
                    <li key={item} className={`flex items-start gap-3 text-sm ${idx === 0 ? "text-white/70" : "text-muted"}`}>
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="bg-surface py-20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 rounded-3xl border border-line bg-surface-soft p-10 text-center sm:flex-row sm:text-left"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-gold">
                <HeartHandshake size={22} />
              </span>
              <div>
                <h2 className="font-heading text-2xl font-semibold text-ink">Come build with us</h2>
                <p className="mt-2 text-sm text-muted">
                  We&apos;re hiring engineers, operators and changemakers across India.
                </p>
              </div>
            </div>
            <Link
              href="/careers"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-navy-soft"
            >
              View Openings
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
