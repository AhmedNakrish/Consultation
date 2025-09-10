"use client";
import React from "react";
import PaymentMethods from "./PaymentMethods";

const PaymentForm = () => {
  return (
    <div className="payment-form-scroll">
      <form id="payment-form">
        <h3>Personal Information</h3>

        <div className="form-group">
          <label htmlFor="consultName">Name</label>
          <input type="text" id="consultName" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="consultPhone">Phone</label>
          <input type="tel" id="consultPhone" />
        </div>

        <div className="form-group">
          {" "}
          <label htmlFor="city" className="form-label">
            City
          </label>{" "}
          <select
            className="custom-package-select"
            id="city"
            name="city"
            required
          >
            {" "}
            <option value disabled>
              Select your city
            </option>{" "}
            <option value="Riyadh" selected>
              Riyadh
            </option>{" "}
            <option value="Jeddah">Jeddah</option>{" "}
            <option value="Mecca">Mecca</option>{" "}
            <option value="Medina">Medina</option>{" "}
            <option value="Dammam">Dammam</option>{" "}
            <option value="Khobar">Khobar</option>{" "}
            <option value="Abha">Abha</option>{" "}
            <option value="Tabuk">Tabuk</option>{" "}
            <option value="Hail">Hail</option>{" "}
            <option value="Jizan">Jizan</option>{" "}
          </select>{" "}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" />
        </div>

        <div className="form-group">
          {" "}
          <label htmlFor="commercial_register" className="form-label">
            Commercial Register
          </label>{" "}
          <div className="file-upload-container">
            {" "}
            <input
              type="file"
              className="file-upload-input"
              id="commercial_register"
              name="commercial_register"
              accept="image/*,.pdf"
              required
            />{" "}
            <label htmlFor="commercial_register" className="file-upload-label">
              {" "}
              <div className="upload-icon">
                {" "}
                <i className="fas fa-cloud-upload-alt" />{" "}
              </div>{" "}
              <div className="upload-text">
                {" "}
                <span className="upload-title">
                  Upload Commercial Register
                </span>{" "}
                <span className="upload-subtitle">
                  Click to browse or drag and drop
                </span>{" "}
                <span className="upload-formats">
                  Supported formats: JPG, PNG, PDF
                </span>{" "}
              </div>
            </label>{" "}
            <div
              className="file-preview"
              id="file-preview"
              style={{ display: "none" }}
            >
              {" "}
              <img id="preview-image" src alt="Preview" />{" "}
              <div className="file-info">
                {" "}
                <span id="file-name" />{" "}
                <button type="button" className="remove-file" id="remove-file">
                  {" "}
                  <i className="fas fa-times" />{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>

        {/* Payment Methods */}
        <PaymentMethods />
      </form>
    </div>
  );
};

export default PaymentForm;
