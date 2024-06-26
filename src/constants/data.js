import { HiArrowLongRight } from "react-icons/hi2";
import logo from "../assets/logo.svg";
import introVideo from "../assets/intro_video.mp4";
import ichchha from "../assets/ichchha.webp";
import ichchha1 from "../assets/ichchha1.webp";
import {
  MdAtm,
  MdOutlineInsertEmoticon,
  MdOutlineRoomService,
} from "react-icons/md";
import { TbElevator } from "react-icons/tb";
import {
  FaBed,
  FaRulerCombined,
  FaDollarSign,
  FaUser,
  FaSmoking,
} from "react-icons/fa";
import slider1 from "../assets/slider/slider1.webp";
import slider2 from "../assets/slider/slider2.webp";
import slider3 from "../assets/slider/slider3.webp";
import slider4 from "../assets/slider/slider4.webp";
import slider5 from "../assets/slider/slider5.webp";
import slider6 from "../assets/slider/slider6.webp";

import chairman from "../assets/others/chairman.webp";
import ceo from "../assets/others/ceo.webp";
import director1 from "../assets/others/director1.webp";
import director2 from "../assets/others/director2.webp";

import dlx1 from "../assets/rooms/dlx1.webp";
import dlx2 from "../assets/rooms/dlx2.webp";
import dlx3 from "../assets/rooms/dlx3.webp";
import dlx4 from "../assets/rooms/dlx4.webp";

import fountainR1 from "../assets/restaurant/fountainR1.webp";
import fountainR2 from "../assets/restaurant/fountainR2.webp";
import fountainR3 from "../assets/restaurant/fountainR3.webp";
import fountainR4 from "../assets/restaurant/fountainR4.webp";

import bar2 from "../assets/restaurant/bar2.webp";
import bar3 from "../assets/restaurant/bar3.webp";

import pool1 from "../assets/recreation/pool1.webp";
import pool2 from "../assets/recreation/pool2.webp";
import pool3 from "../assets/recreation/pool3.webp";

import spa2 from "../assets/recreation/spa2.webp";
import spa3 from "../assets/recreation/spa3.webp";
import spa4 from "../assets/recreation/spa4.webp";

import jacuzzi1 from "../assets/recreation/jacuzzi1.webp";
import jacuzzi2 from "../assets/recreation/jacuzzi2.webp";

import ground1 from "../assets/recreation/ground1.webp";
import ground2 from "../assets/recreation/ground2.webp";

import gym1 from "../assets/recreation/gym1.webp";
import gym2 from "../assets/recreation/gym2.webp";
import gym3 from "../assets/recreation/gym3.webp";

import casino1 from "../assets/recreation/casino1.webp";
import casino2 from "../assets/recreation/casino2.webp";
import casino3 from "../assets/recreation/casino3.webp";
import casino4 from "../assets/recreation/casino4.webp";

import g1 from "../assets/gallery/g1.webp";
import g2 from "../assets/gallery/g2.webp";
import g3 from "../assets/gallery/g3.webp";
import g4 from "../assets/gallery/g4.webp";
import g5 from "../assets/gallery/g5.webp";
import g6 from "../assets/gallery/g6.webp";
import g7 from "../assets/gallery/g7.webp";
import g8 from "../assets/gallery/g8.webp";
import g9 from "../assets/gallery/g9.webp";
import g10 from "../assets/gallery/g10.webp";
import g11 from "../assets/gallery/g11.webp";
import g12 from "../assets/gallery/g12.webp";
import g13 from "../assets/gallery/g13.webp";
import g14 from "../assets/gallery/g14.webp";
import g15 from "../assets/gallery/g15.webp";
import g16 from "../assets/gallery/g16.webp";
import g17 from "../assets/gallery/g17.webp";
import g18 from "../assets/gallery/g18.webp";
import g19 from "../assets/gallery/g19.webp";
import g20 from "../assets/gallery/g20.webp";
import g21 from "../assets/gallery/g21.webp";
import g22 from "../assets/gallery/g22.webp";
import g23 from "../assets/gallery/g23.webp";
import g24 from "../assets/gallery/g24.webp";

// icons for facilities
import { CgGym } from "react-icons/cg";
import { GrSpa } from "react-icons/gr";
import { FaSwimmingPool } from "react-icons/fa";
import { RiRestaurant2Fill } from "react-icons/ri";
import { MdOutlineSportsBar } from "react-icons/md";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { PiBroomBold } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { BiSolidParking } from "react-icons/bi";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { LuConciergeBell } from "react-icons/lu";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { GiKidSlide } from "react-icons/gi";
import { MdLocalAirport } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";
import { MdLocalAtm } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

export {
  HiArrowLongRight,
  MdOutlineInsertEmoticon,
  logo,
  introVideo,
  ichchha,
  slider1,
};

export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/home",
  },
  {
    id: "about",
    title: "About",
    link: "/about",
  },
  {
    id: "restaurants",
    title: "Restro & Bars",
    link: "/restaurants",
  },
  {
    id: "recreation",
    title: "Recreation",
    link: "/recreation",
  },
  // {
  //   id: "facilities",
  //   title: "Facilities",
  //   link: "/facilities",
  // },
  {
    id: "gallery",
    title: "Gallery",
    link: "/gallery",
  },

  {
    id: "contact",
    title: "Contact",
    link: "/contact",
  },
];

export const navLinksRooms = [
  {
    id: 1,
    title: "Rooms & Suites",
    link: "/accommodation",
    subLinks: [
      {
        id: "deluxeRoom",
        title: "Deluxe Rooms",
        link: "/accommodation/deluxe",
      },
      {
        id: "superDeluxeRoom",
        title: "Super Deluxe Rooms",
        link: "/accommodation/super-deluxe",
      },
      // {
      //   id: "premiumRoom",
      //   title: "Premium Rooms",
      //   link: "/accommodation/premium",
      // },
      {
        id: "miniSuite",
        title: "Mini Suite",
        link: "/accommodation/mini-suite",
      },
      {
        id: "juniorSuite",
        title: "Junior Suite",
        link: "/accommodation/junior-suite",
      },
      {
        id: "executiveSuite",
        title: "Executive Rooms",
        link: "/accommodation/executive-suite",
      },
      {
        id: "presidentialApartment",
        title: "Presidential Apartment",
        link: "/accommodation/presidential-apartment",
      },
    ],
  },
];

