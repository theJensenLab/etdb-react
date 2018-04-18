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
import CellenvelopeCollection from './CellenvelopeCollection.js'
import SurfacelayerCollection from './surfacelayerCollection.js'
import CellshapesCollection from './CellshapesCollection.js'
import CytoskeletalCollection from './cytoskeletalCollection.js'
import DNACollection from './dnaCollection.js'
import OutermembraneCollection from './outermembraneCollection.js'
import GasCollection from './gasCollection.js'
import FlagellaCollection from './flagellaCollection.js'
import TerminalCollection from './terminalCollection.js'
import PiliCollection from './piliCollection.js'
import MagnetosomesCollection from './magnetosomesCollection.js'
import ChemoreceptorCollection from './chemoreceptorCollection.js'
import SporesCollection from './sporesCollection.js'
import ContractileCollection from './contractileCollection.js'
import PhageCollection from './phageCollection.js'
import StorageCollection from './storageCollection.js'
import IntraCollection from './intraCollection.js'




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
                <Route path="/cellenvelope/:id" render={props => <CellenvelopeCollection Core={this.props.Core} {...props} />} />
                <Route path="/surfacelayer/:id" render={props => <SurfacelayerCollection Core={this.props.Core} {...props} />} />
                <Route path="/cellshapes/:id" render={props => <CellshapesCollection Core={this.props.Core} {...props} />} />
                <Route path="/cytoskeletal/:id" render={props => <CytoskeletalCollection Core={this.props.Core} {...props} />} />
                <Route path="/DNA/:id" render={props => <DNACollection Core={this.props.Core} {...props} />} />
                <Route path="/outermembrane/:id" render={props => <OutermembraneCollection Core={this.props.Core} {...props} />} />
                <Route path="/gasvesicles/:id" render={props => <GasCollection Core={this.props.Core} {...props} />} />
                <Route path="/flagella/:id" render={props => <FlagellaCollection Core={this.props.Core} {...props} />} />
                <Route path="/terminalorganelles/:id" render={props => <TerminalCollection Core={this.props.Core} {...props} />} />
                <Route path="/pili/:id" render={props => <PiliCollection Core={this.props.Core} {...props} />} />
                <Route path="/magnetosomes/:id" render={props => <MagnetosomesCollection Core={this.props.Core} {...props} />} />
                <Route path="/chemoreceptor/:id" render={props => <ChemoreceptorCollection Core={this.props.Core} {...props} />} />
                <Route path="/spores/:id" render={props => <SporesCollection Core={this.props.Core} {...props} />} />
                <Route path="/contractile/:id" render={props => <ContractileCollection Core={this.props.Core} {...props} />} />
                <Route path="/phage/:id" render={props => <PhageCollection Core={this.props.Core} {...props} />} />
                <Route path="/storage/:id" render={props => <StorageCollection Core={this.props.Core} {...props} />} />
                <Route path="/intra/:id" render={props => <IntraCollection Core={this.props.Core} {...props} />} />

                <Route path="/" render={props => <Home Core={this.props.Core} {...props} />} />
			</Switch>
		)
	}
}

export default AppRoutes;
