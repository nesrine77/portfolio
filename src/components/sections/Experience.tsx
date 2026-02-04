import { MapPin, Calendar, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "STAR ASSURANCES",
    role: "Corporate Immersion Internship",
    duration: "June 2025 - August 2025",
    location: "Tunis, Tunisia",
    description:
      "Developed a comprehensive insurance challenge platform with real-time features and modern architecture.",
    contributions: [
      "Built cross-platform Flutter mobile application for agents",
      "Developed Node.js backend with Express and Socket.IO for real-time updates",
      "Implemented JWT authentication and secure API endpoints",
      "Created admin dashboard using React and Material UI",
      "Designed and optimized SQLite database schema",
    ],
    technologies: ["Flutter", "Node.js", "Socket.IO", "JWT", "React", "Material UI", "SQLite", "Full-Stack", "Front Office", "Back Office"],
  },
  {
    company: "Tunisie Telecom",
    role: "Human Resources Internship",
    duration: "June 2023 - July 2023",
    location: "Tunis, Tunisia",
    description:
      "Contributed to the development of an e-commerce web platform using modern React ecosystem.",
    contributions: [
      "Developed responsive UI components with ReactJS",
      "Implemented product catalog and shopping cart features",
      "Integrated REST APIs for product data management",
      "Collaborated with design team to improve user experience",
    ],
    technologies: ["ReactJS", "JavaScript", "CSS3", "REST APIs"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute w-4 h-4 bg-primary rounded-full border-4 border-background left-[-7px] md:left-1/2 md:-translate-x-1/2 top-8`}
                />

                <Card
                  className={`ml-6 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } hover-lift border-none bg-card/80 backdrop-blur-sm`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center gap-2 text-primary">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-semibold text-lg">{exp.company}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <ul className="space-y-2 mb-4">
                      {exp.contributions.map((contribution, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {contribution}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
