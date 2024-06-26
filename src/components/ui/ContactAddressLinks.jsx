import React from "react";
import { contactAddressLinks } from "../../constants/data";
import { Link } from "react-router-dom";

const ContactAddressLinks = ({ showAll = true }) => {
  // Filter out phone numbers and email addresses if showAll is false
  const filteredLinks = showAll
    ? contactAddressLinks
    : contactAddressLinks.filter(
        (link) => link.id !== "phoneNumbers" && link.id !== "emails"
      );

  return (
    <>
      {filteredLinks.map((link) => (
        <ul key={link.id} className="flex items-start justify-start gap-2 ">
          {link.link && (
            <li
              key={link.id}
              className="mt-3 flex items-center justify-start gap-2 text-navy hover:text-gold transition-all duration-300 ease-linear"
            >
              {link.icon && <link.icon className="text-base" />}
              <Link to={link.link} target="_blank" rel="noopener">
                {link.text} (View Map)
              </Link>
            </li>
          )}
          {link.numbers && showAll && (
            <li className="flex items-start justify-start gap-2">
              <ul className="text-base flex items-center justify-start gap-2">
                {link.icon && <link.icon className="text-base" />}
                {link.numbers.map((number, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-start gap-2 text-navy hover:text-gold transition-all duration-300 ease-linear"
                  >
                    <Link
                      to={number.link}
                      target="_blank"
                      rel="noopener"
                      className="-ml-[2px]"
                    >
                      {number.text}
                    </Link>
                    {index < link.numbers.length - 1 && " |"}
                  </li>
                ))}
              </ul>
            </li>
          )}
          {link.addresses && showAll && (
            <li className="flex items-start justify-start gap-2">
              <ul className="text-base flex items-start justify-start gap-2">
                {link.addresses.map((address, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-start gap-2 text-navy hover:text-gold transition-all duration-300 ease-linear"
                  >
                    {link.icon && <link.icon className="text-base" />}
                    <Link to={address.link} target="_blank" rel="noopener">
                      {address.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      ))}
    </>
  );
};

export default ContactAddressLinks;
