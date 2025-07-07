import React, { useState, useEffect, useRef } from "react";
// import { eventVenues } from "../constants/data";
import ReusableSlider from "./ReusableSlider";
import EnquiryForm from "./Contact/EnquiryForm";
import ScrollReveal from "./ScrollReveal";
import useFetchApi from "../hooks/useFetchApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventsHall = () => {
  const {
    data: eventVenues,
    loading,
    error,
  } = useFetchApi(
    "https://hotelichchha.com/api/api_occasions.php",
    "eventVenues"
  );

  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [selectedEventTitle, setSelectedEventTitle] = useState("");
  const sectionRefs = useRef([]);

  const toggleEnquiryForm = (eventTitle = "") => {
    setSelectedEventTitle(eventTitle);
    setShowEnquiryForm((prevState) => !prevState);
  };

  const scrollToHash = (hash) => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.history.replaceState(null, null, `#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1, // Adjust this threshold as needed
    });

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      scrollToHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    scrollToHash(window.location.hash);
  }, []);

  useEffect(() => {
    const handleLinkClick = (event) => {
      const { target } = event;
      if (target.tagName === "A" && target.hash) {
        event.preventDefault();
        const hash = target.hash;
        scrollToHash(hash);
        window.history.pushState(null, null, hash);
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <section className="bg-bg-gold-light">
        <div className="my-12 md:my-0">
          <ScrollReveal
            heading="Conference & Events"
            subheading="Where every occasion sparkles with Ichchha touch"
            para="Elevate your events at Hotel Ichchha versatile halls. From
            intimate gatherings to grand celebrations, our spaces offer luxury
            and convenience. Your memorable moments, our impeccable service.
            Welcome to perfection."
            textColor="text-navy"
            highlightColor="text-navy"
            paraColor="text-navy"
          />
        </div>
        <div className="container">
          {Object.values(eventVenues).map((venue, index) => (
            <div
              key={venue.id}
              id={venue.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`scroll-mt-16 flex items-center flex-col gap-10 mt-16 mx-auto ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full">

              {/* <ReusableSlider
                  images={venue.imageUrls.map((image) => ({
                    src: image.src,
                    alt: image.alt,
                  }))}
                  className="w-full h-64 sm:h-96 lg:h-80 xl:h-96 object-cover"
                /> */}
                <ReusableSlider
                  images={venue.imageUrls.map((image) => image.src)}
                  alt={venue.imageUrls.map((image) => image.alt)}
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
                    {Object.entries(venue.amenities).map(([key, amenity]) => (
                      <li
                        key={key}
                        className="flex items-center gap-2 text-xs sm:text-sm xl:text-base"
                      >
                        {key}: {amenity}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => toggleEnquiryForm(venue.title)}
                    className="bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
                    title="Enquiry"
                    aria-label="Enquiry"
                    type="button"
                  >
                    Enquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {showEnquiryForm && (
        <EnquiryForm
          onClose={() => toggleEnquiryForm()}
          selectedEventTitle={selectedEventTitle}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default EventsHall;
