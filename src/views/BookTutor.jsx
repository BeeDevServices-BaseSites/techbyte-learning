import { useEffect, useState } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import TutorChat from "../components/TutorChat";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import LinkDark from "../components/LinkDark";
const TutoringEmail = import.meta.env.VITE_TUTORING_EMAIL;
const DisplayPhone = import.meta.env.VITE_DISPLAY_PHONE;
const LinkPhone = import.meta.env.VITE_LINK_PHONE;

const BookTutor = () => {

  const [showSpinner, setShowSpinner] = useState(true); // State for showing spinner

  useEffect(() => {
    window.scrollTo(0,0);
    changeTitle("Schedule Tutor - ");
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
            Schedule A Tutoring Session
          </h2>
          <h4>
            Email us at <br className="mobile_only"/><a className="remove_underline dark_link" href={`mailto:${TutoringEmail}?subject=Tutoring%20Inquiry%20`} target="_blank">{TutoringEmail}</a>
          </h4>
          <h4>
            Call us at <a className="remove_underline dark_link" href={LinkPhone}>{DisplayPhone}</a>
          </h4>
          <h4>
            Or set up a tutoring session with one of our experts below.
          </h4>
          <div style={{ display: showSpinner ? '' : 'none' }}>
          <Spinner/>
          </div>
          <div style={{ display: !showSpinner ? '' : 'none' }} >
            <TutorChat />
          </div>
          <h4>
            Need to purchase tutor sessions? 
          </h4>
          <Button to="/services" text="Purchase Tutoring" />
        </div>
      </div>
    </main>
  );
};

export default BookTutor;