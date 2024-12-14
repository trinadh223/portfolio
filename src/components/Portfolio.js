import React, { useState } from 'react';
import { Menu, X, ChevronRight, Mail, ExternalLink, ArrowRight, Award, Download } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const experiences = [
    {
      company: "ICICI Bank",
      role: "Senior Technical Manager (M2)",
      period: "May 22 - Present",
      location: "Hyderabad",
      points: [
        "Owned and executed the migration of the primary website of ICICI Bank to Adobe Experience Manager (CMS) as per planned timelines.",
        "Led a cross-functional team to enhance ICICI Bank's primary website for non-logged-in users, utilizing Adobe Analytics and Adobe Target to achieve a 20% increase in user engagement.",
        "Spearheaded the transition to the Martech project, integrating the Adobe suite of solutions, resulting in a 6% increase in conversion rates."
      ]
    },
    {
      company: "Upraised",
      role: "Product Management Fellow",
      period: "Nov 22 - Mar 23",
      location: "Remote",
      points: [
        "Recognized by senior product leaders from Mastercard, CRED, PayTM, and Myntra in the cohort.",
        "Authored industry-grade PRDs, vetted and approved by a Senior PM from CRED."
      ]
    },
    {
      company: "Persistent Systems",
      role: "Software Engineer",
      period: "Oct 20 - May 22",
      location: "Pune",
      points: [
        "Integrated external systems with Salesforce via Mule for customer credit history assessment.",
        "Implemented Aadhar Vault Integration to mask Aadhar Numbers using Salesforce's Outbound Messages SOAP API."
      ]
    }
  ];

  const projects = [
    {
      title: "Rapido Switching Problem",
      description: "Product teardown analysis focusing on user experience and retention",
      tags: ["Product Analysis", "UX Research", "User Retention"],
      link: "#"
    },
    {
      title: "Disney + Hotstar PRD",
      description: "Comprehensive PRD for increasing user engagement metrics",
      tags: ["Product Strategy", "User Engagement", "PRD"],
      link: "#"
    },
    {
      title: "Whatsapp Status Feature",
      description: "Detailed feature breakdown and improvement analysis",
      tags: ["Feature Analysis", "Product Design", "UX"],
      link: "#"
    }
  ];

  const skills = [
    {
      category: "Product",
      items: ["Market Research", "Structured Thinking", "Stakeholder Management", "Data-driven Decision Making"]
    },
    {
      category: "Technical",
      items: ["Adobe Analytics", "Adobe Target", "JIRA", "API Design"]
    },
    {
      category: "Tools",
      items: ["Figma", "Adobe Suite", "Confluence", "A/B Testing"]
    }
  ];

  const achievements = [
    {
      title: "JEE Advanced Excellence",
      items: [
        "Ranked among the top 1% of all students in JEE Advanced 2016",
        "Ranked among the top 0.3% of a million students in JEE Mains Paper-1 in 2016",
        "Secured an All India Rank of 549 in JEE Mains Paper-II in 2016"
      ]
    },
    {
      title: "Academic Distinctions",
      items: [
        "Secured State Rank of 296 in AP EAMCET in 2016",
        "Secured State Rank of 234 in TS EAMCET in 2016",
        "Secured an All India Rank of 26 in SITET (Smart India Talent Exam) in 2012"
      ]
    },
    {
      title: "Professional Recognition",
      items: [
        "Received Bravo Team Award at Persistent Systems (Ex-Employer)",
        "Recognized by senior product leaders from Mastercard, CRED, PayTM, and Myntra",
        "Reached the INMO (3rd Level) in the International Mathematics Olympiad by HBCSE"
      ]
    }
  ];

  const handleDownloadCV = () => {
    // Replace with your actual CV link
    window.open('your-cv-link-here', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Trinadh Divvela
            </span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink active={activeSection === 'home'} href="#home">Home</NavLink>
              <NavLink active={activeSection === 'about'} href="#about">About</NavLink>
              <NavLink active={activeSection === 'projects'} href="#projects">Projects</NavLink>
              <NavLink active={activeSection === 'skills'} href="#skills">Skills</NavLink>
              <NavLink active={activeSection === 'contact'} href="#contact">Contact</NavLink>
              <button 
                onClick={handleDownloadCV}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </button>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-2 p-4 bg-gray-800/90 backdrop-blur-lg rounded-lg border border-cyan-500/20">
              <div className="flex flex-col gap-4">
                <NavLink active={activeSection === 'home'} href="#home">Home</NavLink>
                <NavLink active={activeSection === 'about'} href="#about">About</NavLink>
                <NavLink active={activeSection === 'projects'} href="#projects">Projects</NavLink>
                <NavLink active={activeSection === 'skills'} href="#skills">Skills</NavLink>
                <NavLink active={activeSection === 'contact'} href="#contact">Contact</NavLink>
                <button 
                  onClick={handleDownloadCV}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center gap-2"
                >
                  <Download size={16} />
                  Download CV
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">
              Product Manager
              <span className="block text-cyan-400 mt-2">Passionate about building products</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Crafting innovative and user-centric digital solutions through data-driven decision making and thoughtful design.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center gap-2">
                View Projects <ChevronRight size={20} />
              </button>
              <button className="px-6 py-3 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 flex items-center gap-2">
                Contact Me <Mail size={20} />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src="/api/placeholder/400/400" 
              alt="Profile" 
              className="relative rounded-full w-full max-w-md mx-auto border-2 border-cyan-500/50"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="group relative bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-cyan-400">{exp.role}</h3>
                      <p className="text-gray-400">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="text-purple-400">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a 
                href={project.link}
                key={index}
                className="group bg-gray-800/50 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="h-48 bg-gray-700/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <ExternalLink className="absolute top-4 right-4 text-cyan-400 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Achievements & Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((category, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-cyan-400" size={24} />
                  <h3 className="text-xl font-bold text-cyan-400">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight size={18} className="text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <div className="flex justify-center space-x-8">
            <a 
              href="mailto:trinadh.divvela@gmail.com" 
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <ExternalLink size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Download CV Section */}
      <section className="py-12 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Ready to Learn More?</h2>
            <p className="text-gray-300 mb-6">Download my CV for a complete overview of my experience and skills</p>
            <button 
              onClick={handleDownloadCV}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Floating Download Button */}
      <button 
        onClick={handleDownloadCV}
        className="fixed bottom-8 right-8 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-cyan-500/25 z-50"
      >
        <Download size={20} />
        <span className="hidden md:inline">Download CV</span>
      </button>
    </div>
  );
};

// Utility component for navigation links
const NavLink = ({ href, children, active }) => (
  <a
    href={href}
    className={`transition-colors duration-300 ${
      active 
        ? 'text-cyan-400' 
        : 'text-gray-300 hover:text-cyan-400'
    }`}
  >
    {children}
  </a>
);

export default Portfolio;