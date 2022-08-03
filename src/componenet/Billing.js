import React from "react"
import Expense from './Expense'


const Billing = ((props) => {
    props.d.map(function (eachproduct) {
        return (
            <Expense date={eachproduct.date} price={eachproduct.price} title={eachproduct.title} />
        );
    });

});
export default Billing;