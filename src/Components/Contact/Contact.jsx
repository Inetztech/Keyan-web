import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Phone, MapPin, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

/**
 * Design System: "Professional Corporate Studio" (Strict Light Mode)
 * Matches the system architecture aesthetic using exact slate color maps, 
 * balanced content boxes, and clean full-viewport optimization.
 */

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    scope: 'Infrastructure Deployment',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 750, once: true, easing: 'ease-out-quad' });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for payload containment can be attached here
    setIsSubmitted(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="antialiased min-h-screen bg-[#FFFFFF] text-[#0F172A] mt-20 pt-24 pb-12 selection:bg-blue-100 selection:text-blue-800 font-body">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@1,9..144,400&display=swap');
            .font-body { font-family: 'Inter', sans-serif; }
            .font-serif-editorial { font-family: 'Fraunces', serif; font-style: italic; }
            .box-shadow-subtle {
              box-shadow: 0 15px 35px -10px rgba(15, 23, 42, 0.05);
            }
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-h-[80vh] flex flex-col justify-center">
        
        {/* ===================== HEADER ZONE ===================== */}
        <div className="max-w-3xl mb-12 space-y-4" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // INTAKE PORTAL</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Initiate an engineering <span className="font-serif-editorial font-normal text-[#1E40AF]">consultation.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#475569] max-w-2xl font-normal">
            Submit your structural platform constraints or application scaling targets. Our senior systems architects review operational parameters logically within 1 business day.
          </p>
        </div>

        {/* ===================== MAIN GRID PLATFORM ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
          
          {/* LEFT PANEL: CHANNELS & METRICS */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            
            {/* Direct Contact Cards Container */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 space-y-6 box-shadow-subtle">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#475569] border-b border-[#E2E8F0] pb-3">Communications Node</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#475569]">Systemic Inquiries</div>
                  <a href="mailto:architecture@keyan.com" className="text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors">architecture@keyan.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#475569]">Operations Hotline</div>
                  <a href="tel:+15550198" className="text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] transition-colors">+1 (555) 019-8231</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#475569]">HQ Coordinates</div>
                  <div className="text-sm font-semibold text-[#0F172A]">Enterprise Row, Tech District, Suite 900</div>
                </div>
              </div>
            </div>

            {/* SLA Response Assurance Box */}
            <div className="border border-[#E2E8F0] rounded-xl p-5 bg-[#FFFFFF] flex items-start gap-4 box-shadow-subtle">
              <ShieldCheck className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">SLA Response Guarantee</h4>
                <p className="text-xs text-[#475569] leading-relaxed mt-1">
                  All metrics submitted are securely isolated and funneled directly to active technology operators. Non-disclosure protocols execute automatically upon incoming payloads.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: TRANSACTIONAL FORM BLOCK */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl p-6 sm:p-8 box-shadow-subtle relative overflow-hidden">
              
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 bg-[#EFF6FF] text-[#2563EB] rounded-full flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A]">Payload Logged Successfully</h3>
                  <p className="text-xs text-[#475569] max-w-sm mx-auto">
                    Your architecture configuration request has passed baseline parameters. An engineer will sync coordinates shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-[#2563EB] border-b border-transparent hover:border-[#2563EB] pt-2"
                  >
                    Submit another deployment profile
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase text-[#475569]">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alexander Wright"
                        className="w-full text-xs px-4 py-3 border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#2563EB] bg-[#FFFFFF] transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase text-[#475569]">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. wright@organization.com"
                        className="w-full text-xs px-4 py-3 border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#2563EB] bg-[#FFFFFF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="organization" className="text-xs font-bold uppercase text-[#475569]">Organization</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        required
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="e.g. Inetz Technologies"
                        className="w-full text-xs px-4 py-3 border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#2563EB] bg-[#FFFFFF] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="scope" className="text-xs font-bold uppercase text-[#475569]">Architectural Scope</label>
                      <select
                        id="scope"
                        name="scope"
                        value={formData.scope}
                        onChange={handleInputChange}
                        className="w-full text-xs px-4 py-3 border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#2563EB] bg-[#FFFFFF] transition-colors cursor-pointer text-[#0F172A]"
                      >
                        <option value="Infrastructure Deployment">Distributed Infrastructure Build</option>
                        <option value="Data Telemetry">Intelligent Telemetry Frameworks</option>
                        <option value="Full Stack System">Full-Stack Application Pipeline</option>
                        <option value="General Consultation">General Architectural Evaluation</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase text-[#475569]">Systemic Requirements / Target Matrix</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Detail load budgets, computational stack constraints, or performance objectives safely..."
                      className="w-full text-xs px-4 py-3 border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#2563EB] bg-[#FFFFFF] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full group inline-flex items-center justify-center gap-2 bg-[#0F172A] text-white font-semibold text-xs py-3.5 rounded-lg shadow-md hover:bg-[#1E293B] transition-all active:scale-98 tracking-wider uppercase"
                  >
                    Transmit Configuration Profile
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;