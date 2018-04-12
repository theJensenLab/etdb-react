
import React, {Component} from 'react';

import TomogramListItem from './tomogramListItem';

class SearchResultGrid extends Component {
  constructor(props){
    super(props);

    this.state = {
      artifacts: []
    }
    this.getTomograms = this.getTomograms.bind(this);
    this.storeTomograms = this.storeTomograms.bind(this);
  }
  componentDidMount(){
    this.getTomograms();
  }
  getTomograms(){
    this.props.Core.Index.getSupportedArtifacts(this.storeTomograms, (error) => {
      console.error(error)
    })
  }
  storeTomograms(artifacts){
    this.setState({artifacts: artifacts});
  }

  render(){
    return(
      <div className="col-sm-10" id="searchresultsgrid">
        {this.state.artifacts.map((artifact) => <TomogramListItem Core={this.props.Core} artifact={artifact} />)}
      </div>
    )
  }
}


export default SearchResultGrid