export const navLinksEvents = [
  {
    id: 1,
    title: "Conference & Events",
    link: "/events",
    subLinks: [
      {
        id: "janakiHall",
        title: "Janaki Hall",
        link: "/events#janakiHall",
      },
      {
        id: "jyamireHall",
        title: "Jyamire Hall",
        link: "/events#jyamireHall",
      },
      {
        id: "narayaniHall",
        title: "Narayani Hall",
        link: "/events#narayaniHall",
      },
      {
        id: "balmikiHall",
        title: "Balmiki Hall",
        link: "/events#balmikiHall",
      },
    ],
  },
];

import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export const socialLinks = [
  {
    id: "facebook",
    title: "Facebook",
    link: "https://www.facebook.com/ichchahotel",
    icon: FaFacebookF,
  },
  {
    id: "instagram",
    title: "Instagram",
    link: "https://www.instagram.com/hotel_ichchha",
    icon: AiFillInstagram,
  },
  {
    id: "twitter",
    title: "Twitter",
    link: "https://twitter.com/hotelichchha",
    icon: FaXTwitter,
  },
  {
    id: "linkedin",
    title: "Linkedin",
    link: "https://www.linkedin.com/company/hotel-ichchha",
    icon: FaLinkedinIn,
  },
  {
    id: "youtube",
    title: "Youtube",
    link: "https://www.youtube.com/watch?v=R_Fhk2a4uII",
    icon: FaYoutube,
  },
];

import { GrLocation } from "react-icons/gr";
import { TbPhone } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";

export const contactAddressLinks = [
  {
    id: "location",
    link: "https://maps.app.goo.gl/dJurNnE6cBLguX1cA",
    text: "Simara, Bara, Nepal",
    icon: GrLocation,
  },
  {
    id: "phoneNumbers",
    icon: TbPhone,
    numbers: [
      {
        link: "tel:+977053520591",
        text: "+977-053 520591",
      },
      {
        link: "tel:+977053520592",
        text: "92",
      },
      {
        link: "tel:+977053520593",
        text: "93",
      },
      {
        link: "tel:+977053520594",
        text: "94",
      },

      // { id: 2, text: "+977-053 520592", href: "tel:+977053520592" },
      // { id: 3, text: "+977-053 520593", href: "tel:+977053520593" },
    ],
  },
  {
    id: "emails",
    icon: HiOutlineMail,
    addresses: [
      {
        link: "mailto:info@hotelichchha.com",
        text: "info@hotelichchha.com",
      },
      // {
      //   link: "mailto:reservation@hotelichchha.com",
      //   text: "reservation@hotelichchha.com",
      // },
    ],
  },
];

export const aboutContents = [
  {
    id: "aboutTitle",
    title: "Hotel Ichchha",
    // subtitle: "Five Star Hotel in Simara, Bara",
    subtitle: "Nepal's First 5-Star Hotel in Simara",
    subheading:
      // "The hotel aims to cater and accommodate business and leisure travelers passing through the zone. ",
      "Epitomizes luxury and sophistication, offering exceptional comfort, convenience, enjoyment, and services.",
    description:
      // "The homely ambience, facilities and amenities within the premises make your stay a memorable and luxurious one. We are one of the leading hospitality providers assuring our best services. Centrally located, its an ideal choice for business travelers, pilgrimage tour, recreational tours, etc. The best choice for destination wedding to make your special moments more memorable. With a total of 90 rooms, Hotel Ichchha is best suited for all your requirements.",
      "Being a top hospitality provider, we guarantee our finest offerings due to its convenient location, it is a great option for business, leisure, and pilgrimage trips. The ideal option for a destination wedding that will enhance the memory of your special moments. Hotel Ichchha is perfectly suited for all your needs with a total of 100 rooms.",
  },
];

