import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Boxes, Handshake, ArrowRight, ShieldCheck } from 'lucide-react';

// Image Assets (Relative paths matching your structure)
import H1 from '../../aessts/Photos/A9.png'; // Architectural background exterior image
import H2 from '../../aessts/Photos/A4.png'; // Team sitting together image
import WhoWeAre from './WhoWeAre';
import Services from './Services';
import CompanyPillars from './CompanyPillars';
import ProcessTimeline from './ProcessTimeline';
import TechStack from './TechStack';
import Footer from '../../Navbar/Footer';
import ClientLogos from './ClientLogos';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full bg-white antialiased mt-20 text-slate-900 font-sans">

      {/* SECTION 1: DARK PREMIUM HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#030a1c] via-[#091530] to-[#0d1f45] text-white pt-28 pb-28 overflow-hidden">

        {/* Decorative background layer */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-indigo-500/10 rounded-full blur-[140px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-7" data-aos="fade-right">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
                Keyan Software <br />
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                We build intelligent, scalable and future-ready software solutions
                that help businesses innovate, grow and succeed in the digital era.
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button className="group inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors duration-200 shadow-lg shadow-blue-500/20">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <button className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium text-sm px-6 py-3 rounded-xl transition-colors duration-200">
                  Our Services
                </button>
              </div>

              {/* Internal Inline Pillar Row Layout */}
              <div className="pt-7 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-700/40">
                <div className="flex gap-3">
                  <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Boxes className="w-4.5 h-4.5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Engineering Innovation</h5>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      We leverage the latest technologies to solve real business problems.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Handshake className="w-4.5 h-4.5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Delivering Excellence</h5>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Committed to quality, transparency and long-term partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Visual Mockup */}
            <div className="lg:col-span-6 relative" data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={H1}
                  className="w-full h-[420px] object-cover"
                  alt="Keyan Software Solutions headquarters exterior"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030a1c]/50 via-transparent to-transparent" />
              </div>

              {/* Floating credibility card */}
              <div
                className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-3 max-w-[230px]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">Trusted Delivery</p>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">
                    Enterprise-grade software, built to last.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE COMPONENT */}
      <WhoWeAre imageAsset={H2} />

<CompanyPillars />

      {/* SECTION 3: WHAT WE DO SERVICES MATRIX */}
      <Services />

      {/* SECTION 5: PROVEN DELIVERY CHANNELS TIMELINE */}
      <ProcessTimeline />

      {/* SECTION 6: CORE USED TECHNOLOGY BADGES ENGINE */}
      <TechStack />

      
      {/* SECTION 7: GLOBAL ENTERPRISE LOGOS SLIDER STRIP */}
      <ClientLogos />

      {/* SECTION 8: FULL SYSTEM SITEMAP CLOSURE FOOTER PANEL */}
      <Footer />

    </div>
  );
};

export default Home;