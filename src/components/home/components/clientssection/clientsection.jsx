"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axiosInstance from "@/lib/axiosInstance";
import Image from "next/image";
import Link from "next/link";

const Clientsection = ({ data }) => {
  const dialogRef = useRef(null);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(`/api/v1/clients`);
        setClients(res?.data?.data || []);
      } catch (err) {
        console.error("Failed to fetch package data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="clients-section">
        <div className="clients-header">
          <p className="clients-subtitle" data-aos="fade-up">
            Our Clients
          </p>
          <h2 className="clients-title" data-aos="fade-up" data-aos-delay={100}>
            Clients Who Trust Us
          </h2>
        </div>
        <div className="container">
          <div
            className="clients-swiper-container swiper"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={3000}
            >
              {clients?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link href={item.link}  >
                  <Image src={item.logo} alt="Google Logo" width={100} height={100}   />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clientsection;
