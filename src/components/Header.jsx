import React from "react";
import Navbar from "./Navbar";
import LogoCotton from "../assets/img/logoCotton.jpg";

function Header(props) {
  return (
    <div className="flex flex-col items-center">
      <div className="hidden md:flex max-w-screen-xl w-full md:px-10 lg:px-20">
        <div className="flex flex-row items-center">
          <img
            src={LogoCotton}
            width="100"
            height="100"
            className="d-inline-block align-top my-2"
            alt="Cotton Logo"
          />
          <h1 className="ml-20 uppercase text-primary-blue tracking-widest font-light">
            lavandería cotton
          </h1>
        </div>
      </div>
      <Navbar {...props} />
    </div>
  );
}

export default Header;
