import "./App.css";

import StatusChip from "status-indicator-chip";

function App() {
	return (
		<div className="App">
			<StatusChip type="active" />
			<StatusChip type="inactive" />
		</div>
	);
}

export default App;
