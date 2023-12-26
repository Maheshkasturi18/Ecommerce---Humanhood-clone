import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Routes>
          <Route path="/" element={<Home />}></Route>
          
        </Routes> */}
      <Footer />
    </Router>
  );
}

export default App;
