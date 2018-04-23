import React, {Component} from 'react';
import moment from 'moment'
import Pagination from 'react-js-pagination';
import { BarLoader } from 'react-spinners';

import TomogramListItem from './tomogramListItem';



class SearchResultGrid extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPage: 1
    }

    this.filterArtifacts = this.filterArtifacts.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }
  onPageChange(page){
    this.setState({currentPage: page});
  }
  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps){
      this.setState({currentPage: 1});
    }
  }
  filterArtifacts(art, params, constants)
  {
    switch (params.searchOn)
    {
//--------------------------------------------------------------------------------------------------------------------
      case constants.ALL_FIELDS:
      const artifactString = JSON.stringify(art.toJSON());

      if (artifactString.toLowerCase().indexOf(params.searchFor.toLowerCase()) >= 0) {
        return true;
      } else {return false}
        // switch (params.searchType)
        // {
        //   case constants.CONTAINS:
        //     if (art.getDetail(constants.MICROSCOPIST).toLowerCase().indexOf(params.searchFor.toLowerCase()) >= 0)
        //     {
        //       return true
        //     } else {return false}
        //     break;
        //   case constants.IS_EXACT:
        //     return (art.getDetail(constants.MICROSCOPIST).toLowerCase() === params.searchFor.toLowerCase())
        //     break;
        //   case constants.STARTS_WITH:
        //      return (art.getDetail(constants.MICROSCOPIST).toLowerCase().startsWith(params.searchFor.toLowerCase()))
        //      break;
        // }
        break;
//--------------------------------------------------------------------------------------------------------------------
      case constants.MICROSCOPIST:
        switch (params.searchType)
        {
          case constants.CONTAINS:
            if (art.getDetail(constants.MICROSCOPIST).toLowerCase().indexOf(params.searchFor.toLowerCase()) >= 0)
            {
              return true
            } else {return false}
            break;
          case constants.IS_EXACT:
            return (art.getDetail(constants.MICROSCOPIST).toLowerCase() === params.searchFor.toLowerCase())
            break;
          case constants.STARTS_WITH:
             return (art.getDetail(constants.MICROSCOPIST).toLowerCase().startsWith(params.searchFor.toLowerCase()))
             break;
        }
        break;
//--------------------------------------------------------------------------------------------------------------------
      case constants.SPECIES:
        switch (params.searchType)
        {
          case constants.CONTAINS:
            if (art.getDetail(constants.SPECIES).toLowerCase().indexOf(params.searchFor.toLowerCase()) >= 0)
            {
              return true
            } else {return false}
            break;
          case constants.IS_EXACT:
            return (art.getDetail(constants.SPECIES).toLowerCase() === params.searchFor.toLowerCase())
            break;
          case constants.STARTS_WITH:
             return (art.getDetail(constants.SPECIES).toLowerCase().startsWith(params.searchFor.toLowerCase()))
             break;
        }
        break;
//--------------------------------------------------------------------------------------------------------------------
      case constants.STRAIN:
        switch (params.searchType)
        {
          case constants.CONTAINS:
            if (art.getDetail(constants.STRAIN).toLowerCase().indexOf(params.searchFor.toLowerCase()) >= 0)
            {
              return true
            } else {return false}
            break;
          case constants.IS_EXACT:
            return (art.getDetail(constants.STRAIN).toLowerCase() === params.searchFor.toLowerCase())
            break;
          case constants.STARTS_WITH:
             return (art.getDetail(constants.STRAIN).toLowerCase().startsWith(params.searchFor.toLowerCase()))
             break;
        }
        break;
//--------------------------------------------------------------------------------------------------------------------
      case constants.INSTITUTION:
        switch (params.searchType)
        {
          case constants.CONTAINS:
            if (art.getDetail(constants.INSTITUTION).toLowerCase().indexOf(params.searchFor.toLowerCase()) >= 0)
            {
              return true
            } else {return false}
            break;
          case constants.IS_EXACT:
            return (art.getDetail(constants.INSTITUTION).toLowerCase() === params.searchFor.toLowerCase())
            break;
          case constants.STARTS_WITH:
             return (art.getDetail(constants.INSTITUTION).toLowerCase().startsWith(params.searchFor.toLowerCase()))
             break;
        }
        break;
//--------------------------------------------------------------------------------------------------------------------
      case constants.LAB:
        switch (params.searchType)
        {
          case constants.CONTAINS:
            if (art.getDetail(constants.LAB).toLowerCase().indexOf(params.searchFor.toLowerCase()) >= 0)
            {
              return true
            } else {return false}
            break;
          case constants.IS_EXACT:
            return (art.getDetail(constants.LAB).toLowerCase() === params.searchFor.toLowerCase())
            break;
          case constants.STARTS_WITH:
             return (art.getDetail(constants.LAB).toLowerCase().startsWith(params.searchFor.toLowerCase()))
             break;
        }
        break;
//--------------------------------------------------------------------------------------------------------------------
      case constants.NOTES:
        switch (params.searchType)
        {
          case constants.CONTAINS:
            if (art.getDetail(constants.NOTES).toLowerCase().indexOf(params.searchFor.toLowerCase()) >= 0)
            {
              return true
            } else {return false}
            break;
          case constants.IS_EXACT:
            console.log(params.searchFor, art.getDetail(constants.NOTES))
            return (art.getDetail(constants.NOTES).toLowerCase() === params.searchFor.toLowerCase())
            break;
          case constants.STARTS_WITH:
             return (art.getDetail(constants.NOTES).toLowerCase().startsWith(params.searchFor.toLowerCase()))
             break;
        }
        break;
//--------------------------------------------------------------------------------------------------------------------
    }
  }

  render() {
    window.scrollTo(0,0)

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
    const SPECIES = "speciesName";
    const STRAIN = "strain";
    const INSTITUTION = "institution";
    const LAB = "lab";
    const NOTES = "artNotes";
    const CONTAINS = "contains";
    const IS_EXACT = "isExact";
    const STARTS_WITH = "startsWIth";

    const constants = {
      ALL_FIELDS: "allFields",
      MICROSCOPIST: "microscopist",
      SPECIES: "speciesName",
      STRAIN: "strain",
      INSTITUTION: "institution",
      LAB: "lab",
      NOTES: "artNotes",
      CONTAINS: "contains",
      IS_EXACT: "isExact",
      STARTS_WITH: "startsWith"
    }

    var artifactsToFilter = this.props.artifacts;

    if (advancedSearchToggleBool) {
      for (const params of advancedSearchParams) {
        if (artifacts.length > 0){
          artifacts = [];
        }

        for (const art of artifactsToFilter){
          if (this.filterArtifacts(art, params, constants)){
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
