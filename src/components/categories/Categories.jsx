import { ImFire } from "react-icons/im";
import { GiHanger } from "react-icons/gi";
import { CiStreamOn } from "react-icons/ci";
import { BsNewspaper } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { SiYoutubegaming } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TfiMusic, TfiVideoClapper, TfiCup } from "react-icons/tfi";

import "./Categories.scss";

export const categories = [
  { label: "Trending", icon: <ImFire /> },
  { label: "Shopping", icon: <HiOutlineShoppingBag /> },
  { label: "Music", icon: <TfiMusic /> },
  { label: "Movies", icon: <TfiVideoClapper /> },
  { label: "Live", icon: <CiStreamOn /> },
  { label: "Gaming", icon: <SiYoutubegaming /> },
  { label: "News", icon: <BsNewspaper /> },
  { label: "Sports", icon: <TfiCup /> },
  { label: "Learning", icon: <GoLightBulb /> },
  { label: "Fashion & Beauty", icon: <GiHanger /> },
];
