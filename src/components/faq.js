import React, { Component } from 'react'
import { Button, Panel, PanelGroup } from 'react-bootstrap'

import logo from '../assets/img/etdb-logo.png'

class FAQ extends Component {
  constructor(props){
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    
    this.state = {
      activeKey: null
    };
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
        <div id="space"></div>
        <div id="faq">
          <h3>Facts & Questions</h3>
          <PanelGroup accordion activeKey={this.state.activeKey} id="faqPanel">
            <Panel eventKey='1'>
              <Button onClick={() => this.handleSelect('1')} className="accordion">What is this database?</Button>
              <Panel.Body collapsible>
                <p>The Caltech Tomography Database is a public repository of cryo-electron tomography datasets (tilt-series and reconstructions) of cells. These datasets were acquired by the <a target="blank" href="http://www.jensenlab.caltech.edu">Jensen Lab</a> at Caltech over the past 15 years. Currently, [nearly 90] [needs to be adjusted based on what data is made public] species of bacteria and archaea are represented, and this number will keep climbing.</p>
              </Panel.Body>
            </Panel>
            <Panel eventKey='2'>
              <Button onClick={() => this.handleSelect('2')} className="accordion">What is cryo-electron tomography?</Button>
              <Panel.Body collapsible>
                <p>Cryo-electron tomography (CET) is an imaging technique used to produce high-resolution (~5 nm) three-dimensional views of samples, typically biological macromolecules and cells. CET is a specialized application of cryogenic transmission electron microscopy (cryo-EM) in which samples are imaged as they are tilted, resulting in a series of 2D images (a tilt-series) that can be combined to produce a 3D reconstruction, or tomogram. (For a similar concept, think of a CT scan of the human body.) In contrast to other electron tomography techniques, samples are immobilized in non-crystalline ("vitreous") ice and imaged under cryogenic conditions (less than −150 °C), allowing them to be imaged without dehydration or chemical fixation, which could otherwise disrupt or distort biological structures.</p>
              </Panel.Body>
            </Panel>
            <Panel eventKey='3'>
              <Button onClick={() => this.handleSelect('3')} className="accordion">Why were these tomograms collected?</Button>
              <Panel.Body collapsible>
                <p>Cryo-electron tomography reveals the ultrastructural (beyond the resolution of standard light microscopy) details of cells in an essentially native state. These details can answer many open questions in cell biology.  What novel structures can we find inside cells?  For the structures we already know about, what do they look like at high-resolution inside the cell and where are they found? Often, insights into the function of a cellular machine come immediately from looking at its structure.</p>
  
                <p>Cryo-electron tomography reveals the ultrastructural details of cells. These details can answer many open questions in cell biology.  What novel structures can we find inside cells?  For the structures we already know about, what do they look like at high-resolution inside the cell and where are they found? Often, insights into the function of a cellular machine come immediately from simply looking at its structure.</p>
              </Panel.Body>
            </Panel>
            <Panel eventKey='4'>
              <Button onClick={() => this.handleSelect('4')} className="accordion">Have any scientific discoveries come from these tomograms?</Button>
              <Panel.Body collapsible>
                <p>These tomograms helped reveal the existence and variety of prokaryotic cytoskeletons and many of the macromolecular machines that power motility, warfare, and other complex behaviors of bacterial and archaeal cells. For a list of the scientific papers that resulted from these tomograms, click <a target="blank" href="http://www.jensenlab.caltech.edu/publications">here</a>.</p>
              </Panel.Body>
            </Panel>
            <Panel eventKey='5'>
              <Button onClick={() => this.handleSelect('5')} className="accordion">Can I use these datasets?</Button>
              <Panel.Body collapsible>
                <p>Yes! By making these tomograms publicly available, we hope to encourage the scientific community to use them for further discovery. Check out our <a href="/challenges">Scientific Challenges</a> page here for what we think are particularly ripe areas for advancement.</p>
              </Panel.Body>
            </Panel>
            <Panel eventKey='6'>
              <Button onClick={() => this.handleSelect('6')} className="accordion">How do I cite data in this database?</Button>
              <Panel.Body collapsible>
                <p>These tomograms helped reveal the existence and variety of prokaryotic cytoskeletons and many of the macromolecular machines that power motility, warfare, and other complex behaviors of bacterial and archaeal cells. </p>

                <p>By making these tomograms publicly available, we hope to encourage the scientific community to use them for further discovery. Check out our Scientific Challenges page here for what we think are particularly ripe areas for advancement.</p>
              </Panel.Body>
            </Panel>
          </PanelGroup>
        </div>
      </div>
    )
  }
}

export default FAQ;
