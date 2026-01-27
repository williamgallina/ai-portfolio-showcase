import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "will.gallina@gmail.com",
    href: "mailto:will.gallina@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+33 7 68 44 22 84",
    href: "tel:+33768442284",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/will-gallina",
    href: "https://linkedin.com/in/will-gallina",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pau, France",
    href: "https://maps.google.com/?q=Pau,France",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 neural-grid opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in discussing engineering leadership, AI adoption, or new opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        {/* Contact cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {contactLinks.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.icon === Linkedin || contact.icon === MapPin ? "_blank" : undefined}
                  rel={contact.icon === Linkedin || contact.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <Card className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <Card className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Engineering Organization?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Whether you're scaling your team, adopting AI practices, or modernizing your tech stack, 
              let's discuss how I can contribute to your success.
            </p>
            <Button size="lg" className="glow-effect" asChild>
              <a href="mailto:will.gallina@gmail.com">
                <Send className="w-4 h-4 mr-2" />
                Start a Conversation
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
