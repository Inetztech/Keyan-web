import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight, ChevronDown } from 'lucide-react';

const OPEN_ROLES = [
  { title: 'Senior Backend Engineer', dept: 'Platform / Infrastructure', location: 'Remote (India, EU overlap)', type: 'Full-time', accent: 0 },
  { title: 'Machine Learning Engineer', dept: 'Applied Intelligence', location: 'Remote', type: 'Full-time', accent: 1 },
  { title: 'Frontend Engineer — React / Next.js', dept: 'Product Engineering', location: 'Hybrid (Bengaluru)', type: 'Full-time', accent: 2 },
  { title: 'DevOps / Platform Engineer', dept: 'Platform / Infrastructure', location: 'Remote', type: 'Contract \u2192 Full-time', accent: 0 },
];


/* ---------------------------------------------------------------------- */
/*  DUOTONE IMAGE TILE (Shared Dependency)                                */
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
/*  MAIN COMPONENT                                                        */
/* ---------------------------------------------------------------------- */
const OpenRoles = ({ openRoles, accents, images }) => {
  const [expandedIdx, setExpandedIdx] = useState(null);

  const toggleAccordion = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section id="open-roles" className="relative min-h-screen flex items-center py-16 lg:py-0 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto w-full mt-10 mb-10 px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="w-full mb-10 lg:mb-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="max-w-2xl space-y-2"
          >
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest font-body">Open Positions</span>
            <h2 className="font-body text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
              Current openings across the team.
            </h2>
          </motion.div>
        </div>

        {/* Accordion Container */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger(0.08)}
          className="max-w-4xl mx-auto space-y-4"
        >
          {OPEN_ROLES.map((role, idx) => {
            const accent = accents[role.accent];
            const isExpanded = expandedIdx === idx;

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="border border-[#E2E8F0] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none group"
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full ${accent.iconBg} ${accent.tagText} text-[10px] font-bold uppercase tracking-wider mb-2`}>
                      {role.dept}
                    </span>
                    <h3 className="font-body font-bold text-lg sm:text-xl text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-200">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-[#475569]">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {role.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="shrink-0 p-2 rounded-full bg-[#F1F5F9] text-[#475569] group-hover:bg-[#E2E8F0] transition-colors duration-200">
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="border-t border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-stretch">
                        
                        {/* Featured Duotone Image Visual */}
                        <div className="relative w-full md:w-64 h-36 md:h-auto min-h-[140px] rounded-xl overflow-hidden shrink-0">
                          <DuotoneTile
                            src={images.roles[idx]}
                            alt={role.title}
                            accentHex={accent.hex}
                            position="center 35%"
                            className="w-full h-full"
                          />
                        </div>

                        {/* Interactive Dynamic CTAs */}
                        <div className="flex flex-col justify-between flex-1 gap-6">
                          <p className="text-sm text-[#475569] leading-relaxed">
                            Join our team as a {role.title} under the {role.dept} department. We're offering production scope execution, modern tooling stack alignment, and comprehensive framework integration out of our {role.location} placement.
                          </p>
                          
                          <Link
                            to={`/careers/apply?role=${encodeURIComponent(role.title)}`}
                            className={`inline-flex items-center gap-2 font-body font-bold text-sm uppercase tracking-wider ${accent.tagText} hover:underline self-start`}
                          >
                            Proceed to Application
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