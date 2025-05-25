'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import SkillBadge from '@/components/ui/skill-badge';

const skills = [
  { name: 'JavaScript', color: 'yellow' },
  { name: 'TypeScript', color: 'blue' },
  { name: 'React', color: 'cyan' },
  { name: 'Next.js', color: 'slate' },
  { name: 'Node.js', color: 'green' },
  { name: 'MongoDB', color: 'green' },
  { name: 'PostgreSQL', color: 'blue' },
  { name: 'Docker', color: 'blue' },
  { name: 'Firebase', color: 'yellow' },
  { name: 'Python', color: 'blue' },
  { name: 'AWS', color: 'orange' },
  { name: 'Azure', color: 'blue' },
  { name: 'Git', color: 'orange' },
  { name: 'Tailwind', color: 'cyan' },
  { name: 'Material UI', color: 'blue' },
  { name: 'ShadCN', color: 'slate' },
];

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border border-border">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-muted-foreground mb-6">
                I'm a software developer with experience in React, Next.js, Node.js, Docker, and cloud platforms like AWS and Azure. I focus on building scalable, cleanly designed web applications.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical expertise with a strong focus on user experience, ensuring that the applications I build are not only functionally robust but also intuitive and accessible for end users.
              </p>
            </Card>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={item}>
                <SkillBadge name={skill.name} color={skill.color} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;