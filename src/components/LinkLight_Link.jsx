import { Link } from "react-router-dom"

const LinkLight_Link = ({ href, text }) => {

    return (
        <Link className="remove_underline" to={ href }><span className="light_link">{ text }</span></Link>
    )
}

export default LinkLight_Link