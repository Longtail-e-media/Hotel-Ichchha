import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ExploreRooms = ({ otherRooms }) => {
  return (
    <section className="bg-bg-gold-dark/50 lg:px-0">
      <div className="container text-center space-y-6 lg:space-y-10">
        <h3 className="text-navy text-2xl md:text-4xl capitalize">
          Explore other Rooms
        </h3>
        <p className="text-navy text-sm text-justify md:text-lg md:text-center">
          Hotel Ichchha rooms and suites are a symphony of luxury and comfort,
          designed to enchant every guest where luxury embraces elegance, Hotel
          Ichchha offers an exquisite blend of comfort and grandeur. Experience
          unparalleled hospitality and serene elegance in every stay. Deluxe
          Room Deluxe Room The Deluxe Room offers a comfortable stay with modern
          amenities and elegant decoration.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="mt-12 md:mt-32">
          <div className="border-[1px] border-navy/40 rounded-3xl overflow-hidden">
            {otherRooms.map((room, index) => (
              <Link
                key={room.id}
                to={room.router}
                className={`${
                  index !== otherRooms.length - 1
                    ? "mb-8 border-b-[1px]"
                    : "mb-0 border-b-0"
                } md:mb-0 border-navy/30 flex items-center flex-col md:flex-row justify-between gap-0 bg-bg-gold-dark hover:bg-goldLight/80 group transition-all duration-300`}
              >
                <div className="flex w-full md:w-1/3">
                  <img
                    src={room.imageUrl}
                    alt={room.title}
                    className="w-full h-64 sm:h-96 md:h-60 object-cover origin-left transition-all duration-300 md:group-hover:scale-x-105"
                  />
                </div>
                <div className="py-12 px-4 flex items-center justify-between md:p-12 w-full md:w-2/3 gap-10 transition-all duration-300 md:group-hover:translate-x-4">
                  <div className="flex items-start flex-col gap-2 md:gap-5">
                    <h4 className="text-2xl md:text-3xl">{room.title}</h4>
                    <p className="text-base max-w-md line-clamp-2">
                      {room.description}
                    </p>
                  </div>
                  <div className="flex transition-all duration-300 md:group-hover:translate-x-4">
                    <div
                      className="bg-goldLight text-navy group-hover:text-ivory group-hover:bg-navy px-4 py-1 rounded-full text-2xl transition-all duration-300 ease-linear"
                      title="Explore More"
                      aria-label="Explore More"
                    >
                      <HiArrowLongRight className="md:group-hover:scale-x-150 group-hover:translate-x-0 transition-all duration-300 ease-linear" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreRooms;
