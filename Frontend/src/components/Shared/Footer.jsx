import React from "react";
import logo from "../../assets/Icons/Home/creation_nepal_logo.svg";
import location_icon from "../../assets/Icons/Home/location.svg";
import phone_icon from "../../assets/Icons/Home/phone_icon.svg";
import email_icon from "../../assets/Icons/Home/email_icon.svg";
import arrow_icon from "../../assets/Icons/Footer/footer_arrow.svg";

const Footer = () => {
  return (
    <footer className="w-full pt-8 bg-tertiary text-secondary z-30 shadow-lg drop-shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <div className="mx-auto pb-8 md:pb-[60px] px-[30px] xl:px-[50px]">
        {/* Flexbox for Layout */}
        <div className="flex flex-col md:flex-row  md:justify-between gap-8 md:gap-5 xl:gap-[117px]">
          {/* Logo & Description */}
          <div className=" max-w-[350px] w-full">
            <img
              src={logo}
              className="max-w-[130px] lg:max-w-[140px] xl:max-w-[170px] w-full"
              alt="Company Logo"
            />
            <p className="mt-3 text-sm font-normal leading-[22.4px]">
              Creation Nepal, Kathmandu based business is a Nepalese handicrafts
              manufacturers and exporters selling Nepali and Tibetan handcrafted
              goods made in Nepal. We export a wide varieties of Nepalese
              handicrafts at wholesale price.
            </p>
          </div>

          {/* My Account */}
          <div>
            <h3 className="mb-3 text-[14px] md:text-[15px] lg:text-base font-bold">
              MY ACCOUNT
            </h3>
            <ul className="space-y-1.5 text-sm font-normal">
              <li className="flex items-center gap-2">
                <img src={arrow_icon} alt="Arrow" />
                <a href="#" className="hover:text-primary">
                  My account
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img src={arrow_icon} alt="Arrow" />
                <a href="#" className="hover:text-primary">
                  Orders history
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img src={arrow_icon} alt="Arrow" />
                <a href="#" className="hover:text-primary">
                  Advanced search
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="">
            <h3 className="mb-3 text-base font-bold text-[14px] md:text-[15px] lg:text-base">
              LINKS
            </h3>
            <ul className="space-y-1.5 text-sm font-normal">
              <li className="flex items-center gap-2">
                <img src={arrow_icon} alt="Arrow" />
                <a href="#" className="hover:text-primary">
                  About us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img src={arrow_icon} alt="Arrow" />
                <a href="#" className="hover:text-primary">
                  Contact us
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img src={arrow_icon} alt="Arrow" />
                <a href="#" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img src={arrow_icon} alt="Arrow" />
                <a href="#" className="hover:text-primary">
                  Customer Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-3 font-bold text-[14px] md:text-[15px]  lg:text-base">
              CONTACT INFORMATION
            </h3>
            <ul className="space-y-2 text-sm font-normal">
              <li className="flex items-start gap-2">
                <img src={location_icon} className="mt-[5px]" />
                <span>Tripureshwor, Thamel, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-2">
                <img src={phone_icon} />
                <span>(+977) 1 4535451</span>
              </li>
              <li className="flex items-center gap-2">
                <img src={email_icon} />
                <a
                  href="mailto:info@creationnepal.com"
                  className="hover:text-primary"
                >
                  info@creationnepal.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="">
            <h3 className="mb-3 text-[14px] md:text-[15px]  lg:text-base font-bold">
              NEWSLETTER
            </h3>
            <p className="text-sm">
              Get the latest information on Sales and Offers.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="p-2 text-gray-700 font-normal bg-white max-w-[210px] w-full rounded focus:outline-none placeholder:text-sm"
              />
              <button className="px-4 py-2 text-sm text-white rounded bg-secondary whitespace-nowrap">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-secondary py-4 md:px-12 px-[30px] xl:px-[50px]">
        <div className="flex flex-col md:flex-row items-center justify-between mx-auto text-sm text-center text-white">
          {/* Social Media Icons */}
          <div className="flex mb-3 space-x-4 md:mb-0">
            <a href="#" className="hover:text-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="font-normal">
            © 2025 Creation Nepal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
