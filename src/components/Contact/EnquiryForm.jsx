import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";
import { enquiryFormData } from "../../constants/data";

const EnquiryForm = ({ onClose, selectedEventTitle }) => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleClose = () => {
    setShowForm(false);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  const duration = 700;

  return (
    <div
      className={`p-2 fixed top-0 left-0 w-full h-full  flex items-center justify-center z-50 transition-all duration-${duration} ${
        showForm
          ? "opacity-100 bg-black/60 backdrop-blur-sm"
          : "opacity-0 bg-black pointer-events-none backdrop-blur-3xl"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-bg-gold-light p-4 md:p-8 rounded-md transition-all duration-${duration} ${
          showForm
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-0 -translate-y-full opacity-0"
        }`}
        onClick={handleFormClick}
      >
        <h3 className="text-3xl text-center font-semibold mb-12">
          Enquiry Form
        </h3>
        <button
          type="button"
          onClick={handleClose}
          className="text-navy hover:text-goldLight transition-all duration-500 text-2xl absolute top-4 right-4 z-10"
          title="Close"
          aria-label="Close"
        >
          <IoClose />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-96 md:h-auto overflow-x-hidden overflow-y-auto">
            {enquiryFormData.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="text-base text-navy">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    rows="4"
                    className="text-xl w-[200%] py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    className="text-xl w-full py-2 border-b border-navy/20 focus:outline-none focus:border-goldLight bg-transparent text-navy"
                    defaultValue={
                      field.name === "eventTitle" ? selectedEventTitle : ""
                    }
                  />
                )}
              </div>
            ))}
          </div>
          <div className="w-full mt-8">
            <button
              type="submit"
              className="w-full group flex items-center justify-center gap-2 bg-goldLight text-navy hover:bg-navy hover:text-ivory px-6 py-4 rounded-full text-lg transition-all duration-300 ease-linear"
              title="Submit"
              aria-label="Submit"
            >
              Submit
              <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300 ease-linear" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
