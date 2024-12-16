import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown, Mail, ExternalLink, ArrowRight, Award, Download } from 'lucide-react';
import profileImage from '../assets/main-profile-image.jpeg'
import BlogCarousel from './BlogCarousel';
import { Linkedin, Twitter, Instagram, Facebook, Github } from 'lucide-react';

const BASE_URL = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

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
        "Spearheaded the transition to the Martech project, taking ownership of onboarding 6 channels and integrating the Adobe suite of solutions, including Adobe Analytics and Adobe Target. This strategic initiative resulted in a 6% increase in conversion rates through enhanced tracking, retargeting and real-time customer profiling.",
        "Developed and orchestrated comprehensive strategic and tactical plans for 18 months ensuring seamless execution through effective cross-functional team collaboration.",
        "Responsible for overseeing governance and security throughout the entire digital transformation project, ensuring robust protection and compliant execution."
      ]
    },
    {
      company: "Upraised",
      role: "Product Management Fellow",
      period: "Nov 22 - Mar 23",
      location: "Remote",
      points: [
        "Recognized by senior product leaders from Mastercard, CRED, PayTM, and Myntra in the cohort.",
        "Authored industry-grade PRDs, vetted and approved by a Senior PM from CRED.",
        "Evaluated Rapido’s switching issue, securing a top 2 ranking in the entire cohort of more than 80 people.",
        "Conducted in-depth product teardowns and observations during a rigorous 16-week program."
      ]
    },
    {
      company: "Persistent Systems",
      role: "Software Engineer",
      period: "Oct 20 - May 22",
      location: "Pune",
      points: [
        "Integrated external systems with Salesforce via Mule for customer credit history assessment.",
        "Developed a consent management site for Business and Personal Banking products through SMS and email links.",
        "Created a Global Search feature for cross-sell functionality, enabling case searches by Loan Number and Name.",
        "Implemented Aadhar Vault Integration to mask Aadhar Numbers using Salesforce's Outbound Messages SOAP API."
      ]
    },
    {
        company: "Perpule",
        role: "Software Development Intern",
        period: "May 19 - Jul 19",
        location: "Bangalore",
        points: [
          "Engineered a payment microservice using Rest APIs, Spring Boot, Cloud SQL, and Google App Engine.",
          "Designed and developed BO and DAO classes for Amazon Pay, Paytm Auto Debit, PhonePe, and Paytm UPI.",
          "Enhanced payment methods, refactored code, and optimized components, reducing transaction latency by 83%."
        ]
      }
  ];

  const projects = [
    {
      title: "Rapido Switching Problem",
      description: "Product teardown analysis focusing on user experience and retention",
      tags: ["Product Analysis", "UX Research", "User Retention", "Product Teardown"],
      link: "https://www.canva.com/design/DAFdSav_J_s/nmE95Ebp7cZPIIFiXtmGig/edit?utm_content=DAFdSav_J_s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      image: `${BASE_URL}/images/projects/rapido-image.jpeg`
    },
    {
      title: "Disney + Hotstar PRD",
      description: "Comprehensive PRD for increasing user engagement metrics",
      tags: ["Product Strategy", "User Engagement", "PRD", "Key Metrics"],
      link: "https://docs.google.com/document/d/1yDtXkEadGnA8nEAGgb_pTWskOyb0u6fqU8953Wn3dN8/edit?usp=sharing",
      image: `${BASE_URL}/images/projects/disneyhotstar.jpeg`

    },
    {
        title: "Amazon Packaging Recycle Case Study",
        description: "Detailed Case study of Amazon package recycling.",
        tags: ["Feature Analysis", "Product Design", "UX", "GTM Strategy", "Wireframing"],
        link: "https://docs.google.com/document/d/1j3DEABD1Zg0JcAEsdFKsvfVX8OWipkXjTVRLzyJfxOI/edit?usp=sharing",
        image: `${BASE_URL}/images/projects/amazonpackage.jpeg`
    },
    {
      title: "Whatsapp Status Feature",
      description: "Detailed feature breakdown and improvement analysis",
      tags: ["Feature Analysis", "Product Design", "UX"],
      link: "https://www.canva.com/design/DAFWJJjyQKQ/ScdFI3EfdV9r8uDEivG6WA/edit?utm_content=DAFWJJjyQKQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      image: `${BASE_URL}/images/projects/whatsappimage.jpeg`
    }
  ];

  const skills = [
    {
      category: "Product",
      items: ["Market Research", "Structured Thinking", "Stakeholder Management", "Data-driven Decision Making", "Ownership", "Project Management", "User Journeys",
      "Product Roadmap", "Root Cause Analysis", "First Principle Thinking"]
    },
    {
      category: "Technical",
      items: ["Adobe Analytics", "Adobe Target", "API Integration", "SQL", "Salesforce", "Adobe Experience Manager"]
    },
    {
      category: "Tools",
      items: ["Figma", "Whimsical", "Miro", "JIRA", "Google Analytics", "Notion"]
    }
  ];

  const achievements = [
    {
      title: "Academic Achievements",
      items: [
        "Ranked among the top 1% of all students in JEE Advanced 2016",
        "Ranked among the top 0.3% of a million students in JEE Mains Paper-1 in 2016",
        "Secured an All India Rank of 549 in JEE Mains Paper-II in 2016",
        "Secured State Rank of 296 in AP EAMCET in 2016",
        "Secured State Rank of 234 in TS EAMCET in 2016",
        "Secured an All India Rank of 26 in SITET (Smart India Talent Exam) in 2012",
        "Reached the INMO (3rd Level) in the International Mathematics Olympiad by HBCSE"
      ]
    },
    {
      title: "Professional Recognition",
      items: [
        "Received Bravo Team Award at Persistent Systems (Ex-Employer)",
        "Recognized by senior product leaders from Mastercard, CRED, PayTM, and Myntra"
      ]
    }
  ];

  {/* Download CV functionality */}
  const handleDownloadCV = () => {
    // Replace with your actual CV link
    window.open('https://docs.google.com/document/d/18CwT9-50cxi2JonkBdxhfdDvbtDwVHSR5KZnj9Cb0ow/edit?usp=sharing', '_blank');
  };

  {/* Navbar More Dropdown functionality */}
  const NavMoreDropdown = ({ active }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
    const handleItemClick = (id) => {
      setIsOpen(false);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div 
        ref={dropdownRef}
        className="relative"
      >
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-1 transition-colors duration-300 ${
            active ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
          }`}
        >
          More
          <ChevronDown size={16} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 py-2 bg-gray-800/95 backdrop-blur-sm rounded-lg border border-cyan-500/20 shadow-xl z-50">
            <button 
              onClick={() => handleItemClick('education')}
              className="w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors duration-300"
            >
              Education
            </button>
            <button 
              onClick={() => handleItemClick('experience')}
              className="w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors duration-300"
            >
              Work Experience
            </button>
            <button 
              onClick={() => handleItemClick('achievements')}
              className="w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors duration-300"
            >
              Achievements
            </button>
            <button 
              onClick={() => handleItemClick('blog')}
              className="w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors duration-300"
            >
              Blogs
            </button>
          </div>
        )}
      </div>
    );
  };

  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
        <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto lg:px-0">
            <div className="flex items-center justify-between h-16 px-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text ml-0 sm:-ml-4">
                Trinadh Divvela
            </span>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
            <NavLink active={activeSection === 'home'} href="#home">Home</NavLink>
            <NavLink active={activeSection === 'about'} href="#about">About</NavLink>
            <NavLink active={activeSection === 'projects'} href="#projects">Projects</NavLink>
            <NavLink active={activeSection === 'skills'} href="#skills">Skills</NavLink>
            <NavMoreDropdown active={['education', 'experience', 'achievements', 'blog'].includes(activeSection)} />
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
                
                {/* More Section for Mobile */}
                <div className="border-t border-gray-700 pt-4">
                    <p className="text-sm text-gray-400 mb-3 px-2">More</p>
                    <div className="flex flex-col gap-3">
                    <NavLink active={activeSection === 'education'} href="#education" className="block">Education</NavLink>
                    <NavLink active={activeSection === 'experience'} href="#experience" className="block">Experience</NavLink>
                    <NavLink active={activeSection === 'achievements'} href="#achievements" className="block">Achievements</NavLink>
                    <NavLink active={activeSection === 'blog'} href="#blog" className="block">Blog</NavLink>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-4">
                    <NavLink active={activeSection === 'contact'} href="#contact">Contact</NavLink>
                </div>
                
                <button 
                    onClick={handleDownloadCV}
                    className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2"
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
          <div className="space-y-3">
            <h1 className="text-5xl font-bold">
              Trinadh Divvela
              <span className="block text-cyan-400 mt-2">Product Manager</span>
            </h1>
            <p className="text-xl font-semibold text-blue-400">
              IIT Kharagpur | HYD
            </p>
            <p className="text-gray-300 text-lg">
              Passionate about building innovative and user-centric products through data-driven decision making and thoughtful design.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center gap-2">
                View Projects <ChevronDown size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 flex items-center gap-2">
                Contact Me
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <img 
              src={profileImage}
              alt="Profile" 
              className="relative rounded-full w-full max-w-md mx-auto border-2 border-cyan-500/50"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
        <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            About Me
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-cyan-400">
                Summary
                </h3>
                <p className="text-gray-300 leading-relaxed">
                Senior Technical Manager at ICICI Bank with a passion for building innovative digital products. I combine my technical expertise with strong product sense to deliver exceptional user experiences.
                </p>
                <p className="text-gray-300 leading-relaxed">
                My journey includes leading cross-functional teams, executing large-scale digital transformations, and driving significant improvements in user engagement and conversion rates.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                {/*<div className="space-y-2">
                    <h4 className="text-xl font-semibold text-cyan-400">Product Focus</h4>
                    <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                        <ChevronRight className="text-cyan-400 flex-shrink-0" size={16} />
                        <span className="text-gray-300">User-Centric Design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <ChevronRight className="text-cyan-400 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Data-Driven Decisions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <ChevronRight className="text-cyan-400 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Strategic Planning</span>
                    </li>
                    </ul>
                </div> */}
                {/*
                <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-cyan-400">Tech Stack</h4>
                    <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                        <ChevronRight className="text-cyan-400 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Adobe Experience Manager</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <ChevronRight className="text-cyan-400 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Adobe Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <ChevronRight className="text-cyan-400 flex-shrink-0" size={16} />
                        <span className="text-gray-300">Adobe Target</span>
                    </li>
                    </ul>
                </div> */}
                </div>
            </div>
            
            {/* Stats/Highlights */}
            <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gray-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">4+</div>
                <div className="text-gray-300">Years of Work Experience</div>
                </div>
                <div className="p-6 bg-gray-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
                <div className="text-gray-300">Years of Product Experience</div>
                </div>
                
                <div className="p-6 bg-gray-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2"> </div>
                <div className="text-gray-300"> </div>
                </div>
                <div className="p-6 bg-gray-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2"> </div>
                <div className="text-gray-300"> </div>
                </div>
            </div>
            </div>
        </div>
        </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Engineering */}
            <div className="group relative bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-cyan-400">Indian Institute of Technology, Kharagpur</h3>
                  <p className="text-gray-400">B.Tech, Civil Engineering</p>
                  <span className="text-purple-400">2016 - 2020</span>
                </div>
              </div>
            </div>

            {/* Intermediate */}
            <div className="group relative bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-cyan-400">Sri Chaitanya Educational Institutions, Gudavalli</h3>
                  <p className="text-gray-400">Intermediate Education (MPC)</p>
                  <span className="text-purple-400">2014 - 2016</span>
                </div>
              </div>
            </div>

            {/* Secondary */}
            <div className="group relative bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-colors duration-300 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-cyan-400">DR. K.K.R's Gowtham Concept School, Tenali</h3>
                  <p className="text-gray-400">Secondary School Education</p>
                  <span className="text-purple-400">2013 - 2014</span>
                </div>
              </div>
            </div>
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
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
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
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
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
     
      {/* Blog Carousel Section */}
      <section id="blog" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <BlogCarousel />
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="max-w-5xl mx-auto px-4">
            {/* Add back the heading */}
            <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
            Let's Connect
            </h2>
            
            {/* Main Contact Grid - reduced padding and width */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
            {/* Primary Contact */}
            <div className="px-6 py-4 bg-gray-800/20 backdrop-blur-sm rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] space-y-4">
                <h3 className="text-lg text-cyan-400">Primary Contact</h3>
                <div className="space-y-3">
                <a 
                    href="mailto:trinadh.divvela@gmail.com" 
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                    <Mail size={18} />
                    <span>Email</span>
                </a>
                <a 
                    href="https://www.linkedin.com/in/trinadhdivvela" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                </a>
                </div>
            </div>

            {/* Social Links */}
            <div className="px-6 py-4 bg-gray-800/20 backdrop-blur-sm rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] space-y-4">
                <h3 className="text-lg text-purple-400">Social Links</h3>
                <div className="space-y-3">
                <a 
                    href="https://x.com/trinadh_divvela" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                    <Twitter size={18} />
                    <span>Twitter / X</span>
                </a>
                <a 
                    href="https://instagram.com/trinadh_223" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                    <Instagram size={18} />
                    <span>Instagram</span>
                </a>
                <a 
                    href="https://facebook.com/trinadhdivvela" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                    <Facebook size={18} />
                    <span>Facebook</span>
                </a>
                </div>
            </div>

            {/* Content */}
            <div className="px-6 py-4 bg-gray-800/20 backdrop-blur-sm rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] space-y-4">
                <h3 className="text-lg text-cyan-400">Content</h3>
                <div className="space-y-3">
                <a 
                    href="https://medium.com/@trinadhdivvela" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                    <ExternalLink size={18} />
                    <span>Medium</span>
                </a>
                <a 
                    href="https://github.com/trinadh223" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                    <Github size={18} />
                    <span>GitHub</span>
                </a>
                </div>
            </div>
            </div>

            {/* Schedule Meeting Section remains the same */}
            <div className="max-w-md mx-auto text-center border-t border-gray-800 pt-16">
            <div className="space-y-6">
                <h3 className="text-xl text-pink-400 flex items-center gap-2 justify-center">
                <Mail size={20} />
                Schedule a Meeting
                </h3>
                <p className="text-gray-300">Book a slot for a quick chat or discussion</p>
                <a 
                href="https://calendly.com/trinadh08/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-pink-400 border border-pink-400/30 rounded-lg hover:bg-pink-400/10 transition-all duration-300"
                >
                Book a Slot
                </a>
            </div>
            </div>
        </div>
        </section>

      {/* Download CV Section */}
      <section className="py-12 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4"></h2>
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