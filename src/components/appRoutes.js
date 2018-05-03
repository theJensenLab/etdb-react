import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import ReactDOM from 'react-dom';

import About from './about.js';
import Home from './home.js';
import Contact from './contact.js';
import Challenges from './challenges.js';
import Featured from './featured.js';
import Browse from './browse.js';
import TomogramView from './tomogramView.js';
import FeaturedCollection from './FeaturedCollection.js'
import TermsAndConditions from './termsAndConditions.js'
import NotFoundPage from './NotFoundPage.js'


class AppRoutes extends Component {
	render(){
		return(
			<Switch>
				<Route path="/about" render={props => <About Core={this.props.Core} {...props} />} />
				<Route path="/contact" render={props => <Contact Core={this.props.Core} {...props} />} />
				<Route path="/featured" exact render={props => <Featured Core={this.props.Core} {...props} />} />
                <Route path="/challenges" render={props => <Challenges Core={this.props.Core} {...props} />} />
				<Route path="/browse" render={props => <Browse Core={this.props.Core} {...props} />} />
				<Route path="/tomogram/:id" render={props => <TomogramView Core={this.props.Core} {...props} />} />
				<Route path="/featured/:id" render={props => <FeaturedCollection Core={this.props.Core} {...props} />} />
				<Route path="/terms" render={props => <TermsAndConditions Core={this.props.Core} {...props} />} />

                <Route path="/" exact render={props => <Home Core={this.props.Core} {...props} />} />

                <Route render={props => <NotFoundPage />} />
			</Switch>
		)
	}
}

export default AppRoutes;