export const messageFromCEO = [
  {
    id: "ceoMessage",
    image: ceo,
    title: "Message from the Chairman",
    fullName: "Rewanta Prasad Dhaubhadel",
    position: "Chief Executive Officer (CEO)",
    subtitle: "",
    subheading:
      "We are committed to providing the best hospitality services to our guests.",

    associatedVentures: [
      {
        title: "Nepal Land & Housing Developer's Association",
        post: "President",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "K & K International College",
        post: "Chairman",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "City Homes Ltd",
        post: "Chairman",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "Property Management Associates",
        post: "Chairman",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "Kantipur Mall",
        post: "Managing Director",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "Heart to Heart Nepal",
        post: "Sr. Vice Chairman",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "Lions Club of Kathmandu Metro",
        post: "Director",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
      {
        title: "Infrastructure Development Bank (NCC Bank Ltd)",
        post: "Founder Director",
        description: "Description of the association",
        url: "URL of the association's website",
        logo: "logo",
      },
    ],
  },
];

export const ourTeamMembers = [
  {
    id: 1,
    name: "Ichchha Bahadur Wagle",
    image: chairman,
    position: "Chairman",
    description:
      "Former Chairman/President at Nepal land and housing developers Association NLHDA , Academic Institute Sector with more than 25 Years of Experience In real-estate and Hospitality field.",
  },
  {
    id: 2,
    name: "Moonsun Wagle",
    image: director1,
    position: "Director",
    description:
      "More than 5 Years of Experience in Human Resources and Administrative Department.",
  },
  {
    id: 3,
    name: "Sushila Basnet",
    image: director2,
    position: "Director",
    description: "More than 8 Years of Experience in Hotel Management.",
  },
  {
    id: 4,
    name: "Rewanta Prasad Dhaubhadel",
    image: ceo,
    position: "CEO",
    description: "More than 27 Years of Experience in Hospitality Sector.",
  },
];

import { IoBed, IoPricetagSharp } from "react-icons/io5";

import { MdFamilyRestroom } from "react-icons/md";
import { IoMdResize } from "react-icons/io";

export const accomodationContents = [
  {
    id: "accomodationTitle",
    title: "Exclusive Rooms and Suites",
    subtitle: "",
    subheading: "Experience the ultimate Staycation in Hotel Ichchha",
    description:
      // "Light, bright and with a smart layout that enhances the feeling of spaciousness, our rooms feature all the world class furniture, air conditioning, amenities, toiletries and technology. Super deluxe rooms are ingeniously designed with splendid interiors. The junior suite rooms are spacious rooms with a cozy living room separated by a partial wall. The executive rooms feature a large bedroom and a living room. Elegantly decorated with opulent interiors and varnished in soft tones, all the rooms are spacious with classy comfortable beds.",
      "Hotel Ichchha rooms and suites are a symphony of luxury and comfort, designed to enchant every guest where luxury embraces elegance, Hotel Ichchha offers an exquisite blend of comfort and grandeur. Experience unparalleled hospitality and serene elegance in every stay.",
    rojaiLink: "https://www.hotelichchha.com/result.php?hotel_code=8fE7Jg",
    accomodation: [
      {
        id: "deluxeRoom",
        title: "Deluxe Room",
        subtitle: "",
        description:
          "The Deluxe Room offers a comfortable stay with modern amenities and elegant decoration.",
        imageUrl: dlx3,
        category: "deluxe",
        router: "/accommodation/deluxe",
        images: [
          {
            src: dlx1,
            title: "The Homely Ambience",
          },
          {
            src: dlx2,
            title: "The Homely Ambience",
          },
          {
            src: dlx3,
            title: "The Homely Ambience",
          },
          {
            src: dlx4,
            title: "The Homely Ambience",
          },
        ],
        overview: [
          {
            title: "Overview",
            content: [
              "Step into the embrace of elegance with Hotel Ichchha Deluxe Rooms. Designed for discerning travelers, these rooms blend exquisite comfort with state-of-the-art facilities. Revel in the sumptuous bedding, soak in the serene ambiance, and let our attentive service elevate your stay to a realm of unparalleled luxury.",
            ],
          },
        ],
        policies: [
          {
            title: "Child Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - US$ 8/ INR 500.",
            ],
          },
        ],
        amenities: [
          "Air conditioning",
          "Bathrobe",
          "Coffee and tea set",
          "Desk",
          "Hairdryer",
          "Minibar",
          "Pillow service",
          "Safe",
          "Slippers",
          "Storage cabinet",
          "Telephone",
          "Television",
          "Toilet",
          "Towel service",
          "Twin bed/double bed",
          "Wi-Fi",
        ],
        roomDetails: {
          "Starting Price": { icon: IoPricetagSharp, value: "USD 60 / night" },
          "Total Rooms": { icon: IoBed, value: "55 rooms" },
          "Room Size": { icon: IoMdResize, value: "215 sq. feet" },
          Occupancy: { icon: MdFamilyRestroom, value: "2 adults" },
          "Airport Pickup & Drop": {
            icon: MdLocalAirport,
            value: "On Request",
          },
        },
      },
      {
        id: "superDeluxeRoom",
        title: "Super Deluxe Room",
        subtitle: "",
        description:
          "Experience luxury and sophistication in our Super Deluxe Room, featuring splendid interiors and top-notch facilities.",
        imageUrl: dlx4,
        category: "super-deluxe",
        router: "/accommodation/super-deluxe",
        images: [
          {
            src: dlx1,
            title: "The Homely Ambience",
          },
          {
            src: dlx2,
            title: "The Homely Ambience",
          },
          {
            src: dlx3,
            title: "The Homely Ambience",
          },
          {
            src: dlx4,
            title: "The Homely Ambience",
          },
        ],
        overview: [
          {
            title: "Overview",
            content: [
              "Discover unparalleled opulence in Hotel Ichchha Super Deluxe Rooms, where global standards of luxury meet personalized comfort. Each room is a masterpiece of design, featuring lavish furnishings, cutting-edge technology, and panoramic views that promise to leave you spellbound. Our commitment to excellence ensures every moment is imbued with splendor and sophistication.",
            ],
          },
        ],
        policies: [
          {
            title: "Child Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - US$ 8/ INR 500.",
            ],
          },
        ],
        amenities: [
          "Air conditioning",
          "Bathrobe",
          "Coffee and tea set",
          "Desk",
          "Hairdryer",
          "Minibar",
          "Pillow service",
          "Safe",
          "Slippers",
          "Storage cabinet",
          "Telephone",
          "Television",
          "Toilet",
          "Towel service",
          "Twin bed/double bed",
          "Wi-Fi",
        ],
        roomDetails: {
          "Starting Price": { icon: IoPricetagSharp, value: "USD 70 / night" },
          "Total Rooms": { icon: IoBed, value: "30 rooms" },
          "Room Size": { icon: IoMdResize, value: "215 sq. feet" },
          Occupancy: { icon: MdFamilyRestroom, value: "2 adults + 1 child" },
          "Airport Pickup & Drop": {
            icon: MdLocalAirport,
            value: "On Request",
          },
        },
      },
      // {
      //   id: "premiumRoom",
      //   title: "Premium Room",
      //   subtitle: "",
      //   description:
      //     "Indulge in luxury and comfort with our Premium Room, designed to offer a lavish experience for our guests.",
      //   imageUrl: dlx2,
      //   category: "premium",
      //   router: "/accommodation/premium",
      //   images: [
      //     {
      //       src: dlx1,
      //       title: "The Homely Ambience",
      //     },
      //     {
      //       src: dlx2,
      //       title: "The Homely Ambience",
      //     },
      //     {
      //       src: dlx3,
      //       title: "The Homely Ambience",
      //     },
      //     {
      //       src: dlx4,
      //       title: "The Homely Ambience",
      //     },
      //   ],
      //   overview: [
      //     {
      //       title: "Overview",
      //       content: [
      //         "Immerse yourself in the epitome of elegance with Hotel Ichchha Premium Rooms. Tailored for the world traveler, these rooms boast an exquisite fusion of comfort and style, complete with luxurious amenities and impeccable service. Surrender to the allure of sophistication and let us redefine your travel experience.",
      //       ],
      //     },
      //   ],
      //   policies: [
      //     {
      //       title: "Child Policies",
      //       content: [
      //         "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
      //         "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
      //         "Breakfast - US$ 8/ INR 500.",
      //       ],
      //     },
      //   ],
      //   amenities: [
      //     "Air conditioning",
      //     "Bathrobe",
      //     "Coffee and tea set",
      //     "Desk",
      //     "Hairdryer",
      //     "Minibar",
      //     "Pillow service",
      //     "Safe",
      //     "Slippers",
      //     "Storage cabinet",
      //     "Telephone",
      //     "Television",
      //     "Toilet",
      //     "Towel service",
      //     "Twin bed/double bed",
      //     "Wi-Fi",
      //   ],
      //   roomDetails: {
      //     "Room Size": { icon: IoMdResize, value: "215 sq. feet" },
      //     "Bed Type": { icon: IoBed, value: "King Size" },
      //     "Starting Price": { icon: IoPricetagSharp, value: "USD 75 / night" },
      //     Occupancy: { icon: MdFamilyRestroom, value: "2 adults + 2 children" },
      //     "Airport Pickup & Drop": {
      //       icon: MdLocalAirport,
      //       value: "On Request",
      //     },
      //   },
      // },
      {
        id: "miniSuite",
        title: "Mini Suite",
        subtitle: "",
        description:
          "Indulge in luxury and comfort with our Mini Suite, designed to offer a lavish experience for our guests.",
        imageUrl: dlx2,
        category: "mini-suite",
        router: "/accommodation/mini-suite",
        images: [
          {
            src: dlx1,
            title: "The Homely Ambience",
          },
          {
            src: dlx2,
            title: "The Homely Ambience",
          },
          {
            src: dlx3,
            title: "The Homely Ambience",
          },
          {
            src: dlx4,
            title: "The Homely Ambience",
          },
        ],
        overview: [
          {
            title: "Overview",
            content: [
              "Immerse yourself in the epitome of elegance with Hotel Ichchha Premium Rooms. Tailored for the world traveler, these rooms boast an exquisite fusion of comfort and style, complete with luxurious amenities and impeccable service. Surrender to the allure of sophistication and let us redefine your travel experience.",
            ],
          },
        ],
        policies: [
          {
            title: "Child Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - US$ 8/ INR 500.",
            ],
          },
        ],
        amenities: [
          "Air conditioning",
          "Bathrobe",
          "Coffee and tea set",
          "Desk",
          "Hairdryer",
          "Minibar",
          "Pillow service",
          "Safe",
          "Slippers",
          "Storage cabinet",
          "Telephone",
          "Television",
          "Toilet",
          "Towel service",
          "Twin bed/double bed",
          "Wi-Fi",
        ],
        roomDetails: {
          "Starting Price": { icon: IoPricetagSharp, value: "USD 85 / night" },
          "Total Rooms": { icon: IoBed, value: "7 rooms" },
          "Room Size": { icon: IoMdResize, value: "215 sq. feet" },
          Occupancy: { icon: MdFamilyRestroom, value: "2 adults + 1 children" },
          "Airport Pickup & Drop": {
            icon: MdLocalAirport,
            value: "On Request",
          },
        },
      },
      {
        id: "juniorSuite",
        title: "Junior Suite",
        subtitle: "",
        description:
          "Our Junior Suite offers spacious accommodation with a cozy living room, perfect for relaxation and comfort.",
        imageUrl: dlx1,
        category: "junior-suite",
        router: "/accommodation/junior-suite",
        images: [
          {
            src: dlx1,
            title: "The Homely Ambience",
          },
          {
            src: dlx2,
            title: "The Homely Ambience",
          },
          {
            src: dlx3,
            title: "The Homely Ambience",
          },
          {
            src: dlx4,
            title: "The Homely Ambience",
          },
        ],
        overview: [
          {
            title: "Overview",
            content: [
              "Indulge in the refined luxury of Hotel Ichchha Junior Suites, where international flair meets intimate comfort. These suites are a sanctuary of sophistication, offering a blend of modern elegance and timeless charm. With premium amenities and bespoke services, our Junior Suites are designed to provide an unforgettable experience for the global connoisseur.",
            ],
          },
        ],
        policies: [
          {
            title: "Child Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - US$ 8/ INR 500.",
            ],
          },
        ],
        amenities: [
          "Air conditioning",
          "Bathrobe",
          "Coffee and tea set",
          "Desk",
          "Hairdryer",
          "Minibar",
          "Pillow service",
          "Safe",
          "Slippers",
          "Storage cabinet",
          "Telephone",
          "Television",
          "Toilet",
          "Towel service",
          "Twin bed/double bed",
          "Wi-Fi",
        ],
        roomDetails: {
          "Starting Price": { icon: IoPricetagSharp, value: "USD 100 / night" },
          "Room Size": { icon: IoMdResize, value: "215 sq. feet" },
          "Total Rooms": { icon: IoBed, value: "6 rooms" },
          Occupancy: { icon: MdFamilyRestroom, value: "2 adults + 2 children" },
          "Airport Pickup & Drop": {
            icon: MdLocalAirport,
            value: "On Request",
          },
        },
      },
      {
        id: "executiveSuite",
        title: "Executive Suite",
        subtitle: "",
        description:
          "Elegance meets comfort in our Executive Suite, featuring a large bedroom and a separate living room for your convenience.",
        imageUrl: slider2,
        category: "executive-suite",
        router: "/accommodation/executive-suite",
        images: [
          {
            src: dlx1,
            title: "The Homely Ambience",
          },
          {
            src: dlx2,
            title: "The Homely Ambience",
          },
          {
            src: dlx3,
            title: "The Homely Ambience",
          },
          {
            src: dlx4,
            title: "The Homely Ambience",
          },
        ],
        overview: [
          {
            title: "Overview",
            content: [
              "Light, bright and with a smart layout that enhances the feeling of spaciousness, our rooms feature all the world class furniture, air conditioning, amenities, toiletries and technology. Super deluxe rooms are ingeniously designed with splendid interiors. The junior suite rooms are spacious rooms with a cozy living room separated by a partial wall. The executive rooms feature a large bedroom and a living room. Elegantly decorated with opulent interiors and varnished in soft tones, all the rooms are spacious with classy comfortable beds.",
            ],
          },
        ],
        policies: [
          {
            title: "Child Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - US$ 8/ INR 500.",
            ],
          },
        ],
        amenities: [
          "Air conditioning",
          "Bathrobe",
          "Coffee and tea set",
          "Desk",
          "Hairdryer",
          "Minibar",
          "Pillow service",
          "Safe",
          "Slippers",
          "Storage cabinet",
          "Telephone",
          "Television",
          "Toilet",
          "Towel service",
          "Twin bed/double bed",
          "Wi-Fi",
        ],
        roomDetails: {
          "Starting Price": { icon: IoPricetagSharp, value: "USD 140 / night" },
          "Room Size": { icon: IoMdResize, value: "215 sq. feet" },
          "Total Rooms": { icon: IoBed, value: "2 rooms" },
          Occupancy: { icon: MdFamilyRestroom, value: "2 adults + 2 children" },
          "Airport Pickup & Drop": {
            icon: MdLocalAirport,
            value: "On Request",
          },
        },
      },
      {
        id: "presidentialApartment",
        title: "Presidential Apartment",
        subtitle: "",
        description:
          "Experience the epitome of luxury in our Presidential Apartment, featuring a spacious living room, dining area, and a large bedroom.",
        imageUrl: slider2,
        category: "presidential-apartment",
        router: "/accommodation/presidential-apartment",
        images: [
          {
            src: dlx1,
            title: "The Homely Ambience",
          },
          {
            src: dlx2,
            title: "The Homely Ambience",
          },
          {
            src: dlx3,
            title: "The Homely Ambience",
          },
          {
            src: dlx4,
            title: "The Homely Ambience",
          },
        ],
        overview: [
          {
            title: "Overview",
            content: [
              "Light, bright and with a smart layout that enhances the feeling of spaciousness, our rooms feature all the world class furniture, air conditioning, amenities, toiletries and technology. Super deluxe rooms are ingeniously designed with splendid interiors. The junior suite rooms are spacious rooms with a cozy living room separated by a partial wall. The executive rooms feature a large bedroom and a living room. Elegantly decorated with opulent interiors and varnished in soft tones, all the rooms are spacious with classy comfortable beds.",
            ],
          },
        ],
        policies: [
          {
            title: "Child Policies",
            content: [
              "Child 0 - 4 yrs. sharing parent's room free of charge on same plan as adults.",
              "Child age 5 - 10 yrs. sharing parent's room will be charged 50% adult meal rate.",
              "Breakfast - US$ 8/ INR 500.",
            ],
          },
        ],
        amenities: [
          "Air conditioning",
          "Bathrobe",
          "Coffee and tea set",
          "Desk",
          "Hairdryer",
          "Minibar",
          "Pillow service",
          "Safe",
          "Slippers",
          "Storage cabinet",
          "Telephone",
          "Television",
          "Toilet",
          "Towel service",
          "Twin bed/double bed",
          "Wi-Fi",
        ],
        roomDetails: {
          "Starting Price": { icon: IoPricetagSharp, value: "USD 180 / night" },
          "Room Size": { icon: IoMdResize, value: "325 sq. feet" },
          "Total Rooms": { icon: IoBed, value: "1 room" },
          Occupancy: { icon: MdFamilyRestroom, value: "2 adults + 2 children" },
          "Airport Pickup & Drop": {
            icon: MdLocalAirport,
            value: "On Request",
          },
        },
      },
    ],
  },
];

