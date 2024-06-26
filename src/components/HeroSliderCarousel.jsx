import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const HeroSliderCarousel = ({ images, className }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="relative z-30">
      <Slider
        {...settings}
        ref={sliderRef}
        className="overflow-hidden bg-bg-gold-light"
      >
        {images.map((image, index) => (
          <div key={index} className="relative">
            <div className="overlay absolute h-32 sm:h-48 md:h-64 inset-0 bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] z-0"></div>
            <img src={image.src} alt={image.title} className={className} />
            <div className="overlay absolute bottom-0 w-full h-80 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)]" />
            <div className="absolute left-0 bottom-0 text-gold w-full p-2">
              <h3 className="max-w-4xl mx-auto text-lg md:text-3xl lg:text-4xl font-body font-extrabold p-2 md:p-8 text-center drop-shadow-xl">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
      <button
        className="absolute top-1/2 left-4 group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-xl transition-all duration-300 ease-linear"
        onClick={handlePrevSlide}
        title="Previous"
        aria-label="Previous"
      >
        <HiArrowLongLeft className="group-hover:-translate-x-2 transition-all duration-150 ease-linear" />
      </button>
      <button
        className="absolute top-1/2 right-4 group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-xl transition-all duration-300 ease-linear"
        onClick={handleNextSlide}
        title="Next"
        aria-label="Next"
      >
        <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-150 ease-linear" />
      </button>
    </div>
  );
};

export default HeroSliderCarousel;
