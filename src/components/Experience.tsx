import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "Spontaneous Enterprise OPC PVT. Ltd",
    role: "Software Developer",
    duration: "March 2026 – Present",
    responsibilities: [
      "Developed and maintained responsive ERP modules and CRM features using React.js.",
      "Integrated RESTful APIs and managed application state using Redux for seamless data flow.",
      "Built reusable UI components and implemented business workflows for the ERP application.",
      "Collaborated with cross - functional teams to develop, test, and optimize frontend features.",
      "Worked with MySQL and MSSQL databases for querying, data management, and performance optimization within ERP workflows."
    ],
    technologies: ["Node.js", "Express.js", "ORM Sequelize", "Next.js", "MySQL", "RESTful APIs", "Postman"]
  },
  {
    company: "Harich Tech",
    role: "Full stack Developer",
    duration: "July 2025 – Jan 2026",
    responsibilities: [
      "Developed and maintained AI Products and web applications.",
      "Developed and maintained RESTful APIs using Node.js and Express.js within the MERN stack to support dynamic web and mobile applications.",
      "GUsed MongoDB/Mongoose for database management and optimized queries. Integrated APIs with React, using Redux for state management.",
      "Worked with JWT for secure authentication and authorization, ensuring robust and scalable user access control."
    ],
    technologies: ["Node.js", "Express.js", "ORM Sequelize", "Next.js", "MySQL", "RESTful APIs", "Postman"]
  },
  {
    company: "INE.InfoTech",
    role: "Backend Developer",
    duration: "July 2024 – July 2025",
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js and Express.js to support web and mobile applications.",
      "Gained hands-on experience with ORM Sequelize for efficient database management and query optimization.",
      "Integrated APIs into Next.js frontend applications, ensuring seamless communication between client and server."
    ],
    technologies: ["Node.js", "Express.js", "ORM Sequelize", "Next.js", "MySQL", "RESTful APIs", "Postman"]
  },
  {
    company: "Zignuts Technolab",
    role: "Full Stack Developer",
    duration: "Feb 2024 – May 2024",
    responsibilities: [
      "Developed and maintained full-stack web applications using Node.js, Express.js, and MongoDB, including building RESTful APIs and implementing JWT-based authentication for secure user login and registration.",
      "Integrated responsive frontends using React and Redux, effectively managing complex application state and ensuring seamless user experiences."
    ],
    technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "JWT", "RESTful APIs", "Tailwind CSS"]
  },
  {
    company: "BrainyBeam Technologies",
    role: "Full Stack Developer",
    duration: "May 2023 – June 2023",
    responsibilities: [
      "Developed and maintained web applications using Django and Python, contributing to both the frontend and backend architecture.",
      "Implemented RESTful APIs for handling user data, enabling smooth communication between the frontend and backend."
    ],
    technologies: ["Python", "Django", "RESTful APIs", "JavaScript", "HTML5", "CSS3"]
  },
  {
    company: "Aslan Services",
    role: "Web Developer",
    duration: "May 2022 – June 2022",
    responsibilities: [
      "Assisted in the development of responsive websites and web applications using HTML, CSS, and JavaScript, improving user engagement.",
      "Collaborated with senior developers to implement new features on e-commerce platforms using WordPress."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Responsive Web Design"]
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Career History
          </div>
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional experience and technical responsibilities across organizations
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 md:left-4.5 top-6 w-3.5 h-3.5 bg-primary rounded-full border-4 border-background shadow-sm -translate-x-1/2"></div>
                  
                  <div className="ml-10 md:ml-14">
                    <Card className="hover:shadow-lg transition-shadow border-border/80">
                      <CardHeader className="pb-3">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                            <p className="text-base text-primary font-semibold mt-0.5">{exp.company}</p>
                          </div>
                          <Badge variant="outline" className="text-xs w-fit bg-muted/50 border-border font-medium">
                            {exp.duration}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm mb-2 text-foreground">Key Responsibilities:</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              {exp.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex} className="text-sm leading-relaxed flex items-start">
                                  <span className="text-primary mr-2 font-bold">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="pt-2 border-t border-border/40">
                            <h4 className="font-semibold text-xs text-muted-foreground uppercase tracking-wider mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs font-normal">
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
