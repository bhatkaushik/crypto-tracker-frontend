import "./App.css";
import CarauselMobile from "./components/carousel/CarauselMobile";
import Carousel from "./components/carousel/Carousel";
import HeadingTags from "./components/heading-tags/HeadingTags";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/table/Table";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <CarauselMobile />
      <HeadingTags />
      <Table />

    </div>
  );
}

export default App;
