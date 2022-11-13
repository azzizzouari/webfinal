import React, { useContext } from 'react'
import Cards from '../cards'
import UserContext from '../UserContext'

export default function Cart() {
  const { cart } = useContext(UserContext)
  
  return (
    <><br></br><br></br>
    <div>your cart:</div>
    <div style={{margin: "50px"}}>
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>{cart.map((item) => <Cards remove name={item.name} price={item.price} />)}</div>
    </div>
    <a href="public/index.html" className="btn btn-primary" style={{ marginBottom :"50px"}}>confirm my purshace</a>
    </>    )
}
