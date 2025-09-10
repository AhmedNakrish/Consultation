'use client';

import React, { useRef, useEffect, useState } from "react";
import Image from 'next/image';
import Modelrequest from "../herosection/modelrequest";
import axiosInstance from "@/lib/axiosInstance";

const Statessection = ({data}) => {
  const dialogRef = useRef(null);

  const [stats, setStats] = useState({
    satisfied_clients: 0,
    accounting_services: 0,
    team_members: 0,
    successful_projects: 0,
  });
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axiosInstance.get('/api/v1/settings?key=statistics');
        const statistics = response.data?.statistics;

        if (statistics) {
          setStats({
            satisfied_clients: statistics.satisfied_clients_count ?? 0,
            accounting_services: statistics.accounting_services_count ?? 0,
            team_members: statistics.team_members_count ?? 0,
            successful_projects: statistics.successful_projects_count ?? 0,
          });
        }
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <section className="stats-section">
        <div className="stats-header" data-aos="fade-up" data-aos-duration={1000}>
          <h2>Welcome to Our Website</h2>
          <h3 className="w-50">                {data?.home_intro_description}
</h3>
          <button className="btn btn-gold" onClick={() => dialogRef.current?.open()}>
            Request Consultation
          </button>
        </div>
        <div className="container">
          <div className="stats-container">
            <div className="stat-item" data-aos="fade-up" data-aos-delay={100} data-aos-duration={1000}>
              <div className="stat-icon">
                <Image src="/assets/images/thumbs-up.png" alt="Satisfied Clients" width={44} height={44} />
              </div>
              <div className="stat-number">+{stats.satisfied_clients}</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay={200} data-aos-duration={1000}>
              <div className="stat-icon">
                <Image src="/assets/images/chart.png" alt="Accounting Services" width={44} height={44} />
              </div>
              <div className="stat-number">+{stats.accounting_services}</div>
              <div className="stat-label">Accounting Services</div>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay={300} data-aos-duration={1000}>
              <div className="stat-icon">
                <Image src="/assets/images/users.png" alt="Team Members" width={44} height={44} />
              </div>
              <div className="stat-number">+{stats.team_members}</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay={400} data-aos-duration={1000}>
              <div className="stat-icon">
                <Image src="/assets/images/thumbs-up.png" alt="Successful Projects" width={44} height={44} />
              </div>
              <div className="stat-number">+{stats.successful_projects}</div>
              <div className="stat-label">Successful Projects</div>
            </div>
          </div>
        </div>
        <div className="ellipse-bg" />
      </section>
      <Modelrequest ref={dialogRef} />
    </>
  );
};

export default Statessection;
