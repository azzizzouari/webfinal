import React from 'react'

export default function Buttin({setsortType}) {
  return (
    <div style={{height: "45px"}}>
        <div style={{float: "left", display: "block", marginLeft: "35px"}} className="dropdown">
        <button className="btn btn-secondary dropdown-toggle text-black" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          SortBy
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className='dropdown-item' onClick={()=>setsortType("up")}>ASC</li>
          <li className='dropdown-item' onClick={()=>setsortType("down")}>DSC</li>
        </ul>
      </div>
    </div>
  )
}
