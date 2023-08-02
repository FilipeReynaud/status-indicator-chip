import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";

// Components
import Inactive from "../../../src/components/Inactive/Inactive";

// Types
import { InactiveProps } from "../../../src/components/Inactive/Inactive";

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

	it("should have 'active' label with correct color", async () => {
		// Arrange
		const expectedLabelColor = "rgb(238, 95, 91)";
		const { container } = render(<Inactive />);

		// Assert
		const labelSpan = getByTestId(container, "status-indicator-label");
		expect(labelSpan.style.color).toEqual(expectedLabelColor);
	});

	it("should have background with correct color", async () => {
		// Arrange
		const expectedBackgroundColor = "rgb(253, 238, 238)";
		const { container } = render(<Inactive />);

		// Assert
		const tableDiv = getByTestId(container, "status-indicator-table");
		expect(tableDiv.style.backgroundColor).toEqual(expectedBackgroundColor);
	});

	it("should have circle with correct color", async () => {
		// Arrange
		const expectedCircleColor = "rgb(238, 95, 91)";
		const { container } = render(<Inactive />);

		// Assert
		const circleDiv = getByTestId(container, "status-indicator-circle");
		expect(circleDiv.style.backgroundColor).toEqual(expectedCircleColor);
	});

	[
		{ expectedLabelSize: "8px", size: "sm" },
		{ expectedLabelSize: "11px", size: "md" },
		{ expectedLabelSize: "16px", size: "lg" },
	].forEach(({ expectedLabelSize, size }) => {
		it(`should have 'active' label with correct ${size} size`, async () => {
			// Arrange
			const { container } = render(
				<Inactive size={size as InactiveProps["size"]} />
			);

			// Assert
			const labelSpan = getByTestId(container, "status-indicator-label");
			expect(labelSpan.style.fontSize).toEqual(expectedLabelSize);
		});
	});

	[
		{ expectedCircleSize: "8px", size: "sm" },
		{ expectedCircleSize: "10px", size: "md" },
		{ expectedCircleSize: "12px", size: "lg" },
	].forEach(({ expectedCircleSize, size }) => {
		it(`should have circle div with correct ${size} size`, async () => {
			// Arrange
			const { container } = render(
				<Inactive size={size as InactiveProps["size"]} />
			);

			// Assert
			const circleDiv = getByTestId(container, "status-indicator-circle");
			expect(circleDiv.style.height).toEqual(expectedCircleSize);
			expect(circleDiv.style.width).toEqual(expectedCircleSize);
		});
	});

	[
		{ expectedPadding: "0px 4px 0px 2px", size: "sm" },
		{ expectedPadding: "0px 7px 0px 5px", size: "md" },
		{ expectedPadding: "0px 10px 0px 8px", size: "lg" },
	].forEach(({ expectedPadding, size }) => {
		it(`should have table with correct ${size} size`, async () => {
			// Arrange
			const { container } = render(
				<Inactive size={size as InactiveProps["size"]} />
			);

			// Assert
			const tableDiv = getByTestId(container, "status-indicator-table");
			expect(tableDiv.style.padding).toEqual(expectedPadding);
		});
	});

	it("should have circle with no animation", async () => {
		// Arrange
		const expectedAnimationName = "";
		const { container } = render(<Inactive />);

		// Assert
		const circleDiv = getByTestId(container, "status-indicator-circle");
		expect(circleDiv.style.animationName).toEqual(expectedAnimationName);
	});
});
