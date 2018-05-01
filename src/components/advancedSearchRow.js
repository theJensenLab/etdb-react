
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
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateChange1 = this.handleDateChange1.bind(this);
    this.handleDateChange2 = this.handleDateChange2.bind(this);
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
          searchFor: "",
          searchFor1: "",
          searchFor2: ""
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
  let value = e.target.value;
  let name = e.target.name;
  this.setState(prevState => ({
    searchParams: {
      ...prevState.searchParams,
      [name]: value
    }
  }))
}

handleDateChange(date) {
  let unixDate = date.getTime()
  this.setState(prevState => ({
    searchParams: {
      ...prevState.searchParams,
      date: unixDate
    }
  }), this.pushStateUp)
}

handleDateChange1(date) {
  let unixDate = date.getTime()
  this.setState(prevState => ({
    searchParams: {
      ...prevState.searchParams,
      date1: unixDate
    }
  }), this.pushStateUp)
}

handleDateChange2(date) {
  let unixDate = date.getTime()
  this.setState(prevState => ({
    searchParams: {
      ...prevState.searchParams,
      date2: unixDate
    }
  }), this.pushStateUp)
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
          searchOn={this.state.searchParams.searchOn}
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
          onDateChange={this.handleDateChange}
          onDateChange1={this.handleDateChange1}
          onDateChange2={this.handleDateChange2}
        />

        {addComplexRowButton}

      </div>

    )
  }
}

export default AdvancedSearchRow
