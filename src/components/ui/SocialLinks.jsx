import React from "react";
import { socialLinks } from "../../constants/data";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <>
      <ul className="mt-6 text-xl flex items-center justify-start gap-4 mb-4">
        {socialLinks.map((link) => (
          <li
            key={link.id}
            className="text-navy hover:text-gold hover:scale-125 transition-all duration-300 ease-linear"
          >
            <Link
              to={link.link}
              target="_blank"
              rel="noopener noreferrer"
              title={link.title}
            >
              <link.icon />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SocialLinks;
