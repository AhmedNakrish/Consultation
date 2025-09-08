import Statessection from "@/components/home/components/statessection/statessection";
import Breadcrumb from "@/components/shared/breadcrumb/breadcrumb";
import React from "react";

const Aboutpage = () => {
  return (
    <>
      <Breadcrumb name={"About us"} />

      <div className="about-page  ">
        <div className="head text-center w-75 mb-5 m-auto">
          <h2 className="section-title">What we do</h2>
          <p className="section-description">
            We provide comprehensive advisory services in legal, financial, and
            business domains, helping you make informed decisions backed by deep
            expertise and market insight.
          </p>
        </div>
        <div className="mb-5">
          <section className="our-categories ">
            <div className="container position-relative">
              <div className="categories-bg-gradient">
                <div className="gradient1" />
                <div className="gradient2" />
              </div>
              <div className="categories-grid">
                <div
                  className="category-card"
                  style={{ backgroundImage: 'url("/assets/images/img1.jpg")' }}
                ></div>
                <div
                  className="category-card category-card-right"
                  style={{ backgroundImage: 'url("assets/images/img2.png")' }}
                ></div>
                <div className="third">
                  <p className="category-description">
                    <span className="highlight-blue">Vision</span> provide
                    comprehensive advisory services in legal, financial, and
                    business domains, helping you make informed decisions backed
                    by deep expertise and market insight. We provide
                    comprehensive advisory services in legal, financial, and
                    business domains, helping you make informed decisions backed
                    by deep expertise and market insight.We provide
                    comprehensive advisory services in legal, financial, and
                    business domains,
                  </p>
                  <div
                    className="category-card"
                    style={{ backgroundImage: 'url("assets/images/img3.jpg")' }}
                  ></div>
                </div>
                <p className="category-description-second mt-5">
                  <span className="highlight-blue">Mission</span> provide
                  comprehensive advisory services in legal, financial, and
                  business domains, helping you make informed decisions backed
                  by deep expertise and market insight. We provide comprehensive
                  advisory services in legal, financial, and business domains,
                  helping you make informed decisions backed by deep expertise
                  and market insight.We provide comprehensive advisory services
                  in legal, financial, and business domains,
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
