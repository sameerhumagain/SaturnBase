import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-gray-500 text-xs md:text-base font-semibold">
      {items.map((item, index) => (
        <span key={index}>
          {index !== items.length - 1 ? (
            <>
              <Link to={item.path} className="hover:underline">
                {item.label}
              </Link>
              <span className="mx-1">/</span>
            </>
          ) : (
            <span className="text-secondary">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
