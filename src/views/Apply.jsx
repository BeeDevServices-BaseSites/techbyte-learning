import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Apply = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Apply - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            APPLICATION PAGE
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Apply;
