import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { accomodationContents } from "../../constants/data.js";
import { Link } from "react-router-dom";

const BookNowSection = () => {
  return (
    <div className="fixed bottom-0 w-full 5xl:bg-bg-gold-light p-4 z-30">
      <div className="container flex justify-around items-center">
        <div className="hidden flex-row items-center gap-3 relative">
          <label htmlFor="check-in-date">Check-In Date</label>
          <div className="relative">
            <input
              type="date"
              id="check-in-date"
              name="date"
              className="text-lg w-full py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
              required
            />
          </div>
        </div>
        <div className="flex">
          <Link
            to={accomodationContents[0].rojaiLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group flex items-center justify-center gap-2 hover:bg-navy hover:text-ivory bg-goldLight text-navy px-6 py-3 rounded-full text-base transition-all duration-300 ease-linear"
          >
            Book Now
            <HiArrowLongRight className="group-hover:scale-x-150 group-hover:translate-x-1 transition-all duration-150 ease-linear" />
          </Link>
        </div>
        <div className="hidden flex-row items-center gap-5 relative">
          <label htmlFor="check-out-date">Check-Out Date</label>
          <div className="relative">
            <input
              id="check-out-date"
              type="date"
              name="date"
              className="text-lg w-full py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowSection;
