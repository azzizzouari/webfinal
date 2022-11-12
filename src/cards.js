import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function Cards({ img, name, detail, price, remove }) {

  const { cart, setCart } = useContext(UserContext)

  const addToCart = (e) => {
    e.preventDefault() 
    setCart((cart) => [...cart, { name, price }]) 
  }

  const removeFromCart = (e) => {
    e.preventDefault() 
    setCart((cart) => cart.filter((item) => item.name != name)) 
  }

  return (
    <span className="card" style={{ width: '18rem' }}>
      { img && <img src={img} className="card-img-top" alt="img" />}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{detail}</p>
        <a onClick={addToCart} href="#" className="btn btn-primary">{'$ ' + price}</a>
        { remove && <a onClick={removeFromCart} href="#" className="btn btn-primary">Remove</a> }
      </div>
    </span>
  )
}
