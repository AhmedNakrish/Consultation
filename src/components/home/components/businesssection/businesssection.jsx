import React from 'react'
import Link from 'next/link'
const Businesssection = () => {
  return (
    <>
   <div className="business-section">
  <div className="business-header" data-aos="fade-up" data-aos-duration={1000}>
    <p className="business-welcome">Welcome To Our Website</p>
    <h2 className="business-title">Tailored Accounting<br />Visits for Your Business</h2>
  </div>
  {/* Pricing Toggle */}
  <div className="pricing-toggle-container" data-aos="fade-up" data-aos-delay={200} data-aos-duration={1000}>
    <div className="pricing-toggle">
      <span className="toggle-label">Monthly</span>
      <label className="toggle-switch">
        <input type="checkbox" id="pricing-toggle" />
        <span className="toggle-slider" />
      </label>
      <span className="toggle-label">Annually</span>
      <span className="save-badge">Save 20%</span>
    </div>
  </div>
  <div className="container">
    <div className="business-cards">
      {/* Card 1 */}
      <div className="business-card card-blue" data-aos="fade-up" data-aos-delay={100} data-aos-duration={1000}>
        <div className="card-top">
          <span className="card-title">Field Visit 1</span>
          <span className="card-price">
            <span className="price-monthly">30</span>
            <span className="price-annually">24</span>
            {/*?php include 'includes/Reyal.php'; ?*/}
          </span>
        </div>
        <p className="card-desc">We provide comprehensive advisory services in legal, financial.</p>
        <ul className="card-list">
          <li><span className="check check-blue"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-blue"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-blue"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-blue"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-blue"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-blue"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
        </ul>
        <Link href="payment.php" className="card-btn btn-blue">Request Consultation</Link>
      </div>
      {/* Card 2 */}
      <div className="business-card card-green" data-aos="fade-up" data-aos-delay={200} data-aos-duration={1000}>
        <div className="card-top">
          <span className="card-title">Field Visit 2</span>
          <span className="card-price">
            <span className="price-monthly">50</span>
            <span className="price-annually">40</span>
            {/*?php include 'includes/Reyal.php'; ?*/}
          </span>
        </div>
        <p className="card-desc">We provide comprehensive advisory services in legal, financial.</p>
        <ul className="card-list">
          <li><span className="check check-green"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-green"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-green"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-green"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-green"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-green"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
        </ul>
        <Link href="/en/payment" className="card-btn btn-green">Request Consultation</Link>
      </div>
      {/* Card 3 */}
      <div className="business-card card-gold" data-aos="fade-up" data-aos-delay={300} data-aos-duration={1000}>
        <div className="card-top">
          <span className="card-title">Field Visit 3</span>
          <span className="card-price">
            <span className="price-monthly">80</span>
            <span className="price-annually">64</span>
            {/*?php include 'includes/Reyal.php'; ?*/}
          </span>
        </div>
        <p className="card-desc">We provide comprehensive advisory services in legal, financial.</p>
        <ul className="card-list">
          <li><span className="check check-gold"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-gold"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-gold"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-gold"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-gold"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
          <li><span className="check check-gold"><i className="fa-solid fa-circle-check" /></span> We provide comprehensive
            advisory services.</li>
        </ul>
        <Link href="/en/payment" className="card-btn btn-gold">Request Consultation</Link>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Businesssection