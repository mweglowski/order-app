import Card from "../UI/Card";
import LabImage from "../../images/lab.png";

import "./Welcome.css";

const Welcome = (props) => {
  return (
    <Card className="welcome">
      <div className="welcome-text">
        <div className="welcome-text-title">Join us to not to miss a lot of <span className="welcome-text-animated-word">sales.</span></div>
        <div className="welcome-text-p1">You can safe <span className="welcome-text-safe-amount">almost 50%</span></div>
      </div>
      <img className="lab-image" src={LabImage} alt="laboratory" />
    </Card>
  );
};

export default Welcome;
