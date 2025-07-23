"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-300">
                Hello! My name is Ravi and I enjoy creating things that live on the internet.
                My interest in web development started back in 2023 when I decided to take a break from studies and explore my passion for coding.
              </p>
              <p className="text-gray-300">
                Fast-forward to today, and I've had the privilege of working at an advertising
                agency, a start-up, a huge corporation, and a student-led design studio. My
                main focus these days is building accessible, inclusive products and digital
                experiences.
              </p>
              <p className="text-gray-300">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-gray-300">
                <li className="flex items-center">
                  <span className="arrow-right">▹</span> JavaScript (ES6+)
                </li>
                <li className="flex items-center">
                  <span className="arrow-right">▹</span> React
                </li>
                <li className="flex items-center">
                  <span className="arrow-right">▹</span> Next.js
                </li>
                <li className="flex items-center">
                  <span className="arrow-right">▹</span> Node.js
                </li>
                <li className="flex items-center">
                  <span className="arrow-right">▹</span> TypeScript
                </li>
                <li className="flex items-center">
                  <span className="arrow-right">▹</span> Tailwind CSS
                </li>
              </ul>
            </div>
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-[#ffffff] rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-[#FFB22C] rounded-lg transform -rotate-3 overflow-hidden">
                <Image
                  src="/my_image.png"
                  alt="Profile"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 