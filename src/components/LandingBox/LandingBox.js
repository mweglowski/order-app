import Bargain from "./Bargain/Bargain"
import Gallery from "./Gallery/Gallery"

import classes from './LandingBox.module.css'

const LandingBox = () => {
	return (
		<div className={classes['landing-box']}>
			<Bargain />
			<Gallery />
		</div>
	)
}

export default LandingBox;