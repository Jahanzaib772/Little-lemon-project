import React from "react";

const Navbar = ()=>{
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <img src="../images/logo.jpg" width={148} height={40} />
                </div>
                <ul className="navElement">
                    <li><a href="/">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">Reservation</a></li>
                    <li><a href="">Order Online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;