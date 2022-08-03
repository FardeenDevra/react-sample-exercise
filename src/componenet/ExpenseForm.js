import React, { useState } from "react";

const ExpenseForm = ((props) => {
    let a = 4;

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChanger = (event) => {
        setEnteredTitle(event.target.value);
    };

    const priceChanger = (event) => {
        setEnteredPrice(event.target.value);
    };

    const dateChanger = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        let ExpenseData = {
            key: a,
            title: enteredTitle,
            price: enteredPrice,
            date: enteredDate
        }
        props.ondynamicdata1(ExpenseData);
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
        a += 1;
    };

    return (
        <div className="container-fluid d-flex  justify-content-center">
            <div className="bg-danger col-8 mx-2 my-3 fs-3 d-flex">
                <form onSubmit={submitHandler} className="row mx-2 my-3">
                    <div className="expense_Form col-md-6">
                        <label className="mx-3">Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChanger} />
                    </div>
                    <div className="expense_Form col-md-6">
                        <label className="mx-3">Price</label>
                        <input type="Number" min='0.01' step='0.01' value={enteredPrice} onChange={priceChanger} />
                    </div>
                    <div className="expense_Form col-md-6 my-5">
                        <label className="mx-3">Date</label>
                        <input type="Date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChanger} />
                    </div>
                    <div className="expense_Form col-md-6 my-5">
                        <button className="btn ms-5 btn-primary py-2 px-5">Add Expense</button>
                        <button className="btn ms-5 btn-primary py-2 px-5">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
});

export default ExpenseForm;