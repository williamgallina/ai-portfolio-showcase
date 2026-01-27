import { useState } from "react";
import { 
  Brain, 
  Cloud, 
  Shield, 
  Users, 
  Zap, 
  Database,
  GitBranch,
  Gauge,
  Layers,
  Globe
} from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "AI & Innovation",
    icon: Brain,
    color: "from-primary to-cyan-400",
    skills: [
      { name: "AI/ML Integration", level: 90 },
      { name: "Copilot & MCP Adoption", level: 95 },
      { name: "Data Analytics", level: 85 },
      { name: "Process Automation", level: 88 },
    ],
  },
  {
    title: "Cloud & Architecture",
    icon: Cloud,
    color: "from-blue-500 to-purple-500",
    skills: [
      { name: "AWS", level: 95 },
      { name: "Azure", level: 85 },
      { name: "GCP", level: 80 },
      { name: "SaaS Platforms", level: 92 },
    ],
  },
  {
    title: "Engineering Leadership",
    icon: Users,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Team Building (100+)", level: 95 },
      { name: "Agile at Scale", level: 90 },
      { name: "OKR Methodology", level: 92 },
      { name: "Cross-functional Leadership", level: 88 },
    ],
  },
  {
    title: "DevOps & SRE",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "CI/CD Automation", level: 92 },
      { name: "Infrastructure as Code", level: 85 },
      { name: "Observability", level: 88 },
      { name: "Incident Response", level: 90 },
    ],
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "Security-by-Design", level: 88 },
      { name: "SDLC Security", level: 90 },
      { name: "Compliance Frameworks", level: 85 },
      { name: "Risk Management", level: 87 },
    ],
  },
  {
    title: "Technology Strategy",
    icon: Layers,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "R&D Governance", level: 95 },
      { name: "Architecture Design", level: 90 },
      { name: "Vendor Management", level: 88 },
      { name: "Budget Ownership", level: 85 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="space-y-2"
      onMouseEnter={() => setIsVisible(true)}
    >
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{name}</span>
        <span className="text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDelay: `${delay * 100}ms`,
          }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 neural-grid opacity-30" />
      
      <div className="container px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Core <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining technical depth with strategic vision to drive engineering excellence.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
                onMouseEnter={() => setHoveredCard(index)}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={hoveredCard === index ? skillIndex : 0}
                    />
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
