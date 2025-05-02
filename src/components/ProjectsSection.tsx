
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart Surveillance (FYP)",
      description: "An AI-Empowered Threat Detection and Prevention System that uses computer vision and deep learning to identify potential threats in real-time surveillance footage.",
      tags: ["Computer Vision", "Deep Learning", "Threat Detection", "Python"],
      demoUrl: "https://youtu.be/gmiEBf7xvVw",
      githubUrl: "#",
      imageUrl: "https://images.unsplash.com/photo-1561144257-e32e8ffc8e4f""
    },
    {
      title: "RAG Application using LangChain",
      description: "A Retrieval-Augmented Generation chatbot for intelligent document retrieval, leveraging LangChain, LLMs, and vector databases for enhanced information access.",
      tags: ["LangChain", "RAG", "LLMs", "FAISS"],
      demoUrl: "#",
      githubUrl: "https://github.com/numansabirdev/RAG-Application-using-LangChain",
      imageUrl: "https://images.unsplash.com/photo-1542903660-eedba2cda473"
    },
    {
      title: "Salary Predictions of Data Professionals",
      description: "A machine learning project that uses predictive modeling to estimate salaries for data professionals based on various factors such as experience, location, and skills.",
      tags: ["Machine Learning", "Predictive Modeling", "Data Analysis"],
      demoUrl: "#",
      githubUrl: "https://github.com/numansabirdev/Salary-Predictions-of-Data-Professions",
      imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74"
    },
    {
      title: "Fastag Fraud Detection System",
      description: "A system leveraging ML classification techniques for fraud detection in electronic toll collection transactions, with high accuracy and real-time capabilities.",
      tags: ["Fraud Detection", "Classification", "ML", "Data Analysis"],
      demoUrl: "#",
      githubUrl: "https://github.com/numansabirdev/Fastag-Fraud-Detection-System",
      imageUrl: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a"
    },
    {
      title: "Spam Message Classification",
      description: "An ML-based system to classify spam messages using natural language processing and machine learning algorithms to filter unwanted content.",
      tags: ["NLP", "Classification", "ML", "Spam Detection"],
      demoUrl: "#",
      githubUrl: "https://github.com/numansabirdev/Spam-Message-Classification",
      imageUrl: "https://images.unsplash.com/photo-1583266999030-4dee93a7969c"
    },
    {
      title: "Heart Failure Prediction",
      description: "Predictive modeling using Exploratory Data Analysis (EDA) to identify risk factors and predict heart failure, helping in early diagnosis and prevention.",
      tags: ["EDA", "Predictive Modeling", "Healthcare ML"],
      demoUrl: "#",
      githubUrl: "https://github.com/numansabirdev/Heart-Failure-Prediction-EDA",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Featured <span className="gradient-heading">Projects</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            A selection of my work in ML/AI engineering and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`${project.imageUrl}?auto=format&fit=crop&w=800&h=400`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.githubUrl !== "#" && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.demoUrl !== "#" && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="group">
            <a href="https://github.com/numansabirdev" target="_blank" rel="noreferrer" className="flex items-center">
              View More Projects on GitHub
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