export const testimonialContents = [
  {
    id: "testimonialSection",
    title: "Valued guest feedback",
    subtitle: "",
    subheading:
      "Positive feedback and a simple thank you go a long way. It motivates us to provide world-class hospitality to our guests.",
    description:
      "We are proud to have received positive feedback from our guests. Here are some of the testimonials from our valued guests.",
    testimonials: [
      {
        id: 1,
        content:
          "Mid range prices, well managed and friendly staff. Decent breakfast buffet. 5 minute walk to bars and restaurants. A pool thats heated, great after treks. Nice soft and comfortable beds good to relax after trekking.",
        author: "Shane F",
        image:
          "https://cdt.org/wp-content/uploads/2015/10/2015-10-06-FB-person.png",
        source: "Google Reviews",
      },
      {
        id: 2,
        content:
          "It indeed was a pleasant experience when we arrived. The front office staff made us most welcome with their charming and pleasing smiles. The moment we stepped into the resort we realised that we did not make a wrong choice.",
        author: "Naga Seetharam",
        image:
          "https://cdt.org/wp-content/uploads/2015/10/2015-10-06-FB-person.png",
        source: "TripAdvisor",
      },
      {
        id: 3,
        content:
          "A good place to spend your holiday, business trip and conference. The place is executive, with excellent reception, welcoming personnel like Geeta and her crew. Good food, clean rooms and conference hall.",
        author: "Valerie Machuku",
        image:
          "https://cdt.org/wp-content/uploads/2015/10/2015-10-06-FB-person.png",
        source: "Agoda",
      },
    ],
  },
];

