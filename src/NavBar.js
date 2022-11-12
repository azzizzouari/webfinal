import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchContext } from './contexts/searchContext';

export default function NavBar() {
  const navigate = useNavigate();
  const {setsearchInput }= useContext(searchContext)
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a onClick={()=> navigate("/")} style={{fontWeight: "bold", color: "#fff", fontSize: "28px", fontFamily: "Jazz LET"}} class="navbar-brand light" to="/">
        Station - Z
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div style={{justifyContent: "flex-end"}} class="collapse navbar-collapse" id="navbarSupportedContent">
        <form  class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e)=>{setsearchInput(e.target.value)}}
          />
          <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <button onClick={()=> navigate("/cart")} style={{marginLeft: "15px"}} class="btn btn-outline-warning my-2 my-sm-0">
            Go to Cart
        </button>
      </div>
    </nav>
  );
}
