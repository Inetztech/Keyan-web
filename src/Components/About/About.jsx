import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from 'framer-motion';
import {
  Cloud, BrainCircuit, Users2,
  ArrowRight, Sparkles, Command,
  BadgeCheck, LineChart, Layers,
} from 'lucide-react';
import A1 from '../../aessts/about/hero.webp';

const CAPABILITIES = [
  {
    ref: '01',
    title: 'Distributed Cloud Systems',
    body: 'Engineering highly available, horizontally auto-scaling backend platforms on secure cloud topologies. We optimize latency profiles and design message streams using enterprise best practices to handle intensive transaction rates safely.',
    Icon: Cloud,
    tag: 'AWS / GCP',
    illustration: 'cloud',
  },
  {
    ref: '02',
    title: 'Applied Intelligent Workflows',
    body: 'Implementing analytics telemetry and operational data automation. We instrument clean data capture architectures and connect them to predictive pipelines, eliminating operational friction points through empirical code execution.',
    Icon: BrainCircuit,
    tag: 'Data Integration',
    illustration: 'intelligence',
  },
  {
    ref: '03',
    title: 'Clean Interface Systems',
    body: "Aligning front-end delivery with performance engineering constraints. We construct fast, accessible, modular components using frameworks like Next.js and React so your system's user experience matches the robustness of your underlying databases.",
    Icon: Users2,
    tag: 'Next.js / React',
    illustration: 'interface',
  },
];

const FRAMEWORK_PILLARS = [
  {
    title: 'Technical Credibility First',
    desc: 'Every single project plan is directly authored, reviewed, and overseen by practicing software engineers and systems architects—never filtered through disconnected management layers.',
    Icon: BadgeCheck,
  },
  {
    title: 'Evidence-Driven Optimization',
    desc: "We don't guess why database performance stalls or why infrastructure costs balloon. We monitor, log, and instrument metrics down to the query level to optimize software using deterministic logs.",
    Icon: LineChart,
  },
  {
    title: 'Durable Engineering',
    desc: 'We build clean, highly documented codebases explicitly designed to remain scalable, maintainable, and easy to transition to your internal technology teams when ready.',
    Icon: Layers,
  },
];

const STATS = [
  { value: 99.99, suffix: '%', decimals: 2, label: 'Production Availability', accent: 0 },
  { value: 24, suffix: '/7/365', decimals: 0, label: 'Active Monitoring', accent: 2 },
  { value: 3, suffix: '+ Years', decimals: 0, label: 'Lifecycle Stability', accent: 1 },
];

const MotionLink = motion(Link);

/* ---------------------------------------------------------------------- */
/*  COLOR TOKENS                                                           */
/*  Ink #0F172A · Slate #475569 · Base #FFFFFF/#F8FAFC (unchanged)         */
/*  Three subtle accents rotate through cards/stats for quiet variety      */
/*  instead of a single flat blue everywhere:                              */
/*    Blue   #2563EB — systems / infrastructure                           */
/*    Violet #6D5DD3 — intelligence / data                                */
/*    Teal   #0F9D8C — interface / delivery                               */
/* ---------------------------------------------------------------------- */

const ACCENTS = [
  {
    icon: 'text-[#2563EB]',
    iconBg: 'bg-[#EFF4FF]',
    hoverBg: 'group-hover:bg-[#2563EB]',
    tagBorder: 'border-[#2563EB]/15',
    tagText: 'text-[#2563EB]',
    bar: 'from-[#2563EB] to-[#93C5FD]',
    tint: 'text-[#2563EB]/[0.05]',
    blob: 'bg-[#2563EB]/10',
  },
  {
    icon: 'text-[#6D5DD3]',
    iconBg: 'bg-[#F2F0FB]',
    hoverBg: 'group-hover:bg-[#6D5DD3]',
    tagBorder: 'border-[#6D5DD3]/15',
    tagText: 'text-[#6D5DD3]',
    bar: 'from-[#6D5DD3] to-[#C4B8F0]',
    tint: 'text-[#6D5DD3]/[0.05]',
    blob: 'bg-[#6D5DD3]/10',
  },
  {
    icon: 'text-[#0F9D8C]',
    iconBg: 'bg-[#EBF8F6]',
    hoverBg: 'group-hover:bg-[#0F9D8C]',
    tagBorder: 'border-[#0F9D8C]/15',
    tagText: 'text-[#0F9D8C]',
    bar: 'from-[#0F9D8C] to-[#8FE0D6]',
    tint: 'text-[#0F9D8C]/[0.05]',
    blob: 'bg-[#0F9D8C]/10',
  },
];

