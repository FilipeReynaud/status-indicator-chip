import React from "react";

// Components
import BaseChip from "../BaseChip";

// Constants
import * as constants from "./constants";

// Types
interface InactiveProps {
	label?: string;
}

const Inactive = (props: InactiveProps) => (
	<BaseChip
		fontColor={constants.COLOR}
		backgroundColor={constants.BACKGROUND_COLOR}
		label={props.label ?? constants.LABEL}
		withBlinkAnimation={false}
	/>
);

export default Inactive;
