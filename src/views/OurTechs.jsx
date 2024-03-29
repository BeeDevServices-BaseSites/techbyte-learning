import CSS from "../components/CSS"
import HTML5 from "../components/HTML5"

const OurTechs = () => {


    return(
        <div className="wrapper">
            <div id="language_HTML" className="large_box">
                <HTML5 />
            </div>
            <div id="language_CSS" className="large_box">
                <CSS />
            </div>
        </div>
    )
}

export default OurTechs