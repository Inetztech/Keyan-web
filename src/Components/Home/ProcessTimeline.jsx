import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/* ---------------------------------------------------------------------- */
/*  DATA                                                                   */
/* ---------------------------------------------------------------------- */

const STEPS = [
  { num: '01', title: 'Discover', icon: 'discover', desc: 'Understanding your business architecture, baseline metrics, and core growth challenges.' },
  { num: '02', title: 'Design',   icon: 'design',   desc: 'Engineering high-fidelity user journeys and robust, scalable system architecture blueprints.' },
  { num: '03', title: 'Develop',  icon: 'develop',  desc: 'Translating strategy into production-grade solutions using clean, optimized codebases.' },
  { num: '04', title: 'Test',     icon: 'test',     desc: 'Executing rigorous automated and manual QA to validate performance, security, and quality.' },
  { num: '05', title: 'Deploy',   icon: 'deploy',   desc: 'Orchestrating seamless continuous delivery pipelines with zero operational disruption.' },
  { num: '06', title: 'Support',  icon: 'building', desc: 'Providing proactive monitoring, iterative enhancements, and 24/7 post-launch architecture health.' },
];

/* ---------------------------------------------------------------------- */
/*  MAIN COMPONENT                                                         */
/* ---------------------------------------------------------------------- */

const ProcessTimeline = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Centered Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-[10px]">
              Execution Framework
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-white">
            Our Development Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            A linear operational model designed to minimize friction and turn complex technical complexity into predictable, high-value outcomes.
          </p>
        </div>

        {/* Central Vertical Stack Container */}
        <div className="relative">

          {/* Background Track Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 hidden sm:block transform md:-translate-x-1/2" />

          {/* Animated Active Laser Track Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-cyan-400 hidden sm:block transform md:-translate-x-1/2 origin-top z-10"
          />

          {/* Cards Stack */}
          <div className="space-y-16 relative">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col sm:flex-row items-start md:items-center relative w-full ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dynamic Glowing Node Dot Indicator */}
                  <NodeIndicator idx={idx} scrollYProgress={scrollYProgress} totalSteps={STEPS.length} />

                  {/* Graphic Column — replaces the old empty spacer */}
                  <div className="w-full md:w-1/2 hidden md:flex items-center justify-center h-40 lg:h-48">
                    <PhaseGraphic
                      type={step.icon}
                      idx={idx}
                      scrollYProgress={scrollYProgress}
                      totalSteps={STEPS.length}
                    />
                  </div>

                  {/* Card Element Block with Scroll Reveal Animation */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`w-full md:w-1/2 pl-12 sm:pl-16 md:pl-0 ${
                      isEven ? 'md:pl-12' : 'md:pr-12'
                    }`}
                  >
                    <div className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl transition-all duration-500 ease-out hover:bg-slate-800/80 hover:border-blue-500/40 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] hover:-translate-y-1">

                      <span className="absolute top-4 right-6 text-4xl font-black text-slate-700/20 tracking-tighter select-none transition-colors duration-300 group-hover:text-blue-500/10">
                        {step.num}
                      </span>

                      <div className="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-3 border border-blue-500/20 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                        Phase {step.num}
                      </div>

                      <h4 className="font-bold text-white text-lg tracking-tight mb-2 transition-colors duration-300 group-hover:text-blue-400">
                        {step.title}
                      </h4>

                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md transition-colors duration-300 group-hover:text-slate-300">
                        {step.desc}
                      </p>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

/* ---------------------------------------------------------------------- */
/*  NODE INDICATOR (unchanged behaviour)                                   */
/* ---------------------------------------------------------------------- */

const NodeIndicator = ({ idx, scrollYProgress, totalSteps }) => {
  const startActivation = idx / totalSteps;
  const activeDotColor = useTransform(
    scrollYProgress,
    [startActivation, startActivation + 0.05],
    ['rgb(30, 41, 59)', 'rgb(59, 130, 246)']
  );

  return (
    <motion.div
      style={{ backgroundColor: activeDotColor }}
      className="absolute left-4 md:left-1/2 top-6 md:top-auto w-4 h-4 rounded-full border-2 border-slate-700 shadow-[0_0_15px_rgba(59,130,246,0)] z-20 hidden sm:block transform md:-translate-x-1/2 transition-all duration-300 group-hover:scale-125"
    />
  );
};

/* ---------------------------------------------------------------------- */
/*  GRAPHIC WRAPPER — handles the "zoom into focus" scroll-linked reveal.  */
/*  Mimics a product-page camera push-in: graphic starts small/blurred,   */
/*  snaps sharply into focus as its phase reaches the centre line, then   */
/*  settles to a resting scale.                                           */
/* ---------------------------------------------------------------------- */

