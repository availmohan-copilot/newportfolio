import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ExternalLink, Eye, ChevronRight, Play, Heart } from "lucide-react";

const caseStudyImage = "https://images.unsplash.com/photo-1761311984472-fb2e35f645d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjE4NzE4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const voyagerImage = "https://images.unsplash.com/photo-1759912255512-c5e56b4e5e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pY2F0aW9uJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxODQ3OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const siemensImage = "https://images.unsplash.com/photo-1631557677599-ee5fe0b3440b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGlhZ25vc2lzJTIwZGV2aWNlfGVufDF8fHx8MTc2MTg5NTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const bgcaImage = "https://images.unsplash.com/photo-1575985977334-ca65c2d8941a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbHViJTIwbWVtYmVyc2hpcCUyMHdvcmtmbG93fGVufDF8fHx8MTc2MTg5NTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const hooHooImage = "https://images.unsplash.com/photo-1630442923896-244dd3717b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB3ZWF0aGVyJTIwYXBwfGVufDF8fHx8MTc2MTg5NTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const wellMonitorDashboard = "https://images.unsplash.com/photo-1714322148068-923f9f9bfc1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwbW9uaXRvcmluZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjE4OTUwNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface WorkSectionV2Props {
  onViewCaseStudy?: (projectId: string) => void;
}

