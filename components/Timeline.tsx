"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    role: "Marketplace Operations & Customer Experience",
    company: "HOOP Inc",
    period: "2024 - Present",
    description: "Supported customer experience, marketplace operations, and listing workflows across multiple resale platforms including Poshmark, eBay, Depop, and Vendoo.",
    details: [
      "Managed end-to-end operations across multiple resale marketplaces (Poshmark, eBay, Depop) and listing infrastructure (Vendoo).",
      "Processed and validated hundreds of sales actions (initiations, cancellations, returns, tracking updates).",
      "Executed 1,000+ operational updates across Pending Sales, Tracking Status, Venmo, Returns, and Account Deletion trackers.",
      "Built a centralized FAQ & response template system, improving response speed and consistency.",
      "Delivered executive-ready daily reports used by leadership for operational decisions."
    ],
    color: "bg-purple-50 border-purple-200 text-primary",
  },
  {
    id: 2,
    role: "E-Commerce Admin & Growth Management",
    company: "E-Commerce Growth",
    period: "2023 - 2024",
    description: "Scaled e-commerce operations and marketplace performance across regional storefronts on Shopee and TikTok Shop.",
    details: [
      "Directed strategy and operations for 5+ online stores across major SEA marketplaces.",
      "Drove IDR 500M+ GMV and 11,000+ monthly orders, maintaining performance stability at scale.",
      "Achieved 476% sales growth in one month for a new store through data-led optimization.",
      "Strategized regional campaigns for Ramadhan & Lebaran, amplifying peak demand results."
    ],
    color: "bg-purple-50 border-purple-200 text-secondary",
  },
  {
    id: 3,
    role: "Regional Talent & Operations Management",
    company: "Ishinora",
    period: "2022 - 2023",
    description: "Orchestrated high-volume creative production and cross-country collaboration supporting international photography & videography teams.",
    details: [
      "Directed 50+ creative professionals across 5 countries, ensuring performance alignment.",
      "Coordinated 100+ project schedules, optimizing timelines across multiple time zones.",
      "Managed relationships with 20+ international clients, driving repeat engagements."
    ],
    color: "bg-blue-50 border-blue-200 text-accent",
  },
  {
    id: 4,
    role: "Website Launch & Product Database Engineering",
    company: "Smilie.io",
    period: "2022",
    description: "Led large-scale digital catalog assembly and website content workflows for a major product launch.",
    details: [
      "Delivered 500+ optimized product listings within 1 week, supporting a launch of 1,000+ new SKUs.",
      "Built a structured product-asset pipeline using Google Sheets, ImageKit.io & Airtable.",
      "Designed and standardized product visuals through Canva for uniform brand presentation."
    ],
    color: "bg-purple-50 border-purple-200 text-primary",
  },
  {
    id: 5,
    role: "Shopify Product Systems & Launch Execution",
    company: "The PureStitch",
    period: "2021 - 2022",
    description: "Enabled rapid product go-live cycles and storefront optimization for high-volume apparel launches.",
    details: [
      "Executed end-to-end product uploads in Shopify, including titles, descriptions, variants, pricing, and visuals.",
      "Published 50 new products in 1–2 days for the Midsummer Collection release.",
      "Managed real-time inventory, promotional updates, and homepage adjustments."
    ],
    color: "bg-blue-50 border-blue-200 text-secondary",
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
