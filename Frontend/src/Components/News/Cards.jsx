import React from "react";
import PropTypes from "prop-types";

const Cards = ({ imageUrl, title, description, url }) => {
  // Truncate the description and add ellipsis if needed
  const truncatedDescription =
    description.length > 50
      ? `${description.substring(0, 50)}...`
      : description;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={imageUrl}
        alt={`${title}`}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body" style={{ minHeight: "150px" }}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{truncatedDescription}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-success"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

Cards.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Cards;
