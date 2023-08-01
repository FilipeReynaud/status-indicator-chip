import React, { CSSProperties } from "react";

// Styles
import "./BaseChip.css";

// Constants
import {
	CLASS_NAMES,
	CIRCLE_SIZE,
	DEFAULT_VALUES,
	LABEL_SIZE,
	TABLE_PADDING,
	DATA_TEST_IDS,
} from "./constants";

// Types
interface BaseChipCSS extends CSSProperties {
	"--animation-color": string;
}

export interface BaseChipProps {
	fontColor: string;
	backgroundColor: string;
	label: string;
	withBlinkAnimation?: boolean;
	size?: "sm" | "md" | "lg";
}

const appendStylesTo = (className: string, styles: BaseChipProps) => {
	if (className === CLASS_NAMES.statusIndicatorTable) {
		const padding = styles.size
			? TABLE_PADDING[styles.size]
			: TABLE_PADDING[DEFAULT_VALUES.size as keyof typeof TABLE_PADDING];
		const backgroundColor =
			styles.backgroundColor ?? DEFAULT_VALUES.backgroundColor;

		return {
			padding,
			backgroundColor,
		};
	} else if (className === CLASS_NAMES.statusIndicatorCircle) {
		const sizeInPx = styles.size
			? CIRCLE_SIZE[styles.size]
			: CIRCLE_SIZE[DEFAULT_VALUES.size as keyof typeof CIRCLE_SIZE];
		const backgroundColor = styles.fontColor ?? DEFAULT_VALUES.color;

		return {
			width: sizeInPx,
			height: sizeInPx,
			backgroundColor,
			...(styles.withBlinkAnimation
				? {
						"--animation-color": backgroundColor,
						animationName: "blink",
						animationDuration: "1s",
						animationIterationCount: "infinite",
				  }
				: {}),
		} as BaseChipCSS;
	} else if (className === CLASS_NAMES.statusIndicatorLabel) {
		const color = styles.fontColor ?? DEFAULT_VALUES.color;

		return {
			color,
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
		data-test={DATA_TEST_IDS.statusIndicatorTable}
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
						data-test={DATA_TEST_IDS.statusIndicatorCircle}
					></div>
				</td>
				<td>
					<span
						className={CLASS_NAMES.statusIndicatorLabel}
						style={appendStylesTo(
							CLASS_NAMES.statusIndicatorLabel,
							props
						)}
						data-test={DATA_TEST_IDS.statusIndicatorLabel}
					>
						{props.label ?? DEFAULT_VALUES.label}
					</span>
				</td>
			</tr>
		</tbody>
	</table>
);

export default BaseChip;
