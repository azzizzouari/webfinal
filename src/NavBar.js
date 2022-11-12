import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchContext } from './contexts/searchContext';

export default function NavBar() {
  const navigate = useNavigate();
  const {setsearchInput }= useContext(searchContext)
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand light" to="/">
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

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/page1">
              Page 1
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/page2">
              Page 2
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/page3">
              Page 3
            </Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
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
      </div>
    </nav>
  );
}