export const hotelFacilities = [
  {
    id: "facilitiesTitle",
    // title: "Explore What's on at Hotel Ichchha",
    title: "Unwind in the delighted",
    subtitle:
      "Unwind in the delight that is your home away from home. Our property's location offers a mix of quiet tranquillity and bustling hustle.",
    description:
      "Embark on a journey of your business, leisure, pilgrimage, or adventure to discover the hospitality of Hotel Ichchha, From the Hotel’s vibrant restaurant and lounge to its tranquil gardens, this is where the city comes to connect and be inspired. Centrally located, it’s an ideal choice for business travelers, pilgrimage tours, and recreational tours. The best choice for a destination wedding is to make your special moments more memorable.",
    icon: "",
  },
  // {
  //   id: "roomsAndSuites",
  //   title: "Rooms & Suites",
  //   description:
  //     "Unwind in our elegantly decorated rooms that are equipped with all the modern day amenities.",
  //   icon: dlx3,
  // },
  {
    id: "restaurantAndBar",
    title: "Restaurant & Bar",
    description:
      "Perfect place to indulge in the finest wines and signature cocktails with friends and family.",
    icon: bar2,
    router: "/restaurants",
  },
  {
    id: "conferenceAndEvents",
    title: "Conference & Events",
    description:
      "Remember us for your various events and make your events well managed and fulfilled.",
    icon: g3,
    router: "/events",
  },
  {
    id: "healthAndSpa",
    title: "Health & Spa",
    description:
      "Relax yourself from your stressful works and get a cool spa massage from professional masseurs.",
    icon: g16,
    router: "/recreation",
  },
  {
    id: "swimmingPool",
    title: "Swimming Pool",
    description:
      "Enjoy memorable time in our swimming pool. Have fun with your family and friends.",
    icon: g18,
    router: "/recreation",
  },
  {
    id: "miniCasino",
    title: "Mini Casino",
    description:
      "A perfect place to relive your days with exciting games along with the family.",
    icon: g10,
    router: "/recreation",
  },
  // {
  //   id: "weddingAndCeremonyVenues",
  //   title: "Wedding & Ceremony Venues",
  //   description:
  //     "Create lasting and unforgettable memories of your dream wedding.",
  //   icon: "https://www.hotelichchha.com/images/services/O0UvR-gallery-event.jpg",
  // },
  {
    id: "jeepSafari",
    title: "Adventure Activities",
    description:
      "An exciting experience is to spotting and viewing wildlife on a jeep safari. Prepare yourself for a magnificent glance to capture on camera.",
    icon: "https://www.hotelichchha.com/images/services/fY4Ra-safari.jpg",
    router: "/recreation",
  },
];

