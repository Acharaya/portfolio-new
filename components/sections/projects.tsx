'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Full-Stack E-Commerce Platform with Admin Dashboard',
    description: 'Built an online store with product CRUD, role-based auth, and Stripe integration.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Acharaya/ecommerce-platform-dashboard',
    live: null,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Insurance Management System',
    description: 'A desktop app built with Java Swing and SQL for policy and client tracking.',
    tech: ['Java', 'SQL'],
    github: null,
    live: null,
    image: 'https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'E-Commerce Web + Android App',
    description: 'Developed using Angular and Firebase for product listing and cart.',
    tech: ['Angular', 'Firebase'],
    github: null,
    live: null,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="h-full overflow-hidden flex flex-col border border-border bg-card/50 backdrop-blur-sm hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button asChild size="sm">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;