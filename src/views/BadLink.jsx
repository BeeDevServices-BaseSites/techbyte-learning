import error_404 from "../assets/images/404_error.png"
import { useEffect } from "react";
import { changeTitle } from "../utilities/utilityFunctions";
import Button from "../components/Button";

const BadLink = () => {

    useEffect(() => {
        window.scrollTo(0,0),
        changeTitle("Error 404 - ")
    },[]) 

    return(
        <main>
        <div className="wrapper">
            <div className="error_404">
                <h2>
                    It appears you're lost...
                </h2>
                <Button to="/" text="TAKE ME HOME" />
                <img className="error_image" src={error_404} alt="Oops 404" />
            </div>
            </div>
        </main>
    )
}

export default BadLink