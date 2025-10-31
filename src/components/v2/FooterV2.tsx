import { motion } from "motion/react";
import { Heart, ArrowUp } from "lucide-react";

export function FooterV2() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIi8+Cjwvc3ZnPgo=')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm text-white/70 flex items-center gap-2">
              <span>© {currentYear} Mohan D.</span>
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              </motion.div>
              <span>and lots of coffee</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-6 text-sm text-white/60">
              <motion.button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                About
              </motion.button>
              <motion.button 
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Work
              </motion.button>
              <motion.button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Contact
              </motion.button>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-4 h-4 text-white group-hover:text-blue-300 transition-colors" />
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-6 pt-6 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs text-white/50">
            <span>Designed with passion, built with modern web technologies</span>
            <span className="hidden md:inline">•</span>
            <span>React • Tailwind CSS • Framer Motion</span>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute bottom-4 left-1/4 w-2 h-2 bg-blue-500/30 rounded-full blur-sm"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute bottom-6 right-1/3 w-1 h-1 bg-purple-500/30 rounded-full blur-sm"
        animate={{
          y: [0, -8, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
    </footer>
  );
}