export const facilitiesSectionIcon = {
  roomService: {
    icon: MdOutlineRoomService,
    title: "Room Service",
  },
  wifi: {
    icon: FaWifi,
    title: "Wifi",
  },
  parking: {
    icon: BiSolidParking,
    title: "Parking",
  },
  airportTransfer: {
    icon: MdLocalAirport,
    title: "Airport Pickup",
  },
  carHire: {
    icon: FaCar,
    title: "Car Hire",
  },
  atm: {
    icon: MdLocalAtm,
    title: "ATM",
  },
  spa: {
    icon: GrSpa,
    title: "Spa",
  },
  gym: {
    icon: CgGym,
    title: "Gym",
  },
  childcare: {
    icon: GiKidSlide,
    title: "Kids Play Area",
  },
  pool: {
    icon: FaSwimmingPool,
    title: "Pool",
  },
  restaurant: {
    icon: RiRestaurant2Fill,
    title: "Restaurant",
  },
  bar: {
    icon: MdOutlineSportsBar,
    title: "Bar",
  },
  elevator: {
    icon: TbElevator,
    title: "Eleveator",
  },

  doctor: {
    icon: FaUserDoctor,
    title: "Doctor on Call",
  },
  conferenceRoom: {
    icon: MdOutlineMeetingRoom,
    title: "Conference Room",
  },

  laundry: {
    icon: MdOutlineLocalLaundryService,
    title: "Laundry",
  },
  concierge: {
    icon: LuConciergeBell,
    title: "Concierge",
  },
  businessCenter: {
    icon: MdOutlineBusinessCenter,
    title: "Business Center",
  },
  petFriendly: {
    icon: MdOutlinePets,
    title: "Pet Friendly",
  },
};

export const galleryImages = [
  {
    id: "image1",
    url: g1,
    alt: "Gallery Image 1",
  },
  {
    id: "image2",
    url: g2,
    alt: "Gallery Image 2",
  },
  {
    id: "image3",
    url: g3,
    alt: "Gallery Image 3",
  },
  {
    id: "image4",
    url: g4,
    alt: "Gallery Image 4",
  },
  {
    id: "image5",
    url: g5,
    alt: "Gallery Image 5",
  },
  {
    id: "image6",
    url: g6,
    alt: "Gallery Image 6",
  },
  {
    id: "image7",
    url: g7,
    alt: "Gallery Image 7",
  },
  {
    id: "image8",
    url: g8,
    alt: "Gallery Image 8",
  },
  {
    id: "image9",
    url: g9,
    alt: "Gallery Image 9",
  },
  {
    id: "image10",
    url: g10,
    alt: "Gallery Image 10",
  },
  {
    id: "image11",
    url: g11,
    alt: "Gallery Image 11",
  },
  {
    id: "image12",
    url: g12,
    alt: "Gallery Image 12",
  },
  {
    id: "image13",
    url: g13,
    alt: "Gallery Image 13",
  },
  {
    id: "image14",
    url: g14,
    alt: "Gallery Image 14",
  },
  {
    id: "image15",
    url: g15,
    alt: "Gallery Image 15",
  },
  {
    id: "image16",
    url: g16,
    alt: "Gallery Image 16",
  },
  {
    id: "image17",
    url: g17,
    alt: "Gallery Image 17",
  },
  {
    id: "image18",
    url: g18,
    alt: "Gallery Image 18",
  },
  {
    id: "image19",
    url: g19,
    alt: "Gallery Image 19",
  },
  {
    id: "image20",
    url: g20,
    alt: "Gallery Image 20",
  },
  {
    id: "image21",
    url: g21,
    alt: "Gallery Image 21",
  },
  {
    id: "image22",
    url: g22,
    alt: "Gallery Image 22",
  },
  {
    id: "image23",
    url: g23,
    alt: "Gallery Image 23",
  },
  {
    id: "image24",
    url: g24,
    alt: "Gallery Image 24",
  },
];

export const nearbyLocations = [
  {
    name: "Airport",
    distance: "1.8km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7099.910196047883!2d84.96976494252185!3d27.157702956007654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb548a698be7cf%3A0x94b1a58231a84514!2sSimara%20Airport%2C%20Airport%20Rd%2044412%2C%20Gadhimai%2044400!3m2!1d27.1636195!2d84.9795716!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1710325185542!5m2!1sen!2snp",
  },
  {
    name: "Parsa National Park",
    distance: "10km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d56782.44209133866!2d84.93814900736696!3d27.190796926650844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39eb535236165399%3A0xdc0d41898b014444!2sParsa%20National%20Park%20office%2C%20Aadhabhar!3m2!1d27.229912799999997!2d84.9875371!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1718965315339!5m2!1sen!2snp",
  },
  {
    name: "Gadhi Mai",
    distance: "5.6km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14199.65051154928!2d84.97681520417143!3d27.159039115945166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39eb5413c39e2b51%3A0x462210bc77760af2!2sGadhimai!3m2!1d27.155378799999998!2d85.0025539!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1718965386391!5m2!1sen!2snp",
  },
  {
    name: "Raxaul India Border",
    distance: "23km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d113703.33099392835!2d84.81894451684289!3d27.05451572077609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3993514b6ce04c81%3A0xcfbc360960f0a174!2sBada%20Pareuwa%2C%20Raxaul%2C%20India!3m2!1d26.983549399999998!2d84.8400874!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1718965569426!5m2!1sen!2snp",
  },
  {
    name: "Janaki Mandir",
    distance: "139km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d455177.3704433453!2d85.13754818030847!3d26.964580950679775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39ec40069de3d507%3A0x5e9842f10a951d7f!2sJanaki%20Mandir%2C%20Janaki%20chok%2C%20Janakpur!3m2!1d26.7303858!2d85.9255589!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1718965689760!5m2!1sen!2snp",
  },
  {
    name: "Churiya Mai",
    distance: "25km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d113499.64147685505!2d84.90536808699359!3d27.254800788194302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb4c73d23bb11f%3A0xeac15dc3704ec904!2sChuriya%20Mai%20Temple%2C%20E%20W%2C%20Mahendra%20Highway%2C%20Amlekhganj!3m2!1d27.3578042!2d84.99789469999999!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1718965724170!5m2!1sen!2snp",
  },
  {
    name: "Bharat Tal",
    distance: "60km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d227222.45534750115!2d85.06464976129212!3d27.145248750716785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb7d00331c2f21%3A0xdb5d55fef860623e!2sBharat%20Tal%2C%20Karmaiya!3m2!1d27.1094667!2d85.4729515!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1718965927026!5m2!1sen!2snp",
  },
  {
    name: "Shahid Smarak",
    distance: "40km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d226911.90130191727!2d84.83633188193605!3d27.297584516621157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb4a6b9c8bd9c7%3A0x4d3cdb2cdbe529c6!2sShahid%20Smarak%20Park%2C%20Hetauda!3m2!1d27.4430853!2d84.9999735!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1718965978079!5m2!1sen!2snp",
  },
  {
    name: "Kathmandu",
    distance: "118km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d453283.50883757987!2d84.81378025017577!3d27.429463924039567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39eb1854ae720fbd%3A0xa2ea2b72d0755e57!2sKathmandu!3m2!1d27.6999456!2d85.31327639999999!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1718966007288!5m2!1sen!2snp",
  },
  {
    name: "Birgunj",
    distance: "22km",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d113667.9190377558!2d84.83424648160265!3d27.08943406415545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x39935446b21c98cb%3A0x42938e30ff4f6cb5!2sBirgunj!3m2!1d27.044900499999997!2d84.86721709999999!4m5!1s0x39eb54f2f90e0a47%3A0x76bed6bd117eda97!2sHotel%20Ichchha%2C%20Pipara%20Simara%2044400!3m2!1d27.1516505!2d84.973591!5e0!3m2!1sen!2snp!4v1718966136229!5m2!1sen!2snp",
  },
];

