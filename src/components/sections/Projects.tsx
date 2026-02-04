import { useState } from "react";
import { ExternalLink, Github, Smartphone, Globe, Brain, Gamepad2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const categories = [
  { id: "all", label: "All", icon: null },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "web", label: "Web", icon: Globe },
  { id: "ai", label: "AI", icon: Brain },
  { id: "game", label: "Game Dev", icon: Gamepad2 },
];

const projects = [
  {
    id: 1,
    title: "Tâche-Lik",
    description:
      "A comprehensive task management mobile application with intuitive UI and powerful features for personal productivity.",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Provider", "Cloud Firestore"],
    achievements: ["Real-time sync", "Offline support", "Push notifications"],
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "Star Challenge",
    description:
      "Insurance agents challenge platform with real-time leaderboards, gamification, and comprehensive admin dashboard.",
    category: "web",
    technologies: ["Flutter", "Node.js", "Socket.IO", "React", "PostgreSQL"],
    achievements: ["Real-time updates", "Cross-platform", "Admin dashboard"],
    color: "from-primary to-accent",
  },
  {
    id: 3,
    title: "eco.net",
    description:
      "Environmental awareness platform connecting eco-conscious users to share tips, track impact, and collaborate on sustainability.",
    category: "web",
    technologies: ["React.js", "Node.js", "MongoDB", "Express"],
    achievements: ["Community features", "Impact tracking", "Responsive design"],
    color: "from-green-500 to-teal-600",
  },
  {
    id: 4,
    title: "HireUp",
    description:
      "Modern recruitment platform streamlining the hiring process with AI-powered candidate matching and interview scheduling.",
    category: "ai",
    technologies: ["Python", "React", "FastAPI", "PostgreSQL", "AI/ML"],
    achievements: ["AI matching", "Automated scheduling", "Analytics dashboard"],
    color: "from-orange-500 to-red-600",
  },
  {
    id: 5,
    title: "The World Within",
    description:
      "An immersive adventure game exploring inner worlds with stunning visuals and engaging storytelling.",
    category: "game",
    technologies: ["Unity", "C#", "Blender", "Adobe Creative Suite"],
    achievements: ["2nd Place Award", "Original soundtrack", "Multiple levels"],
    color: "from-indigo-500 to-pink-600",
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className="gap-2"
              >
                {cat.icon && <cat.icon className="w-4 h-4" />}
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover-lift border-none bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              {/* Project Visual Header */}
              <CardHeader className="p-0">
                <div
                  className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <span className="text-4xl font-bold text-white/90 font-display">
                    {project.title.charAt(0)}
                  </span>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-white/20 rounded-full" />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-1 mb-4">
                  {project.achievements.map((achievement, i) => (
                    <p key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {achievement}
                    </p>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-2" disabled>
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-2" disabled>
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
