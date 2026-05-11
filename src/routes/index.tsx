import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-township.jpg";
import gateImg from "@/assets/gate-entrance.jpg";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import {
  MapPin,
  ShieldCheck,
  TrendingUp,
  Trees,
  Zap,
  Droplets,
  Camera,
  Dumbbell,
  Baby,
  Route as RouteIcon,
  FileCheck2,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const amenities = [
  { icon: Trees, label: "Landscaped Gardens" },
  { icon: Zap, label: "24x7 Electricity" },
  { icon: Droplets, label: "Underground Water" },
  { icon: Camera, label: "CCTV Surveillance" },
  { icon: Dumbbell, label: "Clubhouse & Gym" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: RouteIcon, label: "Wide Internal Roads" },
  { icon: ShieldCheck, label: "Gated Security" },
];

const trustPoints = [
  {
    icon: MapPin,
    title: "Prime Nagpur Location",
    desc: "Strategically located with seamless access to NH-44, MIHAN & upcoming Metro corridor.",
  },
  {
    icon: FileCheck2,
    title: "Clear Legal Titles",
    desc: "100% clear titles, MahaRERA approved, and bank-loan ready from leading lenders.",
  },
  {
    icon: TrendingUp,
    title: "High Appreciation Zone",
    desc: "Nagpur's fastest-growing investment corridor — value expected to double in 5 years.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <WhatsAppFloat />

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground font-bold">
              M
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold text-foreground md:text-base">Mauli Town 36</div>
              <div className="text-[10px] text-muted-foreground md:text-xs">Nagpur</div>
            </div>
          </div>
          <a
            href="tel:+917218620398"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 md:text-sm"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Aerial view of Mauli Town 36 township in Nagpur"
          width={1600}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5" />
                MahaRERA Approved Project
              </span>
              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Own Your Plot at <span className="text-[oklch(0.85_0.16_85)]">Mauli Town 36</span>, Nagpur
              </h1>
              <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">
                Premium gated township with world-class amenities, clear legal titles, and unbeatable connectivity.
              </p>

              <div className="mt-6 inline-flex flex-col items-start rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
                <span className="text-xs uppercase tracking-wider text-white/70">Rates Starting At</span>
                <span className="text-3xl font-extrabold text-white md:text-4xl">
                  ₹2,300<span className="text-lg font-semibold text-white/80">/sq.ft.</span>
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#register"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-[image:var(--gradient-gold)] px-7 text-base font-bold text-accent-foreground shadow-[var(--shadow-gold)] transition hover:scale-[1.02]"
                >
                  Book a Site Visit
                </a>
                <a
                  href={`https://wa.me/917218620398?text=${encodeURIComponent("Hi, I'm interested in Mauli Town 36. Please send me the brochure.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-white/40 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Get Brochure on WhatsApp
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
                <span>✓ Bank Loan Approved</span>
                <span>✓ 100% Clear Titles</span>
                <span>✓ Gated Community</span>
              </div>
            </div>

            <div id="register" className="lg:pl-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="border-b bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-3 md:py-16">
          {trustPoints.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border bg-card p-6 transition hover:shadow-[var(--shadow-elegant)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Lifestyle
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-foreground md:text-4xl">
              World-Class Amenities
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every detail crafted for a premium, secure, and fulfilling lifestyle.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {amenities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex flex-col items-center rounded-xl border bg-card p-5 text-center transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary transition group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="mt-3 text-sm font-semibold text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / connectivity */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
            <img
              src={gateImg}
              alt="Mauli Town 36 entrance gate"
              width={1024}
              height={768}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Connectivity
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-foreground md:text-4xl">
              Perfectly Positioned in Nagpur
            </h2>
            <p className="mt-3 text-muted-foreground">
              Mauli Town 36 sits at the intersection of Nagpur's biggest growth drivers — minutes from key landmarks, with smooth connectivity to the rest of the city.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "10 mins to NH-44 Highway",
                "20 mins to MIHAN SEZ",
                "25 mins to Dr. Babasaheb Ambedkar International Airport",
                "Close to upcoming Metro line & IT Park",
                "Schools, hospitals & malls within 5 km",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-[image:var(--gradient-gold)]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-primary)] text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Limited Plots Remaining — Book Today
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/80">
            Lock in pre-launch pricing at ₹2,300/sq.ft. before rates revise. Schedule a free site visit now.
          </p>
          <a
            href="#register"
            className="mt-7 inline-flex h-12 items-center justify-center rounded-lg bg-[image:var(--gradient-gold)] px-8 text-base font-bold text-accent-foreground shadow-[var(--shadow-gold)] transition hover:scale-[1.02]"
          >
            Register Your Interest
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground font-bold">
                  M
                </div>
                <span className="font-bold text-foreground">Mauli Town 36</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                A premium plotted township in Nagpur. Build your future on land you truly own.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <h4 className="font-semibold text-foreground">Contact</h4>
              <p className="mt-2">Phone / WhatsApp: +91 72186 20398</p>
              <p>Location: Nagpur, Maharashtra</p>
            </div>
            <div className="text-sm">
              <h4 className="font-semibold text-foreground">Regulatory</h4>
              <p className="mt-2 rounded-md border bg-secondary/60 px-3 py-2 font-mono text-foreground">
                MahaRERA No. P50500052037
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Registered with the Maharashtra Real Estate Regulatory Authority.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mauli Town 36. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
