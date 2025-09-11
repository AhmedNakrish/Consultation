"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Modelrequest from "../herosection/modelrequest";
import axiosInstance from "@/lib/axiosInstance";

const Selectsection = ({ data }) => {
  const dialogRef = useRef(null);

  const [calc, setCalc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // form state for selects
  const [formData, setFormData] = useState({
    type: "", // tax_&_zakat OR accounting
    subscription_type: "", // yearly OR monthly
    days_per_week: "",
    hours_per_day: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axiosInstance.post(
        "/api/v1/packages/calculate-price-for-custom-package",
        {
          type: formData.type,
          subscription_type: formData.subscription_type,
          days_per_week: formData.days_per_week,
          hours_per_day: formData.hours_per_day,
        }
      );
      setCalc(res?.data?.data || {});
    } catch (err) {
      console.error("❌ Failed to fetch calculation:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

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

              {/* Show calculation result */}
          {/* Show calculation result */}
<div className="custom-package-price">
  {loading ? (
    <span className="price-amount">Loading...</span>
  ) : calc?.price ? (
    <>
      {/* Discounted price */}
      <span className="price-amount">{calc.price_with_discount}</span>

      {/* Original price with strikethrough if discount exists */}
      {calc.discount_percentage > 0 && (
        <span className="price-original">
          {calc.price}
        </span>
      )}

      {/* Discount percentage */}
      {calc.discount_percentage > 0 && (
        <span className="price-discount">
          -{calc.discount_percentage}%
        </span>
      )}
    </>
  ) : (
    <span className="price-amount">--</span>
  )}
  <span className="price-currency">SAR</span>
</div>


              <p className="custom-package-desc">
                We provide comprehensive advisory services in legal, financial,
                and business domains.
              </p>

              <div className="custom-package-actions">
                {/* Service type */}
                <select
                  id="type"
                  className="custom-package-select"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>
                    Select Service
                  </option>
                  <option value="tax_&_zakat">Tax and Zakat</option>
                  <option value="accounting">Accounting</option>
                </select>

                {/* Subscription type */}
                <select
                  id="subscription_type"
                  className="custom-package-select"
                  value={formData.subscription_type}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>
                    Package Duration
                  </option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>

                {/* Days per week */}
                <select
                  id="days_per_week"
                  className="custom-package-select mb-3"
                  value={formData.days_per_week}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>
                    Number of Days
                  </option>
                  {[1, 2, 3, 4, 5, 6].map((d) => (
                    <option key={d} value={d}>
                      {d} Day{d > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>

                {/* Hours per day */}
                <select
                  id="hours_per_day"
                  className="custom-package-select mb-3"
                  value={formData.hours_per_day}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled hidden>
                    Number of Hours
                  </option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((h) => (
                    <option key={h} value={h}>
                      {h} Hour{h > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  className="btn btn-submit"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Calculating..." : "Request Package"}
                </button>
              </div>
            </div>

            <div
              className="custom-package-image"
              data-aos="fade-left"
              data-aos-delay={500}
            >
              <div className="icon-bg">
                <Image
                  src="/assets/images/check.gif"
                  alt="gif check"
                  className="check-gif"
                  width={320}
                  height={266}
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
