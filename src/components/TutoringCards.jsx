const TutoringCards = ({ active_tutors }) => {

    const tutors = active_tutors;

    return (
        <div className="card_container">
            {tutors.map((tutor, index) => {
                return(
                    <div className="card_one" key={ index }>
                        <img src={ tutor.photo } alt="User Icon" />
                        <h2>
                            { tutor.first_name } { tutor.last_name }
                        </h2>
                        <h4>
                            Language Specializations
                        </h4>
                        <div className="tutor_technologies">
                            {[...tutor.technologies].map((tech, idx) => {
                                return(
                                    <span key={ idx }>
                                        | { tech } |
                                    </span>
                            )})}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TutoringCards;