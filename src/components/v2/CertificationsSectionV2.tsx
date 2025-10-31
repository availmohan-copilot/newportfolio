import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { CalendarDays, Award, GraduationCap, Star, ExternalLink } from "lucide-react";

export function CertificationsSectionV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const certifications = [
    {
      title: "Multimedia Specialist",
      issuer: "Arena Animation Academy",
      date: "2008",
      type: "Professional Certificate",
      skills: ["Multimedia Design", "Animation", "Visual Effects", "Digital Art"],
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "User Experience Specialist",
      issuer: "UX Mint",
      date: "2022",
      type: "Professional Certification",
      skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      featured: true,
      color: "from-purple-500 to-pink-500"
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
    <section ref={ref} id="certifications" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+Cjwvc3ZnPgo=')] opacity-40"></div>
        <motion.div
          className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
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
            className="inline-flex items-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Certifications & Education
            </h2>
          </motion.div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Continuous learning and professional development in UX/UI design and related fields
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Card className="h-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                {cert.featured && (
                  <motion.div
                    className="absolute top-4 right-4 z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                )}
                
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                />

                <CardContent className="p-6 relative">
                  <motion.div 
                    className="flex items-start justify-between mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className={`flex items-center gap-2 text-white p-2 rounded-lg bg-gradient-to-r ${cert.color}`}>
                      {getIcon(cert.type)}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <CalendarDays className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-lg text-white mb-3 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    {cert.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-white/70 text-sm mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    {cert.issuer}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="text-xs mb-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      {cert.type}
                    </Badge>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <p className="text-xs text-white/60">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.7 + index * 0.1 + skillIndex * 0.05 
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className={`text-xs py-1 px-3 bg-gradient-to-r ${cert.color} text-white border-0 hover:opacity-80 transition-opacity`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Always learning and staying updated with the latest design trends</span>
            <ExternalLink className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}