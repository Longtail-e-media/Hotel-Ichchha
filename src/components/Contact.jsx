import React, { useEffect } from "react";
import { gsap } from "gsap";
import NearbyMapComponent from "./Nearby/NearbyMapComponent";
import ContactForm from "./Contact/Form";
import TripAdvisorWidget from "./TripAdvisorWidget";
import SocialLinks from "./ui/SocialLinks";
import ContactAddressLinks from "./ui/ContactAddressLinks";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  useEffect(() => {
    gsap.from(".form-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      stagger: 0.2,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="bg-bg-gold-light py-6 md:p-0"></div>

      <section className="bg-bg-gold-light">
        <div className="container mx-auto">
          <ScrollReveal
            heading="How to get to Hotel Ichchha?"
            subheading="Reach Out, Connect, and Spark Possibilities - Your Gateway to
            Seamless Communication."
            para="Have any inquiries? Reach out to Hotel Ichchha dedicated team.
            Whether it's booking accommodations, event planning, or dietary
            preferences, we're here to ensure your experience is seamless and
            memorable. Connect with us today for personalized service and
            support!"
            textColor="text-navy"
            highlightColor="text-navy"
            paraColor="text-navy"
          />
        </div>
        <div className="mt-28">
          <NearbyMapComponent />
        </div>
      </section>

      <section className="bg-bg-gold-dark">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
            <div className="w-full md:w-1/2 max-w-lg">
              {/* <h5 className="text-3xl leading-loose pb-4">
                About Hotel Ichchha
              </h5>
              <p className="pb-4">
                Hotel Ichchha is a verdant oasis in the heart of Simara.The
                hotel aims to cater and accommodate business and leisure
                travelers passing through the zone.
              </p>
              <p className="pb-4">
                The homely ambience, facilities and amenities within the
                premises make your stay a memorable and luxurious one. We are
                one of the leading hospitality providers assuring our best
                services. Centrally located, its an ideal choice for business
                travelers, pilgrimage tour, recreational tours, etc. The best
                choice for destination wedding to make your special moments more
                memorable. With a total of 90 rooms, Hotel Ichchha is best
                suited for all your requirements.
              </p> */}

              <h5 className="text-3xl leading-loose py-4">Find Us</h5>

              <div className="space-y-2">
                <ContactAddressLinks />
              </div>

              <SocialLinks />

              <div className="mt-12">
                <h5 className="text-3xl leading-loose py-4">Review Us</h5>

                <TripAdvisorWidget />
              </div>
            </div>
            <div className="ml-auto w-full md:w-1/2 h-full sticky top-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
