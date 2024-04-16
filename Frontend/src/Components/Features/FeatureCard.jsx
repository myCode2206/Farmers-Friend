export const FeatureCard = (props) => {
  return (
    <>
      <div className="feature col text-center">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3 ">
          <svg
            xmlns={props.url}
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-cloud-drizzle-fill"
            viewBox="0 0 16 16"
          >
            <path d={props.d} />
          </svg>
        </div>
        <h3 className="fs-2 text-body-emphasis text-center">{props.title}</h3>
        <p className="text-muted text-center">{props.desc}</p>
        <a href="#" className="btn icon-link btn-outline-info mt-2 ">
          Read More
        </a>
      </div>
    </>
  );
};
