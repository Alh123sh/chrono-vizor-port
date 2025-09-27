import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
          <div className="text-center mb-16">
            <h2 className="text-display font-bold mb-4">
              About <span className="bg-text-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital solutions that make a difference
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio */}
            <div className="space-y-6">
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
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="text-center">
            <h3 className="text-heading font-semibold mb-8 text-foreground">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;