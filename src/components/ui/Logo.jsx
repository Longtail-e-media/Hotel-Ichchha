import React from "react";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <>
      <h2>
        <a href="/">
          <img
            src={logo}
            alt="Footer Logo"
            className="w-40 h-24 object-contain mb-4"
            // style={{
            //   filter:
            //     "brightness(0) saturate(100%) invert(0%) sepia(82%) saturate(7492%) hue-rotate(123deg) brightness(77%) contrast(93%)",
            // }}
          />
        </a>
      </h2>
    </>
  );
};

export default Logo;
