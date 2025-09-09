import React from "react";
import Breadcrumb from "@/components/shared/breadcrumb/breadcrumb";
import Link from "next/link";
import Image from "next/image";

const Contactpage = () => {
  return (
    <>
      <Breadcrumb name={"Contact Us"} />

      <section className="contact-location-section">
        <div className="container">
          <h2 className="lets-talk-title">keep in touch with us</h2>
          <div className="contact-social-cards">
            <div className="contact-social-card">
              <i className="fab fa-whatsapp contact-social-icon" />
              <h3 className="contact-social-title">WhatsApp</h3>
              <p className="contact-social-info">+966 123 456 789</p>
              <Link
                href="https://wa.me/966123456789"
                className="contact-social-link"
                target="_blank"
              >
                Chat Now
              </Link>
            </div>
            <div className="contact-social-card">
              <svg
                className="w-[48px] contact-social-icon h-[48px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={40}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                  d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                />
              </svg>
              <h3 className="contact-social-title">Mobile</h3>
              <p className="contact-social-info">+966 987 654 321</p>
              <Link href="tel:+966987654321" className="contact-social-link">
                Call Now
              </Link>
            </div>
            <div className="contact-social-card">
              <i className="fa-regular fa-envelope contact-social-icon" />
              <h3 className="contact-social-title">Email</h3>
              <p className="contact-social-info">info@example.com</p>
              <Link href="mailto:info@example.com" className="contact-social-link">
                Email Us
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="contact-container">
            <div className="contact-location-left">
              <span className="contact-label">Contact Us</span>
              <h2 className="contact-title">
                Strategically Located
                <br />
                to Serve You{" "}
                <span className="contact-highlight-green">Better</span>
              </h2>
              <p className="contact-desc">
                We proudly serve clients across multiple regions in Saudi
                Arabia, ensuring wide coverage and easy access to our services
                wherever you are.
              </p>
              <form
                id="contact-form"
                action="process_contact.php"
                method="POST"
              >
                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="contact-name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="contact-form-control"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="contact-form-control"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="contact-phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="contact-form-control"
                    id="contact-phone"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="contact-form-group">
                  <label
                    className="contact-form-label"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="contact-form-control"
                    id="contact-subject"
                    name="subject"
                    placeholder="Enter subject"
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label
                    className="contact-form-label"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    className="contact-form-control"
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    required
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="contact-btn contact-btn-gold">
                  Submit Request
                </button>
              </form>
            </div>
            <div className="contact-location-right">
              <div className="contact-map-wrapper">
                <Image
                  src="/assets/images/map_img.png"
                  alt="Saudi Arabia Map"
                  className="contact-map"
                  width={497}
                  height={448}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactpage;
