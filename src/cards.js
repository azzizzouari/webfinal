import React from 'react'

export default function Cards({img,name,detail,price}) {
  return (
            <span className="card" style={{width: '18rem'}}>
              <img src={img} className="card-img-top" alt="img" />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{detail}</p>
                <a href="#" className="btn btn-primary">{price}</a>
              </div>
            </span>
  )
}
