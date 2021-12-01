import './App.css';
import Title from "./Title";
import Card from "./Card";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
    return (
        <div className="App">
            <header className="App-main">
                <div className="App-top">
                    <Title/>
                    <Card/>
                    <Services/>
                    <Contact/>
                </div>
                <div className="App-bottom">
                    <Footer/>
                </div>
            </header>
        </div>
    );
}

export default App;
