import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code2,
  Smartphone,
  Database,
  Cloud,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Lock,
  Activity,
  Server,
  Layers,
} from "lucide-react";

// Importing your image files
import E1 from "../../aessts/Photos/A16.jpg";
import E2 from "../../aessts/Photos/A17.jpg";

const SERVICES = [
  {
    id: "web-development",
    icon: Code2,
    title: "Custom Web Applications",
    tagline:
      "High-performance React & Next.js architectures built for massive scale.",
    description:
      "We engineer tailored full-stack web applications featuring fast page load speeds, high concurrency support, and seamless API integrations.",
    capabilities: [
      "Single Page Apps (SPA) & Server-Side Rendering (SSR)",
      "API Gateway & Microservices Architecture",
      "Progressive Web Apps (PWA) & Custom Portals",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Custom Web Application Development Code View",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    title: "Mobile App Engineering",
    tagline: "Native and cross-platform mobile apps for iOS and Android.",
    description:
      "Deliver fluid mobile experiences with offline sync, biometric security, low-latency API connections, and intuitive UI components.",
    capabilities: [
      "Cross-Platform Development (React Native / Flutter)",
      "Native iOS & Android Performance Optimization",
      "Biometric Security & Real-Time Push Notifications",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Mobile App UI Design and Development",
  },
  {
    id: "enterprise-crm",
    icon: Database,
    title: "Enterprise CRM Platforms",
    tagline: "Centralized customer pipelines fitted to your precise workflow.",
    description:
      "Eliminate per-user license fees. We build bespoke CRM tools to track leads, automate sales routing, and sync communication in real time.",
    capabilities: [
      "Custom Sales Lead & Pipeline Automation",
      "ERP & Payment Gateway Integrations",
      "Role-Based Access Control (RBAC) & Logging",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Enterprise CRM Analytics Dashboard",
  },
  {
    id: "cloud-infrastructure",
    icon: Cloud,
    title: "Cloud Systems & DevOps",
    tagline:
      "Resilient AWS deployments, Docker containers, and CI/CD automation.",
    description:
      "Deploy and scale on secure cloud infrastructure. We automate build pipelines, containerize backend microservices, and ensure 99.99% uptime.",
    capabilities: [
      "AWS Cloud Migration & Cost Optimization",
      "Docker Containerization & Kubernetes Clusters",
      "Automated Zero-Downtime CI/CD Pipelines",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Cloud Infrastructure & Servers",
  },
  {
    id: "data-analytics",
    icon: BarChart3,
    title: "Data Analytics & Intelligence",
    tagline: "Transform raw data into executive, real-time visual dashboards.",
    description:
      "Aggregate fragmented data streams into live visual dashboards, automated telemetry logs, and predictive business intelligence reports.",
    capabilities: [
      "Real-Time Executive BI Dashboards",
      "Automated ETL & Data Streaming Pipelines",
      "Custom Metric Modeling & Automated Reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Data Analytics and Intelligence Visuals",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Architecture",
    desc: "We analyze your technical needs, map data flows, and design a scalable blueprint before writing line one.",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "02",
    title: "Agile Development",
    desc: "Iterative sprint cycles with transparent progress demos, staging environments, and rapid code reviews.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "03",
    title: "Quality & Security Audit",
    desc: "Rigorous automated testing, end-to-end payload validation, and vulnerability scanning prior to release.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "04",
    title: "Deployment & Scaling",
    desc: "Production release accompanied by automated monitoring, telemetry tracking, and continuous SLA support.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
];

const Expertise = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-20 font-sans selection:bg-blue-500/20 selection:text-blue-800 overflow-x-hidden">
      {/* SECTION 1 [LIGHT THEME]: Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 flex items-center border-b border-slate-200/80">
        {/* Subtle Background Glow Effect */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Block */}
            <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
              {/* Headline with Gradient Highlight */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Enterprise{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  Business Solutions
                </span>{" "}
                & Engineering
              </h1>

              {/* Paragraph with Subtler Bolding */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                We engineer mission-critical digital systems—from{" "}
                <span className="text-slate-900 font-semibold border-b-2 border-blue-500/40">
                  full-stack web platforms
                </span>{" "}
                and native mobile apps to bespoke enterprise CRMs, cloud DevOps,
                and{" "}
                <span className="text-slate-900 font-semibold border-b-2 border-blue-500/40">
                  real-time data analytics
                </span>{" "}
                engines.
              </p>

              {/* CTA Button */}
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0b1329] hover:bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-blue-500/20 no-underline group"
                >
                  <span>Discuss Your Build</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Image Block */}
            <div className="lg:col-span-5" data-aos="fade-left">
              <div className="relative">
                {/* Subtle Ambient Glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-20" />

                <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white">
                  <img
                    src={E1}
                    alt="Keyan Technology Architecture Overview"
                    className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark Card Overlay for High Contrast Text */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5">
                    <div className="text-xs font-bold text-white tracking-wide">
                      Marketplace System Unification
                    </div>
                    <div className="text-[11px] text-blue-300 font-medium mt-0.5">
                      Production-grade architecture tailored for growth
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 [DARK THEME]: Image-Based Operations & Systems Showcase */}
      <section className="py-20 bg-[#0b1329] text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image Block with Overlay Badges */}
            <div className="lg:col-span-6" data-aos="fade-right">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                <img
                  src={E2}
                  alt="Unified Architecture Framework"
                  className="w-full h-full object-cover aspect-[16/10] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329] via-[#0b1329]/40 to-transparent" />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-5" data-aos="fade-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-blue-400 font-semibold tracking-wider uppercase text-[11px]">
                  Unified Architecture
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Eliminate Data Silos with{" "}
                <span className="text-blue-400">Centralized Logic</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Modern enterprises cannot afford fragmented data trapped in
                standalone spreadsheets, legacy CRMs, and disconnected mobile
                applications. We design central{" "}
                <span className="text-blue-400 font-semibold">
                  REST & GraphQL API engines
                </span>{" "}
                that bridge mobile devices, warehousing, and executive
                dashboards in real time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      <span className="text-blue-400">Bank-Grade</span> Security
                    </div>
                    <div className="text-[10px] text-slate-400">
                      AES-256 payload encryption
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      <span className="text-blue-400">Sub-Second</span> Sync
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Instant webhook triggers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 [LIGHT THEME]: Image-Driven Services Showcase */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
              Specialized Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              End-to-End{" "}
              <span className="text-blue-600">Technology Solutions</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Every solution is backed by high-availability architecture,
              intuitive design, and custom codebase ownership.
            </p>
          </div>

          <div className="space-y-16">
            {SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={srv.id}
                  data-aos="fade-up"
                  className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Image Block */}
                  <div
                    className={`lg:col-span-6 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="rounded-2xl overflow-hidden border border-slate-200/80 shadow-md group relative aspect-[16/10]">
                      <img
                        src={srv.image}
                        alt={srv.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-2">
                        <Icon className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-bold text-slate-900">
                          {srv.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details Block */}
                  <div
                    className={`lg:col-span-6 space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {srv.title}
                    </h3>
                    <p className="text-blue-600 font-medium text-xs sm:text-sm">
                      {srv.tagline}
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="pt-2 space-y-2 border-t border-slate-200/80">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        Key Deliverables
                      </span>
                      {srv.capabilities.map((cap, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-start gap-2 text-xs text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 no-underline"
                      >
                        <span>Start {srv.title} Build</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 [DARK THEME]: Execution Methodology */}
      <section className="py-20 bg-[#0b1329] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center max-w-3xl mx-auto mb-16"
            data-aos="fade-up"
          >
            <span className="text-blue-400 font-semibold text-xs uppercase tracking-widest">
              Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              How We Turn Requirements into{" "}
              <span className="text-blue-400">Production Systems</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              A structured four-stage development pipeline engineered to
              eliminate delivery risks and ensure clean code deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((st, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-blue-500/50 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-800">
                  <img
                    src={st.image}
                    alt={st.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white font-mono font-extrabold text-xs px-2.5 py-1 rounded-md shadow-md">
                    {st.num}
                  </span>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {st.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-1.5">
                      {st.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 [LIGHT THEME]: Call To Action Banner */}
      <section className="relative py-20 bg-blue-50/70 text-slate-900 text-center overflow-hidden border-b border-blue-100">
        <div
          className="relative max-w-3xl mx-auto px-4 sm:px-6 z-10"
          data-aos="fade-up"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Ready to Build Your{" "}
            <span className="text-blue-600">System Architecture</span>?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto mb-8 font-normal">
            Get in touch with our solutions engineering team to review system
            requirements, receive a technical estimate, or view live product
            demos.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#0b1329] hover:bg-blue-600 text-white font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-xl transition-all shadow-md no-underline"
          >
            <span>Schedule Technical Walkthrough</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FOOTER [DARK THEME] */}
      <footer className="border-t border-slate-800 bg-[#0b1329] py-8 text-center text-slate-500 text-xs">
        <p>&copy; 2026 Keyan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Expertise;
