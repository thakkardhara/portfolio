import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // Replace with actual resume download link
    const link = document.createElement('a');
    link.href = '/Dhara.pdf';
    link.download = 'Dhara_Thakkar_Resume.pdf';
    document.body.appendChild(link); // Attach to DOM
    link.click();
    document.body.removeChild(link); // Clean up
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Simple Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Dhara Thakkar
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Building Scalable Web Experiences
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Experienced MERN Stack Developer passionate about creating innovative web solutions
              that combine beautiful design with robust functionality.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button onClick={scrollToContact} size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button onClick={handleDownloadResume} variant="outline" size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
