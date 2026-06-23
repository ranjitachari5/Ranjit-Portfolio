import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "../components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
const App = () => {
  return (
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;