const PhaseGraphic = ({ type, idx, scrollYProgress, totalSteps }) => {
  const start = idx / totalSteps;

  const scale = useTransform(
    scrollYProgress,
    [start - 0.09, start + 0.02, start + 0.14],
    [0.5, 1.14, 1]
  );
  const blurPx = useTransform(
    scrollYProgress,
    [start - 0.09, start + 0.02],
    [10, 0]
  );
  const filter = useTransform(blurPx, (b) => `blur(${b}px)`);
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.11, start - 0.02],
    [0, 1]
  );

  return (
    <motion.div
      style={{ scale, filter, opacity }}
      className="relative w-40 h-40 lg:w-48 lg:h-48 flex items-center justify-center"
    >
      <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent border border-slate-800" />
      <div className="relative w-full h-full flex items-center justify-center p-4">
        {type === 'discover' && <IconDiscover idx={idx} />}
        {type === 'design' && <IconDesign idx={idx} />}
        {type === 'develop' && <IconDevelop idx={idx} />}
        {type === 'test' && <IconTest idx={idx} />}
        {type === 'deploy' && <IconDeploy idx={idx} />}
        {type === 'building' && <IconFutureBuilding idx={idx} />}
      </div>
    </motion.div>
  );
};

/* ---------------------------------------------------------------------- */
/*  ICON 01 — DISCOVER: sweeping radar + magnifier                        */
/* ---------------------------------------------------------------------- */

