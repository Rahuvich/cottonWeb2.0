import React from "react"
import Navbar from "./Navbar"
import LogoCotton from "../assets/img/logoCotton.jpg"

function Header(props) {
  return (
    <div className="header">
      <div className="container d-none d-md-block">
        <div className="row align-items-center">
          <div className="col-1">
            <img
              src={LogoCotton}
              width="100"
              height="100"
              className="d-inline-block align-top my-2"
              alt="Cotton"
            />
          </div>
          <div className="col-11 pl-5">
            <h1 className="display-4 text-uppercase primary letter-spacing-l ml-5">
              lavandería cotton
            </h1>
          </div>
        </div>
      </div>
      <Navbar {...props} />
    </div>
  )
}

export default Header
