/*
 * Design reminder — Integrated ClearerPaths homepage
 * This page brings the fast-moving one-page website showcase into the existing master site shell.
 * Do not add a second top header or anchor navigation. The shared ClearerPaths navigation must remain
 * the only master header across the site.
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock3,
  Gauge,
  Layers3,
  MoveRight,
  Phone,
  PoundSterling,
  Sparkles,
} from "lucide-react";

const showcaseImages = [
  {
    title: "Finance",
    theme: "finance",
    palette: "Emerald · Cyan · Gold",
    blurb: "Bright, premium finance layouts with real colour, stronger trust signals, and crisp dashboard storytelling.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/cdS9QgbPSPGzYdnRUui5Kp/light-finance-showcase-v2-JbF4xthtGAxp8T7GrLPTRY.webp",
  },
  {
    title: "Solicitors",
    theme: "legal",
    palette: "Burgundy · Amber · Stone",
    blurb: "Warm, established legal styling with genuine richness instead of flat dark tinting.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/cdS9QgbPSPGzYdnRUui5Kp/light-legal-showcase-v2-HA9sHKYTD6C8DhWZZsN3bC.webp",
  },
  {
    title: "Manufacturing",
    theme: "manufacturing",
    palette: "Cobalt · Orange · Silver",
    blurb: "Energetic industrial presentation with sharper product framing and vivid technical contrast.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/cdS9QgbPSPGzYdnRUui5Kp/light-manufacturing-showcase-v2-ZCWCb9TqQZwXZ9zXpu5i7h.webp",
  },
  {
    title: "Creative",
    theme: "creative",
    palette: "Coral · Aqua · Lilac",
    blurb: "Lively studio work with gallery-style white space and genuinely vibrant art direction.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/cdS9QgbPSPGzYdnRUui5Kp/light-creative-showcase-v2-Jkbdj3uJf9gSfXBPPzXroJ.webp",
  },
];

const industries = [
  "Designers",
  "Finance",
  "Solicitors",
  "Manufacturers",
  "Property",
  "Consultants",
  "Healthcare",
  "Recruitment",
  "Construction",
  "Hospitality",
];

const metrics = [
  { value: "48", suffix: "hrs", label: "Rapid build window" },
  { value: "799", suffix: "package", label: "7-page offer" },
  { value: "10", suffix: "clients", label: "Free domain launch offer" },
];

const deliverables = [
  "7 completed website pages",
  "Images included",
  "Words and messaging included",
  "Hosting included",
  "Delivered by a UK company",
  "Launch-ready visual system",
];

const process = [
  {
    step: "01",
    title: "Brief in the morning",
    text: "You send the sector, offer, visual tone, and contact priorities. We lock the direction quickly and keep the process focused.",
  },
  {
    step: "02",
    title: "Build the same day",
    text: "We shape the message, layout, colour system, and premium presentation flow immediately so momentum stays high.",
  },
  {
    step: "03",
    title: "Refine and launch",
    text: "We tighten the details, finalise the pages, and package the site so it feels polished, current, and commercially ready.",
  },
];

export default function Home() {
  const marqueeItems = [...showcaseImages, ...showcaseImages];
  const tickerItems = [...industries, ...industries, ...industries];

  return (
    <div className="homepage-showcase min-h-screen bg-background pt-24 text-foreground md:pt-28">
      <main>
        <section className="hero-grid relative overflow-hidden border-b border-black/6">
          <div className="hero-noise" />
          <div className="hero-glow hero-glow-left" />
          <div className="hero-glow hero-glow-right" />

          <div className="container relative grid gap-14 py-16 md:py-24 xl:grid-cols-[1.05fr_1.05fr] xl:items-center xl:gap-18 xl:py-28">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/8 bg-white px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-slate-600 shadow-[0_16px_45px_rgba(15,23,42,0.06)]">
                <Sparkles className="h-4 w-4 text-[var(--accent-strong)]" />
                Stunning website snapshots delivered in under 48 hours
              </div>

              <p className="max-w-md text-sm uppercase tracking-[0.34em] text-slate-500">
                Varied. Stunning. Commercial. Built for businesses that need to move now.
              </p>

              <h1 className="font-display mt-5 max-w-4xl text-[clamp(4.3rem,10vw,9.4rem)] uppercase leading-[0.88] tracking-[0.02em] text-slate-950">
                Stunning sites.
                <span className="block text-[var(--accent-strong)]">Real colour.</span>
                <span className="block">Under 48 hours.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                A bright homepage built like a rolling presentation, showing what ClearerPaths can create for designers,
                finance firms, solicitors, manufacturers, and other sectors that need a sharp website fast.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full bg-slate-950 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-slate-800">
                    Start your 48-hour brief
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/get-leads">
                  <Button size="lg" variant="outline" className="rounded-full border-black/10 bg-white px-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 hover:bg-slate-50">
                    See Get Leads
                  </Button>
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {metrics.map((item) => (
                  <div key={item.label} className="glass-panel rounded-[1.8rem] p-5">
                    <p className="font-display text-5xl uppercase leading-none text-slate-950">
                      {item.value}
                      <span className="ml-2 text-lg text-[var(--accent-strong)]">{item.suffix}</span>
                    </p>
                    <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative xl:pl-8">
              <div className="showcase-shell floating-panel overflow-hidden rounded-[2rem] border border-black/6 p-3 shadow-[0_40px_120px_rgba(148,163,184,0.25)]">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/cdS9QgbPSPGzYdnRUui5Kp/light-hero-showcase-collage-UyGTCThus47dkG4QiKDr3N.webp"
                  alt="Premium showcase of colourful multi-industry website concepts"
                  className="h-full min-h-[420px] w-full rounded-[1.4rem] object-cover"
                />
              </div>

              <div className="floating-badge left-[-2%] top-[8%] hidden xl:block">
                <Clock3 className="h-4 w-4 text-[var(--accent-strong)]" />
                <span>Quick-turn build system</span>
              </div>
              <div className="floating-badge right-[-2%] top-[40%] hidden xl:block">
                <Gauge className="h-4 w-4 text-[var(--accent-strong)]" />
                <span>Brighter premium presentation</span>
              </div>
              <div className="floating-badge bottom-[6%] left-[6%] hidden xl:block">
                <Layers3 className="h-4 w-4 text-[var(--accent-strong)]" />
                <span>Distinct sector colour directions</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black/6 bg-white py-5">
          <div className="ticker-wrap">
            <div className="ticker-track">
              {tickerItems.map((item, index) => (
                <span key={`${item}-${index}`} className="ticker-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24">
          <div className="container">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="section-kicker">Snapshot reel</p>
                <h2 className="section-title max-w-lg">
                  Clean white space outside. Real colour and variety inside every sample.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                The reel behaves like a bright rolling gallery. Each frame has its own palette and personality, so the
                samples feel like genuinely different website directions rather than one style repeated.
              </p>
            </div>
          </div>

          <div className="space-y-5 overflow-hidden pb-4">
            <div className="marquee-row marquee-row-left">
              <div className="marquee-track">
                {marqueeItems.map((item, index) => (
                  <article key={`${item.title}-top-${index}`} className={`showcase-card showcase-card-${item.theme}`}>
                    <div className="showcase-image-wrap">
                      <img src={item.image} alt={`${item.title} website showcase`} className="showcase-image" />
                    </div>
                    <div className="showcase-copy">
                      <p className="showcase-tag">{item.title}</p>
                      <p className="showcase-palette">{item.palette}</p>
                      <h3>{item.title} websites at speed</h3>
                      <p>{item.blurb}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="marquee-row marquee-row-right">
              <div className="marquee-track">
                {[...marqueeItems].reverse().map((item, index) => (
                  <article key={`${item.title}-bottom-${index}`} className={`showcase-card showcase-card-alt showcase-card-${item.theme}`}>
                    <div className="showcase-copy">
                      <p className="showcase-tag">48-hour delivery</p>
                      <p className="showcase-palette">{item.palette}</p>
                      <h3>{item.title} presentation snapshot</h3>
                      <p>{item.blurb}</p>
                    </div>
                    <div className="showcase-image-wrap">
                      <img src={item.image} alt={`${item.title} industry website example`} className="showcase-image" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/6 bg-[linear-gradient(180deg,rgba(250,250,252,1),rgba(244,247,251,1))] py-24">
          <div className="container grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
            <div>
              <p className="section-kicker">What is included</p>
              <h2 className="section-title max-w-xl">Designed to look premium, built to get moving quickly.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                This is a fuller fast-turn website offer for businesses that need to stop looking dated and get a sharper,
                more current presence live without waiting through a long agency process.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div key={item} className="glass-panel rounded-[1.7rem] p-6">
                  <p className="flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-slate-700">
                    <MoveRight className="h-4 w-4 text-[var(--accent-strong)]" />
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
              <div>
                <p className="section-kicker">48-hour workflow</p>
                <h2 className="section-title max-w-lg">A simple production rhythm built for speed and clean delivery.</h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Quick delivery works best when the structure is disciplined. The page, the visuals, the palette, and the
                offer are arranged in a clear sprint so the result feels bright, fast, and commercially strong.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {process.map((item) => (
                <article key={item.step} className="process-card">
                  <p className="font-display text-6xl text-[var(--accent-strong)]">{item.step}</p>
                  <h3 className="mt-8 text-2xl uppercase tracking-[0.08em] text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container">
            <div className="pricing-band relative overflow-hidden rounded-[2.4rem] border border-black/6 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <div className="pricing-glow" />
              <div className="relative grid gap-10 xl:grid-cols-[1.16fr_0.84fr] xl:items-center">
                <div>
                  <p className="section-kicker">Offer</p>
                  <h2 className="section-title max-w-2xl">7 pages completed for £799, with images, words, hosting, and UK delivery included.</h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    Built for businesses that do not want to lose clients to a stale outdated site. The first 10 clients can
                    also get their domain name of choice included free as part of the current launch offer.
                  </p>
                </div>

                <div className="glass-panel rounded-[2rem] p-7 sm:p-8">
                  <p className="flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-slate-500">
                    <PoundSterling className="h-4 w-4 text-[var(--accent-strong)]" />
                    Fast full-site offer
                  </p>
                  <p className="font-display mt-4 text-[clamp(4rem,8vw,6rem)] uppercase leading-none text-slate-950">
                    £799
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[var(--accent-strong)]">7 pages completed</p>
                  <p className="mt-6 text-base leading-8 text-slate-600">
                    Clear, bold, current design with the writing, visuals, hosting, and launch packaging already handled.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href="/contact">
                      <Button className="rounded-full bg-slate-950 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-slate-800">
                        Contact us today
                      </Button>
                    </Link>
                    <a href="tel:02035183702">
                      <Button variant="outline" className="rounded-full border-black/10 bg-white px-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 hover:bg-slate-50">
                        <Phone className="mr-2 h-4 w-4" />
                        Call 0203 518 3702
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
