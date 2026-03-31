import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="text-8xl font-bold text-brand-green/20 font-[var(--font-heading)] mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on the right path.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6">
              <Home className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-brand-navy/20 text-brand-navy hover:bg-brand-navy/5 font-semibold px-6">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
