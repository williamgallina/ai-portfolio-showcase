import { useEffect, useState } from "react";
import { Mail, Linkedin, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const titles = [
  "VP of Engineering",
  "Director of Software R&D",
  "AI & Cloud Strategist",
  "Engineering Leader",
];

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = titles[currentTitle];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === title) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      } else if (isDeleting) {
        setDisplayedText(title.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(title.substring(0, displayedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitle]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-grid">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">Open to new opportunities</span>
          </div>

          {/* Name */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">William</span>{" "}
            <span className="gradient-text">Gallina</span>
          </h1>

          {/* Animated title */}
          <div 
            className="h-12 flex items-center justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-xl md:text-2xl text-muted-foreground font-mono">
              {displayedText}
              <span className="border-r-2 border-primary ml-1 animate-blink" />
            </span>
          </div>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            17+ years building and scaling engineering organizations at the intersection of 
            <span className="text-primary"> software</span>, 
            <span className="text-primary"> cloud platforms</span>, and 
            <span className="text-primary"> AI-driven innovation</span>.
          </p>

          {/* Location */}
          <div 
            className="flex items-center justify-center gap-2 text-muted-foreground opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <MapPin className="w-4 h-4" />
            <span>Pau, France</span>
            <span className="mx-2">•</span>
            <span>International Experience</span>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap items-center justify-center gap-4 pt-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button 
              size="lg" 
              className="glow-effect"
              onClick={scrollToContact}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a 
                href="/William_Gallina_Resume.pdf"
                download="William_Gallina_Resume.pdf"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              asChild
            >
              <a 
                href="https://linkedin.com/in/will-gallina" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Quick stats */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            {[
              { value: "17+", label: "Years Experience" },
              { value: "100+", label: "Engineers Led" },
              { value: "3", label: "Continents" },
              { value: "4", label: "AWS/GCP Certs" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
