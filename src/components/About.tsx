import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6">My Experience in Full-Stack Development</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    With 1 year and 7 months of experience in full-stack development—including a 9-month internship—I specialize in building web applications using the MERN stack  . My professional experience spans 10 months, where I’ve had the opportunity to work on real-world projects that emphasize performance, scalability, and user-centric design.
                  </p>
                  <p>
                    My journey into development started with a deep curiosity about how technology can solve everyday problems. Since then, I’ve grown into a developer who values clean, maintainable code and is committed to continuous learning and improvement.
                  </p>
                  <p>
                    I’m passionate about creating intuitive and efficient user experiences, and I actively keep up with modern web development practices and tools to deliver high-quality applications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h4 className="text-xl font-semibold mb-4">Core Expertise</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="font-medium">Frontend</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• React.js</li>
                        <li>• Next.js</li>
                        <li>• JavaScript/TypeScript</li>
                        <li>• HTML5 & CSS3</li>
                        <li>• Tailwind CSS</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium">Backend</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Node.js</li>
                        <li>• Express.js</li>
                        <li>• MongoDB</li>
                        <li>• MySQL</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h4 className="text-xl font-semibold mb-4">Experience</h4>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-primary">1+</div>
                    <div>
                      <div className="font-medium">Years of Experience</div>
                      <div className="text-sm text-muted-foreground">Full-Stack Development</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
