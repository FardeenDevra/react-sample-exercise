import { useState } from "react";
import React from "react";
import Footer from "./Footer";

export default function Product(props) {
  let [Quantity, setQuantity] = useState(props.product.quantity);
  let [Price, SetPrice] = useState(props.product.price);
  let increaser = () => {
    setQuantity(props.product.quantity = Quantity += 1);
    SetPrice(Price *= props.product.quantity);
  }
  let Decreaser = () => {
    setQuantity(props.product.quantity = Quantity -= 1);
    SetPrice(Price *= props.product.quantity);
  }
  return (
    <div className="container-fluid">
      <div className="row ms-2 my-2 border">
        <div className="col-md-4 ">
          <h2>{props.product.name}</h2>
        </div>
        <div className="col-md-2 ">
          <h2><span className="badge bg-secondary">{'₹' + props.product.price}</span></h2>
        </div>
        <div className="col-md-4 ">
          <div className="btn-group"
            role="group"
            aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-danger" onClick={Decreaser}>
              -
            </button>
            <button type="button" className="btn btn-warning">
              {props.product.quantity}
            </button>
            <button type="button" className="btn btn-success" onClick={increaser} >
              +
            </button>
          </div>
        </div>
        <div className="col-md-2">
          <h2>{'₹' + Price}</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}
