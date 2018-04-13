
import React, {Component} from 'react';
import moment from 'moment'

import TomogramListItem from './tomogramListItem';

//functions can be put under super and above render but variables can't?
class SearchResultGrid extends Component {
  constructor(props){
    super(props);
  }

  render(){

    const filterText = this.props.filterText;
    const filterDate = this.props.filterDate;

    const artifacts = [];

    console.log(this.props.artifacts)

    return(
      <div className="col-sm-10" id="searchresultsgrid">
        {this.props.artifacts.map((artifact) => <TomogramListItem Core={this.props.Core} artifact={artifact} />)}
      </div>
    )
  }
}


export default SearchResultGrid
