import img from "../../assets/images/bg.png";

function Carousel() {
    return (
        <>
            <div id="carouselExample" className="carousel slide mb-5">
                <div className="carousel-inner rounded-4">
                    <div className="carousel-item active">
                        <img src={img} className="d-block w-100" alt="carousel item" />
                    </div>
                    <div className="carousel-item">
                        <img src={img} className="d-block w-100" alt="carousel item" />
                    </div>
                    <div className="carousel-item">
                        <img src={img} className="d-block w-100" alt="carousel item" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousel;
