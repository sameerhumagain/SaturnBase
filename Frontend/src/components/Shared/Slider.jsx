import React, { useEffect, useRef, useState } from "react";

const Slider = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyScrolling, setIsManuallyScrolling] = useState(false);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const scrollAmount = 300;
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    if (intervalRef.current || isManuallyScrolling) return;
    intervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        
        // Check if we've reached the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Instead of smooth scrolling to start, jump instantly to start for infinite loop effect
          scrollContainerRef.current.scrollTo({ left: 0 });
        } else {
          scrollContainerRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }, 4000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    if (!isHovered && !isManuallyScrolling) startAutoSlide();
    return () => stopAutoSlide();
  }, [isHovered, isManuallyScrolling]);

  const updateButtonVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowPrev(scrollLeft > 0);
      setShowNext(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const handleScroll = (direction) => {
    setIsManuallyScrolling(true);
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      if (direction === "right") {
        // If at the end, loop to the beginning
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      } else {
        // If at the beginning, loop to the end
        if (scrollLeft <= 10) {
          scrollContainerRef.current.scrollTo({ 
            left: scrollWidth - clientWidth,
            behavior: "smooth" 
          });
        } else {
          scrollContainerRef.current.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      container.addEventListener("scroll", updateButtonVisibility);
      
      // Initial check for button visibility
      updateButtonVisibility();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateButtonVisibility);
      }
    };
  }, []);

  // This effect handles the scroll end detection for infinite looping
  useEffect(() => {
    const container = scrollContainerRef.current;
    
    const handleScrollEnd = () => {
      if (!container) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = container;
      
      // If we manually scrolled to the end, reset to beginning
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        // Use setTimeout to ensure the scroll event has completed
        setTimeout(() => {
          container.scrollTo({ left: 0 });
        }, 150);
      }
      
      // If we manually scrolled to the beginning, reset to end
      if (scrollLeft <= 10 && scrollLeft > 0) {
        // Use setTimeout to ensure the scroll event has completed
        setTimeout(() => {
          container.scrollTo({ left: scrollWidth - clientWidth });
        }, 150);
      }
    };
    
    if (container) {
      // Use the scrollend event if available, fallback to a timeout after scroll
      if ('onscrollend' in window) {
        container.addEventListener('scrollend', handleScrollEnd);
      } else {
        let scrollTimer;
        const handleScroll = () => {
          clearTimeout(scrollTimer);
          scrollTimer = setTimeout(handleScrollEnd, 150);
        };
        container.addEventListener('scroll', handleScroll);
        
        return () => {
          container.removeEventListener('scroll', handleScroll);
          clearTimeout(scrollTimer);
        };
      }
      
      return () => {
        if ('onscrollend' in window) {
          container.removeEventListener('scrollend', handleScrollEnd);
        }
      };
    }
  }, []);

  return (
    
      <div className="relative">
        {/* Left Fade (Visible only on medium screens and larger) */}
        {showPrev && (
          <div className="absolute left-0 top-0 h-full z-30 w-14 bg-gradient-to-r from-primaryBackground to-transparent pointer-events-none md:block hidden"></div>
        )}

        {/* Scrollable Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-[20px] md:gap-[25px] xl:gap-cardGap overflow-x-auto scroll-smooth no-scrollbar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setTimeout(() => setIsManuallyScrolling(false), 5000);
          }}
        >
          {children}
        </div>

        {/* Right Fade (Visible only on medium screens and larger) */}
        {showNext && (
          <div className="z-30 absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-primaryBackground to-transparent pointer-events-none md:block hidden"></div>
        )}

        {/* Left Button with Animation (Visible only on medium screens and larger) */}
        <div
          className={`md:absolute hidden top-1/2 -left-6 transform -translate-y-1/2 border p-1 shadow-md cursor-pointer z-[30] md:block ${
            showPrev ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
          style={{ borderColor: "#CE9560", borderRadius: "15px" }}
        >
          <button
            onClick={() => handleScroll("left")}
            className="p-1 rounded-full focus:outline-none"
            disabled={!showPrev}
          >
            <svg
              className="rotate-180"
              width="26"
              height="23"
              viewBox="0 0 26 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1667 23L13.6392 21.3785L21.8508 12.65H0V10.35H21.8508L13.6392 1.6215L15.1667 0L26 11.5L15.1667 23Z"
                fill="#CE9560"
              />
            </svg>
          </button>
        </div>

        {/* Right Button with Animation (Visible only on medium screens and larger) */}
        <div
          className={`absolute top-1/2 -right-6 z-30 transform -translate-y-1/2 border p-1 shadow-md cursor-pointer md:block hidden ${
            showNext ? "opacity-100 animate-[wiggle_1.5s_infinite]" : "opacity-0"
          } transition-opacity duration-300`}
          style={{ borderColor: "#CE9560", borderRadius: "15px" }}
        >
          <button
            onClick={() => handleScroll("right")}
            className="p-1 rounded-full focus:outline-none"
            disabled={!showNext}
          >
            <svg
              width="26"
              height="23"
              viewBox="0 0 26 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1667 23L13.6392 21.3785L21.8508 12.65H0V10.35H21.8508L13.6392 1.6215L15.1667 0L26 11.5L15.1667 23Z"
                fill="#CE9560"
              />
            </svg>
          </button>
        </div>
      </div>

  );
};

export default Slider;