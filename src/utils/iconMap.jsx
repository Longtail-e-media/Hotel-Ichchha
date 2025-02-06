import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as FaIcons from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import * as GiIcons from 'react-icons/gi';
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidParking } from "react-icons/bi";
import { GrSpa } from "react-icons/gr";
import { CgGym } from "react-icons/cg";
import { GiKidSlide } from "react-icons/gi";
import { RiRestaurant2Fill } from "react-icons/ri";
import { LuConciergeBell } from "react-icons/lu";

const iconMap = {
  ...TbIcons,
  ...MdIcons,
  ...IoIcons,
  ...Io5Icons,
  ...FaIcons,
  //   ...GiIcons,
  AiFillInstagram,
  FaXTwitter,
  BiSolidParking,
  GrSpa,
  CgGym,
  GiKidSlide,
  RiRestaurant2Fill,
  LuConciergeBell,
};

export const getIconComponent = (iconName) => {
  return iconMap[iconName] || null;
};
