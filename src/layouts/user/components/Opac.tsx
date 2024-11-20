import { CSSProperties } from "react";
import bg from "../../../assets/images/bg.png";

const styles: CSSProperties = {
    backgroundImage: `url(${bg})`,
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};

function Opac() {
    return (
        <div style={styles} className="img-responsive">
            <div className="bg-primary bg-opacity-75 h-100 shadow d-flex flex-column justify-content-center align-items-center text-light">
                <h1 style={{ fontFamily: `anton`, fontSize: "100px" }} className="display-1">
                    TANZA CAMPUS LIBRARY
                </h1>
                <h4 className="bg-primary rounded-pill border border-light border-3 py-1 px-5 mb-3">Online Public Access Catalog</h4>
                <div className="d-flex" style={{ width: `600px` }}>
                    <input type="text" className="form-control rounded-start-pill px-4" placeholder="Search library collection here.." />
                    <button className="btn btn-outline-light rounded-end-pill px-3 border-2" type="button">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Opac;
