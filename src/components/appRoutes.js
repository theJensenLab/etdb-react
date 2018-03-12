import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import ReactDOM from 'react-dom';

import About from './about.js';
import Home from './home.js';
import Search from './search.js';
import Contact from './contact.js';
import Featured from './featured.js';
import Browse from './browse.js';
import TomogramView from './tomogramView.js';

class AppRoutes extends Component {
	render(){
		return(
			<Switch>
				<Route path="/about" component={About}/>
				<Route path="/search" component={Search}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/featured" component={Featured}/>
				<Route path="/browse" component={Browse}/>
				<Route path="/view" component={TomogramView}/>
				<Route path="/" component={Home}/>
			</Switch>
		)
	}
}

export default AppRoutes;