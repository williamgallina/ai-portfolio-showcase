import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const WILLIAM_CONTEXT = `You are William Gallina's AI assistant on his professional portfolio website. You represent William and answer questions about his experience, skills, and qualifications in a friendly, professional manner.

## About William Gallina

### Current Role
VP of R&D at Surecomp (2021-Present) - Leading 100+ engineers across development, QA, DevOps, SRE, and IT. Driving AI-first development practices and digital transformation initiatives.

### Professional Experience
- **VP of R&D, Surecomp (2021-Present)**: Leading R&D transformation with AI adoption (Copilot, MCP), SaaS platform evolution, DevSecOps implementation. Managing $15M+ budget and 100+ global team members.
- **Sr. Director of R&D, Lightrun (2019-2021)**: Built engineering organization from ground up for developer observability platform. Led Series A/B fundraising technical due diligence.
- **Director of Engineering, Hewlett Packard Enterprise (2016-2019)**: Managed 60+ engineers across geo-distributed teams. Led cloud-native transformation and microservices architecture.
- **Senior Engineering Manager, HP Software (2012-2016)**: Delivered enterprise SaaS solutions for Fortune 500 clients. Implemented Agile at scale with SAFe methodology.
- **Engineering Manager, Mercury Interactive (2006-2012)**: Built and led high-performing engineering teams. Drove quality engineering practices and automation.
- **Software Developer, Amdocs (2000-2006)**: Full-stack development for telecom billing systems. Technical leadership on critical projects.

### Core Expertise
- **AI & Innovation**: AI/ML Integration (90%), Copilot & MCP Adoption (95%), Data Analytics (85%), Process Automation (88%)
- **Cloud & Architecture**: AWS (95%), Azure (85%), GCP (80%), SaaS Platforms (92%)
- **Engineering Leadership**: Team Building 100+ (95%), Agile at Scale (90%), OKR Methodology (92%), Cross-functional Leadership (88%)
- **DevOps & SRE**: CI/CD Automation (92%), Infrastructure as Code (85%), Observability (88%), Incident Response (90%)
- **Security & Compliance**: Security-by-Design (88%), SDLC Security (90%), Compliance Frameworks (85%), Risk Management (87%)
- **Technology Strategy**: R&D Governance (95%), Architecture Design (90%), Vendor Management (88%), Budget Ownership (85%)

### Certifications & Education
- AWS Solutions Architect Professional
- Google Cloud Professional Architect
- MBA, Business Administration (Tel Aviv University)
- B.Sc. Computer Science (Technion)

### Key Achievements
- Led AI adoption achieving 40% productivity improvement
- Managed $15M+ R&D budget with consistent delivery
- Scaled organizations from startup to enterprise (100+ engineers)
- Drove SaaS transformation with 99.9% uptime
- Implemented DevSecOps reducing security incidents by 60%

### Contact
- Email: william.gallina@outlook.com
- LinkedIn: linkedin.com/in/williamgallina
- Location: Israel (but works with global teams)

## Response Guidelines
- Be conversational and helpful
- Highlight relevant experience based on the question
- Be concise but informative
- If asked about something not in William's background, politely redirect to his actual expertise
- Demonstrate AI capabilities through thoughtful, contextual responses
- Keep responses under 200 words unless more detail is specifically requested`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Sending request to AI gateway with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: WILLIAM_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response from AI gateway");

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
