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
import Challenges from './challenges.js';
import Featured from './featured.js';
import Browse from './browse.js';
import TomogramView from './tomogramView.js';
import CarboCollection from './carboCollection.js'

class AppRoutes extends Component {
	render(){
		return(
			<Switch>
				<Route path="/about" render={props => <About Core={this.props.Core} {...props} />} />
				<Route path="/search/:id" render={props => <Search Core={this.props.Core} {...props} />} />
				<Route path="/contact" render={props => <Contact Core={this.props.Core} {...props} />} />
				<Route path="/featured" render={props => <Featured Core={this.props.Core} {...props} />} />
                <Route path="/challenges" render={props => <Challenges Core={this.props.Core} {...props} />} />
				<Route path="/browse" render={props => <Browse Core={this.props.Core} {...props} />} />
				<Route path="/tomogram/:id" render={props => <TomogramView Core={this.props.Core} {...props} />} />
				<Route path="/carboxysomes/:id" render={props => <CarboCollection Core={this.props.Core} {...props} />} />
				<Route path="/" render={props => <Home Core={this.props.Core} {...props} />} />
			</Switch>
		)
	}
}

export default AppRoutes;
