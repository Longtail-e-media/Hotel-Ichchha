import React, { useState, useEffect } from "react";
import {
  logo,
  navLinks,
  navLinksRooms,
  navLinksEvents,
} from "../constants/data";
import { FaWhatsapp } from "react-icons/fa";
import ichchha from "../assets/ichchha.webp";
import Logo from "./ui/Logo";
import SocialLinks from "./ui/SocialLinks";
import ContactAddressLinks from "./ui/ContactAddressLinks";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full transition-all duration-${duration} z-40 ${
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
            <Link
              to="https://wa.me/+9779855029590"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base lg:text-lg"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-3xl text-gold" />{" "}
              <span className="hidden md:block">9855029590</span>
            </Link>
          </div>

          <h1 className="absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <img
                src={logo}
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

      <div
        className={`fixed inset-0 transition-all duration-500 z-50 max-h-screen bg-pink-gold`}
        style={{
          // transform: isNavOpen ? "translateY(0)" : "translateY(-100%)",
          transform: isNavOpen ? "translateY(0)" : "translateY(0)",
          opacity: isNavOpen ? "1" : "0",
          pointerEvents: isNavOpen ? "auto" : "none",
        }}
      >
        <button
          onClick={closeNav}
          className="absolute top-0 right-0 px-4 py-6 md:py-6 md:px-8 text-gold z-10"
          title="Close"
          aria-label="Close"
        >
          <IoClose className="text-4xl" />
        </button>
        <div className="flex w-full items-center flex-col lg:flex-row justify-between max-h-screen md:h-screen overflow-y-auto">
          <div
            className="relative w-full lg:w-2/3 h-full bg-pink-gold text-ivory order-2 lg:order-1"
            style={{
              backgroundImage: `url(${ichchha})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay absolute inset-0 bg-black opacity-80 z-0"></div>
            <div className="container flex flex-col md:flex-row items-center justify-center gap-16 py-12 md:px-12 md:py-24 lg:p-24 h-full">
              <ul className="flex flex-1 flex-row md:flex-col flex-wrap items-start justify-center gap-8 z-10 text-ivory/90 font-medium">
                {navLinks.map((link) => (
                  <li
                    className="peer peer-hover:opacity-50 hover:translate-x-2 hover:text-goldLight transition-all duration-300 ease-linear"
                    key={link.id}
                    onClick={closeNav}
                  >
                    <NavLink
                      to={link.link}
                      className={({ isActive }) =>
                        `text-xl md:text-3xl lg:text-4xl font-extrabold ${
                          isActive ? "text-gold" : ""
                        }`
                      }
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex flex-1 justify-center flex-col gap-10 md:gap-20 z-10">
                <ul className="flex flex-col items-center md:items-start gap-4">
                  {navLinksRooms.map((category) => (
                    <li key={category.id} className="group list-none">
                      <NavLink
                        to={category.link}
                        onClick={closeNav}
                        className={({ isActive }) =>
                          `block text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-extrabold hover:translate-x-2 hover:text-goldLight transition-all duration-300 ease-linear ${
                            isActive ? "text-gold" : ""
                          }`
                        }
                      >
                        {category.title}
                      </NavLink>
                      <ul className="mt-4 flex flex-col flex-wrap items-center justify-center md:items-start gap-4">
                        {category.subLinks.map((subLink) => (
                          <li
                            key={subLink.id}
                            onClick={closeNav}
                            className="text-sm peer peer-hover:opacity-50 hover:translate-x-2 hover:text-goldLight transition-all duration-300 ease-linear"
                          >
                            <NavLink
                              to={subLink.link}
                              className={({ isActive }) =>
                                `${isActive ? "text-gold" : ""}`
                              }
                            >
                              {subLink.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-col items-start gap-4">
                  {navLinksEvents.map((category) => (
                    <li key={category.id} className="group list-none">
                      <NavLink
                        to={category.link}
                        onClick={closeNav}
                        className={({ isActive }) =>
                          `block text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-extrabold hover:translate-x-2 hover:text-goldLight transition-all duration-300 ease-linear ${
                            isActive ? "text-gold" : ""
                          }`
                        }
                      >
                        {category.title}
                      </NavLink>
                      <ul className="mt-4 flex flex-col flex-wrap items-center justify-center md:items-start gap-4">
                        {category.subLinks.map((subLink) => (
                          <li
                            key={subLink.id}
                            className="text-sm peer peer-hover:opacity-50 hover:translate-x-2 hover:text-goldLight transition-all duration-300 ease-linear"
                            onClick={closeNav}
                          >
                            {/* <a href={`${subLink.link}`}>
                              {subLink.title}
                            </a> */}

                            <NavLink
                              to={`/events#${subLink.id}`}
                              // className={({ isActive }) =>
                              //   `${isActive ? "text-gold" : ""}`
                              // }
                            >
                              {subLink.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex items-center justify-center flex-col gap-1 bg-pink-gold h-full order-1 lg:order-2 p-12 md:p-0">
            <Logo />

            <ContactAddressLinks />

            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
