
import { Brain, Database, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-ai-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            About <span className="gradient-heading">Me</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm an ML/AI Engineer passionate about learning and applying the principles of Machine Learning and Artificial Intelligence. 
            My work revolves around contributing to innovative projects that leverage data science to develop and deploy AI-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden gradient-border bg-white/50 dark:bg-ai-dark/50 backdrop-blur-sm hover:shadow-lg transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Expertise</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Specializing in NLP, LLMs, RAG systems, and building advanced AI agents for reasoning and automation.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden gradient-border bg-white/50 dark:bg-ai-dark/50 backdrop-blur-sm hover:shadow-lg transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">ML Engineering</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Developing ML/AI pipelines, fine-tuning LLMs, and implementing computer vision solutions for real-world applications.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden gradient-border bg-white/50 dark:bg-ai-dark/50 backdrop-blur-sm hover:shadow-lg transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Building AI-integrated web applications using FastAPI, Node.js, React, and other modern web technologies.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            🌱 I'm currently focused on mastering NLP techniques, building advanced LLM applications, and solving reasoning challenges with AI agents.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            📍 Based in Lahore, Pakistan, I am passionate about pushing the boundaries of AI to create innovative solutions that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
