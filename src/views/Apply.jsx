import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import AdmissionsChat from "../components/AdmissionsChat";

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
            TALK WITH OUR ADMISSIONS
          </h2>
          <AdmissionsChat />
        </div>
      </div>
    </main>
  );
};

export default Apply;
