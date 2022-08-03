import React, { useState } from "react";
import './stylemodule.css'

const StyleModule = (props) => {
    const [goals, setGoals] = useState('');

    const [isvalid, setIsValid] = useState(false);

    const inputChangeHandler = (event) => {
        setGoals(event.target.value);
        if (goals.trim().length !== 0) {
            setIsValid(false);
        }
    }

    const fromSubmitHandler = (event) => {
        event.preventDefault();
        if (goals.trim().length === 0) {
            setIsValid(true);
            return;
        }
        props.inputvalue({ text: goals, id: Math.round((Math.random() * 500)) });
        setGoals('');
    }
    return (
        <form onSubmit={fromSubmitHandler}>
            <div className="box1">
                <div className={`box2 ${isvalid ? 'invalid' : ''}`} >
                    <label>Course Goal</label><br />
                    <input type="text" onChange={inputChangeHandler} value={goals} /><br />
                    <button type="submit">Add Goal</button>
                </div>
            </div >
        </form>
    );
}



export default StyleModule;