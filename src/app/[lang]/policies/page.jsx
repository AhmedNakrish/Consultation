import React from "react";
import Breadcrumb from "@/components/shared/breadcrumb/breadcrumb";

const Policiespage = () => {
  return (
    <>
      <Breadcrumb name={"Policies"} />

      <section className="policies-section">
        <div className="container">
          <h2 className="policies-title">Our Consulting Policies</h2>
          <p className="policies-subtitle">
            Learn about our commitment to delivering trusted consulting services
            tailored to your business needs.
          </p>
          <div className="consulting-services">
            <div
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="service-icon">
                <i className="fas fa-balance-scale" />
              </div>
              <h3 className="service-title">Trusted Legal Services</h3>
              <p className="service-desc">
                Our legal consulting services provide expert guidance on
                compliance, contracts, and dispute resolution. We ensure your
                business operates within regulatory frameworks, offering
                tailored solutions to protect your interests and mitigate risks.
              </p>
              <ul className="service-features">
                <li> Contract drafting and review</li>
                <li> Regulatory compliance advice</li>
                <li> Dispute resolution support</li>
              </ul>
            </div>
            <div
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="service-icon">
                <i className="fas fa-calculator" />
              </div>
              <h3 className="service-title">
                Professional Accounting Services
              </h3>
              <p className="service-desc">
                Our accounting services streamline your financial operations
                with expert bookkeeping, tax planning, and financial reporting.
                We help you maintain accurate records and optimize your
                financial strategy for sustainable growth.
              </p>
              <ul className="service-features">
                <li> Bookkeeping and financial statements</li>
                <li> Tax planning and compliance</li>
                <li> Budgeting and forecasting</li>
              </ul>
            </div>
            <div
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="service-icon">
                <i className="fas fa-cogs" />
              </div>
              <h3 className="service-title">
                Engineering Consulting Solutions
              </h3>
              <p className="service-desc">
                Our engineering consulting services deliver innovative solutions
                for project management, design, and implementation. We provide
                technical expertise to ensure your projects are completed
                efficiently and meet industry standards.
              </p>
              <ul className="service-features">
                <li> Project planning and management</li>
                <li> Technical design and analysis</li>
                <li> Quality assurance and compliance</li>
              </ul>
            </div>
          </div>
          <div className="policy-agreement">
            <h3 className="agreement-title">Policy Agreement</h3>
            <p className="agreement-desc">
              By engaging with our services, you agree to adhere to our
              policies, which ensure transparency, confidentiality, and mutual
              respect. For detailed terms, please contact our support team or
              review our full policy documentation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Policiespage;
