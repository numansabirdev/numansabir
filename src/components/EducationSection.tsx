
import { BookOpen, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EducationSection = () => {
  const educationData = [
    {
      institution: "Stanford University",
      degree: "Machine Learning Specialization Course",
      period: "2024 – 2025",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png"
    },
    {
      institution: "COMSATS University Islamabad",
      degree: "BS (Software Engineering)",
      period: "2019 – 2023",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/fa/COMSATS_University_Logo.png"
    },
    {
      institution: "Zero To Mastery Academy",
      degree: "Complete Python Developer in 2022: Zero to Mastery",
      period: "September 2022 – February 2023",
      logo: "https://zerotomastery.io/apple-icon-152x152.png"
    },
    {
      institution: "Superior College",
      degree: "ICS (Intermediate of Computer Science)",
      period: "2017 – 2019",
      logo: "https://www.superior.edu.pk/wp-content/uploads/2022/09/05-Superior-University-e1664534426538.png"
    }
  ];

  const certificationData = [
    {
      name: "Machine Learning Specialization – deeplearning.ai",
      courses: [
        "Supervised Machine Learning: Regression and Classification",
        "Advanced Learning Algorithms",
        "Unsupervised Learning, Recommenders, Reinforcement"
      ]
    },
    {
      name: "Practical Deep Learning for Coders – Jeremy Howard",
      courses: []
    },
    {
      name: "Complete Python Developer (2022) – Zero to Mastery",
      courses: []
    },
    {
      name: "C++ Tutorial for Complete Beginners",
      courses: []
    }
  ];

  return (
    <section id="education" className="section-padding bg-white dark:bg-ai-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Education & <span className="gradient-heading">Certifications</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            My academic background and professional certifications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-10">
              <TabsTrigger value="education" className="text-base">
                <BookOpen className="mr-2 h-4 w-4" /> Education
              </TabsTrigger>
              <TabsTrigger value="certifications" className="text-base">
                <Award className="mr-2 h-4 w-4" /> Certifications
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="education" className="space-y-6">
              {educationData.map((education, index) => (
                <Card key={index} className="gradient-border bg-white/50 dark:bg-ai-dark/50 backdrop-blur-sm hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="w-16 h-16 shrink-0 bg-white rounded-full p-1 border border-gray-200 flex items-center justify-center overflow-hidden">
                        <img 
                          src={education.logo} 
                          alt={education.institution} 
                          className="w-12 h-12 object-contain" 
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold">{education.institution}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{education.degree}</p>
                        <p className="text-sm text-gray-500">{education.period}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="certifications">
              <div className="space-y-6">
                {certificationData.map((cert, index) => (
                  <Card key={index} className="gradient-border bg-white/50 dark:bg-ai-dark/50 backdrop-blur-sm hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">{cert.name}</h3>
                      {cert.courses.length > 0 && (
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                          {cert.courses.map((course, courseIndex) => (
                            <li key={courseIndex}>{course}</li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
