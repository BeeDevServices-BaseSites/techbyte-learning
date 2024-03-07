import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions.js";
import Button from "../components/Button.jsx"

const MiniCourses = () => {

  useEffect(() => {
    window.scrollTo(0,0),
    changeTitle("Mini Courses - ")
  },[])

  return (
    <main>
      <div className="wrapper">
        {/* SECTION 1 */}
        <div className="split_box flip">
          <div className="box_left_img">
            <br />
            <img src="https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png" alt="Placeholder" />          </div>
          <div className="box_right_text">
            <h2>
              Mini Learning Sessions
            </h2>
            <p>
              <span>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Illum amet qui praesentium expedita facere recusandae fuga magni omnis ea commodi neque voluptatem excepturi ducimus necessitatibus laboriosam, ex nemo voluptatibus fugiat.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, quidem architecto hic laborum aliquid ex aut sapiente esse sed minima accusamus atque quae eaque, quo ab nobis animi est enim.
            </p>
          </div>
        </div>
        {/* END SECTION 1 */}
        {/* SECTION 2 */}
        <div className="split_box">
          <div className="box_left_text">
            <p>
              <span>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem unde iusto laborum dolore cum rerum provident in, totam voluptates ea vero nemo soluta deserunt assumenda hic. Enim, facilis ea.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ea eveniet impedit unde voluptates, quidem eaque iure, temporibus soluta eius saepe. Aspernatur doloribus blanditiis quo vel quaerat quia, minima sunt!
            </p>
          </div>
          <div className="box_right_img">
              <img src="https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png" alt="Placeholder" />
          </div>
        </div>
        {/* END SECTION 2 */}
        <Button to="/apply" text="APPLY NOW" />
      </div>
    </main>
  );
};

export default MiniCourses;
