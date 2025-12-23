import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["Deep Learning", "CNNs", "Computer Vision", "NLP", "OpenCV", "MediaPipe", "Real-time Inference"],
  },
  {
    title: "Development",
    skills: ["Python", "JavaScript", "TypeScript", "React", "IoT Systems", "ESP32", "Firebase"],
  },
  {
    title: "Tools & Frameworks",
    skills: ["TensorFlow", "Git & GitHub", "Google Gemini AI", "Chrome Extensions", "Tailwind CSS"],
  },
  {
    title: "Mindset",
    skills: ["Problem Decomposition", "User-Centered Design", "Research-First", "Continuous Learning"],
  },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 md:py-40" ref={sectionRef}>
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="label-text text-primary mb-4">Expertise</p>
          <h2 className="heading-section text-foreground">Skills & Technologies</h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              {/* Category title */}
              <h3 className="font-display font-bold text-lg text-foreground mb-6 pb-3 border-b border-border">
                {category.title}
              </h3>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-sm font-display transition-all duration-500 ${
                      visible
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-90'
                    }`}
                    style={{ 
                      transitionDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                      background: categoryIndex === 0 || categoryIndex === 2 
                        ? 'hsl(var(--primary) / 0.1)' 
                        : 'hsl(var(--secondary) / 0.1)',
                      color: categoryIndex === 0 || categoryIndex === 2 
                        ? 'hsl(var(--primary))' 
                        : 'hsl(var(--secondary))',
                      border: `1px solid ${categoryIndex === 0 || categoryIndex === 2 
                        ? 'hsl(var(--primary) / 0.2)' 
                        : 'hsl(var(--secondary) / 0.2)'}`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
