'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'C++',
    issuer: 'Ciper School',
    date: '2021',
  },
  {
    id: 2,
    title: 'Java Programming 1',
    issuer: 'Oracle Academy',
    date: '2022',
  },
  {
    id: 3,
    title: 'UI/UX',
    issuer: 'FutureSkill Prime',
    date: '2022',
  },
  {
    id: 4,
    title: 'Machine Learning',
    issuer: 'Cognitive Class',
    date: '2023',
  },
  {
    id: 5,
    title: 'Full Stack Development',
    issuer: 'Boord',
    date: '2023',
  },
];

const Certificates = () => {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="certificates" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Certificates</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert) => (
            <motion.div key={cert.id} variants={item}>
              <Card className="h-full border border-border bg-card/50 backdrop-blur-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Award className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <p><span className="font-medium">Issuer:</span> {cert.issuer}</p>
                    <p><span className="font-medium">Date:</span> {cert.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;