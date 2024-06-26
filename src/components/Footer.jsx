import React from "react";
import Logo from "./ui/Logo";
import SocialLinks from "./ui/SocialLinks";
import ContactAddressLinks from "./ui/ContactAddressLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { id: 1, text: "About Us", href: "/about" },
    { id: 2, text: "Rooms & Suites", href: "/accommodation" },
    { id: 3, text: "Restaurant & Bar", href: "/restaurants" },
    { id: 4, text: "Conference & Events", href: "/events" },
    { id: 5, text: "Services & Facilities", href: "/recreation" },
  ];

  const otaLinks = [
    {
      id: 1,
      text: "Rojai",
      href: "https://www.hotelichchha.com/result.php?hotel_code=8fE7Jg",
    },
    {
      id: 2,
      text: "TripAdvisor",
      href: "https://www.tripadvisor.com/Hotel_Review-g21156991-d11283455-Reviews-Hotel_Ichchha-Pipara_Simara_Narayani_Zone_Central_Region.html",
    },
    {
      id: 3,
      text: "MakeMyTrip",
      href: "https://www.makemytrip.com/hotels-international/nepal/narayani-hotels/hotel_ichchha-details.html",
    },
    // { id: 3, text: "Booking.com", href: "https://www.booking.com/" },
    {
      id: 4,
      text: "Expedia",
      href: "https://www.expedia.com/Gadhimai-Hotels-Hotel-Ichchha.h16289796.Hotel-Information",
    },
    // { id: 5, text: "Agoda", href: "https://www.agoda.com/" },
  ];

  const bookingFooterContents = [
    {
      id: 1,
      title: "Room Booking",
      links: [
        { id: 1, text: "+977 980-2738095", href: "tel:+9779802738095" },
        {
          id: 4,
          text: "info@hotelichchha.com",
          href: "mailto:info@hotelichchha.com",
        },
      ],
    },
    {
      id: 2,
      title: "Conference & Events Booking",
      links: [
        { id: 1, text: "+977 980-2738095", href: "tel:+9779802738095" },
        { id: 2, text: "+977 980-2738090", href: "tel:+9779802738090" },
        {
          id: 3,
          text: "info@hotelichchha.com",
          href: "mailto:info@hotelichchha.com",
        },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();
  const author = "Longtail e-media";
  const owner = "Hotel Ichchha Ltd.";

  return (
    <div className="bg-pink-gold text-navy">
      <section>
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <Logo />
              <ContactAddressLinks />
              <SocialLinks />
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-8">Quick Links</h3>
              <ul className="list-none space-y-4">
                {quickLinks.map((link) => (
                  <li
                    key={link.id}
                    className="text-navy hover:text-gold hover:translate-x-2 hover:font-bold transition-all duration-300 ease-in"
                  >
                    <Link to={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="font-bold text-lg mb-8">OTA Links</h3>
              <ul className="list-none space-y-4">
                {otaLinks.map((link) => (
                  <li
                    key={link.id}
                    className="text-navy hover:text-gold hover:translate-x-2 hover:font-bold transition-all duration-300 ease-in"
                  >
                    <Link to={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              {bookingFooterContents.map((section) => (
                <div key={section.id}>
                  <h3 className="font-bold text-lg mb-8">{section.title}</h3>
                  <ul className="flex flex-wrap items-center justify-start gap-2 list-none mb-8">
                    {section.links.map((link) => (
                      <li key={link.id} className="flex gap-2 flex-wrap">
                        <Link
                          to={link.href}
                          target="_blank"
                          rel="noopener"
                          className="text-navy hover:text-gold transition-all duration-300 ease-in"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="container w-full h-px bg-gradient-to-l from-transparent via-navy/50 to-transparent -translate-y-20" />
      <div className="container mx-auto py-4 -translate-y-20">
        <div className="flex flex-col md:flex-row justify-between gap-3 px-6 md:px-4">
          <p className="text-sm">
            &copy; {currentYear} {owner}
          </p>
          <p className="text-sm">
            Website by{" "}
            <Link
              to="https://longtail.info/"
              target="_blank"
              className="underline"
            >
              {author}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
