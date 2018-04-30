
import React, {Component} from 'react';
import uid from 'uid';
import SelectSearchOnOptions from './selectSearchOnOptions';
import SelectSearchTypeOptions from './selectSearchTypeOptions';
import InputSearchFor from './inputSearchFor';

class AdvancedSearchRow extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchParams: {
        type: "simple",
        searchOn: "anyField",
        searchType: "",
        searchFor: "",
        uid: uid()
      },
      size: 1
    }

    this.handleAddRowClick = this.handleAddRowClick.bind(this);
    this.handleAdvancedSearchChange = this.handleAdvancedSearchChange.bind(this);
    this.pushStateUp = this.pushStateUp.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

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
    if (name === "searchOn") {
      this.setState(prevState => ({
        searchParams: {
          ...prevState.searchParams,
          [name]: value,
          searchType: "",
          searchFor: ""
        }
      }),
      this.pushStateUp
    )
  } else {
    this.setState(prevState => ({
      searchParams: {
        ...prevState.searchParams,
        [name]: value
      }
    }),
    this.pushStateUp
  )
}
}

pushStateUp() {
  this.props.onAdvancedSearchChange(this.state.searchParams);
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
  const complexRowBool = (this.props.complexRowArray === 0);

  const addComplexRowButton = (complexRowBool) ? (
    <div className="row">
      <button
        onClick={this.handleAddRowClick}>Add parameter +</button>
      </div>
    ) : (
      null
    );
    console.log(this.state.searchFor)
    return (
      <div>

        <SelectSearchOnOptions
          onHandleAdvancedSearchChange={this.handleAdvancedSearchChange}
        />

        <SelectSearchTypeOptions
          onHandleAdvancedSearchChange={this.handleAdvancedSearchChange}
          params={this.state.searchParams}
        />

        <InputSearchFor
          onHandleTextChange={this.handleTextChange}
          onHandleAdvancedSearchChange={this.handleAdvancedSearchChange}
          params={this.state.searchParams}
          textValue={this.state.searchParams.searchFor}
        />

        {addComplexRowButton}

      </div>

    )
  }
}

export default AdvancedSearchRow
