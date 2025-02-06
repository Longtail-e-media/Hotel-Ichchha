import React from "react";
import ichchha from "../assets/ichchha.webp";
import Logo from "./ui/Logo";
import SocialLinks from "./ui/SocialLinks";
import ContactAddressLinks from "./ui/ContactAddressLinks";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";

// const navLinks = [
//   {
//     id: "home",
//     title: "Home",
//     link: "/home",
//   },
//   {
//     id: "about",
//     title: "About",
//     link: "/about",
//   },
//   {
//     id: "restaurants",
//     title: "Restro & Bars",
//     link: "/restaurants",
//   },
//   {
//     id: "recreation",
//     title: "Recreation",
//     link: "/recreation",
//   },
//   {
//     id: "gallery",
//     title: "Gallery",
//     link: "/gallery",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//     link: "/contact",
//   },
//   {
//     id: "accommodation",
//     title: "Rooms & Suites",
//     link: "/accommodation",
//     subLinks: [
//       {
//         id: "deluxeRoom",
//         title: "Deluxe Rooms",
//         link: "/accommodation/deluxe",
//       },
//       {
//         id: "superDeluxeRoom",
//         title: "Super Deluxe Rooms",
//         link: "/accommodation/super-deluxe",
//       },
//       {
//         id: "premiumRoom",
//         title: "Premium Rooms",
//         link: "/accommodation/premium",
//       },
//       {
//         id: "premiumSuite",
//         title: "Premium Junior Suite",
//         link: "/accommodation/premium-suite",
//       },
//       {
//         id: "deluxeSuite",
//         title: "Deluxe Suite",
//         link: "/accommodation/deluxe-suite",
//       },
//       {
//         id: "honeymoonSuite",
//         title: "Honeymoon Suite",
//         link: "/accommodation/honeymoon-suite",
//       },
//       {
//         id: "executiveSuite",
//         title: "Executive Suite",
//         link: "/accommodation/executive-suite",
//       },
//     ],
//   },
//   {
//     id: "events",
//     title: "Conference & Events",
//     link: "/events",
//     subLinks: [
//       {
//         id: "janakiHall",
//         title: "Janaki Hall",
//         link: "/events#janakiHall",
//       },
//       {
//         id: "jyamireHall",
//         title: "Jyamire Hall",
//         link: "/events#jyamireHall",
//       },
//       {
//         id: "narayaniHall",
//         title: "Narayani Hall",
//         link: "/events#narayaniHall",
//       },
//       {
//         id: "balmikiHall",
//         title: "Balmiki Hall",
//         link: "/events#balmikiHall",
//       },
//     ],
//   },
// ];

const SideNav = ({ isNavOpen, closeNav }) => {
  const {
    data: navLinks,
    loading,
    error,
  } = useFetchApi("https://hotelichchha.com/api/api_menu.php", "navLinks");

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div
        className={`fixed inset-0 transition-all duration-500 z-50 max-h-screen bg-pink-gold`}
        style={{
          transform: isNavOpen ? "translateY(0)" : "translateY(0)",
          opacity: isNavOpen ? "1" : "0",
          pointerEvents: isNavOpen ? "auto" : "none",
        }}
      >
        <button
          type="button"
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
                {navLinks
                  .filter((link) => !link.subLinks)
                  .map((link) => (
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
                {navLinks
                  .filter((link) => link.subLinks)
                  .map((category) => (
                    <ul
                      className="flex flex-col items-center md:items-start gap-4"
                      key={category.id}
                    >
                      <li className="group list-none">
                        <NavLink
                          to={category.link}
                          onClick={closeNav}
                          className={({ isActive }) =>
                            `block text-center md:text-left text-xl md:text-3xl lg:text-4xl font-extrabold hover:translate-x-2 hover:text-goldLight transition-all duration-300 ease-linear ${
                              isActive ? "text-gold" : ""
                            }`
                          }
                        >
                          {category.title}
                        </NavLink>
                        <ul className="mt-6 md:mt-4 flex flex-row md:flex-col flex-wrap items-center justify-center md:items-start gap-8 gap-y-4 md:gap-4 px-4 md:px-0">
                          {category.subLinks.map((subLink) => (
                            <li
                              key={subLink.id}
                              className="text-sm peer peer-hover:opacity-50 hover:translate-x-2 hover:text-goldLight transition-all duration-300 ease-linear"
                              onClick={closeNav}
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
                    </ul>
                  ))}
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

export default SideNav;
