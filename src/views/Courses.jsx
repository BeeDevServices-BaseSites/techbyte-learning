import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Courses = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Courses - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            COURSES PAGE
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Courses;
