
const Git = () => {

    return (
        <>
            <h2>
                What is Git?
            </h2>
            <p>
                Git is a version control system that allows users to track changes in their files and collaborate with others on projects. It is commonly used by software developers to manage their code and work together on developing applications. Git keeps a history of changes made to files, making it easy to revert back to previous versions if necessary. It also allows users to work on different branches of a project simultaneously and merge their changes together when ready.
            </p>
            <p>
                One of the key features of Git is its ability to work offline, allowing users to make changes to their files and track those changes even when not connected to the internet. This makes it a versatile tool for managing any type of project, not just software development. Git also provides a platform for hosting and sharing code with others, making it a valuable resource for teamwork and collaboration. Overall, Git offers a powerful and efficient way to manage projects and track changes, making it an essential tool for anyone working in group enviroments.
            </p>
            <h5 className="center_text">
                Here is an example how to save into your local repository:
            </h5>
            {/* EXAMPLE */}
            <div className="code_box">
                <pre>
                    <code>
                        <p>git add .</p>
                        <p>git commit -m "First Commit"</p>
                    </code>
                </pre>
            </div>
            {/* END EXAMPLE */}
        </>
    )
}


export default Git