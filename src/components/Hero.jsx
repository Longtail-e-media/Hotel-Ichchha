import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ichchha from "../assets/ichchha.webp";

const images = [
  {
    src: ichchha,
    caption: "Beautiful Sunset",
  },
  {
    src: ichchha,
    caption: "Green Landscape",
  },
  {
    src: ichchha,
    caption: "Ancient Architecture",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.from(sliderRef.current.children, {
      opacity: 1,
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.5,
    });
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        ref={sliderRef}
        className="absolute top-0 left-0 w-full h-full flex transition-opacity duration-1000"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Slide ${index + 1}`}
            className={`object-cover w-full h-full ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          type="button"
          onClick={handlePrev}
          className="bg-gray-800 text-white px-3 py-1 rounded-full"
          title="Previous"
          aria-label="Previous"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-gray-800 text-white px-3 py-1 rounded-full"
          title="Next"
          aria-label="Next"
        >
          Next
        </button>
      </div>
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-navy">
        <p className="text-center">{images[currentIndex].caption}</p>
      </div>
    </div>
  );
};

export default Hero;
