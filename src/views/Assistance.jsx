import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import flexxbuy from "../assets/images/flexxbuy.png"
import Button from "../components/Button";

const Assistance = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Tuition Assistance - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="split_box">
          <div className="box_left_text">
            <h2>
              Tuition Assistance
            </h2>
            <p>
              <span>W</span>e understand that finances can be a barrier for some aspiring learners. That's why we have partnered with Flexxbuy to bring you over 35 lenders to provide flexible financing options. We want to ensure that nothing stands in the way of your dreams of becoming a web developer. At TechByte Learning, we are committed to your success, both academically and financially.
            </p>
          </div>
          <div className="box_right_img">
            <img src="https://miro.medium.com/v2/resize:fit:798/1*5qJ2qOkh9TrxBr3lHgJWeQ.jpeg" alt="tuition assistance" />
          </div>
        </div>
        {/* END SECTION 1 */}
        <Button to="#" text="APPLY WITH FLEXXBUY" />
        {/* SECTION 2 */}
        <div className="split_box">
          <div className="box_left_img">
            <img src={ flexxbuy } alt="how it works" />
          </div>
          <div className="box_right_text">
            <h2>
              Why Go With Flexxbuy
            </h2>
            <br />
            <ul>
              <li>
                Financing for <b>All credit situations</b>
              </li>
              <li>
                <b>Buy now</b>, pay later
              </li>
              <li>
                Interest rates starting at <b>5.9%</b> with terms up to <b>144 months</b>
              </li>
              <li>
                No long term contracts and <b>no cancellation fees</b>
              </li>
              <li>
                <b>Instant</b> decisions
              </li>
            </ul>
          </div>
        </div>
        {/* END SECTION 2 */}
      </div>
    </main>
  );
};

export default Assistance;