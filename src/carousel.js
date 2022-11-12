import React, { useState } from 'react'

export default function Carousel () {

  const [active, setActive] = useState(0)

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className={`${active === 0 && "active"}`} />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} className={`${active === 1 && "active"}`} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} className={`${active === 2 && "active"}`} />
        </ol>
        <div className="carousel-inner">
          <div className={`carousel-item ${active === 0 && "active"}`}>
            <img style={{height: "340px"}} className="d-block w-100" src="https://promotions.newegg.com/nepro/22-1167/1920x660.jpg" alt="First slide" />
          </div>
          <div className={`carousel-item ${active === 1 && "active"}`}>
            <img style={{height: "340px"}} className="d-block w-100" src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/AMD_Radeon_RX_Nvidia_GeForce_RTX_drdNBC.jpg" alt="Second slide" />
          </div>
          <div className={`carousel-item ${active === 2 && "active"}`}>
            <img style={{height: "340px"}} className="d-block w-100" src="https://s.yimg.com/os/creatr-uploaded-images/2022-09/11561f40-2fbb-11ed-be37-1b6af72859ed" alt="Third slide" />
          </div>
        </div>
        <a onClick={() => { if (active > 0) setActive(active-1) }} className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a onClick={() => { if (active < 2 ) setActive(active+1) }} className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

