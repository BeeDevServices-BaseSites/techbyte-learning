const LinkLight_a = ({ href, text }) => {

    return (
        <a className="remove_underline" href={ href } ><span className="light_link">{ text }</span></a>
    )
}

export default LinkLight_a