import React from "react";
import { render, screen } from "@testing-library/react";

// Components
import Active from "../../../src/components/Active";

describe("Active", () => {
	it("should render properly", () => {
		// Act
		const { container } = render(<Active />);

		// Assert
		expect(container).toMatchSnapshot();
	});

	it("should have 'active' label", async () => {
		// Arrange
		render(<Active />);

		// Assert
		expect(await screen.findByText("Active")).toBeTruthy();
	});

	it("should be able to set another label", async () => {
		// Arrange
		const defaultLabel = "Active";
		const testLabel = "Dispatched";

		render(<Active label={testLabel} />);

		// Assert
		expect(await screen.queryByText(defaultLabel)).toBeNull();
		expect(await screen.findByText(testLabel)).toBeTruthy();
	});
});
