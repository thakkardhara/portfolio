
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const allProjects = [
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
  {
    title: "Chat Application",
    description: "Real-time chat application with user authentication, private messaging, and group chats. Built with WebSocket for real-time communication.",
    techStack: ["React", "Nest.js", "Tailwind CSS", "Socket.io", "MySQL"],
    githubUrl: "https://github.com/thakkardharaine",
    // liveUrl: "https://demo-weather.com",
    // category: "Utility"
    image: "/chat-app.png"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce platform with product listings, user authentication, shopping cart, and dummy payment integration. for learning purposes.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "ant-d"],
    githubUrl: "https://github.com/thakkardhara/eshop-test",
    liveUrl: "https://eshop-test-gray.vercel.app/",
    // category: "Content Management"
    image: "/e-comm.png"
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website showcasing projects, skills, and experience. Built with modern web technologies and optimized for performance.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/thakkardhara/portfolio",
    liveUrl: "https://dhara-portfolio-gamma.vercel.app/",
    // category: "Personal"
    image: "/portfolio.png"
  }
];

const AllProjects = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Button variant="outline" asChild className="mb-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-5xl font-bold mb-4">All Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my complete portfolio of web applications and technical projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
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
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/80">
                      {/* {project.category} */}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
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
      </div>
    </div>
  );
};

export default AllProjects;
