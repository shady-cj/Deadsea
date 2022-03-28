import react from "react";
import { Hero, Navbar } from "./Components";
function App() {
    return (
        <div className="App">
            <div className="Wrapper">
                <Navbar />
                <Hero />
                <div className="trending">
                    <h2>Trending Auctions</h2>
                </div>
            </div>
        </div>
    );
}

export default App;
