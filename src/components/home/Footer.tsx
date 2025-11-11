import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, HeartHandshake, Award } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12" role="contentinfo">
      <div className="container">
        <div className="border-b border-background/20 pb-8 mb-8 text-center">
          <h4 className="font-semibold mb-4">Stay in the Loop</h4>
          <p className="text-sm mb-4 text-background/80">Get tips on home projects and new job alerts in KZN.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder-background/50 focus:outline-none focus:border-primary"
              aria-label="Email for newsletter signup"
            />
            <Button className="px-6">Subscribe</Button>
          </div>
        </div>

        <div className="border-b border-background/20 pb-8 mb-8">
          <div className="text-center mb-6">
            <h4 className="font-semibold mb-4">Trusted & Secure</h4>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-sm">
              <ShieldCheck className="w-5 h-5 text-success" aria-hidden="true" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Lock className="w-5 h-5 text-secondary" aria-hidden="true" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <HeartHandshake className="w-5 h-5 text-primary" aria-hidden="true" />
              <span>Verified Professionals</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-5 h-5 text-accent" aria-hidden="true" />
              <span>Quality Guarantee</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Project Khaya</h3>
            <p className="text-sm leading-relaxed text-background/80">
              Building community, one job at a time. Your trusted marketplace connecting homeowners, workers, and suppliers across KZN.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Homeowners</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Post a Job</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Browse Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Professionals</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Find Jobs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sign Up</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm">
          <p className="text-background/80">&copy; 2025 Project Khaya. All rights reserved. | Ubuntu ngumuntu ngabantu - A person is a person through other people</p>
        </div>
      </div>
    </footer>
  );
};
