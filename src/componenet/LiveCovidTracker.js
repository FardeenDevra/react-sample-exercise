import React, { useEffect } from "react";
import './LiveCovidTracker.css'
const LiveCovidTracker = () => {
    const getcoviddata = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json')
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getcoviddata();
    }, []);

    return (
        <div className="container-fluid text-white">
            <div className="row">
                <div className="col-md-12 fs-3 text-center my-3">
                    🔴 LIVE
                </div>
                <div className="col-md-12  text-center my-1 h1 fw-normal fs-1">
                    COVID-19 CORONAVIRUS TRACKER
                </div>
            </div>
            <div className="row d-flex justify-content-evenly text-center my-5  ">
                <div className="col-md-3  bg-primary fs-1 block">
                    <label className="fs-6 fw-bold mx-2">OUR</label>
                    <label className="fs-2 fw-bold">COUNTRY</label>
                    <h1 className="impdata">INDIA</h1>
                </div>
                <div className="col-md-3  bg-warning fs-1 block">
                    <label className="fs-6 fw-bold mx-2">OUR</label>
                    <label className="fs-2 fw-bold">COUNTRY</label>
                    <h1 className="impdata">INDIA</h1>
                </div>
                <div className="col-md-3  bg-danger fs-1 block">
                    <label className="fs-6 fw-bold mx-2">OUR</label>
                    <label className="fs-2 fw-bold">COUNTRY</label>
                    <h1 className="impdata">INDIA</h1>
                </div>
            </div>

            <div className="row d-flex justify-content-evenly text-center my-5  ">
                <div className="col-md-3  bg-success fs-1 block">
                    <label className="fs-6 fw-bold mx-2">OUR</label>
                    <label className="fs-2 fw-bold">COUNTRY</label>
                    <h1 className="impdata">INDIA</h1>
                </div>
                <div className="col-md-3  bg-info fs-1 block">
                    <label className="fs-6 fw-bold mx-2">OUR</label>
                    <label className="fs-2 fw-bold">COUNTRY</label>
                    <h1 className="impdata">INDIA</h1>
                </div>
                <div className="col-md-3  bg-secondary fs-1 block">
                    <label className="fs-6 fw-bold mx-2">OUR</label>
                    <label className="fs-2 fw-bold">COUNTRY</label>
                    <h1 className="impdata">INDIA</h1>
                </div>
            </div>
        </div>
    );
}


export default LiveCovidTracker;