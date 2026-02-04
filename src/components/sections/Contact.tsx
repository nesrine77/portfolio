import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "nesrine.derouiche15@gmail.com",
    href: "mailto:nesrine.derouiche15@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nesrine-derouiche",
    href: "https://linkedin.com/in/nesrine-derouiche",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/nesrine77",
    href: "https://github.com/nesrine77",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          {/* Professional Call to Action */}
          <div className="mb-12 space-y-6">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              I am actively seeking opportunities to contribute to innovative software engineering projects, 
              whether through internships, collaborative ventures, or full-time positions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With expertise in mobile development, full-stack engineering, and a commitment to delivering 
              high-quality solutions, I welcome the opportunity to discuss how my skills and passion for 
              technology can add value to your organization or project. I look forward to connecting with 
              industry professionals, academic partners, and forward-thinking companies.
            </p>
          </div>

          {/* Contact Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 w-full max-w-4xl mx-auto">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 px-5 py-5 rounded-xl bg-card/80 hover:bg-card border border-border/30 hover:border-primary/40 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <link.icon className="w-5 h-5 text-primary transition-colors duration-300" />
                </div>
                <div className="text-left min-w-0">
                  <p className="font-semibold text-foreground">{link.label}</p>
                  <p className="text-sm text-muted-foreground truncate">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Primary CTA Button */}
          <Button
            asChild
            size="lg"
            className="group gap-2 px-8"
          >
            <a href="mailto:nesrine.derouiche15@gmail.com">
              Let's Connect
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
