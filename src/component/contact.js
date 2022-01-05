import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import contact from "../images/contact.jpg";

function Contact() {
  return (
    <div>
      <Header />
      <div className="">
        <section id="contact-section">
          {/* <img src={contact} /> */}
          <div className="contact-container">
            <h2 style={{ padding: "7rem 0 2rem 0" }}>Contact Me</h2>
            <p>
              Have queries? Need support? I
              am always here for you.
            </p>

            <div className="contact-form">
              <div>
                <i className="fa fa-map-marker" />
                <span className="form-info"> Dhaka,Bangladesh.</span>
                <br />
                <i className="fa fa-phone" />

                <span className="form-info">
                  <a
                    href="tel:+8801627297942"
                    style={{ textDecoration: "none" }}
                  >
                    +880 1627297942
                  </a>
                </span>

                <br />
                <i className="fa fa-envelope" />
                <span className="form-info">
                  <a
                    href="mailto:azmir15-849@gmail.com"
                    style={{ testDecoration: "none" }}
                  >
                    azmir15-849@gmail.com
                  </a>
                </span>
                {/* info@caerusinfotech.tech */}
              </div>
              <div>
                <form method="POST" action="azmir15-849@gmail.com">
                  <input type="text" placeholder="Your Full Name" required />
                  {/* <input type="text" placeholder="Last Name" /> */}
                  <br />
                  <input type="Email" placeholder="Email" required />
                  <br />
                  <input type="text" placeholder="Subject of this message" />
                  <br />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    required
                  />
                  <br />
                  <button className="submit" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
