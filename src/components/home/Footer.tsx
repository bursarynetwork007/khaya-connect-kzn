import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, HeartHandshake, Award } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-foreground text-background py-12" role="contentinfo">
      <div className="container">
        <div className="border-b border-background/20 pb-8 mb-8 text-center">
          <h4 className="font-semibold mb-4">Stay in the Loop</h4>
          <p className="text-sm mb-4 text-background/80">Get tips on home projects and new job alerts in KZN.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background placeholder-background/50 focus:outline-none focus:border-primary" aria-label="Email for newsletter signup" />
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
            <p className="text-sm leading-relaxed text-background/80 mb-4">Building community, one home at a time. Your trusted marketplace connecting homeowners, workers, and suppliers across KZN.</p>
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <span className="font-semibold">Hours:</span>
                <span className="text-background/80">Mon-Thu: 8:30-17:00<br />Fri: 8:30-16:00 | Sat: 9:00-12:00</span>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              
              
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dispute Resolution</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:Amanda@projectkhaya.co.za" className="hover:text-primary transition-colors">
                  Amanda@projectkhaya.co.za
                </a>
              </li>
              <li>
                <a href="https://wa.me/27814943255" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp: +27 81 494 3255
                </a>
              </li>
              <li className="pt-2 text-background/80">
                Servicing Estcourt & KZN
              </li>
              <li className="text-background/80">
                Call ahead for appointments
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm">
          <p className="text-background/80">&copy; 2025 Project Khaya. All rights reserved. | Ubuntu ngumuntu ngabantu - A person is a person through other people</p>
        </div>
      </div>
    </footer>;
};