export const diningOptions = {
  "fountain-restaurant": {
    id: "fountain-restaurant",
    title: "Fountain Restaurant",
    subtitle: "Splendid Ambience for Fine Dines",
    description:
      "Cozy Fountain Restaurant is our splendid ambience for fine dines. Adorned with unique features, our restaurant serves quality food and beverages.",

    imageUrls: [fountainR1, fountainR2, fountainR3, fountainR4],
    occupancy: "100 guests",
    openingTime: "06:00 AM",
    closingTime: "11:00 PM",
    foodMenu: ["Appetizers", "Main Course", "Desserts", "Beverages"],
    type: "Multicuisine",
  },
  "courtyard-dining": {
    id: "courtyard-dining",
    title: "Courtyard Dining",
    subtitle: "Enjoyable Dining with Pool View",
    description:
      "Our courtyard dining serves quality food and beverages. You can also enjoy the swimming pool view that makes your dining even more enjoyable.",
    imageUrls: [fountainR1, fountainR2, fountainR3, fountainR4],

    occupancy: "50 guests",
    openingTime: "06:00 AM",
    closingTime: "11:00 PM",
    foodMenu: ["Starters", "Salads", "Grilled Specialties", "Mocktails"],
    type: "Multicuisine",
  },
  "sports-lounge": {
    id: "sports-lounge",
    title: "Sports Lounge",
    subtitle: "Relaxing Dining and Entertainment",
    description:
      "You can also enjoy the swimming pool view that makes your dining even more enjoyable. Corporate Madhusala Bar of private ambience provides you the best sitting with your associates. Designed in an exclusive way, the bar assures a relaxing environment for the guests. Hanging Garden Bar with cultural dance, fun, and entertainment gives you a memorable time during your stay. Located between a beautiful garden and swimming pool view, the bar provides a relaxing environment.",
    imageUrls: [fountainR1, fountainR2, fountainR3, fountainR4],

    occupancy: "80 guests",
    openingTime: "06:00 AM",
    closingTime: "11:00 PM",
    foodMenu: ["Snacks", "Craft Beers", "Cocktails", "Live Music"],
    type: "Multicuisine",
  },
  "madhushala-bar": {
    id: "madhushala-bar",
    title: "Madhushala Bar",
    subtitle: "Private Ambience for Corporate Gatherings",
    description:
      "Corporate Madhusala Bar of private ambience provides you the best sitting with your associates. Designed in an exclusive way, the bar assures a relaxing environment for the guests.",
    imageUrls: [bar2, bar3],
    occupancy: "40 guests",
    openingTime: "04:00 PM",
    closingTime: "11:00 PM",
    foodMenu: ["Signature Cocktails", "Wines", "Whiskeys", "Bar Snacks"],
    type: "Beverages",
  },
  "pool-bar": {
    id: "pool-bar",
    title: "Pool Bar",
    subtitle: "Relaxing Environment by the Pool",
    description:
      "Designed in an exclusive way, the bar assures a relaxing environment for the guests. Hanging Garden Bar with cultural dance, fun, and entertainment gives you a memorable time during your stay. Located between a beautiful garden and swimming pool view, the bar provides a relaxing environment.",
    imageUrls: [bar2, bar3],
    occupancy: "30 guests",
    openingTime: "04:00 PM",
    closingTime: "11:00 PM",
    foodMenu: ["Frozen Cocktails", "Light Bites", "Juices", "Smoothies"],
    type: "Beverages",
  },
};

export const eventVenues = {
  janakiHall: {
    id: "janakiHall",
    title: "Janaki Hall",
    description:
      "Step into the grandeur of Janaki Hall at Hotel Ichchha, a venue that epitomizes elegance and charm. With its opulent decor, facilities, and versatile space, it’s the perfect setting for any prestigious event. Whether hosting a gala, conference, or wedding, Janaki Hall transforms every occasion into a memorable, world-class experience.",
    enquiryLink: "Enquiry",
    imageUrls: [g1, g2, g3, g4],
    amenities: [
      "Theatre: 100 pax",
      "U shape: 100 pax",
      "Classroom: 100 pax",
      // "Round Table: 100 pax",
    ],
  },
  jyamireHall: {
    id: "jyamireHall",
    title: "Jyamire Hall",
    description:
      "Ascend to the zenith of luxury with Jyamire Hall at Hotel Ichchha, a beacon of unparalleled sophistication. This majestic hall is a masterpiece, crafted to host the most prestigious international events. With its stunning interiors, state-of-the-art acoustics, and ambient lighting, it creates an atmosphere of exclusivity and grandeur, ensuring every event is nothing short of legendary.",
    enquiryLink: "Enquiry",
    imageUrls: [g1, g2, g3, g4],
    // amenities: ["Mandap", "Pavilion", "Meeting rooms", "Garden venue"],
    amenities: [
      "Theatre: 100 pax",
      "U shape: 100 pax",
      "Classroom: 100 pax",
      // "Round Table: 100 pax",
    ],
  },
  narayaniHall: {
    id: "narayaniHall",
    title: "Narayani Hall",
    description:
      "Narayani Hall at Hotel Ichchha is where grandeur meets innovation, a prestigious venue that redefines the essence of high-profile events. With its breathtaking design, advanced technological integrations, and impeccable service, it stands as a testament to next-level luxury. Here, every event is transformed into an extraordinary spectacle, setting a new benchmark for elegance and sophistication in the world of hospitality.",
    enquiryLink: "Enquiry",
    imageUrls: [g1, g2, g3, g4],
    // amenities: ["Meeting rooms", "Pool Bar", "Courtyard"],
    amenities: [
      "Theatre: 100 pax",
      "U shape: 100 pax",
      "Classroom: 100 pax",
      // "Round Table: 100 pax",
    ],
  },
  balmikiHall: {
    id: "balmikiHall",
    title: "Balmiki Hall",
    description:
      "Balmiki Hall at Hotel Ichchha is a marvel of architectural beauty and functional elegance, designed to host events that leave a lasting impression. With its luxurious decor, state-of-the-art amenities, and adaptable space, it’s the ideal backdrop for any distinguished gathering. Here, every event is elevated to an art form, ensuring guests experience the pinnacle of refinement and grace.",
    enquiryLink: "Enquiry",
    imageUrls: [g1, g2, g3, g4],
    // amenities: ["Meeting rooms", "Pool Bar", "Courtyard"],
    amenities: [
      "Theatre: 100 pax",
      "U shape: 100 pax",
      "Classroom: 100 pax",
      // "Round Table: 100 pax",
    ],
  },
};

