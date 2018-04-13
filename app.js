import React, { Component } from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import ReactDOM from 'react-dom';

import AppRoutes from './src/components/appRoutes.js';

import './src/assets/css/bootstrap.css'
import './src/assets/css/jensen.css'
import './src/assets/css/contact.css'
import './src/assets/css/special-typekit-fonts.css'

import { OIPJS } from 'oip-js';


//what's this do?
var Core = OIPJS({'artifactFilters': [
	function(artifact){
		if (artifact.getType() === "Research" && artifact.getSubtype() === "Tomogram"){
			return true;
		} else {
			return false;
		}
	}]
});

class App extends Component {
	render(){
		return(
			<Router>
				<AppRoutes Core={Core} />
			</Router>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('main'));

export default App;
