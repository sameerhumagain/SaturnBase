import React from "react";
import banner_img from "../../assets/Images/about_us_banner.png";

const Banner = ({ heading, subHeading }) => {
  return (
    <div>
      <section
        className="relative bg-primary  text-white text-center py-20 flex flex-col items-center justify-center max-h-[22vh] sm:max-h-[25vh] md:max-h-[35vh] "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${banner_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.99,
        }}
      >
        {/* Text Content */}
        <div className="px-6 max-w-[100%] sm:max-w-[80%] md:max-w-[700px]">
          <h1 className="banner-heading uppercase ">{heading}</h1>
          <p className="banner-subheading mt-4 ">{subHeading}</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
