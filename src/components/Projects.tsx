"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'This project is a basic Amazon Clone website built using HTML, CSS, and JavaScript. It includes essential e-commerce features that allow users to browse products, view individual product details, add items to the cart or wishlist, and search products by category.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/aryann-05/demo',
      
      image: '/project1.jpg'
    },
    {
      title: 'Excel Analytics Platform',
      description: 'Developed a full-stack analytics platform that allows users to upload Excel files, generate 2D/3D charts, and view AI-generated insights.',
      techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      
      image: '/project2.jpg'
    },
    {
      title: 'Blogging Platform',
      description: 'This is a full-featured Blogging Platform built using the MERN stack. The platform allows users to create, edit, view, and manage blogs, with additional features like user authentication, blog filtering, comments, likes, and an admin panel. It is designed with a clean UI, smooth animations, and efficient backend APIs.',
      techStack: ['Python', 'TensorFlow', 'Flask', 'React'],
      githubUrl: 'https://github.com/yourusername/ai-chatbot',
      
      image: '/project3.jpg'
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'This is a simple and interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript. The game allows two players to play against each other on the same device, with a clean and responsive interface. It includes automatic win detection, draw detection, and the ability to restart the game.',
      techStack: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      image: '/project4.jpg'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
