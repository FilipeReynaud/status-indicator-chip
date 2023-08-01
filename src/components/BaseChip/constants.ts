/**
 * CSS for inline styling
 */
const CLASS_NAMES = {
	statusIndicatorTable: "status-indicator-table",
	statusIndicatorCircle: "status-indicator-circle",
	statusIndicatorLabel: "status-indicator-label",
};

const DATA_TEST_IDS = {
	...CLASS_NAMES,
};

const DEFAULT_VALUES = {
	color: "#0eaf00",
	backgroundColor: "#ddecd1",
	label: "Active",
	size: "md",
};

// Table: status-indicator-table
const TABLE_PADDING = {
	sm: "0 4px 0 2px",
	md: "0 7px 0 5px",
	lg: "0 10px 0 8px",
};

// Label: status-indicator-label
const LABEL_SIZE = {
	sm: "8px",
	md: "11px",
	lg: "16px",
};

// Circle: status-indicator-circle
const CIRCLE_SIZE = {
	sm: "8px",
	md: "10px",
	lg: "12px",
};

export {
	DATA_TEST_IDS,
	CIRCLE_SIZE,
	CLASS_NAMES,
	LABEL_SIZE,
	DEFAULT_VALUES,
	TABLE_PADDING,
};
