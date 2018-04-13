
import React, {Component} from 'react';
import moment from 'moment'

import TomogramListItem from './tomogramListItem';

//functions can be put under super and above render but variables can't?
class SearchResultGrid extends Component {

  render(){

    const filterText = this.props.browseState.filterText;
    console.log(this.props.browseState);

    return(
      <div className="col-sm-10" id="searchresultsgrid">
        {this.props.artifacts.map((artifact) => <TomogramListItem Core={this.props.Core} artifact={artifact} />)}
      </div>
    )
  }
}


export default SearchResultGrid
