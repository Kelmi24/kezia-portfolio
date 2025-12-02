"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Instagram, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-bg relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-2">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-neutral-text">
            Let's <span className="text-primary">Collaborate</span>
          </h3>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
            Ready to take your projects to the next level? Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
              <h4 className="text-xl font-bold text-neutral-text mb-6">Contact Information</h4>
              <div className="space-y-6">
                <a href="mailto:keziaestha@gmail.com" className="flex items-center group">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-neutral-500">Email Me</p>
                    <p className="text-neutral-700 font-medium group-hover:text-primary transition-colors">keziaestha@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+6281287323730" className="flex items-center group">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-neutral-500">Call Me</p>
                    <p className="text-neutral-700 font-medium group-hover:text-secondary transition-colors">+62-8128-7323-730</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-100">
                <h4 className="text-sm font-bold text-neutral-500 mb-4 uppercase tracking-wider">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-600 hover:bg-secondary hover:text-white transition-all">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
