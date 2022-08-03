import React from "react";

import './DisplayUserDetail.css'
const DisplayUserDetail = (props) => {
    console.log(props.displayDetail)
    return (
        <ul className="col-md-5  justify-content-center bg-white mt-5 rounded-3">
            {props.displayDetail.map((user) => <li className="displayComponent fs-4 my-2">{`Name : ${user.Name} is ${user.Age} years old`}</li>)}
        </ul >
    );
}
export default DisplayUserDetail;