
import React, {Component} from 'react';
import moment from 'moment'

import TomogramListItem from './tomogramListItem';

//functions can be put under super and above render but variables can't?
//why doesn't this work if I push the individual artifacts into the artifact array
class SearchResultGrid extends Component {
  render() {
    const artifacts = [];

    //STATE_CONSTANTS
    const filterText = this.props.filterText;
    const filterState = this.props.filterState;
    const sortValue = this.props.sortValue;
    // const specimenType = artifact.specimenType();


    //SORT_CONSTANTS
    const MOST_VIEWED = "mostViewed";
    const SPECIMEN = "specimen";
    const USER = "user";
    const LAST_MODIFIED = "lastModified";
    const DATE_TAKEN = "dateTaken";

    //FILTERS
    this.props.artifacts.forEach((artifact) => {
      const name = artifact.getTitle();
      const timeStamp = artifact.getTimestamp();
      const date = artifact.getDetail("date");
      // console.log("Timestamp: ", timeStamp);
      // console.log("Date: ", date);

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
      artifacts.push(artifact)
    })


    //SORTS
    if (sortValue === DATE_TAKEN) {
      artifacts.sort( (a,b) => {return a.getDetail("date")-b.getDetail("date")});
    } else if (sortValue === LAST_MODIFIED) {
      artifacts.sort( (a,b) => {return a.getTimestamp()-b.getTimestamp()});
    }


    return(
      <div className="col-sm-10" id="searchresultsgrid">
        {artifacts.map((artifact) => <TomogramListItem Core={this.props.Core} artifact={artifact} />)}
      </div>
    )
  }
}


export default SearchResultGrid
  // {this.props.artifacts.map((artifact) => <TomogramListItem Core={this.props.Core} artifact={artifact} />)}
