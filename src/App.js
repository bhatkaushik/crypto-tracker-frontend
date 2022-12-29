import "./App.css";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import HeadingTags from "./components/heading-tags/HeadingTags";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/table/Table";

function App() {
  return <div className="App">
<Navbar />
<Carousel />
<HeadingTags />

<Table />

<Footer />
  </div>;
}

export default App;
