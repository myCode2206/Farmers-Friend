import "./Weathercard.css";

function Weathercard() {
    return (
        <div className="container con">
            <div className="card car bg-dark text-white" style={{ borderRadius: '40px' }}>
                <div className="bg-image bgi" style={{ borderRadius: '35px' }}>
                    <img src="https://cdn.pixabay.com/animation/2023/06/25/21/55/21-55-38-961_512.gif"
                        className="card-img" alt="weather" style={{ borderRadius: '39px' }} />
                </div>
                <div className="card-img-overlay cio text-light p-5">
                    <div className="content cont">
                        <h4 className="mb-0">Juneau, Alaska, US</h4>
                        <p className="display-2 my-3">1.28°C</p>
                        <p className="mb-2">Feels Like: <strong>-1.08 °C</strong></p>
                        <h5>Snowy</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weathercard;