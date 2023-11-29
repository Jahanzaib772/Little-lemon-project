import React from "react";

const HomeOrder = () => {
    return (
        <div className="homeOrder">
            <h1>Order for Delivery</h1>
            <div className="orderBtns">
                <button id="lunchBtn">Lunch</button>
                <button id="mainsBtn">Mains</button>
                <button id="dessertsBtn">Desserts</button>
                <button id="laCarteBtn">A La Carte</button>
                <button id="specialsBtn">Specials</button>
            </div>
        </div>
    );
};

export default HomeOrder;