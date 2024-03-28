import { useEffect, useState } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import AdmissionsChat from "../components/AdmissionsChat";
import Spinner from "../components/Spinner";
import LinkDark from "../components/LinkDark";

const Apply = () => {

  const [showSpinner, setShowSpinner] = useState(true); // State for showing spinner

  useEffect(() => {
    window.scrollTo(0,0);
    changeTitle("Apply - ");
    // swap element visability 
    //(ternary wasnt working)
    setTimeout(() => {
      setShowSpinner(false);
    }, 3000); // Timer allowing the chat box to fully load before being revealed 
  },[]);

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            Talk With Our <br className="mobile_only"/>Admissions Staff
          </h2>
          <h4>
            Email us at <br className="mobile_only"/><LinkDark href="mailto:admissions@techbyte-learning.com?subject=Admissions%20Inquiry%20" text="admissions@techbyte-learning.com" />
          </h4>
          <h4>
            Call us at <span className="phone_number">(570) 890-5252</span>
          </h4>
          <h4>
            Or chat with us live below
          </h4>
          <div style={{ display: showSpinner ? '' : 'none' }}>
            <Spinner/>
          </div>
          <div style={{ display: !showSpinner ? '' : 'none' }} >
            <AdmissionsChat />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Apply;