import React, { useEffect, useRef, useState } from 'react';

const SlidingComponent = ({ children, itemWidth, gapWidth, autoSlideInterval = 4000, isMobile }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasStartedSliding, setHasStartedSliding] = useState(false);
  const sliderRef = useRef(null);
  const autoSlideTimer = useRef(null);
  const totalItems = React.Children.count(children);

  // Function to start auto sliding
  const startAutoSlide = () => {
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current);
    }

    autoSlideTimer.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
      if (!hasStartedSliding) {
        setHasStartedSliding(true);
      }
    }, autoSlideInterval);
  };

  // Function to stop auto sliding
  const stopAutoSlide = () => {
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current);
      autoSlideTimer.current = null;
    }
  };

  // Update slider position when activeIndex changes
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${activeIndex * (itemWidth + gapWidth)}px)`;
    }
  }, [activeIndex, itemWidth, gapWidth]);

  // Handle manual navigation
  const nextSlide = () => {
    stopAutoSlide();
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
    startAutoSlide();
  };

  const prevSlide = () => {
    stopAutoSlide();
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    startAutoSlide();
  };

  // Start the slider on mount
  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, []);

  return (
    <div className={`relative overflow-hidden w-full ${isMobile ? 'cursor-grab' : ''}`}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}>
      <div
        ref={sliderRef}
        className="flex gap-[20px] transition-transform duration-500 ease-in-out w-max"
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: itemWidth }}>
            {child}
          </div>
        ))}
      </div>

      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FAFAFA] to-transparent pointer-events-none"></div>

      {totalItems > 1 && (
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-xl border"
             style={{ borderColor: "#CE9560" }}>
          <button onClick={prevSlide} className="text-white p-2 rounded-full focus:outline-none">
            <img src="/path/to/prev-arrow.svg" className="w-[25px] rotate-180" alt="Previous" />
          </button>
        </div>
      )}

      {totalItems > 1 && (
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-xl border"
             style={{ borderColor: "#CE9560" }}>
          <button onClick={nextSlide} className="text-white p-2 rounded-full focus:outline-none">
            <img src="/path/to/next-arrow.svg" className="w-[25px]" alt="Next" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SlidingComponent;
