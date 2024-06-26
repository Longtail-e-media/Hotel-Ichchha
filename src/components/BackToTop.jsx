import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // <button
    //   className={`${
    //     showButton ? "scale-100 translate-y-0" : "scale-0 translate-y-20"
    //   } z-50 fixed bottom-8 right-8 bg-goldLight backdrop-blur-md text-navy p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:bg-ivory`}
    //   onClick={scrollToTop}
    // >
    <button
      className={`${
        showButton ? "scale-100 translate-y-0" : "scale-0 translate-y-20"
      } z-50 fixed bottom-4 right-4 bg-goldLight backdrop-blur-md text-navy p-3 rounded-full shadow-lg transition-all duration-500 ease-in-out hover:bg-ivory`}
      onClick={scrollToTop}
      title="Back to Top"
      aria-label="Back to Top"
    >
      <HiOutlineArrowNarrowRight className="w-6 h-6 -rotate-90 animate-arrow-up" />
    </button>
  );
};

export default BackToTop;
