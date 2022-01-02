import Navbar from "./components/Navbar/Navbar";
import Bargain from "./components/Bargain/Bargain";
import Gallery from "./components/Gallery/Gallery";
import Shop from "./components/Shop/Shop";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="landing-box">
          <Bargain />
          <Gallery />
        </div>
        <Shop />
      </div>
    </>
  );
};

export default App;
