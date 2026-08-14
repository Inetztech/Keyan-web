import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Clock, ArrowUpRight, ChevronDown, CheckCircle2, 
  Code2, Sparkles, Layers, Cpu, ShieldCheck, Terminal
} from 'lucide-react';

/* ---------------------------------------------------------------------- */
/*  DUOTONE IMAGE TILE (Shared Dependency)                               */
/* ---------------------------------------------------------------------- */
const DuotoneTile = ({ src, alt, accentHex, position = 'center', className = '', overlay = true }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover" style={{ objectPosition: position }} />
    {overlay && (
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{ background: `linear-gradient(160deg, ${accentHex}66 0%, #0F172A99 100%)` }}
      />
    )}
    <div className="absolute inset-0 bg-[#0F172A]/10" />
  </div>
);

/* ---------------------------------------------------------------------- */
/*  ANIMATION CONFIGURATIONS                                              */
/* ---------------------------------------------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = (gap = 0.12, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

/* ---------------------------------------------------------------------- */
/*  DETAILED DATA ENHANCEMENTS                                           */
/* ---------------------------------------------------------------------- */
const ROLE_DETAILS = {
  0: {
    tagline: "Architect and scale mission-critical high-throughput microservices across multicloud clusters.",
    overview: "You will join our core infrastructure unit responsible for processing millions of daily transactions. You'll own database schemas, latency optimization, high-availability deployments, and distributed systems architecture.",
    stack: ["Go / Python", "PostgreSQL", "Kafka", "Kubernetes", "Redis", "gRPC", "Terraform"],
    responsibilities: [
      "Design, build, and maintain low-latency, high-availability backend microservices.",
      "Lead architectural reviews and ensure service reliability with strict SLA/SLO metrics.",
      "Optimize complex SQL queries, caching layers, and database migrations for scale.",
      "Mentor mid-level engineers through detailed code reviews and system design pairing sessions."
    ],
    requirements: [
      "5+ years of experience building distributed backend systems in Go, Rust, or Python.",
      "Deep expertise in relational databases (PostgreSQL/MySQL) and message brokers (Kafka/RabbitMQ).",
      "Hands-on operational experience with Docker, Kubernetes, and cloud provider APIs (AWS/GCP).",
      "Strong understanding of CI/CD pipelines, observability tools (Datadog/Prometheus), and distributed tracing."
    ],
    perks: ["Dedicated hardware/LFX workspace budget", "Annual tech conference travel pass", "Flexible core working hours"]
  },
  1: {
    tagline: "Engine state-of-the-art predictive ML pipelines and deploy LLM/Generative workflows directly into production.",
    overview: "We're expanding our AI research-to-production pipeline. You will fine-tune open-weights models, design real-time inference endpoints, and build intelligent automation features used directly by real customers every day.",
    stack: ["PyTorch", "Python", "Ray / vLLM", "HuggingFace", "FastAPI", "Pinecone / Qdrant", "MLflow"],
    responsibilities: [
      "Fine-tune, evaluate, and optimize open-weight LLMs and domain-specific ML models.",
      "Build real-time vector indexing and retrieval-augmented generation (RAG) pipelines.",
      "Deploy low-latency model inference servers backed by GPU orchestration clusters.",
      "Collaborate with product teams to translate ambiguous requirements into trainable ML tasks."
    ],
    requirements: [
      "3+ years shipping production ML systems with a strong focus on NLP or Deep Learning.",
      "Proficiency with PyTorch, CUDA acceleration, and LLM optimization frameworks.",
      "Solid software engineering fundamentals: REST/gRPC APIs, clean code practices, and unit testing.",
      "Familiarity with vector databases, embeddings, and prompt orchestration frameworks."
    ],
    perks: ["Dedicated cloud GPU cluster allocation", "Publication / open-source grant support", "Custom research budget"]
  },
  2: {
    tagline: "Craft pixel-perfect, highly reactive frontends with modern state management and micro-frontend patterns.",
    overview: "You will own the client-side design system and core user experiences. We value interface polish, zero cumulative layout shifts, sub-second initial page loads, and intuitive data visualizations.",
    stack: ["TypeScript", "React / Next.js 14", "Tailwind CSS", "Framer Motion", "Zustand / TanStack", "GraphQL"],
    responsibilities: [
      "Develop responsive, accessible, and high-performance Web applications in Next.js.",
      "Maintain and evolve our central UI Design System using Tailwind CSS and Radix Primitives.",
      "Implement smooth 60fps micro-interactions and complex dynamic data visualization dashboards.",
      "Collaborate closely with UI/UX designers to translate Figma comps into scalable React code."
    ],
    requirements: [
      "4+ years building complex web apps using React, Next.js, and TypeScript.",
      "Mastery over CSS/Tailwind, web performance optimization, and Core Web Vitals.",
      "Deep understanding of browser mechanics, DOM rendering performance, and client caching.",
      "Experience writing testable client code using Vitest, Playwright, or Cypress."
    ],
    perks: ["Premium monitor + desk ergonomic stipend", "Hybrid flexible work arrangements", "Bi-annual team retreats"]
  },
  3: {
    tagline: "Automate infrastructure deployment, harden zero-trust security postures, and build effortless CI/CD pipelines.",
    overview: "As a DevOps / Platform Engineer, you'll eliminate deployment friction for 30+ engineers while managing our cloud infrastructure across multiple Kubernetes nodes with strict security and zero downtime.",
    stack: ["Terraform / OpenTofu", "Kubernetes / Helm", "AWS / GCP", "GitHub Actions", "Argocd", "Datadog"],
    responsibilities: [
      "Manage Infrastructure as Code (IaC) across AWS/GCP using Terraform/OpenTofu.",
      "Maintain container orchestration clusters and automated GitOps deployment pipelines.",
      "Drive incident response post-mortems and enforce zero-trust security policies across IAM.",
      "Build internal developer tooling to shorten local setup and staging preview times."
    ],
    requirements: [
      "4+ years operating cloud infrastructure at scale with Kubernetes and Terraform.",
      "Expert knowledge of networking, VPCs, DNS, TLS certificates, and edge security.",
      "Strong scripting ability in Python, Go, or Bash for CLI tool development.",
      "Proven track record managing zero-downtime database upgrades and failover systems."
    ],
    perks: ["Contract to full-time fast-track pathway", "On-call rotation compensation bonus", "Home lab stipend"]
  }
};