/* Soft, low-opacity blurred fields used behind the hero and closing CTA — */
/* the one deliberate "signature" color moment, kept quiet everywhere else */
const AmbientField = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -top-24 -left-16 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#2563EB]/10 blur-3xl" />
    <div className="absolute top-1/3 -right-20 w-80 sm:w-[26rem] h-80 sm:h-[26rem] rounded-full bg-[#6D5DD3]/10 blur-3xl" />
    <div className="absolute -bottom-28 left-1/3 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#0F9D8C]/10 blur-3xl" />
  </div>
);

/* ---------------------------------------------------------------------- */
/*  CAPABILITY ILLUSTRATIONS                                               */
/*  Original vector art (not photography) so each capability card reads   */
/*  visually, not just iconographically — animated in on scroll, with a   */
/*  quiet ambient loop once revealed.                                      */
/* ---------------------------------------------------------------------- */

const IllustrationCloud = ({ uid }) => (
  <svg viewBox="0 0 220 120" className="w-full h-full" fill="none">
    <defs>
      <linearGradient id={`cloud-fill-${uid}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="0.02" />
      </linearGradient>
    </defs>

    {/* server rack */}
    {[0, 1, 2].map((i) => (
      <motion.rect
        key={i}
        x="24" y={70 - i * 16} width="54" height="12" rx="2.5"
        fill="#F8FAFC" stroke="#2563EB" strokeOpacity="0.35" strokeWidth="1.25"
        initial={{ opacity: 0, x: 14 }}
        whileInView={{ opacity: 1, x: 24 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.12 }}
      />
    ))}
    {[0, 1, 2].map((i) => (
      <motion.circle
        key={`led-${i}`}
        cx="32" cy={76 - i * 16} r="1.6"
        fill="#2563EB"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.35 }}
      />
    ))}

    {/* connection lines to cloud */}
    <motion.path
      d="M78 62 C 110 62, 108 40, 132 40"
      stroke="#2563EB" strokeWidth="1.25" strokeDasharray="3 4" strokeOpacity="0.5"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    />
    <motion.circle
      r="2.2" fill="#60A5FA"
      animate={{ offsetDistance: ['0%', '100%'] }}
      style={{ offsetPath: "path('M78 62 C 110 62, 108 40, 132 40')" }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
    />

    {/* cloud shape */}
    <motion.path
      d="M150 52 a14 14 0 0 1 26-6 a11 11 0 0 1 10 20 h-40 a11 11 0 0 1 4-14z"
      fill={`url(#cloud-fill-${uid})`} stroke="#2563EB" strokeWidth="1.5"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.55, ease: 'backOut' }}
      style={{ transformOrigin: '175px 55px' }}
    />
  </svg>
);

const IllustrationIntelligence = ({ uid }) => {
  const nodes = [
    { x: 40, y: 60 }, { x: 78, y: 30 }, { x: 78, y: 90 },
    { x: 130, y: 20 }, { x: 130, y: 60 }, { x: 130, y: 100 },
    { x: 178, y: 44 }, { x: 178, y: 76 },
  ];
  const edges = [
    [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5],
    [3, 6], [4, 6], [4, 7], [5, 7],
  ];

  return (
    <svg viewBox="0 0 220 120" className="w-full h-full" fill="none">
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="#6D5DD3" strokeWidth="1" strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x} cy={n.y} r={i % 3 === 0 ? 4 : 3}
          fill="#6D5DD3"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.06, ease: 'backOut' }}
        />
      ))}
      {[0, 3, 6].map((i) => (
        <motion.circle
          key={`pulse-${i}`}
          cx={nodes[i].x} cy={nodes[i].y} r="4"
          stroke="#A78BFA" strokeWidth="1" fill="none"
          animate={{ r: [4, 12, 4], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3, ease: 'easeOut' }}
        />
      ))}
    </svg>
  );
};

