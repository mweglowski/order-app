import scatteredTablets from "../../images/medicines.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
			<div className="text">
      	<h1>Did you know...</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>
      <img src={scatteredTablets} alt="scattered-tablets" className="scattered-tablets"/>
    </div>
  );
};

export default Gallery;
