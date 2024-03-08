import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import { Link } from "react-router-dom";
import Paypal from "../components/PayPalButton";
import full_stack from "../assets/images/full_stack.png"
import game_dev from "../assets/images/game_dev.jpg"
import tutor from "../assets/images/tutor.png"
import best_seller from "../assets/images/best_seller.png"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Button from "../components/Button";


const Pricing = ({ setDetails }) => {

  const initialOptions = {
    "client-id": "AboCjdkH7teR_lvYiywVhF41PTL0gUZ6UM0Uz5mTf3BOaFaJTh_njS1PrDz0wljMB5MYOv7PvYu1NvU0",
    "enable-funding": "venmo,card",
    "disable-funding": "paylater",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("TechByte Pricing - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* TITLE */}
        <div className="large_box">
          <h2>
            TechByte Development Programs
          </h2>
        </div>
        {/* END TITLE */}
        {/* SECTION 1 */}
        <div className="pricing_wrapper">
          <div className="pricing_container">
            {/* DEV CARD 1 */}
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon_text">Web Development</div>
              </div>
              <img src={ full_stack } alt="web dev card"/>
              <div className="pricing_card_info">
                <p className="pricing_card_text">
                  Whether you are a beginner looking to break into the industry or a seasoned developer seeking to expand your skill set, our program is designed to provide you with the knowledge and hands-on experience needed to succeed.
                </p>
                <br />
                <p className="pricing_card_text">
                  Our expert instructors will guide you through every step of the development process. On completion, you will be equipped with the skills to build dynamic, responsive applications that will set you apart in the competitive field of web development.
                </p>
                <br />
                <p className="pricing_card_text">
                  Join us and take your coding skills to the next level!
                </p>
                <div className="price_tag">
                  <h4>$8000</h4>
                  <Link to="/Apply">
                    Apply Here
                  </Link>
                </div>
              </div>
            </div>
            {/* END DEV CARD 1 */}
            {/* DEV CARD 2 */}
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon_text">2D Gaming Development</div>
              </div>
              <img src={game_dev} alt="gaming card"/>
              <div className="pricing_card_info">
                <p className="pricing_card_text">
                  Unleash your creativity and dive into the world of 2D gaming with our comprehensive course!
                </p>
                <br />
                <p className="pricing_card_text">
                  Whether you're a seasoned developer or a complete beginner, we'll guide you through the basics of creating and designing your very own 2D games. 
                </p>
                <br />
                <p className="pricing_card_text">
                  From mastering game mechanics to creating captivating visual assets, you'll develop the skills needed to bring your gaming ideas to life.
                </p>
                <br />
                <p className="pricing_card_text">
                  Join us and embark on an exciting journey of game development in our 2D gaming course today!
                </p>
                <div className="price_tag">
                  <h4>$8000</h4>
                  <Link to="/Apply">
                    Apply Here
                  </Link>
                </div>
              </div>
            </div>
            {/* END DEV CARD 2 */}
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 TITLE */}
        <PayPalScriptProvider options={ initialOptions } >
        <div className="large_box">
          <h2>
            Techbyte Tutoring
          </h2>
          <h4>
            Not sure what you need, or have questions about TechByte Tutoring?
          </h4>
          <h4>
            Visit <Link to="/tutoring">Tutoring</Link> or contact <a href="mailto:tutoring@techbyte-learning.com?subject=Tutoring%20Inquiry%20">tutoring@techbyte-learning.com</a>
          </h4>
          <br />
          <h5>
            Don't forget to take advantage of our bundle pricing options.
          </h5>

        </div>
        {/* END SECTION 2 TITLE */}
        {/* SECTION 2 */}
        <div className="pricing_wrapper">
          <div className="pricing_container">
            {/* TUTOR CARD 1 */}
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon_text">½-Hour Session</div>
              </div>
              <img src={tutor} alt="tutor"/>
              <div className="pricing_card_info">
                <p className="pricing_card_text small">
                  Sign up for a ½ hour tutoring session where our experienced tutors will work with you at your own pace to help you build a solid foundation in web development.
                </p>
                <br />
                <p className="pricing_card_text small">
                  Don't let confusion hold you back from creating amazing websites - sign up for our tutoring session today!
                </p>
                <Paypal base_price={ 30.00 } units={ 1 } description="One 30 minute tuturing session" isOnSale={ false } percent={ 0 } setDetails={ setDetails } /> 
              </div>
            </div>
            {/* END TUTOR CARD 1 */}
            {/* TUTOR CARD 2 */}
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon_text">3x ½-Hour Sessions</div>
              </div>
              <img src={tutor} alt="tutor"/>
              <div className="pricing_card_info">
                <p className="pricing_card_text small">
                  Bundle three of our ½ hour tutoring sessions where our experienced tutors will work with you at your own pace to help you build a solid foundation in web development.
                </p>
                <br />
                <p className="pricing_card_text small">
                  Don't let confusion hold you back from creating amazing websites - sign up for our tutoring bundle today!
                </p>
                <Paypal base_price={ 30.00 } units={ 3 } description="Three 30 minute tuturing sessions" isOnSale={ true } percent={ 5 } setDetails={ setDetails } /> 
              </div>
            </div>
            {/* END TUTOR CARD 2 */}
            {/* TUTOR CARD 3 */}
            <div className="pricing_card">
              <div className="pricing_ribbon small">
                <img src={best_seller} alt="best seller" />
                <div className="pricing_ribbon_text">5x ½ -Hour Sessions</div>
              </div>
              <img src={tutor} alt="tutor"/>
              <div className="pricing_card_info">
                <p className="pricing_card_text small">
                  Our most popular bundle of five ½ hour tutoring sessions
                </p>
                <br />
                <p className="pricing_card_text small">
                  Our experienced tutors will work with you at your own pace to help you build a solid foundation in web development.
                </p>
                <br />
                <p className="pricing_card_text small">
                  Don't let confusion hold you back from creating amazing websites - sign up for our most popular tutoring bundle today!
                </p>
                <Paypal base_price={ 30.00 } units={ 5 } description="Five 30 minute tuturing sessions" isOnSale={ true } percent={ 15 } setDetails={ setDetails } /> 
              </div>
            </div>
            {/* END TUTOR CARD 3 */}
            {/* TUTOR CARD 4 */}
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon_text">10x ½-Hour Sessions</div>
              </div>
              <img src={tutor} alt="tutor"/>
              <div className="pricing_card_info">
                <p className="pricing_card_text small">
                  Take advantage with our greatest savings bundle of ten ½ hour tutoring sessions. 
                </p>
                <br />
                <p className="pricing_card_text small">
                  Our experienced tutors will work with you at your own pace to help you build a solid foundation in web development.
                </p>
                <br />
                <p className="pricing_card_text small">
                  Don't let confusion hold you back from creating amazing websites - sign up and save big with this tutoring bundle today!
                </p>
                <Paypal base_price={ 30.00 } units={ 10 } description="Ten 30 minute tuturing sessions" isOnSale={ true } percent={ 25 } setDetails={ setDetails } /> 
              </div>
            </div>
            {/* END TUTOR CARD 4 */}
          </div>
        </div>
        </PayPalScriptProvider>
        {/* END SECTION 2 */}
        <h4>
          Already purchased a tutoring session? 
        </h4>
        <Button to="/booktutoring" text="Schedule Tutoring" />
      </div>
    </main>
  );
};

export default Pricing;
