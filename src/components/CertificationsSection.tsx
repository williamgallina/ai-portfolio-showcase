import { Award, GraduationCap, Languages, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const certifications = [
  {
    name: "Workpath OKR Coach",
    issuer: "Workpath",
    year: "2025",
    icon: "🎯",
  },
  {
    name: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    year: "2023",
    icon: "☁️",
  },
  {
    name: "AWS Certified Data Analytics - Specialty",
    issuer: "Amazon Web Services",
    year: "2021",
    icon: "📊",
  },
  {
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    year: "2021",
    icon: "🏗️",
  },
];

const education = [
  {
    degree: "MBA, Computer Sciences & Finance",
    school: "American University Kogod School of Business",
    location: "Washington DC, United States",
  },
  {
    degree: "Master Finance",
    school: "Audencia ESC Nantes",
    location: "Nantes, France",
  },
];

const languages = [
  { name: "French", level: "Native" },
  { name: "English", level: "Bilingual" },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Credentials & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development across cloud, data, and leadership.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Certifications */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Professional Certifications</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="glass-card p-5 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                      <div className="text-xs text-primary mt-1">{cert.year}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & Languages */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="glass-card p-5">
                    <div className="font-semibold text-foreground mb-1">{edu.degree}</div>
                    <div className="text-sm text-primary mb-1">{edu.school}</div>
                    <div className="text-xs text-muted-foreground">{edu.location}</div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Languages className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>

              <Card className="glass-card p-5">
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-foreground">{lang.name}</span>
                      <span className="text-sm text-primary font-medium">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
