import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Dribbble, MessageCircle, Calendar, Coffee, Send } from "lucide-react";

export function ContactSectionV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "mohan@ilink-systems.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9500156499",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Chennai, India",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", color: "from-blue-600 to-blue-500", url: "https://www.linkedin.com/in/mohan-d-47214019" }
  ];

  const availability = [
    { icon: <MessageCircle className="w-4 h-4" />, text: "Full-time opportunities" },
    { icon: <Calendar className="w-4 h-4" />, text: "Design consultations" },
    { icon: <Send className="w-4 h-4" />, text: "Speaking engagements" }
  ];

  return (
    <section ref={ref} id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+Cjwvc3ZnPgo=')] opacity-40"></div>
        <motion.div
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
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
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
          </motion.div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-xl text-white mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-4 group cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-white/60">{info.label}</p>
                        <p className="text-sm text-white group-hover:text-blue-300 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="pt-8 border-t border-white/10 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <p className="text-sm text-white/60 mb-4">Follow me on</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      >
                        <div className="text-white">
                          {social.icon}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 h-full">
              <CardContent className="p-8">
                <h4 className="text-xl text-white mb-6">Available For</h4>
                <div className="space-y-6">
                  {availability.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 text-white/80 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-blue-400">
                          {item.icon}
                        </div>
                      </div>
                      <span className="text-base">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}