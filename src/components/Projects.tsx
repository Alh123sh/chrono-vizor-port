import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, cart management, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Framer Motion"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation platform using OpenAI API. Generate blog posts, social media content, and marketing copy with custom prompts.",
      tech: ["React", "Python", "FastAPI", "OpenAI", "Redis"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website built with modern web technologies. Features smooth animations, dark mode, and optimized performance.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Real-time Chat App",
      description: "Modern chat application with real-time messaging, file sharing, emoji reactions, and group chat functionality.",
      tech: ["Vue.js", "Socket.io", "Express", "MongoDB", "Cloudinary"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      tech: ["JavaScript", "Chart.js", "Weather API", "Leaflet", "Sass"],
      demoUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display font-bold mb-4">
            Featured <span className="bg-text-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="group bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-primary/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-heading text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      asChild
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground"
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            View All Projects on GitHub
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;