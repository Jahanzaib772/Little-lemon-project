import React from "react";

const Specials = ()=> {
    return(
    <div>
        <div>
            <h2>Specials</h2>
            <button>Online Menu</button>
        </div>
        <div>
            <div>
                <img src="../images/greek salad.jpg" width={326} height={182} alt="greek salad image" />
                <div>
                    <h3>Greek Salad</h3>
                    <h3>$12.99</h3>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers, olives,and ou Chicago style-feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <div>
                    <button>Order a delivery</button>
                    <img src="../images/delivery-icon.jpg" width={40} height={35} alt="delivery icon" />
                </div>
            </div>
            <div>
            <img src="../images/bruchetta" width={326} height={182} alt="brucetta image" />
                <div>
                    <h3>Bruchetta</h3>
                    <h3>$5.99</h3>
                </div>
                <p>Our brochetta is made from grilled bread that has been smearged with garlic and seasoned with salt and olive oil.</p>
                <div>
                    <button>Order a delivery</button>
                    <img src="../images/delivery-icon.jpg" width={40} height={35} alt="delivery icon" />
                </div>
            </div>
            <div>
            <img src="../images/lemon dessert.jpg" width={326} height={182} alt="lemon dessert image" />
                <div>
                    <h3>Lemon Dessert</h3>
                    <h3>$5.00</h3>
                </div>
                <p>This cosmos from straight grandma;s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <div>
                    <button>Order a delivery</button>
                    <img src="../images/delivery-icon.jpg" width={40} height={35} alt="delivery icon" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default Specials;