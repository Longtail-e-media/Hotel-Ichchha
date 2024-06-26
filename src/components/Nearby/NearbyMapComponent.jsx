import React, { useState, useEffect } from "react";
import { nearbyLocations } from "../../constants/data";

function NearbyMapComponent() {
  const [isMapOpen, setIsMapOpen] = useState(true);
  const [mapUrl, setMapUrl] = useState(nearbyLocations[0]?.map || "");
  const [selectedLocation, setSelectedLocation] = useState(
    nearbyLocations[0] || null
  );

  const openMapModal = (url, location) => {
    setMapUrl(url);
    setSelectedLocation(location);
    setIsMapOpen(true);
    const mapSection = document.getElementById("mapSection");
    mapSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    openMapModal(location.map, location);
  };

  useEffect(() => {
    if (selectedLocation) {
      setMapUrl(selectedLocation.map);
    }
  }, [selectedLocation]);

  return (
    <div className="flex justify-between items-center flex-col md:flex-row gap-8 mt-20 md:p-12">
      <div className="w-full md:w-1/5 pl-6 h-64 md:h-auto overflow-y-auto">
        <ul>
          {nearbyLocations.map((location) => (
            <li
              key={location.name}
              className="mb-4 cursor-pointer"
              onClick={() => handleLocationClick(location)}
            >
              <span className="font-bold">{location.name}</span>
              <span className="ml-2">{location.distance}</span>
              <br />
              <button
                className="text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  handleLocationClick(location);
                }}
                title="Get Direction"
                aria-label="Get Direction"
              >
                Get Direction
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="w-full lg:w-4/5 my-8 lg:m-0 lg:p-8"
        // ref={mapRef}
      >
        {isMapOpen && (
          <div
            id="mapSection"
            className="relative bg-ivory w-full rounded-lg scroll-mt-32 md:scroll-mt-0"
          >
            <iframe
              title="Map"
              src={mapUrl}
              className="w-full h-64 md:h-96 lg:h-screen rounded-lg shadow-lg"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default NearbyMapComponent;
