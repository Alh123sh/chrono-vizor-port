import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import developerPortrait from "@/assets/developer-portrait.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-hero font-bold mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  Alex Johnson
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
                Full-Stack Developer & UI/UX Designer
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                I create exceptional digital experiences through clean code, intuitive design, 
                and cutting-edge technology. Let's build something amazing together.
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="mailto:your.email@example.com" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110"
                animate={{ 
                  scale: [1.1, 1.2, 1.1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.img
                src={developerPortrait}
                alt="Alex Johnson - Full-Stack Developer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-elegant border-4 border-primary/20"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "hsl(var(--primary) / 0.4)"
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;