import Reyal from '@/components/shared/Reyal/Reyal'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Paymentpage = () => {
  return (
    <>
  <div>
  <div className="payment-container">
    <div className="payment-wrapper">
      {/* Package Details Section */}
      <div className="package-section">
        <div>
          <div className="package-header">
            <div className="package-icon">⚡</div>
            <div>
              <h2 className="package-title">Standard Package</h2>
              <p className="package-subtitle" id="package-subtitle">5/7 Services</p>
            </div>
          </div>
          <div className="package-price" id="package-price">
            <Reyal/><span id="price-amount">56</span>
            <span className="save-badge ms-3" id="save-badge" style={{display: 'none'}}>(Save 20%)</span>
          </div>
          <ul className="package-features" id="package-features">
            <li><span className="feature-icon">✓</span> Bookkeeping &amp; Financial Reporting</li>
            <li><span className="feature-icon">✓</span> Tax Preparation &amp; Planning</li>
            <li><span className="feature-icon">✓</span> Payroll Management</li>
            <li><span className="feature-icon">✓</span> Financial Consulting</li>
            <li><span className="feature-icon">✓</span> Dedicated Account Manager</li>
            <li><span className="feature-icon disabled" id="feature-tax-optimization">○</span> Advanced Tax Optimization
            </li>
            <li><span className="feature-icon disabled">○</span> International Compliance</li>
          </ul>
        </div>
        <div className="auto-renewal">
          {/* Pricing Toggle */}
          <div className="pricing-toggle-container">
            <div className="content-toggle">
              <h3>Package Preference</h3>
              <p className="toggle-description">Choose how you’d like to be billed. <span className="annual-text">Annual</span> billing gives you a better rate
                and extra savings compared to monthly payments.</p>
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
              <input type="checkbox" id="policy-agree" name="policy_agree" required />
              <span className="policy-label">
                I agree to the <Link href="/en/policies" className="terms-link">Policies</Link>
              </span>
            </label>
          </div>
        </div>
      </div>
      {/* Payment Information Section */}
      <div className="payment-section">
        <div className="payment-header">
          <h2 className="payment-title">Final Step, Make the Payment</h2>
          <p className="payment-subtitle">
            If you would like to finalize your subscription, please complete the payment process using a valid payment
            method.
          </p>
        </div>
        <div className="payment-form-scroll">
          <form id="payment-form">
            <h3>Personal Information</h3>
            {/* Personal Information */}
            <div className="form-group">
              <label htmlFor="consultName" className="form-label">Name</label>
              <input type="text" className="form-control" id="consultName" name="name" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" defaultValue="Deanna.Curtis@Example.Com" placeholder="Enter your email address" required />
            </div>
            <div className="form-group">
              <label htmlFor="consultPhone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="consultPhone" name="phone" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="city" className="form-label">City</label>
              <select className="custom-package-select" id="city" name="city" required>
                <option value disabled>Select your city</option>
                <option value="Riyadh" selected>Riyadh</option>
                <option value="Jeddah">Jeddah</option>
                <option value="Mecca">Mecca</option>
                <option value="Medina">Medina</option>
                <option value="Dammam">Dammam</option>
                <option value="Khobar">Khobar</option>
                <option value="Abha">Abha</option>
                <option value="Tabuk">Tabuk</option>
                <option value="Hail">Hail</option>
                <option value="Jizan">Jizan</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" name="address" placeholder="Enter your full address" />
            </div>
            <div className="form-group">
              <label htmlFor="commercial_register" className="form-label">Commercial Register</label>
              <div className="file-upload-container">
                <input type="file" className="file-upload-input" id="commercial_register" name="commercial_register" accept="image/*,.pdf" required />
                <label htmlFor="commercial_register" className="file-upload-label">
                  <div className="upload-icon">
                    <i className="fas fa-cloud-upload-alt" />
                  </div>
                  <div className="upload-text">
                    <span className="upload-title">Upload Commercial Register</span>
                    <span className="upload-subtitle">Click to browse or drag and drop</span>
                    <span className="upload-formats">Supported formats: JPG, PNG, PDF</span>
                  </div>
                </label>
                <div className="file-preview" id="file-preview" style={{display: 'none'}}>
                  <img id="preview-image" src alt="Preview" />
                  <div className="file-info">
                    <span id="file-name" />
                    <button type="button" className="remove-file" id="remove-file">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Payment Method Selection */}
            <div className="form-group">
              <h3>Payment Information</h3>
              <label className="form-label">Payment Method</label>
              <div className="payment-methods">
                <label className="payment-option">
                  <input type="radio" name="payment_method" defaultValue="credit_card" defaultChecked />
                  <span className="payment-option-content">
                    <i className="fas fa-credit-card" />
                    <span>Credit/Debit Card</span>
                  </span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment_method" defaultValue="paypal" />
                  <span className="payment-option-content">
                    <i className="fab fa-paypal" />
                    <span>PayPal</span>
                  </span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment_method" defaultValue="bank_transfer" />
                  <span className="payment-option-content">
                    <i className="fas fa-university" />
                    <span>Bank Transfer</span>
                  </span>
                </label>
              </div>
            </div>
            {/* Credit Card Information */}
            <div id="credit-card-section" className="payment-details">
              <div className="form-group">
                <label htmlFor="card-number" className="form-label">Credit Card Number</label>
                <div className="card-input">
                  <input type="text" className="form-control" id="card-number" name="card_number" placeholder="3431 2201 8931 855" required />
                  <span className="card-brand" id="card-brand">VISA</span>
                </div>
              </div>
              <div className="form-row" id="card-details-row">
                <div className="form-group">
                  <label htmlFor="expiry-date" className="form-label">Expiry Date</label>
                  <input type="text" className="form-control" id="expiry-date" name="expiry_date" placeholder="12/05/23" required />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cvv" name="cvv" placeholder={123} required maxLength={4} />
                </div>
              </div>
            </div>
            {/* PayPal Section */}
            <div id="paypal-section" className="payment-details" style={{display: 'none'}}>
              <div className="form-group">
                <label htmlFor="paypal-email" className="form-label">PayPal Email</label>
                <input type="email" className="form-control" id="paypal-email" name="paypal_email" placeholder="example@paypal.com" />
              </div>
            </div>
            {/* Bank Transfer Section */}
            <div id="bank-transfer-section" className="payment-details" style={{display: 'none'}}>
              <div className="form-group">
                <label htmlFor="account-number" className="form-label">Account Number</label>
                <input type="text" className="form-control" id="account-number" name="account_number" placeholder="Enter your account number" />
              </div>
              <div className="form-group">
                <label htmlFor="routing-number" className="form-label">Routing Number</label>
                <input type="text" className="form-control" id="routing-number" name="routing_number" placeholder="Enter your routing number" />
              </div>
            </div>
            {/* Discount Section */}
            <div className="discount-section">
              <label htmlFor="discount-code" className="form-label">Discount Coupon</label>
              <div className="discount-input-group">
                <input type="text" className="form-control discount-input" id="discount-code" name="discount_code" placeholder="Enter coupon code" />
                <button type="button" className="apply-btn">Apply</button>
              </div>
            </div>
          </form>
        </div>
        {/* Payment Actions */}
        <div className="payment-actions">
          <button type="button" className="btn btn-cancel">Cancel</button>
          <button type="submit" className="btn btn-primary" id="payment-submit" form="payment-form">Make Payment</button>
        </div>
      </div>
    </div>
  </div>
  {/* Success Modal */}
  <div className="modal-overlay" id="success-modal">
    <div className="success-modal">
      <button className="btn btn-close-icon" id="close-payment-modal" title="Close">
        <i className="fas fa-times" />
      </button>
      <div className="success-icon">
        <i className="fas fa-check" />
      </div>
      <h2 className="modal-title">Payment Successful!</h2>
      <p className="modal-subtitle">Your payment has been processed successfully. Thank you for your purchase!</p>
      <div className="payment-details-summary">
        <div className="summary-row">
          <span>Package:</span>
          <span>Standard Package</span>
        </div>
        <div className="summary-row">
          <span>Amount:</span>
          <span id="modal-amount">SAR 56.00</span>
        </div>
        <div className="summary-row">
          <span>Payment Method:</span>
          <span id="modal-payment-method">Credit Card</span>
        </div>
        <div className="summary-row">
          <span>Transaction ID:</span>
          <span id="transaction-id">#TXN123456789</span>
        </div>
        <div className="summary-row">
          <span>Total Paid:</span>
          <span id="modal-total-paid">SAR 56.00</span>
        </div>
      </div>
      <div className="modal-actions">
        <button className="btn btn-download" id="download-bill">
          <i className="fas fa-download" />
          Download PDF Bill
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Paymentpage