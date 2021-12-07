import React, { useState } from "react";

const OverviewCard = ({
  id,
  heading,
  icon,
  count,
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
        className={`overview-card overview-card${id}`}
        style={hover ? hoverStyle : cardStyle}
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        <div className="top">
          <p className="heading" style={textStyle2}>
            {heading}
          </p>
          <img className="social-icon" src={icon} alt="Social media." />
        </div>
        <div className="bottom">
          <h2 className="count" style={textStyle}>
            {count}
          </h2>
          <div className="stat">
            <img
              className="stat-change"
              src={statChange}
              alt="statistics change."
            />
            <p className={`current-stat ${statChangeTxt}`}>{currStat}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewCard;
