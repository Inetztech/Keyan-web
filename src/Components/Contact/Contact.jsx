import { useState } from 'react'
import c1 from '../../aessts/Photos/A12.png'
import { Link } from 'react-router-dom'
import axios from "axios";
const Contact = () => {

  const formData = {
    name: "",
    email: "",
    number: "",
    service: "",
    project: "",
  };
  const [input, setInput] = useState(formData);
  const [showPopup, setShowPopup] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((previousState) => ({ ...previousState, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setInput(formData);
    console.log("Form Data:", input);
    try {
      const { data } = await axios.post(
        "https://api.airtable.com/v0/app7s5UsKKj7Izfgc/tbljiJjNgbsXxl9dX",
        {
          records: [
            {
              fields: {
                Name: input.name,
                Email: input.email,
                Number: input.number,
                Service: input.service,
                Regarding_Project: input.project,
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer patGbyNaY270zR8qj.9837a7aca2b145159ec21f4fb40b70061dffe404f890339dbb4f2dc84f4e7c1e`,
            "Content-Type": "application/json",
          },
        }
      );
      setInput({ name: "", email: "", number: "", service: "", project: "" });
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);

    } catch (error) {
      console.error("Error submitting form:", error);
      // alert("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      <section className="container mt-5 mb-5 pt-5">
        <div className="row mt-5">
          <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <section className="contact-mobile">
              <div className="row">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  <div className="cards-contact">
                    <div className="icon"><i className="fas fa-link" style={{ marginRight: '10px' }}></i></div>
                    <h3>Let’s Collaborate and Create Something Exceptional</h3>
                    <p>We’re here to bring your digital vision to life. Whether you’re looking to build a new solution,
                      modernize an
                      existing platform, or simply explore what’s possible—we’d love to connect. Reach out and let’s start
                      shaping the
                      future together.</p>
                  </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  <div className="cards-contact mt-5">
                    <div className="icon"><i className="fas fa-rocket" style={{ marginRight: '10px' }}></i></div>
                    <h3>Partner With Us to Build What’s Next</h3>
                    <p>Every great digital journey begins with the right collaboration. Whether you're exploring a bold new
                      idea, seeking
                      expert consultation, or ready to bring a project to life, we’re here to support you. Let’s connect and
                      create
                      innovative, future-ready solutions that move your business forward.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <section className="mt-2 form-info container">
              <div className="form-section">
                <h2>Unleash Your Innovation Idea</h2>
                <form onSubmit={handleSubmit}>
                  <div className="name-row">
                    <input type="text" placeholder="Name" name="name"
                      value={input.name}
                      onChange={handleChange} required />
                    <input type="email" placeholder="Email Address" name="email"
                      value={input.email}
                      onChange={handleChange} required />
                  </div>
                  <input type="number" placeholder="Number" name="number"
                    value={input.number}
                    onChange={handleChange} required />
                  <input type="text" placeholder="Service" name="service"
                    value={input.service}
                    onChange={handleChange} required />
                  <textarea placeholder="Regarding Description" name="project"
                    onChange={handleChange}
                    value={input.project} required></textarea>
                  <div id="descError" className="error"></div>
                  <button type="submit" id="submitBtn">Submit Idea</button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="popup show">
          <span style={{ padding: "0px 5px", color: "green" }}>
            <i className="fa-solid fa-check"></i>
          </span>
          Submitted successfully!
        </div>
      )}

      <section className="px-4">
        <section className="containers">
          <section className="contact-last container mt-5">
            <div className="row g-5">
              <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 -col-sm-12 col-12">
                <section className="contact-last-1">
                  <div className="contact-last-2">
                    <h3>Empowering Your Next Big Move</h3>
                    <p>Let’s bring your ideas to life with creativity, precision, and passion. We’re ready when you are —
                      let’s
                      build
                      something remarkable together.</p>

                    <button><Link className='a' to='/mailto:Info@keyansoftware.com' >Send the resume :Info@keyansoftware.com</Link></button>
                  </div>
                </section>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 -col-sm-12 col-12">
                <section className="contact-last-1">
                  {/* <img src="./Photos/A12.png" alt="photo-contact" /> */}
                  <img src={c1} alt="photo-contact" />
                </section>
              </div>
            </div>
          </section>
        </section>

      </section>


      <hr />
      <section className="last">
        <span style={{ textAlign: 'center', fontSize: '18px', fontWeight: 500 }}>© 2025 Keyan. All rights reserved.</span>
      </section>
    </>
  )
}

export default Contact