import React from "react";

export const FeatureCard = (props) => {
  return (
    <>
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg class="bi" width="1em" height="1em">
            <use xlink:href="#people-circle"></use>
          </svg>
        </div>
        <h3 class="fs-2 text-body-emphasis">{props.title}</h3>
        <p>{props.desc}</p>
        <a href="#" class="icon-link">
          Read More
          <svg class="bi">
            <use xlink:href="#chevron-right"></use>
          </svg>
        </a>
      </div>
    </>
  );
};
