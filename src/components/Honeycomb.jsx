import React from 'react';
import flying_bee from "../assets/images/flyingbee.gif"

const Honeycomb = () => { 

// Add 'hidden' class to the element after half a second
    setTimeout(function() {
        document.querySelector('.honeycomb_container').classList.add('reveal');
    }, 600);

    const images = [ 
        "https://i.pinimg.com/originals/01/e5/00/01e500fca29c045d432b64f285f9c229.png", 
        "https://www.colorbook.io/imagecreator.php?hex=ebf5ff&width=1080&height=1920&text=%201080x1920",
        "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/html-512.png",
        "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/css-512.png",
        "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/javascript-256.png",
        "https://cdn4.iconfinder.com/data/icons/miu-hexagon-flat-social/60/github-hexagon-social-media-512.png", 
        "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/sass-512.png", 
        "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/less-512.png", 
        "https://www.colorbook.io/imagecreator.php?hex=ebf5ff&width=1080&height=1920&text=%201080x1920", 
        "https://ih1.redbubble.net/image.2517831630.1453/raf,360x360,075,t,fafafa:ca443f4786.jpg",
        "https://ih1.redbubble.net/image.2191078753.4647/raf,360x360,075,t,fafafa:ca443f4786.jpg", 
        "https://www.colorbook.io/imagecreator.php?hex=ebf5ff&width=1080&height=1920&text=%201080x1920", 
        "https://images.squarespace-cdn.com/content/v1/57c649658419c2380d1947be/1534825375055-OA4431YN1BZ93RTAEIZF/postman-tile.png?format=1500w", 
        "https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png", 
        "https://www.colorbook.io/imagecreator.php?hex=ebf5ff&width=1080&height=1920&text=%201080x1920", 
        "https://external-preview.redd.it/vs-code-communlty-v0-dlSyBrQ6fL9zuuHWgK3upfUYBWUhnC6dQNAY3j7DoOQ.jpg?auto=webp&s=0c600da3dd499738ba5284ed63b4ef62bd4f2dbc", 
        "https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/python-512.png",
        "https://ih0.redbubble.net/image.2488655041.9084/raf,360x360,075,t,fafafa:ca443f4786.jpg", 
        "https://ih0.redbubble.net/image.2456533905.2366/raf,360x360,075,t,fafafa:ca443f4786.jpg", 
        "https://thumbs.dreamstime.com/b/interns hip-text-red-violet-ribbon-badge-stamp-internship-text-red-violet-ribbon-stamp-213094471.jpg", 
        "https://coding-pandas.com/panda.jpg",
        "https://www.colorbook.io/imagecreator.php?hex=ebf5ff&width=1080&height=1920&text=%201080x1920", 
        "https://i.etsystatic.com/39688417/r/il/a739a1/4576833004/il_570xN.4576833004_o6q7.jpg", 
    ];

    return (
            <>
                <img className="bumble_bee_image" src={flying_bee} alt="bumble bee" />
                <ul className="honeycomb_container">
                    {
                        images.map((image, index) => ( 
                            <li className="item" key={index}> 
                            <a href={`#${(index+1)}`} title={(index+1)}>
                                <img className="honeycomb_image" src={image} alt={index} /> 
                            </a> 
                        </li> 
                    ))} 
                </ul> 
            </>
        )
}
export default Honeycomb;