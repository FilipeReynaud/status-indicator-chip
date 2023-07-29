import React from "react";

// Components
import BaseChip from "../BaseChip";

// Constants
import * as constants from "./constants";

// Types
interface ActiveProps {
	label?: string;
}

const Active = (props: ActiveProps) => (
	<BaseChip
		fontColor={constants.COLOR}
		backgroundColor={constants.BACKGROUND_COLOR}
		label={props.label ?? constants.LABEL}
		withBlinkAnimation
	/>
);

export default Active;
