import { Link } from 'react-router-dom';

const Button = ({ to, text }) => {
    
    return (
        <Link to={ to }>
            <button className="button_link">
                { text }
            </button>
        </Link>
    );
};

export default Button;