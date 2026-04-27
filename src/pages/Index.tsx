import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Approach from "@/components/Approach";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mohamed Najahi | AI Developer & Computer Science Student</title>
        <meta 
          name="description" 
          content="Portfolio of Mohamed Najahi - Computer Science with AI student building technology that sees, understands, and responds. Specializing in computer vision, machine learning, and human-centered design." 
        />
        <meta name="keywords" content="Mohamed Najahi, AI Developer, Computer Vision, Machine Learning, Portfolio, Sri Lanka" />
        <meta property="og:title" content="Mohamed Najahi | AI Developer & Computer Science Student" />
        <meta property="og:description" content="Building technology that makes life measurably better." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mohamednajahi.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <Philosophy />
          <Projects />
          <WorkExperience />
          <Approach />
          <Skills />
          <About />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Index;
