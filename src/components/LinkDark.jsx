
const LinkDark = ({ href, text }) => {


    return (
        <a className="remove_underline" href={ href }><span className="dark_link">{ text }</span></a>
    )
}

export default LinkDark