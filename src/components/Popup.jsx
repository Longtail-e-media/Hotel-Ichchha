import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const closePopup = () => {
    setIsPopupVisible(false); // Update isPopupVisible to false when closing the popup
    setTimeout(() => {
      setIsOpen(false); // Set isOpen to false after the animation completes
    }, 700); // Match the duration with the CSS transition duration
  };

  return (
    <div className="relative">
      {/* <img
        src="https://th.bing.com/th/id/OIP.OSPKuOS6wF6ctJGoixpS8wHaEo?w=295&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
        className="w-full h-screen object-cover"
      /> */}
      {isOpen && (
        <div
          className={`bg-black/60 backdrop-blur-md fixed top-0 left-0 h-full w-full flex items-center justify-center z-50 transition-all duration-500 ease-in-out ${
            isPopupVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={closePopup}
            className="text-white hover:text-white/50 transition-all duration-500 text-4xl absolute top-4 right-4 z-10"
            title="Close"
            aria-label="Close"
          >
            <IoClose />
          </button>
          <div
            className={`max-w-4xl size-auto bg-white rounded-xl shadow-md transition-all duration-500 ease-in-out ${
              isPopupVisible
                ? "scale-150 translate-y-0"
                : "scale-0 -translate-y-full"
            }`}
          >
            <div className="relative rounded-xl overflow-hidden">
              {/* <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)] bg-red-600 inset-0 rounded-xl" /> */}
              <div className="absolute bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.9)] bottom-0 rounded-xl rounded-b-none  w-full h-40" />
              <img
                src="http://purnadrive.rf.gd/uploads/Wx5vCOzP_2x.png"
                // src="http://purnadrive.rf.gd/uploads/UJF8qZmB_2x.png"
                alt=""
                className="w-full h-96 object-cover object-center rounded-xl"
                // className="w-96 h-96 object-contain scale-125 object-top rounded-xl"
              />
              <div className="absolute bottom-0 p-4">
                {/* <p className="font-bold mb-2 text-sm text-white">
                  This is not the current website of De Crown Inn
                </p> */}
                <p className="text-xs font-medium text-white/70">
                  This website is a snapshot of the De Crown Inn website made by{" "}
                  <a
                    href="https://purnashrestha.com.np/"
                    target="_blank"
                    className="underline text-white"
                  >
                    Purna Shrestha
                  </a>
                  . You can find the current website at{" "}
                  <a
                    href="https://decrowninn.com/"
                    target="_blank"
                    className="underline text-white"
                  >
                    decrowninn.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
