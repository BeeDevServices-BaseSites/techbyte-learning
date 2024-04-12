
const Sass = () => {

    return (
        <>
            <h2>
                What is Sass?
            </h2>
            <p>
                Sass, which stands for "Syntactically Awesome Stylesheets," is a powerful tool used by web developers to streamline the process of writing and managing CSS code. CSS, or Cascading Style Sheets, is the language used to define the visual style and layout of a web page. While CSS can be effective for styling web pages, Sass takes it to the next level by offering features such as variables, nesting, and mixins.
            </p>
            <p>
                By using Sass, developers can write cleaner, more modular code that is easier to maintain and update. Variables allow for easy reuse of values, while nesting organizes styles in a hierarchical structure that mirrors the HTML markup. Mixins are like functions that can be reused throughout the stylesheet, saving time and reducing redundancy. Overall, Sass helps developers create more efficient and maintainable CSS code, leading to a better user experience on websites.
            </p>
            {/* CODE EXAMPLE */}
            <h5 className="center_text">
                Here is an example of Sass used to style a button:
            </h5>
            <div className="code_box">
                <pre>
                    <code>
                        // Define a variable for a color<br/>
                        $primary-color #4466cc<br/>
                        <br/>
                        //Define a mixin for a box shadow<br/>
                        @mixin box-shadow($x, $y, $blur, $color: #000) &#123;<br/>
                        &nbsp;&nbsp;box-shadow: $x $y $blur $color;<br/>
                        &#125;;<br/>
                        <br/>
                        //Define a style for a button using the variables and mixins<br/>
                        .button &#123;<br/>
                        &nbsp;&nbsp;background-color: $primary-color;<br/>
                        &nbsp;&nbsp;color: white;<br/>
                        &nbsp;&nbsp;padding: 10px 20px;<br/>
                        &nbsp;&nbsp;border-radius: 5px;<br/>
                        &nbsp;&nbsp;@include box-shadow(2px, 2px, 5px)<br/>
                        &#125;;<br/>
                    </code>
                </pre>
            </div>
            {/* END CODE EXAMPLE */}
            {/* EXAMPLE RESULT */}
            <h5 className="center_text">
                Here is our result:
            </h5>
            <div className="code_box_result css">
                <button id="example_button_sass"> Sass Button </button>
            </div>
            {/* END EXAMPLE RESULT */}
            <p>
                Through features like variables, nesting, and mixins, Sass makes it easier to write and manage styling code, ultimately leading to a better user experience on websites.
            </p>
        </>
    )
}

export default Sass;