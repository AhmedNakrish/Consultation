"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/shared/breadcrumb/breadcrumb";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/lib/axiosInstance";
import { toast } from "react-toastify";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({}); // ✅ store validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on typing
  };

  // ✅ Validation function
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{6,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // stop if errors

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const res = await axiosInstance.post("/api/v1/send-message", data);

      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("❌ Error sending message:", error);
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <>
      <Breadcrumb name={"Contact Us"} />

      <section className="contact-location-section">
        <div className="container">
          <h2 className="lets-talk-title">keep in touch with us</h2>
        </div>

        <div className="container">
          <div className="contact-container">
            <div className="contact-location-left">
              <span className="contact-label">Contact Us</span>
              <h2 className="contact-title">
                Strategically Located
                <br />
                to Serve You <span className="contact-highlight-green">Better</span>
              </h2>
              <p className="contact-desc">
                We proudly serve clients across multiple regions in Saudi
                Arabia, ensuring wide coverage and easy access to our services
                wherever you are.
              </p>

              {/* ✅ Form with validation */}
              <form id="contact-form" onSubmit={handleSubmit} noValidate>
                {/* Full Name */}
                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="contact-name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`contact-form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                {/* Email */}
                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`contact-form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Phone */}
                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="contact-phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`contact-form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>

                {/* Subject */}
                <div className="contact-form-group">
                  <label
                    className="contact-form-label"
                    htmlFor="contact-subject"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className={`contact-form-control ${
                      errors.subject ? "is-invalid" : ""
                    }`}
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                  />
                  {errors.subject && (
                    <div className="invalid-feedback">{errors.subject}</div>
                  )}
                </div>

                {/* Message */}
                <div className="contact-form-group">
                  <label
                    className="contact-form-label"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    className={`contact-form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                {/* Submit */}
                <button type="submit" className="contact-btn contact-btn-gold">
                  Submit Request
                </button>
              </form>
            </div>

            {/* Right side map */}
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
