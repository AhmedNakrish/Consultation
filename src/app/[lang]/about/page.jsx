"use client";
import React, { useEffect, useRef, useState } from "react";
import Statessection from "@/components/home/components/statessection/statessection";
import Breadcrumb from "@/components/shared/breadcrumb/breadcrumb";
import axiosInstance from "@/lib/axiosInstance";

const Aboutpage = () => {
  const dialogRef = useRef(null);
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/api/v1/settings?key=about-us");
        //console.log("API Response:", res.data); // 👈 هنا تقدر تشوف الـ parameters
        setAbout(res?.data?.data || {}); // store data properly
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
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-danger">Error loading data</p>;
  }

  return (
    <>
      <Breadcrumb name={"About us"} />

      <div className="about-page">
        <div className="head text-center w-75 mb-5 m-auto">
          <h2 className="section-title">What we do</h2>
          <p className="section-description">{about?.description}</p>
        </div>

        <div className="mb-5">
          <section className="our-categories">
            <div className="container position-relative">
              <div className="categories-bg-gradient">
                <div className="gradient1" />
                <div className="gradient2" />
              </div>
              <div className="categories-grid">
                <div
                  className="category-card"
                  style={{ backgroundImage: `url(${about?.image_1})` }}
                ></div>

                <div
                  className="category-card category-card-right"
                  style={{ backgroundImage: `url(${about?.image_2})` }}
                ></div>

                <div className="third">
                  <p className="category-description">
                    <span className="highlight-blue">Vision</span>{" "}
                    {about?.vision}
                  </p>
                  <div
                    className="category-card"
                    style={{ backgroundImage: `url(${about?.image_3})` }}
                  ></div>
                </div>

                <p className="category-description-second mt-5">
                  <span className="highlight-blue">Mission</span>{" "}
                  {about?.mission}
                </p>
              </div>
            </div>
          </section>
        </div>

        <Statessection />
      </div>
    </>
  );
};

export default Aboutpage;
