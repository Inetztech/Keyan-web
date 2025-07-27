import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import A1 from '../../aessts/Photos/A19.png'


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="who-we-are-section  container">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <section className="about-1">
                <div>
                  <h2>Who We Are</h2>
                  <p>
                    We are a forward-thinking technology company committed to delivering innovative digital solutions that
                    empower businesses across industries.With a team of experienced professionals, we focus on driving
                    transformation through cutting-edgetechnologies
                    and customer-centric strategies.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>




      <section className="container mt-5 m">
        <div className="row ">
          <div className=" col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12  mb-4 mb-md-0">
            <section className="about-2">
              {/* <img src="./images/A12.png" alt="Mission Vision Image" /> */}
              <img src={A1} alt="Mission Vision Image" />
            </section>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <section className="about-2">
              <h2>Our Mission & Vision</h2>
              <p>
                To enable organizations to achieve operational excellence and sustainable growth through advanced
                technological solutions.
                To be a global leader in digital innovation, transforming challenges into opportunities with integrity,
                creativity, and impact.
              </p>
              <button> <Link to="/contact">Lets Go</Link></button>
            </section>
          </div>
        </div>
      </section>



      <section className="mt-5">
        <section className="section  container mt-5 " data-aos="fade-up">
          <div className="container">
            <h2 className="section-title mb-4">Our Core Values</h2>
            <marquee behavior="scroll" direction="left" scrollamount="4">
              <div className="d-flex justify-content-center align-items-center gap-5 px-5">
                <div className="core-value-card">
                  <p className="fw-bold text-dark m-0">Innovation</p>
                </div>

                <div className="core-value-card">
                  <p className="fw-bold text-dark m-0">Integrity</p>
                </div>

                <div className="core-value-card">
                  <p className="fw-bold text-dark m-0">Collaboration</p>
                </div>

                <div className="core-value-card">
                  <p className="fw-bold text-dark m-0">Excellence</p>
                </div>

                <div className="core-value-card">
                  <p className="fw-bold text-dark m-0">Customer Focus</p>
                </div>

                <div className="core-value-card">
                  <p className="fw-bold text-dark m-0">Accountability</p>
                </div>

                <div className="core-value-card">
                  <p className="fw-bold text-dark m-0">Sustainability</p>
                </div>
              </div>
            </marquee>
          </div>
        </section>
      </section>


      <section className="what-we-provide-section mt-5 container">
        <div className="container">
          <h2 className="section-title">What We Provide</h2>
          <section className="mt-5">
            <div className="row">
              <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                <div className="service-left">
                  <h3><span>01</span> Comprehensive Digital Solutions for a Smarter Tomorrow</h3>
                  <p>
                    We offer a wide range of technology-driven services tailored to meet evolving business needs. From
                    custom
                    software development and cloud integration to AI-powered solutions and digital transformation
                    consulting,
                    our offerings are designed to accelerate growth, enhance efficiency, and ensure long-term success for
                    our
                    clients.
                  </p>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <div className="service-right">
                  <div className="icon-box">
                    <i className="fa-solid fa-bolt icon-box"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section className="mt-5">
            <div className="row">
              <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                <div className="service-left">
                  <h3><span>02</span> Driving Performance Through Data and Innovation</h3>
                  <p>
                    We help businesses scale strategically by optimizing operations, enhancing user experiences, and
                    leveraging data to fuel continuous growth.
                  </p>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <div className="service-right">
                  <div className="icon-box">
                    <i className="fa-solid fa-asterisk icon-box"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section className="mt-5">
            <div className="row">
              <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                <div className="service-left">
                  <h3><span>03</span> Crafting Experiences That Resonate</h3>
                  <p>
                    Our creative team blends design thinking with brand strategy to deliver compelling visual identities,
                    intuitive UI/UX, and cohesive storytelling.
                  </p>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                <div className="service-right">
                  <div className="icon-box">
                    <i className="fa-solid fa-share icon-box"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="py-5 bg-light mt-5 container">
        <div className="container">
          <h2 className="mb-5 fw-bold section-title" data-aos="fade-up">How We Work</h2>
          <div className="row g-4">


            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="100">
              <div className="work-card">
                <i className="fa-solid fa-layer-group"></i>
                <h5>Meet the Founders / Leadership Team</h5>
                <p>Our leadership team comprises seasoned industry experts with a shared passion for technology and
                  transformation. With years of experience in software development, business strategy, and digital
                  innovation, they guide the company’s growth with vision and commitment.</p>
              </div>
            </div>


            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="100">
              <div className="work-card">
                <i className="fa-solid fa-bars-staggered"></i>
                <h5>Our Journey & Growth Timeline</h5>
                <p>From a small startup to a globally recognized tech partner, our journey is marked by milestones that
                  reflect our relentless pursuit of excellence. Over the years, we have expanded our portfolio, scaled
                  internationally, and built lasting client relationships.</p>
              </div>
            </div>


            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="200">
              <div className="work-card">
                <i className="fa-solid fa-people-group"></i>
                <h5>Team Culture & Innovation</h5>
                <p>We foster a collaborative and inclusive work environment that encourages creativity and
                  experimentation. Our culture of continuous learning and open communication fuels our innovation, helping
                  us stay ahead in a dynamic tech landscape.</p>
              </div>
            </div>


            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="300">
              <div className="work-card">
                <i className="fa-solid fa-circle-notch"></i>
                <h5>Tech Stack & R&D</h5>
                <p>Our robust technology stack includes React.js, Node.js, Python, AWS, MongoDB, AI/ML frameworks, and
                  more. With a dedicated R&D team, we explore emerging technologies to drive smarter solutions and
                  competitive advantages for our clients.</p>
              </div>
            </div>


            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="400">
              <div className="work-card">
                <i className="fa-solid fa-handshake-angle"></i>
                <h5>Global Presence & Partnerships</h5>
                <p>With a footprint across multiple countries and strategic partnerships worldwide, we serve a diverse
                  clientele. Our global presence allows us to blend local insights with international standards to deliver
                  scalable and adaptable solutions.</p>
              </div>
            </div>


            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="500">
              <div className="work-card">
                <i className="fa-solid fa-compact-disc"></i>
                <h5>Social Impact & Responsibility</h5>
                <p>We believe technology should uplift communities and contribute to a better world. Through sustainable
                  practices, educational initiatives, and social responsibility programs, we aim to make a positive
                  difference beyond business.</p>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section className="about-5">
        <section className="innovation-section mt-5 container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-`12 col-sm-12 col-12">
              <div className="content">
                <h1>Stand Out with Innovation</h1>
                <p>
                  We combine advanced technologies with forward-thinking strategies to deliver impactful, future-ready
                  solutions. Our innovation-led approach empowers businesses to lead in a competitive digital landscape and
                  unlock new
                  growth opportunities.
                </p>
                <Link to='/contact' className="btn-template">Explore Solutions</Link>
              </div>
            </div>
          </div>
        </section>
      </section>

      <hr />
      <section className="last">
        <span style={{ textAlign: 'center', fontSize: '18px', fontWeight: 500 }}>© 2025 Keyan. All rights reserved.</span>
      </section>

    </>
  )
}

export default About