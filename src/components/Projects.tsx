
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
  title: "INE International",
  description: "Logistics and agriculture import-export platform built for INE International, showcasing services and analytics with a user-friendly interface.",
  techStack: ["Next.js", "Tailwind CSS", "Ant Design"],
  githubUrl: "https://github.com/ineinfo/ine-logistics",
  liveUrl: "https://www.ineinternational.in/",
  image: "/logistics.png"
},
  {
    title: "Avoyes E-commerce",
    description: "Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
    techStack: ["Next.js", "Node.js", "MySQL", "Express", "Stripe"],
    githubUrl: "https://github.com/ineinfo/avoyesfront",
    // liveUrl: "https://demo-ecommerce.com",
    image: "/avoyes.png"
  },
{
  title: "INE Infotech",
  description: "Official website for INE Infotech redesigned and developed after joining the company, featuring modern UI and responsive design.",
  techStack: ["Next.js", "Tailwind CSS", "Ant Design"],
  githubUrl: "https://github.com/ineinfo/ineinfotech",
  liveUrl: "https://www.ineinfotech.com/",
  image: "/infotech.png"
},


];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              className="perspective-1000"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group">
                <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                    <motion.div 
                      className="text-6xl opacity-80"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        <Badge variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild className="hover:scale-105 transition-transform">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="hover:scale-105 transition-transform">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="hover:scale-105 transition-transform">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
