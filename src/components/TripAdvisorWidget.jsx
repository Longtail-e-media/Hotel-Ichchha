import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TripAdvisorWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.tripadvisor.com/WidgetEmbed-cdswritereviewlg?amp;locationId=11283455&border=true&uniq=465&lang=en_US&display_version=2";
    script.async = true;
    // script.onload = () => {
    //   console.log("TripAdvisor script loaded");
    // };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="TA_cdswritereviewlg465" className="TA_cdswritereviewlg">
      <ul id="DaUw9LqnJBEU" className="TA_links 9KAp72F4FJK">
        <li id="paaRI3NJkIq" className="Zs5Sx2p w-1/2">
          <Link
            target="_blank"
            to="https://www.tripadvisor.com/Hotel_Review-g21156991-d11283455-Reviews-Hotel_Ichchha-Pipara_Simara_Narayani_Zone_Central_Region.html"
          >
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="TripAdvisor"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TripAdvisorWidget;
