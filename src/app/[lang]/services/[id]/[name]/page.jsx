"use client";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/shared/breadcrumb/breadcrumb";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getServiceById } from "@/hooks/getServiceById";
const page = () => {
  const { id, name } = useParams();
  const [service, setService] = useState(null);
  console.log(service);
  useEffect(() => {
    getServiceById(id)
      .then((data) => setService(data.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!service) return <p>Loading...</p>;

  return (
    <>
      <Breadcrumb name="services" chiled={name} image={service.image} />

      <main className="accounting-services-page">
        <div className="container">
          <header className="text-center mb-5" data-aos="fade-up">
            <h1 className="page-title">{service.name}</h1>
            <p className="lead text-muted">{service.description}</p>
          </header>
          <section className="services-overview mb-5">
            <div className="row">
              {service.features?.map((item) => (
                <div
                  key={item.id}
                  className="col-md-6 mb-4"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="service-card p-4 fade-in-up">
                    <h2 className="service-title">{item.title}</h2>
                    <p>{item.description}</p>
                    
                      {item.advantages?.map((adv)=>(
                         <ul className="service-features" key={adv.id}>
                          <li>
                       {adv.description}
                      </li>
                          </ul>
                      ))}
                      
                      
                   
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Process Section */}
          <section className="process-section" data-aos="fade-up">
            <div className="text-center mb-4">
              <h2
                className="mb-3"
                style={{ color: "var(--dark-blue)", fontWeight: 700 }}
              >
                Our Proven Process
              </h2>
              <p className="lead text-muted">
                Simple steps to get your accounting needs handled professionally
              </p>
            </div>
            <div className="process-steps">
              <div
                className="process-step"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="step-number">1</div>
                <h3 className="step-title">Initial Consultation</h3>
                <p className="step-description">
                  We discuss your business needs and financial goals to create a
                  customized solution.
                </p>
              </div>
              <div
                className="process-step"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="step-number">2</div>
                <h3 className="step-title">Service Setup</h3>
                <p className="step-description">
                  Our team configures your accounting systems and processes for
                  maximum efficiency.
                </p>
              </div>
              <div
                className="process-step"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="step-number">3</div>
                <h3 className="step-title">Ongoing Support</h3>
                <p className="step-description">
                  Receive continuous support and regular financial insights to
                  drive your business forward.
                </p>
              </div>
            </div>
          </section>
          <section
            className="cta-section text-center py-5"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <h2>Get Started Today</h2>
            <p className="mb-4">
              Contact us to learn how our accounting services can streamline
              your business operations and drive growth.
            </p>
            <Link href="/en/payment" className="btn cta-btn">
              Request Consultation
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default page;
