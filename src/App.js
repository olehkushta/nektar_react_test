import React from 'react';

import AppHeader from './components/header';
import AppMain from './components/main';
import './App.css';

class App extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			selectedLang: "en",
			scrollClass: ""
		}
	}

	changeLanguage = () => {
		this.setState({selectedLang: this.state.selectedLang == "en" ? "fr" : "en"});
	}

	wheel = (e) => {
		const currPos = window.scrollY;
		let classes = "";

		if (currPos > 200) {
			classes = "box-shadow white-bg";
		}
		if (currPos > 1200) {
			classes = "box-shadow black-bg";
		}
		this.setState({ scrollClass:  classes})
	}

	render() {
		return (
			<div className="App" onWheel = {(e) => this.wheel(e)}>
				<AppHeader lang={this.state.selectedLang} langChange={this.changeLanguage} scrollClass={this.state.scrollClass}></AppHeader>
				<AppMain lang={this.state.selectedLang}></AppMain>
			</div>
		);
	}
}

export default App;
