import CSS from "../components/CSS"
import HTML5 from "../components/HTML5"
import JavaScript from "../components/Javascript"
import Git from "../components/Git"
import Sass from "../components/Sass"
import Less from "../components/Less"

const OurTechs = () => {

    return(
        <div className="wrapper">
            <div id="language_html" className="large_box">
                <HTML5 />
            </div>
            <div id="language_css" className="large_box">
                <CSS />
            </div>
            <div id="language_javascript" className="large_box">
                <JavaScript />
            </div>
            <div id="language_git" className="large_box">
                <Git />
            </div>
            <div id="language_sass" className="large_box">
                <Sass />
            </div>
            <div id="language_less" className="large_box">
                <Less />
            </div>
        </div>
    )
}

export default OurTechs