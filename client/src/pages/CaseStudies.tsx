/* Bold Authority Design — Case Studies Page */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Mail, Search, Globe, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const caseStudies = [
  {
    industry: "Professional Services",
    title: "Accounting Firm Generates 47 New Client Enquiries in 90 Days",
    challenge: "A mid-sized accounting firm in Essex was relying entirely on word-of-mouth referrals. Growth had plateaued and they needed a predictable way to attract new business clients.",
    solution: "We launched a targeted email outreach campaign aimed at local business owners, combined with Google Ads targeting high-intent searches like 'accountant near me' and 'business tax advice'.",
    services: ["Email Outreach", "Google Ads / PPC", "Landing Pages"],
    results: [
      { label: "New Enquiries in 90 Days", value: "47" },
      { label: "Email Open Rate", value: "39.9%" },
      { label: "Cost Per Lead", value: "\u00a312" },
      { label: "New Clients Won", value: "18" },
    ],
    graphData: [
      { month: "Month 1", leads: 8 },
      { month: "Month 2", leads: 16 },
      { month: "Month 3", leads: 23 },
      { month: "Month 4", leads: 31 },
      { month: "Month 5", leads: 38 },
      { month: "Month 6", leads: 47 },
    ],
    testimonial: "We went from hoping the phone would ring to having a genuine pipeline of new business. The team at ClearerPaths understood our market and delivered exactly what they promised.",
    color: "brand-green",
  },
  {
    industry: "E-Commerce / Retail",
    title: "Skincare Brand Achieves 26% Click-Through Rate on Email Campaign",
    challenge: "A premium skincare brand needed to drive traffic to their new product launch. Previous marketing efforts had produced disappointing results with open rates below 5%.",
    solution: "We designed a multi-step email campaign with personalised messaging, combined with Facebook retargeting to re-engage website visitors who didn't convert on their first visit.",
    services: ["Email Outreach", "Facebook Retargeting", "Automation Flows"],
    results: [
      { label: "Email Open Rate", value: "41.2%" },
      { label: "Click-Through Rate", value: "26%" },
      { label: "Revenue from Campaign", value: "\u00a328k" },
      { label: "Return on Investment", value: "14x" },
    ],
    graphData: [
      { month: "Week 1", leads: 120 },
      { month: "Week 2", leads: 285 },
      { month: "Week 3", leads: 410 },
      { month: "Week 4", leads: 580 },
      { month: "Week 5", leads: 720 },
      { month: "Week 6", leads: 890 },
    ],
    testimonial: "The open rates alone blew us away \u2014 10 times what we were getting before. But the real win was the revenue. This campaign paid for itself many times over.",
    color: "brand-green",
  },
  {
    industry: "Industrial / Manufacturing",
    title: "Agricultural Equipment Company Doubles Online Enquiries",
    challenge: "A specialist manufacturer of agricultural weighing systems had a dated website and no digital marketing presence. Almost all business came from trade shows and existing relationships.",
    solution: "We rebuilt their website with a focus on conversion, launched targeted Google Ads campaigns, and implemented an SEO strategy to capture organic search traffic for niche industry terms.",
    services: ["Website Redesign", "Google Ads / PPC", "SEO"],
    results: [
      { label: "Increase in Web Enquiries", value: "112%" },
      { label: "Google Ads Conversion Rate", value: "8.4%" },
      { label: "Organic Traffic Growth", value: "185%" },
      { label: "New Markets Reached", value: "3" },
    ],
    graphData: [
      { month: "Q1", leads: 12 },
      { month: "Q2", leads: 28 },
      { month: "Q3", leads: 45 },
      { month: "Q4", leads: 62 },
    ],
    testimonial: "We never thought digital marketing could work for our niche industry. ClearerPaths proved us wrong. We're now getting enquiries from markets we never even considered.",
    color: "brand-green",
  },
  {
    industry: "Recycling & Waste Management",
    title: "Recycling Company Sees 80% Lead Increase in First Quarter",
    challenge: "A commercial recycling company was struggling to differentiate from larger competitors. They needed a way to reach local businesses who were looking for more sustainable waste management solutions.",
    solution: "We implemented a LinkedIn marketing campaign targeting facilities managers and office managers, supported by email outreach to businesses in their service area and a Google Ads campaign for local searches.",
    services: ["LinkedIn Marketing", "Email Outreach", "Google Ads / PPC"],
    results: [
      { label: "Lead Increase", value: "80%" },
      { label: "LinkedIn Connection Rate", value: "34%" },
      { label: "Email Response Rate", value: "12%" },
      { label: "New Contracts Signed", value: "9" },
    ],
    graphData: [
      { month: "Month 1", leads: 5 },
      { month: "Month 2", leads: 11 },
      { month: "Month 3", leads: 19 },
      { month: "Month 4", leads: 28 },
      { month: "Month 5", leads: 35 },
      { month: "Month 6", leads: 42 },
    ],
    testimonial: "The LinkedIn campaign was a game-changer for us. We're now connected with exactly the right people in exactly the right companies. The leads just keep coming.",
    color: "brand-green",
  },
];

export default function CaseStudies() {
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
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight mb-6">
              Real Results for<br />
              <span className="text-brand-green">Real Businesses</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Don't just take our word for it. Here are some of the results we've delivered for businesses across different industries. Names have been anonymised to protect client confidentiality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-brand-navy py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={10} suffix="x" label="Above Industry Open Rates" />
            <AnimatedCounter end={240} suffix="%" label="Average Lead Growth" />
            <AnimatedCounter end={14} suffix="x" label="Best Campaign ROI" />
            <AnimatedCounter end={95} suffix="%" label="Client Retention Rate" />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-20">
            {caseStudies.map((cs, i) => (
              <motion.div key={cs.title} {...fadeUp} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {/* Header */}
                <div className="bg-brand-navy p-6 md:p-8">
                  <span className="text-brand-green-light text-sm font-semibold">{cs.industry}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-2">{cs.title}</h3>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left - Story */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-brand-green uppercase tracking-wider mb-2">The Challenge</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-brand-green uppercase tracking-wider mb-2">Our Solution</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cs.services.map((s) => (
                          <span key={s} className="bg-brand-green/10 text-brand-green text-xs font-medium px-3 py-1 rounded-full">{s}</span>
                        ))}
                      </div>
                      {/* Testimonial */}
                      <blockquote className="border-l-4 border-brand-green pl-4 italic text-gray-700 text-sm leading-relaxed">
                        "{cs.testimonial}"
                      </blockquote>
                    </div>

                    {/* Right - Results + Graph */}
                    <div>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {cs.results.map((r) => (
                          <div key={r.label} className="bg-brand-slate rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-brand-green font-[var(--font-heading)]">{r.value}</div>
                            <p className="text-gray-600 text-xs mt-1">{r.label}</p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-brand-slate rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold text-brand-navy">Lead Growth Trajectory</span>
                          <TrendingUp className="w-4 h-4 text-brand-green" />
                        </div>
                        <ResponsiveContainer width="100%" height={180}>
                          <AreaChart data={cs.graphData}>
                            <defs>
                              <linearGradient id={`grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1B8A4A" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#1B8A4A" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="#9ca3af" />
                            <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" />
                            <Tooltip />
                            <Area type="monotone" dataKey="leads" stroke="#1B8A4A" strokeWidth={2} fill={`url(#grad-${i})`} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green section-padding">
        <div className="container text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want Results Like These?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Every one of these businesses started with a free consultation. Let's have a conversation about what we can do for yours.
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
