
const Postman = () => {

    return (
        <>
            <h2>
                What is Postman?
            </h2>
            <p>
                Postman is a popular tool used in software development for testing APIs (Application Programming Interface, a set of protocols and tools that allows different software applications to communicate with each other). It provides a user-friendly interface that allows developers to easily make requests to APIs, test different endpoints and methods, and evaluate responses. Postman also enables users to automate testing and create collections of requests for efficient API testing.
            </p>
            <h5 className="center_text">
                Below is a simple code example using Postman's scripting feature to set a variable and make a GET request to an API endpoint:
            </h5>
            <div className="code_box">
                <pre>
                    <code>
                        // Set a variable<br/>
                        pm.variables.set("name", "John Doe");<br />
                        <br />
                        // Make a GET request<br/>
                        pm.sendRequest(&#123;<br/>
                        &nbsp;&nbsp;'https://jsonplaceholder.typicode.com/users/1',<br /> 
                        &nbsp;&nbsp;function(err,response)&#123;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;// Log the response body<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;console.log(response.json());<br />
                        &#125;&#125;);
                    </code>
                </pre>
            </div>
            <p>
                In this example, we are setting a variable named "name" with the value "John Doe" and then making a GET request to the JSONPlaceholder API to fetch information about the user with ID 1. The response body is printed to the console.
            </p>
        </>
    );
};

export default Postman;