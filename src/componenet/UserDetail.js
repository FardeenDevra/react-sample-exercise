import React from "react";
import { useState } from "react";
import './UserDetail.css'
import Button from './Button'
import ErrorModal from "./ErrorModal";
const UserDetail = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();
    const nameChangeHandler = (event) => {
        setUserName(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setUserAge(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({ title: "Invalid Output !!!!!!", msg: 'Input Box Must Be Filled' })
        }
        props.userDetail(userName, userAge);
        setUserName('');
        setUserAge('');
    }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <>
            <form onSubmit={submitHandler} className="col-lg-5 col-md-4 col-sm-12 bg-white rounded-3 mt-3 py-1 px-3">
                <label className="fs-5 fw-bold my-2">Username</label>
                <input type="text" className="col-md-12 col-sm-12 fs-5" onChange={nameChangeHandler} value={userName} />
                <label className="fs-5 fw-bold my-2">Age</label>
                <input type="Number" min='1' max='100' className="col-md-12 col-sm-12 fs-5 mb-3" onChange={ageChangeHandler} value={userAge} />
                <Button>Add User</Button>
            </form>
            {error && <ErrorModal title={error.title} msg={error.msg} onConfirm={errorHandler} />}
        </>
    );
}
export default UserDetail;