const IllustrationInterface = ({ uid }) => (
  <svg viewBox="0 0 220 120" className="w-full h-full" fill="none">
    <defs>
      <linearGradient id={`iface-fill-${uid}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0F9D8C" stopOpacity="0.14" />
        <stop offset="100%" stopColor="#0F9D8C" stopOpacity="0.02" />
      </linearGradient>
    </defs>

    {/* back window */}
    <motion.rect
      x="70" y="14" width="120" height="78" rx="6"
      fill={`url(#iface-fill-${uid})`} stroke="#0F9D8C" strokeOpacity="0.35" strokeWidth="1.25"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 14 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    />
    {/* front window */}
    <motion.rect
      x="30" y="30" width="120" height="78" rx="6"
      fill="#F8FAFC" stroke="#0F9D8C" strokeWidth="1.5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 30 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.15 }}
    />
    <motion.rect
      x="30" y="30" width="120" height="16" rx="6"
      fill="#0F9D8C" fillOpacity="0.12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.35 }}
    />
    {[0, 1, 2].map((i) => (
      <circle key={i} cx={40 + i * 8} cy="38" r="2" fill="#0F9D8C" fillOpacity="0.5" />
    ))}

    {[0, 1, 2].map((i) => (
      <motion.rect
        key={`line-${i}`}
        x="42" y={58 + i * 14} width={i === 1 ? 60 : 84} height="6" rx="3"
        fill="#0F9D8C" fillOpacity="0.18"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        style={{ transformOrigin: '42px 0px' }}
        transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
      />
    ))}

    {/* cursor sweep */}
    <motion.circle
      r="3" fill="#0F9D8C"
      animate={{ offsetDistance: ['0%', '100%'] }}
      style={{ offsetPath: "path('M42 58 L126 58 L42 72 L102 72')" }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
    />
  </svg>
);

const CAPABILITY_ILLUSTRATIONS = {
  cloud: IllustrationCloud,
  intelligence: IllustrationIntelligence,
  interface: IllustrationInterface,
};

/* ---------------------------------------------------------------------- */
/*  ANIMATION VARIANTS                                                     */
/* ---------------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = (gap = 0.12, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

/* ---------------------------------------------------------------------- */
/*  COUNT-UP STAT                                                          */
/* ---------------------------------------------------------------------- */

const StatCounter = ({ value, decimals = 0, prefix = '', suffix = '', label, accentClass }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref}>
      <motion.div
        className={`text-xl sm:text-2xl font-extrabold ${accentClass}`}
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
      >
        {prefix}{display.toFixed(decimals)}{suffix}
      </motion.div>
      <div className="text-[11px] text-[#475569] font-medium">{label}</div>
    </div>
  );
};

/* ---------------------------------------------------------------------- */
/*  HERO IMAGE — subtle cursor-driven parallax + idle float                */
/* ---------------------------------------------------------------------- */

const HeroImage = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-40, 40], [4, -4]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-40, 40], [-4, 4]), { stiffness: 120, damping: 18 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      variants={fadeLeft}
      className="lg:col-span-5 w-full mt-5 flex justify-center lg:justify-end"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry }}
        animate={{ y: [0, -10, 0] }}
        transition={{ y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
        className="relative w-full max-w-sm lg:max-w-md aspect-[4/5] lg:max-h-[70vh] rounded-2xl overflow-hidden image-frame-shadow border border-[#E2E8F0] bg-[#F1F5F9]"
      >
        <img
          src={A1}
          alt="Keyan Corporate System Engineering Workspace Portfolio"
          className="w-full h-full object-cover grayscale-[20%] contrast-[105%]"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent p-6 z-10 text-white">
          <span className="text-[10px] uppercase tracking-widest text-[#93C5FD] font-mono font-bold block mb-1">
            Production System Architecture
          </span>
          <h3 className="text-sm font-bold font-body">Resilient Infrastructure & Codebase Deployment</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---------------------------------------------------------------------- */
/*  MAIN COMPONENT                                                         */
/* ---------------------------------------------------------------------- */

const About = () => {
  return (
    <div className="antialiased bg-[#FFFFFF] text-[#0F172A] selection:bg-blue-100 selection:text-blue-800">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@1,9..144,400&display=swap');
            .font-body { font-family: 'Inter', sans-serif; }
            .font-serif-editorial { font-family: 'Fraunces', serif; font-style: italic; }

            .image-frame-shadow {
              box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.08);
            }
          `,
        }}
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF]">
        <AmbientField />
        <motion.div
          className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          initial="hidden"
          animate="show"
          variants={stagger(0.15)}
        >
          {/* Hero Copy Block */}
          <motion.div variants={fadeUp} className="lg:col-span-7 space-y-6 sm:space-y-8">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF]"
            >
              <motion.span
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1 }}
              >
                <Sparkles className="w-3.5 h-3.5" />
              </motion.span>
              <span>01 // ARCHITECTURE & DELIVERY</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-body text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1]"
            >
              We build the digital infrastructure{' '}
              <span className="font-serif-editorial font-normal text-[#6D5DD3]">
                behind modern business models.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className=" text-sm sm:text-base max-w-xl leading-relaxed"
            >
              Keyan acts as an absolute extension of your engineering capacity. We design, build, and optimize high-throughput custom platforms, resilient cloud architectures, and machine-learning workflows that remain stable under real enterprise production pressure.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
              <MotionLink
                to="/contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 font-body font-semibold text-sm bg-[#2563EB] text-white px-7 py-3.5 rounded-lg transition-colors shadow-md hover:bg-[#1D4ED8]"
              >
                Consult With a Systems Architect
                <motion.span
                  className="inline-flex"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </MotionLink>
              <motion.a
                href="#capabilities"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center font-body font-semibold text-sm border border-[#CBD5E1] text-[#475569] px-7 py-3.5 rounded-lg transition-colors hover:bg-[#F8FAFC] hover:text-[#0F172A]"
              >
                Review Capabilities Matrix
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image Block */}
          <HeroImage />
        </motion.div>
      </section>

      {/* ===================== SECTION 02: EDITORIAL REVERSE MASONRY ===================== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Image Block Left */}
          <motion.div
            className="lg:col-span-6 grid grid-cols-12 gap-4 sm:gap-6 items-stretch"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger(0.15)}
          >
            <motion.div
              variants={fadeRight}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4 }}
              className="col-span-8 rounded-xl overflow-hidden border border-[#E2E8F0] aspect-[4/3] lg:max-h-[50vh] image-frame-shadow bg-[#F1F5F9]"
            >
              <img src={A1} alt="Operations Strategy Core" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              variants={fadeRight}
              className="col-span-4 rounded-xl bg-gradient-to-br from-[#EBF8F6] to-[#F8FAFC] border border-[#0F9D8C]/15 p-4 sm:p-6 flex flex-col justify-between text-[#0F172A]"
            >
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Command className="w-6 h-6 text-[#0F9D8C]" />
              </motion.div>
              <div>
                <h4 className="font-body font-bold text-xs sm:text-sm tracking-tight leading-tight">Determinism Over Guesswork.</h4>
                <p className="text-[10px] sm:text-[11px] text-[#475569] mt-1">Operational Metrics.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Block Right */}
          <motion.div
            className="lg:col-span-6 space-y-4 sm:space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger(0.12)}
          >
            <motion.span variants={fadeLeft} className="text-xs font-bold text-[#2563EB] uppercase tracking-widest font-body block">
              02 / Alignment Strategy
            </motion.span>
            <motion.h2 variants={fadeLeft} className="font-body text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
              Software engineered explicitly to protect high enterprise throughput.
            </motion.h2>
            <motion.p variants={fadeLeft} className="text-sm sm:text-base leading-relaxed text-[#475569]">
              Every modern application layer requires continuous, predictable operability. We cross-engineer development parameters from day one against standard service level frameworks, verifying structural logic before deployment pipelines execute.
            </motion.p>
            <motion.div variants={fadeLeft} className="pt-4 grid grid-cols-3 gap-4 border-t border-[#E2E8F0]">
              {STATS.map((s, i) => (
                <StatCounter
                  key={i}
                  value={s.value}
                  decimals={s.decimals}
                  suffix={s.suffix}
                  label={s.label}
                  accentClass={ACCENTS[s.accent].icon}
                />
              ))}
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ===================== SECTION 03: CORPORATE VALUE PILLARS ===================== */}
      <section className="py-20 lg:py-28 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
            <motion.div
              className="lg:col-span-1 space-y-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <span className="text-xs font-bold text-[#475569] uppercase tracking-widest font-body">03 / Execution Values</span>
              <h3 className="font-body text-2xl lg:text-xl font-extrabold text-[#0F172A]">Operational Framework Standards</h3>
            </motion.div>
            <motion.div
              className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger(0.14)}
            >
              {FRAMEWORK_PILLARS.map((pillar, idx) => {
                const PillarIcon = pillar.Icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden space-y-3 bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:border-[#CBD5E1] transition-shadow"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${ACCENTS[idx % 3].bar}`} />
                    <div className={`flex items-center gap-2 ${ACCENTS[idx % 3].icon}`}>
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.14 + 0.2, ease: 'backOut' }}
                      >
                        <PillarIcon className="w-4 h-4" />
                      </motion.div>
                      <span className="font-body font-bold text-[10px] uppercase tracking-wider text-[#475569]">Standard 0{idx + 1}</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#0F172A] font-body">{pillar.title}</h4>
                    <p className="text-xs text-[#475569] leading-relaxed">{pillar.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 04: PREMIUM CAPABILITIES GRID ===================== */}
      <section id="capabilities" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto w-full space-y-12">
          <motion.div
            className="max-w-2xl space-y-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest font-body">04 / Capability Verticals</span>
            <h2 className="font-body text-3xl font-extrabold tracking-tight text-[#0F172A]">Core Architecture Competencies</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger(0.13)}
          >
            {CAPABILITIES.map((cap, idx) => {
              const IconComponent = cap.Icon;
              const accent = ACCENTS[idx % 3];
              const Illustration = CAPABILITY_ILLUSTRATIONS[cap.illustration];
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] hover:shadow-lg hover:border-[#CBD5E1] flex flex-col group relative overflow-hidden transition-shadow"
                >
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${accent.bar} z-10`} />

                  {/* Illustration panel */}
                  <div className="h-28 sm:h-32 bg-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden">
                    <Illustration uid={idx} />
                  </div>

                  <div className="p-6 lg:p-7 flex flex-col justify-between flex-1 min-h-[220px]">
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <motion.div
                          className={`p-2.5 rounded-lg ${accent.iconBg} ${accent.icon} ${accent.hoverBg} group-hover:text-white transition-colors duration-200`}
                          whileHover={{ rotate: 12, scale: 1.08 }}
                        >
                          <IconComponent className="w-4 h-4" />
                        </motion.div>
                        <span className={`font-body text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full border ${accent.tagBorder} ${accent.tagText} bg-[#F8FAFC]`}>
                          {cap.tag}
                        </span>
                      </div>
                      <h3 className="font-body font-bold text-base text-[#0F172A] tracking-tight pt-2">{cap.title}</h3>
                      <p className="text-xs leading-relaxed text-[#475569]">{cap.body}</p>
                    </div>

                    <motion.div
                      className={`text-5xl font-extrabold font-body absolute bottom-2 right-4 select-none ${accent.tint}`}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                    >
                      {cap.ref}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===================== SECTION 05: CLOSURE & FOOTER COMBINED ===================== */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFFFF] to-[#F8FAFC]">
        <AmbientField />
        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger(0.12)}
        >
          <motion.span variants={fadeUp} className="text-xs font-bold text-[#2563EB] uppercase tracking-widest font-body block">
            05 / Engagement Portal
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-body text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            Let's construct a stable platform together.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm sm:text-base text-[#475569] max-w-lg mx-auto leading-relaxed">
            Share your technical limitations, architectural constraints, or upcoming software engineering milestones with us. Our senior engineering principles will review your baseline parameter goals objectively.
          </motion.p>
          <motion.div variants={fadeUp} className="pt-4">
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center font-body font-semibold text-xs uppercase tracking-wider bg-[#0F172A] text-white px-8 py-3.5 rounded-lg shadow-md hover:bg-[#1E293B] transition-colors"
            >
              Consult with an Architect
            </MotionLink>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <footer className="relative z-10 w-full max-w-7xl mx-auto mt-20 lg:mt-24 pt-10 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#475569]">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wider text-[#2563EB] font-body">KEYAN</span>
            <span className="text-[#CBD5E1]">|</span>
            <span>© 2026 Enterprise Architecture. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-[#475569]">
            <Link to="/privacy" className="hover:text-[#2563EB] transition-colors">Privacy Framework</Link>
            <Link to="/terms" className="hover:text-[#2563EB] transition-colors">Operational Terms</Link>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default About;