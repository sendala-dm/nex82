import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import nexaurLogo from "@/assets/nexaur-logo.png";

const FooterSection = () => {
  return (
    <footer className="relative py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <img src={nexaurLogo} alt="NEX|82" className="h-10 w-auto shrink-0" />
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Proprietary algorithmic trading firm specialising in high-frequency,
              machine learning-driven strategies across global markets.
            </p>
          </motion.div>

          {/* Right: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <p className="font-mono text-sm text-primary tracking-widest uppercase mb-4">Contact</p>
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
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} NEX|82 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
