import React from "react";
import './DisplayUserInput.css';
import DisplayInput from './DisplayInput';

const DisplayUserInput = (props) => {

    props.userData.map((user, i) => console.log(user, i))

    const deleteGoal = (id) => {
        props.onDeleteGoal(id)
    }

    return (
        < div className="box3 my-3 container-fluid" >
            <div className="box4 row">
                <ul className="goals col-md-12">
                    {
                        props.userData.map((user) =>
                            <DisplayInput data={user.text} key={user.id} id={user.id} onDelete={deleteGoal} />)
                    }
                </ul>
            </div>
        </div >
    );
}
export default DisplayUserInput;