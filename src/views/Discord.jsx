import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Discord = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Discord - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            DISCORD PAGE
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Discord;
