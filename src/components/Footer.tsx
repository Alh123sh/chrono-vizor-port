import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Alex Johnson. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a 
              href="#about" 
              className="hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className="hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-6 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          Built with React, TypeScript, and Tailwind CSS. Deployed with love.
        </div>
      </div>
    </footer>
  );
};

export default Footer;