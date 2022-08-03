import React from "react"
import Product from './Product'
const data = [
  {
    price: 99999,
    name: 'IPhone',
    quantity: 0
  },
  {
    price: 9999,
    name: 'Motorola',
    quantity: 0
  },
  {
    price: 999,
    name: 'Samsung',
    quantity: 0
  }
]
export default function ProductList() {
  return (
    <>
      {data.map((d, i) => {
        return <Product product={d} index={i} />
      })}
    </>
  )
}