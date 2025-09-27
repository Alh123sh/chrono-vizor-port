import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "Figma"
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display font-bold mb-4">
              About <span className="bg-text-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital solutions that make a difference
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience 
                creating web applications that solve real-world problems. My journey 
                started with a Computer Science degree, but my true learning comes 
                from building projects and staying curious about new technologies.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                I specialize in React, Node.js, and modern web technologies, with 
                a keen eye for design and user experience. When I'm not coding, 
                you'll find me contributing to open-source projects, writing 
                technical blogs, or exploring the latest in AI and web3.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                I believe in writing clean, maintainable code and creating 
                applications that are not just functional, but delightful to use.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-heading font-semibold mb-8 text-foreground">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge 
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;