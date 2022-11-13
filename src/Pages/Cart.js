import React, { useContext } from 'react'
import Cards from '../cards'
import UserContext from '../UserContext'

export default function Cart() {
  const { cart } = useContext(UserContext)
  
  return (
    <>
    <div><h2>your cart:</h2></div>
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>{cart.map((item) => <Cards remove name={item.name} price={item.price} />)}</div>
    </>    )
}
