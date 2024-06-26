import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const RoomDetailsWithBooking = ({ roomDetails, rojaiLink }) => {
  return (
    <div className="ml-auto w-full lg:w-1/2 h-full sticky top-6">
      <div className="bg-gold/30 text-sm md:text-xl p-6 md:p-12 pt-6">
        {Object.entries(roomDetails).map(([key, { icon: Icon, value }]) => (
          <div key={key}>
            <ul className="flex items-center justify-between gap-2 py-8">
              <li className="flex items-center gap-4">
                <Icon />
                {key}
              </li>
              <li>{value}</li>
            </ul>
            <hr className="border-0 w-full h-px bg-gradient-to-t from-transparent via-[rgba(0,0,0,1)]/[0.2] to-transparent" />
          </div>
        ))}

        <div className="pt-12 w-full">
          <Link
            to={rojaiLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full bg-navy text-ivory hover:text-navy hover:bg-ivory px-6 py-4 rounded-full text-lg transition-all duration-300 ease-linear"
          >
            Book Now
            <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsWithBooking;
