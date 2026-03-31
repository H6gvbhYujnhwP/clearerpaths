/* Bold Authority Design — How It Works Page */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Zap, TrendingUp, CheckCircle2, Clock, FileText, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const CONSULTATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/m6TrBe4JVRorZBtV3Sne3H/consultation-meeting-BCTuxvqdMXJbhdRjeETxnj.webp";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Free Consultation",
    duration: "30 minutes",
    description: "It all starts with a relaxed, no-pressure conversation. We want to understand your business, who your ideal clients are, and what's currently working (or not working) with your marketing.",
    details: [
      "We learn about your business, your market, and your goals",
      "We identify the biggest opportunities for lead generation",
      "We give you an honest assessment of what we can do for you",
      "No sales pitch \u2014 just a genuine conversation about growth",
    ],
    outcome: "You'll walk away with a clear picture of the opportunities available to your business, whether you work with us or not.",
  },
  {
    number: "02",
    icon: Target,
    title: "Discovery Session",
    duration: "60 minutes",
    description: "This is where we go deep. We run a structured discovery session that covers every aspect of your business, your customers, your competitors, and your market position.",
    details: [
      "Business foundations and core revenue drivers",
      "Ideal customer profiling \u2014 who are they, where are they, what do they need?",
      "Your unique selling proposition and competitive advantages",
      "Current sales process and where leads are being lost",
      "Competitor analysis and market positioning",
      "Strategic vision and growth targets",
    ],
    outcome: "The insights from this session form the foundation of your entire lead generation strategy. Every campaign, every message, every landing page is built on this.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Build & Launch",
    duration: "2\u20134 weeks",
    description: "With the strategy locked in, we get to work. Our team builds everything you need \u2014 from email campaigns and landing pages to PPC ads and automation flows.",
    details: [
      "Campaign strategy and messaging framework",
      "Email sequences, ad copy, and landing page content",
      "Technical setup: tracking pixels, CRM integrations, automation",
      "Quality assurance and testing before anything goes live",
      "Launch with close monitoring and rapid optimisation",
    ],
    outcome: "Your lead generation machine goes live. You start seeing enquiries come in from day one.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow & Optimise",
    duration: "Ongoing monthly",
    description: "This is where the magic happens. We don't just set it and forget it. Every month, we analyse performance, optimise campaigns, and scale what's working.",
    details: [
      "Monthly performance reporting with full transparency",
      "Campaign optimisation based on real data",
      "A/B testing to continuously improve results",
      "Scaling successful campaigns to generate more leads",
      "Regular strategy calls to align with your business goals",
      "New campaign ideas and opportunities identified proactively",
    ],
    outcome: "Your lead generation compounds over time. Month after month, you see more enquiries, better quality leads, and a growing pipeline of new clients.",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-brand-slate">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block bg-brand-green/10 text-brand-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight mb-6">
              From First Chat to<br />
              <span className="text-brand-green">Consistent New Clients</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've made the process simple and transparent. No jargon, no hidden steps, no surprises. Here's exactly how we take your business from where it is now to a steady flow of new client leads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div key={step.number} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 py-16 ${i < steps.length - 1 ? "border-b border-gray-100" : ""}`}>
                  {/* Number column */}
                  <div className="lg:col-span-2">
                    <div className="flex lg:flex-col items-center lg:items-start gap-4">
                      <span className="text-6xl md:text-7xl font-bold text-brand-green/15 font-[var(--font-heading)]">
                        {step.number}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </div>
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-brand-green" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome column */}
                  <div className="lg:col-span-4">
                    <div className="bg-brand-green/5 border border-brand-green/10 rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="w-4 h-4 text-brand-green" />
                        <span className="text-sm font-semibold text-brand-green">What You Get</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{step.outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + FAQ-style */}
      <section className="bg-brand-navy section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <img
                src={CONSULTATION_IMG}
                alt="Free consultation meeting"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>
            <div>
              <SectionHeading
                eyebrow="Common Questions"
                title="What People Usually Ask"
                light
                align="left"
              />
              <div className="space-y-6">
                {[
                  { q: "How quickly will I see results?", a: "Most clients start seeing enquiries within the first 2\u20134 weeks of campaign launch. Lead volume typically grows significantly over the first 3 months as we optimise and scale." },
                  { q: "Do I need to sign a long contract?", a: "No. We work on a rolling monthly basis. You stay because it works, not because you're locked in. We believe our results should earn your business every month." },
                  { q: "What if I don't know which services I need?", a: "That's exactly what the free consultation is for. We'll assess your business and recommend the right combination of services to achieve your goals." },
                  { q: "How much does it cost?", a: "Every business is different, so we tailor our approach and pricing to your specific needs. Book a free consultation and we'll give you a clear, honest quote with no hidden fees." },
                ].map((item) => (
                  <motion.div key={item.q} {...fadeUp} className="border-b border-white/10 pb-6">
                    <h4 className="text-white font-semibold text-lg mb-2">{item.q}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green section-padding">
        <div className="container text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The First Step Is a Conversation
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              No commitment, no pressure. Just a friendly chat about your business and how we might be able to help you get more clients.
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
