import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Palette, Code, Brain, Zap } from "lucide-react";

export function SkillsSectionV2() {
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: "Design Tools",
      icon: <Palette className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
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
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 40 },
        { name: "React", level: 40 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Framer", level: 75 }
      ]
    },
    {
      title: "UX Methods",
      icon: <Brain className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
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

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const newAnimatedSkills: { [key: string]: number } = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            newAnimatedSkills[skill.name] = skill.level;
          });
        });
        setAnimatedSkills(newAnimatedSkills);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={ref} id="skills" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+Cjwvc3ZnPgo=')] opacity-30"></div>
        <motion.div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </motion.div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            A diverse skill set combining design thinking, technical proficiency, and user-centered methodologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                <CardContent className="p-8">
                  <motion.div 
                    className="text-center mb-8"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl text-white font-medium">{category.title}</h3>
                  </motion.div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className="space-y-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: (index * 0.2) + (skillIndex * 0.1) }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white/90 text-sm">{skill.name}</span>
                          <motion.span 
                            className="text-xs text-blue-300 font-medium"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 1 + (index * 0.2) + (skillIndex * 0.1) }}
                          >
                            {animatedSkills[skill.name] || 0}%
                          </motion.span>
                        </div>
                        <div className="relative">
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${animatedSkills[skill.name] || 0}%` } : {}}
                              transition={{ 
                                duration: 1.5, 
                                delay: 1 + (index * 0.2) + (skillIndex * 0.1),
                                ease: "easeOut"
                              }}
                            />
                          </div>
                          {/* Glow effect */}
                          <motion.div
                            className={`absolute top-0 h-2 bg-gradient-to-r ${category.color} rounded-full blur-sm opacity-50`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${animatedSkills[skill.name] || 0}%` } : {}}
                            transition={{ 
                              duration: 1.5, 
                              delay: 1 + (index * 0.2) + (skillIndex * 0.1),
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl text-white mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge 
                  variant="secondary" 
                  className="text-sm py-3 px-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}