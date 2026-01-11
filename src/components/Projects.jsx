import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Infin8 - Mortgage Application Platform",
      description: "A production-grade mortgage application system built for streamlining loan processing workflows. Developed modular UI components using Angular and React, integrated with backend microservices through REST APIs and GraphQL to handle complex financial data flows. The platform supports multi-step form validation, document management, and real-time application status tracking, enabling mortgage officers to process applications efficiently while maintaining compliance standards.",
      tech: ["Angular", "React", "TypeScript", "GraphQL", "REST APIs", "SCSS"],
      image: "/images/infin8-preview.png",
      liveLink: "",
      highlights: [
        "Production system handling sensitive financial data",
        "Multi-step form workflows with real-time validation",
        "GraphQL integration for optimized data fetching",
        "Component-based architecture for maintainability"
      ]
    },
    {
      title: "Ceebit - Low-Code Platform",
      description: "A low-code development platform enabling rapid application development through visual interfaces. Built reusable UI modules using AngularJS and Bootstrap to improve development velocity across multiple client projects. Focused on creating a component library that allows non-technical users to build workflows while maintaining code quality and consistency. The platform architecture emphasizes modularity, enabling teams to compose complex applications from pre-built, tested components.",
      tech: ["AngularJS", "Bootstrap", "TypeScript", "SCSS", "Jenkins CI/CD"],
      image: "/images/ceebit-preview.png",
      liveLink: "",
      highlights: [
        "Reusable component library across multiple flows",
        "Bootstrap-based responsive design system",
        "CI/CD pipeline integration with Jenkins",
        "Supporting rapid application development workflows"
      ]
    },
    {
      title: "Ziosk - Real-Time Visitor Tracking System",
      description: "A comprehensive visitor and employee management system providing real-time tracking and analytics for corporate facilities. Built with React and Redux for predictable state management, the application integrates 17+ REST API endpoints to handle check-ins, check-outs, visitor logs, and security clearances. The system features live dashboard updates, visitor pre-registration, badge printing integration, and detailed analytics for facility management teams to monitor building occupancy and security compliance.",
      tech: ["React", "Redux", "Tailwind CSS", "REST APIs", "Git"],
      image: "/images/ziosk-preview.png",
      liveLink: "",
      highlights: [
        "Integrated 17+ REST endpoints with proper error handling",
        "Real-time visitor tracking with live dashboard updates",
        "Converted Figma designs to production-ready components",
        "Redux state management for complex data flows"
      ]
    },
    {
      title: "Cryptoride - Web3 Cab Booking Platform",
      description: "A decentralized ride-sharing application leveraging blockchain technology for transparent, trustless transactions. Built with Next.js and integrated with MetaMask for Web3 wallet connectivity, enabling users to book rides and process payments using cryptocurrency. The platform utilizes Mapbox API for interactive maps and real-time routing, while Sanity CMS manages driver and ride data. This project demonstrates the practical application of blockchain technology in everyday services, combining traditional ride-sharing UX with decentralized payment infrastructure.",
      tech: ["Next.js", "Web3", "MetaMask", "Mapbox API", "Sanity CMS", "TypeScript"],
      image: "/images/cryptoride-preview.png",
      liveLink: "https://crypto-ride-college-project-1tou.vercel.app/",
      highlights: [
        "Web3 wallet integration with MetaMask",
        "Real-time location tracking using Mapbox API",
        "Blockchain-based payment processing",
        "Headless CMS for content management with Sanity"
      ]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">PORTFOLIO</h4>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {/* Project selector - mobile version */}
          <motion.div 
            className="md:hidden w-full mb-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted">SELECT PROJECT</p>
              <div className="text-xs text-muted">{activeProject + 1}/{projects.length}</div>
            </div>
            <div className="flex overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`snap-start flex-shrink-0 w-[75%] mr-3 p-4 cursor-pointer transition-all duration-300 ${
                    activeProject === index 
                      ? "bg-secondary bg-opacity-50 border border-light border-opacity-20" 
                      : "bg-secondary bg-opacity-10 border border-muted border-opacity-10"
                  }`}
                  onClick={() => setActiveProject(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className={`font-medium text-sm mb-1 ${
                    activeProject === index ? "text-light" : "text-muted"
                  }`}>
                    {project.title.split(" - ")[0]}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1">
                    {project.tech.slice(0, 3).join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project selector - desktop version */}
          <motion.div 
            className="hidden md:block md:col-span-4" 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`border-l border-muted ${
                  activeProject === index ? "border-opacity-100" : "border-opacity-20"
                } p-4 cursor-pointer transition-all duration-300 ${
                  activeProject === index ? "bg-secondary bg-opacity-30" : ""
                }`}
                onClick={() => setActiveProject(index)}
                whileHover={{
                  backgroundColor: "rgba(26, 26, 26, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className={`font-medium text-sm mb-1 ${
                  activeProject === index ? "text-light" : "text-muted"
                }`}>
                  {project.title.split(" - ")[0]}
                </h3>
                <p className="text-xs text-muted line-clamp-1">
                  {project.tech.slice(0, 3).join(", ")}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project details */}
          <motion.div 
            className="col-span-1 md:col-span-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeProject}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-secondary bg-opacity-20 p-4 md:p-6 border border-muted border-opacity-10"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3">{projects[activeProject].title}</h3>
              <p className="text-sm md:text-base text-muted mb-4 md:mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>
              
              <div className="mb-4 md:mb-6">
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">KEY HIGHLIGHTS</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {projects[activeProject].highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-light opacity-50 mt-1">→</span>
                      <span className="text-xs md:text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs md:text-sm font-mono text-light mb-2 md:mb-3">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs py-1 px-2 md:px-3 bg-primary border border-muted border-opacity-20 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {projects[activeProject].liveLink && (
                <div className="mt-6 md:mt-8 flex justify-center md:justify-end">
                  <a 
                    href={projects[activeProject].liveLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-mono text-xs inline-flex items-center px-5 py-2 md:px-6 md:py-2 border border-light hover:bg-light hover:bg-opacity-5 transition-all duration-300 group"
                  >
                    VIEW PROJECT
                    <svg className="ml-2 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;