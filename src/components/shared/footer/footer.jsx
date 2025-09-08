import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const footer = () => {
  return (
    <>
    <footer className="site-footer">
  <div className="footer-main">
    <div className="hero-bg-layer layer1" />
    <div className="hero-bg-layer layer2" />
    <div className="footer-content px-1">
      <Image src="assets/images/footer-logo.svg" alt="Consulting Logo" className="footer-logo-img" width={320} height={50}/>
      <p className="footer-desc">
        We provide comprehensive advisory services in legal, financial, and business domains, helping you make informed
        decisions backed by deep expertise and market insight.
      </p>
      <div className="footer-socials">
        <Link href="#" className="footer-social" aria-label="Facebook">
          <i className="fa-brands fa-facebook-f" />
        </Link>
        <Link href="#" className="footer-social" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin-in" />
        </Link>
        <Link href="#" className="footer-social" aria-label="X">
          <i className="fa-brands fa-x-twitter" />
        </Link>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="footer-copyright">
        All Copy Rights Reserved For <span className="footer-bold">CONSULTING..</span> ~ 2025
      </div>
      <div className="footer-partner">
        <Link href="https://puiux.com/" rel="noopener noreferrer" target="_blank" className="footer-partner-logo">
          <Image src="assets/images/PUIUX.svg" alt="Consulting Logo" className="footer-logo-img" width={117} height={48}/>
        </Link>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default footer