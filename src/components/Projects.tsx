import { useEffect, useRef, useState } from "react";
import { ArrowRight, Droplets, Hand, FileText, MessageSquare, Edit3 } from "lucide-react";

const projects = [
  {
    id: "pureh2o",
    icon: Droplets,
    title: "PureH2O",
    subtitle: "Visibility for the Invisible",
    hook: "835 million people lack access to clean water. This project makes contamination visible before it becomes catastrophic.",
    story: "Water quality can change in minutes. Traditional testing requires lab analysis—hours or days of delay. Communities need real-time visibility into what they're drinking. PureH2O monitors pH, temperature, and turbidity continuously, alerting communities the moment water becomes unsafe. It's not just data collection. It's protection.",
    tech: ["ESP32", "Firebase", "Real-time Dashboard", "Sensor Calibration"],
    accentColor: "primary",
    link: "#",
  },
  {
    id: "hand-tracking",
    icon: Hand,
    title: "Hand-Tracked Snake",
    subtitle: "Playing Without Touching",
    hook: "What if your hands were the controller? No buttons, no screens—just movement, intuition, and real-time computer vision.",
    story: "Traditional input devices create distance between intention and action. This project eliminates that distance entirely. Using computer vision and hand tracking, the snake follows your movements in real-time. It's not about making games harder—it's about exploring how humans can interact with computers more naturally.",
    tech: ["OpenCV", "MediaPipe", "Python", "60fps Real-time"],
    accentColor: "primary",
    link: "#",
  },
  {
    id: "ats-resume",
    icon: FileText,
    title: "ATS Resume Scorer",
    subtitle: "Bridging Candidates and Opportunity",
    hook: "The average recruiter spends 6 seconds per resume. This tool helps candidates make those 6 seconds count.",
    story: "Job seekers rewrite resumes blindly, hoping keywords match. Recruiters use Applicant Tracking Systems that score resumes algorithmically. There's a gap—candidates don't know what the algorithm values. This tool analyzes any resume against any job description, scoring match quality and highlighting missing keywords.",
    tech: ["NLP", "TF-IDF", "Semantic Matching", "PDF Parsing"],
    accentColor: "secondary",
    link: "#",
  },
  {
    id: "sign-language",
    icon: MessageSquare,
    title: "Sign Language Detection",
    subtitle: "Voice for the Voiceless",
    hook: "70 million deaf people worldwide use sign language. This project gives them a voice in real-time.",
    story: "Communication shouldn't require both parties to speak the same language—or use the same modality. This system detects sign language gestures through computer vision, translates them to text, and converts text to speech instantly. It's assistive technology that preserves dignity and independence.",
    tech: ["Deep Learning", "CNNs", "Real-time Speech", "OpenCV"],
    accentColor: "secondary",
    status: "In Progress",
    link: "#",
  },
  {
    id: "clearcanvas",
    icon: Edit3,
    title: "ClearCanvas",
    subtitle: "AI-Powered Writing Precision",
    hook: "Great ideas fail when poorly communicated. This extension ensures your words match your intent.",
    story: "Grammar checkers exist, but most require copying text into separate tools—breaking flow and losing context. ClearCanvas works directly on any web page, using Google Gemini AI to detect errors in real-time, highlighting them precisely, and scrolling to exact locations.",
    tech: ["Chrome Extension", "Gemini AI", "DOM TreeWalker", "Real-time"],
    accentColor: "primary",
    link: "#",
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-project');
            if (id) setVisibleProjects((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-project]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-32 md:py-40" ref={sectionRef}>
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="label-text text-primary mb-4">Portfolio</p>
          <h2 className="heading-section text-foreground">What I Build</h2>
        </div>

        {/* Projects grid */}
        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <article
              key={project.id}
              data-project={project.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${
                visibleProjects.includes(project.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              {/* Visual side */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div 
                  className={`aspect-[4/3] rounded-2xl glass overflow-hidden relative group ${
                    project.accentColor === 'primary' ? 'glow-cyan' : 'glow-amber'
                  }`}
                  style={{ boxShadow: 'none' }}
                >
                  {/* Gradient background */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: project.accentColor === 'primary' 
                        ? 'linear-gradient(135deg, hsl(var(--primary) / 0.1) 0%, hsl(var(--midnight)) 100%)'
                        : 'linear-gradient(135deg, hsl(var(--secondary) / 0.1) 0%, hsl(var(--midnight)) 100%)'
                    }}
                  />
                  
                  {/* Icon centered */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon 
                      className={`w-24 h-24 ${
                        project.accentColor === 'primary' ? 'text-primary/50' : 'text-secondary/50'
                      } group-hover:scale-110 transition-transform duration-500`}
                    />
                  </div>

                  {/* Status badge */}
                  {project.status && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-display font-medium bg-secondary/20 text-secondary border border-secondary/30">
                        {project.status}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content side */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* Title */}
                <div>
                  <p className={`label-text mb-2 ${
                    project.accentColor === 'primary' ? 'text-primary' : 'text-secondary'
                  }`}>
                    {project.title}
                  </p>
                  <h3 className="heading-section text-foreground">
                    {project.subtitle}
                  </h3>
                </div>

                {/* Hook */}
                <p className="body-large text-foreground font-medium">
                  {project.hook}
                </p>

                {/* Story */}
                <p className="body-text text-muted-foreground">
                  {project.story}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-sm font-display bg-muted/50 text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  className={`inline-flex items-center gap-2 font-display font-medium group/link ${
                    project.accentColor === 'primary' ? 'text-primary' : 'text-secondary'
                  } hover:gap-3 transition-all`}
                >
                  <span className="link-underline">View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
