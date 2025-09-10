"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import axiosInstance from "@/lib/axiosInstance";

const Businesssection = ({ data }) => {
  const dialogRef = useRef(null);

  const [business, setBusiness] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isYearly, setIsYearly] = useState(false); // حالة التوجّل

  // النوع بناءً على التوجّل
  const type = isYearly ? "yearly" : "monthly";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(
          `/api/v1/packages/standard-packages?type=${type}`
        );
        setBusiness(res?.data?.data || []);
      } catch (err) {
        console.error("Failed to fetch package data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]); // 👈 هنعيد تنفيذ useEffect لما الـ type يتغير

  return (
    <div className="business-section">
      <div
        className="business-header"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <p className="business-welcome">Welcome To Our Website</p>
        <h2 className="business-title">
          Tailored Accounting
          <br />
          Visits for Your Business
        </h2>
      </div>

      {/* Pricing Toggle */}
      <div
        className="pricing-toggle-container"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={1000}
      >
        <div className="pricing-toggle">
          <span className="toggle-label">Monthly</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              id="pricing-toggle"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <span className="toggle-slider" />
          </label>
          <span className="toggle-label">Annually</span>
          {/* <span className="save-badge">Save 20%</span> */}
        </div>
      </div>

      <div className="container">
        <div className="business-cards">
          {business?.map((item) => (
            <div
              key={item.id}
              className="business-card card-blue"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1000}
            >
              <div className="card-top">
                <span className="card-title">{item.name}</span>
                <span className="card-price">
                  
                  <span className="price-annually">
                    {item.price}{" "}
                    <svg
                      width="23"
                      height="29"
                      viewBox="0 0 23 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data--h-bstatus="0OBSERVED"
                    >
                      <path
                        d="M13.6721 25.3188C13.3552 26.1405 13.1457 27.0322 13.0654 27.9673L19.7716 26.3003C20.0885 25.4788 20.2978 24.5869 20.3782 23.6519L13.6721 25.3188Z"
                        fill="white"
                        data--h-bstatus="0OBSERVED"
                      ></path>
                      <path
                        d="M21.7582 21.9167C22.1511 20.8696 22.4109 19.7328 22.5104 18.5408L16.0327 20.1969V17.0133L21.758 15.5508C22.1509 14.5036 22.4107 13.3668 22.5102 12.1748L16.0326 13.8295V2.38041C15.04 3.05033 14.1585 3.94206 13.4419 4.99391V14.4916L10.8513 15.1535V0.823242C9.85872 1.49292 8.97722 2.38489 8.26066 3.43674V15.8152L2.46411 17.2959C2.07116 18.343 1.81121 19.4799 1.71151 20.6718L8.26066 18.9988V23.0079L1.24196 24.8008C0.849006 25.8479 0.589258 26.9848 0.489746 28.1768L7.83636 26.3C8.43441 26.1505 8.94843 25.7255 9.28261 25.1406L10.6299 22.7395V22.739C10.7698 22.4906 10.8513 22.1911 10.8513 21.8685V18.3369L13.4419 17.675V24.0421L21.758 21.9163L21.7582 21.9167Z"
                        fill="white"
                        data--h-bstatus="0OBSERVED"
                      ></path>
                    </svg>
                  </span>
                  <span className="price-monthly">
                    {item.price_after_discount}
                      <svg
                      width="23"
                      height="29"
                      viewBox="0 0 23 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data--h-bstatus="0OBSERVED"
                    >
                      <path
                        d="M13.6721 25.3188C13.3552 26.1405 13.1457 27.0322 13.0654 27.9673L19.7716 26.3003C20.0885 25.4788 20.2978 24.5869 20.3782 23.6519L13.6721 25.3188Z"
                        fill="white"
                        data--h-bstatus="0OBSERVED"
                      ></path>
                      <path
                        d="M21.7582 21.9167C22.1511 20.8696 22.4109 19.7328 22.5104 18.5408L16.0327 20.1969V17.0133L21.758 15.5508C22.1509 14.5036 22.4107 13.3668 22.5102 12.1748L16.0326 13.8295V2.38041C15.04 3.05033 14.1585 3.94206 13.4419 4.99391V14.4916L10.8513 15.1535V0.823242C9.85872 1.49292 8.97722 2.38489 8.26066 3.43674V15.8152L2.46411 17.2959C2.07116 18.343 1.81121 19.4799 1.71151 20.6718L8.26066 18.9988V23.0079L1.24196 24.8008C0.849006 25.8479 0.589258 26.9848 0.489746 28.1768L7.83636 26.3C8.43441 26.1505 8.94843 25.7255 9.28261 25.1406L10.6299 22.7395V22.739C10.7698 22.4906 10.8513 22.1911 10.8513 21.8685V18.3369L13.4419 17.675V24.0421L21.758 21.9163L21.7582 21.9167Z"
                        fill="white"
                        data--h-bstatus="0OBSERVED"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
              <p className="card-desc">{item.description}</p>
              <ul className="card-list">
                {item.features?.map((feature) => (
                  <li key={feature.id}>
                    <span className="check check-blue">
                      <i className="fa-solid fa-circle-check" />
                    </span>
                    {feature.description}
                  </li>
                ))}
              </ul>
              <Link href="payment.php" className="card-btn btn-blue">
                Request Consultation
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Businesssection;
