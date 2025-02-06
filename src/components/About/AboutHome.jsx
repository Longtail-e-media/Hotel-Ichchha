import React from "react";
// import { aboutContents } from "../../constants/data.js";
// import { introVideo } from "../../constants/data.js";
import { ichchha } from "../../constants/data.js";
import ScrollReveal from "../ScrollReveal";
import useFetchApi from "../../hooks/useFetchApi.jsx";

const AboutHome = () => {
  const {
    data: aboutContents,
    loading,
    error,
  } = useFetchApi(
    "https://hotelichchha.com/api/api_homeArticle.php",
    "aboutContents"
  );

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const { subtitle, subheading, description, video } = aboutContents;

  return (
    <>
      <section className="about bg-bg-gold-light">
        <div className="container mx-auto">
          {/* {aboutContents.map((content) => (
            <div key={content.id}> */}
          <ScrollReveal
            heading={subtitle}
            subheading={subheading}
            para={description}
            textColor="text-navy"
            highlightColor="text-navy"
            paraColor="text-navy"
          />
          {/* </div>
          ))} */}

          <div className="video mt-12 md:mt-28 h-full lg:h-[35rem] overflow-hidden outline outline-1 outline-goldLight -outline-offset-[12px]">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              id="backgroundVideo"
              poster={ichchha}
            >
              <source src={video} type="video/mp4" />
              <track
                src="#"
                kind="captions"
                srcLang="en"
                label="english_captions"
              ></track>
              A beautiful video of Hotel Ichchha in the background portraying
              the beauty of the hotel.
            </video>
            {/* <img src={ichchha} alt="" className="w-full h-full object-cover" /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHome;
