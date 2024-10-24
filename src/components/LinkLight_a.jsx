const LinkLight_a = ({ href, text }) => {

    return (
        <a className="remove_underline" href={ href }  target="_blank"><span className="light_link">{ text }</span></a>
    )
}

export default LinkLight_a