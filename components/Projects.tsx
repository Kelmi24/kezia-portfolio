"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  role: string;
  description: string;
  results: string[];
  technologies: string[];
  color: string;
  images: ProjectImage[];
  logo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "HOOP Inc",
    category: "Operations",
    role: "Marketplace Operations & Customer Experience",
    description: "Supported customer experience, marketplace operations, and listing workflows across multiple resale platforms including Poshmark, eBay, Depop, and Vendoo.",
    results: [
      "Managed end-to-end operations across **multiple resale marketplaces** (Poshmark, eBay, Depop) and listing infrastructure (Vendoo).",
      "Processed and validated **hundreds of sales actions** (initiations, cancellations, returns, tracking updates), reducing erroneous cancellations.",
      "Executed **1,000+ operational updates** across Pending Sales, Tracking Status, Venmo, Returns, and Account Deletion trackers.",
      "Listed and prepared **300+ Must-Sell items** across new Poshmark and eBay accounts for safer inventory expansion.",
      "Updated and standardized pricing for **400+ items** in Vendoo for consistent cross-platform listing.",
      "Managed **50+ account deletion requests** per cycle, ensuring compliance and reducing future support load.",
      "Built a centralized **FAQ & response template system**, improving response speed and consistency.",
      "Delivered clear, **executive-ready daily reports** used by leadership for operational decisions."
    ],
    technologies: ["Poshmark", "eBay", "Depop", "Vendoo", "Slicktext", "OpenAI"],
    color: "bg-amber-50",
    logo: "/projects/logos/hoop.png",
    images: [
      { src: "/projects/hoop/vendoo-inventory.png", alt: "Vendoo Inventory Dashboard" },
      { src: "/projects/hoop/poshmark-listings.png", alt: "eBay Listings Management" },
      { src: "/projects/hoop/poshmark-sales.png", alt: "Poshmark My Sales" },
      { src: "/projects/hoop/shopify-products.png", alt: "Shopify Products Dashboard" },
      { src: "/projects/hoop/pending-sales.png", alt: "Pending Sales Spreadsheet" },
      { src: "/projects/hoop/listing-batches.png", alt: "HOOP Listing Batches" },
      { src: "/projects/hoop/users-manager.png", alt: "HOOP Users Manager" },
      { src: "/projects/hoop/slicktext-inbox.jpg", alt: "Slicktext Customer Inbox" },
    ],
  },
  {
    id: 2,
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
    color: "bg-orange-50",
    logo: "/projects/logos/ishinora.png",
    images: [
      { src: "/projects/ishinora/photoshoot-dashboard.jpg", alt: "Photoshoot & Videoshoot Dashboard" },
      { src: "/projects/ishinora/project-management.jpg", alt: "Project Management Dashboard" },
      { src: "/projects/ishinora/schedule.jpg", alt: "Team Schedule Management" },
      { src: "/projects/ishinora/interior-bundles.jpg", alt: "Interior Bundles Showcase" },
      { src: "/projects/ishinora/curated-collection.jpg", alt: "Curated Collection Page" },
    ],
  },
  {
    id: 3,
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
    logo: "/projects/logos/smilie.png",
    images: [
      { src: "/projects/smilie/product-page.png", alt: "Smilie Product Page" },
      { src: "/projects/smilie/product-database.png", alt: "Product Category Database" },
      { src: "/projects/smilie/airtable-database.png", alt: "Airtable Product Database" },
      { src: "/projects/smilie/product-catalog.png", alt: "Product Catalog Spreadsheet" },
      { src: "/projects/smilie/product-grid.png", alt: "Product Grid View" },
    ],
  },
  {
    id: 4,
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
    logo: "/projects/logos/purestitch.png",
    images: [
      { src: "/projects/purestitch/summer-collection.png", alt: "Mid Summer Collection Store" },
      { src: "/projects/purestitch/photoshoot-drive.png", alt: "Photoshoot Files in Drive" },
      { src: "/projects/purestitch/photoshoot-gallery.png", alt: "Product Photography Gallery" },
    ],
  },
  {
    id: 5,
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
    images: [
      { src: "/projects/ecommerce/tiktok-affiliate.png", alt: "TikTok Shop Affiliate Analytics" },
      { src: "/projects/ecommerce/tokopedia-analytics.png", alt: "Tokopedia Seller Analytics" },
      { src: "/projects/ecommerce/shopee-dashboard.png", alt: "Shopee Seller Dashboard" },
      { src: "/projects/ecommerce/shopee-rankings.png", alt: "Shopee Product Rankings" },
    ],
  },
];

