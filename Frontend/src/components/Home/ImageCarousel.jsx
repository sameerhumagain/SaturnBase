import React, { useState, useEffect } from "react";
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

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative  max-w-[1170px] overflow-hidden mx-auto rounded-lg" style={{width:"calc(100% - 20px)"}}>
    <div
      className="flex transition-transform duration-700 ease-in-out w-full"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className="w-full min-w-full aspect-[4/2.5] sm:aspect-[16/10] md:aspect-[18/10] lg:aspect-[20/10] cursor-default menu flex flex-col justify-center items-center text-white p-6 bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.78)), url(${img.src})`,
            opacity: 0.99,
          }}
        >
          <h1 className="banner-heading text-center md:max-w-[60%] lg:max-w-[65%] mb-[15px] cursor-text">
            {img.title}
          </h1>
          <p className="banner-subheading mb-6 px-4 text-center lg:w-1/2 cursor-text">
            {img.subtitle}
          </p>
          <button className="bg-[#CE6075] text-white p-2 md:px-4 md:py-3 text-[15px] md:text-[16px] rounded max-w-[120px] sm:max-w-[150px] md:max-w-[202px] w-full uppercase mt-[20px]">
            {img.buttonText}
          </button>
        </div>
      ))}
    </div>
  
    <div className="flex items-center space-x-1.5 justify-center mt-[30px]">
      {images.map((_, index) => (
        <div
          key={index}
          className={`w-6 h-6 flex justify-center items-center ${
            index === currentIndex ? "rounded-full border border-rose-300" : ""
          }`}
        >
          <button
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[#e7506c]" : "bg-gray-300"
            }`}
          ></button>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default ImageCarousel;