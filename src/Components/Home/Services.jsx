import { useState } from 'react';
import {
  Monitor, Globe, Smartphone, Cpu, BarChart3,
  Network, Cloud, Users, Palette, Settings,
  Wrench, Lightbulb, ArrowUpRight
} from 'lucide-react';

import img1 from "../../aessts/services/img1.png"
import img2 from "../../aessts/services/img2.png"
import img3 from "../../aessts/services/img3.png"
import img4 from "../../aessts/services/img4.png"
import img5 from "../../aessts/services/img5.png"
import img6 from "../../aessts/services/img6.png"

const services = [
  {
    icon: Monitor,
    title: 'Custom Software',
    fullTitle: 'Custom Software Development',
    description: 'Tailored applications built around how your business actually works, not a generic template.',
    tag: 'Build',
    seed: img1,
  },
  {
    icon: Cpu,
    title: 'AI & ML',
    fullTitle: 'AI & Machine Learning',
    description: 'Practical AI features that automate work and surface insight from your data.',
    tag: 'Intelligence',
    seed: img2,
  },
  {
    icon: Globe,
    title: 'Web Apps',
    fullTitle: 'Enterprise Web Applications',
    description: 'Scalable, secure web platforms built for complex operations.',
    tag: 'Build',
    seed: img3,
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    fullTitle: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android.',
    tag: 'Build',
    seed: img4,
  },
  {
    icon: BarChart3,
    title: 'Analytics & BI',
    fullTitle: 'Data Analytics & BI',
    description: 'Dashboards and reporting that turn raw data into decisions.',
    tag: 'Intelligence',
    seed: img5,
  },
  {
    icon: Network,
    title: 'Integrations',
    fullTitle: 'API & Integrations',
    description: 'Connecting your tools and data into one reliable workflow.',
    tag: 'Intelligence',
    seed: img6,
  },
  {
    icon: Cloud,
    title: 'Cloud & AWS',
    fullTitle: 'Cloud & AWS Solutions',
    description: 'Cloud architecture, migration, and infrastructure management built for scale.',
    tag: 'Systems',
    seed: 'keyan-cloud-aws',
  },
  {
    icon: Users,
    title: 'HRMS',
    fullTitle: 'HRMS & Workforce',
    description: 'Tools to manage hiring, payroll, and people operations.',
    tag: 'Systems',
    seed: 'keyan-hrms-workforce',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    fullTitle: 'UI/UX Design',
    description: 'Interfaces designed for clarity, usability, and growth.',
    tag: 'Support',
    seed: 'keyan-uiux-design',
  },
  {
    icon: Settings,
    title: 'Product Eng.',
    fullTitle: 'Product Engineering',
    description: 'End-to-end product development from concept to launch.',
    tag: 'Build',
    seed: 'keyan-product-eng',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    fullTitle: 'App Maintenance',
    description: 'Ongoing support, updates, and performance improvements.',
    tag: 'Support',
    seed: 'keyan-app-maintenance',
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    fullTitle: 'IT Consulting',
    description: 'Strategic guidance on technology decisions that matter.',
    tag: 'Support',
    seed: 'keyan-it-consulting',
  },
];

const Services = () => {
  const [active, setActive] = useState(0);
  const current = services[active];
  const Icon = current.icon;

  return (
    <section className="relative bg-white overflow-hidden py-10 lg:py- lg:max-h-[820px] lg:flex lg:items-center">
      {/* Decorative background layer, echoing the hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-24 w-96 h-96 bg-blue-500/[0.06] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">

        {/* Header */}
        <div className="max-w-2xl mb-5 lg:mb-6" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 text-blue-600 font-semibold tracking-wide uppercase text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            What We Do
          </span>
          <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
            End-to-End Software Solutions for Every Business Need
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
            Hover a service to preview it — modern software that helps organizations
            streamline operations and accelerate growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">

          {/* Left: 3 x 4 icon grid */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 h-full">
              {services.map((service, idx) => {
                const isActive = idx === active;
                const ItemIcon = service.icon;
                return (
                  <button
                    key={service.title}
                    onMouseEnter={() => setActive(idx)}
                    onFocus={() => setActive(idx)}
                    onClick={() => setActive(idx)}
                    className={`group flex flex-col items-center justify-center text-center gap-1.5 rounded-lg border h-20 sm:h-[5.5rem] transition-all duration-200 ${
                      isActive
                        ? 'border-blue-500 bg-blue-50 shadow-md shadow-blue-500/10'
                        : 'border-slate-100 bg-white hover:border-blue-200 hover:bg-blue-50/40'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                        isActive ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'
                      }`}
                    >
                      <ItemIcon className="w-3.5 h-3.5" strokeWidth={1.75} />
                    </span>
                    <span
                      className={`text-[10px] font-semibold leading-tight px-1 transition-colors duration-200 ${
                        isActive ? 'text-blue-700' : 'text-slate-600'
                      }`}
                    >
                      {service.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: preview panel, matched to the grid's height */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-full min-h-[280px]">
              <img
                key={current.seed}
                src={current.seed}
                alt={current.fullTitle}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030a1c]/85 via-[#030a1c]/25 to-transparent" />

              <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full">
                {current.tag}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-400/30 backdrop-blur-sm text-blue-300 flex items-center justify-center mb-2.5">
                  <Icon className="w-4 h-4" strokeWidth={1.75} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {current.fullTitle}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                  {current.description}
                </p>
                <button className="group mt-3.5 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors duration-200 shadow-lg shadow-blue-500/20">
                  Get in Touch
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;