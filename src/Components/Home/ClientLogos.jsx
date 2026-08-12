import React, { useState } from 'react';

import accenture from "../../aessts/clients/accenture.png"
import hcl from  "../../aessts/clients/hcl.png"
import infosys from "../../aessts/clients/infosys.png"
import microsoft from "../../aessts/clients/microsoft.png"
import tata from "../../aessts/clients/tata.webp"
import techmahindra from "../../aessts/clients/techMahindra.png"
import wipro from "../../aessts/clients/wipro.png"

const partners = [
  { name: 'TATA', logo: tata, caption: null, color: '#1B4ED8' },
  { name: 'Wipro', logo: wipro, caption: null, color: '#341A6E' },
  { name: 'Tech Mahindra', logo: techmahindra, caption: null, color: '#D2061F' },
  { name: 'Infosys', logo: infosys, caption: null, color: '#0B6CB3' },
  { name: 'Accenture', logo: accenture, caption: null, color: '#A100FF' },
  { name: 'HCL', logo: hcl, caption: null, color: '#0050A0' },
  { name: 'Microsoft', logo: microsoft, caption: 'Microsoft Partner', color: '#5E5E5E' },
];

const PartnerLogo = ({ partner }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group flex flex-col items-center justify-center gap-1 bg-white border border-slate-200/60 rounded-xl py-4 px-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      {!failed ? (
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          onError={() => setFailed(true)}
          className="h-15 w-auto max-w-[90%] object-contain group-hover:opacity-100 transition-all duration-300"
          loading="lazy"
        />
      ) : (
        <span
          style={{ color: partner.color }}
          className="text-sm sm:text-base font-black tracking-tighter uppercase text-center select-none opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        >
          {partner.name}
        </span>
      )}
      {partner.caption && (
        <span className="text-[9px] font-medium uppercase tracking-wide text-slate-400 text-center leading-none mt-1">
          {partner.caption}
        </span>
      )}
    </div>
  );
};

const ClientLogos = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#eef2fb] to-[#f6f8fd] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-left">

        {/* Heading */}
        <div className="space-y-1 mb-8">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-[10px] block">
            Trusted by Businesses Worldwide
          </span>
          <h3 className="text-xl font-extrabold text-[#0c1a30] tracking-tight">
            Our Clients & Partners
          </h3>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} partner={partner} />
          ))}
        </div>

      </div>

      
    </section>
  );
};

export default ClientLogos;