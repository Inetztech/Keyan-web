import React, { useEffect, useRef, useState } from 'react';
import {
  GraduationCap, Building2, Mic, ArrowRight, ChevronRight,
  Users, KeyRound, Headphones, TrendingUp, ShieldCheck,
  BedDouble, Wallet, Wrench, FileAudio, BarChart3, Sparkles, Briefcase, ExternalLink
} from 'lucide-react';
import img from "../aessts/products/img.png";

/* ---------------- helpers ---------------- */

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useCountUp(target, inView, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    let raf;
    const step = (t) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
}

/* ---------------- data ---------------- */

const PRODUCTS = [
  {
    id: 'inetz',
    index: '01',
    theme: 'light',
    reverse: false,
    icon: GraduationCap,
    domain: 'internshiptraininginchennai.com',
    liveUrl: 'https://www.internshiptraininginchennai.com/',
    eyebrow: 'Internship platform',
    name: 'INetz',
    tagline: 'Where students find real internships, and companies find them faster.',
    description:
      "INetz connects students to verified internships and gives employers one pipeline to run the entire process, from the first post to the signed offer. No spreadsheets, no cold applications lost in an inbox.",
    features: [
      { icon: Briefcase, title: 'Verified listings', text: "Every internship is checked before it goes live, so students aren't chasing dead links or fake postings." },
      { icon: Users, title: 'One shared pipeline', text: 'Employers move applicants through review, interview, and offer without switching tools.' },
      { icon: TrendingUp, title: 'Smart shortlisting', text: 'Resumes are automatically ranked against role requirements, so reviewers start with the strongest fits.' },
    ],
    stats: [
      { value: 12000, suffix: '+', label: 'Internships posted' },
      { value: 340, suffix: '+', label: 'Partner companies' },
      { value: 92, suffix: '%', label: 'Roles filled within 30 days' },
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'INetz Internship Platform',
  },
  {
    id: 'hms',
    index: '02',
    theme: 'dark',
    reverse: true,
    icon: Building2,
    domain: 'brindhavanamhostels.com',
    liveUrl: 'https://www.brindhavanamhostels.com/',
    eyebrow: 'Facilities platform',
    name: 'Hostel Management System',
    tagline: 'Every room, every fee, every request — run from a single dashboard.',
    description:
      'The Hostel Management System gives hostel and PG operators real-time visibility into occupancy, fees, and maintenance. Wardens stop chasing paperwork and start managing the building from wherever they are.',
    features: [
      { icon: BedDouble, title: 'Live occupancy', text: 'See exactly which beds are filled, vacant, or under maintenance across every block, updated in real time.' },
      { icon: Wallet, title: 'Fee tracking', text: 'Collect payments, send reminders, and flag overdue accounts automatically.' },
      { icon: Wrench, title: 'Maintenance requests', text: 'Residents log issues directly; staff get alerts and can close them out from the same screen.' },
    ],
    stats: [
      { value: 180, suffix: '+', label: 'Hostels onboarded' },
      { value: 65000, suffix: '+', label: 'Beds managed' },
      { value: 40, suffix: '%', label: 'Less time on manual admin' },
    ],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Hostel Management System',
  },
  {
    id: 'ai-voice-interview',
    index: '03',
    theme: 'light',
    reverse: false,
    icon: Mic,
    domain: 'aivoiceinterview.io',
    liveUrl: null,
    eyebrow: 'Hiring & assessment',
    name: 'AI Voice Interview',
    tagline: 'AI voice interviews that scale your hiring without losing the human read.',
    description:
      'AI Voice Interview lets candidates interview by voice with an AI interviewer on their own schedule. Every session is transcribed and scored against your role criteria, so recruiters review a scorecard instead of scrubbing through recordings.',
    features: [
      { icon: Headphones, title: 'Interview anytime', text: 'Candidates complete a natural, spoken interview whenever it suits them, no scheduling back-and-forth.' },
      { icon: FileAudio, title: 'Live transcription', text: 'Every answer is transcribed and time-stamped as the interview happens.' },
      { icon: BarChart3, title: 'Structured scoring', text: 'Responses are scored against the criteria you set, giving every candidate a consistent, defensible evaluation.' },
    ],
    stats: [
      { value: 50000, suffix: '+', label: 'Interviews conducted' },
      { value: 70, suffix: '%', label: 'Faster time-to-shortlist' },
      { value: 4.8, suffix: '/5', label: 'Candidate experience rating' },
    ],
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'AI Voice Interview Engine',
  },
];

/* ---------------- LIVE IFRAME BROWSER FRAME ---------------- */

function BrowserFrame({ domain, image, liveUrl, alt, dark }) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg border transition-all duration-300 ${
      dark ? 'border-blue-800/80 bg-blue-900/40' : 'border-slate-200/90 bg-white shadow-slate-200/60'
    }`}>
      {/* Top Browser URL Bar */}
      <div className={`flex items-center justify-between px-3 py-1.5 border-b flex-none ${
        dark ? 'bg-blue-900/90 border-blue-800' : 'bg-slate-100/90 border-slate-200'
      }`}>
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="w-2 h-2 rounded-full bg-red-400/90 flex-none" />
          <span className="w-2 h-2 rounded-full bg-amber-400/90 flex-none" />
          <span className="w-2 h-2 rounded-full bg-green-400/90 flex-none" />
          <div className={`ml-2 rounded px-2.5 py-0.5 text-[11px] truncate font-mono ${
            dark ? 'bg-blue-950/80 text-blue-300' : 'bg-white text-slate-500 border border-slate-200'
          }`}>
            {domain}
          </div>
        </div>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded transition-all no-underline ${
              dark
                ? 'bg-blue-800 text-blue-200 hover:bg-blue-700'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            <span>Open Site</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        )}
      </div>

      {/* Embedded Live Website / Fallback Image */}
      <div className="relative aspect-[16/10] max-h-[260px] sm:max-h-[300px] lg:max-h-[320px] w-full overflow-hidden bg-white">
        {liveUrl ? (
          <iframe
            src={liveUrl}
            title={alt}
            className="w-full h-full border-0"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

function Hero() {
  const [ref, inView] = useInView(0.1);
  return (
    <section ref={ref} className="relative mt-16 overflow-hidden bg-blue-950 py-16 sm:py-20 lg:py-28 min-h-[90vh] flex items-center justify-center border-b border-blue-900/50">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
          alt="Team collaborating"
          className="w-full h-full object-cover opacity-15 kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/95 to-blue-900/90" />
        <div className="blob blob-a" />
        <div className="blob blob-b" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Equal size 6-column layout for text */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className={`fade-up ${inView ? 'in' : ''}`}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-300 bg-blue-900/60 border border-blue-700/60 rounded-full px-4 py-1.5 shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-400" /> Software studio
              </span>
            </div>

            <h1 className={`fade-up delay-1 ${inView ? 'in' : ''} mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight`}>
              Three products.<br className="hidden sm:block" /> Three real systems in production.
            </h1>

            <p className={`fade-up delay-2 ${inView ? 'in' : ''} mt-5 text-sm sm:text-base text-blue-200/90 max-w-xl leading-relaxed`}>
              INetz gets students into internships. The Hostel Management System runs the building they live in. AI Voice Interview gets them hired. We build all three.
            </p>

            <div className={`fade-up delay-3 ${inView ? 'in' : ''} mt-8 flex flex-wrap items-center gap-4`}>
              <a href="#inetz" className="group inline-flex items-center gap-2.5 bg-white text-blue-950 font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-all shadow-lg no-underline">
                <span>Explore products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2.5 border border-blue-700/80 text-blue-100 font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-blue-900/60 transition-all no-underline">
                <span>Talk to us</span>
              </a>
            </div>
          </div>

          {/* Equal size 6-column layout for image */}
          <div className={`lg:col-span-6 fade-up delay-4 ${inView ? 'in' : ''}`}>
            <div className="bg-blue-900/30 border border-blue-800/80 rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-2xl overflow-hidden">
              <img 
                src={img} 
                alt="Products Preview" 
                className="w-full max-h-[460px] lg:max-h-[520px] rounded-xl object-cover shadow-inner" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function StatBlock({ value, suffix, label, dark, inView }) {
  const isDecimal = !Number.isInteger(value);
  const count = useCountUp(isDecimal ? value * 10 : value, inView);
  const display = isDecimal ? (count / 10).toFixed(1) : count.toLocaleString();
  return (
    <div className="min-w-0">
      <p className={`text-lg sm:text-xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
        {display}
        <span className={dark ? 'text-blue-400' : 'text-blue-600'}>{suffix}</span>
      </p>
      <p className={`mt-0.5 text-[10px] font-medium ${dark ? 'text-blue-300' : 'text-slate-500'}`}>{label}</p>
    </div>
  );
}

