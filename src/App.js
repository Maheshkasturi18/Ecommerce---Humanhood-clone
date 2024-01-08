import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JoinComn from "./Components/JoinOurComn/JoinComn";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="JoinComn/" element={<JoinComn />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
