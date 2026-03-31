/* Bold Authority Design — Contact Page */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! We'll be in touch within 24 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy leading-tight mb-6">
              Book Your Free<br />
              <span className="text-brand-green">Consultation</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to start generating more leads? Fill in the form below or give us a call. There's no obligation, no pressure \u2014 just a friendly conversation about how we can help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Form */}
            <motion.div {...fadeUp} className="lg:col-span-7">
              {submitted ? (
                <div className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Thank You!</h3>
                  <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto">
                    We've received your message and will be in touch within 24 hours to arrange your free consultation. We look forward to learning about your business.
                  </p>
                </div>
              ) : (
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">Send Us a Message</h3>
                  <p className="text-gray-600 text-sm mb-8">Fill in the form and we'll get back to you within 24 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-colors bg-white"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-colors bg-white"
                          placeholder="john@company.co.uk"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-colors bg-white"
                          placeholder="07700 900000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-colors bg-white"
                          placeholder="Your Company Ltd"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-1.5">What Are You Interested In?</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-colors bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option value="email">Email Outreach</option>
                        <option value="ppc">Google Ads / PPC</option>
                        <option value="linkedin">LinkedIn Marketing</option>
                        <option value="facebook">Facebook Retargeting</option>
                        <option value="website">Website Design</option>
                        <option value="seo">SEO & Landing Pages</option>
                        <option value="automation">Automation Flows</option>
                        <option value="app">App Development</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-1.5">Tell Us About Your Business</label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-colors bg-white resize-none"
                        placeholder="Tell us a bit about your business, your goals, and what you're looking for..."
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-6 text-base shadow-md hover:shadow-lg transition-all"
                    >
                      Send Message & Book Consultation
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="text-gray-400 text-xs text-center">
                      By submitting this form, you agree to be contacted about our services. We respect your privacy and will never share your information.
                    </p>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="lg:col-span-5 space-y-8">
              {/* Contact info */}
              <div className="bg-brand-navy rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <a href="tel:01702540776" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-green-light" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">Phone</p>
                      <p className="text-white font-medium group-hover:text-brand-green-light transition-colors">01702 540776</p>
                    </div>
                  </a>
                  <a href="mailto:hello@clearerpaths.co.uk" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-green-light" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">Email</p>
                      <p className="text-white font-medium group-hover:text-brand-green-light transition-colors">hello@clearerpaths.co.uk</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-green-light" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">Location</p>
                      <p className="text-white font-medium">United Kingdom</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-brand-green-light" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs mb-0.5">Response Time</p>
                      <p className="text-white font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-white border border-gray-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-brand-navy mb-5">What to Expect</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "We'll reply within 24 hours to arrange a convenient time" },
                    { step: "2", text: "A 30-minute free consultation call to understand your business" },
                    { step: "3", text: "An honest assessment of how we can help you generate more leads" },
                    { step: "4", text: "No obligation, no pressure \u2014 just a genuine conversation" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-brand-green text-xs font-bold">{item.step}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendly placeholder */}
              <div className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-8 text-center">
                <Clock className="w-8 h-8 text-brand-green mx-auto mb-3" />
                <h3 className="text-lg font-bold text-brand-navy mb-2">Prefer to Book Directly?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Use our online booking system to choose a time that works for you.
                </p>
                <Button className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6">
                  Book a Time Slot
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-gray-400 text-xs mt-3">Calendly integration coming soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
