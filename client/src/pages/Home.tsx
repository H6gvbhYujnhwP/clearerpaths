/* Bold Authority Design — Home Page
 * White bg, navy feature blocks, green accents, Space Grotesk headings, DM Sans body
 * Real stock images, animated counters, growth graph, card-based services
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail, Search, Linkedin, Facebook, Globe, Zap, Smartphone, BarChart3,
  ArrowRight, TrendingUp, Users, Target, CheckCircle2
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/m6TrBe4JVRorZBtV3Sne3H/hero-marketing-team-SUPSLBV9akiEusun23zXbW.webp";
const GROWTH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/m6TrBe4JVRorZBtV3Sne3H/growth-graph-hero-iKM8RuLv9Sqcm3AkyNf52D.webp";
const CONSULTATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/m6TrBe4JVRorZBtV3Sne3H/consultation-meeting-BCTuxvqdMXJbhdRjeETxnj.webp";

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
  { icon: Mail, title: "Email Outreach", desc: "Targeted campaigns that reach decision-makers directly. Our clients see open rates 10x the industry average." },
  { icon: Search, title: "Google Ads / PPC", desc: "Pay-per-click campaigns that put your business in front of people actively searching for what you offer." },
  { icon: Linkedin, title: "LinkedIn Marketing", desc: "Professional outreach that connects you with the right people in the right industries." },
  { icon: Facebook, title: "Facebook Retargeting", desc: "Pixel-powered campaigns that bring back visitors who showed interest but didn't convert." },
  { icon: Globe, title: "Website Design", desc: "Modern, conversion-focused websites built to turn visitors into enquiries." },
  { icon: Zap, title: "Automation Flows", desc: "Smart workflows that nurture leads automatically, so no opportunity slips through the cracks." },
  { icon: Smartphone, title: "App Development", desc: "Custom applications that streamline your operations and give your clients a better experience." },
  { icon: BarChart3, title: "SEO & Landing Pages", desc: "Search-optimised content and dedicated landing pages that capture and convert organic traffic." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-brand-green/10 text-brand-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                New-Generation Lead Generation
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] mb-6">
                Clear Strategy.<br />
                <span className="text-brand-green">Real Leads.</span><br />
                More Clients.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                We help UK businesses generate a consistent flow of genuine, interested enquiries using modern marketing techniques that actually work. No fluff. No vanity metrics. Just real leads that become real clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button size="lg" variant="outline" className="border-brand-navy/20 text-brand-navy hover:bg-brand-navy/5 font-semibold px-8 py-6 text-base">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={HERO_IMG}
                  alt="Marketing team analysing growth data"
                  className="w-full h-auto object-cover"
                />
                {/* Floating stat card */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Client Lead Growth</p>
                      <p className="text-lg font-bold text-brand-navy">+240%</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-brand-slate py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={40} prefix="£" suffix="" label="Return for every £1 on email" />
            <AnimatedCounter end={10} suffix="x" label="Above industry open rates" />
            <AnimatedCounter end={80} suffix="%" label="More leads within 90 days" />
            <AnimatedCounter end={10} suffix="+" label="Hours saved per week" />
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="What We Do"
            title="Everything You Need to Generate More Clients"
            description="From the first email to the final conversion, we build complete lead generation systems that bring new business to your door — consistently."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href="/services">
                  <div className="group bg-white border border-gray-100 rounded-xl p-6 h-full hover:shadow-lg hover:border-brand-green/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-green/20 transition-colors">
                      <s.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold px-8">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── GROWTH GRAPH SECTION (Navy Block) ─── */}
      <section className="bg-brand-navy section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={GROWTH_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Proven Results"
                title="Watch Your Leads Grow Month After Month"
                description="Our clients don't just get a one-off boost. We build systems that compound over time, delivering more and more qualified leads as your campaigns mature."
                light
                align="left"
              />
              <div className="space-y-4 mt-8">
                {[
                  "Consistent lead flow that grows every month",
                  "Qualified enquiries from people ready to buy",
                  "Full transparency with monthly reporting",
                  "No long-term contracts — results speak for themselves",
                ].map((item) => (
                  <motion.div key={item} {...fadeUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green-light mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div {...fadeUp} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">New Client Leads Generated</h3>
                <span className="text-brand-green-light text-sm font-medium flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" /> +1,900%
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
                    contentStyle={{ backgroundColor: "#152238", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#fff" }}
                    labelStyle={{ color: "#22A85B" }}
                  />
                  <Area type="monotone" dataKey="leads" stroke="#22A85B" strokeWidth={3} fill="url(#leadGradient)" />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-gray-400 text-xs mt-3 text-center">Typical client lead trajectory over 12 months</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS PREVIEW ─── */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="Our Process"
            title="Simple, Transparent, Effective"
            description="We've stripped away the complexity. Here's how we take you from where you are now to a consistent flow of new client leads."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Consultation", desc: "A relaxed chat to understand your business, your goals, and where the biggest opportunities lie.", icon: Users },
              { step: "02", title: "Discovery Session", desc: "We dig deep into your ideal customers, your market, and your competitors to build a tailored strategy.", icon: Target },
              { step: "03", title: "Build & Launch", desc: "We build your campaigns, landing pages, and automation flows — then launch and start generating leads.", icon: Zap },
              { step: "04", title: "Grow & Optimise", desc: "Monthly managed services that continuously improve performance and scale your lead generation.", icon: TrendingUp },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-brand-green" />
                  </div>
                  <span className="text-brand-green font-bold text-sm mb-2 block">{item.step}</span>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8">
                    <ArrowRight className="w-6 h-6 text-brand-green/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button variant="outline" className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold px-8">
                Learn More About Our Process
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY US / TRUST SECTION ─── */}
      <section className="bg-brand-slate section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <img
                src={CONSULTATION_IMG}
                alt="Business consultation meeting"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
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
                  { title: "No Long-Term Contracts", desc: "Our results speak for themselves. You stay because it works, not because you're locked in." },
                  { title: "Transparent Monthly Reporting", desc: "You'll see exactly where every lead came from and how your campaigns are performing." },
                  { title: "Built for UK Businesses", desc: "We understand the UK market. Our strategies are tailored to how British businesses buy." },
                  { title: "Modern Techniques, Real Results", desc: "We use the latest in digital marketing — not outdated tactics that stopped working years ago." },
                ].map((item) => (
                  <motion.div key={item.title} {...fadeUp} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-navy mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="bg-brand-green section-padding">
        <div className="container text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get More Clients?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Book a free, no-obligation consultation and we'll show you exactly how we can help your business generate more leads and win more clients.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-brand-green hover:bg-gray-100 font-bold px-10 py-6 text-base shadow-lg">
                Book Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
