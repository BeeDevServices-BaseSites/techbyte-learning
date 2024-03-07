import { useEffect, useState } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import { Link } from "react-router-dom";
import AdmissionsChat from "../components/AdmissionsChat";
import Spinner from "../components/Spinner";

const BookTutor = () => {

  const [showSpinner, setShowSpinner] = useState(true); // State for showing spinner

  useEffect(() => {
    window.scrollTo(0,0);
    changeTitle("Schedule Tutor - ");
    // swap element visability 
    //(ternary wasnt working)
    setTimeout(() => {
      setShowSpinner(false);
    }, 2500); // Timer allowing the chat box to fully load before being revealed 
  },[]);


  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            Tutor Scheduling 
          </h2>
          <h4>
            Need tutor sessions? Purchase <Link to="/pricingplans">Tutoring</Link> here.
          </h4>
          <h4>
            Have credits? Set up a tutoring session with one of our experts below.
          </h4>
          <h4>
            Or, Call us at <span className="phone_number">(570) 890-5252</span>
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

export default BookTutor;