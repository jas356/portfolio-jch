import Header from "./components/Header"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Skill from "./components/Skill"
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <div className="App">
        <main>
        <Header />
        <About />
        <Gallery />
        <Skill />
        <Footer />
        </main>
    </div>
  );
}

export default App;
