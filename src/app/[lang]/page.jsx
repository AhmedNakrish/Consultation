"use client";

import React, { useEffect, useState } from "react";
import Herosection from "@/components/home/components/herosection/herosection";
import Statessection from "@/components/home/components/statessection/statessection";
import Categoriessection from "@/components/home/components/categoriessection/categoriessection";
import Businesssection from "@/components/home/components/businesssection/businesssection";
import Selectsection from "@/components/home/components/selectsection/selectsection";
import Clientsection from "@/components/home/components/clientssection/clientsection";
import Contactlocationsection from "@/components/home/components/contactlocationsection/contactlocationsection";

import axiosInstance from "@/lib/axiosInstance";

const Homepage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // optional
  const [error, setError] = useState(null); // optional

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/api/v1/settings");
        setData(res.data?.data || {});
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
    <div>
      {/* Optional: Show loading state */}
      {loading && <p>Loading...</p>}

      {/* Optional: Show error state */}
      {error && <p>Error loading homepage content.</p>}

      {/* Components using fetched data */}
      <Herosection data={data?.general} />
      <Statessection data={data?.general}/>
      <Categoriessection data={data?.general} />
      <Businesssection />
      <Selectsection />
      <Clientsection />
      <Contactlocationsection />
    </div>
  );
};

export default Homepage;
