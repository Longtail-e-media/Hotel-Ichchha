import React from "react";
// import { hotelFacilities } from "../../constants/data.js";
import ScrollReveal from "../ScrollReveal";
import { Link } from "react-router-dom";
import useFetchApi from "../../hooks/useFetchApi";

const Facilities = () => {
  const {
    data: hotelFacilities,
    loading,
    error,
  } = useFetchApi(
    "https://hotelichchha.com/api/api_homeFacilities.php",
    "hotelFacilities"
  );

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const facilitiesTitle = hotelFacilities.find(
    (facility) => facility.id === "facilitiesTitle"
  );

  const otherFacilities = hotelFacilities.filter(
    (facility) => facility.id !== "facilitiesTitle"
  );

  return (
    <section id="facilities-section" className="bg-bg-gold-light">
      <div className="container">
        {/* <div className="flexCenter flex-col w-3/4 mx-auto mb-8">
          <h3 className="text-navy font-medium">{facilitiesTitle.title}</h3>
          <h4 className="text-center">{facilitiesTitle.subtitle}</h4>
          <p className="text-lg text-center">{facilitiesTitle.description}</p>
        </div> */}
        <div key={facilitiesTitle.id}>
          <ScrollReveal
            heading={facilitiesTitle.title}
            subheading={facilitiesTitle.subtitle}
            para={facilitiesTitle.description}
            textColor="text-navy"
            highlightColor="text-navy"
            paraColor="text-navy"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 md:mt-28">
        {otherFacilities.slice(0,6).map((facility) => (
          <div
            key={facility.id}
            className="relative overflow-hidden group"
            style={{ perspective: "1000px" }}
          >
            <img
              src={facility.icon}
              alt={facility.title}
              className="w-full h-[70vh] shadow-md transition duration-700 ease-in-out transform group-hover:scale-150 object-cover"
            />
            <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.4)] w-full h-full"></div>
            <div
              className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] bg-opacity-75 text-ivory text-center transition-all duration-700 ease-in-out transform translate-y-1/2 group-hover:translate-y-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="p-4">
                <h3 className="text-3xl capitalize font-medium mb-24 group-hover:mb-0 transition-all duration-300">
                  {facility.title}
                </h3>
                <p className="text-ivory my-4 line-clamp-4 group-hover:mt-5 group-hover:mb-12 transition-all duration-300">
                  {facility.description}
                </p>
                <Link
                  to={facility.router}
                  className="text-ivory bg-transparent border border-solid border-ivory px-4 py-2 mt-2 hover:bg-ivory hover:text-navy transition duration-300 ease-in-out"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
