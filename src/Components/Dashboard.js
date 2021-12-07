import React, { useReducer, useState } from "react";
import FollowersCard from "./FollowersCard";
import OverviewCard from "./OverviewCard";
import followersData from "../followersData";
import overviewItemsData from "../overviewItemsData";

const reducer = (state, action) => {
  if (action.type === "CLICKED") {
    return {
      ...state,
      textStyle: { "--blue-white": "hsl(0, 0%, 100%)" },
      textStyle2: {
        "--gray-blue": "hsl(228, 34%, 66%)",
      },
      textStyle3: {
        "--gray-white": "hsl(0, 0%, 100%)",
      },
      cardStyle: {
        "--card-BG": "hsl(228, 28%, 20%)",
      },
    };
  } else {
    return {
      ...state,
      textStyle: { "--blue-white": "hsl(230, 17%, 14%)" },
      textStyle2: {
        "--gray-blue": "hsl(228, 12%, 44%)",
      },
      textStyle3: {
        "--gray-white": "hsl(228, 12%, 44%)",
      },
      cardStyle: {
        "--card-BG": "hsl(227, 47%, 96%)",
      },
    };
  }
};
const defaultState = {
  textStyle: {
    "--blue-white": "hsl(230, 17%, 14%)",
  },
  textStyle2: {
    "--gray-blue": "hsl(228, 12%, 44%)",
  },
  textStyle3: {
    "--gray-white": "hsl(228, 12%, 44%)",
  },
  cardStyle: {
    "--card-BG": "hsl(227, 47%, 96%)",
  },
};
const Dashboard = ({ setBgStyle }) => {
  const [isToggleClicked, setToggleclick] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  const body = document.querySelector("body");
  const displayFollowersCards = () => {
    const data = followersData;
    return data.map((item) => {
      return (
        <FollowersCard
          key={item.id}
          id={item.id}
          icon={item.icon.iconSrc}
          userName={item.userName}
          count={item.count}
          text={item.text}
          statChange={item.statChange.changeSrc}
          statChangeTxt={item.statChangeTxt}
          currStat={item.currStat}
          textStyle={state.textStyle}
          cardStyle={state.cardStyle}
          textStyle2={state.textStyle2}
          isToggleClicked={isToggleClicked}
        />
      );
    });
  };
  const displayOverviewCards = () => {
    const data = overviewItemsData;
    return data.map((item) => {
      return (
        <OverviewCard
          key={item.id}
          id={item.id}
          heading={item.heading}
          icon={item.icon.iconSrc}
          count={item.count}
          statChange={item.statChange.changeSrc}
          statChangeTxt={item.statChangeTxt}
          currStat={item.currStat}
          textStyle={state.textStyle}
          cardStyle={state.cardStyle}
          textStyle2={state.textStyle2}
          isToggleClicked={isToggleClicked}
        />
      );
    });
  };
  const validateClick = () => {
    setBgStyle(!isToggleClicked);
    setToggleclick(!isToggleClicked);
    dispatch(!isToggleClicked ? { type: "CLICKED" } : { type: "NOT-CLICKED" });
    body.classList.toggle("dark-mode");
  };
  return (
    <>
      <section className="dashboard">
        <div className="dashboard-top">
          <header>
            <div className="main-heading">
              <h1 className="title" style={state.textStyle}>
                Social Media Dashboard
              </h1>
              <p className="title-info" style={state.textStyle2}>
                Total Followers: 23,004
              </p>
            </div>
            <div className="mode-switch">
              <p style={state.textStyle2}>Dark Mode</p>
              <label className="switch">
                <input
                  className="checkbox"
                  type="checkbox"
                  onClick={() => validateClick()}
                ></input>
                <div className="slider"></div>
              </label>
            </div>
          </header>
          <div className="total-followers">{displayFollowersCards()}</div>
        </div>
        <div className="dashboard-bottom">
          <h2 style={state.textStyle3}>Overview - Today</h2>
          <div className="overview-container">{displayOverviewCards()}</div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
