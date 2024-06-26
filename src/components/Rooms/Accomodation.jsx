// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { accomodationContents } from "../../constants/data.js";

// const Accomodation = () => {
//   const sliderRef = useRef(null);

//   const handleNextSlide = () => {
//     sliderRef.current.slickNext();
//   };

//   const handlePrevSlide = () => {
//     sliderRef.current.slickPrev();
//   };

//   const settings = {
//     dots: false,
//     arrows: false,
//     autoplay: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section id="rooms" className="bg-bg-gold-dark px-0">
//       <div className="container mx-auto">
//         <div className="flexCenter p-4">
//           <div className="flex items-center justify-between w-full">
//             <div className="flex items-start justify-center gap-4 flex-col">
//               <h2 className="text-4xl">{accomodationContents[0].title}</h2>
//               <h4 className="text-xl">{accomodationContents[0].subtitle}</h4>
//               <p className="text-base">{accomodationContents[0].subheading}</p>
//               {/* <p className="text-base">{accomodationContents[0].description}</p> */}
//             </div>
//             <div className="button flex items-center justify-center gap-4">
//               <button onClick={handlePrevSlide}>Prev</button>
//               <button onClick={handleNextSlide}>Next</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="video mt-10 mx-0">
//         <Slider {...settings} ref={sliderRef}>
//           {accomodationContents[0].accomodation.map((room) => (
//             <div key={room.id} className="p-4">
//               <img
//                 src={room.url}
//                 alt={room.title}
//                 className="w-full h-72 rounded-lg object-cover"
//               />
//               <h3 className="text-xl font-bold mt-4">{room.title}</h3>
//               <p className="text-base">{room.description}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Accomodation;

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { accomodationContents } from "../../constants/data.js";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import ScrollReveal from "../ScrollReveal";
import { Link } from "react-router-dom";

const Accomodation = () => {
  const sliderRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    const numSlides = accomodationContents[0].accomodation.length;
    const adjustedIndex = (newIndex + 1 + numSlides) % numSlides;
    setCenterIndex(adjustedIndex);
  };

  const renderSlides = () => {
    return accomodationContents[0].accomodation.map((room, index) => (
      <Link
        to={room.router}
        key={room.id}
        className={`relative w-full transition-transform duration-700 ease-in-out p-4 sm:px-2 lg:px-6 xl:px-10 md:py-16 border-0 outline-0 focus:border-0 focus:outline-none ${
          index === centerIndex ? "md:scale-[1.2]" : "md:scale-80"
        }`}
      >
        <div className="overflow-hidden rounded-lg group">
          <div className="relative">
            <img
              src={room.imageUrl}
              alt={room.title}
              className={`w-full h-64 md:h-48 lg:h-64 xl:h-80 2xl:h-96 rounded-lg object-cover transition-transform duration-700 ease-in-out ${
                index === centerIndex ? "scale-105" : "scale-110"
              } group-hover:scale-100 `}
            />
            <div className="absolute inset-0 bg-black transition-opacity duration-300 ease-linear opacity-10 group-hover:opacity-40 "></div>
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear">
              <button
                to={room.router}
                className="bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base translate-y-full group-hover:-translate-y-6 transition-all duration-300 ease-linear"
                title="Explore"
                aria-label="Explore"
              >
                {/* Explore */}
                <HiArrowLongRight />
              </button>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold mt-6">{room.title}</h3>
        <p className="text-sm md:text-base mt-2 line-clamp-2">
          {room.description}
        </p>
      </Link>
    ));
  };

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="rooms" className="bg-bg-gold-dark px-0">
      <div className="container mx-auto">
        <div className="flexCenter p-4">
          <div className="flex items-start justify-center gap-4 flex-col">
            {/* <div className="flexCenter flex-col w-3/4 mx-auto">
              <h3 className="text-navy font-medium">
                {accomodationContents[0].title}
              </h3>
              <h4 className="text-3xl text-center">
                {accomodationContents[0].subheading}
              </h4>
              <p className="text-base text-center">
                {accomodationContents[0].description}
              </p>
            </div> */}

            <ScrollReveal
              heading={accomodationContents[0].title}
              subheading={accomodationContents[0].subheading}
              para={accomodationContents[0].description}
              textColor="text-navy"
              highlightColor="text-navy"
              paraColor="text-navy"
            />
          </div>
        </div>
      </div>
      <div className="my-4 md:my-16 sm:px-2 lg:px-4 xl:px-10">
        <Slider {...settings} ref={sliderRef}>
          {renderSlides()}
        </Slider>
      </div>
      <div className="flexCenter mt-4">
        <button
          className="group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-xl transition-all duration-300 ease-linear"
          onClick={() => sliderRef.current.slickPrev()}
          title="Previous"
          aria-label="Previous"
        >
          <HiArrowLongLeft className="group-hover:-translate-x-2 transition-all duration-150 ease-linear" />
        </button>
        <button
          className="group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-xl transition-all duration-300 ease-linear"
          onClick={() => sliderRef.current.slickNext()}
          title="Next"
          aria-label="Next"
        >
          <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-150 ease-linear" />
        </button>
      </div>
    </section>
  );
};

export default Accomodation;