export function WorkSectionV2({ onViewCaseStudy }: WorkSectionV2Props) {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      id: "aecom-well-monitoring",
      title: "AECOM Well Monitoring",
      description: "A field data collection app for tablet and mobile devices that helps technicians record well readings on-site. Features predefined measurement tracking, real-time alerts for out-of-range values, and seamless data transmission to supervisors.",
      image: wellMonitorDashboard,
      tags: ["Field Data Collection", "Mobile App", "Environmental Monitoring", "IoT"],
      type: "Tablet & Mobile App",
      year: "2024",
      role: "Senior UX Designer",
      featured: true,
      color: "from-blue-600 to-indigo-600",
      stats: { readings: "2.5K+", accuracy: "99%", sites: "125+" },
      caseStudy: true
    },
    {
      id: "ai-chat-assistant",
      title: "AI Chat Assistant",
      description: "A conversational AI interface with context-aware responses, multi-language support, and seamless integration with business tools. Designed for enterprise customer support and internal assistance.",
      image: "https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwbW9iaWxlJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NzY4NTYyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Conversational AI", "Chat Interface", "NLP", "Enterprise"],
      type: "Web & Mobile",
      year: "2024",
      role: "Senior AI UX Designer",
      featured: true,
      color: "from-blue-500 to-purple-500",
      stats: { users: "50K+", resolution: "85%", response: "2s" },
      caseStudy: true
    },
    {
      id: "ai-workflow-automation",
      title: "AI Workflow Automation",
      description: "An intelligent workflow orchestration platform that uses AI to optimize business processes, predict bottlenecks, and automatically adapt workflows based on real-time data and performance metrics.",
      image: "https://images.unsplash.com/photo-1634836466795-2b71a032821c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGF1dG9tYXRpb24lMjBzb2Z0d2FyZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTc2ODU2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Workflow AI", "Process Automation", "Predictive Analytics", "Optimization"],
      type: "Enterprise Platform",
      year: "2024",
      role: "Lead Process Designer",
      featured: true,
      color: "from-orange-500 to-pink-500",
      stats: { workflows: "500+", savings: "40%", speed: "+3x" },
      caseStudy: true
    },
    {
      id: "smart-learning-app",
      title: "Smart Learning Mobile App",
      description: "A comprehensive educational platform with personalized learning paths, interactive content, and progress tracking. Features user research, persona development, and iterative design process.",
      image: caseStudyImage,
      tags: ["Mobile Design", "EdTech", "User Research", "Design System"],
      type: "Mobile App",
      year: "2024",
      role: "Lead UX/UI Designer",
      featured: true,
      color: "from-blue-500 to-cyan-500",
      stats: { users: "25K+", rating: "4.9", engagement: "+60%" },
      caseStudy: true
    },
    {
      id: "voyager-communication",
      title: "Voyager Communication Module",
      description: "A comprehensive communication platform for Mars Group featuring video calling, MMS messaging, and advanced opt-in/opt-out texting capabilities. Designed to streamline client communications and enhance user engagement.",
      image: voyagerImage,
      tags: ["Video Calling", "MMS", "Messaging", "Client Communication"],
      type: "Web Application",
      year: "2023",
      role: "Senior UX Designer",
      client: "Mars Group",
      featured: true,
      color: "from-purple-500 to-blue-500",
      stats: { calls: "100K+", messages: "2M+", engagement: "+75%" },
      caseStudy: true
    },
    {
      id: "siemens-diagnosis-ui",
      title: "Siemens Diagnosis Device UI",
      description: "Intuitive touch interface for Siemens blood sample testing device. Designed for medical professionals to efficiently conduct tests, view results, and manage patient data with precision and ease.",
      image: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGV2aWNlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1NzYxMDI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Medical Device", "Touch Interface", "Healthcare", "Diagnostics"],
      type: "Device UI",
      year: "2023",
      role: "Medical UX Designer",
      client: "Siemens",
      featured: true,
      color: "from-teal-500 to-green-500",
      stats: { accuracy: "99.2%", speed: "+40%", satisfaction: "4.8/5" },
      caseStudy: true
    },
    {
      id: "bgca-membership",
      title: "BGCA Club Membership",
      description: "Streamlined digital workflow for Boys & Girls Clubs of America member registration. Created an intuitive multi-step process for club membership enrollment, document verification, and parent consent management.",
      image: bgcaImage,
      tags: ["Registration", "Youth Services", "Workflow", "Non-profit"],
      type: "Web Application",
      year: "2023",
      role: "UX Designer",
      client: "BGCA",
      featured: false,
      color: "from-indigo-500 to-purple-500",
      stats: { registrations: "15K+", completion: "85%", time: "-50%" },
      caseStudy: true
    },
    {
      id: "bgca-safety-assessment",
      title: "BGCA Safety Assessment",
      description: "Comprehensive safety assessment workflow for Boys & Girls Clubs of America. Digital transformation of safety protocols, incident reporting, and compliance tracking to ensure secure environments for youth programs.",
      image: bgcaImage,
      tags: ["Safety Assessment", "Compliance", "Youth Protection", "Workflow"],
      type: "Web Application", 
      year: "2023",
      role: "UX Designer",
      client: "BGCA",
      featured: false,
      color: "from-red-500 to-orange-500",
      stats: { assessments: "5K+", compliance: "98%", incidents: "-30%" },
      caseStudy: true
    },
    {
      id: "smart-travel-planner",
      title: "Hoo Hoo",
      description: "An intelligent travel planning app with weather-based destination suggestions, AI-powered travel recommendations, and comprehensive trip planning. Features destination details, cost analysis, and personalized travel insights.",
      image: hooHooImage,
      tags: ["AI Travel", "Weather Integration", "Route Planning", "Smart Suggestions"],
      type: "Mobile App",
      year: "2024",
      role: "Lead UX/UI Designer",
      featured: true,
      color: "from-teal-500 to-blue-500",
      stats: { destinations: "500+", users: "5K+", accuracy: "95%" },
      caseStudy: true
    }
  ];

  const handleCaseStudyClick = (project: any) => {
    if (project.caseStudy && onViewCaseStudy) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        onViewCaseStudy(project.id);
      }, 300);
    }
  };

  return (
    <section ref={ref} id="work" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+Cjwvc3ZnPgo=')] opacity-40"></div>
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
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
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Featured Work
            </h2>
          </motion.div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my approach to solving complex design challenges across various industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <Card className="overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 h-full">
                {project.featured && (
                  <motion.div
                    className="absolute top-4 left-4 z-20"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-3 py-1">
                      <Heart className="w-3 h-3 text-white fill-white" />
                      <span className="text-xs text-white font-medium">Featured</span>
                    </div>
                  </motion.div>
                )}

                {project.caseStudy && (
                  <motion.div
                    className="absolute top-4 right-4 z-20"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-3 py-1">
                      <Eye className="w-3 h-3 text-white" />
                      <span className="text-xs text-white font-medium">Case Study</span>
                    </div>
                  </motion.div>
                )}

                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="flex gap-3">
                      <motion.button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleCaseStudyClick(project)}
                      >
                        <Eye className="w-5 h-5 text-white" />
                      </motion.button>
                      <motion.button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-5 h-5 text-white" />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant="outline" 
                      className={`text-xs bg-gradient-to-r ${project.color} text-white border-0`}
                    >
                      {project.type}
                    </Badge>
                    <span className="text-xs text-white/60">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-white/70 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Project Stats */}
                  <motion.div 
                    className="grid grid-cols-3 gap-2 mb-4 p-3 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredProject === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-sm text-white font-medium">{value}</div>
                        <div className="text-xs text-white/60 capitalize">{key}</div>
                      </div>
                    ))}
                  </motion.div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-white/60 mb-2">Role: {project.role}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.5 + index * 0.1 + tagIndex * 0.05 
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs bg-white/10 text-white border border-white/20 hover:bg-white/20"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <motion.div 
                    className="mt-4 pt-4 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    animate={hoveredProject === index ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-white hover:bg-white/10 hover:text-blue-300 transition-colors"
                      onClick={() => handleCaseStudyClick(project)}
                    >
                      {project.caseStudy ? 'View Case Study' : 'View Project'}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40 rounded-xl px-8 py-3"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}