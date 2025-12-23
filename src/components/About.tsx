import { useEffect, useRef, useState } from "react";

const About = () => {
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
      id="about" 
      className="py-32 md:py-40 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--midnight)) 0%, hsl(var(--background)) 100%)'
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Profile visual */}
          <div 
            className={`lg:col-span-2 transition-all duration-1000 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden relative">
              {/* Gradient placeholder for photo */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary) / 0.3) 0%, hsl(var(--midnight)) 50%, hsl(var(--secondary) / 0.2) 100%)'
                }}
              />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-7xl font-display font-black text-foreground/10">
                  MN
                </div>
              </div>

              {/* Glow effect */}
              <div 
                className="absolute -inset-1 rounded-2xl opacity-50 blur-xl animate-glow-pulse"
                style={{ background: 'var(--gradient-cyan)' }}
              />
            </div>
          </div>

          {/* Content */}
          <div 
            className={`lg:col-span-3 space-y-8 transition-all duration-1000 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Section header */}
            <div>
              <p className="label-text text-primary mb-4">About</p>
              <h2 className="heading-section text-foreground">Who I Am</h2>
            </div>

            {/* Introduction */}
            <div className="space-y-6">
              <p className="body-large text-foreground">
                I'm Mohamed Najahi—a 3rd-year Computer Science with AI student at the National Institute of Business Management in Sri Lanka.
              </p>
              <p className="body-text text-muted-foreground italic">
                But that's just context. Here's what actually defines me:
              </p>
            </div>

            {/* Core values */}
            <div className="space-y-6 body-text text-muted-foreground">
              <p>
                I believe technology should serve humanity, not the other way around. Every project I build starts with a simple question: <span className="text-foreground">Will this make someone's life better?</span> If the answer isn't a clear yes, I don't build it.
              </p>
              <p>
                I'm disciplined about learning. I don't skim tutorials—I dive deep. I read research papers, replicate studies, break down complex systems until I understand them at a fundamental level. <span className="text-primary">Curiosity isn't a hobby for me; it's a way of life.</span>
              </p>
              <p>
                I'm driven by impact, not recognition. I don't build to showcase technical skill—I build to solve real problems for real people. Whether it's monitoring water quality to protect communities or enabling communication for deaf individuals, the goal is always the same: <span className="text-secondary">make a measurable difference.</span>
              </p>
            </div>

            {/* Personal touch */}
            <blockquote className="border-l-2 border-primary pl-6 py-2">
              <p className="body-large text-foreground italic">
                "When I'm not building, I'm learning. When I'm not learning, I'm thinking about what to build next."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
