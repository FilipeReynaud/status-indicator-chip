import React from "react";

// Styles
import "./Active.css";

export interface ActiveProps {
	label?: string;
}

const Active = (props: ActiveProps) => {
	const { label = "Active" } = props;

	return (
		<div className="active-div">
			<div className="active-circle"></div>
			<span className="active-text">{label}</span>
		</div>
	);
};

export default Active;
