import React from "react";



export default function Cards(props){

    
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card-div">
            {badgeText && <div className="sout"><p>{badgeText}</p></div>}
            <img src={`images/${props.coverImg}`} alt="Katie-zaferes" className="card-img" />
            <div className="card-detail">
                <img src="images/star.png" alt="rate" className="star-img" />
                {props.stats.rating}
                <span className="gray">({props.stats.reviewCount}) • {props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><b>From ${props.price}</b> / person</p>
        </div>
    )
}