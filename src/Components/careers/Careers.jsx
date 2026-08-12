import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  animate,
} from 'framer-motion';
import {
  ArrowRight, Sparkles, MapPin, Clock, Briefcase,
  Wrench, TrendingUp, Compass, HeartPulse, Globe2,
  GraduationCap, PiggyBank, Palmtree, ArrowUpRight, ChevronDown,
} from 'lucide-react';
import OpenRoles from './OpenRoles';
import hero_image from "../../aessts/careers/bgcareers1.jpg"
import Benefits from './Benefits';
/* ---------------------------------------------------------------------- */
/*  STOCK PHOTOGRAPHY                                                     */
/* ---------------------------------------------------------------------- */
const stockPhoto = (seed, w = 1400, h = 900) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const IMAGES = {
  hero: hero_image,
  culture: stockPhoto('keyan-culture-pairing', 1000, 1300),
  gallery: [
    stockPhoto('keyan-standup', 1000, 1000),
    stockPhoto('keyan-focus', 700, 700),
    stockPhoto('keyan-pairing2', 700, 700),
    stockPhoto('keyan-whiteboard', 700, 700),
    stockPhoto('keyan-release', 700, 700),
  ],
  roles: [
    stockPhoto('keyan-role-backend', 800, 500),
    stockPhoto('keyan-role-ml', 800, 500),
    stockPhoto('keyan-role-frontend', 800, 500),
    stockPhoto('keyan-role-devops', 800, 500),
  ],
  benefits: stockPhoto('keyan-benefits-desk', 1000, 1300),
  closing: stockPhoto('keyan-office-closing', 1920, 1080),
};

/* ---------------------------------------------------------------------- */
/*  DATA                                                                  */
/* ---------------------------------------------------------------------- */

const CULTURE_VALUES = [
  { title: 'Ownership Over Oversight', desc: 'You scope the problem, make the call, and stand behind the result — no layer of management translating intent for you.', Icon: Compass },
  { title: 'Craftsmanship at Every Layer', desc: 'Clean migrations, readable diffs, honest code review. It\u2019s how systems stay maintainable three years in.', Icon: Wrench },
  { title: 'Growth Through Real Scope', desc: 'Junior engineers here work on production infrastructure from week one, with real review — not a sandbox.', Icon: TrendingUp },
];

const OPEN_ROLES = [
  { title: 'Senior Backend Engineer', dept: 'Platform / Infrastructure', location: 'Remote (India, EU overlap)', type: 'Full-time', accent: 0 },
  { title: 'Machine Learning Engineer', dept: 'Applied Intelligence', location: 'Remote', type: 'Full-time', accent: 1 },
  { title: 'Frontend Engineer — React / Next.js', dept: 'Product Engineering', location: 'Hybrid (Bengaluru)', type: 'Full-time', accent: 2 },
  { title: 'DevOps / Platform Engineer', dept: 'Platform / Infrastructure', location: 'Remote', type: 'Contract \u2192 Full-time', accent: 0 },
];

const BENEFITS = [
  { title: 'Health Coverage', desc: 'Comprehensive medical coverage for you and your dependents.', Icon: HeartPulse },
  { title: 'Remote-First', desc: 'Work from anywhere with reasonable overlap for your team.', Icon: Globe2 },
  { title: 'Learning Budget', desc: 'Annual budget for courses, books, and conferences.', Icon: GraduationCap },
  { title: 'Equity Participation', desc: 'Meaningful ownership stake as the company grows.', Icon: PiggyBank },
  { title: 'Flexible Time Off', desc: 'No fixed PTO ledger \u2014 take the time you need to do good work.', Icon: Palmtree },
  { title: 'Real Scope, Fast', desc: 'Production ownership from day one, not a ramp-up sandbox.', Icon: Briefcase },
];

const MotionLink = motion(Link);

/* ---------------------------------------------------------------------- */
/*  COLOR TOKENS                                                          */
/* ---------------------------------------------------------------------- */

