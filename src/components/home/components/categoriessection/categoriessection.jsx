import React from "react";
import Link from "next/link";
const Categoriessection = () => {
  return (
    <>
      <section className="our-categories">
        <div className="container position-relative">
          <div className="categories-bg-gradient">
            <div className="gradient1" />
            <div className="gradient2" />
          </div>
          <div className="categories-grid">
            <div
              className="category-card"
              style={{ backgroundImage: 'url("assets/images/img1.jpg")' }}
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <div className="category-content">
                <h3>Engineering Consulting Solutions</h3>
                <span className="coming-soon">coming soon</span>
              </div>
            </div>
            <div
              className="category-card category-card-right"
              style={{ backgroundImage: 'url("assets/images/img2.png")' }}
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1000}
            >
              <div className="category-content">
                <h3>Professional Accounting Services for Your Business</h3>
                <Link
                  href="/en"
                  className="explore-btn d-flex align-items-center gap-2 position-relative overflow-hidden"
                >
                  Explore
                  <span className="explore-icon d-flex justify-content-center align-items-center">
                    <svg
                      className="rotate-icon"
                      viewBox="0 0 16 19"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                    >
                      <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        fill="#b68f0e"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="third"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1000}
            >
              <p className="category-description">
                <span className="highlight-blue">W</span>e provide comprehensive
                advisory services in legal, financial, and business domains,
                helping you make informed decisions backed by deep expertise and
                market insight.
              </p>
              <div
                className="category-card"
                style={{ backgroundImage: 'url("assets/images/img3.jpg")' }}
              >
                <div className="category-content">
                  <h3>Trusted Legal Services</h3>
                  <span className="coming-soon">coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="call-to-action">
          <div className="container">
            <div className="cta-bg" />
            <div className="cta-content">
              <h2 data-aos="fade-up" data-aos-duration={1000}>
                Welcome to Our Website
              </h2>
              <h3
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1000}
                className="w-75"
              >
                We are a trusted accounting and financial consulting firm,
                helping individuals and businesses achieve success.
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
              >
                We provide comprehensive advisory services in legal, financial,
                and business domains, helping you make informed decisions backed
                by deep expertise and market insight.
              </p>
              <button
                className="btn btn-gold"
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={1000}
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categoriessection;
