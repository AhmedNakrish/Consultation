"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/lib/axiosInstance"; // 👈 مهم تستورده

const Footer = () => {
  const dialogRef = useRef(null);
  const [footer, setFooter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/api/v1/settings?key=contacts");
        //console.log("API Response:", res.data); // 👈 هنا تشوف البيانات
        setFooter(res?.data?.data || {});
      } catch (err) {
        console.error("Failed to fetch settings data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center">Loading footer...</p>;
  }

  if (error) {
    return <p className="text-center text-danger">Error loading footer</p>;
  }

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="hero-bg-layer layer1" />
        <div className="hero-bg-layer layer2" />

        <div className="footer-content px-1">
          <Image
            src={footer?.image || "/assets/images/footer-logo.svg"}
            alt="Consulting Logo"
            className="footer-logo-img"
            width={320}
            height={50}
          />

          <p className="footer-desc">{footer?.description}</p>

          <div className="footer-socials">
            {footer?.facebook && (
              <Link
                href={footer.facebook}
                className="footer-social"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f" />
              </Link>
            )}

            {footer?.linkedin && (
              <Link
                href={footer.linkedin}
                className="footer-social"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" />
              </Link>
            )}

            {footer?.twitter && (
              <Link
                href={footer.twitter}
                className="footer-social"
                aria-label="X"
              >
                <i className="fa-brands fa-x-twitter" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="footer-copyright">
            All Copy Rights Reserved For{" "}
            <span className="footer-bold">CONSULTING..</span> ~ 2025
          </div>
          <div className="footer-partner">
            <Link
              href="https://puiux.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="footer-partner-logo"
            >
              <Image
                src="/assets/images/PUIUX.svg"
                alt="Consulting Logo"
                className="footer-logo-img"
                width={117}
                height={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
