import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    const philosophySection = document.getElementById('philosophy');
    philosophySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'var(--gradient-hero)',
      }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] animate-float"
          style={{ 
            background: 'hsl(var(--primary))',
            transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] animate-float delay-300"
          style={{ 
            background: 'hsl(var(--secondary))',
            animationDelay: '3s',
            transform: 'translate(calc(var(--mouse-x, 0) * -1), calc(var(--mouse-y, 0) * -1))',
            transition: 'transform 0.5s ease-out'
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-container text-center max-w-5xl">
        <div className="space-y-8">
          {/* Main statement */}
          <h1 className="opacity-0 animate-fade-up">
            <span className="heading-display text-foreground block mb-4">
              I build technology that{" "}
              <span className="text-gradient-cyan">sees</span>,{" "}
              <span className="text-gradient-cyan">understands</span>, and{" "}
              <span className="text-gradient-cyan">responds</span>.
            </span>
          </h1>

          {/* Philosophy tagline */}
          <div className="opacity-0 animate-fade-up delay-200">
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Not because it's cutting-edge.
              <br />
              <span className="text-foreground">Because it makes life measurably better.</span>
            </p>
          </div>

          {/* Author signature */}
          <div className="opacity-0 animate-fade-up delay-400 pt-8">
            <p className="label-text text-primary mb-2">— Mohamed Najahi</p>
            <p className="text-muted-foreground font-display text-sm tracking-wider">
              Computer Science × Artificial Intelligence
            </p>
          </div>

          {/* Subtle tagline */}
          <p className="opacity-0 animate-fade-up delay-600 text-muted-foreground/60 italic body-text pt-4">
            Turning curiosity into code, problems into solutions.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer group opacity-0 animate-fade-in delay-800"
      >
        <span className="label-text text-xs tracking-widest">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
