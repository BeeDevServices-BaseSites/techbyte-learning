import bat_cat from "../assets/images/bat_cat.jpeg"

const CSS = () => {

    return (
        <>
            <h2>
                What is CSS?
            </h2>
            <p>
                CSS stands for Cascading Style Sheets and it is a language used to describe the presentation of a website or webpage. In simpler terms, CSS is what makes a website look visually appealing by controlling and styling elements like fonts, colors, layouts, and spacing. It allows web designers to customize the appearance of their website without changing the actual content. CSS works in conjunction with HTML (the structure of a webpage) to create the overall design and layout of a website.
            </p>
            <br />
            {/*  EXAMPLE */}
            <h5 className="center_text">
                Lets add some CSS to our HTML example:
            </h5>
            <div className="code_box">
                <pre>
                    <code>
                        h1 &#123;<br/>
                        &nbsp;&nbsp;color: darkred;<br/>
                        &#125;;<br/>
                        p &#123;<br/>
                        &nbsp;&nbsp;color: goldenrod;<br/>
                        &nbsp;&nbsp;font-weight: bold;<br/>
                        &#125;;<br/>
                        img &#123;<br/>
                        &nbsp;&nbsp;border: 2px solid red;<br/>
                        &#125;;<br/>
                        a &#123;<br/>
                        &nbsp;&nbsp;color: green;<br/>
                        &#125;;<br/>
                        a:hover &#123;<br/>
                        &nbsp;&nbsp;color: red;<br/>
                        &#125;;<br/>
                    </code>
                </pre>
            </div>
            {/* END EXAMPLE SECTION */}
            {/* CSS RESULT SECTION */}
            <h5 className="center_text">
                This is our result:
            </h5>
            <div className="code_box_result css">
                <h1>Welcome to TechByte Learning</h1>
                <p>This is a paragraph of text on my website.</p>
                <img src={ bat_cat } alt="Random Cat Image"/>
                <a href="https://cataas.com/cat" target="_blank">Visit A Random Cat Image</a>
            </div>
            {/* END RESULT SECTION */}
            <p>
                By adding specific CSS to our example, we can create a visual apeal to our website with customized elements such as colors, fonts, and borders.
            </p>
        </>
    )
};

export default CSS;