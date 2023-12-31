import "./Home.css";
import Herosection from "./Herosection/Herosection";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials"
import Hamper from "./Hamper/Hamper";

function Home() {
  return (
    <div>
      <Herosection />
      <Featured />
      <Testimonials/>
      <Hamper/>
    </div>
  );
}

export default Home;
