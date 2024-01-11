import "./Home.css";
import Herosection from "./Herosection/Herosection";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials"
import Hamper from "./Hamper/Hamper";
import Blog from "./Blog/Blog"
import Giftcard from "./Giftcard/Giftcard";
import FeatProd from "../FeatProd/FeatProd";

function Home() {
  return (
    <div>
      <Herosection />
      <Featured />
      <Testimonials/>
      <Hamper/>
      <Giftcard/>
      <FeatProd/>
      <Blog/>
    </div>
  );
}

export default Home;
