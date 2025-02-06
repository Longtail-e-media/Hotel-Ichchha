import React from "react";
// import { diningOptions } from "../constants/data";
import ReusableSlider from "./ReusableSlider";
import ScrollReveal from "./ScrollReveal";
import { Link } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";

const Restaurant = () => {
  const {
    data: diningOptions,
    loading,
    error,
  } = useFetchApi("https://hotelichchha.com/api/api_dine.php", "diningOptions");
  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <section className="bg-bg-gold-light">
        <div className="container">
          <div className="my-12 md:my-0">
            <ScrollReveal
              heading="Happy hour is the best hour"
              subheading="Where Every Bite is Bliss, and Every Sip, an Experience!"
              para="Step into Hotel Ichchha, where culinary artistry meets urban chic.
              Relish innovative dishes and artisanal drinks in our restaurant
              and bar. Enjoy impeccable service, intimate spaces, and a vibrant
              atmosphere. Perfect for food connoisseurs and social butterflies
              alike. Discover your next favorite spot in the heart of the city."
              textColor="text-navy"
              highlightColor="text-navy"
              paraColor="text-navy"
            />
          </div>

          <div className="flex items-center justify-center flex-col mt-4 md:mt-20 max-w-5xl mx-auto">
            {Object.values(diningOptions).map((option) => (
              <div className="w-full py-8" key={option.id}>
                {/* <img
                  src={option.imageUrl}
                  alt={option.title}
                  className="w-full h-[600px] object-cover"
                /> */}
                <ReusableSlider
                  images={option.imageUrls.map((image) => image.src)}
                  alt={option.imageUrls.map((image) => image.alt)}
                  // images={option.imageUrls}
                  // alt={option.title}
                  className="w-full h-64 sm:h-96 md:h-96 lg:h-[38rem] object-cover"
                />
                <div className="my-8 flex justify-center gap-5 flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-xl md:text-3xl font-medium">
                      {option.title}
                    </h4>
                    {/* <div className="button flex items-center justify-center gap-4">
                      <button className="bg-gold text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear">
                        Prev
                      </button>
                      <button className="bg-gold text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear">
                        Next
                      </button>
                    </div> */}
                    <Link
                      to={option.foodMenu}
                      target="_blank"
                      className="bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-sm md:text-base transition-all duration-300 ease-linear"
                    >
                      View Menu
                    </Link>
                  </div>
                  <div className="flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row">
                    {/* <p>{option.subtitle}</p> */}
                    {/* <p>{option.description}</p> */}
                    <p className="text-sm md:text-base">
                      Occupancy: {option.occupancy}
                    </p>
                    <p className="text-sm md:text-base">
                      Opening Time: {option.openingTime} - {option.closingTime}
                    </p>
                    {/* <p>Opening Time: 06:00 AM - 11:00 PM</p> */}
                    <p className="text-sm md:text-base">Type: {option.type}</p>

                    {/* <p>Food Menu: {option.foodMenu}</p> */}
                  </div>
                  <p className="text-justify text-sm md:text-base">
                    {option.description}  
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurant;
