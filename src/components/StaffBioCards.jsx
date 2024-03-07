import { useState } from 'react';

const StaffBioCards = ({ active_staff }) => {
    const [flipped_cards, setFlipped_Cards] = useState([]);
    
    const active_staff_bios = active_staff;
    
    const handle_card_click = (id) => {
        if (flipped_cards.includes(id)) {
            setFlipped_Cards(flipped_cards.filter(card_id => card_id !== id));
        } else {
            setFlipped_Cards([...flipped_cards, id]);
        }
    };

    return (
        <div className='container'>
            {active_staff_bios.map((staff) => (
                <div className={`flip_box ${flipped_cards.includes(staff.id) ? 'flipped' : ''}`} key={ staff.id } onClick={() => handle_card_click(staff.id)}>
                    <div className='front' style={{ backgroundImage: `url(${staff.photo})` }}>
                        <p className='f_title'>{ staff.position }</p>
                        <p className='f_subline'>{ staff.location }</p>
                        <h1 className='f_headline'>{ staff.first_name } { staff.last_name }</h1>
                    </div>
                    <div className='back'>
                        <h1 className='b_headline'>{ staff.first_name } { staff.last_name }</h1>
                        <p className='b_text'>{ staff.position }<br />{ staff.location }<br />{ staff.about }</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StaffBioCards;