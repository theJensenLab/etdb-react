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
    const VIEWS_HTL = "viewsHtL";
    const VIEWS_LTH = "viewsLtH";

    const SPECIMEN_ATZ = "specimenAtZ";
    const SPECIMEN_ZTA = "specimenZtA";

    const USER_ATZ = "userAtZ";
    const USER_ZTA = "userZtA";

    const LAST_MODIFIED_NTL = "lastModifiedNtL";
    const LAST_MODIFIED_LTN = "lastModifiedLtN";

    const DATE_TAKEN_NTL = "dateTakenNtL";
    const DATE_TAKEN_LTN = "dateTakenLtN";


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
    switch (sortValue) {
      case VIEWS_HTL:
        console.log(sortValue)
        break;
      case VIEWS_LTH:
        console.log(sortValue);
        break;
      case SPECIMEN_ATZ:
        artifacts.sort( (a,b) => {
          var x = a.getDetail("speciesName").toLowerCase();
          var y = b.getDetail("speciesName").toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        break;
      case SPECIMEN_ZTA:
        artifacts.sort( (a,b) => {
          var x = a.getDetail("speciesName").toLowerCase();
          var y = b.getDetail("speciesName").toLowerCase();
          if (x > y) {return -1;}
          if (x < y) {return 1;}
          return 0;
        });
        break;
      case USER_ATZ:
        console.log(sortValue)
        break;
      case USER_ZTA:
        console.log(sortValue);
        break;
      case LAST_MODIFIED_NTL:
        artifacts.sort( (a,b) => {return b.getTimestamp()-a.getTimestamp()});
        break;
      case LAST_MODIFIED_LTN:
        artifacts.sort( (a,b) => {return a.getTimestamp()-b.getTimestamp()});
        break;
      case DATE_TAKEN_NTL:
        artifacts.sort( (a,b) => {return b.getDetail("date")-a.getDetail("date")});
        break;
      case DATE_TAKEN_LTN:
        artifacts.sort( (a,b) => {return a.getDetail("date")-b.getDetail("date")});
        break;
    }


    // console.log(artifacts);

    return(
      <div className="col-sm-10" id="searchresultsgrid">
        {artifacts.map((artifact) => <TomogramListItem Core={this.props.Core} artifact={artifact} />)}
      </div>
    )
  }
}


export default SearchResultGrid
// {this.props.artifacts.map((artifact) => <TomogramListItem Core={this.props.Core} artifact={artifact} />)}
