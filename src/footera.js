import React from 'react'

export default function Footer()
{
    return (
        <footer style={{ height: "10%" }}  className="page-footer font-small bg-dark darken-3 ">
  {/* <div className="container">
    <div className="row">
      <div className="col-md-12 py-5">
        <div className="mb-5 flex-center ">
          <a className="fb-ic">
            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x ">
            </i>
          </a>
          <a className="tw-ic">
            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
            </i>
          </a>
          <a className="gplus-ic">
            <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
            </i>
          </a>
          <a className="li-ic">
            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
            </i>
          </a>
          <a className="ins-ic">
            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
            </i>
          </a>
          <a className="pin-ic">
            <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
          </a>
        </div>
      </div>
    </div>
  </div> */}
  <div style={{textAlign: "left", marginLeft: "20px", color: "#fff", fontSize: "14px"}} className="footer-copyright py-3">
    © 2020 Copyright:
    <a href="/"> Station-Z.com </a>
  </div>
</footer>

    )
}

