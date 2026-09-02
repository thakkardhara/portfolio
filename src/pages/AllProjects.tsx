
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowLeft, Filter, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  category: 'Full Stack & Backend' | 'Frontend & Web Apps';
  badgeCategory: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

const allProjects: Project[] = [
  {
    title: "Shashwatam ERP",
    category: "Full Stack & Backend",
    badgeCategory: "Enterprise ERP",
    description: "Comprehensive enterprise resource planning system featuring full-stack architecture, modular REST APIs, role-based authorization, database-driven workflows, and query-optimized data retrieval.",
    techStack: ["Node.js", "Express.js", "MySQL", "Sequelize ORM", "React.js", "REST APIs"],
    githubUrl: "https://github.com/thakkardhara",
    liveUrl: "https://dev.shasvatm.com/",
    image: "/ERP.png"
  },
  {
    title: "Shashwatam CRM",
    category: "Full Stack & Backend",
    badgeCategory: "CRM & Management",
    description: "Customer relationship and business workflow management application demonstrating customer data operations, REST API communication, authentication, and scalable client-server pipelines.",
    techStack: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT Auth", "REST APIs"],
    githubUrl: "https://github.com/thakkardhara",
    liveUrl: "https://sepl-crm.shasvatm.com/",
    image: "/crm.png"
  },
  {
    title: "Avoyes E-commerce Platform",
    category: "Full Stack & Backend",
    badgeCategory: "Full Stack E-Commerce",
    description: "Full-stack e-commerce solution with Node.js/Express backend, MySQL database, Next.js frontend, Axios API integration, JWT authentication, and Stripe payment processing.",
    techStack: ["Next.js", "Node.js", "Express.js", "MySQL", "Stripe", "Axios"],
    githubUrl: "https://github.com/ineinfo/avoyesfront",
    image: "/avoyes.png"
  },
  {
    title: "INE International Logistics",
    category: "Full Stack & Backend",
    badgeCategory: "Logistics Platform",
    description: "Logistics and agriculture import-export platform built for INE International, showcasing services and analytics with a user-friendly interface.",
    techStack: ["Next.js", "Tailwind CSS", "Ant Design", "REST APIs"],
    githubUrl: "https://github.com/ineinfo/ine-logistics",
    liveUrl: "https://www.ineinternational.in/",
    image: "/logistics.png"
  },
  {
    title: "Invoice Generator Web App",
    category: "Full Stack & Backend",
    badgeCategory: "Productivity & Billing",
    description: "High-efficiency client invoicing system built with Next.js and Tailwind CSS supporting client-specific invoices, auto GST calculations, PDF export, dynamic filters, and status tracking.",
    techStack: ["Next.js", "Tailwind CSS", "NestJS", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com/thakkardhara",
    image: "/portfolio.png"
  },
  {
    title: "Chat N Chill (Real-Time Chat)",
    category: "Full Stack & Backend",
    badgeCategory: "Real-Time Systems",
    description: "Real-time communication application with user authentication, private messaging, and group chats built with WebSocket / Socket.io for immediate event-driven communication.",
    techStack: ["React.js", "Node.js", "NestJS", "Socket.io", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/thakkardharaine",
    image: "/chat-app.png"
  },
  {
    title: "Expense Tracker",
    category: "Frontend & Web Apps",
    badgeCategory: "Finance Tool",
    description: "Web-based application designed to help users track personal expenses, manage budgeting categories, and visualize spending patterns.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Local Storage"],
    githubUrl: "https://github.com/thakkardhara",
    image: "/portfolio.png"
  },
  {
    title: "SnapShop E-Commerce Platform",
    category: "Frontend & Web Apps",
    badgeCategory: "E-Commerce",
    description: "Full-featured e-commerce platform with product catalogs, shopping cart state management, responsive filtering, and checkout flow simulation.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Ant Design"],
    githubUrl: "https://github.com/thakkardhara/eshop-test",
    liveUrl: "https://eshop-test-gray.vercel.app/",
    image: "/e-comm.png"
  },
  {
    title: "Patang Firki (Hotel Clone)",
    category: "Frontend & Web Apps",
    badgeCategory: "Web Experience",
    description: "Interactive responsive web application replicating the iconic Patang Hotel website with smooth navigation, menu showcases, and dynamic layout styling.",
    techStack: ["React.js", "CSS3", "JavaScript", "HTML5"],
    githubUrl: "https://github.com/thakkardhara",
    image: "/portfolio.png"
  },
  {
    title: "Auction House Platform",
    category: "Full Stack & Backend",
    badgeCategory: "Auction Platform",
    description: "Innovative web platform for online auctioning of lands and properties featuring real-time bidding simulation and secure form processing.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com/thakkardhara",
    image: "/portfolio.png"
  },
  {
    title: "Aapnu Amdavad (Apram Amdavad)",
    category: "Frontend & Web Apps",
    badgeCategory: "Community Portal",
    description: "Community-focused digital portal designed to empower citizens of Ahmedabad with local directories, public utilities, and civic resources.",
    techStack: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
    githubUrl: "https://github.com/thakkardhara",
    image: "/portfolio.png"
  },
  {
    title: "INE Infotech Official Website",
    category: "Frontend & Web Apps",
    badgeCategory: "Corporate Showcase",
    description: "Official website for INE Infotech featuring responsive design, modern UI components, fast page loading, and corporate service showcases.",
    techStack: ["Next.js", "Tailwind CSS", "Ant Design", "TypeScript"],
    githubUrl: "https://github.com/ineinfo/ineinfotech",
    liveUrl: "https://www.ineinfotech.com/",
    image: "/infotech.png"
  }
];

const categories = ["All", "Full Stack & Backend", "Frontend & Web Apps"] as const;

const AllProjects = () => {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <Button variant="outline" asChild className="mb-6 hover:scale-105 transition-transform">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Complete Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">All Technical Projects</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive catalog of full-stack web applications, REST API services, enterprise systems, and frontend interfaces.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className="text-xs sm:text-sm rounded-full transition-all"
            >
              {cat === "All" ? (
                <>All Projects ({allProjects.length})</>
              ) : (
                <>{cat} ({allProjects.filter(p => p.category === cat).length})</>
              )}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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
                        {project.badgeCategory}
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
                        {project.liveUrl && (
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
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default AllProjects;
