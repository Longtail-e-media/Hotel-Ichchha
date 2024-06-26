import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { accomodationContents } from "../constants/data.js";
import ScrollReveal from "./ScrollReveal";
import { Link } from "react-router-dom";

const Suites = () => {
  const accomodationData = accomodationContents[0];
  const duration = "700";

  return (
    <>
      <section className="bg-bg-gold-light">
        <div className="my-12 md:my-0">
          <ScrollReveal
            heading={accomodationData.title}
            subheading={accomodationData.subtitle}
            para={accomodationData.description}
            textColor="text-navy"
            highlightColor="text-navy"
            paraColor="text-navy"
          />
        </div>
        <div className="container mx-auto">
          <div className="mt-12 md:mt-32">
            <div className="border-[1px] border-navy/40 rounded-3xl overflow-hidden">
              {accomodationData.accomodation.map((suite, index) => (
                <Link
                  to={suite.router}
                  key={suite.id}
                  className={`${
                    index !== accomodationData.accomodation.length - 1
                      ? "mb-8 border-b-[1px]"
                      : "mb-0  border-b-0"
                  } md:mb-0 border-navy/30 flex items-center flex-col md:flex-row justify-between gap-0 bg-bg-gold-dark hover:bg-goldLight/80 group transition-all duration-${duration}`}
                >
                  <div className="flex w-full md:w-1/3">
                    <img
                      src={suite.imageUrl}
                      alt={suite.title}
                      className={`w-full h-64 sm:h-96 md:h-60 object-cover origin-left transition-all duration-${duration} md:group-hover:scale-x-105`}
                    />
                  </div>
                  <div
                    className={`py-12 px-4 flex items-center justify-between md:p-12 w-full md:w-2/3 gap-10 transition-all duration-${duration} md:group-hover:translate-x-4`}
                  >
                    <div className="flex items-start flex-col gap-2 md:gap-5">
                      <h4 className="text-2xl md:text-3xl">{suite.title}</h4>
                      <p className="text-base max-w-md line-clamp-2">
                        {suite.description}
                      </p>
                    </div>
                    <div
                      className={`flex transition-all duration-${duration} md:group-hover:translate-x-4`}
                    >
                      <button
                        href={suite.router}
                        className={`bg-goldLight text-navy group-hover:text-ivory group-hover:bg-navy px-4 py-1 rounded-full text-2xl transition-all duration-300 ease-linear`}
                        title="Explore More"
                        aria-label="Explore More"
                      >
                        <HiArrowLongRight
                          className={`md:group-hover:scale-x-150 group-hover:translate-x-0 transition-all duration-300 ease-linear`}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Suites;
