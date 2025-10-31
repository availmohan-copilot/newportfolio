import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowLeft, ExternalLink, Calendar, User, Target, Lightbulb, Users, TestTube, Smartphone, Eye } from "lucide-react";

const caseStudyImage = "https://images.unsplash.com/photo-1761311984472-fb2e35f645d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjE4NzE4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

interface CaseStudyPageProps {
  onBack: () => void;
}

export function CaseStudyPage({ onBack }: CaseStudyPageProps) {
  const [activeSection, setActiveSection] = useState('overview');

  const projectDetails = {
    title: "Smart Learning Mobile App",
    subtitle: "Revolutionizing Educational Technology",
    duration: "4 months",
    team: "4 designers, 6 developers",
    role: "Lead UX/UI Designer",
    year: "2024"
  };

  const sections = [
    { id: 'overview', label: 'Overview', icon: <Eye className="w-4 h-4" /> },
    { id: 'research', label: 'Research', icon: <TestTube className="w-4 h-4" /> },
    { id: 'design', label: 'Design Process', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'solution', label: 'Solution', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'results', label: 'Results', icon: <Target className="w-4 h-4" /> }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
      {/* Header */}
      <motion.header 
        className="fixed top-4 left-4 right-4 z-50 backdrop-blur-xl bg-black/10 border border-white/10 rounded-2xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={onBack}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </motion.button>
            
            <nav className="hidden md:flex items-center gap-1">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    {section.icon}
                    <span>{section.label}</span>
                  </div>
                </motion.button>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="mb-6">
              <Badge 
                variant="secondary" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 mb-4"
              >
                Case Study
              </Badge>
              <h1 className="text-5xl lg:text-7xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
                {projectDetails.title}
              </h1>
              <p className="text-xl text-white/70 mb-8">{projectDetails.subtitle}</p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { icon: <Calendar className="w-5 h-5" />, label: "Duration", value: projectDetails.duration },
                { icon: <User className="w-5 h-5" />, label: "Role", value: projectDetails.role },
                { icon: <Users className="w-5 h-5" />, label: "Team", value: projectDetails.team }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 mx-auto">
                    <div className="text-blue-400">{item.icon}</div>
                  </div>
                  <p className="text-sm text-white/60">{item.label}</p>
                  <p className="text-white">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Case Study Image */}
          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
              <img
                src={caseStudyImage}
                alt="Smart Learning App Case Study"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation - Mobile Hidden */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-white mb-4">Navigation</h3>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <motion.button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                          activeSection === section.id
                            ? 'bg-white/20 text-white'
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        {section.icon}
                        <span>{section.label}</span>
                      </motion.button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Overview Section */}
            <motion.section 
              id="overview"
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-white">Project Overview</h2>
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl text-white mb-4">The Challenge</h3>
                      <p className="text-white/70 leading-relaxed">
                        Traditional learning platforms often fail to engage students effectively, leading to low completion rates 
                        and poor learning outcomes. Students struggle with one-size-fits-all approaches that don't adapt to their 
                        individual learning styles and pace.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl text-white mb-4">The Solution</h3>
                      <p className="text-white/70 leading-relaxed">
                        We designed an intelligent learning platform that adapts to each student's learning style, provides 
                        personalized content recommendations, and uses gamification to maintain engagement throughout the 
                        learning journey.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Research Section */}
            <motion.section 
              id="research"
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-white">Research & Discovery</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "User Interviews", value: "25+", description: "Students and educators" },
                  { title: "Survey Responses", value: "150+", description: "Learning preferences" },
                  { title: "Competitor Analysis", value: "12", description: "Leading platforms" }
                ].map((stat, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl text-blue-400 mb-2">{stat.value}</div>
                      <h4 className="text-white mb-2">{stat.title}</h4>
                      <p className="text-sm text-white/60">{stat.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>

            {/* Design Process Section */}
            <motion.section 
              id="design"
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-white">Design Process</h2>
              <div className="space-y-6">
                {[
                  { phase: "1. Empathize", description: "Conducted user interviews and created detailed personas based on learning preferences and goals." },
                  { phase: "2. Define", description: "Synthesized research findings to define core problems and establish design principles." },
                  { phase: "3. Ideate", description: "Generated multiple solution concepts through brainstorming sessions and design workshops." },
                  { phase: "4. Prototype", description: "Created low and high-fidelity prototypes to test key interactions and user flows." },
                  { phase: "5. Test", description: "Conducted usability testing with target users to validate design decisions." }
                ].map((step, index) => (
                  <Card key={index} className="bg-white/5 backdrop-blur-xl border border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-white mb-2">{step.phase}</h4>
                          <p className="text-white/70">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>

            {/* Solution Section */}
            <motion.section 
              id="solution"
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-white">Final Solution</h2>
              <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-xl text-white">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { title: "Personalized Learning Paths", description: "AI-driven content adaptation based on learning style and progress" },
                        { title: "Interactive Content", description: "Multimedia lessons with quizzes, videos, and hands-on exercises" },
                        { title: "Progress Tracking", description: "Real-time analytics and achievement badges to motivate learners" },
                        { title: "Community Features", description: "Peer collaboration tools and mentor support system" }
                      ].map((feature, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                          <div>
                            <h4 className="text-white mb-1">{feature.title}</h4>
                            <p className="text-sm text-white/70">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Results Section */}
            <motion.section 
              id="results"
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl text-white">Results & Impact</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                  <CardContent className="p-8">
                    <h3 className="text-xl text-white mb-6">Metrics</h3>
                    <div className="space-y-4">
                      {[
                        { metric: "User Engagement", value: "+60%", description: "Increase in daily active users" },
                        { metric: "Completion Rate", value: "+45%", description: "Course completion improvement" },
                        { metric: "User Satisfaction", value: "4.9/5", description: "Average app store rating" }
                      ].map((result, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div>
                            <p className="text-white">{result.metric}</p>
                            <p className="text-xs text-white/60">{result.description}</p>
                          </div>
                          <div className="text-2xl text-blue-400 font-bold">{result.value}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
                  <CardContent className="p-8">
                    <h3 className="text-xl text-white mb-6">Learnings</h3>
                    <div className="space-y-4 text-white/70">
                      <p>• Personalization significantly impacts user engagement and retention</p>
                      <p>• Gamification elements must be balanced to avoid distraction from learning goals</p>
                      <p>• Community features drive peer-to-peer learning and motivation</p>
                      <p>• Accessibility considerations are crucial for inclusive design</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div 
              className="text-center pt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl text-white mb-6">Interested in this project?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 rounded-xl px-8"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={onBack}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 rounded-xl px-8"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Portfolio
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}