
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
{
  company: "INE Infotech",
  role: "MERN Stack Developer",
  duration: "2024 - Present",
  responsibilities: [
    "Developed robust RESTful APIs using Node.js, Express.js, and MySQL to support web and mobile applications",
    "Integrated APIs seamlessly into frontend applications built with React and Next.js for dynamic user experiences",
    "Optimized backend performance by implementing efficient database queries and indexing strategies",
    "Collaborated closely with frontend developers to define API contracts and ensure smooth data flow",
    "Implemented secure authentication and authorization mechanisms using JWT and session management",
    "Built reusable middleware for logging, error handling, and input validation"
  ],
  technologies: ["Node.js", "Express.js", "MySQL", "React", "Next.js", "JWT", "Postman"]
},

  {
    company: "Zignuts Technolab",
    role: "Full Stack Developer",
    duration: "5 Months",
    responsibilities: [
      "Developed and maintained multiple client projects using React and Node.js",
      "Integrated third-party APIs and payment gateways",
      "Optimized application performance and database queries",
      "Participated in agile development processes and sprint planning"
    ],
    technologies: ["React", "Express.js", "MongoDB", "Redux", "Tailwind CSS"]
  },
  {
  company: "Aslan Services",
  role: "Frontend Developer",
  duration: "2 Months",
  responsibilities: [
    "Developed responsive and user-friendly websites using HTML5, CSS3, and JavaScript",
    "Customized and maintained WordPress themes to align with client requirements",
    "Collaborated with UI/UX designers to ensure visually appealing and accessible layouts",
    "Enhanced website performance and cross-browser compatibility",
    "Implemented interactive UI components and ensured mobile responsiveness",
    "Performed content integration and layout adjustments in WordPress-based sites"
  ],
  technologies: ["WordPress", "JavaScript", "CSS3", "HTML5"]
},
  {
  company: "BrainyBeam Technologies",
  role: "Full Stack Developer",
  duration: "2 Months",
  responsibilities: [
    "Developed responsive and user-friendly websites using HTML5, CSS3, and JavaScript",
    "Customized and maintained WordPress themes to align with client requirements",
    "Collaborated with UI/UX designers to ensure visually appealing and accessible layouts",
    "Enhanced website performance and cross-browser compatibility",
    "Implemented interactive UI components and ensured mobile responsiveness",
    "Performed content integration and layout adjustments in WordPress-based sites"
  ],
  technologies: ["WordPress", "JavaScript", "CSS3", "HTML5"]
}

];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through different roles and companies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  
                  <div className="ml-20">
                    <Card>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <CardTitle className="text-xl">{exp.role}</CardTitle>
                            <p className="text-lg text-primary font-semibold">{exp.company}</p>
                          </div>
                          <Badge variant="outline" className="text-sm w-fit">
                            {exp.duration}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                            <ul className="space-y-1 text-muted-foreground">
                              {exp.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex} className="text-sm">• {resp}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
