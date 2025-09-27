import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      description: "Lead development of enterprise web applications serving 100k+ users. Architected scalable microservices and implemented CI/CD pipelines.",
      skills: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2022 - 2023",
      description: "Built responsive web applications and mobile-first interfaces. Collaborated with design team to implement pixel-perfect UI components.",
      skills: ["Vue.js", "TypeScript", "Tailwind CSS", "Figma"]
    },
    {
      type: "work",
      title: "Junior Developer",
      company: "WebAgency Pro",
      period: "2021 - 2022",
      description: "Developed custom WordPress themes and plugins. Maintained client websites and implemented SEO best practices.",
      skills: ["WordPress", "PHP", "JavaScript", "MySQL"]
    },
    {
      type: "education",
      title: "Bachelor of Computer Science",
      company: "University of Technology",
      period: "2018 - 2021",
      description: "Graduated with honors. Focused on software engineering, algorithms, and database systems. Led the coding club and organized hackathons.",
      skills: ["Data Structures", "Algorithms", "Software Engineering", "Database Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display font-bold mb-4">
            Experience & <span className="bg-text-gradient bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-border"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow z-10">
                  </div>

                  {/* Timeline Icon */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center z-20">
                    {exp.type === "work" ? (
                      <Briefcase className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-primary" />
                    )}
                  </div>

                  {/* Content Card */}
                  <Card 
                    className={`ml-20 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    } md:w-1/2 bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group`}
                  >
                    <CardContent className="p-6">
                      {/* Period Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-primary" />
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {exp.period}
                        </Badge>
                      </div>

                      {/* Title and Company */}
                      <h3 className="text-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium mb-4">{exp.company}</p>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="secondary"
                            className="text-xs bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;