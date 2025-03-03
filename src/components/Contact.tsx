'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="bg-white dark:bg-slate-800">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400 hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    City, State, Country
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
              >
                <FiLinkedin size={24} />
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
              >
                <FiGithub size={24} />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
              >
                <FiTwitter size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="contact-input"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex justify-center items-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitSuccess && (
                <div className="p-3 bg-green-100 text-green-800 rounded-md">
                  Your message has been sent successfully!
                </div>
              )}
              
              {submitError && (
                <div className="p-3 bg-red-100 text-red-800 rounded-md">
                  {submitError}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}