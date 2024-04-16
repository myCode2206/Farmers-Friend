const Hero = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="bootstrap-themes.png"
              className="d-block mx-lg-auto img-fluid"
              alt=""
              width="700"
              height="500"
              loading="lazy"
              style={{ visibility: "hidden" }}
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Cultivating a Resilient and Value-Driven Food System
            </h1>
            <p className="lead text-dark">
              Welcome to Farmers-Friend, where we are dedicated to planting the
              seeds of transformation in order to enhance the food system. We
              firmly believe that small actions can lead to significant change
              thrrough our initiatives
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 mt-3"
              >
                Try Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
