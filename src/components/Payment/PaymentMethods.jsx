"use client";
import React, { useState } from "react";

const PaymentMethods = () => {
  // State to track the selected payment method
  const [selectedPayment, setSelectedPayment] = useState("credit_card");

  // Handle payment method change
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <div className="form-group">
      <h3>Payment Information</h3>
      <label className="form-label">Payment Method</label>
      <div className="payment-methods">
        <label className="payment-option">
          <input
            type="radio"
            name="payment_method"
            value="credit_card"
            checked={selectedPayment === "credit_card"}
            onChange={handlePaymentChange}
          />
          <span className="payment-option-content">
            <i className="fas fa-credit-card" /> <span>Credit/Debit Card</span>
          </span>
        </label>
        <label className="payment-option">
          <input
            type="radio"
            name="payment_method"
            value="paypal"
            checked={selectedPayment === "paypal"}
            onChange={handlePaymentChange}
          />
          <span className="payment-option-content">
            <i className="fab fa-paypal" /> <span>PayPal</span>
          </span>
        </label>
        <label className="payment-option">
          <input
            type="radio"
            name="payment_method"
            value="bank_transfer"
            checked={selectedPayment === "bank_transfer"}
            onChange={handlePaymentChange}
          />
          <span className="payment-option-content">
            <i className="fas fa-university" /> <span>Bank Transfer</span>
          </span>
        </label>
      </div>

      {/* Credit Card Information */}
      <div
        id="credit-card-section"
        className="payment-details"
        style={{ display: selectedPayment === "credit_card" ? "block" : "none" }}
      >
        <div className="form-group">
          <label htmlFor="card-number" className="form-label">
            Credit Card Number
          </label>
          <div className="card-input">
            <input
              type="text"
              className="form-control"
              id="card-number"
              name="card_number"
              placeholder="3431 2201 8931 855"
              required
            />
            <span className="card-brand" id="card-brand">
              VISA
            </span>
          </div>
        </div>
        <div className="form-row" id="card-details-row">
          <div className="form-group">
            <label htmlFor="expiry-date" className="form-label">
              Expiry Date
            </label>
            <input
              type="text"
              className="form-control"
              id="expiry-date"
              name="expiry_date"
              placeholder="12/05/23"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv" className="form-label">
              CVV
            </label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              name="cvv"
              placeholder="123"
              required
              maxLength={4}
            />
          </div>
        </div>
      </div>

      {/* PayPal Section */}
      <div
        id="paypal-section"
        className="payment-details"
        style={{ display: selectedPayment === "paypal" ? "block" : "none" }}
      >
        <div className="form-group">
          <label htmlFor="paypal-email" className="form-label">
            PayPal Email
          </label>
          <input
            type="email"
            className="form-control"
            id="paypal-email"
            name="paypal_email"
            placeholder="example@paypal.com"
          />
        </div>
      </div>

      {/* Bank Transfer Section */}
      <div
        id="bank-transfer-section"
        className="payment-details"
        style={{ display: selectedPayment === "bank_transfer" ? "block" : "none" }}
      >
        <div className="form-group">
          <label htmlFor="account-number" className="form-label">
            Account Number
          </label>
          <input
            type="text"
            className="form-control"
            id="account-number"
            name="account_number"
            placeholder="Enter your account number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="routing-number" className="form-label">
            Routing Number
          </label>
          <input
            type="text"
            className="form-control"
            id="routing-number"
            name="routing_number"
            placeholder="Enter your routing number"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
