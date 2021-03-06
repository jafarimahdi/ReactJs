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

function App() {
    return (
        <div classNam="project">
            <Nav />
            <Loading />
            <Mission />
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
