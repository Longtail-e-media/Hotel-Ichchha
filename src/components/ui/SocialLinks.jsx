import React from "react";
import useFetchApi from "../../hooks/useFetchApi";
import IconRenderer from "../IconRenderer";

const SocialLinks = () => {
  const {
    data: socialLinks = [],
    loading,
    error,
  } = useFetchApi("https://hotelichchha.com/api/api_social.php", "socialLinks");

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <ul className="mt-6 text-xl flex items-center justify-start gap-4 mb-4">
        {socialLinks.map((link, index) => {
          return (
            <li
              key={index}
              className="text-navy hover:text-gold hover:scale-125 transition-all duration-300 ease-linear"
            >
              <IconRenderer
                icon={link.icon}
                image={link.image}
                className={
                  link.icon
                    ? "text-lg transition-all duration-300 ease-linear group-hover:scale-125"
                    : "size-4 object-contain transition-all duration-300 ease-linear group-hover:scale-125"
                }
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SocialLinks;
