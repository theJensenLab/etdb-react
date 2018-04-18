import React, {Component} from 'react';
import moment from 'moment'

import TomogramListItem from './tomogramListItem';

class SearchResultGrid extends Component {
  render() {
    const artifacts = [];

    //STATE_CONSTANTS
    const filterText = this.props.filterText;
      //filter state is merely the full state of browse;
    const filterState = this.props.filterState;
    const sortValue = this.props.sortValue;
    const flipSort = this.props.flipSort;

    //SORT_CONSTANTS
    const VIEWS = "views";
    const SPECIMEN = "specimen";
    const USER = "user";
    const LAST_MODIFIED = "lastModified";
    const DATE_TAKEN = "dateTaken";


    //FILTERS
    this.props.artifacts.forEach((artifact) => {
      if (name.indexOf(filterText) === -1) {
        return;
      }

      // if (filterState.bacteria && specimenType.lower() === "bacteria"){}

      if (filterState.bacteria){
        // artifacts.push(
        //   <TomogramListItem
        //     Core={this.props.Core}
        //     artifact={artifact}
        //   />)
        // return;
      } else if (filterState.archaea) {
        // artifacts.push(
        //   <TomogramListItem
        //     Core={this.props.Core}
        //     artifact={artifact}
        //   />)
        // return;
      } else if (filterState.eukaryotes) {
        // artifacts.push(
        //   <TomogramListItem
        //     Core={this.props.Core}
        //     artifact={artifact}
        //   />)
        // return;
      } else console.log()

      artifacts.push(artifact)
    })

    //SORTS
    switch (sortValue) {
      case VIEWS:
        console.log(sortValue)
        break;
      case SPECIMEN:
        console.log(sortValue);
        artifacts.sort( (a,b) => {
          var x = a.getDetail("speciesName").toLowerCase();
          var y = b.getDetail("speciesName").toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        break;
      case USER:
        console.log(sortValue);
        artifacts.sort( (a,b) => {
          //adding .toLowerCase() throws error
          var x = a.getDetail("microscopist");
          var y = b.getDetail("microscopist");
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        break;
      case LAST_MODIFIED:
        console.log(sortValue);
        artifacts.sort( (a,b) => {return b.getTimestamp()-a.getTimestamp()});
        break;
      case DATE_TAKEN:
        console.log(sortValue);
        artifacts.sort( (a,b) => {return b.getDetail("date")-a.getDetail("date")});
        break;
      default:
        artifacts.sort( (a,b) => {return b.getTimestamp()-a.getTimestamp()});

    }


    if (flipSort === true) {artifacts.reverse()};

    return(
      <div className="col-sm-10" id="searchresultsgrid">
        {artifacts.map((artifact) => <TomogramListItem Core={this.props.Core} artifact={artifact} />)}
      </div>
    )
  }
}


export default SearchResultGrid
// {this.props.artifacts.map((artifact) => <TomogramListItem Core={this.props.Core} artifact={artifact} />)}
