import React from "react";

function ScrollReveal({
  heading,
  subheading,
  para,
  textColor,
  paraColor,
  highlightColor,
}) {
  return (
    <>
      <div className="font-kalnia leading-normal reveal-type flexCenter flex-col w-full lg:w-3/4 mx-auto mb-8 text-center space-y-0 lg:space-y-4">
        <h3
          className={`text-${textColor} text-2xl md:text-4xl lg:text-5xl text-navy font-medium`}
        >
          {heading}
        </h3>
        <h4
          className={`text-${highlightColor} hidden sm:block text-base sm:text-lg md:text-2xl lg:text-3xl text-center font-normal`}
        >
          {subheading}
        </h4>
        <p
          className={`text-${paraColor} text-sm text-justify md:text-lg md:text-center`}
        >
          {para}
        </p>
      </div>
    </>
  );
}

export default ScrollReveal;

// IMPLEMENTATION
{
  /* <ScrollReveal
heading="Explore and Experience What's on at Hotel Ichchha"
subheading="Unwind in the delight that is your home away from home. Our property's location offers a mix of quiet tranquillity and bustling hustle."
para="Embark on a journey of your business, leisure, pilgrimage, or adventure to discover the hospitality of Hotel Ichchha, From the Hotel’s vibrant restaurant and lounge to its tranquil gardens, this is where the city comes to connect and be inspired. Centrally located, it’s an ideal choice for business travelers, pilgrimage tours, and recreational tours. The best choice for a destination wedding is to make your special moments more memorable."
textColor="text-navy"
highlightColor="text-navy"
/> */
  {
    /* <ScrollReveal
heading={accomodationContents[0].title}
subheading={accomodationContents[0].subheading}
para={accomodationContents[0].description}
textColor="text-navy"
highlightColor="text-navy"
paraColor="text-navy"
/> */
  }
}
