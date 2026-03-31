/* Bold Authority Design — About Us Page */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Target, Heart, Lightbulb, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function About() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight mb-6">
              The People Behind<br />
              <span className="text-brand-green">Your Growth</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              ClearerPaths is a division of TheGreenAgents.com, founded by two people who've spent decades in technology, sales, and marketing \u2014 and who believe there's a better way to help businesses grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Our Story"
              title="25+ Years of Getting Results"
              align="center"
            />
            <motion.div {...fadeUp} className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
              <p>
                We started ClearerPaths because we saw too many businesses wasting money on marketing that doesn't work. Agencies selling impressions and clicks. SEO companies promising page-one rankings that never come. Social media managers posting content that nobody sees.
              </p>
              <p>
                The problem isn't that marketing doesn't work. The problem is that most marketing isn't focused on the only thing that actually matters: <strong className="text-brand-navy">generating genuine leads from people who want to buy what you sell.</strong>
              </p>
              <p>
                That's what we do. We use modern, proven techniques to put your business in front of the right people at the right time. We don't chase vanity metrics. We chase enquiries, conversations, and new clients for your business.
              </p>
              <p>
                With over 25 years of combined experience in technology, sales, and marketing, we've seen what works and what doesn't. We've built our approach around the strategies that consistently deliver results \u2014 and we've left the rest behind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-navy section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="Meet the Team"
            title="The Founders"
            description="Two people with very different skill sets, united by a shared mission: to help UK businesses grow through modern lead generation."
            light
          />
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* John Wicks */}
            <motion.div {...fadeUp} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="w-20 h-20 bg-brand-green/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-brand-green-light font-[var(--font-heading)]">JW</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">John Wicks</h3>
              <p className="text-brand-green-light font-medium mb-4">Co-Founder \u2014 Sales & Marketing</p>
              <div className="text-gray-300 text-sm leading-relaxed space-y-4">
                <p>
                  John has been in sales and marketing for over 30 years. His career started early \u2014 at the age of 8, he won a national design campaign for 'Keep Britain Tidy', earning himself a Blue Peter badge and a set of Tonka toys. From that moment, the lesson was clear: get results, get rewards. He hasn't looked back since.
                </p>
                <p>
                  Over three decades, John has built a reputation as a certified sales and marketing consultant who understands what makes businesses tick. He's worked across industries, helping companies of all sizes find their customers and grow their revenue.
                </p>
                <p>
                  At ClearerPaths, John leads the strategy side \u2014 understanding your business, identifying your ideal clients, and crafting the messaging that gets them to pick up the phone.
                </p>
              </div>
            </motion.div>

            {/* Westley Sweetman */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="w-20 h-20 bg-brand-green/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-brand-green-light font-[var(--font-heading)]">WS</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Westley Sweetman</h3>
              <p className="text-brand-green-light font-medium mb-4">Co-Founder \u2014 Technology & Development</p>
              <div className="text-gray-300 text-sm leading-relaxed space-y-4">
                <p>
                  Westley is the technical brain behind ClearerPaths. With over 25 years in IT and software development, he brings deep expertise in Microsoft technologies, Python, and modern web development.
                </p>
                <p>
                  While John finds the clients, Westley builds the systems that make everything work. From the automation flows that nurture your leads to the custom applications that streamline your operations, Westley ensures the technology is robust, reliable, and built to scale.
                </p>
                <p>
                  Together, John and Westley reconnected after 20 years apart and discovered they shared a vision: to combine sales expertise with technical excellence to help UK businesses grow in the modern age.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Approach"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Results First", desc: "Everything we do is measured by one thing: did it generate leads and new clients for your business? If it doesn't move the needle, we don't do it." },
              { icon: Heart, title: "Honest & Transparent", desc: "No jargon, no hidden fees, no smoke and mirrors. You'll always know exactly what we're doing, why we're doing it, and what results it's producing." },
              { icon: Shield, title: "No Lock-In Contracts", desc: "We earn your business every month. You stay because it works, not because you're trapped. If we're not delivering, you're free to leave." },
              { icon: Lightbulb, title: "Modern Thinking", desc: "We don't use yesterday's tactics. Our approach is built on what works right now \u2014 modern techniques, current platforms, and strategies that match how people actually buy today." },
              { icon: Users, title: "Partnership, Not Agency", desc: "We're not a faceless agency. We're your growth partners. We care about your business as much as you do, and we're invested in your long-term success." },
              { icon: Award, title: "UK Business Experts", desc: "We understand the UK market inside and out. Our strategies are tailored to how British businesses operate and how British buyers make decisions." },
            ].map((v, i) => (
              <motion.div key={v.title} {...fadeUp} transition={{ delay: i * 0.08 }}>
                <div className="bg-white border border-gray-100 rounded-xl p-6 h-full hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
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
              Let's Talk About Your Business
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              We'd love to hear about what you do, who you serve, and where you want to go. Book a free consultation and let's see if we're the right fit.
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
