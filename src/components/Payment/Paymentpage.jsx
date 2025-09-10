import React from "react";
import PackageDetails from "./PackageDetails";
import PaymentForm from "./PaymentForm";
import PaymentActions from "./PaymentActions";
import SuccessModal from "./SuccessModal";

const Paymentpage = () => {
  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        {/* Package Details */}
        <PackageDetails />

        {/* Payment Section */}
        <div className="payment-section">
          <div className="payment-header">
            <h2 className="payment-title">Final Step, Make the Payment</h2>
            <p className="payment-subtitle">
              If you would like to finalize your subscription, please complete
              the payment process using a valid payment method.
            </p>
          </div>

          <PaymentForm />
          <PaymentActions />
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal />
    </div>
  );
};

export default Paymentpage;
