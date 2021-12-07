import fb from "./images/icon-facebook.svg";
import insta from "./images/icon-instagram.svg";
import twitter from "./images/icon-twitter.svg";
import youtube from "./images/icon-youtube.svg";
import up from "./images/icon-up.svg";
import down from "./images/icon-down.svg";

const followersData = [
  {
    id: 1,
    icon: { iconSrc: fb },
    userName: "@nathanf",
    count: "1987",
    text: "Followers",
    statChange: { changeSrc: up },
    statChangeTxt: "up",
    currStat: "12 Today",
  },
  {
    id: 2,
    icon: { iconSrc: twitter },
    userName: "@nathanf",
    count: "1044",
    text: "Followers",
    statChange: { changeSrc: up },
    statChangeTxt: "up",
    currStat: "99 Today",
  },
  {
    id: 3,
    icon: { iconSrc: insta },
    userName: "@realnathanf",
    count: "11k",
    text: "Followers",
    statChange: { changeSrc: up },
    statChangeTxt: "up",
    currStat: "1099 Today",
  },
  {
    id: 4,
    icon: { iconSrc: youtube },
    userName: "Nathan F.",
    count: "8239",
    text: "Subscribers",
    statChange: { changeSrc: down },
    statChangeTxt: "down",
    currStat: "144 Today",
  },
];

export default followersData;
