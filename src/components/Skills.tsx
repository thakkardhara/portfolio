
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Database, Layout, ShieldAlert, Cpu } from 'lucide-react';

const skillCategories = [
  {
    name: "Backend & APIs",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Django",
      "Python",
      "JWT Authentication",
      "API Middleware",
      "Client-Server Architecture"
    ],
    color: "from-blue-500 to-indigo-500"
  },
  {
    name: "Database & Query Optimization",
    icon: Database,
    skills: [
      "MySQL",
      "MongoDB",
      "Sequelize ORM",
      "Query Optimization",
      "Database Indexing",
      "Schema Design",
      "Data Modeling"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "HTML5 & CSS3",
      "Ant Design"
    ],
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "Development & Diagnostics",
    icon: ShieldAlert,
    skills: [
      "Full Stack Development",
      "REST API Integration",
      "Debugging & Troubleshooting",
      "Application Reliability",
      "Postman",
      "Git & GitHub",
      "Vite",
      "Vercel"
    ],
    color: "from-amber-500 to-emerald-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technical Competencies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Core technologies and engineering proficiencies applied across full-stack applications and database systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3 shadow-sm`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: (categoryIndex * 0.05) + (index * 0.03),
                            type: "spring",
                            stiffness: 300
                          }}
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs sm:text-sm py-1.5 px-3.5 hover:bg-primary hover:text-primary-foreground transition-all cursor-default font-medium"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Professional Summary / Engineering Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 via-blue-600/5 to-indigo-600/5 border-primary/20">
            <CardContent className="p-0 text-center">
              <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-semibold mb-3">Performance-Minded Development & Diagnostics</h4>
              <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                Dedicated to writing clean, maintainable backend code and scalable schemas. Experienced in identifying query inefficiencies with Sequelize ORM, streamlining API request-response payloads, and methodically diagnosing issues from frontend components through to backend databases.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
