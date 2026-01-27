import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Director, Software R&D",
    company: "Lectra",
    location: "Bordeaux, France",
    period: "06/2024 - Present",
    description: "Global leader in PLM, CAD/CAM software for fashion, automotive, and furniture industries.",
    highlights: [
      "Lead Industry 4.0 R&D Line with 70 engineers across cloud and embedded software",
      "Drive major architectural refactoring delivering improved cost efficiency and faster time-to-market",
      "Lead structured adoption of AI (Copilot, MCP) within engineering practices",
      "Translate Group R&D strategy into execution-ready roadmaps",
    ],
    aiHighlight: true,
  },
  {
    title: "Vice President, Engineering",
    company: "MSCI",
    location: "Amsterdam, Netherlands",
    period: "11/2021 - 10/2023",
    description: "Global provider of financial indices, analytics platforms, and ESG solutions.",
    highlights: [
      "Led engineering organizations of 100+ people across US, Europe, and Asia",
      "Owned technology strategy across SaaS, Big Data, and Analytics platforms",
      "Led post-acquisition integration across AWS, Azure, GCP, and colocation",
      "Achieved 25% reduction in infrastructure costs while maintaining high availability",
    ],
  },
  {
    title: "Director, Engineering",
    company: "Real Capital Analytics",
    location: "New York, United States",
    period: "02/2019 - 10/2021",
    description: "Analytics platform for commercial real estate markets.",
    highlights: [
      "Tripled engineering organization in 18 months (60 engineers)",
      "Contributed to annual revenue growth exceeding 30%",
      "Migrated critical applications to AWS, reducing downtime by 20%",
      "Established governance based on engineering KPIs",
    ],
  },
  {
    title: "Director, Quality Engineering",
    company: "Real Capital Analytics",
    location: "New York, United States",
    period: "11/2017 - 01/2019",
    description: "Analytics platform for commercial real estate markets.",
    highlights: [
      "Achieved 40% reduction in critical defects through enterprise-scale quality strategy",
      "Structured shift-left automated release processes",
      "Optimized Agile practices, reducing planning overhead by 15%",
    ],
  },
  {
    title: "Early Career - Engineering Leadership",
    company: "SigmaCare | Misys Healthcare Systems",
    location: "New York | Boston | San Francisco",
    period: "09/2004 - 11/2017",
    description: "Healthcare software platforms for long-term and post-acute care.",
    highlights: [
      "Progressive roles from Senior Manager to Director",
      "Created QA Centers of Excellence and CI/CD automation",
      "Led distributed teams across the US and India",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From engineering leadership to executive roles, building and transforming organizations globally.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary glow-effect z-10" />

              {/* Content */}
              <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <Card className={`glass-card p-6 hover:border-primary/50 transition-all duration-300 ${exp.aiHighlight ? 'ring-1 ring-primary/30' : ''}`}>
                  {exp.aiHighlight && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      AI-Focused Role
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <div className="text-lg font-semibold text-primary mb-2">{exp.company}</div>
                  
                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
