
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="neural-bg min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ai-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-ai-blue/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-ai-teal/10 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block p-2 rounded-full bg-primary/10 text-primary font-medium animate-fade-in">
            <span>ML/AI Engineer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading animate-fade-in">
            Hi, I'm <span className="gradient-heading">Numan Sabir</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in">
            Building intelligent systems with Machine Learning and AI. 
            Specializing in NLP, LLMs, Computer Vision, and ML-powered applications.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#projects" className="flex items-center">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="mt-16 flex justify-center gap-6 animate-fade-in">
            <a 
              href="https://www.linkedin.com/in/thenumansabir" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a 
              href="https://github.com/numansabirdev" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a 
              href="mailto:numansabir.dev@gmail.com" 
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
