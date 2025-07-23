"use client"
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, featuring a responsive design, user authentication, shopping cart functionality, and payment integration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/project1.jpg'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/project2.jpg'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that provides real-time weather information, forecasts, and interactive maps using multiple weather APIs.',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/project3.jpg'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Some Things I've Built</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="grid  gap-6">
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-teal-400/20 group-hover:bg-transparent transition-colors duration-300"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-teal-400">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-sm text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-teal-400 transition-colors"
                      >
                        <FiGithub className="w-6 h-6" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-teal-400 transition-colors"
                      >
                        <FiExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 