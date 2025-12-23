import { useEffect, useRef, useState } from "react";
import { Cpu, Target, Sparkles } from "lucide-react";

const philosophyPillars = [
  {
    icon: Cpu,
    title: "Technology as Augmentation",
    description:
      "Most people see AI as automation—replacing human effort. I see it as augmentation: amplifying human capability, enhancing judgment, extending what's possible.",
    highlight: "The best technology doesn't replace us. It makes us more human.",
  },
  {
    icon: Target,
    title: "Building for Impact",
    description:
      "Every line of code I write asks the same question: Will this make someone's life better? Not 'Can I build this?' but 'Should I build this, and for whom?'",
    highlight: "Technology without purpose is just clever engineering.",
  },
  {
    icon: Sparkles,
    title: "Learning Through Making",
    description:
      "I don't wait for permission to build. I see a problem, research obsessively, fail publicly, iterate privately, and ship solutions.",
    highlight: "Discipline isn't about never failing—it's about never stopping.",
  },
];

const Philosophy = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="philosophy" className="py-32 md:py-40 relative" ref={sectionRef}>
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--midnight)) 50%, hsl(var(--background)) 100%)'
        }}
      />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="label-text text-primary mb-4">Philosophy</p>
          <h2 className="heading-section text-foreground">Why I Build</h2>
        </div>

        {/* Philosophy pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {philosophyPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              data-index={index}
              className={`group transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="glass rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-500">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="body-text text-muted-foreground mb-6">
                  {pillar.description}
                </p>

                {/* Highlight quote */}
                <p className="text-lg font-body italic text-secondary">
                  "{pillar.highlight}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
