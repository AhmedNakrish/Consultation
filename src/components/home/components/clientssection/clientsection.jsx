"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Clientsection = () => {
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
              <SwiperSlide>
                <img src="assets/images/Google.png" alt="Google Logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/images/Pinterest.png" alt="Pinterest Logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/images/Spotify.png" alt="Spotify Logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/images/Reddit.png" alt="Reddit Logo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="assets/images/Stripe.png" alt="Stripe Logo" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clientsection;
