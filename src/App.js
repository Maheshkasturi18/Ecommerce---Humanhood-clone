import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JoinComn from "./Components/JoinOurComn/JoinComn";
import TalkTherapy from "./Components/TalkTherapy/TalkTherapy";
import Aboutus from "./Components/Aboutus/Aboutus";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="JoinComn/" element={<JoinComn />}></Route>
        <Route path="TalkTherapy/" element={<TalkTherapy />}></Route>
        <Route path="Aboutus/" element={<Aboutus/>}></Route>
        <Route path="Blogs/" element={<Blogs/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
