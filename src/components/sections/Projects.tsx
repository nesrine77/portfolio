import { useState } from "react";
import { ExternalLink, Github, Smartphone, Globe, Brain, GraduationCap, Apple, Trophy, Server, LayoutDashboard, Leaf, Monitor, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const categories = [
  { id: "all", label: "All", icon: null },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "web", label: "Web", icon: Globe },
  { id: "ai", label: "AI", icon: Brain },
];

const projects = [
  {
    id: 1,
    title: "Tache-Lik (Android)",
    description:
      "Educational Android app with courses, quizzes, AI-assisted features, and real-time capabilities. Features student learning flows, teacher tooling, and admin operations.",
    category: "mobile",
    technologies: ["Kotlin", "Jetpack Compose", "Socket.IO", "Hilt"],
    achievements: ["AI quiz generation", "Real-time chat", "Multi-role support"],
    color: "from-blue-500 to-purple-600",
    icon: GraduationCap,
    github: "https://github.com/nesrine77/TacheLik_androidApp",
    demo: "https://github.com/nesrine77/TacheLik_androidApp",
  },
  {
    id: 2,
    title: "Tache-Lik (iOS)",
    description:
      "A premium iOS learning experience built with SwiftUI, MVVM, and real-time capabilities. Delivers role-based learning for Students, Teachers, and Admins.",
    category: "mobile",
    technologies: ["SwiftUI", "MVVM", "Socket.IO", "Combine"],
    achievements: ["Role-based flows", "Real-time messaging", "Email verification"],
    color: "from-indigo-500 to-blue-600",
    icon: Apple,
    github: "https://github.com/nesrine77/TacheLik_iosApp",
    demo: "https://github.com/nesrine77/TacheLik_iosApp/tree/main/screenshots",
  },
  {
    id: 3,
    title: "STAR Challenge (Flutter)",
    description:
      "Modern mobile gamification app with challenges, performance tracking, and dynamic leaderboards. Built with Material 3 and robust routing.",
    category: "mobile",
    technologies: ["Flutter", "Material 3", "Provider", "go_router"],
    achievements: ["Real-time updates", "Gamification", "Leaderboard"],
    color: "from-primary to-accent",
    icon: Trophy,
    github: "https://github.com/nesrine77/starChallenge_frontend",
    demo: "https://github.com/nesrine77/starChallenge_frontend/tree/main/assets/demo",
  },
  {
    id: 4,
    title: "STAR Challenge (Backend)",
    description:
      "Modular Node.js/Express backend with REST APIs, real-time Socket.IO updates, leaderboard calculations, and analytics for admin dashboard.",
    category: "web",
    technologies: ["Node.js", "Express 5", "SQLite", "Socket.IO"],
    achievements: ["Real-time updates", "Leaderboard system", "Analytics"],
    color: "from-slate-500 to-gray-700",
    icon: Server,
    github: "https://github.com/nesrine77/starChallenge_backend",
    demo: "https://github.com/nesrine77/starChallenge_backend",
  },
  {
    id: 5,
    title: "STAR Challenge (Dashboard)",
    description:
      "Modern admin dashboard for STAR Challenge platform. Features analytics, KPIs, charts, and comprehensive management tools with light/dark theme.",
    category: "web",
    technologies: ["React 19", "Material UI 7", "Recharts", "Formik"],
    achievements: ["Analytics dashboard", "Dark/light theme", "Real-time KPIs"],
    color: "from-violet-500 to-purple-600",
    icon: LayoutDashboard,
    github: "https://github.com/nesrine77/starChallenge_dashboard",
    demo: "https://github.com/nesrine77/starChallenge_dashboard/tree/master/public/assets/demo",
  },
  {
    id: 6,
    title: "eco.net (Web)",
    description:
      "Sustainable resource management platform promoting responsible consumption. Features advanced UI with ecological theme and comprehensive environmental tools.",
    category: "web",
    technologies: ["Symfony 6.4", "MySQL", "Twig", "Bootstrap"],
    achievements: ["ML insights", "QR codes", "PDF reports"],
    color: "from-green-500 to-teal-600",
    icon: Leaf,
    github: "https://github.com/nesrine77/econet",
    demo: "https://github.com/nesrine77/econet/tree/main/assets/demo",
  },
  {
    id: 7,
    title: "eco.net (Desktop)",
    description:
      "Desktop companion with cutting-edge AI integration for environmental management. Features chatbot, face recognition, and voice capabilities.",
    category: "ai",
    technologies: ["JavaFX", "Python", "Google Gemini", "OpenCV"],
    achievements: ["AI chatbot", "Face recognition", "Voice recognition"],
    color: "from-emerald-500 to-green-700",
    icon: Monitor,
    github: "https://github.com/nesrine77/econet-java",
    demo: "https://github.com/nesrine77/econet-java",
  },
  {
    id: 8,
    title: "HireUp",
    description:
      "AI-driven recruitment platform with intelligent matching and modern tech stack. Creates meaningful connections between talent and opportunity.",
    category: "ai",
    technologies: ["PHP 8", "Python", "TensorFlow", "TypeScript"],
    achievements: ["AI matching", "Computer vision", "ML algorithms"],
    color: "from-orange-500 to-red-600",
    icon: Briefcase,
    github: "https://github.com/nesrine77/HireUp",
    demo: "https://www.youtube.com/watch?v=RhInW6xJelM",
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
                  <project.icon className="w-16 h-16 text-white/90 stroke-[1.5]" />
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 gap-2"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 gap-2"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
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
