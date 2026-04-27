import { useEffect, useRef, useState } from "react";
import { Briefcase, ArrowRight } from "lucide-react";

const contributions = [
  "Assisted in developing AI and data-driven solutions for real-world business needs",
  "Supported machine learning model testing and basic deployment workflows",
  "Worked with Python tools for data analysis, automation, and preprocessing",
  "Collaborated with engineers to improve system workflows and efficiency",
];

const skillsGained = [
  "Work within a team environment",
  "Write maintainable and understandable code",
  "Think about scalability and real-world constraints",
  "Communicate ideas clearly with both technical and non-technical stakeholders",
];

const WorkExperience = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 md:py-40 relative overflow-hidden"
    >
      {/* Deep "thinking" background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--midnight-deep)) 0%, hsl(var(--midnight)) 60%, hsl(var(--background)) 100%)",
        }}
      />

      {/* Soft glow accent */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "var(--gradient-cyan)" }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div
          className={`max-w-3xl mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="label-text text-primary mb-4">Real-World Impact</p>
          <h2 className="heading-section text-foreground">
            From Learning to <span className="text-gradient-cyan">Contribution</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Pipeline visualization */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Pipeline SVG */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="flow" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>

                {/* Connection lines */}
                <path
                  d="M80 80 Q200 80 200 200 T320 320"
                  stroke="url(#flow)"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  opacity="0.6"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-20"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M80 320 Q200 320 200 200 T320 80"
                  stroke="url(#flow)"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  opacity="0.6"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-20"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M80 200 L320 200"
                  stroke="hsl(var(--primary) / 0.4)"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                />

                {/* Nodes */}
                {[
                  { cx: 80, cy: 80, label: "Data" },
                  { cx: 320, cy: 80, label: "Model" },
                  { cx: 200, cy: 200, label: "AI Core" },
                  { cx: 80, cy: 320, label: "Deploy" },
                  { cx: 320, cy: 320, label: "Impact" },
                ].map((n, i) => (
                  <g key={i}>
                    <circle
                      cx={n.cx}
                      cy={n.cy}
                      r="28"
                      fill="hsl(var(--card))"
                      stroke="hsl(var(--primary))"
                      strokeWidth="1.5"
                      opacity="0.9"
                    />
                    <circle
                      cx={n.cx}
                      cy={n.cy}
                      r="6"
                      fill="hsl(var(--primary))"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.4;1;0.4"
                        dur={`${2 + i * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                    <text
                      x={n.cx}
                      y={n.cy + 50}
                      textAnchor="middle"
                      fill="hsl(var(--muted-foreground))"
                      fontSize="11"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {n.label}
                    </text>
                  </g>
                ))}

                {/* Center pulse */}
                <circle
                  cx="200"
                  cy="200"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="1"
                  opacity="0.4"
                >
                  <animate
                    attributeName="r"
                    values="30;60;30"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0;0.6"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`lg:col-span-7 space-y-10 transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Role card */}
            <div className="glass rounded-2xl p-6 md:p-8 border-l-2 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-1">
                    AI / ML Engineer Intern
                  </h3>
                  <p className="text-primary font-medium mb-1">Residue Solutions</p>
                  <p className="text-sm text-muted-foreground font-mono">
                    6 Months · Internship
                  </p>
                </div>
              </div>
            </div>

            {/* Hook quote */}
            <blockquote
              className="border-l-2 pl-6 py-2"
              style={{ borderColor: "hsl(var(--secondary))" }}
            >
              <p className="body-large text-foreground italic">
                "Learning theory is one thing. Applying it to real-world systems
                is where understanding truly begins."
              </p>
            </blockquote>

            {/* Story */}
            <div className="space-y-5 body-text text-muted-foreground">
              <p>
                During my internship at{" "}
                <span className="text-foreground font-medium">Residue Solutions</span>,
                I transitioned from building projects in isolation to contributing
                within a real technical team environment.
              </p>
              <p>
                I worked on AI-driven solutions designed to solve practical
                business problems—where{" "}
                <span className="text-secondary font-medium">
                  performance, reliability, and usability
                </span>{" "}
                mattered just as much as correctness.
              </p>
              <p>
                This experience taught me something critical: building for the
                real world is not just about models—it's about{" "}
                <span className="text-foreground font-medium">
                  integration, collaboration, and continuous improvement.
                </span>
              </p>
            </div>

            {/* Contributions */}
            <div>
              <p className="label-text text-primary mb-5">Contributions</p>
              <ul className="space-y-3">
                {contributions.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 body-text text-foreground/90"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-3 flex-shrink-0"
                      style={{ background: "hsl(var(--primary))" }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills gained */}
            <div className="rounded-2xl p-6 md:p-8 bg-card/40 border border-border/50">
              <p className="label-text text-secondary mb-4">Beyond Technical Skills</p>
              <p className="body-text text-foreground mb-5">
                I learned how to:
              </p>
              <ul className="space-y-3">
                {skillsGained.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-secondary font-mono text-sm mt-1">
                      0{i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="#projects"
              onClick={handleProjectsClick}
              className="inline-flex items-center gap-2 text-primary font-display font-medium link-underline group"
            >
              View My Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
