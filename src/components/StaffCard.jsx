import { useState } from 'react';

const StaffCard = ({ card_data, show_tech }) => {
    const data = card_data;

    const [flipped_cards, set_flipped_cards] = useState([]);

    const [hovered_card_id, set_hovered_card_id] = useState(null);
    const [clicked_card_id, set_clicked_card_id] = useState(null);
    const [is_b_round_hovered, set_is_b_round_hovered] = useState(false);

    const handle_hover = (id) => {
        set_is_b_round_hovered((prev) => !prev);
        set_hovered_card_id(id);
    };

    const handle_card_click = (id) => {
        set_flipped_cards((prev) => {
            if (prev.includes(id)) {
                return prev.filter((card_id) => card_id !== id);
            } else {
                return [...prev, id];
            }
        });

        set_clicked_card_id(id);
    };

    const handle_transition_end = (id) => {
        if (id === clicked_card_id) {
            set_clicked_card_id(null);
        }
    };


    return (
        <div className='id_card_container'>
                {/* CONDITIONAL RENDERING BASED ON is_staff PROP */}
                {data.map((staff) => (
                <div className='container' key={staff.id}>
                    <div className={`flip_box ${ flipped_cards.includes(staff.id) ?     'flipped' : '' }`}>
                        <div className='front' style={{ backgroundImage: `url(${ staff.photo })` }}>
                            <p className='f_title'>{ staff.position }</p>
                            <p className='f_subline'>{ staff.location }</p>
                            <p className='f_headline'>{ staff.first_name } { staff.last_name }</p>
                        </div>
                        <div className='back'>
                            <p className='b_headline'>{ staff.first_name } { staff.last_name }</p>
                            { !show_tech ? 
                                <div className='back_lower'>
                                    <p className='back_title'>Roll</p>
                                    <p className='b_text'>{ staff.position }</p>
                                    <p className='back_title'>Location</p>
                                    <p className='b_text'>{ staff.location }</p>
                                    <p className='back_title'>Bio</p>
                                    <p className='b_text'>{ staff.about }</p>
                                </div>
                            :
                                <div className="tutor_technologies">
                                    {[...staff.technologies].map((tech, idx) => (
                                        <p key={idx}>| {tech} |</p>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                    <div className='r_wrap'>
                        <div className={`b_round ${hovered_card_id === staff.id ? 'b_round_hover' : ''}`}></div>
                        <div className={`s_round ${ clicked_card_id === staff.id ? 's_round_click' : 's_round_back' }`} onClick={() => handle_card_click(staff.id)}  onMouseEnter={() => handle_hover(staff.id)} onMouseLeave={() => handle_hover(null)} onTransitionEnd={() => handle_transition_end(staff.id)}>
                            <div className={`s_arrow ${ flipped_cards.includes(staff.id) ?     's_arrow_rotate' : '' }`}><i className="fa fa-arrow-right" aria-hidden="true"></i></div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
    );
};

export default StaffCard;