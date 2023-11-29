import React from "react";

const Header = () => {
  return (
    <header className="container">
      <div className="logo">
        <img src="../images/logo.png" width={148} height={40} />
      </div>
      <nav>
        <ul className="navElement">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Reservation</a>
          </li>
          <li>
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;