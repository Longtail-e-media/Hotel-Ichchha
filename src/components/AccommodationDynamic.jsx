import React from "react";
import { useParams } from "react-router-dom";
// import { accomodationContents } from "../constants/data.js";
import NotFound from "./ui/NotFound";
import HeroSliderCarousel from "./HeroSliderCarousel";
import PackageComponent from "./Rooms/PackageComponent";
import ExploreRooms from "./ui/ExploreRooms.jsx";
import useFetchApi from "../hooks/useFetchApi.jsx";

const AccommodationDynamic = () => {
  const { category } = useParams();

  const {
    data: accommodationContents,
    loading,
    error,
  } = useFetchApi(
    "https://hotelichchha.com/api/api_room.php",
    "accommodationContents"
  );

  if (loading) return null;
  if (error) {
    console.error(error);
    return null;
  }

  const accomodationData = accommodationContents[0];
  const room = accomodationData.accomodation.find(
    (room) => room.category === category
  );

  if (!room) {
    return <NotFound />;
  }

  const otherRooms = accomodationData.accomodation.filter(
    (otherRoom) => otherRoom.category !== category
  );

  return (
    <>
      <HeroSliderCarousel
        images={room.images}
        className="w-full h-96 md:h-screen object-cover object-bottom"
      />
      <PackageComponent room={room} />

      <ExploreRooms otherRooms={otherRooms} />
    </>
  );
};

export default AccommodationDynamic;
