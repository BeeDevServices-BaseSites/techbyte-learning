import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Pricing = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Pricing Plans - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            PRICING PAGE
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
