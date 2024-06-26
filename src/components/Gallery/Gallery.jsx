import React from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import { galleryImages } from "../../constants/data.js";
import ScrollReveal from "../ScrollReveal";

const Gallery = () => {
  return (
    <>
      <section>
        {/* <div className="py-6 md:p-0"></div> */}

        <section className="py-8 md:pt-0 md:pb-20">
          <ScrollReveal
            heading="Photo Gallery"
            subheading="Glimpse of Hotel Ichchha - Discover Beauty Beyond Words"
            para="Immerse yourself in luxury, comfort, and personalized service. From
          elegant rooms to impeccable amenities, discover hospitality at its
          finest. Elevate your stay with us. Welcome to a world of
          unparalleled indulgence."
            textColor="text-navy"
            highlightColor="text-navy"
            paraColor="text-navy"
          />
        </section>

        <LightGallery
          plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
          mode="lg-fade"
          elementClassNames="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          options={{
            thumbnail: true,
            autoplay: true,
          }}
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group gallery-item overflow-hidden"
              data-src={image.url}
            >
              <img
                className="w-full h-72 object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-125 cursor-pointer"
                src={image.url}
                alt={image.alt}
                loading="lazy"
              />
            </div>
          ))}
        </LightGallery>
      </section>
    </>
  );
};

export default Gallery;
