import spinner_bee from "../assets/images/spinner_bee.gif"
import spinner_bg from "../assets/images/spinner_background.png"

const Spinner = () => {

    return(
        <div className="spinner_background">
            <img className="center" src={ spinner_bee } alt="Loading Spinner Bee" />
            <img className="spinner" src={ spinner_bg } alt="Loading Spinner Background" />
        </div>
    )
}

export default Spinner;