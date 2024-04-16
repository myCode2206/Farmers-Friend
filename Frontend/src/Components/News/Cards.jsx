import React from "react";

const Cards = (props) => {
  return (
    <div className="card" style={{ width: "18rem", zIndex: "-1" }}>
      <img
        className="card-img-top"
        src={props.imageUrl}
        alt="Card image cap"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body" style={{ minHeight: "150px" }}>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description.substring(0, 50)}</p>
        <a href={props.url} target="_blank" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Cards;
