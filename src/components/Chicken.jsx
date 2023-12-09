import React from "react";

function Chicken({ img, title, caption }) {
    return <div className="chicken">
        <h3 className="chicken_title">{title}</h3>
        <img className="chicken_img" src={img} alt="" />
        <p className="chicken_caption">{caption}</p>
    </div>
}

export default Chicken;

