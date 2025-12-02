"use client";

import { motion } from "framer-motion";
import { Check, Layout, ShoppingBag, Users } from "lucide-react";

const services = [
  {
    title: "Project Management",
    description: "I bring order to chaos. From planning to execution, I ensure your projects are delivered on time and within budget.",
    icon: Users,
    features: ["Agile & Scrum Methodologies", "Team Leadership & Coordination", "Resource Allocation", "Risk Management"],
    color: "bg-purple-50 text-primary",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to grow your brand presence and engage your target audience effectively.",
    icon: Layout,
    features: ["Social Media Strategy", "Content Planning", "Campaign Optimization", "Performance Analytics"],
    color: "bg-purple-50 text-secondary",
  },
  {
    title: "E-commerce Ops",
    description: "Streamlining your online store operations to maximize sales and improve customer satisfaction.",
    icon: ShoppingBag,
    features: ["Shopify Management", "Product Listing Optimization", "Inventory Management", "Customer Service Systems"],
    color: "bg-blue-50 text-accent",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent tracking-wider uppercase mb-2">What I Do</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-neutral-text">
            Services & <span className="text-secondary">Solutions</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} />
              </div>
              
              <h4 className="text-2xl font-bold text-neutral-text mb-4 font-heading">{service.title}</h4>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-neutral-600">
                    <div className="mt-1 mr-3 text-green-400 flex-shrink-0">
                      <Check size={16} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
