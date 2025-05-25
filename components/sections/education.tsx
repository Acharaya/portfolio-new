'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCapIcon } from 'lucide-react';

const educations = [
  {
    id: 1,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Lovely Professional University',
    period: '2022 – 2024',
    description: 'Advanced studies in computer applications with specialization in full-stack development and software engineering principles.'
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Lovely Professional University',
    period: '2019 – 2022',
    description: 'Foundational education in computer science, programming languages, and software development.'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="mb-8 border border-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                      <GraduationCapIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <p className="text-lg font-medium text-primary">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;