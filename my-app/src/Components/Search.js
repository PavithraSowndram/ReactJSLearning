import React, { Component } from 'react';
import Data from '../mock-data.json';
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Student: Data,
    }
  }
  onSearch = (e)=> {
    let convertToLc = e.target.value.toLowerCase();
    let filterData = this.state.Student.filter((e) => {
      let nameToLc = e.name.toLowerCase();
      return nameToLc.indexOf(convertToLc) !== -1;
    });
    this.setState({
      Student: convertToLc === '' ? Data : filterData,
    });
  }
  render() {
    return (
      <div className="container mt-5">
        <h2>Filter Search</h2>
        <div className="mt-4">
          <input type="text" className="form-control" onChange={this.onSearch} placeholder="Search ..." />
        </div>
        <ul className="list-group">
          {this.state.Student.map((res) => {
            return (
              <a href="#" className="list-group-item list-group-item-action" key={res.id}>{res.name}</a>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default Search;