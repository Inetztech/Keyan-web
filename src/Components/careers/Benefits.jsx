import { motion } from 'framer-motion';

/* ---------------------------------------------------------------------- */
/*  DUOTONE IMAGE TILE (Shared UI Primitive)                             */
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
/*  ANIMATION TOKENS                                                      */
/* ---------------------------------------------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = (gap = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

/* ---------------------------------------------------------------------- */
/*  MAIN EXPORT COMPONENT                                                 */
/* ---------------------------------------------------------------------- */
const Benefits = ({ benefits, accents, images }) => {
  return (
    <section id="benefits" className="relative py-16 sm:py-24 lg:py-32 bg-white overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:h-[75vh]">
          
          {/* LEFT PANEL: CONTENT & GRID */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full order-2 lg:order-1">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger(0.06)}
              className="w-full"
            >
              {/* Overline & Heading Label */}
              <motion.span variants={fadeUp} className="text-xs font-bold text-[#2563EB] uppercase tracking-widest font-body block mb-2">
                What You Get
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-body text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-8 lg:mb-12 max-w-xl">
                Benefits built for people doing serious work.
              </motion.h2>

              {/* Benefits Core Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, idx) => {
                  const BenefitIcon = b.Icon;
                  const accent = accents[idx % 3];
                  return (
                    <motion.div
                      key={idx}
                      variants={fadeUp}
                      whileHover={{ y: -3 }}
                      className="flex gap-4 p-4 rounded-xl border border-[#E2E8F0] bg-white hover:border-[#CBD5E1] hover:shadow-sm transition-all duration-200"
                    >
                      {/* Icon Container */}
                      <div className={`shrink-0 p-2.5 h-9 w-9 flex items-center justify-center rounded-lg ${accent.iconBg} ${accent.icon}`}>
                        <BenefitIcon className="w-4 h-4" />
                      </div>
                      
                      {/* Description Copy */}
                      <div className="space-y-1">
                        <h4 className="font-body font-bold text-sm text-[#0F172A] tracking-tight">
                          {b.title}
                        </h4>
                        <p className="text-xs text-[#475569] leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* RIGHT PANEL: VISUAL IMAGING ARTWORK */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 h-64 sm:h-80 lg:h-full w-full order-1 lg:order-2"
          >
            <DuotoneTile
              src={images.benefits}
              alt="Team member at their workstation showcasing corporate environment"
              accentHex="#0F9D8C"
              position="center 25%"
              className="w-full h-full rounded-2xl shadow-md image-frame-shadow"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;