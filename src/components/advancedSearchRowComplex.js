
import React, {Component} from 'react';
import SelectSearchTypeOptions from './selectSearchTypeOptions';

class AdvancedSearchRowComplex extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchParams: {
        searchOp: 'and',
        searchOn: 'anyField',
        searchType: 'contains',
        searchFor: "",
        uid: props.uid || ""
      }
    }

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleMinusRowClick = this.handleMinusRowClick.bind(this);
    this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
    this.pushStateUp = this.pushStateUp.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    this.setState({searchParams: nextProps.componentState})
  }
  componentDidMount() {
    this.pushStateUp()
  }

  handleAddRowClick(e) {
    e.preventDefault();
    this.props.onAddRowClick();
  }

  handleMinusRowClick(e) {
    e.preventDefault();
    this.props.onMinusRowClick(this.props.uid);
  }

  handleAdvancedSearchChange(e){
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => ({
      searchParams: {
        ...prevState.searchParams,
        [name]: value
      }
    }),
    this.pushStateUp
  )
}

pushStateUp() {
  this.props.onAdvancedSearchChange(this.state.searchParams, this.props.uid);
}

handleTextChange(e) {
  e.preventDefault();
  var value = e.target.value;
  this.setState(prevState => ({
    searchParams: {
      ...prevState.searchParams,
      searchFor: value
    }
  }))

}

render() {

  return (
    <div>
      
      <select value={this.state.searchParams.searchOp} name="searchOp" className="col-sm-3 as-select" onChange={this.handleAdvancedSearchChange}>
        <option value="and">AND</option>
        <option value="or">OR</option>
        <option value="not">NOT</option>
      </select>

      <SelectSearchOnOptions
        onHandleAdvancedSearchChange={this.handleAdvancedSearchChange}
      />

      <SelectSearchTypeOptions
        onHandleAdvancedSearchChange={this.handleAdvancedSearchChange}
        params={this.state.searchParams}
      />

      <div className="row">
        <input value={this.state.searchParams.searchFor} className="input-field1-text" type="text" name="searchFor" onChange={this.handleTextChange} onBlur={this.handleAdvancedSearchChange}  />
      </div>

      <div className="row">
        <button className="remove" onClick={this.handleMinusRowClick}>- Remove row </button>
        <button className="addparameter" onClick={this.handleAddRowClick}>Add parameter +</button>
      </div>

    </div>
  )
}
}


export default AdvancedSearchRowComplex
