import React from "react";
import Button from '././Button'
import './Error-Modal.css'
import ReactDOM from "react-dom";
const backdrop = () => {

}
const ErrorModal = props => {

    return (
        <div className="error-modal" onClick={props.onConfirm}>
            <div className="error-box">
                <header>
                    <h3>{props.title}</h3>
                </header>
                <div className="msg">
                    <label>{props.msg}</label>
                </div>
                <footer>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </div>
        </div>);
}
export default ErrorModal;