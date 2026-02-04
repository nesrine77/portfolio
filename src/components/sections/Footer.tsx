import { ArrowUp, Mail, Linkedin, Github, Facebook, Instagram, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import nesrineLogo from "@/assets/nesrine-logo.png";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/nesrine-derouiche", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/nesrine77", label: "GitHub" },
  { icon: Facebook, href: "https://facebook.com/derouiche.nesrine", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/derouiche.nesrine", label: "Instagram" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <img
            src={nesrineLogo}
            alt="ND Logo"
            className="h-12 w-auto object-contain"
          />

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Email */}
          <a
            href="mailto:nesrine.derouiche15@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>nesrine.derouiche15@gmail.com</span>
          </a>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-border" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Nesrine Derouiche. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> in Tunisia
          </p>
        </div>

        {/* Scroll to top button */}
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full shadow-lg hover:shadow-xl transition-all z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>
    </footer>
  );
}
