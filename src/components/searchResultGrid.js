import React, {Component} from 'react';
import moment from 'moment'
// import Infinite from 'react-infinite';

import TomogramListItem from './tomogramListItem';

class SearchResultGrid extends Component {
  render() {
    const artifacts = [];

    //STATE_CONSTANTS
    const filterText = this.props.filterText;
      //filter state is the full state of browse;
    const filterState = this.props.filterState;
    const sortValue = this.props.sortValue;
    const flipSort = this.props.flipSort;
    const advancedSearchParams = this.props.advancedSearchParams;
    const advancedSearchToggleBool = this.props.advancedSearchToggleBool;

    //CONSTANTS
    const VIEWS = "views";
    const TITLE = "title";
    const SPECIMEN = "specimen";
    const MICROSCOPIST = "microscopist";
    const LAST_MODIFIED = "lastModified";
    const DATE_TAKEN = "dateTaken";
    const ALL_FIELDS = "allFields";
    const SPECIES = "species";
    const STRAIN = "strain";
    const INSTITUTION = "institution";
    const LAB = "lab";
    const NOTES = "notes";
    const CONTAINS = "contains";
    const ISEXACT = "isExact";
    const STARTSWITH = "startsWIth";

    //FILTERS
    this.props.artifacts.forEach((artifact) => {
      const artifactString = JSON.stringify(artifact.toJSON());

      if (artifactString.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }


      //ADVANCED SEARCH

      for (const params of advancedSearchParams) {

        switch (params.searchOn) {

          case ALL_FIELDS:
            switch (params.searchType) {
              case CONTAINS:
                if (artifactString.toLowerCase().indexOf(params.searchFor.toLowerCase()) === -1) {
                  return;
                }
                break;
              case ISEXACT:

                break;
              case STARTSWITH:
                break;
            }
            break;

          case MICROSCOPIST:
            switch (params.searchType) {
              case CONTAINS:
                console.log(params.searchFor.toLowerCase());
                console.log()
                if (artifact.getDetail(MICROSCOPIST).toLowerCase().indexOf(params.searchFor.toLowerCase()) === -1) {
                  return;
                }
                break;
              case ISEXACT:
              case STARTSWITH:
            }
            break;

        }
      }



      artifacts.push(artifact)
    })



    //SORTS
    switch (sortValue) {
      case VIEWS:
        console.log(sortValue)
        break;
      case TITLE:
        console.log(sortValue)
        artifacts.sort( (a,b) => {
          var x = a.getTitle().toLowerCase();
          var y = b.getTitle().toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
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
      case MICROSCOPIST:
        console.log(sortValue);
        artifacts.sort( (a,b) => {
          if ((typeof b.getDetail("microscopist") === 'undefined' && typeof a.getDetail("microscopist") !== 'undefined') || a.getDetail("microscopist") < b.getDetail("microscopist")) {
          return -1;
          }
          if ((typeof a.getDetail("microscopist") === 'undefined' && typeof b.getDetail("microscopist") !== 'undefined') || a.getDetail("microscopist") > b.getDetail("microscopist")) {
              return 1;
          }
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
        {/* <Infinite containerHeight={1000} elementHeight={50}> */}
          {artifacts.map((artifact) => <TomogramListItem Core={this.props.Core} artifact={artifact} />)}
        {/* </Infinite> */}
      </div>
    )
  }
}


export default SearchResultGrid
