"use client";
import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import Link from "next/link";

const Modelrequest = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    policy_agree: false,
  });

  const dialogRef = useRef(null);

  // expose functions to parent
  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dialogRef.current?.close();
  };

  return (
    <dialog ref={dialogRef} className="dialog-box">
      <div className="dialog-content">
        <div className="dialog-header d-flex justify-content-between align-items-center">
          <h5 className="dialog-title">Request Consultation</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => dialogRef.current?.close()}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="dialog-body p-0">
            <div className="mb-3">
              <label htmlFor="consultName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="consultName"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
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
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
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
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
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
                value={formData.service}
                onChange={handleChange}
                placeholder="Specify the service you need"
              />
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
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your consultation needs"
              />
            </div>
          </div>

          <div className="dialog-footer d-flex flex-column align-items-center">
            <label className="policy-checkbox mt-2">
              <input
                type="checkbox"
                name="policy_agree"
                checked={formData.policy_agree}
                onChange={handleChange}
                required
              />
              <span className="policy-label">
                I agree to the{" "}
                <Link href="/en/policies" className="terms-link">
                  Policies
                </Link>
              </span>
            </label>

            <button type="submit" className="btn btn-submit w-100 mt-3">
              Send Request
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
});

Modelrequest.displayName = "Modelrequest";
export default Modelrequest;
