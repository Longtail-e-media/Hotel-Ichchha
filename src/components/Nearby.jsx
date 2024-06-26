import React, { useState, useEffect } from "react";
import NearbyMapComponent from "./Nearby/NearbyMapComponent";
import ScrollReveal from "./ScrollReveal";

function NearbyLocations() {
  return (
    <section className="bg-bg-gold-light">
      <div>
        <div className="container mx-auto">
          {/* <div className="flexCenter flex-col w-3/4 mx-auto mb-8">
            <h3 className="text-navy font-medium">
              Iconic attraction near Hotel Ichchha
            </h3>
            <h4 className="text-center">
              Hotel Ichchha is a verdant oasis in the heart of Simara and is
              perfect for scintillating experiences. Visit the iconic landmarks
              and monuments near our hotel and create your own moments.
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              excepturi consectetur repellendus libero temporibus porro tempore
              quasi aspernatur non, maxime officia mollitia, eaque iusto ad
              eius? Iure, eaque similique? Ad blanditiis itaque ratione
              perspiciatis, quia architecto iste doloribus pariatur, voluptatem,
              nemo cum sit exercitationem sunt at quisquam tenetur dolor nostrum
              saepe ea minima inventore odio rem. Impedit perferendis
              dignissimos illo, quas excepturi et eveniet perspiciatis dolorum
              at quod exercitationem, labore quam ut sint cum minima tempore
              soluta quo eaque. Assumenda.
            </p>
          </div> */}

          <ScrollReveal
            heading="Iconic attraction near Hotel Ichchha"
            subheading="Hotel Ichchha is a verdant oasis in the heart of Simara and is
            perfect for scintillating experiences."
            para="Hotel Ichchha is a verdant oasis in the heart of Simara and is
            perfect for scintillating experiences. Visit the iconic landmarks
            and monuments near our hotel and create your own moments."
            textColor="text-navy"
            highlightColor="text-navy"
            paraColor="text-navy"
          />
        </div>

        <NearbyMapComponent />
      </div>
    </section>
  );
}

export default NearbyLocations;
