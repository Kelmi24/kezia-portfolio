"use client";

import { motion } from "framer-motion";
import { 
  SiGoogle, SiAirtable, SiCanva, SiShopify, 
  SiTrello, SiAsana, SiSlack, SiZoom,
  SiTiktok, SiShopee, SiNotion,
  SiGoogledrive
} from "react-icons/si";
import { FileText, Table, Presentation, Calendar, Calendar as CalendarIcon, CheckSquare } from "lucide-react";

const skills = [
  { name: "Project Management", level: 85, color: "#FF6B8B" }, // Primary
  { name: "Digital Marketing", level: 90, color: "#A78BFA" }, // Secondary
  { name: "E-commerce", level: 80, color: "#7DD3FC" }, // Accent
  { name: "Client Relations", level: 95, color: "#C084FC" }, // Purple-400
];

const CircularProgress = ({ level, color, name }: { level: number; color: string; name: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32 md:w-40 md:h-40">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="#F3F4F6"
            strokeWidth="8"
            fill="transparent"
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            initial={{ strokeDasharray: "283", strokeDashoffset: "283" }}
            whileInView={{ strokeDashoffset: `${283 - (283 * level) / 100}` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold font-heading text-neutral-text">
            {level}%
          </span>
        </div>
      </div>
      <h4 className="mt-4 text-lg font-semibold text-neutral-text text-center">{name}</h4>
    </div>
  );
};

const tools = [
  { name: "Google Docs", icon: FileText, color: "#4285F4" },
  { name: "Google Sheets", icon: Table, color: "#0F9D58" },
  { name: "Google Slides", icon: Presentation, color: "#F4B400" },
  { name: "Google Drive", icon: SiGoogledrive, color: "#4285F4" },
  { name: "Google Calendar", icon: Calendar, color: "#4285F4" },
  { name: "Airtable", icon: SiAirtable, color: "#18BFFF" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
  { name: "Shopify", icon: SiShopify, color: "#96BF48" },
  { name: "Shopee", icon: SiShopee, color: "#EE4D2D" },
  { name: "TikTok Shop", icon: SiTiktok, color: "#000000" },
  { name: "Monday.com", icon: CalendarIcon, color: "#FF3D57" },
  { name: "Notion", icon: SiNotion, color: "#000000" },
  { name: "ClickUp", icon: CheckSquare, color: "#7B68EE" },
  { name: "Trello", icon: SiTrello, color: "#0052CC" },
  { name: "Asana", icon: SiAsana, color: "#F06A6A" },
  { name: "Slack", icon: SiSlack, color: "#4A154B" },
  { name: "Zoom", icon: SiZoom, color: "#2D8CFF" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-neutral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-accent tracking-wider uppercase mb-2"
          >
            My Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-neutral-text"
          >
            Skills & <span className="text-primary">Proficiency</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <CircularProgress {...skill} />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills List */}
        <div className="mt-20">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
            <h4 className="text-xl font-bold text-neutral-text mb-6 text-center">Technical Tools & Platforms</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#FAF5FF" }}
                  className="px-4 py-2 bg-neutral-50 rounded-full text-neutral-600 text-sm font-medium border border-neutral-100 cursor-default transition-colors flex items-center gap-2"
                >
                  <tool.icon size={16} style={{ color: tool.color }} />
                  {tool.name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
