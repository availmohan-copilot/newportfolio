import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "Adobe Creative Suite", level: 88 },
        { name: "Principle", level: 80 }
      ]
    },
    {
      title: "Development",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 70 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Framer", level: 75 }
      ]
    },
    {
      title: "UX Methods",
      skills: [
        { name: "User Research", level: 90 },
        { name: "Wireframing", level: 95 },
        { name: "Prototyping", level: 92 },
        { name: "Usability Testing", level: 88 },
        { name: "Design Systems", level: 90 }
      ]
    }
  ];

  const softSkills = [
    "Problem Solving", "User Empathy", "Communication", "Collaboration", 
    "Critical Thinking", "Attention to Detail", "Adaptability", "Leadership"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-primary mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set combining design thinking, technical proficiency, and user-centered methodologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl mb-6">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}