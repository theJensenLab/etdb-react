
import React, {Component} from 'react';
import moment from 'moment'

import TomogramListItem from './tomogramListItem';

//functions can be put under super and above render but variables can't?
class SearchResultGrid extends Component {
  render() {
    const artifacts = [];
    const filterText = this.props.browseState.filterText;
    this.props.artifacts.forEach((artifact) => {
      let name = artifact.getTitle();
      console.log(name);
      if (name.indexOf(filterText) === -1) {
        return;
      }
      artifacts.push(
        <TomogramListItem
          Core={this.props.Core}
          artifact={artifact}
        />)

    })
    console.log(artifacts);
    return(
      <div className="col-sm-10" id="searchresultsgrid">
        {artifacts}
      </div>
    )
  }
}


export default SearchResultGrid
  // {this.props.artifacts.map((artifact) => <TomogramListItem Core={this.props.Core} artifact={artifact} />)}
