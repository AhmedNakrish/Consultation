"use client";
import React, { useEffect, useRef, useState } from "react";
import Breadcrumb from "@/components/shared/breadcrumb/breadcrumb";
import axiosInstance from "@/lib/axiosInstance";
const Servicespage = ({ data }) => {
  const dialogRef = useRef(null);

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true); // optional
  const [error, setError] = useState(null); // optional

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/api/v1/services");
        setService(res?.data?.data || {});
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
      <Breadcrumb name={"Services"} />

      <div className="services-page overflow-hidden">
        <div className="container position-relative">
          <h2 className="text-center mb-5">Our Services</h2>
          <div className=" categories-bg-gradient">
            <div className="gradient1" />
            <div className="gradient2" />
          </div>
          <div className="services-page-categories-grid">
            {service?.map((item) => (
              <a
                key={item.id}
                href={`/en/services/${item.id}/${item.name}`}
                className="service-card-link disabled-card"
                data-service="engineering"
              >
                <div
                  className=" category-card"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="category-content">
                    <h3>{item.name}</h3>
                    <span className="coming-soon">{item.status}</span>
                    <div className=" explore-btn d-flex align-items-center gap-2 position-relative overflow-hidden">
                      Explore
                      <span className="explore-icon d-flex justify-content-center align-items-center">
                        <svg
                          className="rotate-icon"
                          viewBox="0 0 16 19"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                        >
                          <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            fill="#b68f0e"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicespage;
