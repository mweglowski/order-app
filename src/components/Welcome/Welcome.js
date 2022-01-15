import Card from "../UI/Card";
import LabImage from "../../images/lab-2.jpg";

import "./Welcome.css";

const Welcome = (props) => {
  return (
    <Card className="welcome">
      <div className="welcome-text">
        <div className="title">Join us to not to miss a lot of sales.</div>
        <div className>You can safe almost 50%</div>
      </div>
      <img className="lab-image" src={LabImage} alt="laboratory" />
    </Card>
  );
};

export default Welcome;
