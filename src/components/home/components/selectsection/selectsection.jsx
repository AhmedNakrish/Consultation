import React from "react";

const Selectsection = () => {
  return (
    <>
      <div className="custom-package-section">
        <div className="container">
          <div className="linear-bg" />
          <div
            className="custom-package-card"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div
              className="custom-package-content"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              <span className="custom-package-label">Custom Package</span>
              <h2 className="custom-package-title">
                Build Your Package
                <br />
                Based on Your Needs
              </h2>
              <div className="custom-package-price">
                <span className="price-amount">27</span>
                <span className="price-original">30</span>
                <span className="price-currency">
                  <svg
                    width={23}
                    height={29}
                    viewBox="0 0 23 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6721 25.3188C13.3552 26.1405 13.1457 27.0322 13.0654 27.9673L19.7716 26.3003C20.0885 25.4788 20.2978 24.5869 20.3782 23.6519L13.6721 25.3188Z"
                      fill="#B68F0E"
                    />
                    <path
                      d="M21.7582 21.9167C22.1511 20.8696 22.4109 19.7328 22.5104 18.5408L16.0327 20.1969V17.0133L21.758 15.5508C22.1509 14.5036 22.4107 13.3668 22.5102 12.1748L16.0326 13.8295V2.38041C15.04 3.05033 14.1585 3.94206 13.4419 4.99391V14.4916L10.8513 15.1535V0.823242C9.85872 1.49292 8.97722 2.38489 8.26066 3.43674V15.8152L2.46411 17.2959C2.07116 18.343 1.81121 19.4799 1.71151 20.6718L8.26066 18.9988V23.0079L1.24196 24.8008C0.849006 25.8479 0.589258 26.9848 0.489746 28.1768L7.83636 26.3C8.43441 26.1505 8.94843 25.7255 9.28261 25.1406L10.6299 22.7395V22.739C10.7698 22.4906 10.8513 22.1911 10.8513 21.8685V18.3369L13.4419 17.675V24.0421L21.758 21.9163L21.7582 21.9167Z"
                      fill="#B68F0E"
                    />
                  </svg>
                </span>
              </div>
              <p className="custom-package-desc">
                We provide comprehensive advisory services in legal, financial,
                and business domains.
              </p>
              <div className="custom-package-actions">
                <select
                  id="service-select"
                  className="custom-package-select"
                  required
                >
                  <option value disabled  hidden>
                    Select Service
                  </option>
                  <option value="tax">Tax and Zakat</option>
                  <option value="accounting">Accounting</option>
                </select>
                <select
                  id="duration-select"
                  className="custom-package-select"
                  style={{ display: "none" }}
                  required
                >
                  <option value disabled hidden>
                    Package Duration
                  </option>
                  <option value={1}>Monthly</option>
                  <option value={3}>Yearly</option>
                </select>
                <select
                  id="days-select"
                  className="custom-package-select mb-3"
                  style={{ display: "none" }}
                  required
                >
                  <option value disabled  hidden>
                    Number of Days
                  </option>
                  <option value={1}>1 Day</option>
                  <option value={2}>2 Days</option>
                  <option value={3}>3 Days</option>
                  <option value={4}>4 Days</option>
                  <option value={5}>5 Days</option>
                  <option value={6}>6 Days</option>
                </select>
                <select
                  id="hours-select"
                  className="custom-package-select mb-3"
                  style={{ display: "none" }}
                  required
                >
                  <option value disabled  hidden>
                    Number of Hours
                  </option>
                  <option value={1}>1 Hour</option>
                  <option value={2}>2 Hours</option>
                  <option value={3}>3 Hours</option>
                  <option value={4}>4 Hours</option>
                  <option value={5}>5 Hours</option>
                  <option value={6}>6 Hours</option>
                  <option value={7}>7 Hours</option>
                  <option value={8}>8 Hours</option>
                </select>
                <button type="button" className="btn btn-submit">
                  Request Package
                </button>
              </div>
            </div>
            <div
              className="custom-package-image"
              data-aos="fade-left"
              data-aos-delay={500}
            >
              <div className="icon-bg">
                <img
                  src="assets/images/check.gif"
                  alt="gif check"
                  className="check-gif"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selectsection;
