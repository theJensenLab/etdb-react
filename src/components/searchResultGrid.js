import React, {Component} from 'react';
import moment from 'moment'
// import Infinite from 'react-infinite';

import TomogramListItem from './tomogramListItem';

class SearchResultGrid extends Component {
  constructor(props) {
    super(props);

    this.filterArtifacts = this.filterArtifacts.bind(this);
  }

  filterArtifacts(art, params) {

  }

  render() {
    var artifacts = [];

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

    var artifactsToFilter = this.props.artifacts;

    if (advancedSearchToggleBool) {
      for (const params of advancedSearchParams) {
        if (artifacts.length > 0){
          artifacts = [];
        }

        for (const art of artifactsToFilter){
          if (this.filterArtifacts(art, params)){
            artifacts.push(art);
          }
        }

        artifactsToFilter = artifacts;
      }
    } else {

    this.props.artifacts.forEach((artifact) => {
      const artifactString = JSON.stringify(artifact.toJSON());

      if (artifactString.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      artifacts.push(artifact)
    })

  }


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
