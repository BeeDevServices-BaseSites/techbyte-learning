import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions.js";
import Button from "../components/Button.jsx"

const GameDev = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Game Development - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <br />
            <img src="https://live.staticflickr.com/65535/53585011419_9b56ae6b3e_c.jpg" alt="Game Dev" />
          </div>
          <div className="box_right_text">
            <h2>
              Level Up With
              <br />
              Game Development
            </h2>
            <p>
              <span>A</span>re you interested in learning the ins and outs of game design but don't have the time to commit to a full-time program?
            </p>
            <p>
              Techbyte Learning's part-time online course will help you level up your skills with our hands-on 2-D game development course.
            </p>
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="split_box">
          <div className="box_left_text">
            <p>
              <span>O</span>ur experienced instructors will guide you through the basics of game development, including design principles, prototyping, and core knowledge in game architecture.
            </p>
            <p>
              From the philosophy behind successful game design to wireframing, choosing the right platform, and various monetization choices, our course covers all the essential topics to help you create engaging and immersive 2D web games.
            </p>
          </div>
          <div className="box_right_img">
              <img src="https://live.staticflickr.com/65535/53584687736_147177fc60.jpg" alt="Game Controller" />
          </div>
        </div>
        {/* END SECTION 2 */}
        {/* SECTION 3 */}
        <div className="split_box">
          <div className="box_left_text">
            <Button to="/nexthive" text="Next Cohort" />
          </div>
          <div className="box_right_text">
            <p>
              <span>W</span>hether you're looking to start a career in game development or simply want to pursue a fun hobby, our 2-D game development course is the perfect choice for aspiring game creators.
            </p>
            <p>
              
              You'll have the opportunity to expand your creativity and technical skills while working on exciting projects that showcase your talents. You wont want to pass up on this opportunity to turn your gaming dreams into reality.
            </p>
          </div>
        </div>
        {/* END SECTION 3 */}
      </div>
    </main>
  );
};

export default GameDev;
