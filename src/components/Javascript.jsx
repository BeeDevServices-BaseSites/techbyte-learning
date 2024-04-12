
const JavaScript = () => {

    function changeText() {
        var button = document.getElementById('example_button');
        if(button.innerText === "Click Me!") {
            button.innerText = "Reset Me!"
        } else {
            button.innerText = "Click Me!"
        }
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
                Lets use a button for our JavaScript example: <br />
                We will make it say "Click Me!":
            </h5>
            <div className="code_box">
                <pre>
                    <code>
                        &lt;button id="example_button" onclick="changeText()"&gt;<br className="line_break" />
                        &nbsp;&nbsp;&nbsp;Click Me! <br className="line_break" />
                        &lt;/button&gt;
                    </code>
                </pre>
            </div>
            <h5 className="center_text">
                Now we will use a little JavaScript to change the button text when clicked. <br />
                When clicked it will say "Reset Me!"
            </h5>
            <div className="code_box">
                <pre>
                    <code>
                        &lt;script&gt;<br />
                        &nbsp;&nbsp;function changeText() &#123;<br />
                        &nbsp;&nbsp;&nbsp;var button = document.getElementById("example_button")<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;if(button.innerText === "Click Me!") &#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;button.innerText = "Reset Me!";<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#125; else  &#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;button.innerText = "Click Me!";<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
                        &nbsp;&nbsp;&#125;<br />
                        &lt;/script&gt;
                    </code>
                </pre>
            </div>
            {/* END EXAMPLE SECTION */}
            {/* HTML RESULT SECTION */}
            <h5 className="center_text">
                Here is our result:
            </h5>
            <div className="code_box_result css">
                <button id="example_button" onClick={ changeText }> Click Me! </button>
            </div>
            {/* END RESULT SECTION */}
            <p>
                By adding JavaScript code to our HTML example, we've created an interactive element on our website that responds to user input and makes the site more dynamic. With JavaScript, we can enhance the functionality and user experience of our web page.
            </p>
        </>
    )
};

export default JavaScript;