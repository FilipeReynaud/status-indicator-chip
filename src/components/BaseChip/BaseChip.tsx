import React, { CSSProperties } from "react";

// Styles
import "./BaseChip.css";

// Constants
import {
	CLASS_NAMES,
	DEFAULT_VALUES,
	FALLBACK_CSS_VALUES,
	LABEL_SIZE,
} from "./constants";

// Types
interface BaseChipCSS extends CSSProperties {
	"--animation-color": string;
}

interface BaseChipProps {
	fontColor: string;
	backgroundColor: string;
	label: string;
	withBlinkAnimation?: boolean;
	size?: "sm" | "md" | "lg";
}

const appendStylesTo = (className: string, styles: BaseChipProps) => {
	if (className === CLASS_NAMES.statusIndicatorTable) {
		return {
			backgroundColor:
				styles.backgroundColor ?? FALLBACK_CSS_VALUES.backgroundColor,
		};
	} else if (className === CLASS_NAMES.statusIndicatorCircle) {
		return {
			backgroundColor: styles.fontColor ?? FALLBACK_CSS_VALUES.color,
			"--animation-color": styles.withBlinkAnimation
				? styles.fontColor ?? FALLBACK_CSS_VALUES.color
				: "",
			animationName: styles.withBlinkAnimation ? "blink" : "",
			animationDuration: "1s",
			animationIterationCount: "infinite",
		} as BaseChipCSS;
	} else if (className === CLASS_NAMES.statusIndicatorLabel) {
		return {
			color: styles.fontColor,
			fontSize: styles.size
				? LABEL_SIZE[styles.size]
				: LABEL_SIZE[DEFAULT_VALUES.size as keyof typeof LABEL_SIZE],
		};
	}

	return {};
};

const BaseChip = (props: BaseChipProps) => (
	<table
		className={CLASS_NAMES.statusIndicatorTable}
		style={appendStylesTo(CLASS_NAMES.statusIndicatorTable, props)}
	>
		<tbody>
			<tr>
				<td>
					<div
						className={CLASS_NAMES.statusIndicatorCircle}
						style={appendStylesTo(
							CLASS_NAMES.statusIndicatorCircle,
							props
						)}
					></div>
				</td>
				<td>
					<span
						className={CLASS_NAMES.statusIndicatorLabel}
						style={appendStylesTo(
							CLASS_NAMES.statusIndicatorLabel,
							props
						)}
					>
						{props.label ?? DEFAULT_VALUES.label}
					</span>
				</td>
			</tr>
		</tbody>
	</table>
);

export default BaseChip;
