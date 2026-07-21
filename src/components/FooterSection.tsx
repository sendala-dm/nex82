import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import nexaurLogo from "@/assets/nexaur-logo.png";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Hardware", href: "/hardware" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Software", href: "/software" },
];

const FooterSection = () => {
  return (
    <footer className="relative w-full border-t border-border bg-background">
      {/* Top full-width border line */}
      <div className="w-full h-px bg-border" />

      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 lg:col-span-5 flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <img src={nexaurLogo} alt="NEX|82" className="h-8 w-auto shrink-0" />
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Proprietary algorithmic trading firm specialising in high-frequency,
              machine learning-driven strategies across global markets.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="md:col-span-3 lg:col-span-3"
          >
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 lg:col-span-4"
          >
            <p className="font-mono text-xs text-primary tracking-widest uppercase mb-5">
              Contact
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>
                  NEX82 LLC<br />
                  777 West Putnam Avenue,<br />
                  Greenwich CT
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>info@nex82.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar — full-width separator and content */}
      <div className="w-full h-px bg-border" />
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} NEX|82. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Greenwich, CT · United States
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
