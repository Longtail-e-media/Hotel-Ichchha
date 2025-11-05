import React, { useState, useEffect } from "react";
import { logo } from "../constants/data";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import useFetchApi from "../hooks/useFetchApi";

const Navbar = () => {
  const {
    data: siteregulars,
    loading,
    error,
  } = useFetchApi(
    "https://hotelichchha.com/api/api_siteregulars.php",
    "siteregulars"
  );

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const duration = "1000";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    ``;
    document.body.style.overflow = !isNavOpen ? "hidden" : "auto";
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.style.overflow = "auto";
  };

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const { logo_upload, whatsapp_a } = siteregulars;
  const whatsappNumbers  = whatsapp_a?.split(",") || [];

  return (
    <>
      <nav
        className={`fixed top-0 w-full transition-all duration-${duration} z-50 ${
          window.scrollY > 0 ? "bg-bg-gold-light" : ""
        } ${visible ? "" : "-translate-y-full"}`}
      >
        <div
          className={`z-40 flex items-start justify-between py-6 px-4 md:px-8
           ${
             visible
               ? "bg-gradient-to-t from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0)] "
               : "bg-transparent"
           }${window.scrollY > 0 ? "flex items-center justify-between" : ""} 
          `}
        >
          <div
            className={`cursor-pointer transition-all duration-${duration} text-gold mt-1 ${
              visible ? "scale-100 translate-x-0" : "scale-0 translate-x-full"
            } ${window.scrollY > 0 ? "filter-black" : ""}`}
          >
            <div className="flex items-center gap-2 text-base lg:text-lg">
              <Link
              to={whatsappNumbers.length > 0 ? `https://wa.me/${whatsappNumbers[0]}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base lg:text-lg"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-3xl text-gold" />{" "}
            </Link>
              {whatsappNumbers.map((num, index) => {
                const cleanNum = num.trim().replace("+", "");
                return (
                  <Link
                    key={index}
                    to={`https://wa.me/${cleanNum}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`WhatsApp ${num.trim()}`}
                    className="hidden md:block"
                  >
                    {num.trim()}
                    {index < whatsappNumbers.length - 1 && ","}&nbsp;
                  </Link>
                );
              })}
              {/* <Link
              to={`https://wa.me/${whatsapp_a}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base lg:text-lg"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-3xl text-gold" />{" "}
              <span className="hidden md:block">{whatsapp_a}</span>
            </Link> */}
            </div>
          </div>

          <h1 className="absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <img
                src={logo_upload}
                alt="logo"
                className={`object-contain transition-all duration-${duration}  ${
                  visible
                    ? "w-40 h-20 md:h-28 mt-0 p-2 -translate-y-0"
                    : "scale-0 -translate-y-6 bg-transparent"
                } ${
                  window.scrollY > 0
                    ? "w-36 h-12 md:scale-75 p-4 translate-y-0 mt-0"
                    : // ? "filter-black w-16 h-12 object-contain scale-150 -mt-[4px] p-2"
                      ""
                }`}
              />
            </Link>
          </h1>

          <button
            className={`flex items-center gap-2 cursor-pointer transition-all duration-${duration} text-gold ${
              visible ? "scale-100 translate-x-0" : "scale-0 -translate-x-full"
            } ${window.scrollY > 0 ? "filter-black" : ""}`}
            onClick={toggleNav}
            title="Menu"
            aria-label="Menu"
            type="button"
          >
            <span className="hidden md:block text-base lg:text-xl select-none">
              Menu
            </span>
            <svg
              className="w-8 h-8 text-gold"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  className="translate-y-[2px] scale-[0.85]"
                  d="M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* <div className="h-px w-full bg-gradient-to-r from-navy/30 via-transparent to-navy/30" /> */}
        <div className="h-px w-1/4 md:w-2/5 lg:w-[43%] bg-gradient-to-r from-navy/30 to-navy/30 absolute left-0" />
        <div className="h-px w-1/4 md:w-2/5 lg:w-[43%] bg-gradient-to-l from-navy/30 to-navy/30 absolute right-0" />
      </nav>

      <SideNav isNavOpen={isNavOpen} closeNav={closeNav} />
    </>
  );
};

export default Navbar;
