import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Cpu, Database, Wrench, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Computer Science Engineer focused on dependable backend services, optimized queries, and responsive full-stack solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Story / Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Cpu className="h-6 w-6 text-primary" />
                  Engineering Background & Approach
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                  <p>
                    I hold a <strong className="text-foreground font-semibold">B.Tech in Computer Science & Engineering</strong> from DEPSTAR, Anand, and a Diploma in Computer Engineering from RCTI, Ahmedabad. My core expertise lies in building resilient backend systems, architecting RESTful APIs, and developing responsive full-stack web applications.
                  </p>
                  <p>
                    Across production projects and enterprise applications like <strong className="text-foreground font-semibold">Shashwatam ERP</strong> and <strong className="text-foreground font-semibold">Shashwatam CRM</strong>, I have worked extensively with <span className="text-foreground font-medium">Node.js, Express.js, React.js, Next.js, MySQL, MongoDB</span>, and <span className="text-foreground font-medium">Sequelize ORM</span>.
                  </p>
                  <p>
                    My problem-solving approach emphasizes <strong className="text-foreground font-semibold">methodical troubleshooting, API contract validation, query optimization, and structured error handling</strong>. By understanding how client requests flow through network layers and database queries, I strive to build software that is fast, maintainable, and reliable.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Database & Query Tuning</h4>
                      <p className="text-xs text-muted-foreground">Sequelize ORM, MySQL indexing, schema design & query efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">API Reliability & Security</h4>
                      <p className="text-xs text-muted-foreground">JWT authentication, robust middleware, input validation & error handling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Client-Server Integration</h4>
                      <p className="text-xs text-muted-foreground">Next.js/React state management, Axios data sync, real-time WebSockets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Analytical Debugging</h4>
                      <p className="text-xs text-muted-foreground">Methodical issue tracing, API diagnostics via Postman, log analysis</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education & Overview Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Education Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Education</h4>
                    <p className="text-xs text-muted-foreground">Academic Foundation in Computer Engineering</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-primary/40 pl-3">
                    <p className="font-semibold text-foreground text-sm">B.Tech in Computer Science & Engineering</p>
                    <p className="text-xs text-primary font-medium">DEPSTAR, Anand, India</p>
                    <p className="text-xs text-muted-foreground">2021 – 2024</p>
                  </div>
                  <div className="border-l-2 border-border pl-3">
                    <p className="font-semibold text-foreground text-sm">Diploma in Computer Engineering</p>
                    <p className="text-xs text-primary font-medium">RCTI, Ahmedabad, India</p>
                    <p className="text-xs text-muted-foreground">2018 – 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Competencies Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Core Focus Areas</h4>
                    <p className="text-xs text-muted-foreground">Specialized Technical Disciplines</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-2.5 rounded-lg bg-muted/50 border border-border/50">
                    <div className="font-semibold text-xs text-primary mb-1">Backend</div>
                    <p className="text-xs text-muted-foreground">Node.js, Express, REST APIs, Python/Django</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-muted/50 border border-border/50">
                    <div className="font-semibold text-xs text-primary mb-1">Database</div>
                    <p className="text-xs text-muted-foreground">MySQL, MongoDB, Sequelize ORM</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-muted/50 border border-border/50">
                    <div className="font-semibold text-xs text-primary mb-1">Frontend</div>
                    <p className="text-xs text-muted-foreground">React.js, Next.js, Redux, Tailwind CSS</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-muted/50 border border-border/50">
                    <div className="font-semibold text-xs text-primary mb-1">Diagnostics</div>
                    <p className="text-xs text-muted-foreground">API Debugging, Query Tuning, Error Tracing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
