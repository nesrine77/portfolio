import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    id: 1,
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    category: "AI",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    year: "2023",
    category: "Programming",
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: 3,
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    year: "2023",
    category: "Programming",
    color: "from-yellow-500 to-orange-600",
  },
  {
    id: 4,
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    year: "2023",
    category: "Programming",
    color: "from-yellow-400 to-amber-600",
  },
  {
    id: 5,
    title: "Certificate of bal CDIO 2023",
    issuer: "CDIO Initiative",
    year: "2023",
    category: "Achievement",
    color: "from-green-500 to-teal-600",
  },
  {
    id: 6,
    title: "Certificate of bal CDIO 2024",
    issuer: "CDIO Initiative",
    year: "2024",
    category: "Achievement",
    color: "from-green-500 to-teal-600",
  },
  {
    id: 7,
    title: "2nd Place - Best Video Game Design",
    issuer: "Competition 2023",
    year: "2023",
    category: "Award",
    color: "from-primary to-accent",
    highlight: true,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Certifications & Awards
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className={`hover-lift border-none bg-card/50 backdrop-blur-sm overflow-hidden ${
                cert.highlight ? "ring-2 ring-primary/50" : ""
              }`}
            >
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div
                  className={`h-24 bg-gradient-to-br ${cert.color} flex items-center justify-center relative`}
                >
                  <Award className="w-10 h-10 text-white/90" />
                  {cert.highlight && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-white/20 text-white border-none text-xs">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {cert.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.year}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
