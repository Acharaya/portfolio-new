'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BriefcaseIcon } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'Caminosoftai',
    period: '09/2023 – Present',
    description: [
      'Developed responsive user interfaces using ShadCN and Material UI',
      'Built RESTful APIs using Node.js and Express',
      'Implemented containerized deployments with Docker',
      'Managed cloud infrastructure on AWS',
      'Worked with PostgreSQL and MongoDB databases',
      'Participated in agile development processes'
    ],
    skills: ['React', 'Node.js', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Material UI', 'ShadCN']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="mb-8 border border-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                      <BriefcaseIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-lg font-medium text-primary">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;