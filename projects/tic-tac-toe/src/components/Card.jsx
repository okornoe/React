import React from "react"; 

const Card = (props) => {
    const title = props.title;
    const info = props.info;
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.info}</p>
            <button>view more</button>
        </div>
    )
}

export default Card;