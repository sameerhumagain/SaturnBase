import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import carausel_img1 from "../../assets/Images/carausel1.png";
import carausel_img2 from "../../assets/Images/carausel2.png";
import carausel_img3 from "../../assets/Images/carausel3.png";

const images = [
  {
    src: carausel_img1,
    title: "WELCOME TO CREATION NEPAL",
    subtitle:
      "Discover authentic Nepalese and Tibetan handicrafts, handmade with tradition and passion.",
    buttonText: "Shop Now",
  },
  {
    src: carausel_img2,
    title: "EXPLORE AUTHENTIC NEPALESE GARMENTS",
    subtitle:
      "Embrace the elegance of handcrafted Nepalese fashion, made with quality and care.",
    buttonText: "Shop Now",
  },
  {
    src: carausel_img3,
    title: "DAZZLING JEWELRY AND ETHNIC ACCESSORIES",
    subtitle:
      "Adorn yourself with exquisite jewelry and timeless ethnic accessories.",
    buttonText: "Shop Now",
  },
  {
    src: carausel_img2,
    title: "EXPLORE AUTHENTIC NEPALESE GARMENTS",
    subtitle:
      "Embrace the elegance of handcrafted Nepalese fashion, made with quality and care.",
    buttonText: "Shop Now",
  },
];

const ImageCarousel1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <section className="relative w-full max-w-[1170px] mx-auto rounded-lg overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full aspect-[4/2.5] sm:aspect-[16/10] md:aspect-[18/10] lg:aspect-[20/10] cursor-default flex flex-col justify-center items-center text-white p-6 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)), url(${img.src})`,
            }}
          >
            <h1 className="text-xl sm:text-[30px] md:text-[38px] lg:text-[48px] font-bold text-center leading-tight md:max-w-[60%] lg:max-w-[65%] mb-[15px] cursor-text">
              {img.title}
            </h1>
            <p className="text-sm md:text-[18px] mb-6 px-4 text-center lg:w-1/2 leading-normal cursor-text">
              {img.subtitle}
            </p>
            <button className="bg-[#CE6075] text-white p-2 md:px-4 md:py-3 text-[15px] md:text-[16px] rounded max-w-[120px] sm:max-w-[150px] md:max-w-[202px] w-full uppercase mt-[20px]">
              {img.buttonText}
            </button>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageCarousel1;
