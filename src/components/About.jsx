import React from "react";
import AboutHome from "./About/AboutHome";
import { messageFromCEO, ourTeamMembers } from "../constants/data";
import BODTeam from "./ui/BODTeam";

const About = () => {
  return (
    <>
      <div className="bg-bg-gold-light py-6 md:p-0"></div>
      <AboutHome />

      <section className="bg-bg-gold-dark">
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

            {/* <div className="venture mt-16">
              <h3 className="text-4xl font-medium py-8">Associated Venture:</h3>
              <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                {message.associatedVentures.map((venture) => (
                  <div
                    key={venture.id}
                    className="bg-ivory p-6 rounded-lg shadow-md"
                  >
                    <img
                      // src={venture.logo}
                      src={logo}
                      alt={venture.logo}
                      className="w-24 mx-auto mb-4"
                    />
                    <h4 className="text-lg font-semibold">{venture.title}</h4>
                    <h5 className="text-lg">- {venture.post}</h5>
                    <a
                      href={venture.url}
                      className="block text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        ))}
      </section>

      <BODTeam ourTeamMembers={ourTeamMembers} />
      {/* <section className="bg-bg-gold-light">
        <div className="flexCenter flex-col w-3/4 mx-auto">
          <h3 className="text-navy font-medium">
            Get to Know the Faces Behind Our Success
          </h3>
          <h4 className="text-center">
            Unveil the Talented Individuals Who Embark on a Collective Mission
            to Elevate Your Experience at Hotel Ichchha
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-28">
          {ourTeamMembers.map((member) => (
            <div
              key={member.id}
              className="relative overflow-hidden group"
              style={{ perspective: "1000px" }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-96 object-cover shadow-md transition duration-500 ease-in-out transform group-hover:scale-125"
              />
              <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.8)] w-full h-full"></div>
              <div
                className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] bg-opacity-75 text-ivory text-center transition-all duration-700 ease-in-out transform translate-y-1/2 group-hover:translate-y-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="p-4">
                  <h3 className="text-3xl font-medium mb-6 group-hover:mb-0 transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-ivory my-4">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </>
  );
};

export default About;
