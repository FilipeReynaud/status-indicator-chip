import React from "react";

// Components
import Active from "../Active";
import Inactive from "../Inactive";
import BaseChip from "../BaseChip/BaseChip";

// Types
interface ActiveStatusChipProps {
	type: "active";
	label?: string;
}

interface InactiveStatusChipProps {
	type: "inactive";
	label?: string;
}

interface CustomStatusChipProps {
	type: "custom";
	fontColor: string;
	backgroundColor: string;
	label: string;
	withBlinkAnimation?: boolean;
	size?: "sm" | "md" | "lg";
}

export type StatusChipProps =
	| ActiveStatusChipProps
	| InactiveStatusChipProps
	| CustomStatusChipProps;

const StatusChip = (props: StatusChipProps) => {
	const { type } = props;

	if (type === "active") {
		return <Active label={props.label} />;
	} else if (type === "inactive") {
		return <Inactive label={props.label} />;
	} else if (type === "custom") {
		return <BaseChip {...props} />;
	} else {
		return null;
	}
};

export default StatusChip;
