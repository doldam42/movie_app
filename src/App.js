import react from "react";
import PropTypes from "prop-types";

class App extends react.Component {
	state = {
		isLoading: true
	};
	
	componentDidMount() {
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 6000);
	}
	render() {
		const { isLoading } = this.state;
		return <div>{isLoading ? "loading" : "we are ready!"}</div>;
	}
}

export default App;
