import Card from "../../UI/Card";
import BrainPill from "../../../images/brain-pill.jpg";
import SectionTitle from "../../UI/SectionTitle"

import classes from "./Bargain.module.css";

const Bargain = () => {
  return (
    <div className={classes['bargain-box']}>
      <Card className={classes.bargain}>
        <SectionTitle className={classes['section-title']} name="Great Bargain" />
        <img src={BrainPill} className={classes.image} alt="brain-pill" />
        <div className={classes.desc}>Brain Pill</div>
        <div className={classes["old-price"]}>1499.99$</div>
        <div className={classes["new-price"]}>1099.99$</div>
      </Card>
    </div>
  );
};

export default Bargain;