const ACCENTS = [
  { hex: '#2563EB', icon: 'text-[#2563EB]', iconBg: 'bg-[#EFF4FF]', tagText: 'text-[#2563EB]', bar: 'from-[#2563EB] to-[#93C5FD]' },
  { hex: '#6D5DD3', icon: 'text-[#6D5DD3]', iconBg: 'bg-[#F2F0FB]', tagText: 'text-[#6D5DD3]', bar: 'from-[#6D5DD3] to-[#C4B8F0]' },
  { hex: '#0F9D8C', icon: 'text-[#0F9D8C]', iconBg: 'bg-[#EBF8F6]', tagText: 'text-[#0F9D8C]', bar: 'from-[#0F9D8C] to-[#8FE0D6]' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = (gap = 0.12, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

/* ---------------------------------------------------------------------- */
/*  DUOTONE IMAGE TILE                                                    */
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
/*  STAT COUNTER                                                          */
/* ---------------------------------------------------------------------- */

const StatCounter = ({ value, decimals = 0, suffix = '', label, accentClass = 'text-white' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setDisplay(v) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref}>
      <div className={`text-2xl sm:text-3xl font-extrabold ${accentClass}`}>
        {display.toFixed(decimals)}{suffix}
      </div>
      <div className="text-[11px] uppercase tracking-wider font-semibold opacity-70 mt-1">{label}</div>
    </div>
  );
};

/* ---------------------------------------------------------------------- */
/*  MAIN COMPONENT                                                        */
/* ---------------------------------------------------------------------- */

const Careers = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgScale = useTransform(heroProgress, [0, 1], [1, 1.25]);
  const heroImgY = useTransform(heroProgress, [0, 1], ['0%', '15%']);
  const heroOverlayOpacity = useTransform(heroProgress, [0, 1], [0.55, 0.85]);
  const heroContentOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);

  return (
    <div className="antialiased bg-[#0F172A] text-[#0F172A] selection:bg-blue-100 selection:text-blue-800">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@1,9..144,400&display=swap');
            .font-body { font-family: 'Inter', sans-serif; }
            .font-serif-editorial { font-family: 'Fraunces', serif; font-style: italic; }
            .image-frame-shadow { box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.08); }
          `,
        }}
      />

      {/* ===================== HERO ===================== */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <motion.div className="absolute inset-0" style={{ scale: heroImgScale, y: heroImgY }}>
          <img src={IMAGES.hero} alt="Engineers at Keyan working together" className="w-full h-full object-cover bg-top" />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-[#0F172A]/20"
          style={{ opacity: heroOverlayOpacity }}
        />

        <motion.div
          style={{ opacity: heroContentOpacity }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24"
        >
          <motion.div initial="hidden" animate="show" variants={stagger(0.15)} className="max-w-3xl space-y-6 text-white">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm"
            >
              <motion.span animate={{ rotate: [0, 15, -10, 0] }} transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1 }}>
                <Sparkles className="w-3.5 h-3.5" />
              </motion.span>
              <span>CAREERS AT KEYAN</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-body text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Build with engineers who{' '}
              <span className="font-serif-editorial font-normal text-[#C4B8F0]">actually own what they ship.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              A small, senior-heavy team working on real production infrastructure. No bureaucracy, no busywork — just systems that matter.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-1">
              <motion.a
                href="#open-roles"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 font-body font-semibold text-sm bg-white text-[#0F172A] px-7 py-3.5 rounded-lg shadow-lg transition-colors hover:bg-[#F1F5F9]"
              >
                View Open Roles
                <motion.span className="inline-flex" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>
              <motion.a
                href="#culture"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center font-body font-semibold text-sm border border-white/30 text-white px-7 py-3.5 rounded-lg backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Our Culture
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 pt-6 max-w-md text-white">
              <StatCounter value={4} suffix="" label="Open Roles" />
              <StatCounter value={100} suffix="%" label="Remote-Friendly" />
              <StatCounter value={2} suffix="wk" label="Avg. Time to Offer" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* ===================== CULTURE ===================== */}
      <section id="culture" className="relative min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-0 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 h-72 sm:h-96 lg:h-[80vh] w-full"
          >
            <DuotoneTile
              src={IMAGES.culture}
              alt="Keyan engineers collaborating in the studio"
              accentHex="#2563EB"
              position="center 30%"
              className="w-full h-full lg:rounded-r-2xl"
            />
          </motion.div>

          <div className="lg:col-span-7 flex items-center px-4 sm:px-6 lg:pl-16 lg:pr-8 py-12 lg:py-0">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger(0.13)}
              className="max-w-xl space-y-6"
            >
              <motion.span variants={fadeUp} className="text-xs font-bold text-[#2563EB] uppercase tracking-widest font-body block">
                How We Work
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-body text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                A culture built around real engineering scope.
              </motion.h2>

              <div className="space-y-5 pt-2">
                {CULTURE_VALUES.map((value, idx) => {
                  const ValueIcon = value.Icon;
                  const accent = ACCENTS[idx % 3];
                  return (
                    <motion.div key={idx} variants={fadeUp} className="flex gap-4 items-start group">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 8 }}
                        className={`shrink-0 p-2.5 rounded-lg ${accent.iconBg} ${accent.icon}`}
                      >
                        <ValueIcon className="w-4 h-4" />
                      </motion.div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A] font-body">{value.title}</h4>
                        <p className="text-xs text-[#475569] leading-relaxed mt-1">{value.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== GALLERY ===================== */}
      <section className="relative min-h-screen flex flex-col justify-center py-16 lg:py-0 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-8 lg:mb-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="w-full"
          >
            <span className="text-xs font-bold text-[#93C5FD] uppercase tracking-widest font-body block">Life at Keyan</span>
            <h2 className="font-body text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2">
              A team that ships together.
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger(0.08)}
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 grid-flow-row-dense gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[220px]"
        >
          {[
            { span: 'col-span-2 row-span-2', accent: 0, pos: 'center 20%', label: 'Engineering Standups' },
            { span: 'col-span-1 row-span-1', accent: 1, pos: 'center 60%', label: 'Focus Sessions' },
            { span: 'col-span-1 row-span-1', accent: 2, pos: 'center 40%', label: 'Pairing' },
            { span: 'col-span-1 row-span-1', accent: 2, pos: 'left center', label: 'Whiteboard Reviews' },
            { span: 'col-span-1 row-span-1', accent: 0, pos: 'right center', label: 'Release Days' },
          ].map((tile, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-xl overflow-hidden group ${tile.span}`}
            >
              <DuotoneTile
                src={IMAGES.gallery[idx]}
                alt={tile.label}
                accentHex={ACCENTS[tile.accent].hex}
                position={tile.pos}
                className="w-full h-full"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-xs font-bold font-body uppercase tracking-wider">{tile.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-white/40 text-[11px] mt-6">
          Placeholder photography (Lorem Picsum) — swap each `IMAGES.gallery` entry for real team photos when available.
        </p>
      </section>

      {/* ===================== OPEN ROLES ===================== */}
      <OpenRoles OpenRoles={OPEN_ROLES} accents={ACCENTS} images={IMAGES}/>

      {/* ===================== BENEFITS ===================== */}
      <Benefits benefits={BENEFITS} accents={ACCENTS} images={IMAGES}/>

      {/* ===================== CLOSING CTA ===================== */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.closing} alt="Keyan office" className="w-full h-full object-cover" style={{ objectPosition: 'center 15%' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/75 to-[#0F172A]/40" />
        </div>

        <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger(0.12)}
            className="max-w-2xl text-center space-y-6 text-white"
          >
            <motion.span variants={fadeUp} className="text-xs font-bold text-[#C4B8F0] uppercase tracking-widest font-body block">
              Application
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-body text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Ready to build something that matters?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm sm:text-base text-white/75 max-w-lg mx-auto leading-relaxed">
              Send us your resume and a note on what you'd want to work on. Our engineering leads review every application personally.
            </motion.p>
            <motion.div variants={fadeUp} className="pt-2">
              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center font-body font-semibold text-xs uppercase tracking-wider bg-white text-[#0F172A] px-8 py-3.5 rounded-lg shadow-lg hover:bg-[#F1F5F9] transition-colors"
              >
                Apply Now
              </MotionLink>
            </motion.div>
          </motion.div>
        </div>

        <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-white/70">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wider text-white font-body">KEYAN</span>
            <span className="text-white/30">|</span>
            <span>© 2026 Enterprise Architecture. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Framework</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Operational Terms</Link>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Careers;