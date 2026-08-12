import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Atom, LaptopMinimal, ShieldCheck, Archive,
  Phone, Mail, MapPin, ArrowRight,
} from 'lucide-react';

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
  </svg>
);
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 5.92a8.2 8.2 0 0 1-2.36.65 4.12 4.12 0 0 0 1.8-2.27 8.22 8.22 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.27 5.47 4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.11 4.11 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.4a11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.3 8.3 0 0 0 22 5.92Z" />
  </svg>
);

const features = [
  { title: 'Free Consultation', icon: Atom },
  { title: 'Expert Developers', icon: LaptopMinimal },
  { title: 'On-time Delivery', icon: ShieldCheck },
  { title: 'Long-term Support', icon: Archive },
];

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/expertise' },
  { label: 'Industries' },
  { label: 'Products' },
  { label: 'Careers' },
  { label: 'Blog' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  'Custom Development',
  'Web Applications',
  'Mobile Apps',
  'AI & ML Solutions',
  'Cloud Solutions',
  'ERP & CRM',
  'Data Analytics',
  'UI/UX Design',
];

const socials = [
  { icon: LinkedinIcon, hover: 'hover:text-white hover:bg-blue-600 hover:border-blue-600' },
  { icon: FacebookIcon, hover: 'hover:text-white hover:bg-blue-700 hover:border-blue-700' },
  { icon: InstagramIcon, hover: 'hover:text-white hover:bg-pink-600 hover:border-pink-600' },
  { icon: TwitterIcon, hover: 'hover:text-white hover:bg-slate-800 hover:border-slate-800' },
];

const Footer = () => {
  const location = useLocation();
  const year = 2026;

  // Helper function to check active path securely
  const isActive = (path) => path && path !== '#' && location.pathname === path;

  return (
    <footer className="relative bg-[#020714] text-slate-400 font-sans text-xs sm:text-sm pt-24 sm:pt-32 border-t border-slate-900/60">

      {/* Decorative ambient background overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-blue-600/5 rounded-full blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* FLOATING ACTION BLOCK */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-b from-[#0b1733] to-[#040918] border border-slate-800/80 p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-10 border-b border-slate-800/60">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-2 text-blue-400 font-semibold tracking-wider text-[11px] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Start a Project
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Let's Build Something Exceptional, Together
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                Have a project in mind? Let's discuss how we can turn your ideas into powerful digital solutions.
              </p>
            </div>

            <div className="flex-shrink-0 flex">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-white !text-[#020714] !no-underline font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-slate-50 transition-all shadow-md active:scale-98"
              >
                Let's Discuss Your Project
                <span className="w-6 h-6 rounded-lg bg-[#020714] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* Pillars Strip row */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-slate-800/80 mt-10">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-3.5 lg:px-6 first:pl-0">
                  <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/5">
                    <Icon className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-slate-200 tracking-wide uppercase">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FOOTER SITEMAP CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12">

          {/* Core Brand Statement Frame */}
          <div className="sm:col-span-2 md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-white font-black text-xl tracking-wider select-none">
              <span className="text-blue-500 tracking-tighter">K</span> KEYAN
            </div>
            <p className="text-[13px] leading-relaxed text-slate-400 max-w-sm">
              Engineering intelligent, scalable software architectures for global businesses that refuse to stand still.
            </p>
            <div className="flex gap-2.5 pt-1">
              {socials.map(({ icon: Icon, hover }, i) => (
                <span
                  key={i}
                  className={`w-9 h-9 rounded-xl border border-slate-800 bg-slate-900/20 flex items-center justify-center text-slate-400 cursor-pointer transition-all duration-300 ${hover}`}
                >
                  <Icon className="w-4 h-4" />
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links Nav Array */}
          <div className="md:col-span-2 space-y-4">
            <h5 className="text-slate-100 font-bold text-xs tracking-wider uppercase">Quick Links</h5>
            <ul className="space-y-3 text-[13px] font-medium p-0 m-0 list-none">
              {quickLinks.map((link) => (
                <li key={link.label} className="transition-transform duration-200 hover:translate-x-0.5">
                  {link.to ? (
                    <Link 
                      to={link.to} 
                      className={`!no-underline transition-colors block ${
                        isActive(link.to) ? '!text-white font-semibold' : '!text-slate-400 hover:!text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span className="text-slate-400 hover:text-white cursor-pointer transition-colors block">{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Core Capabilities Array */}
          <div className="md:col-span-2 space-y-4">
            <h5 className="text-slate-100 font-bold text-xs tracking-wider uppercase">Services</h5>
            <ul className="space-y-3 text-[13px] font-medium text-slate-400 p-0 m-0 list-none">
              {serviceLinks.map((label) => (
                <li key={label} className="transition-transform duration-200 hover:translate-x-0.5">
                  <span className="hover:text-white cursor-pointer transition-colors block">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Explicit Corporate Data Channels */}
          <div className="sm:col-span-2 md:col-span-4 space-y-4">
            <h5 className="text-slate-100 font-bold text-xs tracking-wider uppercase">Get in Touch</h5>
            <ul className="space-y-4 text-[13px] text-slate-400 font-medium p-0 m-0 list-none">
              <li className="flex items-center gap-3 group cursor-pointer">
                <span className="w-8 h-8 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-blue-600/10 group-hover:text-blue-400">
                  <Phone className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
                <span className="group-hover:text-slate-200 transition-colors">+91 88785 43210</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer">
                <span className="w-8 h-8 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-blue-600/10 group-hover:text-blue-400">
                  <Mail className="w-3.5 h-3.5" strokeWidth={2.5} />
                </span>
                <span className="group-hover:text-slate-200 transition-colors">info@keyansoft.com</span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="w-8 h-8 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
                <span className="text-xs sm:text-[13px] text-slate-400">
                  3rd floor, KP Towers, No.159, Arcot road, <br /> Opp to Nexus Vijaya Mall, <br />Vadapalani, Chennai, India
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* LOWER LEGAL CLOSURE STRIP */}
      <div className="relative z-10 border-t border-slate-900/80 bg-[#01040b] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-medium tracking-wide">
          <span>© {year} Keyan Software Solutions Pvt Ltd. All Rights Reserved.</span>
          <div className="flex items-center gap-4 select-none">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-slate-800">|</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;