
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Machine Learning & AI",
      skills: [
        { name: "Python", level: 92 },
        { name: "NLP & LLMs", level: 90 },
        { name: "PyTorch & TensorFlow", level: 85 },
        { name: "RAG Systems", level: 88 },
        { name: "LangChain & LlamaIndex", level: 86 },
        { name: "Computer Vision", level: 82 },
        { name: "Prompt Engineering", level: 88 },
      ]
    },
    {
      name: "Web Development",
      skills: [
        { name: "FastAPI", level: 85 },
        { name: "Node.js & Express", level: 80 },
        { name: "React.js", level: 75 },
        { name: "HTML/CSS/JavaScript", level: 83 },
        { name: "Nest.js", level: 78 },
      ]
    },
    {
      name: "Data Analysis & Databases",
      skills: [
        { name: "Pandas & NumPy", level: 87 },
        { name: "MongoDB", level: 82 },
        { name: "SQL & PostgreSQL", level: 80 },
        { name: "Data Visualization", level: 78 },
        { name: "FAISS", level: 84 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-ai-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Skills & <span className="gradient-heading">Expertise</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            My technical skills and proficiencies across ML/AI and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3 className="text-xl font-bold mb-6 gradient-heading">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs font-medium text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-200 dark:bg-gray-700" indicatorClassName="bg-gradient-to-r from-ai-purple to-ai-blue" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {["Python", "PyTorch", "TensorFlow", "LangChain", "LlamaIndex", "FAISS", "OpenCV", "FastAPI", "Node.js", "React", "MongoDB", "PostgreSQL", "Pandas", "NumPy", "NLP", "Computer Vision"].map((tool, index) => (
              <div key={index} className="px-4 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
