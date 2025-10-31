import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, Award, GraduationCap } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google via Coursera",
      date: "2023",
      type: "Professional Certificate",
      skills: ["User Research", "Wireframing", "Prototyping", "Figma"]
    },
    {
      title: "Certified Usability Analyst (CUA)",
      issuer: "Human Factors International",
      date: "2022",
      type: "Professional Certification",
      skills: ["Usability Testing", "Heuristic Evaluation", "User Experience"]
    },
    {
      title: "Adobe Certified Expert (ACE) - XD",
      issuer: "Adobe",
      date: "2022",
      type: "Technical Certification",
      skills: ["Adobe XD", "Prototyping", "Design Systems"]
    },
    {
      title: "Design Systems Certification",
      issuer: "Design Systems University",
      date: "2023",
      type: "Specialized Training",
      skills: ["Design Tokens", "Component Libraries", "Scalable Design"]
    },
    {
      title: "Accessibility in Design",
      issuer: "WebAIM",
      date: "2023",
      type: "Accessibility Certification",
      skills: ["WCAG Guidelines", "Inclusive Design", "Screen Readers"]
    },
    {
      title: "Bachelor of Design",
      issuer: "University of Arts & Design",
      date: "2019",
      type: "Academic Degree",
      skills: ["Design Theory", "Visual Communication", "Typography"]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "Academic Degree":
        return <GraduationCap className="w-5 h-5" />;
      case "Professional Certificate":
      case "Professional Certification":
        return <Award className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-primary mb-4">Certifications & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in UX/UI design and related fields
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="h-full hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 text-primary">
                    {getIcon(cert.type)}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <CalendarDays className="w-3 h-3" />
                    {cert.date}
                  </div>
                </div>
                
                <h3 className="text-lg mb-2 leading-tight">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
                
                <Badge variant="outline" className="text-xs mb-4">
                  {cert.type}
                </Badge>
                
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs py-1 px-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Always learning and staying updated with the latest design trends and methodologies
          </p>
        </div>
      </div>
    </section>
  );
}