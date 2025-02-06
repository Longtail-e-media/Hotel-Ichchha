import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { PiCallBell } from "react-icons/pi";
// import { facilitiesSectionIcon } from "../../constants/data.js";
import useFetchApi from "../../hooks/useFetchApi.jsx";

import IconRenderer from "../IconRenderer.jsx";

const ExploreFacilitiesButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setShowNavbar((prevShowNavbar) => !prevShowNavbar);
  };

  return (
    <div>
      <button
        className={`z-50 fixed bottom-4 left-4 bg-goldLight backdrop-blur-md text-navy p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:bg-goldLight/50 ${
          showButton ? "scale-100 translate-y-0" : "scale-0 translate-y-20"
        }`}
        onClick={toggleNavbar}
        title="Explore Facilities"
        aria-label="Explore Facilities"
        type="button"
      >
        <PiCallBell className="w-6 h-6 text-navy" />
      </button>
      <FacilitiesNavbar
        showNavbar={showNavbar}
        onClose={() => setShowNavbar(false)}
      />
    </div>
  );
};

const FacilitiesNavbar = ({ showNavbar, onClose }) => {
  const {
    data: facilitiesSectionIcon,
    loading,
    error,
  } = useFetchApi(
    "https://hotelichchha.com/api/api_facilities.php",
    "facilitiesSection"
  );

  const duration = 200;

  const handleClose = () => {
    onClose();
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  if (loading) return null;
  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div
      className={`fixed inset-0 w-full h-screen overflow-x-hidden overflow-y-auto bg-black/50 z-[60] transition-all duration-${duration} ease-linear ${
        showNavbar
          ? "backdrop-blur-sm opacity-100"
          : "backdrop-blur-0 opacity-0 pointer-events-none"
      }`}
      onClick={handleClose}
    >
      <div
        className={`ml-auto w-80 bg-bg-gold-light px-2 transition-all duration-${duration} ease-in-out ${
          showNavbar
            ? "scale-100 translate-x-0 opacity-100"
            : "scale-100 translate-x-full opacity-0"
        }`}
        onClick={handleFormClick}
      >
        <div className="sticky top-0 bg-bg-gold-light flex justify-between p-6">
          <h4 className="text-2xl">Facilities</h4>
          <button
            className="-mr-4"
            onClick={onClose}
            title="Close"
            aria-label="Close"
            type="button"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>
        {Object.values(facilitiesSectionIcon).map((facility, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-start gap-4 p-4 px-6"
              id="facilities"
            >
              {/* {typeof facility.icon === "function" ? (
                <facility.icon className="text-xl" />
              ) : ( */}

              {/* {IconComponent ? (
                <IconComponent />
              ) : (
                <img
                  src={facility.icon}
                  alt={facility.title}
                  className="w-12 h-12 mb-2"
                />
              )} */}
              <IconRenderer
                icon={facility.icon}
                image={facility.image}
                className={facility.icon ? "text-xl" : "size-10 object-contain"}
              />
              <span className="text-lg font-semibold">{facility.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreFacilitiesButton;
