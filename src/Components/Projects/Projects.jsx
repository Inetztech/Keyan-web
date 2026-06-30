import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Asset Imports
import P1 from '../../aessts/Photos/A16.jpg'; // CRM Engine
import P2 from '../../aessts/Photos/A12.png'; // Hostel Hub
import P3 from '../../aessts/Photos/A8.jpg';  // Project Leads System
import P4 from '../../aessts/Photos/A8.jpg';  // INetz Platform
import P5 from '../../aessts/Photos/A5.jpg';  // AI Voice Core

const Projects = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased overflow-x-hidden selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Custom Global Animation Injections */}
      <style>{`
        @keyframes gradientXY {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradientXY 15s ease infinite;
        }
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px);
        }
        .bg-dot-pattern {
          background-size: 24px 24px;
          background-image: radial-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px);
        }
      `}</style>

      {/* =========================================================================
          1. ANIMATED MOVING GRADIENT HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[80vh] lg:h-[calc(100vh-5rem)] flex items-center bg-gradient-to-br from-white via-emerald-50/20 to-teal-50/30 animate-gradient-xy border-b border-slate-200 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Grid and Blurs */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-teal-400/10 rounded-full filter blur-[120px] animate-bounce duration-[10s]"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-slate-200/80 transition-transform hover:scale-105 duration-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">System Deployment Registry</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[0.95]">
                Architecting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-emerald-600 to-teal-600">
                  Production Engines
                </span>
              </h1>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                Engineering high-availability cloud platforms built around rigid enterprise operational logic, robust framework stacks, and custom AWS deployment profiles.
              </p>

              <div className="flex items-center gap-6 pt-6 border-t border-slate-200 max-w-sm">
                <div>
                  <p className="text-2xl font-black text-slate-900 tracking-tight">05</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Core Systems</p>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div>
                  <p className="text-2xl font-black text-slate-900 tracking-tight">AWS</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Target Core</p>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div>
                  <p className="text-2xl font-black text-slate-900 tracking-tight">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Custom Code</p>
                </div>
              </div>
            </div>

            {/* Right Side Tech Monitor Window */}
            <div className="lg:col-span-5 w-full hidden lg:block" data-aos="fade-left" data-aos-delay="150">
              <div className="bg-white/80 p-6 rounded-[2rem] border border-slate-200 relative overflow-hidden shadow-xl backdrop-blur-md transition-all duration-500 hover:shadow-2xl hover:border-slate-300">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase">Cloud Provisioning Hub</span>
                </div>
                
                <div className="space-y-3 font-mono text-xs text-slate-600">
                  <div className="p-3 bg-slate-50/50 rounded-xl border border-slate-200/60 shadow-sm transition-transform hover:-translate-y-0.5 duration-300">
                    <p className="text-slate-400 text-[9px] uppercase font-bold tracking-wider">Infrastructure Targets</p>
                    <p className="text-slate-800 font-bold mt-0.5 text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> AWS Cloud Cluster Active
                    </p>
                  </div>
                  <div className="p-3 bg-slate-50/50 rounded-xl border border-slate-200/60 shadow-sm transition-transform hover:-translate-y-0.5 duration-300">
                    <p className="text-slate-400 text-[9px] uppercase font-bold tracking-wider">Runtime Compute Cores</p>
                    <p className="text-slate-800 font-bold mt-0.5 text-xs">Java Spring Boot & Node.js Engine</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE PROJECTS SHOWCASE (5 DISTINCT LIGHT ANIMATED SHOWCASES)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-32">

        {/* SHOWCASE UNIQUE 01: THE GRID MESH CONTAINER (CRM ENGINE) */}
        <div data-aos="fade-up" className="bg-grid-pattern relative bg-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-200 transition-all duration-500 hover:shadow-xl hover:border-emerald-200 group overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/30 rounded-full filter blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-slate-200 tracking-tighter group-hover:text-emerald-200 transition-colors duration-300">01</span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-md">Enterprise Layer</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                Distributed CRM Workflow & Pipeline Engine
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                An enterprise-grade workflow orchestration platform engineered to unify fragmented sales pipelines and record customer progression. Handles low-latency state synchronization seamlessly across business divisions.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Java", "Spring Boot", "AWS", "PostgreSQL"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono font-bold tracking-wide uppercase bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md transition-colors group-hover:bg-white group-hover:border-emerald-200">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a href="#" className="text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-all group-hover:translate-x-1">
                  <i className="fa-brands fa-github text-sm"></i> Architecture Source Code <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2 shadow-inner group-hover:border-emerald-300 transition-colors duration-500">
                <img src={P1} className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-sm transform group-hover:scale-[1.01] transition-transform duration-500" alt="CRM Monitor Layout" />
              </div>
            </div>
          </div>
        </div>

        {/* SHOWCASE UNIQUE 02: THE FLOATING AMORPHOUS SPLIT (SMART HOSTEL) */}
        <div data-aos="fade-up" className="relative bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-500 group overflow-hidden">
          {/* Animated floating color blob background */}
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-400/5 rounded-full filter blur-[70px] pointer-events-none group-hover:translate-x-10 transition-transform duration-1000"></div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-slate-200 tracking-tighter group-hover:text-blue-200 transition-colors duration-300">02</span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-md">Automation & FinTech</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors duration-300">
                Smart Hostel Resource & Ledger Orchestrator
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                A high-concurrency logistic registry built to process instant campus allocation modifications, maintain multi-tenant billing frameworks, and secure operational cloud microservices.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Java", "Spring Boot", "AWS", "Hibernate"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono font-bold uppercase bg-white border border-slate-200 text-slate-500 px-2.5 py-1 rounded-md transition-transform group-hover:scale-105">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a href="#" className="text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-all">
                  <i className="fa-solid fa-cloud-arrow-up text-xs"></i> AWS Live Instance Workspace
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 p-2 shadow-inner group-hover:border-blue-300 transition-colors duration-500">
                <img src={P2} className="w-full h-64 sm:h-80 object-cover rounded-xl transform group-hover:rotate-1 group-hover:scale-[1.01] transition-transform duration-500" alt="Hostel Portal Frame" />
              </div>
            </div>
          </div>
        </div>

        {/* SHOWCASE UNIQUE 03: THE DOT MATRIX HUD MATRIX (PROJECT LEADS) */}
        <div data-aos="fade-up" className="bg-dot-pattern relative bg-white rounded-[3rem] border border-slate-200 p-8 sm:p-12 overflow-hidden shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-500 group">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-400/[0.03] rounded-full filter blur-[100px] pointer-events-none"></div>
          
          <div className="border-b border-slate-100 pb-6 mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-black text-slate-200 tracking-tighter group-hover:text-violet-200 transition-colors duration-300">03</span>
              <span className="text-[10px] font-bold uppercase tracking-widest bg-violet-50 border border-violet-100 text-violet-700 px-3 py-1 rounded-md">Operations Core</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping"></span> Live Metrics Node Track
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight group-hover:text-violet-600 transition-colors duration-300">
                Project Leads Resource Management System
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                A multi-tenant internal orchestration pipeline built to measure cross-functional delivery vectors, track task lifecycles, and generate structural metrics safely across active developer pods.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["React.js", "Node.js", "Express", "Prisma ORM", "PostgreSQL"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4">
                <a href="#" className="text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 transition-all">
                  <i className="fa-brands fa-github text-sm"></i> Inspect Infrastructure Architecture
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 w-full">
              <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2 shadow-sm group-hover:border-violet-300 transition-colors duration-500">
                <img src={P3} className="w-full h-48 sm:h-64 object-cover rounded-xl transform group-hover:scale-[1.005] transition-transform duration-500" alt="Management Console Grid" />
              </div>
            </div>
          </div>
        </div>

        {/* SHOWCASE UNIQUE 04: THE CONTEMPORARY SOFT-GLOW FRAME (INETZ PORTAL) */}
        <div data-aos="fade-up" className="relative bg-gradient-to-b from-slate-50/80 to-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-200 hover:shadow-xl hover:border-amber-200 transition-all duration-500 group overflow-hidden">
          <div className="absolute top-1/2 -right-10 w-72 h-72 bg-amber-400/5 rounded-full filter blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-500"></div>

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-slate-200 tracking-tighter group-hover:text-amber-200 transition-colors duration-300">04</span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-50 border border-amber-100 text-amber-800 px-3 py-1 rounded-md">Cloud Web Platform</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-amber-600 transition-colors duration-300">
                INetz Academic Enrollment & Internship Portal
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                An image-centric dynamic interface built to trace roadmap progress. Integrates custom content syllabus delivery paths and clean programmatic cloud asset storage clusters.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["React.js", "Node.js", "MongoDB", "AWS", "Mongoose"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono font-bold tracking-wide uppercase bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-200">
                <a href="#" className="text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-all">
                  <i className="fa-brands fa-github text-sm"></i> Full Platform Repository
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 p-2 shadow-sm group-hover:border-amber-300 transition-colors duration-500">
                <img src={P4} className="w-full h-64 sm:h-80 object-cover rounded-xl transform group-hover:scale-[1.01] transition-transform duration-500" alt="Academic Workspace Portal" />
              </div>
            </div>
          </div>
        </div>

        {/* SHOWCASE UNIQUE 05: THE GLASS INTEGRATED NEURAL CORE (AI VOICE BRIDGE) */}
        <div data-aos="fade-up" className="bg-grid-pattern relative bg-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-200 hover:shadow-xl hover:border-cyan-200 transition-all duration-500 group overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/5 rounded-full filter blur-[90px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-slate-200 tracking-tighter group-hover:text-cyan-200 transition-colors duration-300">05</span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-cyan-50 border border-cyan-100 text-cyan-700 px-3 py-1 rounded-md">Neural Core Tier</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-cyan-600 transition-colors duration-300">
                Predictive AI Voice Interface & Database Bridge
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                A real-time linguistic proxy designed to isolate audio processing commands and feed safe structural mutations directly to running cloud database layers.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Python", "FastAPI Core", "Whisper Core", "NLP Tensors", "AWS S3"].map((tag) => (
                  <span key={tag} className="text-[10px] font-mono font-bold tracking-wide uppercase bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a href="#" className="text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 transition-all">
                  <i className="fa-solid fa-terminal text-xs"></i> View Sandbox Core Metrics
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2 shadow-sm group-hover:border-cyan-300 transition-colors duration-500">
                <img src={P5} className="w-full h-64 sm:h-80 object-cover rounded-xl transform group-hover:scale-[1.005] transition-transform duration-500" alt="AI Neural Monitor Console" />
                {/* Floating animated dashboard window */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl p-4 font-mono text-[9px] text-slate-600 shadow-xl hidden sm:block transform group-hover:-translate-y-1 transition-transform duration-500">
                  <p className="text-cyan-600 font-bold">&gt; system.neural_bridge.initialize()</p>
                  <p className="text-slate-400 mt-0.5">Stream target: aws_isolated_cluster_2026</p>
                  <p className="text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1 h-1 bg-emerald-500 rounded-full animate-ping"></span> Status: 200 OK (Verified Execution)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          3. CALL TO ACTION SECTION
          ========================================================================= */}
      <section className="relative z-40 bg-white py-24 text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Initiate System Discovery
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto font-medium">
            Bring your technical infrastructure and application requirements forward. Let's arrange design sprints and deploy highly reliable architectural nodes.
          </p>
          <div className="pt-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-slate-900 hover:bg-emerald-600 transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-slate-900/10"
            >
              Start Discovery Phase <i className="fa-solid fa-arrow-right text-xs ml-2.5"></i>
            </Link>
          </div>
        </div>
      </section>
      
      {/* =========================================================================
          4. FOOTER
          ========================================================================= */}
      <footer className="py-8 bg-white border-t border-slate-200 text-center relative z-40">
        <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase block">
          &copy; 2026 Keyan. All Architecture Integrity Certified.
        </span>
      </footer>

    </div>
  );
};

export default Projects;