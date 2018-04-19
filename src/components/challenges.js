import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

class Challenges extends Component {
	render(){
		return(
			<div>
				<Header />
                <div id="space150"></div>
				<div className="row challengerow" id="about">
				  <div className="col-sm-8">
                  <h4>Scientific Challenges</h4>
				    <h2>In addition to its value for cell biologists, the ETDB offers a massive dataset for software developers to develop, test and improve image processing algorithms. Below are some ideas for areas particularly ripe for improvement.</h2>
				  </div>

                   <div className="col-sm-4">
                   <img src="/src/assets/img/eye.png"/>				  </div>
				</div>
                <div id="longreddiv"></div>
                <div className="row challengerow" id="about">
               
				  <div className="col-sm-9">
                  <h3>1. Software to automatically segment cell boundaries
</h3>
				      <div id="reddiv"></div>				      
                        <p className="goal challenge">The goal is to develop software that can automatically segment the boundaries of cells in electron tomograms.  A particular challenge is distinguishing such boundaries from the circular holes in the support grids.</p>
 
                        <p className="challenge">All cells are enclosed by at least one membrane. There are two classes of bacteria – Gram-positive and Gram-negative. Gram-positive bacteria have a single membrane and a thick cell wall.  Gram-negative bacteria have two membranes and a thin cell wall between. Gram-negative bacteria, as well as archaea, may also have an S-layer.  [Refer to some tomograms in the database for examples of these types.]  </p>

                        <p className="challenge">This envelope architecture is fair pre-knowledge in segmenting a given cell. Also fair is the use of a training set where a user marks a section of membrane to use as a template. Finally, different species have different, and well-known, curvatures which most cells of that species will exhibit. It is also fair to use this knowledge of curvature in algorithm development.</p>
  
                        
				    </div>

				  <div className="col-sm-3"> 
               
                  <p className="note"><b>Note:</b> Because of the "missing wedge" of information in tomograms, it's difficult to detect the cell boundaries at the top and bottom of a tomogram.  If an algorithm can detect the cell membrane along the sides, the best approach may be to simply approximate the top and bottom with an ellipsoid. </p>
                  
                  <p className="note"><b>Also note:</b> Many tomograms capture only part of a cell due to the high magnification; segmentation software should be smart enough to recognize the boundary of the tomogram and realize that it's the edge of the tomogram, not the edge of the cell.</p>
                  </div>
				</div>


                <div id="longreddiv"></div>

                  <div className="row challengerow" id="about">
                
				  <div className="col-sm-9">	
                  <h3>2. Software to automatically segment complexes in cells
</h3>
				      <div id="reddiv"></div>			      
                        <p className="goal challenge">The goal is to develop fast algorithms to locate complex structures within the cell such as ribosomes, storage granules, cytoskeletal filaments, filament bundles, chemoreceptor arrays, patterned DNA bundles, flagellar motors, pili, etc.</p>
 
                        <p className="challenge">A good fraction of the interior of a cell is occupied by small proteins and metabolites randomly diffusing about one another, which look like a fairly random texture of different gray-levels in tomograms. The ideal software would automatically detect anything different than that. We already know about many large objects in cells and what they look like, but we also know that there are many more still to be discovered.
 </p>
                          
				    </div>

				  <div className="col-sm-3"> 
               
                  <p className="note"><b>Related challenge:</b> Like the uncharacterized structures reported in <a target="blank" href="http://jb.asm.org/content/early/2017/06/07/JB.00100-17.long">this paper</a>, we expect that there are many other structures yet to be found in the data and we challenge anybody to find some examples.  If you do find something new, we'd love to hear about it [link to contact] and discuss potential ways to figure out what it really is.
 </p>
                  </div>
				</div>

                       <div id="longreddiv"></div>

<div className="row" id="about">

<div className="col-sm-9">
<h3>3.  Improved software to find and track fiducial markers
</h3>
    <div id="reddiv"></div>				      
      <p className="goal challenge">The goal is to develop software that can locate, in a tilt-series, all the gold beads used as fiducial markers for alignment during reconstruction. </p>

      <p className="challenge">After many years of effort by others in our field, we have reasonably good software to find the beads in each image of a tilt-series, but there are still enough mistakes that a human has to go through the tilt-series by hand, identifying and correcting incorrectly-tracked beads. There's a great need in the field for robust software that gets this right all the time.

</p>
        
  </div>

<div className="col-sm-3"> 


</div>
</div>

				<Footer />
			</div>
		)
	}
}

export default Challenges;