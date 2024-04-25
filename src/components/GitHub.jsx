
const GitHub = () => {

    return (
        <>
            <h2>
                What is GitHub?
            </h2>
            <p>
                GitHub is a website that allows people to collaborate on projects, track changes, and manage different versions of their work. Imagine you are working on a group project like creating a recipe book with your friends. GitHub allows you to keep track of who added what recipes, when they were added, and easily revert back to previous versions if there are any mistakes.
            </p>
            <p>
                For example, if a group of friends are working on a project together to create a recipe-sharing app. They can use GitHub to store the code for the app, track any changes made by each person, and easily collaborate on adding new features or fixing bugs. This way, everyone can work on the project simultaneously and keep track of what changes are being made.
            </p>
            <h5 className="center_text">
                Here is a code example <br />that could be found on GitHub:
            </h5>
            <div className="code_box">
                <pre>
                    <code>
                        def say_hello(name):<br />
                        &nbsp;&nbsp;print("Hello, " + name)<br />
                        <br />
                        say_hello("Alice")
                    </code>
                </pre>
            </div>
            <p>
                In this example, the code defines a function called say_hello which takes a name parameter and prints out "Hello, " followed by the name. If someone wants to change or add to the code, they can submit a pull request on GitHub to suggest the modification. This way, everyone can see, discuss, and approve the changes before they are implemented.
            </p>
        </>
    )
}

export default GitHub