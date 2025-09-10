"use client";
import React from "react";
import Reyal from "@/components/shared/Reyal/Reyal";
import Link from "next/link";

const PackageDetails = () => {
  return (
    <div className="package-section">
      <div>
        <div className="package-header">
          <div className="package-icon">⚡</div>
          <div>
            <h2 className="package-title">Standard Package</h2>
            <p className="package-subtitle" id="package-subtitle">
              5/7 Services
            </p>
          </div>
        </div>
        <div className="package-price" id="package-price">
          <Reyal />
          <span id="price-amount">56</span>
          <span
            className="save-badge ms-3"
            id="save-badge"
            style={{ display: "none" }}
          >
            (Save 20%)
          </span>
        </div>
        <ul className="package-features" id="package-features">
          <li>✓ Bookkeeping & Financial Reporting</li>
          <li>✓ Tax Preparation & Planning</li>
          <li>✓ Payroll Management</li>
          <li>✓ Financial Consulting</li>
          <li>✓ Dedicated Account Manager</li>
          <li className="disabled">○ Advanced Tax Optimization</li>
          <li className="disabled">○ International Compliance</li>
        </ul>
      </div>

      <div className="auto-renewal">
        <div className="pricing-toggle-container">
          <div className="content-toggle">
            <h3>Package Preference</h3>
            <p className="toggle-description">
              Choose how you’d like to be billed. <span className="annual-text">Annual</span> billing gives you a better rate.
            </p>
          </div>
          <div className="pricing-toggle-payment">
            <label className="toggle-switch">
              <input type="checkbox" id="pricing-toggle" />
              <span className="toggle-slider" />
            </label>
          </div>
        </div>

        <div className="mt-0">
          <label className="policy-checkbox">
            <input type="checkbox" id="policy-agree" required />
            <span className="policy-label">
              I agree to the{" "}
              <Link href="/en/policies" className="terms-link">
                Policies
              </Link>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
