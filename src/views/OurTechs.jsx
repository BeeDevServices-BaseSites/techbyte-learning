import CSS from "../components/CSS"
import HTML5 from "../components/HTML5"
import JavaScript from "../components/Javascript"

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
        </div>
    )
}

export default OurTechs