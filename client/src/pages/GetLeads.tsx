/*
 * Design reminder — Existing ClearerPaths lead-generation homepage preserved as the Get Leads page.
 * Keep the proven white/green/navy conversion style intact so the original offering remains available
 * as a dedicated route under the master header.
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail,
  Search,
  Linkedin,
  Facebook,
  Globe,
  Zap,
  Smartphone,
  BarChart3,
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  CheckCircle2,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/m6TrBe4JVRorZBtV3Sne3H/hero-marketing-team-SUPSLBV9akiEusun23zXbW.webp";
const GROWTH_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/m6TrBe4JVRorZBtV3Sne3H/growth-graph-hero-iKM8RuLv9Sqcm3AkyNf52D.webp";
const CONSULTATION_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/m6TrBe4JVRorZBtV3Sne3H/consultation-meeting-BCTuxvqdMXJbhdRjeETxnj.webp";

const graphData = [
  { month: "Jan", leads: 12 },
  { month: "Feb", leads: 19 },
  { month: "Mar", leads: 28 },
  { month: "Apr", leads: 42 },
  { month: "May", leads: 58 },
  { month: "Jun", leads: 71 },
  { month: "Jul", leads: 89 },
  { month: "Aug", leads: 112 },
  { month: "Sep", leads: 134 },
  { month: "Oct", leads: 165 },
  { month: "Nov", leads: 198 },
  { month: "Dec", leads: 240 },
];

const services = [
  {
    icon: Mail,
    title: "Email Outreach",
    desc: "Targeted campaigns that reach decision-makers directly. Our clients see open rates 10x the industry average.",
  },
  {
    icon: Search,
    title: "Google Ads / PPC",
    desc: "Pay-per-click campaigns that put your business in front of people actively searching for what you offer.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Marketing",
    desc: "Professional outreach that connects you with the right people in the right industries.",
  },
  {
    icon: Facebook,
    title: "Facebook Retargeting",
    desc: "Pixel-powered campaigns that bring back visitors who showed interest but didn't convert.",
  },
  {
    icon: Globe,
    title: "Website Design",
    desc: "Modern, conversion-focused websites built to turn visitors into enquiries.",
  },
  {
    icon: Zap,
    title: "Automation Flows",
    desc: "Smart workflows that nurture leads automatically, so no opportunity slips through the cracks.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Custom applications that streamline your operations and give your clients a better experience.",
  },
  {
    icon: BarChart3,
    title: "SEO & Landing Pages",
    desc: "Search-optimised content and dedicated landing pages that capture and convert organic traffic.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function GetLeads() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="mb-6 inline-block rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
                New-Generation Lead Generation
              </span>
              <h1 className="mb-6 text-4xl font-bold leading-[1.1] text-brand-navy md:text-5xl lg:text-6xl">
                Clear Strategy.
                <br />
                <span className="text-brand-green">Real Leads.</span>
                <br />
                More Clients.
              </h1>
              <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600 md:text-xl">
                We help UK businesses generate a consistent flow of genuine, interested enquiries using modern marketing
                techniques that actually work. No fluff. No vanity metrics. Just real leads that become real clients.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="px-8 py-6 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl bg-brand-green hover:bg-brand-green-dark"
                  >
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-brand-navy/20 px-8 py-6 text-base font-semibold text-brand-navy hover:bg-brand-navy/5"
                  >
                    See How It Works
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img src={HERO_IMG} alt="Marketing team analysing growth data" className="h-auto w-full object-cover" />
                <div className="absolute bottom-4 left-4 rounded-xl border border-gray-100 bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green/10">
                      <TrendingUp className="h-5 w-5 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500">Client Lead Growth</p>
                      <p className="text-lg font-bold text-brand-navy">+240%</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-brand-slate py-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <AnimatedCounter end={40} prefix="£" suffix="" label="Return for every £1 on email" />
            <AnimatedCounter end={10} suffix="x" label="Above industry open rates" />
            <AnimatedCounter end={80} suffix="%" label="More leads within 90 days" />
            <AnimatedCounter end={10} suffix="+" label="Hours saved per week" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Everything You Need to Generate More Clients"
            description="From the first email to the final conversion, we build complete lead generation systems that bring new business to your door — consistently."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link href="/services">
                  <div className="group h-full rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/20 hover:shadow-lg">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-green/10 transition-colors group-hover:bg-brand-green/20">
                      <service.icon className="h-6 w-6 text-brand-green" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-brand-navy">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{service.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services">
              <Button variant="outline" className="border-brand-green px-8 font-semibold text-brand-green hover:bg-brand-green hover:text-white">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 opacity-5">
          <img src={GROWTH_IMG} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Proven Results"
                title="Watch Your Leads Grow Month After Month"
                description="Our clients don't just get a one-off boost. We build systems that compound over time, delivering more and more qualified leads as your campaigns mature."
                light
                align="left"
              />
              <div className="mt-8 space-y-4">
                {[
                  "Consistent lead flow that grows every month",
                  "Qualified enquiries from people ready to buy",
                  "Full transparency with monthly reporting",
                  "No long-term contracts — results speak for themselves",
                ].map((item) => (
                  <motion.div key={item} {...fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green-light" />
                    <span className="text-base text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div {...fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">New Client Leads Generated</h3>
                <span className="flex items-center gap-1 text-sm font-medium text-brand-green-light">
                  <TrendingUp className="h-4 w-4" /> +1,900%
                </span>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={graphData}>
                  <defs>
                    <linearGradient id="leadGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22A85B" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#22A85B" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" tick={{ fontSize: 12 }} />
                  <YAxis stroke="rgba(255,255,255,0.4)" tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#152238",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#fff",
                    }}
                    labelStyle={{ color: "#22A85B" }}
                  />
                  <Area type="monotone" dataKey="leads" stroke="#22A85B" strokeWidth={3} fill="url(#leadGradient)" />
                </AreaChart>
              </ResponsiveContainer>
              <p className="mt-3 text-center text-xs text-gray-400">Typical client lead trajectory over 12 months</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="Our Process"
            title="Simple, Transparent, Effective"
            description="We've stripped away the complexity. Here's how we take you from where you are now to a consistent flow of new client leads."
          />
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "A relaxed chat to understand your business, your goals, and where the biggest opportunities lie.",
                icon: Users,
              },
              {
                step: "02",
                title: "Discovery Session",
                desc: "We dig deep into your ideal customers, your market, and your competitors to build a tailored strategy.",
                icon: Target,
              },
              {
                step: "03",
                title: "Build & Launch",
                desc: "We build your campaigns, landing pages, and automation flows — then launch and start generating leads.",
                icon: Zap,
              },
              {
                step: "04",
                title: "Grow & Optimise",
                desc: "Monthly managed services that continuously improve performance and scale your lead generation.",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-green/10">
                    <item.icon className="h-7 w-7 text-brand-green" />
                  </div>
                  <span className="mb-2 block text-sm font-bold text-brand-green">{item.step}</span>
                  <h3 className="mb-3 text-xl font-bold text-brand-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="absolute top-8 -right-4 hidden w-8 md:block">
                    <ArrowRight className="h-6 w-6 text-brand-green/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/how-it-works">
              <Button variant="outline" className="border-brand-green px-8 font-semibold text-brand-green hover:bg-brand-green hover:text-white">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-slate">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <img src={CONSULTATION_IMG} alt="Business consultation meeting" className="h-auto w-full rounded-2xl shadow-xl" />
            </motion.div>
            <div>
              <SectionHeading
                eyebrow="Why ClearerPaths"
                title="We're Not an Agency. We're Your Growth Partner."
                description="Traditional marketing agencies sell you impressions and clicks. We deliver genuine, interested enquiries from people who want what you offer."
                align="left"
              />
              <div className="space-y-5">
                {[
                  {
                    title: "No Long-Term Contracts",
                    desc: "Our results speak for themselves. You stay because it works, not because you're locked in.",
                  },
                  {
                    title: "Transparent Monthly Reporting",
                    desc: "You'll see exactly where every lead came from and how your campaigns are performing.",
                  },
                  {
                    title: "Built for UK Businesses",
                    desc: "We understand the UK market. Our strategies are tailored to how British businesses buy.",
                  },
                  {
                    title: "Modern Techniques, Real Results",
                    desc: "We use the latest in digital marketing — not outdated tactics that stopped working years ago.",
                  },
                ].map((item) => (
                  <motion.div key={item.title} {...fadeUp} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-green/10">
                      <CheckCircle2 className="h-4 w-4 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-brand-navy">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-green">
        <div className="container text-center">
          <motion.div {...fadeUp}>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">Ready to Get More Clients?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Book a free, no-obligation consultation and we'll show you exactly how we can help your business generate more leads and win more clients.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white px-10 py-6 text-base font-bold text-brand-green shadow-lg hover:bg-gray-100">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
