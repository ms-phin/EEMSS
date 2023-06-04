import React, {component} from 'react'
import { Link } from "react-router-dom";
import "./header.css";
// import logo from "../../Assets/logo.jpg";

const Header = () => {
  return (
  
    <div className="Header">
    {/* Header TopBar */}
    <div className="Header__topbar space__beetween">
      {/* Topbar Left */}
      <div className="logo pxy__10">
        <Link to="/">
          <img                 
            // src={logo}
            src="data:image/png;base64,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"
            alt=""
            className="logo"
          />
        </Link>
      </div>
      {/* Topbar Middle */}
      <div>
    {/* Header Navbar */}
    <div className="navbar flex pz__10 space__beetween" >
      <div
       className="navigation"
       style={{
         padding:"0px 50px",
         alignContent:"center"
       }}
      >
        <ul
          style={{
            fontFamily: "sans-serif",
            cursor: "pointer",
            display: "flex",
            listStyle: "none",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
      <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/faq">
            <li>FAQ</li>
          </Link>
          <Link to="/">
            <li></li>
          </Link>
          <Link to="/goals">
            <li>Visions and Goals</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
        <div className="user__account flex pointer">
          <Link to="/login" className='butn'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person pxz__20 black"
               viewBox="0 0 16 16"
            >               

              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
         </svg>              

          </Link>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
export default Header;