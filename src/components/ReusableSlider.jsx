// import React, { useState, useRef, useEffect } from "react";
// import gsap from "gsap";
// import { HiArrowLongRight } from "react-icons/hi2";
// import { HiArrowLongLeft } from "react-icons/hi2";

// const ReusableSlider = ({ images, className }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ paused: true });
//     tl.to(imageRef.current, { duration: 1, opacity: 0, ease: "power1.inOut" });
//     tl.to(imageRef.current, {
//       duration: 1,
//       opacity: 1,
//       ease: "power1.inOut",
//     });
//   }, []);

//   const nextSlide = () => {
//     const newIndex = (currentImageIndex + 1) % images.length;
//     transitionSlide(newIndex);
//   };

//   const prevSlide = () => {
//     const newIndex = (currentImageIndex - 1 + images.length) % images.length;
//     transitionSlide(newIndex);
//   };

//   const transitionSlide = (newIndex) => {
//     const oldElement = imageRef.current;
//     const newImage = images[newIndex];

//     gsap.to(oldElement, {
//       duration: 0.5,
//       opacity: 0,
//       scale: 0.9,
//       ease: "power1.inOut",
//       onComplete: () => {
//         setCurrentImageIndex(newIndex);
//         oldElement.src = newImage;
//         gsap.fromTo(
//           oldElement,
//           { opacity: 0, scale: 0.9 },
//           { duration: 0.5, opacity: 1, scale: 1, ease: "power1.inOut" }
//         );
//       },
//     });
//   };

//   return (
//     <div className="slider">
//       {images.length > 0 && (
//         <img
//           ref={imageRef}
//           src={images[currentImageIndex]}
//           alt={`Slide ${currentImageIndex + 1}`}
//           className={className}
//         />
//       )}
//       <div className={`flexCenter w-full mt-4`}>
//         <button
//           onClick={prevSlide}
//           className="group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
//         >
//           <HiArrowLongLeft className="group-hover:-translate-x-2 transition-all duration-150 ease-linear" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
//         >
//           <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-150 ease-linear" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReusableSlider;

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";

const ReusableSlider = ({ images, className }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    tl.to(imageRef.current, { duration: 1, opacity: 0, ease: "power1.inOut" });
    tl.to(imageRef.current, {
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
    });

    // Start autosliding
    intervalRef.current = setInterval(nextSlide, 20000); // 20000 milliseconds = 20 seconds

    // Cleanup function to clear the interval when the component unmounts or changes
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    // Clear and reset the interval whenever the current image index changes
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 20000);
  }, [currentImageIndex]);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    transitionSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    transitionSlide(newIndex);
  };

  const transitionSlide = (newIndex) => {
    const oldElement = imageRef.current;
    const newImage = images[newIndex];

    gsap.to(oldElement, {
      duration: 0.5,
      opacity: 0,
      scale: 0.9,
      ease: "power1.inOut",
      onComplete: () => {
        setCurrentImageIndex(newIndex);
        oldElement.src = newImage;
        gsap.fromTo(
          oldElement,
          { opacity: 0, scale: 0.9 },
          { duration: 0.5, opacity: 1, scale: 1, ease: "power1.inOut" }
        );
      },
    });
  };

  return (
    <div className="slider">
      {images.length > 0 && (
        <img
          ref={imageRef}
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className={className}
        />
      )}
      <div className={`flexCenter w-full mt-4`}>
        <button
          onClick={prevSlide}
          className="group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
          title="Previous"
          aria-label="Previous"
        >
          <HiArrowLongLeft className="group-hover:-translate-x-2 transition-all duration-150 ease-linear" />
        </button>
        <button
          onClick={nextSlide}
          className="group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base transition-all duration-300 ease-linear"
          title="Next"
          aria-label="Next"
        >
          <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-150 ease-linear" />
        </button>
      </div>
    </div>
  );
};

export default ReusableSlider;
