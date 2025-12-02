"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Globe } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "3+", icon: Award },
    { label: "Projects Completed", value: "50+", icon: Globe },
    { label: "Certifications", value: "4", icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-100 rounded-full -z-10"></div>
              <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-100 shadow-lg relative z-10">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">My Journey</h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  I am a Humanities graduate from Universitas Indonesia with a passion for bridging the gap between creative vision and technical execution.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Starting my career in project coordination, I quickly discovered my knack for organizing chaos and optimizing workflows. Today, I help businesses scale their operations through data-driven strategies and efficient project management.
                </p>
                
                <div className="mt-8 pt-8 border-t border-neutral-100">
                   <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl text-accent">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-text">Education</h4>
                      <p className="text-sm text-neutral-500">Universitas Indonesia</p>
                      <p className="text-sm text-neutral-500">Humanities Graduate</p>
                    </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-2">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-neutral-text mb-6">
                Passionate about <span className="text-primary">Growth</span> & <span className="text-secondary">Efficiency</span>
              </h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                "Efficiency through organization, growth through data, success through collaboration."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-neutral-bg p-6 rounded-2xl text-center shadow-sm border border-purple-100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-primary mb-4 shadow-sm">
                    <stat.icon size={20} />
                  </div>
                  <h4 className="text-3xl font-bold text-neutral-text mb-1 font-heading">{stat.value}</h4>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
