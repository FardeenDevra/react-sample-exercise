import React from "react";

// const data = [
//   {
//     key: 0,
//     title: 'School Fees',
//     price: 1212,
//     date: '2020-12-12'
//   },
//   {
//     key: 1,
//     title: 'New Leptop',
//     price: 1000,
//     date: '2021-01-03'
//   },
//   {
//     key: 2,
//     title: 'New Studio',
//     price: 30000,
//     date: '2022-08-15'
//   },
//   {
//     key: 3,
//     title: 'New Phone',
//     price: 15000,
//     date: '2019-01-28'
//   }
// ];
// let UpdatedDate;
// const [Expenses, setExpense] = useState(data);
// function dynamicdata(Expensedata) {
//   setExpense((prevExpenses) => {
//     return [Expensedata, ...prevExpenses];
//   })
// };
// const changefilter = (s) => {
//   UpdatedDate = s;
//   console.log(s);
// }

// <div className="bg-secondary container-fluid text-white">
//   <div className="row bg-dark  d-flex justify-content-center">
//     <ExpenseForm ondynamicdata1={dynamicdata} />
//     {/* <DateSelector onChangeFilter={changefilter} /> */}
//     <Billing d={Expenses} />
//   </div >
// </div>
const Expense = ((props) => {
    return (
        < div className="bg-secondary col-8  d-flex justify-content-between py-3 fs-1 my-2" >
            <label>{props.date}</label>
            <label>{props.title}</label>
            <span className="badge bg-dark">{`₹${props.price}`}</span>
        </div >
    );
});
export default Expense;