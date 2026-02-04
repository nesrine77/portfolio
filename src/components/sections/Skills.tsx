import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Skill categories based on the GitHub README source of truth
const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Dart", "JavaScript", "TypeScript", "Java", "Kotlin", "Swift", "PHP", "C", "C++"],
    accentColor: "primary",
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Android", "iOS"],
    accentColor: "accent",
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "Bootstrap"],
    accentColor: "primary",
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "Spring Boot", "Flask"],
    accentColor: "accent",
  },
  {
    title: "Databases & Cloud",
    skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Firebase"],
    accentColor: "primary",
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Postman", "Figma"],
    accentColor: "accent",
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="border-none bg-card/50 backdrop-blur-sm hover-lift"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      category.accentColor === "primary" ? "bg-primary" : "bg-accent"
                    }`}
                  />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-md bg-muted/80 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
