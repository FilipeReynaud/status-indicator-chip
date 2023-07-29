const CLASS_NAMES = {
	statusIndicatorTable: "status-indicator-table",
	statusIndicatorCircle: "status-indicator-circle",
	statusIndicatorLabel: "status-indicator-label",
};

const DATA_TEST_IDS = {
	...CLASS_NAMES,
};

const FALLBACK_CSS_VALUES = {
	color: "#0eaf00",
	backgroundColor: "#ddecd1",
};

const LABEL_SIZE = {
	sm: "8px",
	md: "11px",
	lg: "16px",
};

const DEFAULT_VALUES = {
	label: "Active",
	size: "md",
};

export {
	DATA_TEST_IDS,
	CLASS_NAMES,
	FALLBACK_CSS_VALUES,
	LABEL_SIZE,
	DEFAULT_VALUES,
};
