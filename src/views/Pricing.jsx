import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import { Link } from "react-router-dom";
import Paypal from "../components/PayPalButton";
import full_stack from "../assets/images/full_stack.png"
import game_dev from "../assets/images/game_dev.jpg"
import tutor from "../assets/images/tutor.png"
import best_seller from "../assets/images/best_seller.png"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
const paypal_keys = import.meta.env.VITE_paypal_keys


const Pricing = (props) => {
  const { setDetails } = props;


  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Pricing Plans - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* TITLE */}
        <div className="large_box">
          <h2>
            TECHBYTE PRICING
          </h2>
        </div>
        {/* END TITLE */}
        {/* SECTION 1 */}
        <div className="pricing_wrapper">
          <div className="pricing_container">
            {/* CARD 1 */}
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon-text">Web Development</div>
              </div>
              <img src={full_stack} alt="web dev card"/>
              <div className="pricing_card-info">
                <p className="pricing_card-text">
                  Whether you are a beginner looking to break into the industry or a seasoned developer seeking to expand your skill set, our program is designed to provide you with the knowledge and hands-on experience needed to succeed.
                </p>
                <p className="pricing_card-text">
                  Our expert instructors will guide you through every step of the development process. On completion, you will be equipped with the skills to build dynamic, responsive applications that will set you apart in the competitive field of web development.
                </p>
                <p className="pricing_card-text">
                  Join us and take your coding skills to the next level!
                </p>
                <Link to="/Apply">Apply Here</Link>
              </div>
            </div>
            {/* END CARD 1 */}
            {/* CARD 2 */}
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon-text">2D Gaming Development</div>
              </div>
              <img src={game_dev} alt="gaming card"/>
              <div className="pricing_card-info">
                <p className="pricing_card-text">
                  Unleash your creativity and dive into the world of 2D gaming with our comprehensive course!
                </p>
                <p className="pricing_card-text">
                  Whether you're a seasoned developer or a complete beginner, we'll guide you through the basics of creating and designing your very own 2D games. 
                </p>
                <p className="pricing_card-text">
                  From mastering game mechanics to creating captivating visual assets, you'll develop the skills needed to bring your gaming ideas to life.
                </p>
                <p className="pricing_card-text">
                  Join us and embark on an exciting journey of game development in our 2D gaming course today!
                </p>
                <Link to="/Apply">Apply Here</Link>
              </div>
            </div>
            {/* END CARD 2 */}
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 TITLE */}
        <PayPalScriptProvider
          options={{ "client-id": paypal_keys }}
        >
        <div className="large_box">
          <h2>
            Tutoring Pricing
          </h2>
          <p>
            Take advantage of our bundle pricing options, where buying more tutoring sessions saves you money.
          </p>
        </div>
        {/* END SECTION 2 TITLE */}
        {/* SECTION 2 */}
        <div className="pricing_wrapper">
          <div className="pricing_container">
            {/* CARD 1 */}
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon-text">½-Hour Session</div>
              </div>
              <img src={tutor} alt="tutor"/>
              <div className="pricing_card-info">
                <p className="pricing_card-text">Are you struggling to understand the basics of web development?</p>
                <p className="pricing_card-text">Sign up for a ½ hour tutoring session where our experienced tutors will work with you at your own pace to help you build a solid foundation in web development.</p>
                <p className="pricing_card-text">Don't let confusion hold you back from creating amazing websites - sign up for our tutoring session today!</p>
                <Paypal base_price={ 30.00 } units={ 1 } description="One 30 minute tuturing session" isOnSale={ false } percent={ 0 } setDetails={ setDetails } /> 
              </div>
            </div>
            {/* END CARD 1 */}
            {/* CARD 2 */}
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon-text">3x ½-Hour Sessions</div>
              </div>
              <img src={tutor} alt="tutor"/>
              <div className="pricing_card-info">
                <p className="pricing_card-text">Are you struggling to understand the basics of web development?</p>
                <p className="pricing_card-text">Sign up for a ½ hour tutoring session where our experienced tutors will work with you at your own pace to help you build a solid foundation in web development.</p>
                <p className="pricing_card-text">Don't let confusion hold you back from creating amazing websites - sign up for our tutoring session today!</p>
                <Paypal base_price={ 30.00 } units={ 3 } description="Three 30 minute tuturing sessions" isOnSale={ true } percent={ 5 } setDetails={ setDetails } /> 
              </div>
            </div>
            {/* END CARD 2 */}
            {/* CARD 3 */}
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <img src={best_seller} alt="best seller" />
                <div className="pricing_ribbon-text">5x ½ -Hour Sessions</div>
              </div>
              <img src={tutor} alt="tutor"/>
              <div className="pricing_card-info">
                <p className="pricing_card-text">Are you struggling to understand the basics of web development?</p>
                <p className="pricing_card-text">Sign up for a ½ hour tutoring session where our experienced tutors will work with you at your own pace to help you build a solid foundation in web development.</p>
                <p className="pricing_card-text">Don't let confusion hold you back from creating amazing websites - sign up for our tutoring session today!</p>
                <Paypal base_price={ 30.00 } units={ 5 } description="Five 30 minute tuturing sessions" isOnSale={ true } percent={ 15 } setDetails={ setDetails } /> 
              </div>
            </div>
            {/* END CARD 3 */}
            {/* CARD 4 */}
            <div className="pricing_card">
              <div className="pricing_ribbon">
                <div className="pricing_ribbon-text">10x ½-Hour Sessions</div>
              </div>
              <img src={tutor} alt="tutor"/>
              <div className="pricing_card-info">
                <p className="pricing_card-text">Are you struggling to understand the basics of web development?</p>
                <p className="pricing_card-text">Sign up for a ½ hour tutoring session where our experienced tutors will work with you at your own pace to help you build a solid foundation in web development.</p>
                <p className="pricing_card-text">Don't let confusion hold you back from creating amazing websites - sign up for our tutoring session today!</p>
                <Paypal base_price={ 30.00 } units={ 10 } description="Ten 30 minute tuturing sessions" isOnSale={ true } percent={ 25 } setDetails={ setDetails } /> 
              </div>
            </div>
            {/* END CARD 4 */}
          </div>
        </div>
        </PayPalScriptProvider>
        {/* END SECTION 2 */}
      </div>
    </main>
  );
};

export default Pricing;
