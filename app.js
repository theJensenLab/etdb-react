import React, { Component } from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import ReactDOM from 'react-dom';

import AppRoutes from './src/components/appRoutes.js';

import './src/assets/css/jensen.css'
import './src/assets/css/boots-bones.css'
import './src/assets/css/contact.css'

class App extends Component {
	render(){
		return(
			<Router>
				<AppRoutes />
			</Router>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('main'));

export default App;