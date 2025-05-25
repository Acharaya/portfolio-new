'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle, Github, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickScroll = () => {
      const aboutSection = document.getElementById('about');
      aboutSection?.scrollIntoView({ behavior: 'smooth' });
    };
    
    scrollRef.current?.addEventListener('click', handleClickScroll);
    
    return () => {
      scrollRef.current?.removeEventListener('click', handleClickScroll);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 pb-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-60 dark:from-primary/10 dark:via-background dark:to-background" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Aryan Tiwary
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl font-medium mb-4">
              Building scalable web apps with React, Node.js, and cloud tools.
            </h2>
            <p className="text-muted-foreground mb-8">
              A passionate software developer focused on creating elegant, efficient, and user-friendly applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="gap-2">
              <a href="https://drive.google.com/file/d/1upp-7fIznox1Tdn5KtrCJQaloGgkmtdC/view" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          ref={scrollRef}
        >
          <ArrowDownCircle className="h-10 w-10 animate-bounce text-muted-foreground hover:text-foreground transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;