import React, { useState } from "react";

const FollowersCard = ({
  id,
  icon,
  userName,
  count,
  text,
  statChange,
  statChangeTxt,
  currStat,
  textStyle,
  cardStyle,
  textStyle2,
  isToggleClicked,
}) => {
  const [hover, setHover] = useState(false);
  const hoverStyle = {
    "--card-BG": isToggleClicked ? "hsl(228, 28%, 30%)" : " hsl(227, 47%, 91%)",
  };
  return (
    <>
      <div
        className={`followers-card followers-card${id}`}
        style={hover ? hoverStyle : cardStyle}
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        <div className="user-profile">
          <img className="social-icon" src={icon} alt="Social media." />
          <p className="user-name" style={textStyle2}>
            {userName}
          </p>
        </div>
        <h1 className="followers-count" style={textStyle}>
          {count}
        </h1>
        <p className="text" style={textStyle2}>
          {text}
        </p>
        <div className="followers-stat">
          <img
            className="stat-change"
            src={statChange}
            alt="statistics change."
          />
          <p className={`current-stat ${statChangeTxt}`}>{currStat}</p>
        </div>
      </div>
    </>
  );
};

export default FollowersCard;
