import React, { useState, useEffect, useRef } from "react";
import flying_bee from "../assets/images/flyingbee.gif";
import honeycomb from "../assets/images/honeycomb_plus_bee.png";
import jsonData from "../assets/json/honeycombs.json";

const images = jsonData.map(( item, idx ) => (
  item.link ? (
    <li className="item" key={ idx }>
      <a href={ `#${ item.tag }` } title={ item.tag } role="button">
        <img className="honeycomb_image" src={ item.link } alt={ item.tag } />
      </a>
    </li>
  ) : (
    <li className="item2" key={ idx }>
      <a href="/#empty"  role="button">
        <span className="visually-hidden">Empty Link</span>
      </a>
    </li>
  )
));

const Honeycomb = () => {
  const currentIndex = useRef(-1);
  const [combImages, setCombImages] = useState(
    [...Array( jsonData.length )].map(( _, idx ) => (
      <div className="item placeholder" key={ idx }> </div>
    ))
  );

  useEffect(() => {
    if ( currentIndex.current !== jsonData.length ) {
      setTimeout(() => {
        currentIndex.current += 1;
        setCombImages(( prev ) => {
          const newCombs = [ ...prev ];
          newCombs[ currentIndex.current ] = images[ currentIndex.current ];
          return newCombs;
        });
      }, window.innerWidth <= 450 ? 0 : 50 );
    }
  }, [ combImages ]);

  return (
    <>
    <div className="desktop-only">
      <ul className="honeycomb_container">{ ...combImages }</ul>
      <img className="bumble_bee_image" src={ flying_bee } alt="bumble bee" />
    </div>
    <div className="mobile-only">
      <img className="honeycomb_replacement_image" src={ honeycomb } alt="honeycomb" />
    </div>
    </>
  );
};

export default Honeycomb;