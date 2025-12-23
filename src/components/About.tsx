import { useEffect, useRef, useState } from "react";
import mohamedPhoto from "@/assets/mohamed-najahi.jpeg";

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
          {/* Profile photo */}
          <div 
            className={`lg:col-span-2 transition-all duration-1000 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden relative group">
              {/* Photo */}
              <img 
                src={mohamedPhoto} 
                alt="Mohamed Najahi - AI Developer and Computer Science Student"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay gradient for style */}
              <div 
                className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary) / 0.3) 0%, transparent 50%, hsl(var(--secondary) / 0.2) 100%)'
                }}
              />

              {/* Border glow effect */}
              <div 
                className="absolute -inset-1 rounded-2xl opacity-40 blur-xl -z-10 animate-glow-pulse"
                style={{ background: 'var(--gradient-cyan)' }}
              />
              
              {/* Frame border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 pointer-events-none" />
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
                I'm Mohamed Najahi, a 3rd-year Computer Science with AI student at the National Institute of Business Management in Sri Lanka.
              </p>
            </div>

            {/* Core values */}
            <div className="space-y-6 body-text text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">I build technology to help people.</span> I only work on projects that can make life better in a real way.
              </p>
              <p>
                <span className="text-primary font-medium">I like learning deeply.</span> I don't rush through topics. I take time to understand how things really work.
              </p>
              <p>
                <span className="text-secondary font-medium">I focus on solving real problems,</span> not showing off skills. My goal is to create useful solutions that have a positive impact.
              </p>
            </div>

            {/* Personal touch */}
            <blockquote className="border-l-2 border-primary pl-6 py-2">
              <p className="body-large text-foreground italic">
                "I'm always learning, building, and thinking about what I can create next."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
