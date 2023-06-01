import React from "react";
import MoonLoader from "react-spinners/BounceLoader";
import "./AirDropLoading.scss";

const AirDropLoading = () => {
    return (
        <div className="loadingContainer">
            <MoonLoader
                color="#00557a"
                //  color="#1299FF"
                //  color="#39A2DB"
                //  color="#0A1126"
                size={65}
            />
        </div>
    );
};

export default AirDropLoading;
