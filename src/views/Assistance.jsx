import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Assistance = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Tuition Assistance - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            TUITION ASSISTANCE
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Assistance;
