import React from "react";

// Statuses
import Active from "../Active";
import Inactive from "../Inactive";

export interface InactiveProps {
	type: "active" | "inactive";
}

const StatusChip = (props: InactiveProps) => {
	const { type } = props;

	if (type === "active") {
		return <Active />;
	} else if (type === "inactive") {
		return <Inactive />;
	} else {
		return null;
	}
};

export default StatusChip;
