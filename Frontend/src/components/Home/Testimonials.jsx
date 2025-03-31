import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./Testimonial/TestimonialCard";

const testimonialsData = [
  {
    name: "Julie",
    address: "Australia",
    message:
      "I wanted to send you feedback about your service and product. Thank you SO much for such an amazing service! It was super fast efficient and you kept me up to date with the order...",
  },
  {
    name: "Michael",
    address: "USA",
    message:
      "Excellent customer service and top-quality products! I highly recommend this store to anyone looking for unique items.",
  },
  {
    name: "Sophia",
    address: "Canada",
    message:
      "I love the product quality and the fast shipping. The packaging was beautiful, and I will definitely shop again!",
  },
  {
    name: "Amit",
    address: "India",
    message:
      "The service was beyond my expectations! I'm thrilled with my purchase and appreciate the prompt responses from support.",
  },
  {
    name: "Emma",
    address: "UK",
    message:
      "Absolutely delighted with my order! Everything was perfect, from the ordering process to delivery.",
  },
  {
    name: "Amit",
    address: "India",
    message:
      "The service was beyond my expectations! I'm thrilled with my purchase and appreciate the prompt responses from support.",
  },
  {
    name: "Emma",
    address: "UK",
    message:
      "Absolutely delighted with my order! Everything was perfect, from the ordering process to delivery.",
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

 
  const totalPages = Math.ceil(testimonialsData.length / slidesPerView);

  
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    const currentPage = Math.floor(currentIndex / slidesPerView);
    setActiveIndex(currentPage);
  };

  const handleDotClick = (pageIndex) => {
    const slideIndex = pageIndex * slidesPerView;
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(slideIndex);
    }
  };

  return (
    <section className="w-full px-horizontalSpacing">
      <SectionHeading
        heading="GREAT WORDS FROM OUR USERS"
        subHeading="See what our users say about us. Be the first to explore our latest arrivals."
      />

      <div className="relative flex-col items-center justify-center max-w-6xl px-4 mx-auto">
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={false}
          loop={true}
          autoplay={{ delay: 3000 }}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          className="flex justify-center pb-30"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center space-x-2  mt-[50px]">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-[#D4B196] w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;