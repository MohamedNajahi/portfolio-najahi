import { useEffect, useRef } from "react";
import { ChevronDown, MapPin } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated particles/nodes effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 217, 255, ${0.1 * (1 - dist / 150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, ${p.opacity})`;
        ctx.fill();

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToContent = () => {
    const philosophySection = document.getElementById('philosophy');
    philosophySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated mesh background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, hsl(188 100% 50% / 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, hsl(33 100% 58% / 0.1), transparent),
            radial-gradient(ellipse 50% 50% at 20% 80%, hsl(188 100% 50% / 0.08), transparent),
            linear-gradient(180deg, hsl(210 70% 4%) 0%, hsl(210 60% 8%) 50%, hsl(210 50% 6%) 100%)
          `
        }}
      />

      {/* Canvas for particle network */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-[10%] w-64 h-64 border border-primary/10 rounded-full animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute top-40 right-[15%] w-32 h-32 border border-secondary/10 rotate-45 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute bottom-32 left-[20%] w-48 h-48 border border-primary/5 rounded-full animate-float"
          style={{ animationDelay: '4s' }}
        />
        <div 
          className="absolute bottom-20 right-[25%] w-24 h-24 border border-secondary/10 rotate-12 animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Gradient orbs with mouse movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
          style={{ 
            background: 'hsl(188 100% 50%)',
            transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
            transition: 'transform 0.4s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
          style={{ 
            background: 'hsl(33 100% 58%)',
            transform: 'translate(calc(var(--mouse-x, 0) * -0.5), calc(var(--mouse-y, 0) * -0.5))',
            transition: 'transform 0.6s ease-out'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center max-w-5xl">
        <div className="space-y-6">
          {/* Name */}
          <h1 className="opacity-0 animate-fade-up">
            <span className="heading-display text-foreground block">
              Mohamed Najahi
            </span>
          </h1>

          {/* Role tagline */}
          <div className="opacity-0 animate-fade-up delay-200">
            <p className="font-display text-xl md:text-2xl lg:text-3xl font-medium">
              <span className="text-primary">AI & ML Enthusiast</span>
              <span className="text-muted-foreground mx-3">/</span>
              <span className="text-secondary">Entrepreneur</span>
              <span className="text-muted-foreground mx-3">/</span>
              <span className="text-foreground">Builder</span>
            </p>
          </div>

          {/* Main description */}
          <div className="opacity-0 animate-fade-up delay-400 pt-4">
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Forging the future with{" "}
              <span className="text-foreground font-medium">Artificial Intelligence</span>
              {" "}and{" "}
              <span className="text-foreground font-medium">Embedded Systems</span>.
            </p>
          </div>

          {/* Location */}
          <div className="opacity-0 animate-fade-up delay-600 pt-2">
            <p className="flex items-center justify-center gap-2 text-muted-foreground font-display text-sm tracking-wider">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>Currently building real-world solutions in</span>
              <span className="text-secondary font-medium">Sri Lanka</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer group opacity-0 animate-fade-in delay-800"
      >
        <span className="label-text text-xs tracking-widest">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
