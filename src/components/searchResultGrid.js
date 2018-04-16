
import React, {Component} from 'react';
import moment from 'moment'

import TomogramListItem from './tomogramListItem';

//functions can be put under super and above render but variables can't?
//why doesn't this work if I push the individual artifacts into the artifact array
class SearchResultGrid extends Component {
  render() {
    const artifacts = [];
    const filterText = this.props.filterText;
    const filterState = this.props.filterState;
    // const specimenType = artifact.specimenType();


    //FILTERS
    this.props.artifacts.forEach((artifact) => {
      const name = artifact.getTitle();
      const timeStamp = artifact.getTimestamp();
      const ogDate = artifact.getDetail("date");
      console.log("Timestamp: ", timeStamp);
      console.log("Date: ", ogDate);

      if (name.indexOf(filterText) === -1) {
        return;
      }

      // if (filterState.bacteria && specimenType.lower() === "bacteria"){
      // }

      if (filterState.bacteria){
        // artifacts.push(
        //   <TomogramListItem
        //     Core={this.props.Core}
        //     artifact={artifact}
        //   />)
        return;
      } else if (filterState.archaea) {
        // artifacts.push(
        //   <TomogramListItem
        //     Core={this.props.Core}
        //     artifact={artifact}
        //   />)
        return;
      } else if (filterState.eukaryotes) {
        // artifacts.push(
        //   <TomogramListItem
        //     Core={this.props.Core}
        //     artifact={artifact}
        //   />)
        return;
      } else console.log()

      //can't do: artifacts.push(artifact)
      artifacts.push(
        <TomogramListItem
          Core={this.props.Core}
          artifact={artifact}
        />)
    })

    //SORTS
    if (filterState.dateTaken) {
      artifacts.sort();
    }


    return(
      <div className="col-sm-10" id="searchresultsgrid">
        {artifacts}
      </div>
    )
  }
}


export default SearchResultGrid
  // {this.props.artifacts.map((artifact) => <TomogramListItem Core={this.props.Core} artifact={artifact} />)}
