import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <div>
        <div className="nav-container py-4">
          <nav className="navbar navbar-expand-lg container mx-auto rounded-full px-4 py-2">
            <div className="container-fluid justify-content-between align-items-center">
              {/* Hamburger for mobile */}
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                id="sideNavToggle"
                aria-label="Open navigation"
              >
                <i className="fa-solid fa-bars navbar-toggler-icon" />
              </button>
              {/* Logo for large screens */}
              <Link className="navbar-brand" href="/en">
                <Image src="/assets/images/Logo.svg" alt="Consulting Logo" width={134} height={18} />
              </Link>
              {/* Nav links for large screens */}
              <ul className="navbar-nav flex-row gap-3 align-items-center mx-auto d-none d-lg-flex">
                <li className="nav-item">
                  <Link className="nav-link nav-home" href="/en">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/en/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/en/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/en/packages">
                    Packages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/en/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
              {/* Lang switch and CTA for large screens */}
              <div className="d-none d-lg-flex align-items-center gap-2 ms-3">
                <div className="lang-switch">
                  <button
                    className="btn btn-sm btn-lang active"
                    id="btn-en"
                    type="button"
                  >
                    En
                  </button>
                  <button
                    className="btn btn-sm btn-lang"
                    id="btn-ar"
                    type="button"
                  >
                    Ar
                  </button>
                </div>
                <button className="btn btn-gold ms-2" id="btn-gold-main">
                  Request Consultation
                </button>
              </div>
            </div>
          </nav>
        </div>
        {/* Side Nav (hidden on large screens) */}
        {/* <div id="sideNav" className="side-nav">
          <div className="side-nav-header">
            <a className="navbar-brand px-3" href="Home.php">
              Consulting <span className="contact-info-nav" />
            </a>
            <button
              className="close-btn"
              id="sideNavClose"
              aria-label="Close navigation"
            >
              ×
            </button>
          </div>
          <ul className="navbar-nav flex-column gap-3 align-items-start mt-4">
            <li className="nav-item">
              <a className="nav-link nav-home" href="Home.php">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.php">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="services.php">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="packages.php">
                Packages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.php">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="lang-switch mt-4">
            <button
              className="btn btn-sm btn-lang active"
              id="btn-en-side"
              type="button"
            >
              En
            </button>
            <button
              className="btn btn-sm btn-lang"
              id="btn-ar-side"
              type="button"
            >
              Ar
            </button>
          </div>
          <button className="btn btn-gold mt-3" id="btn-gold-side">
            Request Consultation
          </button>
        </div>
        <div>
          <div id="sideNavOverlay" className="side-nav-overlay" />
          &lt; id="consultationModal" class="modal fade" tabindex="-1"
          aria-labelledby="consultationModalLabel" aria-hidden="true"&gt;
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="consultationModalLabel">
                  Request Consultation
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <form id="consultationForm">
                <div className="modal-body p-0">
                  <div className="mb-3">
                    <label htmlFor="consultName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="consultName"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      aria-describedby="consultNamePlaceholder"
                    />
                    <span
                      id="consultNamePlaceholder"
                      className="visually-hidden"
                    >
                      Enter your full name
                    </span>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="consultEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="consultEmail"
                      name="email"
                      placeholder="Enter your email address"
                      required
                      aria-describedby="consultEmailPlaceholder"
                    />
                    <span
                      id="consultEmailPlaceholder"
                      className="visually-hidden"
                    >
                      Enter your email address
                    </span>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="consultPhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="consultPhone"
                      name="phone"
                      placeholder="Enter your phone number"
                      aria-describedby="consultPhonePlaceholder"
                    />
                    <span
                      id="consultPhonePlaceholder"
                      className="visually-hidden"
                    >
                      Enter your phone number
                    </span>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="consultService" className="form-label">
                      Service Interested In
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="consultService"
                      name="service"
                      placeholder="Specify the service you need"
                      aria-describedby="consultServicePlaceholder"
                    />
                    <span
                      id="consultServicePlaceholder"
                      className="visually-hidden"
                    >
                      Specify the service you need
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="consultMessage" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="consultMessage"
                    name="message"
                    rows={3}
                    placeholder="Describe your consultation needs"
                    aria-describedby="consultMessagePlaceholder"
                    defaultValue={""}
                  />
                  <span
                    id="consultMessagePlaceholder"
                    className="visually-hidden"
                  >
                    Describe your consultation needs
                  </span>
                </div>
                <div className="modal-footer d-flex justify-content-between flex-column  align-items-center p-0">
                  <div className="mt-3">
                    <label className="policy-checkbox">
                      <input
                        type="checkbox"
                        id="policy-agree"
                        name="policy_agree"
                        required
                        aria-describedby="policyPlaceholder"
                      />
                      <span className="policy-label">
                        I agree to the{" "}
                        <a href="policies.php" className="terms-link">
                          Policies
                        </a>
                      </span>
                    </label>
                    <span id="policyPlaceholder" className="visually-hidden">
                      Agree to the policies
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-submit w-100"
                    id="consultationSubmit"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
