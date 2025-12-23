import { useEffect, useRef, useState } from "react";
import { Search, RefreshCw, BookOpen } from "lucide-react";

const approaches = [
  {
    icon: Search,
    title: "Research-Driven",
    description:
      "Every project starts with a question: What problem exists? Who experiences it? What solutions have been tried? I don't build in a vacuum—I research deeply, study existing work, and identify gaps before writing a single line of code.",
  },
  {
    icon: RefreshCw,
    title: "Iteration Over Perfection",
    description:
      "First versions are never perfect. They're learning opportunities. I build MVPs quickly, test with real users, gather feedback, and iterate. Progress over perfection. Shipping over theorizing.",
  },
  {
    icon: BookOpen,
    title: "Documentation as Discipline",
    description:
      "Code without documentation is a puzzle for future maintainers. I document decisions, explain trade-offs, and write READMEs that teach, not just instruct. If I can't explain it clearly, I don't understand it well enough.",
  },
];

const Approach = () => {
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
    <section 
      id="approach" 
      className="py-32 md:py-40 relative"
      ref={sectionRef}
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-midnight/50" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="label-text text-primary mb-4">Methodology</p>
          <h2 className="heading-section text-foreground">How I Work</h2>
        </div>

        {/* Approach cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div
              key={approach.title}
              className={`text-center transition-all duration-700 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                  <approach.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                {approach.title}
              </h3>

              {/* Description */}
              <p className="body-text text-muted-foreground max-w-sm mx-auto">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
