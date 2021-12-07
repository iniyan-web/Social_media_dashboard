import fb from "./images/icon-facebook.svg";
import insta from "./images/icon-instagram.svg";
import twitter from "./images/icon-twitter.svg";
import youtube from "./images/icon-youtube.svg";
import up from "./images/icon-up.svg";
import down from "./images/icon-down.svg";

const overviewItemsData = [
  {
    id: 1,
    heading: "Page Views",
    icon: { iconSrc: fb },
    count: "87",
    statChange: { changeSrc: up },
    statChangeTxt: "up",
    currStat: "3%",
  },
  {
    id: 2,
    heading: "Likes",
    icon: { iconSrc: fb },
    count: "52",
    statChange: { changeSrc: down },
    statChangeTxt: "down",
    currStat: "2%",
  },
  {
    id: 3,
    heading: "Likes",
    icon: { iconSrc: insta },
    count: "5462",
    statChange: { changeSrc: up },
    statChangeTxt: "up",
    currStat: "2257%",
  },
  {
    id: 4,
    heading: "Profile Views",
    icon: { iconSrc: insta },
    count: "52k",
    statChange: { changeSrc: up },
    statChangeTxt: "up",
    currStat: "1375%",
  },
  {
    id: 5,
    heading: "Retweets",
    icon: { iconSrc: twitter },
    count: "117",
    statChange: { changeSrc: up },
    statChangeTxt: "up",
    currStat: "303%",
  },
  {
    id: 6,
    heading: "Likes",
    icon: { iconSrc: twitter },
    count: "507",
    statChange: { changeSrc: up },
    statChangeTxt: "up",
    currStat: "553%",
  },
  {
    id: 7,
    heading: "Likes",
    icon: { iconSrc: youtube },
    count: "107",
    statChange: { changeSrc: down },
    statChangeTxt: "down",
    currStat: "19%",
  },
  {
    id: 8,
    heading: "Total Views",
    icon: { iconSrc: youtube },
    count: "1407",
    statChange: { changeSrc: down },
    statChangeTxt: "down",
    currStat: "12%",
  },
];

export default overviewItemsData;
