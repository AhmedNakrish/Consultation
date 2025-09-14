"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // ✅ state for Name
  const [phone, setPhone] = useState(""); // ✅ state for Phone
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      name,
      phone,
      password,
      rememberMe,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (res.ok) {
        alert("✅ Registered successfully!");
      } else {
        alert("❌ Registration failed: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("❌ Something went wrong.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 login_page">
      <div className="login-box p-5 rounded">
        <Image
          src="/assets/images/Logo.svg"
          alt="Logo"
          width={200}
          height={50}
          className="login-logo"
        />
        <h2 className="login-text mb-4">Register</h2>

        <form onSubmit={handleRegister}>
          {/* Email input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Name input */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              required
            />
          </div>

          {/* Phone input */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember me */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          {/* Register button */}
          <button type="submit" className="btn w-100 login-btn">
            Register
          </button>

          {/* Already have account? */}
          <div className="text-center regist-link mt-3">
            <p className="text-dark opacity-75 mb-0">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-decoration-none fw-semibold"
                style={{ color: "#b68f0e" }}
              >
                Login here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