const categories = ["All", "Operations", "Product Engineering", "E-commerce"];

// Image Carousel Component for Project Cards (no lightbox on click)
function CardImageCarousel({ 
  images 
}: { 
  images: ProjectImage[]; 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full">
      {/* Main Image - clicking opens the modal (via parent) */}
      <div className="relative w-full h-full cursor-pointer group/image">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover transition-transform duration-500 group-hover/image:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover/image:opacity-100 transform translate-y-4 group-hover/image:translate-y-0 transition-all duration-300 bg-white px-4 py-2 rounded-full text-sm font-bold text-neutral-text shadow-lg">
            View Details
          </span>
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 text-neutral-700" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 text-neutral-700" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                idx === currentIndex 
                  ? "bg-white scale-125 shadow-md" 
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Modal Image Gallery Component
function ModalImageGallery({ 
  images, 
  initialIndex,
  onImageClick 
}: { 
  images: ProjectImage[]; 
  initialIndex?: number;
  onImageClick: (index: number) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);

  if (images.length === 0) return null;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-neutral-100">
        <div 
          className="relative w-full h-full cursor-zoom-in group/modal-image"
          onClick={() => onImageClick(currentIndex)}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
          <div className="absolute inset-0 bg-black/0 group-hover/modal-image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <ZoomIn className="opacity-0 group-hover/modal-image:opacity-100 text-white w-10 h-10 transition-opacity duration-300" />
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-700" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-neutral-700" />
            </button>
          </>
        )}
      </div>

      {/* Image Caption */}
      <p className="text-center text-sm text-neutral-500 font-medium">
        {images[currentIndex].alt}
      </p>

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                idx === currentIndex 
                  ? "bg-primary scale-125" 
                  : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex gap-2 justify-center flex-wrap">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all duration-200 ${
                idx === currentIndex 
                  ? "ring-2 ring-primary ring-offset-2 scale-105" 
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Lightbox Component
function Lightbox({ 
  images, 
  currentIndex, 
  onClose,
  onNavigate
}: { 
  images: ProjectImage[]; 
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const goToPrevious = () => {
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Image Counter */}
      <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </>
      )}

      {/* Main Image */}
      <motion.div
        key={currentIndex}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-[90vw] h-[80vh] max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </motion.div>

      {/* Caption */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 rounded-full text-white text-sm font-medium max-w-md text-center">
        {images[currentIndex].alt}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: ProjectImage[];
    currentIndex: number;
  }>({ isOpen: false, images: [], currentIndex: 0 });
  
  // Scroll indicator state
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check if scrolled to bottom
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const isAtBottom = container.scrollHeight - container.scrollTop <= container.clientHeight + 20;
      setShowScrollIndicator(!isAtBottom);
    }
  }, []);

  // Reset scroll indicator when modal opens
  useEffect(() => {
    if (selectedProject) {
      setShowScrollIndicator(true);
      // Check after render if content needs scrolling
      setTimeout(() => {
        const container = scrollContainerRef.current;
        if (container && container.scrollHeight <= container.clientHeight) {
          setShowScrollIndicator(false); // No scroll needed
        }
      }, 100);
    }
  }, [selectedProject]);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openLightbox = (images: ProjectImage[], index: number) => {
    setLightboxState({ isOpen: true, images, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightboxState({ isOpen: false, images: [], currentIndex: 0 });
  };

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
                {/* Project Image or Placeholder */}
                <div className={`h-48 ${project.images.length === 0 ? project.color : ''} relative overflow-hidden`}>
                  {project.images.length > 0 ? (
                    <CardImageCarousel 
                      images={project.images} 
                    />
                  ) : (
                    <div className={`absolute inset-0 ${project.color}`}>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white px-4 py-2 rounded-full text-sm font-bold text-neutral-text shadow-lg">
                          View Details
                        </span>
                      </div>
                    </div>
                  )}
                  
                  {/* Logo Badge on Card */}
                  {project.logo && (
                    <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-md">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={60}
                        height={24}
                        className="object-contain h-6 w-auto"
                      />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">{project.category}</span>
                  <h4 className="text-xl font-bold text-neutral-text mt-2 mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-neutral-500 text-sm line-clamp-2">{project.description}</p>
                  
                  {/* Image count badge */}
                  {project.images.length > 0 && (
                    <div className="mt-3 flex items-center gap-2 text-neutral-400 text-xs">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{project.images.length} images</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal - Side-by-Side Layout */}
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
                className="bg-white rounded-3xl max-w-6xl w-full max-h-[85vh] shadow-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-neutral-100 rounded-full hover:bg-neutral-200 transition-colors z-10"
                >
                  <X size={20} />
                </button>
                
                {/* Side-by-Side Layout: Info Left, Images Right */}
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Left Side - Project Info with Scroll Indicator */}
                  <div className="lg:w-1/2 relative">
                    <div ref={scrollContainerRef} onScroll={handleScroll} className="p-8 lg:pr-6 overflow-y-auto max-h-[85vh] pb-16">
                      {/* Logo in Modal */}
                      {selectedProject.logo && (
                        <div className="mb-4">
                          <Image
                            src={selectedProject.logo}
                            alt={`${selectedProject.title} logo`}
                            width={120}
                            height={48}
                            className="object-contain h-10 w-auto"
                          />
                        </div>
                      )}
                    
                      <span className="text-sm font-bold text-accent uppercase tracking-wider">{selectedProject.category}</span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-neutral-text mt-2">{selectedProject.title}</h3>
                      <p className="text-primary font-medium mt-1 mb-6">{selectedProject.role}</p>

                      <div className="space-y-5">
                        <div>
                          <h4 className="font-bold text-neutral-text mb-2">Description</h4>
                          <p className="text-neutral-600 text-sm lg:text-base">{selectedProject.description}</p>
                        </div>

                        <div>
                          <h4 className="font-bold text-neutral-text mb-2">Key Results</h4>
                          <ul className="list-disc list-inside space-y-1.5 text-neutral-600 text-sm lg:text-base">
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
                    
                    {/* Scroll Indicator - Gradient Fade with Icon */}
                    {showScrollIndicator && (
                      <div className="absolute bottom-0 left-0 right-0 pointer-events-none transition-opacity duration-300">
                        <div className="h-20 bg-gradient-to-t from-white via-white/80 to-transparent" />
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
                          <span className="text-xs text-neutral-400 font-medium">Scroll for more</span>
                          <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side - Image Gallery */}
                  <div className="lg:w-1/2 bg-neutral-50 p-6 lg:p-8 flex flex-col justify-center">
                    {selectedProject.images.length > 0 ? (
                      <ModalImageGallery 
                        images={selectedProject.images}
                        onImageClick={(index) => openLightbox(selectedProject.images, index)}
                      />
                    ) : (
                      <div className={`h-64 lg:h-80 ${selectedProject.color} w-full rounded-xl flex items-center justify-center`}>
                        <span className="text-neutral-500 text-sm">No images available</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxState.isOpen && (
            <Lightbox
              images={lightboxState.images}
              currentIndex={lightboxState.currentIndex}
              onClose={closeLightbox}
              onNavigate={(index) => setLightboxState(prev => ({ ...prev, currentIndex: index }))}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
