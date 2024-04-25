import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import flying_bee from "../assets/images/flyingbee.gif";
import honeycomb from "../assets/images/honeycomb_plus_bee.png";
import jsonData from "../assets/json/honeycombs.json";

const images = jsonData.map(( item, idx ) => (
  item.link ? (
    <li className="item" key={ idx }>
      <Link to={ `ourtechs#language_${ item.tag }` } title={ item.tag } role="button">
        <img className="honeycomb_image" src={ item.link } alt={ item.tag } />
      </Link>
    </li>
  ) : (
    <li className="item2" key={ idx }>
      <Link to="/#empty"  role="button">
        <span className="visually-hidden">Empty Link</span>
      </Link>
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
    <div className="active_honeycomb">
      <ul className="honeycomb_container">{ ...combImages }</ul>
      <img className="bumble_bee_image" src={ flying_bee } alt="bumble bee" />
    </div>
    <div className="static_honeycomb">
      <img className="honeycomb_replacement_image" src={ honeycomb } alt="honeycomb" />
    </div>
    </>
  );
};

export default Honeycomb;