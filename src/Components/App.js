import React, { useState } from "react";
import Dashboard from "./Dashboard";

const App = () => {
  const [bgStyle, setBgStyle] = useState(false);
  const topBgStyle = {
    "--top-BG": bgStyle ? "hsl(232, 19%, 15%)" : "hsl(225, 100%, 98%)",
  };
  return (
    <>
      <main>
        <div className="top-bg" style={topBgStyle}></div>
        <Dashboard setBgStyle={setBgStyle} />
      </main>
    </>
  );
};

export default App;
