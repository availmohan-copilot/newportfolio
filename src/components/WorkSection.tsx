import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Eye } from "lucide-react";

export function WorkSection() {
  const projects = [
    {
      title: "E-commerce Mobile App",
      description: "A comprehensive mobile shopping experience with intuitive navigation, personalized recommendations, and seamless checkout process.",
      image: "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU3MTU2NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Mobile Design", "E-commerce", "User Research", "Prototyping"],
      type: "Mobile App",
      year: "2024",
      role: "Lead UX/UI Designer"
    },
    {
      title: "SaaS Dashboard Interface",
      description: "Enterprise-level dashboard design with complex data visualization, customizable widgets, and role-based access controls.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3MDc0Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Web Design", "Data Visualization", "Design System", "B2B"],
      type: "Web Application",
      year: "2023",
      role: "Senior UX Designer"
    },
    {
      title: "Design System & Component Library",
      description: "Comprehensive design system with 100+ reusable components, design tokens, and detailed documentation for scalable product development.",
      image: "https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHVpJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NzE3NTY5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Design System", "Component Library", "Documentation", "Tokens"],
      type: "Design System",
      year: "2023",
      role: "Design Systems Lead"
    },
    {
      title: "Healthcare Patient Portal",
      description: "Patient-centered digital experience for appointment scheduling, medical records access, and telemedicine consultations.",
      image: "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU3MTU2NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Healthcare", "Accessibility", "User Research", "Compliance"],
      type: "Web & Mobile",
      year: "2024",
      role: "UX/UI Designer"
    },
    {
      title: "FinTech Trading Platform",
      description: "Real-time trading interface with advanced charting, portfolio management, and risk assessment tools for professional traders.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3MDc0Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["FinTech", "Real-time Data", "Complex UI", "Trading"],
      type: "Web Application",
      year: "2023",
      role: "Senior UX Designer"
    },
    {
      title: "Food Delivery App Redesign",
      description: "Complete redesign of a food delivery platform focusing on improved user flow, faster ordering process, and enhanced visual appeal.",
      image: "https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMHVpJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1NzE3NTY5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Mobile Design", "Food & Beverage", "Redesign", "User Flow"],
      type: "Mobile App",
      year: "2022",
      role: "UX/UI Designer"
    }
  ];

  return (
    <section id="work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-primary mb-4">Featured Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my approach to solving complex design challenges across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">Role: {project.role}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}