import React, { useState } from "react";
import { recreationVenues } from "../constants/data";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import ReusableSlider from "./ReusableSlider";
import EnquiryForm from "./Contact/EnquiryForm";
import ScrollReveal from "./ScrollReveal";

const Recreation = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const toggleEnquiryForm = () => {
    setShowEnquiryForm((prevState) => !prevState);
  };

  return (
    <>
      <section className="bg-bg-gold-light">
        <div className="my-12 md:my-0">
          <ScrollReveal
            heading="Discover Our Exciting Recreation"
            subheading="Unwind, Recharge, and Explore: Your Adventure Awaits in Every
            Recreational Endeavor."
            para="Escape to Hotel Ichchha recreational oasis. Unwind with luxurious
            spa treatments, energize in our state-of-the-art gym, or bask by
            the serene poolside. Our dedicated leisure concierge ensures every
            moment is pure bliss. Perfect for relaxation seekers and adventure
            enthusiasts."
            textColor="text-navy"
            highlightColor="text-navy"
            paraColor="text-navy"
          />
        </div>
        {Object.values(recreationVenues).map((venue, index) => (
          <div
            key={venue.id}
            className={`flex items-center flex-col gap-10 mt-16 mx-auto ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full">
              <ReusableSlider
                images={venue.imageUrls}
                className="w-full h-64 sm:h-96 lg:h-80 xl:h-96 object-cover"
              />
            </div>
            <div className="w-full">
              <div className="mt-0">
                <h4 className="text-xl lg:text-3xl mb-2">{venue.title}</h4>
                <p className="text-xs sm:text-sm lg:text-base text-justify">
                  {venue.description}
                </p>
                <ul className="flex items-center gap-4 py-4">
                  {venue.amenities.map((amenity, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-xs sm:text-sm xl:text-base"
                    >
                      <MdOutlineInsertEmoticon className="text-base" />
                      {amenity}
                    </li>
                  ))}
                </ul>
                {/* <button
                  onClick={toggleEnquiryForm}
                  className="bg-goldLight text-navy hover:bg-navy hover:text-ivory px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
                  title="Enquiry"
                  aria-label="Enquiry"
                >
                  Enquiry
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </section>
      {showEnquiryForm && <EnquiryForm onClose={toggleEnquiryForm} />}
    </>
  );
};

export default Recreation;
