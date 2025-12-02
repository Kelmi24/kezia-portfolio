"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ishinora",
    category: "Operations",
    role: "Regional Talent & Operations Management",
    description: "Orchestrated high-volume creative production and cross-country collaboration supporting international photography & videography teams.",
    results: [
      "Directed **50+ creative professionals** across **5 countries**, ensuring performance alignment and operational efficiency.",
      "Coordinated **100+ project schedules**, optimizing timelines and reducing logistical friction across multiple time zones.",
      "Managed relationships with **20+ international clients**, driving repeat engagements and consistent delivery quality."
    ],
    technologies: ["Operations Management", "Team Leadership", "Logistics"],
    color: "bg-rose-100",
  },
  {
    id: 2,
    title: "Smilie.io",
    category: "Product Engineering",
    role: "Website Launch & Product Database Engineering",
    description: "Led large-scale digital catalog assembly and website content workflows for a major product launch.",
    results: [
      "Delivered **500+ optimized product listings within 1 week**, supporting a launch of **1,000+ new SKUs**.",
      "Designed and standardized product visuals through **Canva**, ensuring uniform brand presentation and layout consistency.",
      "Built a structured product-asset pipeline using **Google Sheets, ImageKit.io & Airtable**, enabling automated synchronization to website drafts.",
      "Conducted targeted research and visual sourcing to resolve missing asset gaps and maintain data accuracy."
    ],
    technologies: ["Canva", "Google Sheets", "ImageKit.io", "Airtable"],
    color: "bg-blue-100",
  },
  {
    id: 3,
    title: "The PureStitch",
    category: "E-commerce",
    role: "Shopify Product Systems & Launch Execution",
    description: "Enabled rapid product go-live cycles and storefront optimization for high-volume apparel launches.",
    results: [
      "Executed end-to-end product uploads in **Shopify**, including titles, descriptions, variants, pricing, and visual assets.",
      "Published **50 new products in 1–2 days** for the Midsummer Collection release.",
      "Managed real-time inventory, promotional updates, and homepage adjustments to maintain conversion-ready presentation.",
      "Streamlined internal briefing workflows using **Google Sheets & Google Slides**, improving operational clarity and launch accuracy."
    ],
    technologies: ["Shopify", "Google Sheets", "Google Slides"],
    color: "bg-emerald-100",
  },
  {
    id: 4,
    title: "E-Commerce Growth",
    category: "E-commerce",
    role: "E-Commerce Admin & Growth Management",
    description: "Scaled e-commerce operations and marketplace performance across regional storefronts.",
    results: [
      "Directed strategy and operations for **5+ online stores** across major SEA marketplaces (**Shopee, TikTok Shop**).",
      "Drove **IDR 500M+ GMV** and **11,000+ monthly orders**, maintaining performance stability at scale.",
      "Achieved **476% sales growth in one month** for a new store through data-led optimization.",
      "Sustained **IDR 300M+ monthly GMV** autonomously for a mature store in near-autopilot mode.",
      "Launched & expanded storefronts on **Nusaliving Mall**, coordinating product data, promotions & inventory.",
      "Strategized regional campaigns for **Ramadhan & Lebaran**, mitigating seasonal dips and amplifying peak demand results."
    ],
    technologies: ["Shopee", "TikTok Shop", "Nusaliving Mall"],
    color: "bg-purple-100",
  },
];

const categories = ["All", "Operations", "Product Engineering", "E-commerce"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-2">My Work</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-neutral-text mb-8">
            Featured <span className="text-secondary">Projects</span>
          </h3>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-48 ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white px-4 py-2 rounded-full text-sm font-bold text-neutral-text shadow-lg">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">{project.category}</span>
                  <h4 className="text-xl font-bold text-neutral-text mt-2 mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-neutral-500 text-sm line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors"
                >
                  <X size={20} />
                </button>
                
                <div className={`h-48 ${selectedProject.color} w-full`}></div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-sm font-bold text-accent uppercase tracking-wider">{selectedProject.category}</span>
                      <h3 className="text-3xl font-bold text-neutral-text mt-2">{selectedProject.title}</h3>
                      <p className="text-primary font-medium mt-1">{selectedProject.role}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-neutral-text mb-2">Description</h4>
                      <p className="text-neutral-600">{selectedProject.description}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-neutral-text mb-2">Key Results</h4>
                      <ul className="list-disc list-inside space-y-2 text-neutral-600">
                        {selectedProject.results.map((result, idx) => (
                          <li key={idx}>
                            {result.split(/(\*\*.*?\*\*)/).map((part, i) => 
                              part.startsWith('**') && part.endsWith('**') ? (
                                <strong key={i} className="font-bold text-neutral-800">
                                  {part.slice(2, -2)}
                                </strong>
                              ) : (
                                part
                              )
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-neutral-text mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-neutral-50 border border-neutral-200 rounded-full text-sm text-neutral-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
