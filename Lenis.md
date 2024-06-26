import React from "react";
import {
BrowserRouter as Router,
Routes,
Route,
Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutHome from "./components/About/AboutHome";
import Accomodation from "./components/Rooms/Accomodation";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
import NearbyLocations from "./components/Nearby";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Suites from "./components/Suites";
// import Hero from "./components/Hero";
import DeluxeRoom from "./components/Rooms/DeluxeRoom";
import Restaurant from "./components/Restaurant";
import EventsHall from "./components/EventsHall";
import Contact from "./components/Contact";
import IchchhaFacilities from "./components/IchchhaFacilities";
import Recreation from "./components/Recreation";
import BackToTop from "./components/BackToTop";

const App = () => {
return (
<Router>
<>
{/_ <div
className="bg-cover bg-center h-screen"
style={{
            backgroundImage: `url(${ichchha})`,
          }} > _/}
{/_ <Navbar /> _/}
{/_ </div> _/}

        {/* <Hero /> */}

        {/* Apply Lenis smooth transition to all sections */}
        <div className="lf-in">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accommodation" element={<Suites />} />
            <Route path="/accommodation/deluxe" element={<DeluxeRoom />} />
            {/* <Route
              path="/accommodation/super-deluxe"
              element={<SuperDeluxeRoom />}
            /> */}
            <Route path="/restaurants" element={<Restaurant />} />
            <Route path="/events" element={<EventsHall />} />
            <Route path="/facilities" element={<IchchhaFacilities />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/nearby" element={<NearbyLocations />} />
            <Route path="/recreation" element={<Recreation />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <BackToTop scrollStepInPx={50} delayInMs={16.66} />
      </>
    </Router>

);
};

export default App;

<!-- Hero Slider -->

import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const HeroSliderCarousel = ({ images, className }) => {
const sliderRef = useRef(null);
const [scrollY, setScrollY] = useState(0);

const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
};

const handlePrevSlide = () => {
sliderRef.current.slickPrev();
};

const handleNextSlide = () => {
sliderRef.current.slickNext();
};

useEffect(() => {
const handleScroll = () => {
const newScrollY = window.scrollY;
setScrollY(newScrollY);
};

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

}, []);

const parallaxOffset = scrollY \* 0.5;

const imageScale = 1 + scrollY / 5000; // Adjust the scaling factor as needed
const arrowScale = 1 + scrollY / 1000; // Adjust the scaling factor as needed
const headingScale = 1 - scrollY / 1000; // Adjust the scaling factor as needed

return (
<>
<div
className="relative overflow-hidden -z-10"
style={{ transform: `translateY(${parallaxOffset}px)` }} >
<Slider {...settings} ref={sliderRef}>
{images.map((image, index) => (
<div key={index} className="relative overflow-hidden">
<div className="overlay absolute h-64 inset-0 bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] z-10" />
<img
src={image.src}
alt={image.title}
className={className}
style={{ transform: `scale(${imageScale})` }}
/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.6)] text-gold p-2">
<h3
className="text-5xl pt-16 p-8 text-center transition-transform duration-500"
style={{
                    transform: `translateY(-${
                      parallaxOffset * 4
                    }px) scale(${headingScale})`,
                  }} >
{image.title}
</h3>
</div>
</div>
))}
</Slider>
</div>
<button
className="absolute top-1/2 left-4 group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-xl transition-all duration-300 ease-linear transform hover:scale-110"
onClick={handlePrevSlide}
style={{
          transform: `translateX(-${parallaxOffset}px) scale(${arrowScale})`,
        }} >
<HiArrowLongLeft className="transition-transform duration-300 ease-linear transform hover:-translate-x-1" />
</button>
<button
className="absolute top-1/2 right-4 group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-xl transition-all duration-300 ease-linear transform hover:scale-110"
onClick={handleNextSlide}
style={{
          transform: `translateX(${parallaxOffset}px) scale(${arrowScale})`,
        }} >
<HiArrowLongRight className="transition-transform duration-300 ease-linear transform hover:translate-x-1" />
</button>
</>
);
};

export default HeroSliderCarousel;

<!-- About Section of Home -->

import React, { useEffect, useState } from "react";
import { aboutContents, introVideo, ichchha } from "../../constants/data.js";

const AboutHome = () => {
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
const handleScroll = () => {
const newScrollY = window.scrollY;
setScrollY(newScrollY);
};

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

}, []);

const parallaxOffset = scrollY \* 0.125;

return (
<>
<section className="about bg-bg-gold-light">
<div className="container mx-auto">
{aboutContents.map((content) => (
<div key={content.id} className="flexCenter flex-col w-3/4 mx-auto">
<h3 className="text-navy font-medium">{content.subtitle}</h3>
<h4 className="text-center">{content.subheading}</h4>
<p className="text-lg text-center">{content.description}</p>
</div>
))}

          <div
            className="video -mt-28"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              playsInline
              id="backgroundVideo"
              poster={ichchha}
            >
              <source src={introVideo} type="video/mp4" />
              Hotel Ichchha
            </video>
          </div>
        </div>
      </section>
    </>

);
};

export default AboutHome;
