import { Link } from "react-router-dom";

const JavaScript = () => {

    function changeText() {
        document.getElementById('example_button').innerText = 'Clicked!';
    }
    function changeTextBack() {
        document.getElementById('example_button').innerText = 'Click Me!';
    }

    return (
        <>
            <h2>
                What is JavaScript?
            </h2>
            <p>
                JavaScript is a programming language commonly used in web development to add interactivity and dynamic elements to websites. It allows developers to create functions that can manipulate content on a webpage, respond to user actions, and make requests to external servers without needing to reload the page. JavaScript can also be used to validate forms, create animations, and build games. Overall, JavaScript is an essential tool for creating a more engaging and user-friendly online experience.
            </p>
            <br />
            {/* HTML EXAMPLE */}
            <h5 className="center_text">
                Lets use a button for our JavaScript example:
            </h5>
            <div className="code_box">
                <code>
                    <p>
                        &lt;button onclick="changeText()"&gt;Click Me!&lt;/button&gt;
                    </p>
                </code>
            </div>
            <h5 className="center_text">
                Now we will use a little JavaScript to change the button text when clicked:
            </h5>
            <div className="code_box">
                <code>
                    <p>
                        &lt;script&gt;<br />
                        &nbsp;&nbsp; function changeText() &#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById('example_button').innerText = 'Clicked!';<br />
                        &nbsp;&nbsp;&#125;<br />&lt;/script&gt;
                    </p>
                </code>
            </div>
            {/* END EXAMPLE SECTION */}

            {/* HTML RESULT SECTION */}
            <h5 className="center_text">
                Here is the result:
            </h5>
            <div className="code_box_result css">
                <button id="example_button" onClick={ changeText }> Click Me! </button>
                <Link id="example_reset" onClick={ changeTextBack }>Click To Reset</Link>
            </div>
            {/* END RESULT SECTION */}
            <p>
                By adding JavaScript code to our HTML example, we've created an interactive element on our website that responds to user input and makes the site more dynamic. With JavaScript, we can enhance the functionality and user experience of our web page.
            </p>
        </>
    )
};

export default JavaScript;