import { useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const certifications = [
  {
    id: 1,
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    category: "AI",
    color: "from-blue-500 to-purple-600",
    link: "https://www.linkedin.com/learning/certificates/0afad67766444e6c2bac4f9accd460b9400b1506f91adf4a0497daf32a9d8f18",
  },
  {
    id: 2,
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    year: "2025",
    category: "Programming",
    color: "from-yellow-500 to-orange-600",
    image: "/assets/certifications/python-essentials1-certif.jpeg",
  },
  {
    id: 3,
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    year: "2025",
    category: "Programming",
    color: "from-yellow-500 to-orange-600",
    image: "/assets/certifications/python-essentials2-certif.jpeg",
  },
  {
    id: 4,
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy",
    year: "2025",
    category: "Programming",
    color: "from-yellow-400 to-amber-600",
    image: "/assets/certifications/javascript-essentials2-certif.jpeg",
  },
  {
    id: 5,
    title: "Certificate of bal CDIO 2023",
    issuer: "CDIO Initiative",
    year: "2023",
    category: "Achievement",
    color: "from-green-500 to-teal-600",
    image: "/assets/certifications/Certificate-of-bal-CDIO-2023.jpeg",
  },
  {
    id: 6,
    title: "Certificate of bal CDIO 2024",
    issuer: "CDIO Initiative",
    year: "2024",
    category: "Achievement",
    color: "from-green-500 to-teal-600",
    image: "/assets/certifications/Certificate-of-bal-CDIO-2024.jpeg",
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
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (certId: number) => {
    setImageErrors((prev) => new Set(prev).add(certId));
  };

  const handleHeaderClick = (cert: typeof certifications[0]) => {
    if (cert.link) {
      window.open(cert.link, "_blank");
    } else if (cert.image && !imageErrors.has(cert.id)) {
      setSelectedCert(cert);
    }
  };

  const hasClickableHeader = (cert: typeof certifications[0]) => {
    return cert.link || (cert.image && !imageErrors.has(cert.id));
  };

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
                {/* Header with image or gradient */}
                <div
                  className={`h-24 relative overflow-hidden ${
                    hasClickableHeader(cert) ? "cursor-pointer group" : ""
                  }`}
                  onClick={() => handleHeaderClick(cert)}
                >
                  {cert.image && !imageErrors.has(cert.id) ? (
                    <>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={() => handleImageError(cert.id)}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </>
                  ) : (
                    <div
                      className={`h-full bg-gradient-to-br ${cert.color} flex items-center justify-center`}
                    >
                      <Award className="w-10 h-10 text-white/90" />
                    </div>
                  )}
                  
                  {cert.link && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-white/90 text-foreground border-none text-xs gap-1">
                        <ExternalLink className="w-3 h-3" />
                        View
                      </Badge>
                    </div>
                  )}
                  
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

        {/* Image Preview Dialog */}
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden bg-transparent border-none">
            <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
            {selectedCert?.image && (
              <div className="relative">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {selectedCert.issuer} • {selectedCert.year}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
