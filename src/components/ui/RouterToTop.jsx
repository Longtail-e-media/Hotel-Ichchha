import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouterToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default RouterToTop;
