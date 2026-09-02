
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    title: "Shashwatam ERP",
    category: "Enterprise Full Stack",
    description: "Comprehensive enterprise resource planning system featuring full-stack architecture, modular REST APIs, role-based authentication, database-driven workflows, and query-optimized data retrieval.",
    techStack: ["Node.js", "Express.js", "MySQL", "Sequelize ORM", "React.js", "REST APIs"],
    githubUrl: "https://github.com/thakkardhara",
    liveUrl: "https://dev.shasvatm.com/",
    image: "/ERP.png"
  },
  {
    title: "Shashwatam CRM",
    category: "Business Application",
    description: "Customer relationship and business workflow management application demonstrating customer data operations, REST API communication, authentication, and scalable client-server pipelines.",
    techStack: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT Auth", "REST APIs"],
    githubUrl: "https://github.com/thakkardhara",
    liveUrl: "https://sepl-crm.shasvatm.com/",
    image: "/crm.png"
  },
  {
    title: "Avoyes E-commerce",
    category: "Full Stack E-Commerce",
    description: "Full-stack e-commerce solution with Node.js/Express backend, MySQL database, Next.js frontend, Axios API integration, JWT authentication, and Stripe payment processing.",
    techStack: ["Next.js", "Node.js", "Express.js", "MySQL", "Stripe", "Axios"],
    githubUrl: "https://github.com/ineinfo/avoyesfront",
    image: "/avoyes.png"
  },
  {
    title: "INE International Logistics",
    category: "Logistics Platform",
    description: "Logistics and agriculture import-export platform built with Next.js, featuring service analytics, email API integration, and responsive cross-device dashboards.",
    techStack: ["Next.js", "Tailwind CSS", "Ant Design", "REST APIs"],
    githubUrl: "https://github.com/ineinfo/ine-logistics",
    liveUrl: "https://www.ineinternational.in/",
    image: "/logistics.png"
  },
  {
    title: "Invoice Generator Web App",
    category: "Productivity & Billing",
    description: "High-efficiency client invoicing system built with Next.js and Tailwind CSS featuring dynamic GST calculations, PDF export, status tracking, and NestJS/MongoDB backend integration.",
    techStack: ["Next.js", "Tailwind CSS", "NestJS", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com/thakkardhara",
    liveUrl: "https://github.com/thakkardhara",
    image: "/e-comm.png"
  },
  {
    title: "Chat N Chill (Real-Time Chat)",
    category: "Real-Time System",
    description: "Real-time communication application with user authentication, private messaging, and group chat channels built using WebSocket / Socket.io and MySQL data persistence.",
    techStack: ["React.js", "Node.js", "Socket.io", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/thakkardharaine",
    liveUrl: "https://github.com/thakkardharaine",
    image: "/chat-app.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Featured Work
          </div>
          <h2 className="text-4xl font-bold mb-4">Featured Engineering Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production-oriented applications showcasing backend architecture, API design, database workflows, and full-stack integration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 group flex flex-col overflow-hidden border-border/80">
                <div className="aspect-video bg-muted/60 relative overflow-hidden border-b border-border/50">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-blue-600/10 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-xs font-medium border border-border/50 shadow-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs px-2.5 py-0.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-2 border-t border-border/50">
                      <Button size="sm" variant="outline" asChild className="flex-1 hover:scale-105 transition-transform text-xs">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3.5 w-3.5 mr-1.5" />
                          Code / Repo
                        </a>
                      </Button>
                      {project.liveUrl && project.liveUrl.startsWith('http') && !project.liveUrl.includes('github.com') && (
                        <Button size="sm" asChild className="flex-1 hover:scale-105 transition-transform text-xs">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
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
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Button asChild size="lg" className="hover:scale-105 transition-transform px-8 shadow-md">
            <Link to="/projects">
              Explore All 12 Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
