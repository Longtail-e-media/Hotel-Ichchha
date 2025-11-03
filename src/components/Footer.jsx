import React from "react";
import Logo from "./ui/Logo";
import SocialLinks from "./ui/SocialLinks";
import ContactAddressLinks from "./ui/ContactAddressLinks";
import { Link } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";
import Copyright from "./ui/Copyright";

const Footer = () => {
  const {
    data: footerContents,
    loading,
    error,
  } = useFetchApi(
    "https://hotelichchha.com/api/api_footer.php",
    "footerContents"
  );

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }
console.log(footerContents);
  return (
    <div className="bg-pink-gold text-navy">
      <section>
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-2">
              <Logo />
              <ContactAddressLinks />
              <SocialLinks />
            </div>
            {footerContents.map((section, index) => (
              <div className="footer-column" key={index}>
                {section.type === "quickLinks" && (
                  <>
                    <h3 className="font-bold text-lg mb-8">Quick Links</h3>
                    <ul className="list-none space-y-4">
                      {section.items.map((link, index) => (
                        <li
                          key={index}
                          className="text-navy hover:text-gold hover:translate-x-2 hover:font-bold transition-all duration-300 ease-in"
                        >
                          <Link to={link.router}>{link.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {section.type === "otaLinks" && (
                  <>
                    <h3 className="font-bold text-lg mb-8">OTA Links</h3>
                    <ul className="list-none space-y-4">
                      {section.items.map((link, index) => (
                        <li
                          key={index}
                          className="text-navy hover:text-gold hover:translate-x-2 hover:font-bold transition-all duration-300 ease-in capitalize"
                        >
                          <Link to={link.url} target="_blank" rel="noopener">
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {section.type === "bookingInfo" && (
                  <>
                    {section.items.map((info, index) => (
                      <div key={index}>
                        <h3 className="font-bold text-lg mb-8">{info.title}</h3>
                        <ul className="flex flex-wrap items-center justify-start gap-2 list-none mb-8">
                          {info.links.map((link) => (
                            <li key={link.id} className="flex gap-2 flex-wrap">
                              <Link
                                to={link.href}
                                target="_blank"
                                rel="noopener"
                                className="text-navy hover:text-gold transition-all duration-300 ease-in"
                              >
                                {link.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container w-full h-px bg-gradient-to-l from-transparent via-navy/50 to-transparent -translate-y-20" />
      <Copyright />
    </div>
  );
};

export default Footer;
