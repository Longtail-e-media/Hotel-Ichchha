import React from "react";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="group overflow-hidden relative w-80 h-96 text-center shadow-lg transition-all duration-300 ease-linear rounded-xl">
      <img
        src={member.image}
        alt={member.name}
        className="size-full object-cover"
      />
      <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.8)] opacity-70 size-full group-hover:opacity-100 transition-all duration-300 ease-linear" />
      <div className="absolute -translate-y-24 group-hover:-translate-y-56 transition-all duration-300 ease-linear p-4">
        <h4 className="text-ivory font-body text-xl font-medium">
          {member.name}
        </h4>
        <h5 className="text-ivory/90 font-body text-base">{member.position}</h5>
        <p className="text-ivory/90 text-sm mt-2 group-hover:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear">
          {member.description}
        </p>
      </div>
    </div>
  );
};

const BODTeam = ({ ourTeamMembers }) => {
  return (
    <section className="bg-bg-gold-light">
      <div className="p-2 flexCenter flex-col w-full md:w-3/4 mx-auto">
        <h3 className="text-2xl md:text-4xl font-medium text-center">
          Get to Know the Faces Behind Our Success
        </h3>
        <h4 className="text-lg text-justify">
          Unveil the Talented Individuals Who Embark on a Collective Mission to
          Elevate Your Experience at Hotel Ichchha
        </h4>
      </div>
      <div className="mt-12 md:mt-32 flex flex-col gap-16 items-center">
        <TeamMemberCard member={ourTeamMembers[0]} />
        <div className="flex items-center flex-col md:flex-row justify-center gap-16 md:space-x-32">
          {ourTeamMembers.slice(1, 3).map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
        <TeamMemberCard member={ourTeamMembers[3]} />
      </div>
    </section>
  );
};

export default BODTeam;
