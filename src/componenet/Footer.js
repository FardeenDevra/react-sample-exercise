import React from "react";
export default function Footer(props) {
    return (
        <div className="row fixed-bottom">
            <button className="btn btn-danger col-md-2">
                Reset
            </button>
            <div className="col-8 bg-dark  text-white">
                {props.total}
            </div>
            <button className="btn btn-primary col-md-2">
                Pay Now
            </button>
        </div>
    );
}