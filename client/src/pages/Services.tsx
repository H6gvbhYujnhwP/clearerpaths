/* Bold Authority Design — Services Page */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail, Search, Linkedin, Facebook, Globe, Zap, Smartphone, BarChart3,
  ArrowRight, CheckCircle2
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const EMAIL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/m6TrBe4JVRorZBtV3Sne3H/email-campaign-visual-fceo7PadBVpvVAcuToM3GW.webp";
const PPC_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/m6TrBe4JVRorZBtV3Sne3H/ppc-advertising-visual-ZnegQZqvnpFhn3X5nHGaNG.webp";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

interface ServiceDetail {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image?: string;
  highlight?: boolean;
}

const detailedServices: ServiceDetail[] = [
  {
    icon: Mail,
    title: "Email Outreach Campaigns",
    subtitle: "Our #1 Lead Generator",
    description: "Email outreach is the single most effective way to reach decision-makers directly. We don't send spam \u2014 we craft personalised, targeted messages that start real conversations with people who need what you offer.",
    features: [
      "Targeted prospect lists built to your ideal customer profile",
      "Personalised email sequences that feel human, not automated",
      "Open rates consistently 10x the industry average",
      "Multi-step follow-up sequences that nurture warm leads",
      "Full campaign reporting with open, click, and reply tracking",
      "GDPR-compliant data sourcing and sending practices",
    ],
    image: EMAIL_IMG,
    highlight: true,
  },
  {
    icon: Search,
    title: "Google Ads / PPC Campaigns",
    subtitle: "Capture Active Buyers",
    description: "When someone searches Google for what you sell, you need to be there. Our PPC campaigns put your business at the top of search results, targeting people who are actively looking to buy right now.",
    features: [
      "Keyword research targeting high-intent buyer searches",
      "Ad copy that drives clicks and conversions",
      "Landing page design optimised for lead capture",
      "Bid management to maximise your return on ad spend",
      "A/B testing to continuously improve performance",
      "Monthly reporting with full cost and lead breakdown",
    ],
    image: PPC_IMG,
  },
  {
    icon: Linkedin,
    title: "LinkedIn Marketing",
    subtitle: "B2B Connection Building",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&q=80",
    description: "LinkedIn is where business decisions happen. We build your presence, connect you with the right people, and create content that positions you as the go-to expert in your industry.",
    features: [
      "Targeted connection campaigns to reach decision-makers",
      "Content strategy that builds authority and trust",
      "Profile optimisation for maximum visibility",
      "InMail campaigns for direct outreach",
      "Lead generation through LinkedIn Sales Navigator",
      "Engagement tracking and conversion reporting",
    ],
  },
  {
    icon: Facebook,
    title: "Facebook Retargeting",
    subtitle: "Bring Back Warm Visitors",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    description: "Most people who visit your website leave without getting in touch. Facebook retargeting puts your business back in front of those warm visitors, reminding them why they were interested in the first place.",
    features: [
      "Facebook Pixel installation and audience building",
      "Custom audience creation from website visitors",
      "Lookalike audiences to find similar potential clients",
      "Dynamic ad creative that speaks to visitor intent",
      "Cross-platform retargeting across Facebook and Instagram",
      "Conversion tracking and cost-per-lead optimisation",
    ],
  },
  {
    icon: Globe,
    title: "Website Design & Redesign",
    subtitle: "Your 24/7 Sales Machine",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    description: "Your website is often the first impression a potential client gets. We design modern, fast, mobile-friendly websites that are built from the ground up to convert visitors into enquiries.",
    features: [
      "Conversion-focused design with clear calls to action",
      "Mobile-responsive layouts that work on every device",
      "Fast loading speeds for better user experience and SEO",
      "Content written to speak directly to your ideal client",
      "Contact forms and booking integrations built in",
      "Ongoing support and updates as your business grows",
    ],
  },
  {
    icon: BarChart3,
    title: "SEO & Landing Pages",
    subtitle: "Be Found Organically",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Rank higher on Google for the searches that matter most to your business. We combine technical SEO with dedicated landing pages that capture and convert organic traffic.",
    features: [
      "Technical SEO audit and on-page optimisation",
      "Keyword strategy targeting buyer-intent searches",
      "Dedicated landing pages for each service or product",
      "Local SEO to dominate your geographic area",
      "Content creation that builds authority over time",
      "Monthly ranking reports and traffic analysis",
    ],
  },
  {
    icon: Zap,
    title: "Automation Flows",
    subtitle: "Never Miss a Lead Again",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
    description: "When a lead comes in, speed matters. Our automation flows ensure every enquiry gets an instant response, every lead gets nurtured, and nothing falls through the cracks.",
    features: [
      "Automated lead response within seconds of enquiry",
      "Email nurture sequences tailored to buyer stage",
      "CRM integration to track every lead from first touch",
      "Appointment booking automation",
      "Follow-up reminders for your sales team",
      "Custom workflows built around your sales process",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    subtitle: "Custom Business Applications",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    description: "Sometimes a website isn't enough. We build custom applications that streamline your operations, improve your client experience, and give you a competitive edge.",
    features: [
      "Custom web and mobile applications",
      "Client portals and dashboard systems",
      "Booking and scheduling platforms",
      "Internal tools to improve team productivity",
      "API integrations with your existing software",
      "Ongoing development and feature updates",
    ],
  },
];

export default function Services() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight mb-6">
              Modern Marketing That<br />
              <span className="text-brand-green">Actually Generates Leads</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We don't do vanity metrics or old-fashioned marketing. Every service we offer is designed with one goal: to put genuine, interested enquiries in front of your sales team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container">
          <div className="space-y-24">
            {detailedServices.map((service, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={service.title}
                  {...fadeUp}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${service.highlight ? "bg-brand-navy rounded-3xl p-8 md:p-12" : ""}`}
                >
                  {/* Text side */}
                  <div className={isEven && !service.highlight ? "lg:order-1" : service.highlight ? "" : "lg:order-2"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.highlight ? "bg-brand-green/20" : "bg-brand-green/10"}`}>
                        <service.icon className={`w-6 h-6 ${service.highlight ? "text-brand-green-light" : "text-brand-green"}`} />
                      </div>
                      <span className={`text-sm font-semibold ${service.highlight ? "text-brand-green-light" : "text-brand-green"}`}>
                        {service.subtitle}
                      </span>
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${service.highlight ? "text-white" : "text-brand-navy"}`}>
                      {service.title}
                    </h3>
                    <p className={`text-base leading-relaxed mb-6 ${service.highlight ? "text-gray-300" : "text-gray-600"}`}>
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${service.highlight ? "text-brand-green-light" : "text-brand-green"}`} />
                          <span className={`text-sm ${service.highlight ? "text-gray-300" : "text-gray-600"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Image side */}
                  <div className={isEven && !service.highlight ? "lg:order-2" : service.highlight ? "" : "lg:order-1"}>
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-xl shadow-lg w-full h-auto"
                      />
                    ) : (
                      <div className={`rounded-xl p-10 flex items-center justify-center aspect-[4/3] ${service.highlight ? "bg-white/5" : "bg-brand-slate"}`}>
                        <service.icon className={`w-24 h-24 ${service.highlight ? "text-white/10" : "text-brand-green/10"}`} />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green section-padding">
        <div className="container text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              That's what the free consultation is for. We'll listen to your goals, look at your business, and recommend the right combination of services to get you results.
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
