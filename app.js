import React, { Component } from 'react'
import {
  Router
} from 'react-router-dom'
import ReactDOM from 'react-dom';
import MatomoReactRouter from 'piwik-react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import AppRoutes from './src/components/appRoutes.js';

import './node_modules/bootstrap/dist/css/bootstrap.min.css'
import './src/assets/css/fontawesome-all.min.css'
import './src/assets/css/jensen.css'
import './src/assets/css/contact.css'
import './src/assets/css/special-typekit-fonts.css'
import './src/assets/css/custom.css'

import { OIPJS } from 'oip-js';

var history = createBrowserHistory();

var Core = OIPJS({
	"indexFilters": {
		"publisher": "FTSTq8xx8yWUKJA5E3bgXLzZqqG9V6dvnr"
	}
});

var Matomo = MatomoReactRouter({
	url: 'https://etdb.caltech.edu/matomo',
	siteId: 1
});

class App extends Component {
	render(){
		var matHistory = Matomo.connectToHistory(history);
		return(
			<Router history={matHistory}>
				<AppRoutes Core={Core} history={matHistory} />
			</Router>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('main'));

export default App;
