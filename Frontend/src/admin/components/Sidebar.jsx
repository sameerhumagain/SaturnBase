import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Icons/Home/creation_nepal_logo.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-auto bg-gray-100">
      <div
        className={`bg-white shadow-lg transition-all duration-300 ${
          isOpen ? "min-w-60 max-w-60" : "min-w-16 max-w-16"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 relative">
          {isOpen && (
            <div className="flex items-center">
              <Link to="/">
                <img
                  src={logo}
                  className="max-w-[125px] md:max-w-[130px] lg:max-w-[140px] xl:max-w-[170px] w-full"
                  alt="Company Logo"
                />
              </Link>
            </div>
          )}

          <div
            className={`
              absolute top-1/2 transform -translate-y-1/2 z-10
              ${isOpen ? "right-0" : "left-0"}
            `}
          >
            <button
              onClick={toggleSidebar}
              className={`
                flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md border border-gray-100
                ${isOpen ? "-mr-5" : "ml-2"}
              `}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="p-4 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mt-2 font-medium">Admin User</h3>
            <p className="text-xs text-gray-500">Admin Head</p>
          </div>
        )}

        <nav className="mt-2">
          {/* Linking the Dashboard */}
          <NavItem
            icon="dashboard"
            text="Dashboard"
            isOpen={isOpen}
            to="/admin"
            active={location.pathname === "/admin"}
          />
          {/* New Authentication Section */}
          {isOpen && (
            <div className="mt-4 mb-4 px-3 text-xs font-semibold text-gray-500 uppercase">
              Authentication
            </div>
          )}
          <NavItem
            icon="users"
            text="Users"
            isOpen={isOpen}
            to="/admin/users"
            active={location.pathname === "/admin/users"}
          />

          {/* New Product Section */}
          {isOpen && (
            <div className="mt-4 mb-4 px-3 text-xs font-semibold text-gray-500 uppercase">
              Product
            </div>
          )}
          <NavItem
            icon="product"
            text="Categories"
            isOpen={isOpen}
            to="/admin/product/categories"
            active={location.pathname.includes("/admin/product/categories")}
          />
          <NavItem
            icon="price"
            text="Group prices"
            isOpen={isOpen}
            to="/admin/product/group-prices"
            active={location.pathname.includes("/admin/product/group-prices")}
          />
          <NavItem
            icon="media"
            text="Media files"
            isOpen={isOpen}
            to="/admin/product/media-files"
            active={location.pathname.includes("/admin/product/media-files")}
          />
          <NavItem
            icon="info"
            text="Meta information"
            isOpen={isOpen}
            to="/admin/product/meta-info"
            active={location.pathname.includes("/admin/product/meta-info")}
          />
          <NavItem
            icon="price"
            text="Prices"
            isOpen={isOpen}
            to="/admin/product/prices"
            active={location.pathname.includes("/admin/product/prices")}
          />
          <NavItem
            icon="inventory"
            text="Product inventories"
            isOpen={isOpen}
            to="/admin/product/inventories"
            active={location.pathname.includes("/admin/product/inventories")}
          />
          <NavItem
            icon="product"
            text="Products"
            isOpen={isOpen}
            to="/admin/product/products"
            active={location.pathname.includes("/admin/product/products")}
          />
          <NavItem
            icon="review"
            text="Reviews and ratings"
            isOpen={isOpen}
            to="/admin/product/reviews"
            active={location.pathname.includes("/admin/product/reviews")}
          />
          <NavItem
            icon="search"
            text="Search queries"
            isOpen={isOpen}
            to="/admin/product/search-queries"
            active={location.pathname.includes("/admin/product/search-queries")}
          />
          <NavItem
            icon="tags"
            text="Tag assignments"
            isOpen={isOpen}
            to="/admin/product/tag-assignments"
            active={location.pathname.includes("/admin/product/tag-assignments")}
          />
          <NavItem
            icon="tags"
            text="Tags"
            isOpen={isOpen}
            to="/admin/product/tags"
            active={location.pathname.includes("/admin/product/tags")}
          />
          <NavItem
            icon="price-tier"
            text="Tier prices"
            isOpen={isOpen}
            to="/admin/product/tier-prices"
            active={location.pathname.includes("/admin/product/tier-prices")}
          />
          <NavItem
            icon="search"
            text="User recent searches"
            isOpen={isOpen}
            to="/admin/product/user-searches"
            active={location.pathname.includes("/admin/product/user-searches")}
          />
        </nav>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text, active = false, isOpen, to }) => {
  const renderIcon = () => {
    switch (icon) {
      case "dashboard":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
            />
          </svg>
        );
      case "users":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        );
      case "product":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        );
      case "price":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-2.65 0-4 2.35-4 5s1.35 5 4 5 4-2.35 4-5-1.35-5-4-5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 8H16m0 0l3 3m-3-3l-3 3"
            />
          </svg>
        );
      case "media":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        );
      case "info":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-1h1m0 0v-1m0-1h-1m1-1V8h-1m0 5h1m-1 5h-1v-1m0-1h1m-1 0h-1M6 9h1M4 9h1M4 10h1M6 10h1M5 11h1M4 11h1M10 4h1M9 4h1M9 5h1M11 5h-1M8 8h1M7 8h1M7 9h1V5M8 4h1V5"
            />
          </svg>
        );
      case "inventory":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 0v12h14V5H5z"
            />
          </svg>
        );
      case "review":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 15.546c-.523 0-1.046.207-1.453.598-2.901-1.679-6.45-2.348-9-2.348s-6.098.669-9 2.348c-.407-.391-.93-.598-1.453-.598-.828 0-1.5.671-1.5 1.5 0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5c0-.161.049-.316.15-.453 2.953-1.874 6.913-2.598 9-2.598s6.047.724 9 2.598c.1.137.149.292.149.453 0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5c0-.829-.672-1.5-1.5-1.5zM18 9.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM6 9.5A2.25 2.25 0 119.5 7.25 2.25 2.25 0 016 9.5z"
            />
          </svg>
        );
      case "search":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        );
      case "tags":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 7h.01M11 7h.01M15 7h.01M7 11h.01M11 11h.01M15 11h.01M3 3h2M5 17h2M9 3h2M13 17h2M17 3h2M21 17h2"
            />
          </svg>
        );
      case "price-tier":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14v6m-3-3h6M6 10v6m3-3H3"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Link
      to={to}
      className={`
        flex items-center rounded-md mx-2 my-1 px-4 py-3 transition-all duration-200
        ${active
          ? "bg-primary text-white font-medium"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }
        ${!isOpen && "justify-center px-2"}
      `}
    >
      <div className={`flex items-center justify-center ${isOpen ? "mr-3" : ""}`}>
        {renderIcon()}
      </div>
      {isOpen && <span className="text-sm">{text}</span>}
    </Link>
  );
};

export default Sidebar;