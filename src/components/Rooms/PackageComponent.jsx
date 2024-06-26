import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { accomodationContents } from "../../constants/data.js";
import RoomDetailsWithBooking from "./RoomDetailsWithBooking";
import ScrollReveal from "../ScrollReveal";

const PackageComponent = ({ room }) => {
  return (
    <section className="bg-bg-gold-light">
      <div className="container">
        <ScrollReveal
          heading={room.title}
          subheading={room.subtitle}
          para={room.description}
          textColor="text-navy"
          highlightColor="text-navy"
          paraColor="text-navy"
        />

        <div className="flex flex-col lg:flex-row gap-16 my-8 lg:my-24 lg:gap-12 justify-between">
          <div className="w-full lg:w-1/2 lg:max-w-lg">
            <h5 className="text-2xl md:text-3xl leading-loose pb-4 font-medium">
              {room.overview[0].title}
            </h5>
            <p className="pb-4 text-justify lg:text-pretty">
              {room.overview[0].content}
            </p>

            {room.policies.map((policyCategory) => (
              <div key={policyCategory.title}>
                <h5 className="text-2xl md:text-3xl leading-loose py-4 font-medium">
                  {policyCategory.title}
                </h5>
                <ul className="list-decimal ml-4">
                  {policyCategory.content.map((policy) => (
                    <li key={policy} className="mb-2">
                      {policy}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <h5 className="text-2xl lg:text-3xl leading-loose py-6 font-medium">
              Room Amenities
            </h5>
            <div className="flex items-start just gap-12 md:gap-48 lg:gap-20 text-xs sm:text-sm lg:text-base">
              <ul className="flex items-start justify-center flex-col gap-5">
                {room.amenities
                  .slice(0, Math.ceil(room.amenities.length / 2))
                  .map((amenity) => (
                    <li key={amenity} className="flex items-center gap-4">
                      <HiArrowLongRight />
                      {amenity}
                    </li>
                  ))}
              </ul>
              <ul className="flex items-start justify-center flex-col gap-5">
                {room.amenities
                  .slice(Math.ceil(room.amenities.length / 2))
                  .map((amenity) => (
                    <li key={amenity} className="flex items-center gap-4">
                      <HiArrowLongRight />
                      {amenity}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <RoomDetailsWithBooking
            roomDetails={room.roomDetails}
            rojaiLink={accomodationContents[0].rojaiLink}
          />
        </div>
      </div>
    </section>
  );
};

export default PackageComponent;
