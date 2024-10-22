import "../styles/title.css"

const Title = () => {


    return (
        <svg width="100%" height="125" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="mixed-gradient">
                    <stop stop-color="#f9efa2" offset="0%" />
                    <stop stop-color="#6e3405" offset="35%" />
                    <stop stop-color="#26c4eb" offset="60%" />
                    <stop stop-color="#0d2538" offset="90%" />
                </linearGradient>
            </defs>
            <g>
                <text id="mixed-title" y="60" font-family="Audiowide" font-size="60" font-weight="400" font-style='italic' stroke-width="1" stroke="black" fill="url(#mixed-gradient)">TechByte</text>
            </g>
            <g>
                <text id="mixed-sub-title" y="100" x="60" font-family="Audiowide" font-size="40" font-weight="400" font-style='italic' stroke-width="1" stroke="black" fill="url(#mixed-gradient)">Learning</text>
            </g>
        </svg>
    )
}

export default Title