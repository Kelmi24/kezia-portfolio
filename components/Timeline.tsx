"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    role: "Project Manager",
    company: "Digital Agency",
    period: "2023 - Present",
    description: "Leading cross-functional teams to deliver digital products and marketing campaigns.",
    details: [
      "Managed 10+ concurrent projects with a 95% on-time delivery rate.",
      "Implemented Agile methodologies, improving team velocity by 20%.",
      "Facilitated client communication and stakeholder management."
    ],
    color: "bg-purple-50 border-purple-200 text-primary",
  },
  {
    id: 2,
    role: "E-commerce Manager",
    company: "Retail Brand",
    period: "2021 - 2023",
    description: "Managed online store operations, product listings, and customer service.",
    details: [
      "Increased online sales by 40% through optimized product listings.",
      "Managed inventory and logistics for 500+ SKUs.",
      "Coordinated with marketing team for promotional campaigns."
    ],
    color: "bg-purple-50 border-purple-200 text-secondary",
  },
  {
    id: 3,
    role: "Project Coordinator",
    company: "Tech Startup",
    period: "2020 - 2021",
    description: "Assisted in project planning, documentation, and team coordination.",
    details: [
      "Maintained project documentation and tracked progress.",
      "Organized team meetings and prepared minutes.",
      "Supported QA testing and bug tracking."
    ],
    color: "bg-blue-50 border-blue-200 text-accent",
  },
];

export default function Timeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-neutral-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-2">My Journey</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-neutral-text">
            Professional <span className="text-primary">Experience</span>
          </h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Marker */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-primary rounded-full transform -translate-x-1/2 flex items-center justify-center z-10 shadow-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 flex-1">
                  <div
                    className={`bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer ${
                      expandedId === exp.id ? "ring-2 ring-primary ring-opacity-50" : "border-neutral-100"
                    }`}
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${exp.color} border`}>
                        {exp.period}
                      </span>
                      {expandedId === exp.id ? <ChevronUp size={20} className="text-neutral-400" /> : <ChevronDown size={20} className="text-neutral-400" />}
                    </div>
                    
                    <h4 className="text-xl font-bold text-neutral-text mb-1">{exp.role}</h4>
                    <div className="flex items-center text-neutral-500 text-sm mb-4">
                      <Briefcase size={14} className="mr-1" />
                      {exp.company}
                    </div>
                    
                    <p className="text-neutral-600 mb-4">{exp.description}</p>

                    {/* Expandable Details */}
                    <motion.div
                      initial={false}
                      animate={{ height: expandedId === exp.id ? "auto" : 0, opacity: expandedId === exp.id ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mt-4 pt-4 border-t border-neutral-100">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-sm text-neutral-600">
                            <span className="mr-2 text-primary">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
