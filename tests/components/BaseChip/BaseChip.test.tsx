import React from "react";
import { render } from "@testing-library/react";

// Components
import BaseChip from "../../../src/components/BaseChip";

// Types
import { BaseChipProps } from "../../../src/components/BaseChip/BaseChip";

describe("BaseChip", () => {
	const defaultTestProps = {
		fontColor: "blue",
		backgroundColor: "lightblue",
		label: "Test",
		withBlinkAnimation: true,
		size: "md",
	} as BaseChipProps;

	it("should render properly", () => {
		// Act
		const { container } = render(<BaseChip {...defaultTestProps} />);

		// Assert
		expect(container).toMatchSnapshot();
	});
});
