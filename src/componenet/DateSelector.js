import React from "react";



const DateSelector = (props) => {
    const selectDateHandler = function (event) {
        const s = event.target.value;
        props.onChangeFilter(s);
    }

    return (
        <div className="col-md-8 my-3" >
            <select className="form-select fs-3" onChange={selectDateHandler}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div >
    );
}

export default DateSelector;