
import React, {Component} from 'react';
import uid from 'uid';
import SelectSearchOnOptions from './selectSearchOnOptions';
import SelectSearchTypeOptions from './selectSearchTypeOptions';

class AdvancedSearchRow extends Component {
constructor(props){
  super(props);

  this.state = {
    searchParams: {
      type: 'simple',
      searchOn: 'anyField',
      searchType: 'contains',
      searchFor: "",
      uid: uid()
    },
    size: 1
  }

  this.handleAddRowClick = this.handleAddRowClick.bind(this);
  this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
  this.pushStateUp = this.pushStateUp.bind(this);

}

componentDidMount() {
  this.pushStateUp()
}

handleAddRowClick(e) {
  e.preventDefault();
  this.props.onAddRowClick()

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
  this.props.onAdvancedSearchChange(this.state.searchParams);
}

render() {
  const complexRowBool = (this.props.complexRowArray === 0);

  const addComplexRowButton = (complexRowBool) ? (
    <div className="row">
      <button
        onClick={this.handleAddRowClick}>Add parameter +</button>
      </div>
    ) : (
      null
    );

    return (
      <div>

        <SelectSearchOnOptions
          onHandleAdvancedSearchChange={this.handleAdvancedSearchChange}
        />

        <SelectSearchTypeOptions
          onHandleAdvancedSearchChange={this.handleAdvancedSearchChange}
          params={this.state.searchParams}
        />

        <div className="row">
          <input name="searchFor" className="input-field1-text" type="text" onBlur={this.handleAdvancedSearchChange}  />
        </div>

        {addComplexRowButton}

      </div>

    )
  }
}

export default AdvancedSearchRow