const IconDiscover = ({ idx }) => (
  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
    <defs>
      <radialGradient id={`radar-${idx}`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`sweep-${idx}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
      </linearGradient>
    </defs>

    {[46, 34, 22].map((r, i) => (
      <motion.circle
        key={r}
        cx="60" cy="60" r={r}
        stroke="#334155" strokeWidth="1"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
      />
    ))}

    <circle cx="60" cy="60" r="46" fill={`url(#radar-${idx})`} />

    <motion.g
      style={{ transformOrigin: '60px 60px' }}
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
    >
      <path d="M60 60 L60 14 A46 46 0 0 1 96 34 Z" fill={`url(#sweep-${idx})`} />
    </motion.g>

    <motion.g
      animate={{ x: [0, 4, 0], y: [0, -3, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <circle cx="52" cy="52" r="16" stroke="#93c5fd" strokeWidth="3" />
      <line x1="63" y1="63" x2="80" y2="80" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" />
    </motion.g>
  </svg>
);

/* ---------------------------------------------------------------------- */
/*  ICON 02 — DESIGN: isometric blueprint layers drawing themselves        */
/* ---------------------------------------------------------------------- */

const IconDesign = ({ idx }) => (
  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
    <defs>
      <linearGradient id={`plane-${idx}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05" />
      </linearGradient>
    </defs>

    {[0, 1, 2].map((layer) => (
      <motion.g
        key={layer}
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: -layer * 10, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: layer * 0.18, ease: 'easeOut' }}
      >
        <motion.path
          d="M20 70 L60 50 L100 70 L60 90 Z"
          fill={layer === 0 ? `url(#plane-${idx})` : 'transparent'}
          stroke="#818cf8"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: layer * 0.18, ease: 'easeInOut' }}
        />
      </motion.g>
    ))}

    <motion.circle
      r="3" fill="#22d3ee"
      initial={{ offsetDistance: '0%' }}
      animate={{ offsetDistance: ['0%', '100%'] }}
      style={{ offsetPath: `path('M20 50 L60 30 L100 50 L60 70 Z')` }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
    />
  </svg>
);

/* ---------------------------------------------------------------------- */
/*  ICON 03 — DEVELOP: code brackets with a blinking cursor                */
/* ---------------------------------------------------------------------- */

const IconDevelop = ({ idx }) => (
  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
    <motion.path
      d="M45 30 L20 60 L45 90"
      stroke="#3b82f6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    />
    <motion.path
      d="M75 30 L100 60 L75 90"
      stroke="#22d3ee" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
    />

    {[0, 1, 2].map((i) => (
      <motion.rect
        key={i}
        x={52} y={44 + i * 12} width={16 - i * 3} height="4" rx="2"
        fill="#64748b"
        initial={{ opacity: 0, x: 48 }}
        whileInView={{ opacity: 1, x: 52 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
      />
    ))}

    <motion.rect
      x="52" y="80" width="3" height="12" fill="#93c5fd"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  </svg>
);

/* ---------------------------------------------------------------------- */
/*  ICON 04 — TEST: shield drawing itself, then a check                    */
/* ---------------------------------------------------------------------- */

const IconTest = ({ idx }) => (
  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
    <defs>
      <linearGradient id={`shield-${idx}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
      </linearGradient>
    </defs>

    <motion.path
      d="M60 22 L92 34 V60 C92 82 78 96 60 102 C42 96 28 82 28 60 V34 Z"
      fill={`url(#shield-${idx})`}
      stroke="#38bdf8" strokeWidth="3" strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    />

    <motion.path
      d="M45 62 L56 73 L78 48"
      stroke="#a7f3d0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
    />

    <motion.circle
      cx="60" cy="62" r="42"
      stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.4"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
    />
  </svg>
);

/* ---------------------------------------------------------------------- */
/*  ICON 05 — DEPLOY: rocket with a flickering trail                       */
/* ---------------------------------------------------------------------- */

const IconDeploy = ({ idx }) => (
  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
    <defs>
      <linearGradient id={`flame-${idx}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </linearGradient>
    </defs>

    {[0, 1, 2].map((i) => (
      <motion.circle
        key={i}
        cx={60 + (i - 1) * 10} cy={95}
        r="2" fill="#93c5fd"
        initial={{ y: 0, opacity: 0.8 }}
        animate={{ y: [0, 22], opacity: [0.8, 0] }}
        transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.25, ease: 'easeOut' }}
      />
    ))}

    <motion.path
      d="M60 84 C50 90 46 96 48 104 C54 100 58 98 60 92 C62 98 66 100 72 104 C74 96 70 90 60 84 Z"
      fill={`url(#flame-${idx})`}
      animate={{ scaleY: [1, 1.25, 1] }}
      style={{ transformOrigin: '60px 84px' }}
      transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
    />

    <motion.g
      initial={{ y: 0 }}
      animate={{ y: [-3, 3, -3] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path
        d="M60 18 C74 30 76 52 70 76 L50 76 C44 52 46 30 60 18 Z"
        fill="#1e293b" stroke="#3b82f6" strokeWidth="2.5"
      />
      <circle cx="60" cy="42" r="7" fill="#0f172a" stroke="#22d3ee" strokeWidth="2.5" />
      <path d="M50 66 L36 82 L48 78 Z" fill="#334155" stroke="#3b82f6" strokeWidth="2" />
      <path d="M70 66 L84 82 L72 78 Z" fill="#334155" stroke="#3b82f6" strokeWidth="2" />
    </motion.g>
  </svg>
);

/* ---------------------------------------------------------------------- */
/*  ICON 06 — SUPPORT: the payoff. All prior phases resolve into a         */
/*  futuristic building — floors light up in sequence, a rooftop beacon    */
/*  pulses, and a holographic ring hovers above the completed structure.   */
/* ---------------------------------------------------------------------- */

const IconFutureBuilding = ({ idx }) => {
  const floors = [
    { y: 78, h: 14, w: 34, x: 43 },
    { y: 62, h: 16, w: 42, x: 39 },
    { y: 44, h: 18, w: 50, x: 35 },
    { y: 24, h: 20, w: 58, x: 31 },
  ];

  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id={`tower-${idx}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1e293b" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* ambient ground glow */}
      <motion.ellipse
        cx="60" cy="98" rx="34" ry="4" fill="#3b82f6" fillOpacity="0.25"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      {/* floors assembling bottom-to-top, in step with reveal */}
      {floors.map((f, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.18, ease: 'easeOut' }}
        >
          <rect x={f.x} y={f.y} width={f.w} height={f.h} rx="2" fill={`url(#tower-${idx})`} stroke="#38bdf8" strokeWidth="1.5" />
          {/* window lights */}
          {Array.from({ length: Math.floor(f.w / 8) }).map((_, wIdx) => (
            <motion.rect
              key={wIdx}
              x={f.x + 4 + wIdx * 8}
              y={f.y + f.h / 2 - 2}
              width="3" height="4" fill="#a7f3d0"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.8 + (wIdx % 3) * 0.4,
                repeat: Infinity,
                delay: i * 0.18 + wIdx * 0.12,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.g>
      ))}

      {/* rooftop beacon */}
      <motion.line
        x1="60" y1="24" x2="60" y2="12" stroke="#22d3ee" strokeWidth="2"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      />
      <motion.circle
        cx="60" cy="10" r="3" fill="#22d3ee"
        animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* hovering holographic ring — the "future" signature */}
      <motion.ellipse
        cx="60" cy="8" rx="16" ry="4"
        stroke="#818cf8" strokeWidth="1" fill="none"
        animate={{ rotate: 360, opacity: [0.2, 0.6, 0.2] }}
        style={{ transformOrigin: '60px 8px' }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  );
};

export default ProcessTimeline;