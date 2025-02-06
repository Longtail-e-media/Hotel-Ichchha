import React, { useState, useEffect } from "react";
import ScrollReveal from "../ScrollReveal";
import useFetchApi from "../../hooks/useFetchApi";

const Testimonials = () => {
  const {
    data: testimonialContents,
    loading,
    error,
  } = useFetchApi(
    "https://hotelichchha.com/api/api_testimonial.php",
    "testimonialContents"
  );

  const [selectedPerson, setSelectedPerson] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  // Update selectedPerson once the data is fetched
  useEffect(() => {
    if (testimonialContents && testimonialContents[0]?.testimonials) {
      setSelectedPerson(testimonialContents[0].testimonials[0].author);
    }
  }, [testimonialContents]);

  const handlePersonClick = (person) => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedPerson(person);
      setIsVisible(true);
      // Scroll to the display section
      const displaySection = document.getElementById("testimonials-display");
      if (displaySection) {
        displaySection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 400);
  };

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section id="testimonials" className="bg-bg-gold-dark pt-32">
      <div className="container mx-auto">
        <ScrollReveal
          heading={testimonialContents[0].title}
          subheading={testimonialContents[0].subheading}
          para={testimonialContents[0].description}
          textColor="text-navy"
          highlightColor="text-navy"
          paraColor="text-navy"
        />
        <div className="flex flex-col md:flex-row gap-8 mt-12 md:mt-24">
          <div className="w-full md:w-1/4 h-80 md:h-96 overflow-y-auto bg-ivory/40">
            {testimonialContents[0].testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => handlePersonClick(testimonial.author)}
                className={`w-full cursor-pointer transition-all duration-400 ease-linear ${
                  selectedPerson === testimonial.author ? "bg-gold/50" : ""
                }`}
                title="View Testimonial"
                aria-label="View Testimonial"
                type="button"
              >
                <div className="flex items-center justify-start gap-4 p-6 py-4 border-b-[1px] border-navy/10 ">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div className="flex items-start text-start flex-col gap-0">
                    <p className="text-base md:text-xl font-bold">
                      {testimonial.author}
                    </p>
                    <p className="text-sm md:text-base text-navy/90">
                      - via {testimonial.source}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="w-full md:w-3/4 h-96 overflow-y-auto">
            <div
              id="testimonials-display"
              className={`px-4 ${
                isVisible
                  ? "scale-100 translate-y-0 md:translate-y-0 md:translate-x-0"
                  : "scale-0 -translate-y-full md:translate-y-0 md:-translate-x-full"
              } transition-transform duration-700 scroll-my-0 md:scroll-my-64`}
            >
              {testimonialContents[0].testimonials
                .filter((testimonial) => testimonial.author === selectedPerson)
                .map((testimonial) => (
                  <div key={testimonial.id} className="md:px-6">
                    <p className="text-justify md:text-pretty text-xl">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center justify-between gap-12 mt-12">
                      <p className="text-base md:text-xl font-bold">
                        - {testimonial.author}
                      </p>
                      <p className="text-sm md:text-base">
                        - via {testimonial.source}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
