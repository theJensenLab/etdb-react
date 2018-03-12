import React, { Component } from 'react'

import Header from './header.js'
import Footer from './footer.js'

import TomogramListItem from './tomogramListItem.js'

class Browse extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className="row" id="browsedatabase">
					<div className="col-sm-2">
						<div id="filters"></div>
						<input className="form-control" type="text" placeholder="Search for..."/>
						<div id="reddiv"></div><b>Filters</b>
						<p>+ Bacteria</p>
						<p>+ Archaea</p>
						<p>+ Eukaryotes</p>
					</div>
					<div className="col-sm-10" id="searchresultsgrid">
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
						<TomogramListItem />
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Browse;