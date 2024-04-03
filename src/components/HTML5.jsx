import bat_cat from "../assets/images/bat_cat.jpeg"

const HTML5 = () => {

    return (
        <>
            <h2>
                What is HTML5?
            </h2>
            <p>
                HTML, which stands for HyperText Markup Language, is the standard language used to create and design websites. It consists of a series of tags that are used to structure the content of a web page, such as headings, paragraphs, images, and links. These tags tell the web browser how to display the content on the page and allow for easy navigation and readability.
            </p>
            <p>
                HTML5 is an updated version of HTML that introduces new features and capabilities to enhance the overall user experience on the web. Some of the key improvements with HTML5 include support for multimedia elements like video and audio, as well as improved functionality for form validation and canvas drawing. HTML5 also allows for better compatibility across different devices and browsers, making it easier for developers to create responsive and interactive websites.
            </p>
            <br />
            {/* HTML EXAMPLE */}
            <h5 className="center_text">
                Here is an example of HTML:
            </h5>
            <div className="code_box">
                <pre>
                    <code>
                        &lt;h1&gt;Welcome to TechByte Learning&lt;/h1&gt;<br />
                        &lt;p&gt;This is a paragraph of text on my website.&lt;/p&gt;<br />
                        &lt;img&gt;src="https://cataas.com/cat" alt="Random Cat Image"/&gt;<br />
                        &lt;a href="https://www.example.com"&gt;Visit example.com&lt;/a&gt;<br />
                    </code>
                </pre>
            </div>
            {/* END EXAMPLE SECTION */}
            {/* HTML RESULT SECTION */}
            <h5 className="center_text">
                This is our result:
            </h5>
            <div className="code_box_result">
                <h1>Welcome to TechByte Learning</h1>
                <p>This is a paragraph of text on my website.</p>
                <img src={ bat_cat } alt="Random Cat Image"/>
                <a href="https://cataas.com/cat" target="_blank">Visit A Random Cat Image</a>
            </div>
            {/* END RESULT SECTION */}
            <p>
                By using HTML and HTML5, developers can create visually appealing and interactive websites that are accessible to users across different devices and platforms, helping to enhance the overall browsing experience on the web.
            </p>
        </>
    )
};

export default HTML5;