import { useEffect, useState } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import AdmissionsChat from "../components/AdmissionsChat";
import Spinner from "../components/Spinner";

const Apply = () => {

  const [showSpinner, setShowSpinner] = useState(true); // State for showing spinner
  const [chatLoaded, setChatLoaded] = useState(false); // State for tracking if chat is loaded

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Apply - ")
    setTimeout(() => {
      setShowSpinner(false); // Turn off the spinner after 2 seconds
    }, 2500);
  },[])

  useEffect(() => {
    // Check if the chat component is loaded
    if (!showSpinner && !chatLoaded) {
      setChatLoaded(true);
    }
  }, [showSpinner, chatLoaded]);

  return (

    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            Talk With Our Admissions Staff
          </h2>
          <h4>
            Contact us at <a id="career_link" href="mailto:admissions@techbyte-learning.com?subject=Admissions%20Inquiry%20">admissions@techbyte-learning.com</a> 
          </h4>
          <h4>
            Call us at <span className="phone_number">(570) 890-5252</span>
          </h4>
          <h4>
            Or chat with us live below
          </h4>
          {/* SPINNER AND CHAT TERNARY */}
          {showSpinner ? (
              <Spinner />
          ) : (
            chatLoaded && <AdmissionsChat />
          )}
        </div>
      </div>
    </main>
  );
};

export default Apply;
