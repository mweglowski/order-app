import Navbar from "./components/Navbar/Navbar";
import Bargain from "./components/Bargain/Bargain";
import Gallery from "./components/Gallery/Gallery";
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
      </div>
    </>
  );
};

export default App;
