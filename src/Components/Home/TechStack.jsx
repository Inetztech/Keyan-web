import React, { useEffect, useRef, useState } from 'react';

// Devicon (jsDelivr) is used for accurate, official multi-color logos.
// Power BI isn't in Devicon, so it falls back to Simple Icons' CDN.
const stack = [
  { label: 'React', bg: '#E6FAFE', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { label: 'Angular', bg: '#FDE8EA', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { label: 'Node.js', bg: '#E8F5E9', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { label: 'Java', bg: '#FFF3E0', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { label: '.NET', bg: '#EFE9FC', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { label: 'Python', bg: '#E8F0F8', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { label: 'AWS', bg: '#FFF4E3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { label: 'Azure', bg: '#E5F2FC', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { label: 'Docker', bg: '#E6F2FD', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { label: 'Kubernetes', bg: '#E9EEFC', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
  { label: 'Flutter', bg: '#E3F0F8', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { label: 'Power BI', bg: '#FEF8E3', src: 'https://cdn.simpleicons.org/powerbi/F2C811' },
];

const TechCard = ({ tech, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: visible ? `${(index % 12) * 45}ms` : '0ms',
        transform: visible ? 'translateY(0)' : 'translateY(14px)',
        opacity: visible ? 1 : 0,
      }}
      className="group flex flex-col items-center justify-center gap-2.5 rounded-xl bg-white px-3 py-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-slate-300"
    >
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
      >
        <img
          src={tech.src}
          alt={`${tech.label} logo`}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-[11px] font-medium text-slate-500 text-center leading-none">
        {tech.label}
      </span>
    </div>
  );
};

const TechStack = () => {
  return (
    <section className="py-16 bg-white text-slate-900 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="space-y-1 mb-10">
          <span className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-wider uppercase text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Technologies We Use
          </span>
          <h2 className="text-3xl font-extrabold text-[#0c1a30] tracking-tight">
            Modern <span className="text-blue-600">Technologies.</span>{' '}
            Future-Ready Solutions.
          </h2>
        </div>

        {/* Logo grid — animated as a continuous marquee */}
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-max animate-[marquee_35s_linear_infinite] gap-3">
            {[...stack, ...stack].map((tech, idx) => (
              <div key={idx} className="w-[110px] flex-shrink-0">
                <TechCard tech={tech} index={idx} />
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;