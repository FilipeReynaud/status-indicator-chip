import React from "react";
import { render } from "@testing-library/react";

// Components
import Status from "../../../src/components/Status";

// Types
import { StatusChipProps } from "../../../src/components/Status/Status";

describe("Status", () => {
	const defaultTestProps = {
		type: "active",
		fontColor: "blue",
		backgroundColor: "lightblue",
		label: "Test",
		withBlinkAnimation: true,
		size: "md",
	} as StatusChipProps;

	it("active status chip should be rendered properly", () => {
		// Act
		const { container } = render(<Status type="active" />);

		// Assert
		expect(container).toMatchSnapshot();
	});

	it("inactive status chip should be rendered properly", () => {
		// Act
		const { container } = render(<Status type="inactive" />);

		// Assert
		expect(container).toMatchSnapshot();
	});

	it("custom status chip should be rendered properly", () => {
		// Act
		const testProps = {
			...defaultTestProps,
			type: "custom",
		} as StatusChipProps;
		const { container } = render(<Status {...testProps} />);

		// Assert
		expect(container).toMatchSnapshot();
	});
});
