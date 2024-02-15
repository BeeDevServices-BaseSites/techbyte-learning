import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";

const OurHive = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Our Hive - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h1>Meet our Hive Members</h1>
          <div className="row wrap">
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
            <div className="column">
              <img src="" alt="" />
              <h3>{"Name"}</h3>
              <h3>{"Position"}</h3>
              <h4>{"Location"}</h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurHive;
