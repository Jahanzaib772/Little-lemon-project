import React from "react";

const Header = () => {
  return (
    <header className="container">
      <div className="hamburgerLogo">
        <img src="../images/hamburger menu icon.png" alt=""  width={35} height={25}/>
      </div>
      <nav>
        <img src="../images/logo.png" width={148} height={40} alt="" />
      </nav>
      <div className="basketIcon">
        <img src="../images/basket.png" alt="" width={46} height={44} />
      </div>
    </header>
  );
};

export default Header;