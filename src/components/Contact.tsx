import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Replace these with your EmailJS credentials
      // For now, we'll simulate the email send
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Uncomment and configure when you have EmailJS set up:
      // const result = await emailjs.send(
      //   'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      //   'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     message: formData.message,
      //     to_name: 'Your Name', // Replace with your name
      //   },
      //   'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      // );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
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
            Get In <span className="bg-text-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-heading font-semibold mb-6 text-foreground">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative ideas or 
                partnerships. Feel free to reach out if you'd like to collaborate 
                or just have a chat about technology and design.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Your City, Country</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <motion.a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-secondary hover:bg-primary rounded-lg text-muted-foreground hover:text-primary-foreground transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-secondary hover:bg-primary rounded-lg text-muted-foreground hover:text-primary-foreground transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-secondary hover:bg-primary rounded-lg text-muted-foreground hover:text-primary-foreground transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-heading text-foreground">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border/50 focus:border-primary"
                      disabled={isLoading}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border/50 focus:border-primary"
                      disabled={isLoading}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="bg-background border-border/50 focus:border-primary resize-none"
                      disabled={isLoading}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-glow hover:shadow-elegant transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;