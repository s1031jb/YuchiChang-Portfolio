import React, { useState, useEffect } from 'react';
// ★ 保持正確的圖示設定
import { Phone, Mail, Linkedin, ArrowRight, ChevronRight, ExternalLink, MousePointer2, Layers, Layout, PenTool, ShoppingBag, MonitorSmartphone, Gauge, Command, MousePointerClick, Radio, Cpu, Home, FileText, Laptop, Briefcase, Luggage, Zap } from 'lucide-react';
import profileImage from './assets/yuchi-ecosystem.png';
// ------------------------------------------------------------------
// ★ 圖片設定 (重要) ★
// ------------------------------------------------------------------

// [步驟 A - 本地開發/GitHub 部署用]：
// 請在您的電腦上把下面這行「取消註解」 (刪除前面的 //)，這樣打包時才會正確引入圖片
// import profileImage from './assets/yuchi.png';

// [步驟 B - 線上預覽用]：
// 為了讓您現在能在這裡看到畫面，我暫時使用網址。
// 在您的電腦上，當您啟用上面的 import 後，這行可以註解掉或忽略。
// const profileImage = "https://github.com/user-attachments/assets/21163382-6a81-414d-b111-080b9259988f";

// ------------------------------------------------------------------
// ★ 影片路徑智慧設定 (Public 資料夾) ★
// ------------------------------------------------------------------
const isGitHubPages = window.location.hostname.includes('github.io');
const repoBaseUrl = isGitHubPages ? '/YuchiChang-Portfolio/' : '/';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab, selectedProject]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const personalInfo = {
    name: "Yuchi Chang",
    title: "Designing the future of multi-device interaction.",
    bio: "I design clear, efficient interactions for keyboards, mice, hubs, styluses, headsets, and cameras, as well as cross-screen workflows, crafting hardware-aware software experiences that feel seamless and dependable.",
    phone: "+886 958 644 522",
    email: "s1031jb@gmail.com",
    linkedin: "linkedin.com/in/yuchi-chang-762440150/", 
    image: profileImage 
  };

  const projects = [
    {
      id: 1,
      title: "Seamless Multi-Device Flow",
      category: "Cross-Device Interaction",
      tagline: "Enabling Effortless Workflows Across Multiple Devices",
      icon: (
        <div className="flex items-center justify-center gap-1">
          <Laptop className="w-5 h-5" />
          <Laptop className="w-5 h-5" />
        </div>
      ),
      description: "Architected a seamless input-sharing ecosystem enabling unified control across multiple computers. The focus was on making complex background operations (pairing, clipboard sync) invisible, allowing users to maintain an uninterrupted flow state.",
      details: "• Spatial Interaction Model: Defined cursor logic and focus transitions for predictable navigation across mixed OS environments (Windows/macOS).\n• Performance Perception: Designed visual feedback mechanisms to mask network latency and instill confidence during file transfers.\n• Intuitive Configuration: Created a spatial drag-and-drop interface for aligning virtual screens to match physical desk layouts.\n• Technical Alignment: Collaborated with engineering to optimize edge-detection algorithms, ensuring effortless yet accurate cursor crossover.",
      role: "Product Manager\nProduct Designer",
      tools: ["Figma", "XMind", "Jira"],
      video: "Cross_Devices.mp4"
    },
    {
      id: 2,
      title: "Hub Dashboard Experience",
      category: "Peripheral Software",
      tagline: "Simplifying Power & Device Monitoring",
      icon: <Zap className="w-6 h-6" />,
      description: "Defined the interaction model for a next-gen smart connectivity ecosystem. Transformed complex hardware behaviors (power negotiation, bandwidth) into a transparent, anxiety-free user experience.",
      details: "• System Visibility: Translated technical port-level data into intuitive visual cues for status and power flow verification at a glance.\n• Intelligent Logic: Conceptualized \"Smart Priority\" logic to automate resource allocation, ensuring performance for critical devices.\n• Scalability: Built a modular UI framework adaptable to various hub configurations for cross-product consistency.\n• Engineering Alignment: Bridged firmware constraints and UX goals to deliver accurate, real-time feedback mechanisms.",
      role: "Product Manager\nProduct Designer",
      tools: ["Figma", "XMind", "Jira"],
      video: "Hub_Dashboard.mp4"
    },
    {
      id: 3,
      title: "Visual Shortcut Wheel",
      category: "Interaction Design",
      tagline: "Smarter Shortcuts, Simpler Workflow.",
      icon: <Command className="w-6 h-6" />,
      description: "Designed an on-demand HUD to solve \"Button Amnesia\" for complex peripherals. By visualizing hardware bindings instantly, the system empowers users to access macros confidently without memorization or workflow interruption.",
      details: "• Cognitive Offloading: Acts as an external memory aid, allowing users to verify and trigger commands visually to reduce learning curves.\n• Context-Aware Customization: Enables users to map app-specific commands, creating a personalized toolset that adapts to the current context.\n• Progressive Disclosure: Ensures the overlay appears only when triggered and vanishes post-selection, keeping the screen clutter-free.\n• System Scalability: Supports infinite nested layers, expanding command capacity beyond the physical limits of hardware buttons.",
      role: "Product Planner\nProduct Designer",
      tools: ["Figma", "XMind", "Jira"],
      video: "Shortcut_Wheel.mp4"
    },
    {
      id: 4,
      title: "Pointer Effects Suite",
      category: "Interaction Design",
      tagline: "Enhancing Visual Communication for Presenters",
      icon: <MousePointerClick className="w-6 h-6" />,
      description: "Architected a system-level cursor layer to bridge the \"remote disconnect\" in digital presentations. By offering a versatile suite of pointer modes, the system empowers presenters to guide attention intuitively and restore non-verbal communication.",
      details: "• Granular Personalization: Designed a configuration engine for customizing attributes (color, scale), supporting corporate branding and accessibility needs.\n• Attention Economics: Defined motion physics and visual hierarchy to guide viewer focus organically without distraction.\n• System Architecture: Established robust overlay rules for seamless interaction across full-screen apps and multi-monitor setups.\n• Performance Optimization: Collaborated with engineering to ensure zero-latency tracking and smooth rendering on high-refresh displays.",
      role: "Product Manager\nProduct Designer",
      tools: ["Figma", "XMind", "Jira"],
      video: "Pointer_Effects.mp4"
    },
    {
      id: 9,
      title: "Dongle Pairing Optimization",
      category: "Peripheral Software",
      tagline: "Seamless Device Migration Across Dongles",
      icon: <Radio className="w-6 h-6" />,
      description: "Streamlined the dongle pairing workflow to eliminate \"connection anxiety.\" Enabled users to effortlessly merge devices across receivers, reducing redundancy and creating a unified hardware ecosystem.",
      details: "• Seamless Migration: Architected a \"Merge Logic\" allowing users to transfer devices between receivers without tedious re-pairing.\n• Hardware Transparency: Visualized real-time states to bridge the gap between firmware latency and user expectation.\n• Resilient Error Handling: Defined clear recovery paths to transform technical connection failures into actionable guidance.\n• Scalable Framework: Established a modular pairing pattern adaptable to future device types and legacy protocols.",
      role: "Product Manager\nProduct Designer",
      tools: ["Figma", "XMind", "Jira"],
      video: "Merge_Dongle.mp4"
    },
    {
      id: 5,
      title: "Gaming PC Customization",
      category: "Web Design",
      tagline: "Optimizing the Component Selection and Build Experience",
      icon: <Cpu className="w-6 h-6" />,
      description: "Architected an immersive PC configuration engine to demystify complex hardware compatibility. Transformed a technical selection process into a visual-first building experience, driving user confidence and higher conversion rates.",
      details: "• Cognitive Flow: Streamlined component selection via progressive disclosure and smart grouping, reducing decision fatigue for non-technical users.\n• Real-Time Visualization: Designed a dynamic preview system providing instant aesthetic and functional feedback during the build.\n• Proactive Compatibility: Engineered an intelligent validation logic that guides users away from hardware conflicts without friction.\n• Scalable Design System: Established a modular UI framework to support rapid inventory scaling and cross-platform consistency.",
      role: "UI/UX Designer",
      tools: ["Adobe XD", "Illustrator", "Photoshop"],
      video: "Gaming_PC_Configurator.mp4",
      link: "https://www.ibuypower.com/store/intel-starter-gaming-pc-daily-deal"
    },
    {
      id: 6,
      title: "Real Estate Agent Website",
      category: "Full-stack Development",
      tagline: "Property Discovery & Lead Generation Web Design",
      icon: <Home className="w-6 h-6" />,
      description: "Architected a high-converting property discovery platform. Merged premium branding with strategic lead capture flows to drive measurable business growth for an independent agent.",
      details: "• Conversion-Driven UX: Optimized listing layouts and search flows to reduce friction and maximize client inquiries.\n• End-to-End Execution: Led the full product lifecycle from UI design to full-stack implementation (PHP/JS), ensuring pixel-perfect delivery.\n• Data Integration: Engineered robust search logic and filtering systems to handle complex property datasets intuitively.\n• Business Alignment: Translated commercial objectives into a digital strategy that balanced brand equity with lead generation.",
      role: "Full-stack Developer\nUI/UX Designer",
      tools: ["Adobe XD", "HTML", "CSS", "JavaScript", "PHP"],
      video: "RealEstate_Website.mp4",
      link: "http://220.128.133.15/s1080408/project/index.php"
    },
    {
      id: 7,
      title: "PDF24 Desktop App",
      category: "App Design",
      tagline: "Utility App UI/UX Redesign",
      icon: <FileText className="w-6 h-6" />,
      description: "Modernized a legacy desktop utility to boost user productivity. Transformed a feature-dense legacy interface into a streamlined workspace, reducing cognitive load while preserving power-user efficiency.",
      details: "• Workflow Velocity: Optimized core flows (Create/Edit) to minimize click-depth and accelerate task completion.\n• Information Architecture: Restructured scattered tools into intuitive functional clusters, significantly improving feature discoverability.\n• Visual System: Established a modern, distraction-free design language aligned with current OS standards (Windows/macOS).\n• Interaction Ergonomics: Refined controls and feedback loops to enhance usability and reduce error rates.",
      role: "UI/UX Designer",
      tools: ["Adobe XD", "Illustrator", "Photoshop"],
      video: "PDF24_UI.mp4"
    },
    {
      id: 8,
      title: "Luggage Showcase Website",
      category: "Web Design",
      tagline: "A simple, intuitive luggage viewing experience.",
      icon: <Luggage className="w-6 h-6" />,
      description: "Architected a premium digital storefront to simplify complex product selection. Transformed static specifications into an interactive discovery experience, reducing choice paralysis by helping users visualize trade-offs between different models.",
      details: "• Decision Support: Designed a side-by-side comparison framework to visualize technical differences (size, material) effectively.\n• Modular Design System: Built a reusable component library to ensure scalability and consistency for future product launches.\n• Information Architecture: Optimized the browsing taxonomy and filtering logic to streamline the path to product discovery.\n• Brand Translation: Aligned visual storytelling with business goals to elevate perceived product value and drive engagement.",
      role: "UI/UX Designer",
      tools: ["Adobe XD", "Illustrator", "Photoshop", "Shopify"],
      video: "Luggage_Website.mp4",
      link: "https://oumos.com/en/collections/musee"
    }
  ];

  const experience = [
    {
      period: "2024 - Present",
      role: "Software Product Manager/Product Designer",
      company: "HP Inc.",
      desc: "Orchestrated UX strategy for HP Accessories Center, MyHP, and Poly Lens. Defined unified interaction models across mice, keyboards, hubs, styluses, headsets, and cameras to ensure a cohesive ecosystem experience."
    },
    {
      period: "2020 - 2023",
      role: "UI/UX Designer",
      company: "iBUYPOWER inc.",
      desc: "Improved the shopping and product customization experience for gaming PCs and accessories. Created wireframes, user flows, and UI components, collaborating with developers and marketing teams."
    }
  ];

  const education = [
    {
      period: "2016 - 2018",
      school: "National Chung Hsing University",
      degree: "Master’s Degree, Technology Management"
    },
    {
      period: "2012 - 2016",
      school: "National Dong Hwa University",
      degree: "Bachelor's Degree, Tourism, Recreation & Leisure Studies"
    }
  ];

  // -- Components --

  const Navigation = () => (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => {setActiveTab('home'); setSelectedProject(null);}} 
          className="text-xl font-bold tracking-tight cursor-pointer text-gray-800 hover:text-blue-600 transition-colors"
        >
          Yuchi Chang
        </div>
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSelectedProject(null);
                window.scrollTo(0,0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 
                ${activeTab === item.id 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="md:hidden flex space-x-4 text-sm">
           <button onClick={() => setActiveTab('projects')} className="text-gray-600">Projects</button>
           <button onClick={() => setActiveTab('contact')} className="text-gray-600">Contact</button>
        </div>
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-auto z-20 relative bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-gray-900 text-lg">Yuchi Chang</h3>
          <p className="text-gray-500 text-sm mt-1">Software Product Manager</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
            <Phone size={16} /> {personalInfo.phone}
          </a>
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
            <Mail size={16} /> {personalInfo.email}
          </a>
          <a href="https://www.linkedin.com/in/yuchi-chang-762440150/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );

  const HomeSection = () => (
    <div className="min-h-screen flex flex-col pt-24"> 
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 flex-grow items-end">
        <div className="order-2 md:order-1 space-y-8 animate-fade-in-up self-center pb-24">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Designing <span className="text-[#1A73E8]">intuitive</span> device <span className="text-[#1A73E8]">experiences</span>.
            </h1>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            {personalInfo.bio}
          </p>
          <div className="flex gap-4 pt-4">
            <button 
              onClick={() => setActiveTab('projects')}
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:shadow-lg flex items-center gap-2 group"
            >
              View Projects 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2 relative w-full flex items-end justify-center z-10 h-[600px] md:h-[750px] -mb-px">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="relative w-full h-full overflow-hidden rounded-t-[3rem] rounded-b-none shadow-none">
             <div className="w-full h-full relative bg-gray-50">
                <img 
                  src={personalInfo.image} 
                  alt="Yuchi Chang" 
                  className="w-full h-full object-cover object-top block"
                  style={{ opacity: 1 }}
                  onError={(e) => {
                    console.error("Image load failed:", e);
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `<div class="flex flex-col items-center justify-center h-full text-gray-400 bg-gray-100 border-2 border-dashed p-4 text-center text-sm">Image Load Error</div>`;
                  }}
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ResumeSection = () => (
    <div className="max-w-4xl mx-auto px-6 py-32 animate-fade-in">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
      </div>

      <div className="space-y-16">
        {/* Experience */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-gray-200 rounded-full block"></span>
            Work Experience
          </h3>
          <div className="space-y-10 border-l-2 border-gray-100 pl-8 ml-1">
            {experience.map((job, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[39px] top-1 w-5 h-5 bg-white border-4 border-blue-500 rounded-full"></div>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                  <h4 className="text-xl font-bold text-gray-900">{job.role}</h4>
                  <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{job.period}</span>
                </div>
                <div className="text-lg text-gray-700 font-medium mb-2">{job.company}</div>
                <p className="text-gray-600 leading-relaxed">{job.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-3">
             <span className="w-2 h-8 bg-gray-200 rounded-full block"></span>
             Education
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-400 mb-1">{edu.period}</div>
                <h4 className="text-lg font-bold text-gray-900">{edu.school}</h4>
                <p className="text-blue-600">{edu.degree}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-3">
             <span className="w-2 h-8 bg-gray-200 rounded-full block"></span>
             Skills & Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Hardware-Software Interaction", "Complex App Architecture", "Multi-Device Ecosystems", 
              "User Flows", "Product Specifications", "Figma & Prototyping", 
              "User Research", "Software Strategy", "Design Systems", "Desktop App Design", "User Journey Map"
            ].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  const ProjectsSection = () => (
    <div className="max-w-6xl mx-auto px-6 py-32 animate-fade-in">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Selected Projects</h2>
        <p className="text-gray-500 max-w-3xl text-lg">
          A collection of work focused on hardware-software integration and ecosystem design.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            onClick={() => {setSelectedProject(project); window.scrollTo(0,0);}}
            className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[320px]"
          >
            <div>
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <div className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">{project.category}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 line-clamp-3 leading-relaxed">
                {project.tagline}
              </p>
            </div>
            <div className="flex items-center text-blue-600 font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
              View Case Study <ArrowRight size={16} className="ml-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectDetail = ({ project }) => (
    <div className="max-w-4xl mx-auto px-6 py-32 animate-fade-in">
      <button 
        onClick={() => setSelectedProject(null)}
        className="mb-8 flex items-center text-gray-500 hover:text-gray-900 transition-colors"
      >
        <ArrowRight className="rotate-180 mr-2" size={20} /> Back to Projects
      </button>

      <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-lg">
        <div className="flex items-center gap-3 text-blue-600 mb-4 font-medium">
          {project.icon}
          <span>{project.category}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
        <p className="text-xl text-gray-500 mb-12 leading-relaxed">{project.tagline}</p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Overview</h3>
              <div className="text-gray-600 leading-relaxed">
                {project.description ? project.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-3 last:mb-0">
                    {paragraph}
                  </p>
                )) : "No description available."}
              </div>
            </section>
            
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {project.title === "Gaming PC Customization" ? "Key Improvements" : "Key Details"}
              </h3>
              <div className="text-gray-600 leading-relaxed">
                {/* ★ 更新：如果 details 包含 \n (換行) 或 • (bullet)，則分段顯示 */}
                {project.details ? project.details.split('\n').map((paragraph, index) => {
                   // 判斷是否為空行，避免多餘空白
                   if (!paragraph.trim()) return null; 
                   
                   // 檢查是否有冒號，若有則將冒號前文字加粗
                   const content = paragraph.trim().replace(/^•\s*/, '');
                   const parts = content.split(':');
                   
                   return (
                    <p key={index} className="mb-2 last:mb-0 flex">
                      {paragraph.trim().startsWith('•') && <span className="mr-2">•</span>}
                      <span>
                        {parts.length > 1 ? (
                          <>
                            <strong className="font-bold text-gray-900">{parts[0]}:</strong>
                            {parts.slice(1).join(':')}
                          </>
                        ) : content}
                      </span>
                    </p>
                   );
                }) : "No details available."}
              </div>
            </section>
            
            {/* 影片播放區域 */}
            {project.video ? (
              <div className="w-full rounded-2xl mt-8 overflow-hidden shadow-md border border-gray-100 bg-black">
                <video 
                  key={project.video}
                  className="w-full h-auto aspect-video block"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  {/* 使用 repoBaseUrl，自動加上正確的前綴 */}
                  <source src={`${repoBaseUrl}${project.video}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="text-xs text-gray-500 p-2 text-center bg-gray-50 border-t break-all">
                  Video source: {`${repoBaseUrl}${project.video}`}
                </div>
              </div>
            ) : (
              <div className="w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 mt-8 border-2 border-dashed border-gray-200">
                [Visual assets / Video Demo Placeholder]
              </div>
            )}
          </div>
          
          <div className="md:col-span-1 space-y-6">
             <div className="bg-gray-50 p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-4">Role</h4>
                {/* Role 使用 whitespace-pre-line 確保換行顯示 */}
                <p className="text-gray-600 text-sm mb-6 whitespace-pre-line">
                  {project.role || "Lead Designer, Prototyping"}
                </p>
                
                <h4 className="font-bold text-gray-900 mb-4">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {(project.tools || ["Figma", "Protopie", "React"]).map((tool, index) => (
                    <span key={index} className="text-xs bg-white px-2 py-1 rounded border text-gray-600">{tool}</span>
                  ))}
                </div>
                
                {/* 專案連結 (只在有 link 屬性時顯示) */}
                {project.link && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      View Live Project <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactSection = () => (
    <div className="max-w-2xl mx-auto px-6 py-32 flex flex-col items-center text-center animate-fade-in">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's connect.</h2>
      <p className="text-gray-600 text-lg mb-12">
        Currently exploring new opportunities to define the next generation of interaction.
      </p>
      
      <div className="space-y-4 w-full max-w-md">
        <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-3 w-full p-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors">
          <Mail size={20} /> {personalInfo.email}
        </a>
        <a href={`tel:${personalInfo.phone}`} className="flex items-center justify-center gap-3 w-full p-4 bg-white border border-gray-200 text-gray-900 rounded-xl font-medium hover:border-blue-300 hover:text-blue-600 transition-colors">
          <Phone size={20} /> {personalInfo.phone}
        </a>
        <a href="https://www.linkedin.com/in/yuchi-chang-762440150/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full p-4 bg-blue-50 text-blue-700 rounded-xl font-medium hover:bg-blue-100 transition-colors">
          <Linkedin size={20} /> LinkedIn Profile <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {selectedProject ? (
          <ProjectDetail project={selectedProject} />
        ) : (
          <>
            {activeTab === 'home' && <HomeSection />}
            {activeTab === 'resume' && <ResumeSection />}
            {activeTab === 'projects' && <ProjectsSection />}
            {activeTab === 'contact' && <ContactSection />}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;