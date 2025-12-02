import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4">Kezia Estha</h3>
            <p className="text-gray-300">
              Project Manager & Virtual Assistant driving digital excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-secondary transition-colors">About Me</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-secondary transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:keziaestha@gmail.com" className="text-gray-300 hover:text-secondary transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+6281287323730" className="text-gray-300 hover:text-secondary transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kezia Estha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