export const recreationVenues = {
  swimmingPool: {
    id: "swimmingPool",
    title: "Swimming Pool",
    imageUrls: [pool1, pool2, pool3],
    description:
      "Dive into an inviting sea of sparkling blue water to refresh your weary bones on a hot day. Have a wonderful time in our refreshing pool with your family and friends. With plentiful sunbeams streaming through its full-length skylight, our outdoor pool is an excellent place to swim laps, relax with family or simply unwind in the peaceful surroundings. For your convenience, items such as goggles, swim caps are in place.",
    amenities: ["Outdoor Pool", "Sunbathing Area", "Goggles and Swim Sets"],
  },
  steamSaunaJacuzzi: {
    id: "steamSaunaJacuzzi",
    title: "Steam, Sauna, Jacuzzi",
    imageUrls: [jacuzzi2, jacuzzi1],
    description:
      "Relax and enjoy a treat at Hotel Ichchha with a uniquely cultured, nurturing and optimal pampering environment for total refreshment. Each one of our unique spa services nourishes and heals your body, replaces trace minerals. Time-honored Massage techniques of ancient era are expertly crafted on the hands of our Therapists. Enjoy services such as manicure, pedicure and makeup artist offered by our hotel.",
    amenities: ["Steam Room", "Sauna", "Jacuzzi", "Spa Services"],
  },
  gamingZoneKidsClub: {
    id: "gamingZoneKidsClub",
    title: "Gaming Zone & Kids Club",
    imageUrls: [ground1, ground2],
    description:
      "The hotel comprises a gaming zone with the most exciting gaming floor with more tables and coin machine, choose among loads of Blackjack games. We have set up a separate fun zone for kids ensuring a relaxing time with play areas offering an array of kid’s fun activities. All in all, we have got a variety of fun activities delivering lavish relaxation for guests of all ages that one deserves.",
    amenities: ["Gaming Floor", "Blackjack", "Kids Play Area"],
  },
  casino: {
    id: "casino",
    title: "Casino",
    imageUrls: [casino1, casino2, casino3, casino4],
    description:
      "Relax and enjoy a treat at Hotel Ichchha with a uniquely cultured, nurturing and optimal pampering environment for total refreshment. Each one of our unique spa services nourishes and heals your body, replaces trace minerals. Time-honored Massage techniques of ancient era are expertly crafted on the hands of our Therapists. Enjoy services such as manicure, pedicure and makeup artist offered by our hotel.",
    amenities: ["Various Casino Games", "Entertainment"],
  },
  spa: {
    id: "spa",
    title: "Spa",
    imageUrls: [spa2, spa3, spa4],
    description:
      "Relax and enjoy a treat at Hotel Ichchha with a uniquely cultured, nurturing and optimal pampering environment for total refreshment. Each one of our unique spa services nourishes and heals your body, replaces trace minerals. Time-honored Massage techniques of ancient era are expertly crafted on the hands of our Therapists. Enjoy services such as manicure, pedicure and makeup artist offered by our hotel.",
    amenities: ["Spa Treatments", "Massage Services", "Manicure/Pedicure"],
  },
  healthClub: {
    id: "healthClub",
    title: "Health Club",
    imageUrls: [gym1, gym2, gym3],
    description:
      "The hotel comprises a gaming zone with the most exciting gaming floor with more tables and coin machine, choose among loads of Blackjack games. We have set up a separate fun zone for kids ensuring a relaxing time with play areas offering an array of kid’s fun activities. All in all, we have got a variety of fun activities delivering lavish relaxation for guests of all ages that one deserves.",
    amenities: ["Fitness Equipment", "Exercise Classes", "Personal Training"],
  },
};

export const sliderImages = [
  {
    src: ichchha1,
    title: "Hotel Ichchha, Hospitality at its best!",
  },
  // {
  //   src: "https://www.hotelichchha.com/images/slideshow/UVh7T-ichchha-room.jpg",
  //   title: "The Homely Ambience",
  // },
  // {
  //   src: "https://www.hotelichchha.com/images/slideshow/mmMDi-pool.jpg",
  //   title: "Plentiful sunbeams streaming pool",
  // },
  {
    src: slider1,
    title: "Crafting Dreams into Concrete Realities: Your Ultimate Destination",
  },
  {
    src: slider2,
    title: "Rooms Designed for Comfort, Styled for Luxury: Unwind Here!",
  },
  {
    src: slider3,
    title: "Dive into Refreshing Bliss: Our Pool is Your Oasis Escape",
  },
  {
    src: slider4,
    title:
      "Elegant Halls, Timeless Memories: Celebrate Life's Special Moments Here",
  },
  {
    src: slider5,
    title:
      "Savor Every Bite, Indulge in Culinary Delights: Our Restaurant Beckons",
  },
  {
    src: slider6,
    title:
      "Seamless Transitions: Our Indoor-Outdoor Spaces Embrace Nature's Beauty",
  },
];

export const enquiryFormData = [
  {
    name: "eventTitle",
    label: "Event Title",
    type: "text",
    required: true,
  },
  {
    name: "date",
    label: "Event Date",
    type: "date",
    required: true,
  },
  {
    name: "pax",
    label: "Number of Pax",
    type: "number",
    required: true,
  },
  {
    name: "name",
    label: "Full Name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
  },
  {
    name: "contact",
    label: "Contact Number",
    type: "number",
    required: true,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
  },
];

export const contactFormData = {
  fields: [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
      required: true,
    },
    {
      id: "contactNumber",
      label: "Contact Number",
      type: "tel",
      placeholder: "Enter your contact number",
      required: true,
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Enter the subject",
      required: true,
    },
  ],
  textarea: {
    id: "message",
    label: "Message",
    placeholder: "Enter your message",
    required: true,
  },
};

export default contactFormData;
