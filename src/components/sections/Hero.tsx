import { ArrowDown, Mail, Linkedin, Github, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import nesrineProfile from "@/assets/nesrine-profile.png";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/nesrine-derouiche", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/nesrine-derouiche", label: "GitHub" },
  { icon: Facebook, href: "https://facebook.com/nesrine.derouiche", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/nesrine.derouiche", label: "Instagram" },
];

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse-glow" />
              <img
                src={nesrineProfile}
                alt="Nesrine Derouiche"
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-background"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary font-medium mb-2 animate-fade-up">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 animate-fade-up delay-100">
              Nesrine Derouiche
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-up delay-200">
              Software & Mobile Engineering Student | Full-Stack Developer
              <br />
              <span className="text-primary font-medium">Python, Flutter, Node.js</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up delay-300">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="font-semibold"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="font-semibold"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-up delay-400">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              <a
                href="mailto:nesrine.derouiche15@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium hidden sm:inline">Email Me</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}
