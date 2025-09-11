import React from "react";
import Link from "next/link";

const Breadcrumb = ({ name, chiled, image }) => {
  return (
    <nav
      aria-label="breadcrumb"
      className="breadcrumb-nav"
      style={image ? { background: `url(${image})`, backgroundSize: 'cover' } : {}}
    >
      <ol className="breadcrumb-container">
        <li className="breadcrumb-item">
          <Link href="/en" className="breadcrumb-link">
            Home
          </Link>
        </li>

        {name && (
          <li className="breadcrumb-item">
            <Link href={`/en/${name}`} className="breadcrumb-link">
              {name}
            </Link>
          </li>
        )}

        {chiled && (
          <li
            className="breadcrumb-item breadcrumb-active"
            aria-current="page"
          >
            <h1>{chiled}</h1>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
