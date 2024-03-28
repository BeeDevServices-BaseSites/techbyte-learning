
const LinkJumpTo = ({ jump_to, text }) => {

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        window.scrollTo({
            top: element.offsetTop -150,
            behavior: 'smooth'
        });
    }

    return (
        <p className="remove_underline" onClick={(e) => handleClick(e, `${ jump_to }` )}><span className="dark_link">|&nbsp;{ text }&nbsp;|</span></p>
    )
}

export default LinkJumpTo