import React from "react";
import { render, screen } from "@testing-library/react";

// Components
import Inactive from "../../../src/components/Inactive/Inactive";

describe("Inactive", () => {
	it("should render properly", () => {
		// Act
		const { container } = render(<Inactive />);

		// Assert
		expect(container).toMatchSnapshot();
	});

	it("should have 'Inactive' label", async () => {
		// Arrange
		render(<Inactive />);

		// Assert
		expect(await screen.findByText("Inactive")).toBeTruthy();
	});

	it("should be able to set another label", async () => {
		// Arrange
		const defaultLabel = "Inactive";
		const testLabel = "Dispatched";

		render(<Inactive label={testLabel} />);

		// Assert
		expect(await screen.queryByText(defaultLabel)).toBeNull();
		expect(await screen.findByText(testLabel)).toBeTruthy();
	});
});
