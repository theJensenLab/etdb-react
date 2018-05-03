import React, { Component } from 'react'
import {
  BrowserRouter
} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Analytics from 'react-router-ga';

import AppRoutes from './src/components/appRoutes.js';

import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import './src/assets/css/fontawesome-all.min.css'
import './src/assets/css/jensen.css'
import './src/assets/css/contact.css'
import './src/assets/css/special-typekit-fonts.css'
import './src/assets/css/custom.css'

import { OIPJS } from 'oip-js';

var Core = OIPJS({
	"indexFilters": {
		"publisher": "FTSTq8xx8yWUKJA5E3bgXLzZqqG9V6dvnr"
	}
});

class App extends Component {
	render(){
		return(
			<BrowserRouter>
				<Analytics id="UA-117866137-1" debug>
					<AppRoutes Core={Core} />
				</Analytics>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('main'));

export default App;
