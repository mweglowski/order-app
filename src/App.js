import Navbar from "./components/Navbar/Navbar";
import LandingBox from "./components/LandingBox/LandingBox";
import Shop from "./components/Shop/Shop";
import "./App.css";

const App = () => {
  const products = [
    {
      name: "Vitamine C",
      type: "pills",
      amount: "50x",
      desc: "Good for respiratory system.",
      price: "8.99$",
    },
    {
      name: "Vitamine D",
      type: "pills",
      amount: "50x",
      desc: "Good for bone structure.",
      price: "10.99$",
    },
    {
      name: "Vitamine B12",
      type: "pills",
      amount: "50x",
      desc: "Good for blood.",
      price: "11.99$",
    },
    {
      name: "Onion Syrup",
      type: "syrup",
      amount: "500ml",
      desc: "Good for cough and colds. It also reduce cholesterol levels, which may lower heart disease risk. It helps reduce high blood pressure and protect against blood clots.",
      price: "5.99$",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="content">
        <LandingBox />
        <Shop products={products} />
      </div>
    </>
  );
};

export default App;
