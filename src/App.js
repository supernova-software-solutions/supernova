import './App.css';
import Title from "./Title";
import Card from "./Card";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <Card/>
        <Services/>
        <Contact/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
