import React from "react";
import { Link } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";

const ContactAddressLinks = ({ showAll = true }) => {
  const {
    data: contactAddressLinks,
    loading,
    error,
  } = useFetchApi(
    "https://hotelichchha.com/api/api_location.php",
    "contactAddressLinks"
  );

  // Filter out phone numbers and email addresses if showAll is false
  const filteredLinks = showAll
    ? contactAddressLinks
    : contactAddressLinks.filter(
        (link) => link.id !== "phoneNumbers" && link.id !== "emails"
      );

  if (loading) return null;
  if (error) {
    console.error(error);
    return null;
  }

  return (
    <>
      {filteredLinks.map((link) => (
        <ul key={link.id} className="flex items-start justify-start gap-2">
          {link.link && (
            <li
              className="mt-3 flex items-center justify-start gap-2 text-navy hover:text-gold transition-all duration-300 ease-linear"
            >
              <Link to={link.link} target="_blank" rel="noopener">
                {link.title} (View Map)
              </Link>
            </li>
          )}
          {link.numbers && showAll && (
            <li className="flex items-start justify-start gap-2">
              <ul className="text-base flex items-center justify-start gap-2">
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
                      {number.title}
                    </Link>
                    {index < link.numbers.length - 1 && " |"}
                  </li>
                ))}
              </ul>
            </li>
          )}
          {link.id === "emails" && showAll && (
            <li className="flex items-start justify-start gap-2">
              <ul className="text-base flex items-center justify-start gap-2">
                {link.url.map((email, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-start gap-2 text-navy hover:text-gold transition-all duration-300 ease-linear"
                  >
                    <Link
                      to={email.link}
                      target="_blank"
                      rel="noopener"
                      className="-ml-[2px]"
                    >
                      {email.addresses}
                    </Link>
                    {index < link.url.length - 1 && " |"}
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