/* ---------------------------------------------------------------------- */
/*  MAIN COMPONENT                                                        */
/* ---------------------------------------------------------------------- */
const OpenRoles = ({ openRoles, accents, images }) => {
  const [expandedIdx, setExpandedIdx] = useState(null);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'responsibilities' | 'requirements' | 'stack'

  // Standardize dataset fallback if props are missing
  const rolesList = openRoles && openRoles.length > 0 ? openRoles : [
    { title: 'Senior Backend Engineer', dept: 'Platform / Infrastructure', location: 'Remote (India, EU overlap)', type: 'Full-time', accent: 0 },
    { title: 'Machine Learning Engineer', dept: 'Applied Intelligence', location: 'Remote', type: 'Full-time', accent: 1 },
    { title: 'Frontend Engineer — React / Next.js', dept: 'Product Engineering', location: 'Hybrid (Bengaluru)', type: 'Full-time', accent: 2 },
    { title: 'DevOps / Platform Engineer', dept: 'Platform / Infrastructure', location: 'Remote', type: 'Contract → Full-time', accent: 0 },
  ];

  const defaultAccents = [
    { hex: '#2563EB', iconBg: 'bg-[#EFF4FF]', tagText: 'text-[#2563EB]' },
    { hex: '#6D5DD3', iconBg: 'bg-[#F2F0FB]', tagText: 'text-[#6D5DD3]' },
    { hex: '#0F9D8C', iconBg: 'bg-[#EBF8F6]', tagText: 'text-[#0F9D8C]' },
  ];

  const themeAccents = accents || defaultAccents;

  const toggleAccordion = (idx) => {
    if (expandedIdx === idx) {
      setExpandedIdx(null);
    } else {
      setExpandedIdx(idx);
      setActiveTab('overview'); // Reset inner tab when switching roles
    }
  };

  return (
    <section id="open-roles" className="relative min-h-screen flex items-center py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="w-full mb-12 lg:mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] uppercase tracking-widest font-body">
              <Sparkles className="w-3.5 h-3.5" />
              <span>We Are Hiring</span>
            </div>
            <h2 className="font-body text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A]">
              Current openings across the team.
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Explore open positions across our engineering units. Select a role to review architectural scope, required stack skills, and team expectations.
            </p>
          </motion.div>
        </div>

        {/* Accordion List Container */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger(0.08)}
          className="max-w-5xl mx-auto space-y-5"
        >
          {rolesList.map((role, idx) => {
            const accent = themeAccents[role.accent % themeAccents.length];
            const isExpanded = expandedIdx === idx;
            const details = ROLE_DETAILS[idx] || ROLE_DETAILS[0];

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`border bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded 
                    ? 'border-[#CBD5E1] shadow-xl ring-1 ring-black/5' 
                    : 'border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#CBD5E1]'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none group transition-colors"
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                      <span className={`inline-block px-3 py-1 rounded-full ${accent.iconBg} ${accent.tagText} text-[11px] font-bold uppercase tracking-wider`}>
                        {role.dept}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                        {role.type}
                      </span>
                    </div>

                    <h3 className="font-body font-bold text-xl sm:text-2xl text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-200">
                      {role.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#64748B] line-clamp-1 mt-1 font-normal">
                      {details.tagline}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-3.5 text-xs text-[#475569]">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <MapPin className="w-4 h-4 text-slate-400" /> {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Clock className="w-4 h-4 text-slate-400" /> {role.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`shrink-0 p-3 rounded-full transition-all duration-200 ${
                    isExpanded ? 'bg-[#0F172A] text-white shadow-md' : 'bg-[#F1F5F9] text-[#475569] group-hover:bg-[#E2E8F0]'
                  }`}>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>

                {/* Accordion Detailed Content Container */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="border-t border-[#E2E8F0] bg-[#FAFBFD] p-6 sm:p-8">
                        
                        {/* Top Hero Preview Card within detail view */}
                        <div className="flex flex-col lg:flex-row gap-6 mb-8 items-stretch bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm">
                          {images && images.roles && images.roles[idx] ? (
                            <div className="relative w-full lg:w-72 h-44 lg:h-auto min-h-[160px] rounded-lg overflow-hidden shrink-0">
                              <DuotoneTile
                                src={images.roles[idx]}
                                alt={role.title}
                                accentHex={accent.hex}
                                position="center 35%"
                                className="w-full h-full"
                              />
                            </div>
                          ) : (
                            <div className="w-full lg:w-64 h-36 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-5 flex flex-col justify-between text-white shrink-0">
                              <Code2 className="w-8 h-8 text-blue-400" />
                              <div>
                                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Tech Stack</p>
                                <p className="text-sm font-semibold truncate">{details.stack.slice(0, 3).join(" • ")}</p>
                              </div>
                            </div>
                          )}

                          <div className="flex flex-col justify-between flex-1 gap-4">
                            <div>
                              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Role Summary</div>
                              <p className="text-sm text-[#334155] leading-relaxed font-body">
                                {details.overview}
                              </p>
                            </div>

                            {/* Tech Badges */}
                            <div>
                              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Primary Stack</div>
                              <div className="flex flex-wrap gap-1.5">
                                {details.stack.map((tech, tIdx) => (
                                  <span key={tIdx} className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Tab Navigation */}
                        <div className="flex border-b border-slate-200 mb-6 overflow-x-auto no-scrollbar">
                          {[
                            { id: 'overview', label: 'Responsibilities' },
                            { id: 'requirements', label: 'Requirements' },
                            { id: 'perks', label: 'Perks & Growth' },
                            { id: 'process', label: 'Hiring Process' },
                          ].map((tab) => (
                            <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={`py-2.5 px-4 text-xs font-bold font-body transition-colors whitespace-nowrap border-b-2 -mb-px ${
                                activeTab === tab.id
                                  ? `${accent.tagText} border-current`
                                  : 'text-slate-500 border-transparent hover:text-slate-800'
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>

                        {/* Tab Content Display */}
                        <div className="min-h-[160px] mb-8">
                          {activeTab === 'overview' && (
                            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Day-to-Day Responsibilities</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {details.responsibilities.map((item, rIdx) => (
                                  <div key={rIdx} className="flex gap-3 items-start p-3 bg-white rounded-lg border border-slate-200/60">
                                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${accent.tagText}`} />
                                    <p className="text-xs sm:text-sm text-slate-700 leading-normal">{item}</p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {activeTab === 'requirements' && (
                            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">What We Are Looking For</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {details.requirements.map((item, reqIdx) => (
                                  <div key={reqIdx} className="flex gap-3 items-start p-3 bg-white rounded-lg border border-slate-200/60">
                                    <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-slate-600" />
                                    <p className="text-xs sm:text-sm text-slate-700 leading-normal">{item}</p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {activeTab === 'perks' && (
                            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Role-Specific Perks & Equipment</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {details.perks.map((perk, pIdx) => (
                                  <div key={pIdx} className="p-4 bg-white rounded-lg border border-slate-200/60 text-center flex flex-col items-center justify-center">
                                    <Sparkles className={`w-5 h-5 mb-2 ${accent.tagText}`} />
                                    <p className="text-xs font-semibold text-slate-800">{perk}</p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}

                          {activeTab === 'process' && (
                            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">4-Step Transparent Evaluation</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
                                {[
                                  { step: '01', title: 'Intro Chat', time: '30 mins' },
                                  { step: '02', title: 'System Architecture', time: '60 mins' },
                                  { step: '03', title: 'Code Pairing', time: '90 mins' },
                                  { step: '04', title: 'Executive Offer', time: '24 hrs' },
                                ].map((stepItem, sIdx) => (
                                  <div key={sIdx} className="p-3 bg-white rounded-lg border border-slate-200/60 flex flex-col items-center justify-center">
                                    <span className="text-[10px] font-extrabold text-slate-400">{stepItem.step}</span>
                                    <span className="text-xs font-bold text-slate-800 mt-0.5">{stepItem.title}</span>
                                    <span className="text-[10px] text-slate-500">{stepItem.time}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </div>

                        {/* Action Bar Footer */}
                        <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                          <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
                            Have questions before applying? Email us at <a href="mailto:careers@keyan.dev" className="text-slate-800 underline font-semibold">careers@keyan.dev</a>
                          </div>

                          <Link
                            to={`/careers/apply?role=${encodeURIComponent(role.title)}`}
                            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body font-bold text-xs uppercase tracking-wider bg-[#0F172A] text-white px-7 py-3.5 rounded-lg hover:bg-blue-600 transition-colors shadow-md group`}
                          >
                            <span>Apply For {role.title.split('—')[0]}</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Link>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OpenRoles;