import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function Cards({ img, name, detail, price }) {

  const { cart, setCart } = useContext(UserContext)

  const addToCart = () => { 
    setCart((cart) => [...cart, name]) 
  }

  return (
    <span className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{detail}</p>
        <a onClick={addToCart} href="#" className="btn btn-primary">{'$ ' + price}</a>
      </div>
    </span>
  )
}
