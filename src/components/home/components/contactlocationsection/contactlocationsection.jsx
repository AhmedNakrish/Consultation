import React from "react";

const Contactlocationsection = () => {
  return (
    <>
      <section className="contact-location-section">
        <div className="container contact-location-container">
          <div className="contact-location-left">
            <span
              className="contact-location-label"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              Contact Us
            </span>
            <h2
              className="contact-location-title"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              Strategically Located
              <br />
              to Serve You <span className="highlight-green">Better</span>
            </h2>
            <p
              className="contact-location-desc"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1000}
            >
              We Proudly Serve Clients Across Multiple Regions
              <br />
              In Saudi Arabia, Ensuring Wide Coverage And Easy
              <br />
              Access To Our Services Wherever You Are.
            </p>
            <div
              className="contact-location-btns"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1000}
            >
              <button className="btn btn-gold">Request Consultation</button>
              <a href="/en/contact" className="btn btn-outline-contact">
                Contact Us
              </a>
            </div>
          </div>
          <div
            className="contact-location-right"
            data-aos="fade-left"
            data-aos-duration={1000}
          >
            <div className="contact-location-map-wrapper">
              <img
                src="assets/images/map_img.png"
                alt="Saudi Arabia Map"
                className="contact-location-map"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactlocationsection;
