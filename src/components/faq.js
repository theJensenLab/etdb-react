import React, { Component } from 'react'
import { Button, Panel, PanelGroup } from 'react-bootstrap'

import logo from '../assets/img/etdb-logo.png'

class FAQ extends Component {
  constructor(props){
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    
    this.state = {
      activeKey: null,
      numberOfTomograms: 0,
      numberOfSpecies: 0
    };

    this.getTomograms = this.getTomograms.bind(this);
    this.countTomograms = this.countTomograms.bind(this);
  }
  componentDidMount(){
    this.getTomograms();
  }
  getTomograms(){
    this.props.Core.Network.OIPdRequest("get", "/research/tomogram/summary", {}, this.countTomograms, console.error)
  }
  countTomograms(info){
    var numTomos = "(Loading...)";
    var numSpecies = "(Loading...)";

    if (info && info.data){
      numTomos = info.data.total || "(Loading...)";
      numSpecies = info.data.species || "(Loading...)";

      if (info.data.publishers && info.data.publishers.FTSTq8xx8yWUKJA5E3bgXLzZqqG9V6dvnr){
        numTomos = info.data.publishers.FTSTq8xx8yWUKJA5E3bgXLzZqqG9V6dvnr
      }
    }
    this.setState({numberOfTomograms: numTomos, numberOfSpecies: numSpecies});
  }
  handleSelect(activeKey) {
    if (activeKey !== this.state.activeKey)
      this.setState({ activeKey });
    else
      this.setState({ activeKey: null });
  }

  render(){
    return(
      <div>
        <a name="faq"></a>
        
        <div id="faq">
          <h3>FAQs</h3>
          <PanelGroup accordion activeKey={this.state.activeKey} id="faqPanel">
            <Panel eventKey='1'>
              <Button onClick={() => this.handleSelect('1')} className="accordion">What is this database?</Button>
              <Panel.Body collapsible>
                <p>The Caltech Tomography Database is a public repository of {this.state.numberOfTomograms} cryo-electron tomography datasets (tilt-series and reconstructions) of cells. These datasets were acquired by the <a target="blank" href="http://www.jensenlab.caltech.edu">Jensen Lab</a> at Caltech over the past 15 years. Currently, {this.state.numberOfSpecies} species of bacteria and archaea are represented, and this number will keep climbing.</p>
              </Panel.Body>
            </Panel>
            <Panel eventKey='2'>
              <Button onClick={() => this.handleSelect('2')} className="accordion">Why were these tomograms collected?</Button>
              <Panel.Body collapsible>
                <p>Cryo-electron tomography reveals the ultrastructural (beyond the resolution of standard light microscopy) details of cells in an essentially native state. These details can answer many open questions in cell biology.  What novel structures can we find inside cells?  For the structures we already know about, what do they look like at high-resolution inside the cell and where are they found? Often, insights into the function of a cellular machine come immediately from looking at its structure.</p>
              </Panel.Body>
            </Panel>
            <Panel eventKey='3'>
              <Button onClick={() => this.handleSelect('3')} className="accordion">Have any scientific discoveries come from these tomograms?</Button>
              <Panel.Body collapsible>
                <p>These tomograms helped reveal the existence and variety of prokaryotic cytoskeletons and many of the macromolecular machines that power motility, warfare, and other complex behaviors of bacterial and archaeal cells. For a list of the scientific papers that resulted from these tomograms, click <a target="blank" href="http://www.jensenlab.caltech.edu/publications">here</a>.</p>
              </Panel.Body>
            </Panel>
            <Panel eventKey='4'>
              <Button onClick={() => this.handleSelect('4')} className="accordion">Can I use these datasets?</Button>
              <Panel.Body collapsible>
                <p>Yes! By making these tomograms publicly available, we hope to encourage the scientific community to use them for further discovery. Check out our <a href="/challenges">Scientific Challenges</a> page here for what we think are particularly ripe areas for advancement.</p>
              </Panel.Body>
            </Panel>
            <Panel eventKey='5'>
              <Button onClick={() => this.handleSelect('5')} className="accordion">How do I cite data in this database?</Button>
              <Panel.Body collapsible>
                <p>Please cite Ortega et al. (manuscript in preparation, check back soon) </p>
              </Panel.Body>
            </Panel>
          </PanelGroup>
        </div>
      </div>
    )
  }
}

export default FAQ;
