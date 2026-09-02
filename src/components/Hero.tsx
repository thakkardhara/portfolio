import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Mail, Github, MapPin, Database, Server, Code2, ShieldCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Dhara.pdf';
    link.download = 'Dhara_Thakkar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      title: "Resume Downloaded",
      description: "Dhara Thakkar's resume has been downloaded successfully.",
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const highlights = [
    { icon: Server, label: "RESTful APIs & Backend" },
    { icon: Database, label: "Database & Query Optimization" },
    { icon: Code2, label: "React.js & Next.js" },
    { icon: ShieldCheck, label: "Debugging & System Reliability" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <MapPin className="w-4 h-4" />
            <span>Ahmedabad, India • Open to Technical Opportunities</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
              Dhara Thakkar
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-6">
              Full Stack Developer <span className="text-primary">|</span> Backend & API Developer
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Computer Science Engineer specialized in building robust full-stack applications, scalable REST APIs with Node.js & Express, and optimizing database workflows with MySQL, MongoDB, and Sequelize ORM. Focused on application reliability, query efficiency, and methodical debugging.
            </p>
          </motion.div>

          {/* Quick Highlight Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2.5 mb-10"
          >
            {highlights.map(({ icon: Icon, label }) => (
              <Badge 
                key={label} 
                variant="outline" 
                className="px-3.5 py-1.5 text-xs sm:text-sm bg-background/60 backdrop-blur-sm border-border hover:border-primary transition-colors flex items-center gap-1.5"
              >
                <Icon className="w-3.5 h-3.5 text-primary" />
                <span>{label}</span>
              </Badge>
            ))}
          </motion.div>
          
          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button onClick={scrollToContact} size="lg" className="w-full sm:w-auto text-base px-8 shadow-md hover:shadow-lg hover:scale-105 transition-all">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button onClick={handleDownloadResume} variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 hover:scale-105 transition-all">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button variant="ghost" size="lg" asChild className="w-full sm:w-auto text-base px-6">
              <a href="https://github.com/thakkardhara" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
