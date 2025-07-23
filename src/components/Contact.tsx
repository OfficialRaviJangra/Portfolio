"use client"
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>

          <form className="space-y-6 mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-[#ffffff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB22C]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-[#ffffff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB22C]"
                />
              </div>
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 bg-[#ffffff] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB22C]"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>

          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/OfficialRaviJangra"
              target="_blank"
              rel="noopener noreferrer"
              className="social_links"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social_links"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social_links"
            >
              <FiTwitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:insanejangra0001@gmail.com"
              className="social_links"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 