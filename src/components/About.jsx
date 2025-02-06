import React from "react";
import AboutHome from "./About/AboutHome";
import useFetchApi from "../hooks/useFetchApi";
// import { messageFromCEO, ourTeamMembers } from "../constants/data";
// import BODTeam from "./ui/BODTeam";

const About = () => {
  const {
    data: aboutTeam,
    loading,
    error,
  } = useFetchApi(
    "https://hotelichchha.com/api/api_aboutTeam.php",
    "aboutTeam"
  );

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const { html } = aboutTeam;
  return (
    <>
      <div className="bg-bg-gold-light py-6 md:p-0"></div>
      <AboutHome />

      {/* <section className="bg-bg-gold-dark">
        {messageFromCEO.map((message) => (
          <div
            key={message.id}
            className="flexCenter flex-col container mx-auto"
          >
            <h3 className="text-2xl md:text-4xl font-medium text-center">
              {message.title}
            </h3>
            <h4 className="text-lg md:text-2xl text-center mb-20">
              {message.subheading}
            </h4>

            <div className="flex align-center justify-between flex-col lg:flex-row md:gap-12 md:my-8">
              <div className="flex items-center lg:items-start flex-col gap-0 h-auto lg:max-h-[400px] md:sticky top-6">
                <div className="w-auto h-96 sm:h-64 md:h-80 lg:w-64 lg:h-80 xl:w-72 xl:h-80 rounded-md overflow-hidden">
                  <img
                    src={message.image}
                    alt="Ichchha Hotel"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-medium mt-4 mb-2">
                  {message.fullName}
                </h3>
                <span className="text-sm md:text-base">{message.position}</span>
              </div>
              <div className="space-y-8 bg-bg-gold-dark pt-12 md:pt-0">
                <p className="text-lg text-justify">
                  Namaste, <br />I am Rewanta Prasad Dhaubhadel, affectionately
                  known as REBU by my friends, family, and colleagues. With a
                  rich heritage in hospitality spanning 27 years, I bring a
                  wealth of experience to the table. My journey began with a
                  Hotel Management Degree at the prestigious Swiss Hotel
                  Management School, followed by hospitality trainings and
                  professional stints in Switzerland, honing my skills in cities
                  like Geneva, Lausanne, and Monteux.
                </p>
                <p className="text-lg text-justify">
                  Returning to Nepal, I am committed to imparting my knowledge
                  to the next generation of hoteliers at GATE College. My tenure
                  includes notable roles at esteemed establishments such as
                  Hotel Royal Singi, where I've contributed to the thriving
                  hospitality landscape of Kathmandu Valley.
                </p>
                <p className="text-lg text-justify">
                  Driven by a passion for elevating Nepal's hospitality sector,
                  I now proudly serve as the CEO of Hotel Ichchha - Simara. In
                  this capacity, I am dedicated to leveraging the untapped
                  potential of Simara's burgeoning economy, positioning it as a
                  premier destination for hospitality ventures.
                </p>
              </div>
            </div>

          </div>
        ))}
      </section>

      <BODTeam ourTeamMembers={ourTeamMembers} /> */}

      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default About;
