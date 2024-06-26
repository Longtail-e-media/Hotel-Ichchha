import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const ExploreRooms = ({ otherRooms }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const handleExploreClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-bg-gold-light pt-0 lg:px-0">
      <div className="container text-center space-y-6 lg:space-y-10">
        <h3 className={`text-navy text-2xl md:text-4xl capitalize`}>
          Explore other Rooms
        </h3>
        <p
          className={`text-navy text-sm text-justify md:text-lg md:text-center`}
        >
          Hotel Ichchha rooms and suites are a symphony of luxury and comfort,
          designed to enchant every guest where luxury embraces elegance, Hotel
          Ichchha offers an exquisite blend of comfort and grandeur. Experience
          unparalleled hospitality and serene elegance in every stay. Deluxe
          Room Deluxe Room The Deluxe Room offers a comfortable stay with modern
          amenities and elegant decoration.
        </p>
      </div>
      <div className="mt-12 md:mt-24 mx-0">
        <Slider {...settings} ref={sliderRef}>
          {otherRooms.map((room) => (
            <div key={room.id} className="p-0 sm:p-2 md:p-4">
              <div className="group relative rounded-lg overflow-hidden">
                <img
                  src={room.imageUrl}
                  alt={room.title}
                  className={`w-full h-64 md:h-48 lg:h-64 2xl:h-72 rounded-lg object-cover transition-transform duration-700 ease-in-out group-hover:scale-100 `}
                />
                <div className="absolute inset-0 bg-black transition-opacity duration-300 ease-linear opacity-10 group-hover:opacity-40 rounded-lg "></div>
                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear">
                  <Link
                    to={room.router}
                    onClick={handleExploreClick}
                    className="bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base translate-y-full group-hover:-translate-y-6 transition-all duration-300 ease-linear"
                    title="Explore"
                    aria-label="Explore"
                  >
                    Explore
                  </Link>
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6">{room.title}</h3>
              <p className="text-sm md:text-base mt-2 line-clamp-2 mb-8">
                {room.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default ExploreRooms;
