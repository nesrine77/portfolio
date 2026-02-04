import { Smartphone, Code, Server, Palette, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const focusAreas = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Building cross-platform mobile applications with Flutter and native technologies.",
  },
  {
    icon: Code,
    title: "Full-Stack Engineering",
    description: "Creating end-to-end web solutions with modern frameworks and best practices.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Designing robust APIs and server-side logic with Node.js and Spring Boot.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive user interfaces with a focus on user experience.",
  },
  {
    icon: Layers,
    title: "Scalable Architectures",
    description: "Building systems that grow seamlessly with business needs.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            I'm a passionate <span className="text-primary font-semibold">Software & Mobile Engineering student</span> with 
            a strong foundation in full-stack development. My journey in tech is driven by a desire to create 
            innovative solutions that make a real impact. I thrive in collaborative environments and love 
            tackling complex problems with creative, scalable approaches.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mt-4">
            With hands-on experience in <span className="text-primary font-semibold">Flutter, React, Node.js, and Python</span>, 
            I bring ideas to life through clean code and thoughtful design. I'm constantly learning and 
            adapting to new technologies, always seeking to improve my craft.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <Card
              key={area.title}
              className="hover-lift border-none bg-card/50 backdrop-blur-sm group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <area.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Beyond technical skills, I bring <span className="text-primary font-medium">adaptability</span>, 
            <span className="text-primary font-medium"> problem-solving mindset</span>, and 
            <span className="text-primary font-medium"> excellent teamwork</span> to every project.
          </p>
        </div>
      </div>
    </section>
  );
}
