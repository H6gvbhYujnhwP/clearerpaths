/* Bold Authority Design — Navbar
 * White bg, brand green CTAs, Space Grotesk headings
 * Sticky with backdrop blur on scroll
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/m6TrBe4JVRorZBtV3Sne3H/thegreenagents-logo_5e11fc1a.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/get-leads", label: "Get Leads" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/apps", label: "Our Apps" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src={LOGO_URL}
              alt="TheGreenAgents.com"
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location === link.href
                      ? "text-brand-green bg-brand-green/5"
                      : "text-brand-navy hover:text-brand-green hover:bg-brand-green/5"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:02035183702"
              className="flex items-center gap-3 rounded-full border border-brand-green/20 bg-brand-green/8 px-4 py-2.5 text-brand-navy transition-colors hover:border-brand-green/35 hover:bg-brand-green/12"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white shadow-sm">
                <Phone className="h-4 w-4" />
              </div>
              <div className="leading-tight">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-green">Call us today</p>
                <p className="text-lg font-extrabold tracking-[0.04em] text-brand-navy">0203 518 3702</p>
              </div>
            </a>
            <Link href="/contact">
              <Button className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 shadow-md hover:shadow-lg transition-all">
                Book a Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-brand-navy"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      location === link.href
                        ? "text-brand-green bg-brand-green/5"
                        : "text-brand-navy hover:text-brand-green hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-3">
                <a href="tel:02035183702" className="flex items-center gap-3 rounded-2xl bg-brand-green/8 px-4 py-3 text-brand-navy">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-green">Call us today</p>
                    <p className="text-lg font-extrabold tracking-[0.04em] text-brand-navy">0203 518 3702</p>
                  </div>
                </a>
                <Link href="/contact">
                  <Button className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold">
                    Book a Free Consultation
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
