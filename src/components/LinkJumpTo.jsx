
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
        <p className="remove_underline dark_link" onClick={(e) => handleClick(e, `${ jump_to }` )}>|&nbsp;{ text }&nbsp;|</p>
    )
}

export default LinkJumpTo