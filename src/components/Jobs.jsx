import jobs from "../assets/json/careers.json"

const Jobs = () => {

    const activeJobs = jobs.filter(job => job.is_active);

    return (
        <div className="jobs_container">
            {/* LINKS TO CAREERS */}
            <div className="career_jump_link">
                {[...activeJobs].map((job) => {
                return(
                        <a href={`#${ job.id }`} key={ job.id }>
                            |&nbsp; { job.position }&nbsp;|
                        </a>
                )})}
            </div>
            {/* END LINKS */}
            <h4>
                Send inquiries to: <br className="mobile_only"/> <a id="career_link" href="mailto:careers@techbyte-learning.com?subject=Career%20Inquiry%20">careers@techbyte-learning.com</a> 
            </h4>
            {/* JOB CARDS */}
            {[...activeJobs].map((job) => {
            return(
                <div id={ job.id } className="job_card" key={ job.id }>
                    <h2>
                        { job.level } { job.position}
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
                        {[...job.requirements].map((req, idx) => {
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
                        {[...job.responsibilities].map((responsability, idx) => {
                        return(
                            <li key={ idx }>
                            { responsability }
                            </li>
                        )})}
                    </ul>
                    {job.able_to_do && job.able_to_do.length !== false ? (
                    <>
                        <h4>
                            Able to do:
                        </h4>
                        <ul>
                            {[...job.able_to_do].map((able, idx) => {
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