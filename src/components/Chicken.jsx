import React from "react";

function Chicken(props) {
    return <div className="chicken">
        <h3 className="chicken_title">{props.title}</h3>
        <img className="chicken_img" src={props.img} alt="" />
        <p className="chicken_caption">{props.caption}</p>
    </div>
}

export default Chicken;

