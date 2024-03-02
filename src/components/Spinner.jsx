import spinner_bee from "../assets/images/spinner_bee.gif"

const Spinner = () => {

    return(
        <div className="spinner_background">
            <img src={ spinner_bee } alt="Loading Spinner" />
        </div>
    )
}

export default Spinner;