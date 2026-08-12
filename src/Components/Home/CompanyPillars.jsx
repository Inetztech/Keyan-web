import React from 'react';
import { Target, Eye, Gem, Layers } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    content:
      'To empower businesses with innovative, reliable and scalable software solutions that improve efficiency and drive sustainable digital growth.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    content:
      'To become a globally trusted technology partner recognized for engineering excellence, innovation and customer success.',
  },
  {
    icon: Gem,
    title: 'Our Values',
    content : ['Customer First , Innovation ', 'Excellence , Integrity ', 'Collaboration ', 'Continuous Learning'],
  },
  {
    icon: Layers,
    title: 'Our Approach',
    content:
      'We combine strategic thinking, agile development and modern technologies to deliver solutions that are practical, reliable and future-ready.',
  },
];

const CompanyPillars = () => {
  return (
    <section className="bg-[#030a1c] text-white py-20 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-12 md:gap-x-12 lg:gap-x-0 divide-y md:divide-y lg:divide-y-0 lg:divide-x divide-slate-800/60">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isLgFirst = idx === 0;
            return (
              <div
                key={pillar.title}
                className={`flex flex-col items-start text-left space-y-4 pt-8 first:pt-0 md:pt-0 ${
                  isLgFirst ? '' : 'lg:pl-8'
                }`}
              >
                {/* Clean blue outline icon */}
                <div className="text-blue-400">
                  <Icon className="w-7 h-7 stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-100 tracking-wide">
                  {pillar.title}
                </h3>

                {/* Descriptive paragraph or structural list */}
                {pillar.content ? (
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                    {pillar.content}
                  </p>
                ) : (
                  <ul className="space-y-1 text-slate-400 text-xs sm:text-sm font-light">
                    {pillar.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyPillars;  