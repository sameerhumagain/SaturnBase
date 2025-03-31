import { useEffect, useState } from "react";
import TestimonialCard from "./Testimonial/TestimonialCard";
import SectionHeading from "./SectionHeading";

const testimonials = [
  { name: "Julie", location: "Australia", message: "Amazing service and fast delivery!" },
  { name: "Casey", location: "USA", message: "Beautiful products and great customer service!" },
  { name: "Kristy C", location: "New Zealand", message: "Super happy with my purchase!" },
  { name: "Sarah", location: "Canada", message: "Would definitely recommend to others!" },
  { name: "Mike", location: "UK", message: "Outstanding experience from start to finish!" },
  { name: "Emma", location: "Ireland", message: "Fantastic quality and fast shipping!" }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3); // Default to 3 slides

  // Update number of visible slides based on screen width
  useEffect(() => {
    const updateSlides = () => {
      setVisibleSlides(window.innerWidth >= 1280 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - visibleSlides + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [visibleSlides]);

  return (
    <div className="w-full py-10">
      {/* Section Heading */}
      <SectionHeading
        heading="GREAT WORDS FROM OUR USERS"
        subHeading="See what our users say about us. Be the first to explore our latest arrivals."
      />

      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
              width: `${testimonials.length * 100}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0" 
                style={{ width: `${100 / visibleSlides}%` }} // Dynamically setting width
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: testimonials.length - visibleSlides + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-[#D4B196] w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
