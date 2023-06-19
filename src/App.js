import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SlideShow from "./components/SlideShow";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SlideShow />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
