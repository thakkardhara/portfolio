
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React", "Next", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "ant-d", "Material-UI"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Backend", 
    skills: ["Node.js", "Express.js", "Nest.Js", "Socket.io"],
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Database",
    skills: ["MongoDB", "MySQL"],
    color: "from-purple-500 to-violet-500"
  },
  {
    name: "Tools & Others",
    skills: ["Git", "Vercel", "Postman", "Webpack", "Vite"],
    color: "from-orange-500 to-red-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I love working with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`} />
                    <h3 className="text-2xl font-semibold">{category.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ 
                          delay: (categoryIndex * 0.1) + (index * 0.05),
                          type: "spring",
                          stiffness: 300
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
            <CardContent className="p-0 text-center">
              <h4 className="text-2xl font-semibold mb-4">Always Learning</h4>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                I'm passionate about staying up-to-date with the latest technologies and best practices. 
                Currently exploring AI/ML integration, react-native, and modern web performance optimization techniques.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
