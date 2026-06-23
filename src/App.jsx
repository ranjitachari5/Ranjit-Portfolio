import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from "./Homepage";
import Navbar from "../components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import PageTransition from "./components/PageTransition";

// AnimatePresence must watch location changes, so routing lives in a child
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Homepage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <Navbar />
    <AnimatedRoutes />
  </BrowserRouter>
);

export default App;