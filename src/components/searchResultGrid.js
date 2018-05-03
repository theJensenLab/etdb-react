import React, {Component} from 'react';
import moment from 'moment'
import Pagination from 'react-js-pagination';
import { BarLoader } from 'react-spinners';

import TomogramListItem from './tomogramListItem';

//CONSTANTS
const VIEWS = "views";
const TITLE = "title";
const SPECIMEN = "specimen";
const MICROSCOPIST = "microscopist";
const LAST_MODIFIED = "lastModified";
const DATE_TAKEN = "dateTaken";
const ANY_FIELD = "anyField";
const SPECIES = "speciesName";
const STRAIN = "strain";
const INSTITUTION = "institution";
const LAB = "lab";
const NOTES = "artNotes";
const CONTAINS = "contains";
const IS_EXACT = "isExact";
const STARTS_WITH = "startsWith";
const SIMPLE = "simple";
const AND = "and";
const OR = "or";
const NOT = "not";


class SearchResultGrid extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPage: 1
    }

    this.filterArtifacts = this.filterArtifacts.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.switchCase = this.switchCase.bind(this);
  }
  onPageChange(page){
    this.setState({currentPage: page});
  }
  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps){
      this.setState({currentPage: 1});
    }
  }

  switchCase(art, params, field)
  {
    if (art === undefined) {return false};
    if (art.getDetail(field) === undefined) {return false};
    switch (params.searchType)
    {
      case CONTAINS:
        return (art.getDetail(field).toLowerCase().indexOf(params.searchFor.toLowerCase()) >= 0)

      case IS_EXACT:
        return (art.getDetail(field).toLowerCase() === params.searchFor.toLowerCase())

      case STARTS_WITH:
        return (art.getDetail(field).toLowerCase().startsWith(params.searchFor.toLowerCase()))
    }
  }

  filterArtifacts(art, params) {
    if (params.searchOn == ANY_FIELD) {
      if (art === undefined ) {return false};
      const artifactString = JSON.stringify(art.toJSON());
      return (artifactString.toLowerCase().indexOf(params.searchFor.toLowerCase()) >= 0)
    } else {return this.switchCase(art, params, params.searchOn)}
  }

  render() {
    window.scrollTo(0,0)

    var artifacts = [];

    //STATE_CONSTANTS
    const filterText = this.props.filterText;
    const sortValue = this.props.sortValue;
    const flipSort = this.props.flipSort;
    const advancedSearchParams = this.props.advancedSearchParams;
    const advancedSearchToggleBool = this.props.advancedSearchToggleBool;


    var artifactsToFilter = this.props.artifacts;

    if (advancedSearchToggleBool) {
      //ADVANCED SEARCH FILTER
      for (const params of advancedSearchParams) {
//------------------------------------------------------
        switch (params.searchOp) {
          case (undefined):
          case (AND):
            if (artifacts.length > 0){
              artifacts = []
            };
            for (const art of artifactsToFilter){
              if (this.filterArtifacts(art, params)){
                artifacts.push(art);
              }
            }
            artifactsToFilter = artifacts;
            break;
          case (OR):
            for (const art of this.props.artifacts) {
              if (this.filterArtifacts(art, params) && artifacts.indexOf(art) === -1) {
                artifacts.push(art);
              }
            }
            artifactsToFilter = artifacts;
            break;
          case (NOT):
            if (artifacts.length > 0){
              artifacts = []
            };
            for ( var i = 0; i <= artifactsToFilter.length; i++) {
              if (!this.filterArtifacts(artifactsToFilter[i], params) && artifactsToFilter[i] !== undefined ) {
                artifacts.push(artifactsToFilter[i]);
              }
            }
            console.log(artifacts)
            break;
        }

      }
//------------------------------------------------------
    } else {
      //NORMAL SEARCH FILTER
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

    var pageArtifacts = [];
    var itemsPerPage = 100;
    var totalFullPages = Math.floor(artifacts.length / itemsPerPage);
    var itemsOnPartialPage = artifacts.length % itemsPerPage;

    var totalPages = totalFullPages;

    if (itemsOnPartialPage > 0){
      totalPages += 1;
    }

    for (var k = 0; k < itemsPerPage; k++){
      var artifactIndex = k + (itemsPerPage * (this.state.currentPage - 1));

      // Check if it exists
      if (artifacts[artifactIndex])
      pageArtifacts.push(<TomogramListItem Core={this.props.Core} artifact={artifacts[artifactIndex]} />)
    }

    return(
      <div className="col-sm-10" id="searchresultsgrid" style={{marginBottom: "-100px"}}>
        { this.props.artifacts.length === 0 ? "" : artifacts.length === 0 ? "" : <div className="col-sm-12">
          <h5>{artifacts.length} Results</h5>
        </div> }
        <div className="col-sm-12" style={{minHeight: "300px"}}>
          <center style={{marginTop: "150px", marginBottom: "-150px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
            { this.props.artifacts.length === 0 ?
              <BarLoader
                color={'#b60000'}
                width={-1}
                loading={true}
              />
              : artifacts.length === 0 ? <h4>No Results</h4> : ""}
            </center>
            {pageArtifacts}
          </div>
          <br />
          <center>
            <div className="row" style={{margin: "auto"}}>
              <Pagination onChange={this.onPageChange} activePage={this.state.currentPage} itemsCountPerPage={itemsPerPage} totalItemsCount={artifacts.length} pageRangeDisplayed={5} />
            </div>
          </center>
        </div>
      )
    }
  }


  export default SearchResultGrid
