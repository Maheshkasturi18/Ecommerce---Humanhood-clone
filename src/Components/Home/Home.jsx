import Herosection from "./Herosection/Herosection";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import Hamper from "./Hamper/Hamper";
import Blog from "./Blog/Blog";
import Giftcard from "./Giftcard/Giftcard";
import FeatProd from "./FeatProd/FeatProd";
import Affirmation from "./Affirmation/Affirmation";
import Carousel from "./Carousel/Carousel";
import SearchBar from "./Searchbar";

function Home() {
  return (
    <div>
      <SearchBar />
      <Carousel />
      <Affirmation />
      <Herosection />
      <Featured />
      <Hamper />
      <Testimonials />
      <Giftcard />
      <FeatProd />
      <Blog />
    </div>
  );
}

export default Home;
