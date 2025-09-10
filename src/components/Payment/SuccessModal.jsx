"use client";
import React from "react";

const SuccessModal = () => {
  return (
    <div className="modal-overlay" id="success-modal">
      <div className="success-modal">
        <button className="btn btn-close-icon" id="close-payment-modal">
          ✕
        </button>
        <div className="success-icon">✔</div>
        <h2>Payment Successful!</h2>
        <p>Your payment has been processed successfully.</p>

        <div className="payment-details-summary">
          <div className="summary-row">
            <span>Package:</span> <span>Standard Package</span>
          </div>
          <div className="summary-row">
            <span>Amount:</span> <span>SAR 56.00</span>
          </div>
        </div>
        <div className="modal-actions">
          <button className="btn btn-download">Download PDF Bill</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
