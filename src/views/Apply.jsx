import { useEffect, useState } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import AdmissionsChat from "../components/AdmissionsChat";
import Spinner from "../components/Spinner";
const AdmissionsEmail = import.meta.env.VITE_ADMISSIONS_EMAIL;
const DisplayPhone = import.meta.env.VITE_DISPLAY_PHONE;
const LinkPhone = import.meta.env.VITE_LINK_PHONE;

const Apply = () => {

  const [showSpinner, setShowSpinner] = useState(true); // State for showing spinner

  useEffect(() => {
    window.scrollTo(0,0);
    changeTitle("Apply - ");
    // swap element visability 
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
            Email us at <br className="mobile_only"/><a className="remove_underline dark_link" href={`mailto:${AdmissionsEmail}?subject=Admissions%20Inquiry%20`} target="_blank">{AdmissionsEmail}</a>
          </h4>
          <h4>
            Call us at <a className="remove_underline dark_link" href={LinkPhone}>{DisplayPhone}</a>
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