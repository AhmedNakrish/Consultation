"use client";
import React from "react";

const PaymentActions = () => {
  return (
    <div className="payment-actions">
      <button type="button" className="btn btn-cancel">
        Cancel
      </button>
      <button
        type="submit"
        className="btn btn-primary"
        id="payment-submit"
        form="payment-form"
      >
        Make Payment
      </button>
    </div>
  );
};

export default PaymentActions;
