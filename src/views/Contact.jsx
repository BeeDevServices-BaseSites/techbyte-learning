import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Contact Us - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            CONTACT US PAGE
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Contact;
