/* Bold Authority Design — Our Apps Page */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Megaphone, Headphones, BarChart3, Zap, Shield, Clock, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const agents = [
  {
    icon: Mail,
    title: "Email Automation Agent",
    description: "Intelligent email campaigns that write, send, and optimise themselves. This agent handles customer follow-ups, lead nurturing, and personalised outreach automatically \u2014 so your sales team can focus on closing deals.",
    features: [
      "Automated email sequences triggered by user behaviour",
      "Smart personalisation that adapts to each recipient",
      "Open rate and click-through optimisation in real-time",
      "Follow-up scheduling based on engagement signals",
      "Integration with your CRM and sales pipeline",
    ],
    stat: "\u00a330\u2013\u00a340",
    statLabel: "Return for every \u00a31 spent",
  },
  {
    icon: Megaphone,
    title: "Marketing Automation Agent",
    description: "Complete marketing campaigns that run themselves. From social media posts to ad optimisation, this agent handles your entire marketing pipeline while you focus on running your business.",
    features: [
      "Multi-channel campaign management and scheduling",
      "Content creation assistance and brand voice consistency",
      "Ad spend optimisation across Google and social platforms",
      "Lead scoring and qualification automation",
      "Performance dashboards with actionable insights",
    ],
    stat: "80%",
    statLabel: "More leads within 90 days",
  },
  {
    icon: Headphones,
    title: "Customer Service Agent",
    description: "24/7 customer support that never sleeps. This agent handles enquiries, resolves common issues, and escalates complex cases to your team when needed \u2014 ensuring no customer is ever left waiting.",
    features: [
      "Instant response to customer enquiries around the clock",
      "Smart routing to the right team member when needed",
      "FAQ handling and common issue resolution",
      "Customer satisfaction tracking and feedback collection",
      "Seamless handoff to human agents for complex issues",
    ],
    stat: "24/7",
    statLabel: "Always-on support coverage",
  },
  {
    icon: BarChart3,
    title: "Data Analysis Agent",
    description: "Transform your business data into actionable insights. This agent automatically generates reports, identifies trends, and provides strategic recommendations that help you make better decisions faster.",
    features: [
      "Automated report generation from your business data",
      "Trend identification and anomaly detection",
      "Competitive intelligence and market analysis",
      "Revenue forecasting and pipeline predictions",
      "Custom dashboards tailored to your KPIs",
    ],
    stat: "10+",
    statLabel: "Hours saved per week",
  },
];

export default function Apps() {
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
              Our Apps
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight mb-6">
              Your New<br />
              <span className="text-brand-green">Digital Workforce</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Powered by TheGreenAgents.com, our suite of intelligent agents automate the most time-consuming tasks in your business \u2014 from marketing and customer service to data analysis and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agents */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-16">
            {agents.map((agent, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div key={agent.title} {...fadeUp} className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Content */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center">
                        <agent.icon className="w-6 h-6 text-brand-green" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-brand-navy">{agent.title}</h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">{agent.description}</p>
                    <ul className="space-y-3">
                      {agent.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Zap className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stat card */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="bg-brand-navy rounded-2xl p-8 text-center">
                      <div className="text-5xl md:text-6xl font-bold text-brand-green-light font-[var(--font-heading)] mb-2">
                        {agent.stat}
                      </div>
                      <p className="text-gray-300 text-base">{agent.statLabel}</p>
                      <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <Shield className="w-5 h-5 text-brand-green-light mx-auto mb-1" />
                          <span className="text-gray-400 text-xs">Secure</span>
                        </div>
                        <div className="text-center">
                          <Clock className="w-5 h-5 text-brand-green-light mx-auto mb-1" />
                          <span className="text-gray-400 text-xs">Always On</span>
                        </div>
                        <div className="text-center">
                          <TrendingUp className="w-5 h-5 text-brand-green-light mx-auto mb-1" />
                          <span className="text-gray-400 text-xs">Scalable</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it connects */}
      <section className="bg-brand-navy section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="Powered by TheGreenAgents.com"
            title="One Ecosystem. Complete Automation."
            description="All our agents work together as a unified system. Your email agent generates leads, your marketing agent nurtures them, your customer service agent supports them, and your data agent tracks everything \u2014 automatically."
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { step: "1", label: "Lead comes in via email outreach" },
              { step: "2", label: "Marketing agent nurtures with content" },
              { step: "3", label: "Customer service agent handles enquiries" },
              { step: "4", label: "Data agent reports on the full pipeline" },
            ].map((s) => (
              <motion.div key={s.step} {...fadeUp} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-brand-green-light font-bold text-sm">{s.step}</span>
                </div>
                <p className="text-gray-300 text-sm">{s.label}</p>
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Book a free consultation and we'll show you which agents can make the biggest impact on your business right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-green hover:bg-gray-100 font-bold px-10 py-6 text-base shadow-lg">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="https://thegreenagents.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-10 py-6 text-base">
                  Visit TheGreenAgents.com
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
