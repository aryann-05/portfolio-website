"use client";

import { motion } from 'framer-motion';
import { GraduationCap, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'K.R Mangalam University ',
      year: '2025 - 2027',
      description: 'Specialized in software development, data structures, algorithms, and emerging technologies.',
      coursework: ['PowerBi', 'Database Management Advanced', 'Python', 'Full Stack','DSA']
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Samrat Prithviraj Chauhan Degree College ',
      year: '2022 - 2025',
      description: 'Foundation in computer science principles, programming, and software engineering.',
      coursework: ['Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks']
    }
  ];

  const certifications = [
    {
      name: 'HTML CSS Bootcamp',
      pdf: '/html css bootcamp.pdf'
    },
    {
      name: 'MYSQL Bootcamp',
      pdf: '/mysql bootcamp.pdf'
    },
    {
      name: 'Python Full course Programming Certificate',
      pdf: '/Python Certificate.pdf'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start mb-4">
                <GraduationCap className="text-blue-600 mr-3 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.year}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-900 dark:text-white">{cert.name}</span>
                </div>
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition duration-300"
                  title="View Certificate"
                >
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
