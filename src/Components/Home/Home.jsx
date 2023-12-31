import "./Home.css";
import Herosection from "./Herosection/Herosection";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials"
import Hamper from "./Hamper/Hamper";
import Blog from "./Blog/Blog"
import Giftcard from "./Giftcard/Giftcard";

function Home() {
  return (
    <div>
      <Herosection />
      <Featured />
      <Testimonials/>
      <Hamper/>
      <Giftcard/>
      <Blog/>
    </div>
  );
}

export default Home;
