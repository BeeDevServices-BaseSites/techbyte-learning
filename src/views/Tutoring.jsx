import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Tutoring = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Tutoring - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            TUTORING PAGE
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Tutoring;
