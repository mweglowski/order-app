import "./SectionTitle.css"

const SectionTitle = props => {
	return (
		<div className={`section-title ${props.className}`}>{props.name}</div>
	)
}

export default SectionTitle;