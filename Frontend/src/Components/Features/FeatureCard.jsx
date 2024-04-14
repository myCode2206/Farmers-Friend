export const FeatureCard = (props) => {
  return (
    <>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg className="bi" width="1em" height="1em">
            <use xlink:href="#people-circle"></use>
          </svg>
        </div>
        <h3 className="fs-2 text-body-emphasis">{props.title}</h3>
        <p>{props.desc}</p>
        <a href="#" className="icon-link">
          Read More
          <svg className="bi">
            <use xlink:href="#chevron-right"></use>
          </svg>
        </a>
      </div>
    </>
  );
};
