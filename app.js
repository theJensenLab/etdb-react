import React, { Component } from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import ReactDOM from 'react-dom';

import AppRoutes from './src/components/appRoutes.js';

import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import './src/assets/css/fontawesome-all.min.css'
import './src/assets/css/jensen.css'
import './src/assets/css/contact.css'
import './src/assets/css/special-typekit-fonts.css'
import './src/assets/css/custom.css'

import { OIPJS } from 'oip-js';

var Core = OIPJS({
	"OIPdURL": "https://snowflake.oip.fun/alexandria/v2",
	"indexFilters": {
		"publisher": "FTSTq8xx8yWUKJA5E3bgXLzZqqG9V6dvnr"
	}
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
