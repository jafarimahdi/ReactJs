// import "./App.css";
import Project from "./Components/Project";
import Nav from "./Components/Nav";
import Mission from "./Components/Mission";
import About from "./Components/About";
import Community from "./Components/Community";
import Contact from "./Components/Contact";
import Loading from "./Components/Loading";
import Footer from "./Components/Footer";
import Logos from "./Components/Logos";
import Break from "./Components/Break";

function App() {
   return (
      <div classNameroject>
         <Nav />
         <Loading />
         <Mission />
         <Break />
         <Project />
         <About />
         <Community />
         <Logos />
         <Contact />
         <Footer />
      </div>
   );
}

export default App;
