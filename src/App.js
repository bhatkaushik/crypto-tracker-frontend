import "./App.css";
import CarauselMobile from "./components/carousel/carouselMobile/CarauselMobile";
import Carousel from "./components/carousel/CarouselDesktop/Carousel";
import HeadingTags from "./components/heading-tags/HeadingTags";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/table/tableDesktop/Table";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="layout">
        <Carousel />
        <CarauselMobile />
        <HeadingTags />
        <Table />
      </div>
    </div>
  );
}

export default App;
