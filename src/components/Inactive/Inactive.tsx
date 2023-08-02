import React from "react";

// Components
import BaseChip from "../BaseChip";

// Constants
import * as constants from "./constants";

// Types
export interface InactiveProps {
	label?: string;
	size?: "sm" | "md" | "lg";
}

const Inactive = (props: InactiveProps) => (
	<BaseChip
		fontColor={constants.COLOR}
		backgroundColor={constants.BACKGROUND_COLOR}
		label={props.label ?? constants.LABEL}
		size={props.size ?? constants.SIZE}
		withBlinkAnimation={false}
	/>
);

export default Inactive;
