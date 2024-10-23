import LinkJumpTo from "./LinkJumpTo";
const CareersEmail = import.meta.env.VITE_CAREERS_EMAIL;

const Jobs = ({ positions }) => {

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        window.scrollTo({
            top: element.offsetTop -150,
            behavior: 'smooth'
        });
    }

    return (
        <div className="jobs_container">
            <h5>Jump To:</h5>
            {/* LINKS TO CAREERS */}
            <div className="jump_link_wrapper">
                {positions.map((job) => {
                    return(
                        <LinkJumpTo key={ job.id } jump_to={ job.id } text={ job.position } />
                )})}
            </div>
            {/* END LINKS */}
            <br />
            <h4>
                Send inquiries to: <br className="mobile_only"/> <a className="remove_underline dark_link" href={`mailto:${CareersEmail}?subject=Careers%20Inquiry%20`} target="_blank">{CareersEmail}</a> 
            </h4>
            {/* JOB CARDS */}
            {positions.map(( job ) => {
                return(
                    <div id={ job.id } className="job_card" key={ job.id }>
                    <h2>
                        { job.level } { job.position }
                    </h2>
                    <h3>
                        Type: { job.type }
                    </h3>
                    <h3>
                        Salary: { job.salary }
                    </h3>
                    <h5>
                        { job.about }
                    </h5>
                    <h4>
                        Requirements:
                    </h4>
                    <ul>
                        {[ ...job.requirements ].map(( req, idx ) => {
                            return(
                                <li key={ idx }>
                            { req }
                            </li>
                        )})}
                    </ul>
                    <h4>
                        Responsibilities:
                    </h4>
                    <ul>
                        {[ ...job.responsibilities ].map(( responsability, idx ) => {
                            return(
                                <li key={ idx }>
                            { responsability }
                            </li>
                        )})}
                    </ul>
                    { job.able_to_do && job.able_to_do.length !== false ? (
                    <>
                        <h4>
                            Able to do:
                        </h4>
                        <ul>
                            {[ ...job.able_to_do ].map(( able, idx ) => {
                                return(
                                    <li key={ idx }>
                                        { able }
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                    ) : (
                        <div></div>
                    )}
                </div>
            )})}
        </div>
    );
};

export default Jobs;