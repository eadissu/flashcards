import React from "react";

const Kiosk = (props) => {
  return (
    <>
    <div className="kiosk">
      <img className="image" src={`${props.image}`} alt={`Photo of ${props.location}`}/>
      <div className="content">
        <h2>{props.name}</h2>
        <h3>{props.location}</h3>
        <a href={props.link}>More</a>
      </div>
    </div>
    </>
  )
}

export default Kiosk;