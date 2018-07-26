import React from 'react';
import 'normalize.css';
import './styles.css'

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			config: {}
		};
	}

	actions = {
		coreMessageEmit: (type, message) => {
			if (type === 'error') {
				console.error(message);
				return;
			}
			console.log(message);
		},
		loadSettings: () => {
			// fetch(`${process.env.REACT_APP_API_URL}/api`, {
			//     method: 'GET',
			//     mode: 'cors'
			// }).then((res) => {
			//     if (res.ok) {
			//         res
			//             .json()
			//             .then((body) => {
			//                 this.setState({batches: body})
			//             });
			//     } else {
			//         res
			//             .text()
			//             .then(text => this.actions.coreMessageEmit('error', `Error: ${text}`));
			//     }
			// }).catch(err => this.actions.coreMessageEmit('error', `Error: ${err}`));

			setTimeout(() => {
				this.setState({
						
				});
			}, 500);
		},
	}

	componentWillMount() {
		this.actions.loadConfig();
	}



	render() {
		console.log('this.state', this.state)

		return (
			<div className="app">
				<div className="content">
					Content
				</div>
			</div>
		);
	}
}

export default App;
