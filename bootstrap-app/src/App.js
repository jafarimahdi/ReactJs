import logo from "./logo.svg";
import "./App.css";
import Portfolio from "./Components/Portfolio";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Loading from "./Components/Loading";
import Footer from "./Components/Footer";
import Logos from "./Components/Logos";

function App() {
   return (
      <div className="App">
         <Nav />
         <Loading />
         <Services />
         <Portfolio />
         <About />
         <Team />

         <Logos />
         <Contact />
         <Footer />
      </div>
   );
}

export default App;
