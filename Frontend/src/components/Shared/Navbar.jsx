import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/Icons/Home/creation_nepal_logo.svg";
import sidebar_menu from "../../assets/Icons/Home/sidebar_menu.svg";
import arrow_down_icon from "../../assets/Icons/Home/arrow_down.svg";
import cart_icon from "../../assets/Icons/Home/cart_icon.svg";
import user_icon from "../../assets/Icons/Home/user.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import search1 from "../../assets/Icons/Home/search1.png";
import SearchContainer from "../Home/SearchContainer";
import { useCartModal } from "../../context/CartModalContext";
import Button from "../UI/Button";

const Navbar = ({ isAdminView = false }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setisAccountDropdownOpen] = useState(false);
  const [isWholesaleDropdownOpen, setIsWholesaleDropdownOpen] = useState(false);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isSearchFieldClicked, setIsSearchFieldClicked] = useState(false);
  const [isAtHomePage, setIsAtHomePage] = useState(location.pathname == "/");
  const dropdownRef = useRef(null);
  const wholesaleRef = useRef(null);

  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openCart } = useCartModal();

  const handleBackground = () => {
    document.body.style.position = "fixed";
    document.body.style.top = "0";
    document.body.style.width = "100%";
    document.body.style.overflowY = "scroll";
  };

  const closeModal = () => {
    setIsSearchFieldClicked(false);
    document.body.style.position = "static";
    document.body.style.overflowY = "auto";
  };

  const handleSearchBarClick = () => {
    setIsSearchBarVisible(true);
    handleBackground();
  };

  const handleLogout = () => {
    dispatch({ type: "auth/logout" });
  };

  const navItemClass =
    "underline decoration-transparent underline-offset-4 hover:decoration-secondary transition-all duration-300 whitespace-nowrap";

  const activeNav = "decoration-secondary";

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisAccountDropdownOpen(false);
      }
      if (
        wholesaleRef.current &&
        !wholesaleRef.current.contains(event.target)
      ) {
        setIsWholesaleDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // to show the search bar while scrolling only if it is at home page
  useEffect(() => {
    if (isAtHomePage) {
      const searchBar = document.getElementById("search-container");
      if (!searchBar) return;

      const initialOffsetTop = searchBar.offsetTop;

      const handleScroll = () => {
        setIsSearchBarVisible(window.scrollY >= initialOffsetTop);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isAtHomePage]);

  // to check the path name on changing the route
  useEffect(() => {
    setIsAtHomePage(location.pathname == "/");
  }, [location.pathname]);

  useEffect(() => {
    if (!isSearchBarVisible) {
      setIsSearchFieldClicked(false);
    }
  }, [isSearchBarVisible]);

  const isActive = (path) => {
    return location.pathname == path;
  };

  return (
    <>
      {isSearchFieldClicked && (
        <div
          className="fixed inset-0 z-50 bg-black opacity-40"
          onClick={closeModal}
        ></div>
      )}

      {/* Navbar */}
      <nav className="relative flex items-center  justify-between gap-[20px] w-full px-[25px] xl:px-[35px] py-[15px]  shadow bg-black">
        {/* Left Section: Logo & Hamburger Menu */}
        <div className="flex items-center  gap-6  xl:gap-[50px] flex-shrink-0">
          {/* Logo */}
          <div className="mr-2 ">
            <Link to="/">
              <img
                src="	https://datasaturn.com/wp-content/uploads/2024/09/datasaturn-logo.svg"
                className="max-w-[125px] md:max-w-[130px] lg:max-w-[140px] xl:max-w-[170px] w-full"
                alt="Company Logo"
              />
            </Link>
          </div>

          {!isAdminView && (
            <ul className="hidden  lg:flex items-start text-[16px] font-semibold justify-center lg:gap-[20px] xl:gap-[30px] text-sm text-secondary">
              <li>
                <Link
                  to={"/"}
                  className={`${navItemClass} ${isActive("/") && activeNav}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/hot-deals"}
                  className={`${navItemClass} ${
                    isActive("/hot-deals") && activeNav
                  }`}
                >
                  Hot Deals
                </Link>
              </li>
              <li>
                <Link
                  to={"/about-us"}
                  className={`${navItemClass} ${
                    isActive("/about-us") && activeNav
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className={`${navItemClass} ${
                    isActive("/contact") && activeNav
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>

        {!isAdminView && isAtHomePage && isSearchBarVisible && (
          <div className="relative hidden md:flex items-center px-3 mx-3 w-full max-w-[600px] lg:max-w-[620px] bg-white shadow-sm rounded-full">
            <img src={search1} className="max-w-[18px] ml-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 bg-transparent px-3 outline-none text-secondary placeholder-secondary/90 placeholder:text-[10px] w-full sm:placeholder:text-[16px] h-full sm:py-[12px] md:py-[9px]"
              onClick={() => setIsSearchFieldClicked(true)}
            />
            {isSearchFieldClicked && (
              <SearchContainer handleSearchBarClick={handleSearchBarClick} />
            )}
          </div>
        )}

        {!isAdminView && !isAtHomePage && (
          <div className="relative hidden md:flex items-center px-3 mx-3  w-full max-w-[600px] md:max-w-[600px] lg:max-w-[620px]  bg-white shadow-sm rounded-full ">
            <img src={search1} className="max-w-[18px] ml-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 bg-transparent px-3 outline-none text-secondary placeholder-secondary/90 placeholder:text-[10px]   w-full sm:placeholder:text-[16px] h-full sm:py-[12px] md:py-[9px]"
              onClick={() => setIsSearchFieldClicked(true)}
            />
            {isSearchFieldClicked && (
              <SearchContainer handleSearchBarClick={handleSearchBarClick} />
            )}
          </div>
        )}

        {/* Search Bar (Visible on Scroll and Click) */}

        <div
          className={`items-center ${
            !isAdminView && "hidden"
          } gap-5 lg:flex lg:flex-shrink-0`}
        >
          {/* Wholesale Button */}
          {!isAdminView && (
            <div className="relative" ref={wholesaleRef}>
              <button
                className="flex justify-between items-center gap-[9px] lg:px-[11px] lg:py-[8px] xl:py-[9px] xl:px-[12px] rounded bg-[#FAF0EA]  min-w-[120px] w-full"
                aria-label="Wholesale Options"
                onClick={() => setIsWholesaleDropdownOpen(true)}
              >
                <p className="text-[15px] xl:text-[16px] font-medium text-secondary">
                  Wholesale
                </p>
                <img className="" src={arrow_down_icon} alt="Dropdown Arrow" />
              </button>

              {isWholesaleDropdownOpen && (
                <div className="absolute right-0 mt-3 w-[220px]  bg-white shadow-lg rounded-lg z-50">
                  <div className=" absolute top-[-7px] right-5 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"></div>

                  <ul className=" text-gray-700 text-[16px] font-normal ">
                    <li className=" text-secondary  whitespace-nowrap p-[13px] shadow-sm">
                      Wholesale
                    </li>
                    {[
                      {
                        text: "Wholesale Login",
                        onClick: () => {},
                      },
                      {
                        text: "User request",
                        onClick: () => {},
                      },
                      {
                        text: "How to work ",
                        onClick: () => {},
                      },
                    ].map((item, index) => {
                      return (
                        <li className="flex justify-between items-center hover:bg-primaryBackground cursor-pointer p-[13px] py-[12px] shadow-sm">
                          {item.text}

                          <svg
                            className="mr-0"
                            width="7"
                            height="12"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.36605 1.57633L1.42705 0.516329L7.20605 6.29333C7.2992 6.3859 7.37313 6.49597 7.42358 6.61722C7.47403 6.73847 7.5 6.8685 7.5 6.99983C7.5 7.13115 7.47403 7.26118 7.42358 7.38243C7.37313 7.50368 7.2992 7.61376 7.20605 7.70633L1.42705 13.4863L0.36705 12.4263L5.79105 7.00133L0.36605 1.57633Z"
                              fill="#888888"
                            />
                          </svg>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          )}

          {handleLoginAccount(
            isAuthenticated,
            dropdownRef,
            setisAccountDropdownOpen,
            isAccountDropdownOpen,
            handleLogout
          )}

          {!isAdminView && (
            <button aria-label="View Cart" onClick={openCart}>
              <img
                src={cart_icon}
                className="max-w-[31px] cursor-pointer"
                alt="Cart Icon"
              />
            </button>
          )}
        </div>

        {/* Hamburger Menu for Small Screens */}

        {/* Cart Icon (Visible on all screens) */}
        {!isAdminView && (
          <div className="lg:hidden flex items-center gap-5">
            <button aria-label="View Cart">
              <img
                src={cart_icon}
                className="max-w-[30px] cursor-pointer"
                alt="Cart Icon"
              />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <img
                src={sidebar_menu}
                alt="Sidebar Menu"
                className="max-w-[22px]"
              />
            </button>
          </div>
        )}
      </nav>

      {/* Mobile Menu (Only visible when isMenuOpen is true) */}
      {!isAdminView && isMenuOpen && (
        <nav
          className="absolute left-0 w-full bg-white shadow-lg top-full lg:hidden"
          style={{ zIndex: "99" }}
          aria-label="Mobile Navigation"
        >
          {!isAdminView && (
            <ul className="flex flex-col items-start justify-center gap-5 p-5 text-sm text-secondary">
              <li>
                <a href="#" className={navItemClass}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className={navItemClass}>
                  Hot Deals
                </a>
              </li>
              <li>
                <a href="#" className={navItemClass}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className={navItemClass}>
                  Contact
                </a>
              </li>
            </ul>
          )}

          {/* Main Navigation */}

          {/* Mobile Buttons */}
          <ul className="flex flex-col items-start gap-6 px-5 pb-5 border-gray-200">
            {/* Login Button */}
            <li>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-all duration-200"
                onClick={() => navigate("/customer/account/login/")}
              >
                <img src={user_icon} className="max-w-4" alt="User Icon" />
                <p className="text-sm font-medium text-white">Login</p>
              </button>
            </li>
            {/* Wholesale Button */}
            {!isAdminView && (
              <li>
                <button
                  className="flex justify-between items-center gap-2 px-4 py-2 rounded-md bg-[#FAF0EA] max-w-[200px] hover:bg-[#F3E0D4] transition-all duration-200"
                  aria-label="Wholesale Options"
                >
                  <p className="text-sm font-medium text-secondary">
                    Wholesale
                  </p>
                  <img
                    src={arrow_down_icon}
                    alt="Dropdown Arrow"
                    className="max-w-3"
                  />
                </button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;

const handleLoginAccount = (
  isAuthenticated,
  dropdownRef,
  setisAccountDropdownOpen,
  isAccountDropdownOpen,
  handleLogout
) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Login / Account Dropdown */}
      {isAuthenticated ? (
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center gap-2 px-3 py-2 rounded max-w-[250px] w-full bg-secondary"
            onClick={() => setisAccountDropdownOpen(!isAccountDropdownOpen)}
          >
            <img src={user_icon} className="max-w-[20px]" alt="User Icon" />
            <p className="text-[15px] xl:text-[16px] font-medium text-white">
              Account
            </p>
          </button>

          {/* Dropdown Menu */}
          {isAccountDropdownOpen && (
            <div className="absolute right-0 mt-3 w-[200px]  bg-white shadow-lg rounded-lg z-50">
              <div className=" absolute top-[-7px] right-5 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-white"></div>

              <ul className=" text-gray-700 text-[16px] font-normal">
                <li className=" text-secondary  whitespace-nowrap p-[13px] shadow-sm">
                  Hi, Roman Humagain
                </li>
                {[
                  {
                    text: "My Account",
                    onClick: () => {},
                  },
                  {
                    text: "My Wish List",
                    onClick: () => {},
                  },
                ].map((item, index) => {
                  return (
                    <li className="flex justify-between items-center hover:bg-primaryBackground cursor-pointer p-[13px] py-[12px] shadow-sm">
                      {item.text}

                      <svg
                        className="mr-0"
                        width="7"
                        height="12"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.36605 1.57633L1.42705 0.516329L7.20605 6.29333C7.2992 6.3859 7.37313 6.49597 7.42358 6.61722C7.47403 6.73847 7.5 6.8685 7.5 6.99983C7.5 7.13115 7.47403 7.26118 7.42358 7.38243C7.37313 7.50368 7.2992 7.61376 7.20605 7.70633L1.42705 13.4863L0.36705 12.4263L5.79105 7.00133L0.36605 1.57633Z"
                          fill="#888888"
                        />
                      </svg>
                    </li>
                  );
                })}

                <li
                  className=" hover:bg-primaryBackground text-red-400 cursor-pointer p-[13px] shadow-sm"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <Button
          variant="outline"
          onClickFunc={() => navigate("/customer/account/login/")}
          className="flex items-center gap-2 max-w-[200px] group"
        >
          <img
            src={user_icon}
            className="max-w-[19px] xl:max-w-[20px] group-hover:invert"
            alt="User Icon"
          />
          <p className="text-[15px] xl:text-[16px] font-semibold ">
            Login
          </p>
        </Button>
      )}
    </>
  );
};
