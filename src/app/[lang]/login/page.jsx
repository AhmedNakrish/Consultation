"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false); 
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 login_page">
      <div className="login-box p-5 rounded">
         <Image src="/assets/images/Logo.svg" alt="Logo" width={200} height={50} className="login-logo"/>
         <h2 className="login-text mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className={`custom-checkbox ${rememberMe ? 'checked' : ''}`}
                      onClick={() => setRememberMe(!rememberMe)}
                    ></div>
                    
                    <label className="text-light ms-2" style={{ cursor: 'pointer' }}>
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-decoration-none" style={{ color: '#b68f0e' }}>
                    Forgot password?
                  </a>
                </div>
          <button type="submit" className="btn w-100 login-btn">
            Login
          </button>
          <div className="text-center regist-link">
                  <p className="text-light opacity-75 mb-0">
                    Don't have an account?{' '}
                    <a href="#" className="text-decoration-none fw-semibold" style={{ color: '#b68f0e' }}>
                      Create one now
                    </a>
                  </p>
                </div>
        </form>
      </div>
    </div>
  );
}
