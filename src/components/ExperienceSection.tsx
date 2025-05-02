
import { 
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody
} from "@/components/Timeline";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Work <span className="gradient-heading">Experience</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            My professional journey in ML/AI engineering and software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="bg-primary" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2 md:gap-0">
                  <h3 className="text-xl font-bold">ML/AI Engineer @ NeuroOceans AI</h3>
                  <time className="text-sm text-gray-500">Feb 2025 – Present</time>
                </div>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <span className="text-sm font-medium mb-2 inline-block text-gray-600 dark:text-gray-400">Lahore, Pakistan</span>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Developed <span className="font-medium">AI/ML pipelines</span> for multiple domains including <span className="font-medium">computer vision</span>.</li>
                  <li>Built <span className="font-medium">RAG chatbots</span> and <span className="font-medium">multi-agent systems</span> for automated <span className="font-medium">invoice parsing</span>.</li>
                  <li>Integrated <span className="font-medium">third-party APIs</span> to improve workflows and user experiences.</li>
                  <li>Developed systems for <span className="font-medium">body measurement</span> using <span className="font-medium">computer vision</span>.</li>
                </ul>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="bg-accent" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2 md:gap-0">
                  <h3 className="text-xl font-bold">ML/AI Engineer @ Zortik Technologies</h3>
                  <time className="text-sm text-gray-500">Sep 2024 – Jan 2025</time>
                </div>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <span className="text-sm font-medium mb-2 inline-block text-gray-600 dark:text-gray-400">Kelowna, BC, Canada</span>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li><span className="font-medium">Fine-tuned LLMs</span> for <span className="font-medium">website content classification</span>.</li>
                  <li>Built <span className="font-medium">custom datasets</span> and <span className="font-medium">evaluation pipelines</span> for code analysis tasks.</li>
                  <li>Implemented <span className="font-medium">RAG</span> with LLMs to align analysis outputs with specific <span className="font-medium">coding guidelines</span>.</li>
                  <li>Created <span className="font-medium">Reflexion Agents</span> for iterative <span className="font-medium">reasoning</span> in code review systems.</li>
                  <li>Conducted deep research on <span className="font-medium">reasoning-based AI solutions</span>.</li>
                </ul>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="bg-ai-teal" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2 md:gap-0">
                  <h3 className="text-xl font-bold">ML/AI Intern @ Alphabase</h3>
                  <time className="text-sm text-gray-500">May 2024 – Sep 2024</time>
                </div>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <span className="text-sm font-medium mb-2 inline-block text-gray-600 dark:text-gray-400">Islamabad, Pakistan</span>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Developed <span className="font-medium">RAG chatbot applications</span> using <span className="font-medium">LangChain</span>, <span className="font-medium">Llama3</span>, and <span className="font-medium">FAISS</span>.</li>
                  <li>Applied <span className="font-medium">machine learning techniques</span> for <span className="font-medium">predictive modeling</span> and <span className="font-medium">classification</span>.</li>
                  <li>Used <span className="font-medium">Python</span>, <span className="font-medium">PyTorch</span>, and <span className="font-medium">OpenCV</span> to build and deploy AI solutions.</li>
                  <li>Integrated <span className="font-medium">machine learning models</span> into web applications using <span className="font-medium">FastAPI</span>.</li>
                  <li>Performed <span className="font-medium">exploratory data analysis</span> to enhance model performance and insights.</li>
                </ul>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon className="bg-gray-400" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2 md:gap-0">
                  <h3 className="text-xl font-bold">Backend Intern @ Alphabase</h3>
                  <time className="text-sm text-gray-500">Oct 2023 – Apr 2024</time>
                </div>
              </TimelineHeader>
              <TimelineBody>
                <span className="text-sm font-medium mb-2 inline-block text-gray-600 dark:text-gray-400">Islamabad, Pakistan</span>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Developed and maintained APIs using <span className="font-medium">Node.js</span>, <span className="font-medium">Express</span>, and <span className="font-medium">Nest.js</span>.</li>
                  <li>Implemented <span className="font-medium">CRUD operations</span> and integrated third-party services to enhance functionality.</li>
                  <li>Conducted <span className="font-medium">unit and integration testing</span> of APIs using <span className="font-medium">Postman</span> to ensure reliability and performance.</li>
                  <li>Collaborated closely with <span className="font-medium">front-end developers</span> for seamless integration.</li>
                  <li>Actively participated in <span className="font-medium">code reviews</span> to maintain high coding standards.</li>
                  <li>Assisted in <span className="font-medium">database design and optimization</span> for efficient data management.</li>
                </ul>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
