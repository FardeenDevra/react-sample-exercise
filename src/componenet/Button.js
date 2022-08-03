import React from "react";

const Button = props => {
    return (<button type="submit" className="px-3 text-white adduser py-1  my-1" onClick={props.onClick}>
        {props.children}
    </button>);
}
export default Button