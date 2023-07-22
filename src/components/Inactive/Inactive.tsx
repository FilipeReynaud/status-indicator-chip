import React from "react";

// Styles
import "./Inactive.css";

export interface InactiveProps {
	label?: string;
}

const Inactive = (props: InactiveProps) => {
	const { label = "Inactive" } = props;

	return (
		<div className="inactive-div">
			<div className="inactive-circle"></div>
			<span className="inactive-text">{label}</span>
		</div>
	);
};

export default Inactive;