function ProductSection({ product }) {
  const [ref, inView] = useInView(0.15);
  const dark = product.theme === 'dark';
  const Icon = product.icon;

  return (
    <section
      id={product.id}
      ref={ref}
      className={`relative py-8 lg:py-10 border-b z-10 ${
        dark ? 'bg-blue-950 border-blue-900/60 text-white' : 'bg-white border-slate-100 text-slate-900'
      }`}
    >
      {dark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="blob blob-c" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:24px_24px] opacity-40" />
        </div>
      )}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          <div className={`lg:col-span-6 flex flex-col fade-side ${product.reverse ? 'from-right lg:order-2' : 'from-left lg:order-1'} ${inView ? 'in' : ''}`}>
            <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase mb-1 ${dark ? 'text-blue-400' : 'text-blue-600'}`}>
              <Icon className="w-3.5 h-3.5" />
              <span>{product.eyebrow}</span>
            </div>

            <h2 className={`text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>
              {product.name}
            </h2>

            <p className={`text-[11px] sm:text-xs leading-relaxed mb-3 ${dark ? 'text-blue-200/80' : 'text-slate-600'}`}>
              {product.description}
            </p>

            <div className="w-full">
              <BrowserFrame
                domain={product.domain}
                image={product.image}
                liveUrl={product.liveUrl}
                alt={product.imageAlt}
                dark={dark}
              />
            </div>
          </div>

          <div className={`lg:col-span-6 flex flex-col justify-center fade-side ${product.reverse ? 'from-left lg:order-1' : 'from-right lg:order-2'} ${inView ? 'in' : ''}`}>
            <p className={`text-xs sm:text-sm font-semibold leading-snug ${dark ? 'text-blue-200' : 'text-blue-600'}`}>
              {product.tagline}
            </p>

            <div className="mt-4 space-y-2.5">
              {product.features.map((f) => {
                const FIcon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-2.5">
                    <div className={`w-6 h-6 rounded flex items-center justify-center flex-none mt-0.5 border ${
                      dark ? 'bg-blue-900/60 border-blue-700 text-blue-300' : 'bg-blue-50 border-blue-100 text-blue-600'
                    }`}>
                      <FIcon className="w-3 h-3" />
                    </div>
                    <div className="min-w-0">
                      <p className={`font-bold text-xs ${dark ? 'text-white' : 'text-slate-900'}`}>{f.title}</p>
                      <p className={`text-[11px] leading-normal ${dark ? 'text-blue-200/70' : 'text-slate-500'}`}>{f.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={`mt-4 grid grid-cols-3 gap-2 pt-3 border-t ${dark ? 'border-blue-900/80' : 'border-slate-100'}`}>
              {product.stats.map((s) => (
                <StatBlock key={s.label} value={s.value} suffix={s.suffix} label={s.label} dark={dark} inView={inView} />
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className={`group inline-flex items-center gap-1.5 font-semibold text-xs px-4 py-2 rounded-lg transition-all shadow-sm no-underline ${
                  dark ? 'bg-white text-blue-950 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <span>See {product.name} in action</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function TrustBand() {
  const [ref, inView] = useInView(0.2);
  const items = [
    { icon: ShieldCheck, label: 'Verified & secure' },
    { icon: Users, label: 'Built for real teams' },
    { icon: KeyRound, label: 'Role-based access' },
    { icon: TrendingUp, label: 'Scales with you' },
  ];
  return (
    <section ref={ref} className="bg-blue-50/70 py-4 border-b border-blue-100 z-10 relative">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-3 fade-up ${inView ? 'in' : ''}`}>
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div key={it.label} className="flex items-center gap-2 justify-center sm:justify-start min-w-0">
              <Icon className="w-3.5 h-3.5 text-blue-600 flex-none" />
              <span className="text-xs font-semibold text-slate-800 truncate">{it.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CTA() {
  const [ref, inView] = useInView(0.2);
  return (
    <section id="contact" ref={ref} className="relative bg-blue-950 py-12 sm:py-14 overflow-hidden z-10 text-center">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/95 to-blue-900/90" />
      </div>

      <div className={`relative max-w-2xl mx-auto px-4 sm:px-6 z-10 fade-up ${inView ? 'in' : ''}`}>
        <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">Have a system in mind?</h2>
        <p className="mt-2 text-blue-200/90 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
          We take on a small number of builds at a time. Tell us what you're trying to run, and we'll tell you honestly if we're a fit.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          <a href="mailto:hello@anvil.dev" className="inline-flex items-center gap-1.5 bg-white text-blue-950 font-semibold text-xs px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-all shadow-md no-underline">
            <span>hello@anvil.dev</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <span className="text-blue-300 text-xs font-medium">or call +1 (415) 555-0134</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- root ---------------- */

export default function ProductsPage() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }} className="bg-white w-full overflow-x-hidden text-slate-900">
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px);} to { opacity:1; transform:translateY(0);} }
        .fade-up { opacity:0; }
        .fade-up.in { animation: fadeUp .5s ease forwards; }
        .fade-up.delay-1.in { animation-delay:.08s; }
        .fade-up.delay-2.in { animation-delay:.15s; }
        .fade-up.delay-3.in { animation-delay:.22s; }
        .fade-up.delay-4.in { animation-delay:.3s; }

        @keyframes fadeSideL { from { opacity:0; transform:translateX(-16px);} to { opacity:1; transform:translateX(0);} }
        @keyframes fadeSideR { from { opacity:0; transform:translateX(16px);} to { opacity:1; transform:translateX(0);} }
        .fade-side { opacity:0; }
        .fade-side.from-left.in { animation: fadeSideL .5s ease forwards; }
        .fade-side.from-right.in { animation: fadeSideR .5s ease forwards; }

        @keyframes kenburns { 0% { transform:scale(1); } 100% { transform:scale(1.08); } }
        .kenburns { animation: kenburns 20s ease-in-out infinite alternate; }

        .blob { position:absolute; border-radius:9999px; filter: blur(80px); opacity:0.3; pointer-events:none; }
        .blob-a { width:280px; height:280px; background:#2563eb; top:-80px; left:-80px; }
        .blob-b { width:260px; height:260px; background:#1d4ed8; bottom:-100px; right:-80px; }
        .blob-c { width:280px; height:280px; background:#1d4ed8; top:30%; right:-100px; opacity:0.2; }

        @media (prefers-reduced-motion: reduce) {
          .fade-up, .fade-side { opacity:1 !important; animation:none !important; }
          .kenburns { animation:none !important; }
        }
      `}</style>

      <Hero />
      {PRODUCTS.map((p, i) => (
        <React.Fragment key={p.id}>
          <ProductSection product={p} />
          {i === 0 && <TrustBand />}
        </React.Fragment>
      ))}
      <CTA />
    </div>
  );
}