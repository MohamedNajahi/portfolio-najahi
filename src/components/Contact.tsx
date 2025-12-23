import { Mail, Phone, Github, Linkedin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-40 relative">
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--midnight-deep)) 100%)'
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <p className="label-text text-primary mb-4">Contact</p>
          <h2 className="heading-section text-foreground mb-6">
            Let's Build Something Meaningful Together
          </h2>
          <p className="body-large text-muted-foreground mb-16">
            Whether you have a project idea, a collaboration opportunity, or just want to discuss AI and technology—I'd love to hear from you.
          </p>

          {/* Contact methods */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {/* Email */}
            <a
              href="mailto:mnajahi887@gmail.com"
              className="group flex items-center gap-4 px-8 py-5 glass rounded-xl hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="label-text text-muted-foreground text-xs mb-1">Email</p>
                <p className="font-display font-medium text-foreground">mnajahi887@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+94769159107"
              className="group flex items-center gap-4 px-8 py-5 glass rounded-xl hover:border-secondary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <p className="label-text text-muted-foreground text-xs mb-1">Phone</p>
                <p className="font-display font-medium text-foreground">+94 76 915 9107</p>
              </div>
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-16">
            <a
              href="https://github.com/MohamedNajahi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github className="w-5 h-5" />
              <span className="font-display font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-najahi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-display font-medium">LinkedIn</span>
            </a>
          </div>

          {/* Primary CTA */}
          <div>
            <a
              href="mailto:mnajahi887@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-display font-bold text-lg transition-all group"
              style={{
                background: 'var(--gradient-cyan)',
                color: 'hsl(var(--primary-foreground))',
                boxShadow: '0 0 40px hsl(var(--primary) / 0.3)',
              }}
            >
              <span>Send an Email</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Or just say hello—I read every message.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 pt-8 border-t border-border/30">
        <div className="section-container text-center">
          <p className="text-sm text-muted-foreground font-display">
            © 2024 Mohamed Najahi. Built with purpose, designed with care.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
