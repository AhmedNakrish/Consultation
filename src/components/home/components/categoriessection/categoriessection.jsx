"use client";
import React, { useEffect, useRef, useState } from "react";
import Modelrequest from "../herosection/modelrequest";
import Link from "next/link";
import axiosInstance from "@/lib/axiosInstance";
const Categoriessection = ({ data }) => {
  const dialogRef = useRef(null);

   const [dataser, setDataser] = useState(null);
  const [loading, setLoading] = useState(true); // optional
  const [error, setError] = useState(null); // optional

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/api/v1/services");
        setDataser(res?.data?.data || {});
      } catch (err) {
        console.error("Failed to fetch settings data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
    

      <section className="our-categories">
        <div className="container position-relative">
          <div className="categories-bg-gradient">
            <div className="gradient1" />
            <div className="gradient2" />
          </div>
       {Array.isArray(dataser) && dataser.length >= 3 && (
  <div className="categories-grid">
    <div
      className="category-card"
      style={{
        backgroundImage: `url(${dataser[0]?.image})`,
      }}
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <div className="category-content">
        <h3>{dataser[0]?.name}</h3>
        <span className="coming-soon">{dataser[0]?.status}</span>
      </div>
    </div>

    <div
      className="category-card category-card-right"
      style={{
        backgroundImage: `url(${dataser[1]?.image})`,
      }}
      data-aos="fade-up"
      data-aos-delay={200}
      data-aos-duration={1000}
    >
      <div className="category-content">
        <h3>{dataser[1]?.description}</h3>
        <Link
          href="/en"
          className="explore-btn d-flex align-items-center gap-2 position-relative overflow-hidden"
        >
          Explore
        </Link>
      </div>
    </div>

    <div
      className="third"
      data-aos="fade-up"
      data-aos-delay={400}
      data-aos-duration={1000}
    >
      {data?.service_description && (
        <p className="category-description">
          <span className="highlight-blue">
            {data.service_description.charAt(0)}
          </span>
          {data.service_description.slice(1)}
        </p>
      )}
      <div
        className="category-card"
        style={{
          backgroundImage: `url(${dataser[2]?.image})`,
        }}
      >
        <div className="category-content">
          <h3>{dataser[2]?.name}</h3>
          <span className="coming-soon">{dataser[2]?.status}</span>
        </div>
      </div>
    </div>
  </div>
)}

        </div>


        
        <div className="call-to-action">
          <div className="container">
            <div className="cta-bg" />
            <div className="cta-content">
              <h2 data-aos="fade-up" data-aos-duration={1000}>
                Welcome to Our Website
              </h2>
              <h3
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1000}
                className="w-75"
              >
                {data?.request_consultation_title}
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
              >
                             {data?.request_consultation_description}

              </p>
              <button
                className="btn btn-gold"
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={1000}
                onClick={() => dialogRef.current?.open()}
              >
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      <Modelrequest ref={dialogRef} />
    </>
  );
};

export default Categoriessection;
