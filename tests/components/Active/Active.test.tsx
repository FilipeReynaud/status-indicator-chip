import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";

// Components
import Active from "../../../src/components/Active";

// Types
import { ActiveProps } from "../../../src/components/Active/Active";

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

	it("should have 'active' label with correct color", async () => {
		// Arrange
		const expectedLabelColor = "rgb(14, 175, 0)";
		const { container } = render(<Active />);

		// Assert
		const labelSpan = getByTestId(container, "status-indicator-label");
		expect(labelSpan.style.color).toEqual(expectedLabelColor);
	});

	it("should have background with correct color", async () => {
		// Arrange
		const expectedBackgroundColor = "rgb(221, 236, 209)";
		const { container } = render(<Active />);

		// Assert
		const tableDiv = getByTestId(container, "status-indicator-table");
		expect(tableDiv.style.backgroundColor).toEqual(expectedBackgroundColor);
	});

	it("should have circle with correct color", async () => {
		// Arrange
		const expectedCircleColor = "rgb(14, 175, 0)";
		const { container } = render(<Active />);

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
				<Active size={size as ActiveProps["size"]} />
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
				<Active size={size as ActiveProps["size"]} />
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
				<Active size={size as ActiveProps["size"]} />
			);

			// Assert
			const tableDiv = getByTestId(container, "status-indicator-table");
			expect(tableDiv.style.padding).toEqual(expectedPadding);
		});
	});

	it("should have circle with correct animation name", async () => {
		// Arrange
		const expectedAnimationName = "blink";
		const { container } = render(<Active />);

		// Assert
		const circleDiv = getByTestId(container, "status-indicator-circle");
		expect(circleDiv.style.animationName).toEqual(expectedAnimationName);
	});

	it("should have circle with correct animation color", async () => {
		// Arrange
		const expectedAnimationColor = "#0eaf00";
		const { container } = render(<Active />);

		// Assert
		const circleDiv = getByTestId(container, "status-indicator-circle");
		const computedStyles = window.getComputedStyle(circleDiv);
		const animationColor =
			computedStyles.getPropertyValue("--animation-color");
		expect(animationColor).toEqual(expectedAnimationColor);
	});
});
