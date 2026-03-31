/* Bold Authority Design — Footer
 * Navy background, white text, green accents
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/m6TrBe4JVRorZBtV3Sne3H/thegreenagents-logo_5e11fc1a.png";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={LOGO_URL} alt="TheGreenAgents.com" className="h-14 w-auto mb-5 brightness-0 invert" />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Clear Strategy. Real Leads. More Clients. We are the new generation of lead generation experts, helping UK businesses grow with modern marketing that actually works.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                "Email Outreach",
                "Google Ads / PPC",
                "LinkedIn Marketing",
                "Facebook Retargeting",
                "Website Design",
                "SEO & Landing Pages",
                "Automation Flows",
                "App Development",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services">
                    <span className="text-gray-300 hover:text-brand-green-light transition-colors text-sm">
                      {s}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "How It Works", href: "/how-it-works" },
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Our Apps", href: "/apps" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <span className="text-gray-300 hover:text-brand-green-light transition-colors text-sm">
                      {l.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-green-light mt-0.5 flex-shrink-0" />
                <a href="tel:02035183702" className="text-gray-300 hover:text-white transition-colors text-sm">
                  0203 518 3702
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-green-light mt-0.5 flex-shrink-0" />
                <a href="mailto:john@clearerpaths.co.uk" className="text-gray-300 hover:text-white transition-colors text-sm">
                  john@clearerpaths.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-green-light mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ClearerPaths — A division of TheGreenAgents.com. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
