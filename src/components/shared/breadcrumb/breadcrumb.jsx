import React from "react";
import Link from "next/link";
const Breadcrumb = ({name}) => {
  return (
    <>
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <ol className="breadcrumb-container">
          <li className="breadcrumb-item">
            <Link href="/en" className="breadcrumb-link">
              Home{" "}
            </Link>
          </li>
          <li className="breadcrumb-item breadcrumb-active" aria-current="page">
            <h1> {name}</h1>
          </li>
        </ol>
      </nav>
      ;
    </>
  );
};

export default Breadcrumb;
