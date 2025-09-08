import React from 'react'
import Image from 'next/image';
const Statessection = () => {
  return (
    <>
    <section className="stats-section">
  <div className="stats-header" data-aos="fade-up" data-aos-duration={1000}>
    <h2>Welcome to Our Website</h2>
    <h3 className="w-50">We are a trusted accounting and financial consulting firm, helping individuals and businesses
      achieve
      success.</h3>
    <button className="btn btn-gold">Request Consultation</button>
  </div>
  <div className="container">
    <div className="stats-container">
      <div className="stat-item" data-aos="fade-up" data-aos-delay={100} data-aos-duration={1000}>
        <div className="stat-icon">
          <Image src="/assets/images/thumbs-up.png" alt="Satisfied Clients" width={44} height={44}/>
        </div>
        <div className="stat-number">+10.2k</div>
        <div className="stat-label">Satisfied Clients</div>
      </div>
      <div className="stat-item" data-aos="fade-up" data-aos-delay={200} data-aos-duration={1000}>
        <div className="stat-icon">
          <Image src="/assets/images/chart.png" alt="Accounting Services" width={44} height={44}/>
        </div>
        <div className="stat-number">+400</div>
        <div className="stat-label">Accounting Services</div>
      </div>
      <div className="stat-item" data-aos="fade-up" data-aos-delay={300} data-aos-duration={1000}>
        <div className="stat-icon">
          <Image src="/assets/images/users.png" alt="Team Members" width={44} height={44}/>
        </div>
        <div className="stat-number">+1k</div>
        <div className="stat-label">Team Members</div>
      </div>
      <div className="stat-item" data-aos="fade-up" data-aos-delay={400} data-aos-duration={1000}>
        <div className="stat-icon">
          <Image src="/assets/images/thumbs-up.png" alt="Successful Projects" width={44} height={44}/>
        </div>
        <div className="stat-number">+10.2k</div>
        <div className="stat-label">Successful Projects</div>
      </div>
    </div>
  </div>
  <div className="ellipse-bg" />
</section>

    </>
  );
}

export default Statessection