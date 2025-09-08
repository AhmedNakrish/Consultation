import React from 'react'

const Herosection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content container">
          <div className="hero-bg-layers-container">
            <div
              className="hero-bg-layer layer1"
              data-aos="fade-in"
              data-aos-duration={1000}
            />
            <div
              className="hero-bg-layer layer2"
              data-aos="fade-in"
              data-aos-delay={200}
              data-aos-duration={1000}
            />
            <div
              className="hero-bg-layer layer3"
              data-aos="fade-in"
              data-aos-delay={400}
              data-aos-duration={1000}
            />
          </div>
          <div className="hero-left">
            <div
              className="hero-welcome"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              Welcome To Our Website
            </div>
            <div
              className="hero-headline"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="hero-start-circles">
                <span />
                <span />
              </div>
              Strategic Solutions
              <br />
              for <span className="highlight-green">
                Confident Decisions
              </span>{" "}
              &amp; Sustainable Growth
              <div className="hero-end-circles">
                <span className="circle-white" />
                <span className="circle-green" />
                <span className="circle-gold" />
              </div>
            </div>
            <div
              className="hero-desc"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1000}
            >
              We provide comprehensive advisory services in legal, financial,
              and business domains, helping you make informed decisions backed
              by deep expertise and market insight.
            </div>
            <div
              className="hero-btns"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1000}
            >
              <button className="btn btn-gold">Request Consultation</button>
              <div className="circle ms-1">
                <i className="fa-solid fa-arrow-right-long" />
              </div>
              <a href="contact.php" className="btn ms-2 btn-outline-hero">
                Contact Us{" "}
              </a>
            </div>
          </div>
          <div
            className="hero-right"
            data-aos="fade-left"
            data-aos-duration={1000}
          >
            <div className="hero-img-arch">
              <img src="./assets/images/hero.jpg" alt="Consulting Hero" />
            </div>
          </div>
        </div>
        <div
          className="whatsapp-container"
          data-aos="fade-up"
          data-aos-delay={400}
          data-aos-duration={1000}
        >
          <a
            href="https://wa.me/1234567890"
            className="whatsapp-icon"
            target="_blank"
            aria-label="Chat on WhatsApp"
          >
            <i className="fa-brands fa-whatsapp" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Herosection