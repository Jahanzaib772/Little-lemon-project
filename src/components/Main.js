import HomeOrder from "./Homeorder";


function Main() {

    return (
        <main>
            <h1 id="mainH1">Little Lemon</h1>
            <h2 id="mainH2">Chicago</h2>
            <div className="mainDescription">
                <p id="mainDescription"> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <img id="mainImg" src="../images/restauranfood.jpg" alt="" width={147} height={152} />
            </div>
            <button id="mainButton">Reserve a table</button>
            <div>
            <HomeOrder/>
            </div>
        </main>
    );

};

export default Main;