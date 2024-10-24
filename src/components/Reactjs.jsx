
const Reactjs = () => {

    return (
        <>
            <h2>
                What is React.js?
            </h2>
            <p>
                React.js is a popular open-source JavaScript library that is used to build user interfaces for web applications. It was developed by Facebook and is widely used by companies such as Netflix, Airbnb, and Instagram. It allows developers to create interactive and dynamic web pages by breaking down the user interface into small, reusable components. These components can then be easily combined to create complex user interfaces.
            </p>
            <p>
                React.js is a powerful JavaScript library that simplifies the process of building user interfaces for web applications. It is widely used in the industry and has a large community of developers who contribute to its ongoing development and support. Whether you are a beginner or an experienced developer, React.js is a great tool to have in your toolkit for building modern and efficient web applications.
            </p>
            {/* CODE EXAMPLE */}
            <h5 className="center_text">
                Example Code:
            </h5>
            <div className="code_box">
                <pre>
                    <code>
                        import React from 'react';<br/>
                        <br/>
                        const App = () =&gt; &#123;<br/>
                        <br/>
                        &nbsp;return (<br/>
                        &nbsp;&nbsp; &lt;div&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; &lt;h1&gt;Hello, World!&lt;/h1&gt;<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; &lt;p&gt;This is a simple React.js application.&lt;/p&gt;<br/>
                        &nbsp;&nbsp; &lt;div&gt;<br />
                        &nbsp;)<br/>
                        &#125;<br/>
                        <br/>
                        export default App; <br />
                    </code>
                </pre>
            </div>
            {/* END CODE EXAMPLE */}
            <p>
            In the code above, we have created a simple React.js component called "App" that renders a heading and a paragraph. This is just a basic example, but React.js allows for much more complex and interactive components to be created.
            </p>
        </>
    );
};

export default Reactjs;