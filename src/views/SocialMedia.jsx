import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import flying_bee from "../assets/images/flyingbee.gif";


const SocialMedia = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Social Media - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        <div className="large_box">
          <h2>
            Follow us on social media
          </h2>
          <br /><br />
          <a id="social_link" href="###">TechByte Leaning Facebook</a>
          <a id="social_link" href="###"><img id="social_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB50A9Ay9fYGe-KJSvz719EVxnw07q2wzBMNcqfxxw2I22Fb-gpdCpcQubLdsfZFFo4g&usqp=CAU" alt="facebook" /></a>


          <a id="social_link" href="###">TechByte Leaning Linked In</a>
          <a id="social_link" href="###"><img id="social_image" src="https://www.kinesisinc.com/wp-content/uploads/2020/04/linkedin-101-hero@2x.png" alt="Linked In" /></a>


          <a id="social_link" href="###">TechByte Leaning Discord</a>
          <a id="social_link" href="###"><img id="social_image" src="https://logo.com/image-cdn/images/kts928pd/production/3a8feb0e279d07a02c91451aebf4dba91263075a-1140x620.png?w=1080&q=72" alt="Discord" /></a>
        </div>
        <img className="bumble_bee_image" src={flying_bee} alt="bumble bee" />
      </div>
    </main>
  );
};

export default SocialMedia;
