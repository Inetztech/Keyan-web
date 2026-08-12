import React from 'react';

const WhoWeAre = ({ imageAsset }) => {
  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs block">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0c1a30] leading-tight">
              Building Technology That <br />
              Powers Business <span className="text-blue-600">Growth</span>
            </h2>
            <div className="space-y-4 text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl">
              <p>
                Keyan Software Solutions Pvt Ltd is a technology-driven software development company 
                focused on delivering innovative digital products and enterprise solutions.
              </p>
              <p>
                Our team of passionate engineers, designers, solution architects and technology consultants 
                work together to transform ideas into scalable, secure and impactful software.
              </p>
            </div>

            {/* Stats Counter Divider Line Grid */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-slate-100">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#0c1a30]">150+</div>
                <p className="text-[11px] text-slate-400 font-medium tracking-wide mt-1">Projects Delivered</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#0c1a30]">80+</div>
                <p className="text-[11px] text-slate-400 font-medium tracking-wide mt-1">Happy Clients</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#0c1a30]">60+</div>
                <p className="text-[11px] text-slate-400 font-medium tracking-wide mt-1">Skilled Developers</p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#0c1a30]">6+</div>
                <p className="text-[11px] text-slate-400 font-medium tracking-wide mt-1">Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Right Side Image & Dark Quote Card Container Block */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-visible shadow-2xl bg-white p-2">
              <img 
                src={imageAsset} 
                className="w-full h-[400px] object-cover rounded-2xl" 
                alt="Keyan workspace insight" 
              />
              
              {/* Floating Quote Overlapping Card from image_47ba00.png and image_47ba1d.jpg */}
              <div className="absolute -bottom-6 -right-4 bg-[#091530] text-white p-6 rounded-2xl shadow-2xl max-w-xs border border-slate-800">
                <i className="fas fa-quote-left text-blue-500 text-2xl mb-2 block"></i>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  We don't just write code, we build solutions that create real business value.
                </p>
                <div className="text-[11px] text-blue-400 font-semibold mt-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-blue-500 inline-block"></span> Keyan Team
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;