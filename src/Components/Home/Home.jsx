import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import H1 from '../../aessts/Photos/A9.png'
import H2 from '../../aessts/Photos/A4.png'
import H3 from '../../aessts/Photos/A21.jpg'
import H4 from '../../aessts/Photos/A20.jpg'
import H5 from '../../aessts/Photos/A18.jpg'
import H6 from '../../aessts/Photos/A1.png'
import H7 from '../../aessts/Photos/A6.jpg'
import H8 from '../../aessts/Photos/A8.jpg'
import H9 from '../../aessts/Photos/A7.jpg'
import H10 from '../../aessts/Photos/A5.jpg'

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [activeTab, setActiveTab] = useState('analytics');
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleArrowClick = (direction) => {
    const newIndex = (currentSlide + direction + 3) % 3;
    setCurrentSlide(newIndex);
  };

  return (
    <>
      <section className="hero-Section text-center mt-5 container">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-md-12 col-sm-12 col-12">
              <h2 className="hero-heading">Driving Growth with Future-Driven Solutions</h2>
              <p className="hero-subtext">
                We empower startups and businesses with next-gen digital strategies from AI-powered
                applications to scalable web and mobile platforms tailored for long-term success in a rapidly
                evolving tech world.
              </p>
              <button className="herobtn mt-3"> <Link to='/contact' className="a">Let's Talk</Link> <span className="sapnarrow">
                <i className="fa-solid fa-arrows-turn-to-dots"></i>
              </span>
              </button>
            </div>
            <section className="mt-1 pt-1">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-5">
                <div className="pic mt-5">
                  {/* <img src="./Photos/A9.png" data-aos="fade-up" data-aos-duration="3000" */}
                  <img src={H1} data-aos="fade-up" data-aos-duration="3000" alt="Dashboard Preview" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>



      <section className="container mt-5">
        <section className="why-head">
          <h1>What We Do – Future-Ready Services</h1>
        </section>
        <section className="head-click mt-2">
          <div className="row tabs-we">

            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
              <div className={`tab-we-1 tab-1 ${activeTab === 'analytics' ? 'active' : ''}`}
                onClick={() => setActiveTab('analytics')} data-tab="analytics"><i className="fa-brands fa-digital-ocean solutions"></i>
                Smart
                Digital Solutions</div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
              <div className={`tab-we-1 tab-2 ${activeTab === 'integration' ? 'active' : ''}`}
                onClick={() => setActiveTab('integration')} data-tab="integration"> <i className="fa-solid fa-forward solutions"></i> Next-Gen
                Cloud
                Enablement
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
              <div className={`tab-we-1 tab-3 ${activeTab === 'automation' ? 'active' : ''}`}
                onClick={() => setActiveTab('automation')} data-tab="automation"><i className="fa-solid fa-asterisk solutions"></i>AI-Driven
                Innovation</div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
              <div className={`tab-we-1 tab-4 ${activeTab === 'solutions' ? 'active' : ''}`}
                onClick={() => setActiveTab('solutions')} data-tab="solutions"><i className="fa-solid fa-shield solutions"></i> Secure
                Scalable
                Systemss</div>
            </div>

          </div>
        </section>
        <section>
          {activeTab === 'analytics' && (
            <div class="tab-content-1 analytics">
              <div className="row">
                <div className="col-xxl-6 col-cl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <section className="tab-craft">
                    <p>We craft agile, intelligent, and user-centric digital experiences that deliver measurable
                      value and
                      performance, security, and scalability.</p>
                    <ul>
                      <li>Tailored platforms designed to meet unique user experiences and business workflows
                      </li>
                      <li>Seamless connectivity across tools, services, and third-party systems for unified
                        operations.</li>
                      <li>Build once, scale endlessly—our systems are future-proof and adaptable to growth.
                      </li>
                      <li>From strategy and design to deployment and maintenance, we manage every step with
                        precision.</li>
                    </ul>
                  </section>
                </div>

                <div className="col-xxl-6 col-cl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <section className="tab-craft">
                    {/* <img src="./Photos/A8.jpg" className="img-fluid rounded shadow" alt="Smart Digital Solutions"> */}
                    <img src={H8} className="img-fluid rounded shadow" alt="Smart Digital Solutions" />
                  </section>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'integration' && (
            <div class="tab-content-1 integration">
              <div className="row">
                <div className="col-xxl-6 col-cl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <section className="tab-craft">
                    {/* <img src="./Photos/A7.jpg" className="img-fluid rounded shadow" alt="Smart Digital Solutions"> */}
                    <img src={H9} className="img-fluid rounded shadow" alt="Smart Digital Solutions" />
                  </section>
                </div>
                <div className="col-xxl-6 col-cl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <section className="tab-craft">
                    <p> We empower businesses to scale faster and work smarter with cloud-first strategies. Our
                      expertise
                      ensures.
                    </p>
                    <p>Smooth migration, real-time data accessibility, and automated DevOps workflows—delivering
                      secure,
                      scalable, and cost-efficient infrastructure that evolves with your business in a
                      fast-changing digital
                      environment.</p>
                  </section>
                </div>

              </div>
            </div>
          )}

          {activeTab === 'automation' && (
            <div class="tab-content-1 automation">
              <div className="row">
                <div className="col-xxl-6 col-cl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <section className="tab-craft">
                    <p>Harness the potential of artificial intelligence and machine learning to stay ahead of
                      the curve.we
                      build
                      intelligent solutions that automate tasks, predict outcomes, and drive smarter business
                      decisions with
                      ease.
                    </p>
                    <ul>
                      <li>.Automate repetitive workflows with smart algorithms.</li>
                      <li>Leverage predictive analytics for faster, data-driven insights.</li>
                    </ul>
                  </section>

                </div>
                <div className="col-xxl-6 col-cl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <section className="tab-craft">
                    {/* <img src="./Photos/A5.jpg" className="img-fluid rounded shadow" alt="Smart Digital Solutions"> */}
                    <img src={H10} className="img-fluid rounded shadow" alt="Smart Digital Solutions" />
                  </section>
                </div>

              </div>
            </div>
          )}

          {activeTab === 'solutions' && (
            <div class="tab-content-1 solutions">
              <div className="row">
                <div className="col-xxl-6 col-cl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <section className="tab-craft">
                    {/* <img src="./Photos/A6.jpg" className="img-fluid rounded shadow" alt="Smart Digital Solutions"> */}
                    <img src={H7} className="img-fluid rounded shadow" alt="Smart Digital Solutions" />
                  </section>
                </div>
                <div className="col-xxl-6 col-cl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <section className="tab-craft">
                    <p> We build enterprise-grade systems tailored for industries like fintech, healthcare, and
                      beyond—prioritizing security,compliance, and scalability. Our solutions are backed by
                      resilient
                      architecture.
                    </p>
                    <p> Designed to meet regulatory standards,ensuring long-term digital sustainability and
                      seamless
                      performance in high-demand, data-sensitive environments.</p>
                  </section>
                </div>
              </div>
            </div>
          )}
        </section>
      </section >


      <section className="admin-solutions-section py-5">
        <div className="container">
          <section className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="admin-solutions-1">
                {/* <img src="./Photos/A4.png" alt="Dashboard Preview" /> */}
                <img src={H2} alt="Dashboard Preview" />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="admin-solutions-1 mt-5">
                <h2 className="admin-heading">Tech Innovations We Deliver</h2>
                <p className="admin-text">
                  We specialize in delivering transformative tech innovations that redefine how businesses
                  operate. From
                  intelligent automation and AI-driven platforms to IoT-enabled systems and smart data
                  solutions, our
                  technologies are built to enhance efficiency, enable agility, and unlock new opportunities
                  in a
                  competitive digital landscape.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>


      <section className="quick-nav-section py-5 mt-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Quick Navigation to Smart Services</h2>
          <div className="row mb-4 g-4">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 ol-sm-12 col-12">
              <section className="Quick">
                <h4 className="Quick-1">Effortless Access to Key Services</h4>
                <p className="Quick-2">
                  Our platform is thoughtfully structured to provide seamless access to a wide range of
                  digital solutions.
                  From custom software development to AI-driven automation and cloud integration, every
                  service is organized
                  to help you quickly identify what suits your business needs. With an intuitive interface and
                  well-defined
                  categories, exploring our offerings is simple, efficient, and time-saving.
                </p>
              </section>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 ol-sm-12 col-12">
              <section className="Quick">
                <h4 className="Quick-1">Instant Connection & Expert Support</h4>
                <p className="Quick-2">
                  Beyond discovery, we make it easy for you to take the next step—whether it's launching a
                  project,
                  scheduling a consultation, or getting technical support. Our responsive team and smart
                  engagement tools
                  ensure you’re always one click away from meaningful assistance, helping you move from idea
                  to
                  implementation
                  without delay.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="container ">
        <section className="features-section py-5 mt-5">
          <div className="container">
            <h2 className="section-title text-center mb-5">Empowering Innovation Through a Tech-First Vision</h2>
            <div className="row g-4">
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="feature-box text-center">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-lightbulb " data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                      data-aos-delay="300" data-aos-offset="0"></i>
                  </div>
                  <h5>Vision-Led Development</h5>
                  <p>We align technology with business vision. Every solution we create begins with a deep
                    understanding of
                    your goals, ensuring that our digital strategies serve a greater purpose—long-term
                    growth
                    and market
                    leadership</p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="feature-box text-center">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-layer-group" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                      data-aos-delay="300" data-aos-offset="0"></i>
                  </div>
                  <h5>Modern Tech Stack Development</h5>
                  <p>From cloud-native infrastructure to AI and automation, we work with the latest and most
                    reliable
                    technologies.Our tech-first mindset ensures that your product is built on a foundation
                    of
                    speed,
                    scalability, and future-readiness.</p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="feature-box text-center">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-expand-arrows-alt" data-aos="fade-zoom-in"
                      data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0"></i>
                  </div>
                  <h5>Scalable & Resilient Systems</h5>
                  <p>We design systems to grow with you. Our architecture focuses on performance, stability,
                    and
                    adaptability—whether you're supporting 100 users or scaling to millions across global
                    markets.</p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="feature-box text-center">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-brain" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                      data-aos-delay="300" data-aos-offset="0"></i>
                  </div>
                  <h5>Intelligent, Data-Driven Solutions</h5>
                  <p>By embedding intelligence into our platforms, we enable businesses to work smarter. From
                    predictive
                    analytics to automation, our solutions are built to generate actionable insights and
                    reduce
                    manual effort.
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="feature-box text-center">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-shield-alt" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                      data-aos-delay="300" data-aos-offset="0"></i>
                  </div>
                  <h5>Security at Every Layer</h5>
                  <p>With built-in security best practices and a proactive approach to compliance, we ensure
                    your
                    data and
                    operations are protected at all times—no matter how complex your digital environment.
                  </p>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="feature-box text-center">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-rocket" data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                      data-aos-delay="300" data-aos-offset="0"></i>
                  </div>
                  <h5>Agile, Transparent Delivery</h5>
                  <p>We follow agile methodologies to keep you in the loop, every step of the way. Fast
                    iterations, clear
                    communication,and a commitment to collaboration result in solutions that are not just
                    delivered—but
                    delivered right.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <section className="testimonial-slider-1 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                <h2 className="section-heading">Featured Future Your Growth</h2>
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="nav-arrows">
                  <span className="arrow" onClick={() => handleArrowClick(-1)}><i className="fa-solid fa-arrow-right"></i></span>
                  <span className="arrow" onClick={() => handleArrowClick(1)}><i className="fa-solid fa-arrow-left"></i></span>
                </div>
              </div>
            </div>

            <section className={`mt-3 testimonial-slide-1 z-1 ${currentSlide === 0 ? 'active' : 'd-none'}`}>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                  {/* <img src="./Photos/H-1.jpg" alt="Emily Rodrik" className="testimonial-img" /> */}
                  <img src={H5} alt="photo" className="testimonial-img" />

                </div>
                <div className=" col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  <section className="test-1">
                    <h3 className="testimonial-heading">Enterprise-Focused</h3>
                    <p className="quote">"We partner with enterprises to engineer forward-thinking digital
                      ecosystems that evolve with business demands. Our strategic tech roadmaps, built on
                      emerging technologies,
                      ensure long-term scalability, competitive advantage, and measurable impact across
                      industries."</p>
                  </section>
                </div>
              </div>
            </section>

            <section className={`mt-3 testimonial-slide-1 z-2 ${currentSlide === 1 ? 'active' : 'd-none'}`} >
              <div className="row">
                <div className=" col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  {/* <img src="./Photos/H-2.jpg" alt="photo" className="testimonial-img" /> */}
                  <img src={H4} alt="photo" className="testimonial-img" />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                  <section className="test-1">
                    <h3 className="testimonial-heading">Startup & Innovation-Focused</h3>
                    <p className="quote">"For growing startups and disruptors, we deliver future-proof platforms
                      designed for
                      rapid
                      scale. By combining agility with innovation, we help you launch faster, adapt to
                      market shifts, and
                      build
                      a strong foundation
                      for sustainable success."</p>
                  </section>

                </div>
              </div>
            </section>


            <section className={`mt-3 testimonial-slide-1 z-3 ${currentSlide === 2 ? 'active' : 'd-none'}`}>
              <div className="row">
                <div className=" col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                  {/* <img src="./Photos/mentor.png"  className="testimonial-img" /> */}
                  <img src={H3} alt="photo" className="testimonial-img object-fit-cover" />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                  <section className="test-1">
                    <h3 className="testimonial-heading">Industry-Specific Solutions</h3>
                    <p className="quote">"we craft specialized digital solutions that align with regulatory
                      standards and market
                      demands.Our industry insight, combined with robust technology,helps businesses
                      future-proof their
                      operations while
                      maximizing engagement."</p>
                  </section>

                </div>
              </div>
            </section>
          </div>
        </section>
      </section>


      <section className="pricing-section py-5 mt-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Elevate your workforce efficiency</h2>
          <div className="row g-4">
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 ">
              <div className="pricing-card text-center">
                <div className="feature-icon mb-3">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4>Streamlined Processes with Intelligent Automation</h4>
                <p>
                  We eliminate manual inefficiencies by implementing smart automation across workflows. This
                  reduces
                  operational
                  overhead and allows your team to focus on strategic, high-impact tasks.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 ">
              <div className="pricing-card featured text-center">
                <div className="feature-icon mb-3">
                  <i className="fas fa-users-cog"></i>
                </div>
                <h4>Seamless Collaboration Through Unified Platforms</h4>
                <p>
                  Our solutions centralize communication, data, and tools—ensuring teams work together in real
                  time with
                  clarity
                  and purpose. No more silos, just smooth, synchronized execution.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 ">
              <div className="pricing-card text-center">
                <div className="feature-icon mb-3">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Real-Time Insights for Smarter Decisions</h4>
                <p>
                  We equip your workforce with dashboards, analytics, and reporting tools that offer real-time
                  visibility into performance—helping teams make fast, informed decisions with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="analytics-wrapper">
        <div className="analytics-box">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="analytics-text">
                <h1 className="main-heading">Let’s shape tomorrow</h1>
                <p>Ready to build what’s next? Whether you're launching a new product, modernizing legacy
                  systems, or
                  scaling your digital vision—we’re here to innovate with you. Let’s turn your ideas into
                  impactful
                  solutions and
                  shape a smarter, tech-powered future together</p>
                <button>Let's Get Started</button>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="analytics-image">
                {/* <img src="./Photos/A1.png" alt="Analytics Graphic" /> */}
                <img src={H6} alt="Analytics Graphic" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <section className="last">
        <span style={{ textAlign: 'center', fontSize: '18px', fontWeight: 500 }}>© 2025 Keyan. All rights reserved.</span>
      </section>
    </>
  )
}
export default Home;