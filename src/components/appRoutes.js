import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import ReactDOM from 'react-dom';

import About from './about.js';
import Home from './home.js';
import Search from './search.js';

class AppRoutes extends Component {
	render(){
		return(
			<Switch>
				<Route path="/about" component={About}/>
				<Route path="/search" component={Search}/>
				<Route path="/" component={Home}/>
			</Switch>
		)
	}
}

export default AppRoutes;