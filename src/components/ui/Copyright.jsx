import React from "react";
import useFetchApi from "../../hooks/useFetchApi";
import { Link } from "react-router-dom";

const Copyright = () => {
  const {
    data: siteregulars,
    loading,
    error,
  } = useFetchApi(
    "https://hotelichchha.com/api/api_siteregulars.php",
    "siteregulars"
  );

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const currentYear = new Date().getFullYear();

  const { sitename } = siteregulars;

  return (
    <div className="container mx-auto py-4 -translate-y-20">
      <div className="flex flex-col md:flex-row justify-between gap-3 px-6 md:px-4">
        <p className="text-sm capitalize">
          &copy; {currentYear} {sitename}
        </p>
        <p className="text-sm">
          Website by{" "}
          <Link
            to="https://longtail.info/"
            target="_blank"
            className="underline"
          >
            Longtail e-Media
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Copyright;
