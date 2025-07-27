import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import E1 from '../../aessts/Photos/A16.jpg'
const Expertise = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section classNameName="exp container pt-5">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <section className="exp-1">
              <h2>Marketplace System Unification</h2>
              <p> In today’s rapidly evolving digital ecosystem, businesses demand seamless integration,
                automation, and intelligence. At
                the core of our offerings lies a future-ready service suite that bridges the gap between
                physical hardware and
                cloud-based intelligence. Whether you're building a connected product, intelligent platform, or
                a next-gen user
                experience, we deliver solutions that transform your vision into market-ready reality.</p>
            </section>
          </div>
        </div>
      </section>


      <section className="container mt-5">
        <div className="row">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="exp-2">
              <h2>Harness Data for Strategic Growth</h2>
              <p>Data is one of your most valuable assets — but only if it’s used effectively. We help you unlock
                actionable insights by
                transforming raw information into meaningful outcomes. From automation to analytics, we empower
                your business to make
                smarter, faster decisions driven by data.</p>
              <p>Your data shouldn’t be stuck in silos. Our solutions ensure seamless integration across devices,
                platforms, and cloud
                environment so you can visualize performance, spot trends, and drive continuous improvement.</p>
              {/* <img src="./Photos/A16.jpg" data-aos="fade-up" data-aos-duration="5000" /> */}
              <img src={E1} data-aos="fade-up" data-aos-duration="5000" />
            </div>
          </div>
        </div>
      </section>


      <section className="container mt-3">
        <div className="row ">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="exp-3 mt-5">
              <h2>Seamlessly Integrate, Refine, and Visualize Your Data—Your Way</h2>
              <p> <span><i className="fa-solid fa-arrows-up-down-left-right"></i></span> Today’s businesses generate
                data from every direction — sensors, users, systems, and platforms. But raw data alone isn't
                enough. We help you seamlessly connect diverse data sources, transform complex inputs into
                structured insights, and visualize them through interactive, real-time dashboards.</p>
              <p> <span><i className="fa-solid fa-arrows-up-down-left-right"></i></span>Whether it's operational
                metrics, customer behavior, or IoT device streams, we ensure your data tells a story — clearly,
                accurately, and in a way that empowers decision-makers.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="container mt-3 exp-6 p-5">
        <div className="exp-4 ">
          <h2>The Path We Follow</h2>
        </div>
        <div className="row g-2">
          <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="exp-5">
              <i className="fa-solid fa-face-smile expo "></i>
              <h2>Better Collaboration</h2>
              <p>We enable stronger collaboration across teams, platforms, and systems. Our solutions are designed
                to unify workflows, streamline communication, and increase visibility — helping stakeholders
                stay connected
                and productive, no matter where they are.</p>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="exp-5 ">
              <i className="fa-solid fa-server expo"></i>
              <h2>Improved Data Security</h2>
              <p>Security is at the core of our architecture. We implement robust protocols,
                encrypted data flows, and compliance-driven practices to safeguard your digital assets
                — ensuring trust, privacy, and long-term resilience.</p>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="exp-5 ">
              <i className="fa-solid fa-people-line expo"></i>
              <h2>Tailored to Your Needs</h2>
              <p>No two businesses are the same. That’s why we design customizable,scalable solutions that adapt
                to your operational
                needs.From feature-specific modules to full-system integrations, we build technology around your
                goals — not the other way
                around.</p>
            </div>
          </div>

        </div>
      </section>


      <section className="container mt-3">
        <div className="row ">
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="exp-3 mt-5">
              <h2>Smart Data Integration for the Connected Commerce Era</h2>
              <p> <span><i className="fa-solid fa-arrows-up-down-left-right"></i></span>Empower your digital business
                with a centralized platform that bridges your mobile apps, IoT devices, and eCommerce
                systems. From seamless syncing of device data to real-time analytics across platforms, we help
                you unlock actionable
                insights, reduce operational friction, and elevate your customer experience—all with a solution
                built for scale and
                flexibility.</p>
              <p> <span><i className="fa-solid fa-arrows-up-down-left-right"></i></span>Keep your stock updated in
                real time. Sync data between your IoT-connected warehouses, web stores, and mobile apps.
                Prevent overselling, reduce delays, and improve customer satisfaction through automated
                inventory control.
              </p>
              <p><span><i className="fa-solid fa-arrows-up-down-left-right"></i></span>Transform raw marketplace data
                into interactive dashboards. Get insights on sales trends, user behavior, product
                performance, and logistics—empowering faster, smarter decisions.</p>
              <p><span><i className="fa-solid fa-arrows-up-down-left-right"></i></span>From syncing new orders to
                updating product info across multiple platforms, automate repetitive tasks to reduce manual
                errors and save time—so your team can focus on growth.</p>
              <p><span><i className="fa-solid fa-arrows-up-down-left-right"></i></span>Your data is protected with
                end-to-end encryption and GDPR-compliant protocols. Whether you’re a growing brand or a
                global retailer, our platform scales to meet your evolving needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="exp-9">
        <section className="container mt-3 exp-7">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="exp-8">
                <h2>Innovation Starts With Collaboration</h2>
                <p>we believe in the power of collaboration to turn bold ideas into reality. Whether you're a
                  startup,
                  an enterprise, or a
                  visionary with a dream, our team is ready to bring your project to life with cutting-edge
                  technology, creative strategy,
                  and dedicated support.</p>
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

export default Expertise 