import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  // When this component mounts, search the render API for employees
  componentDidMount() {
    this.getEmployee("");
  }

  getEmployee = (query) => {
    API.search(query)
      .then((res) =>
        // console.log( res.data.results)
        this.setState({ results: res.data.results })
      )
      .catch((err) => console.log(err));
  };

  // Filter Employee by search bar
  searchEmployee = () => {
    let updatedList = this.state.results.filter((result) => (
      result.name.first.toLowerCase().includes(this.state.search.toLowerCase())
      || result.name.last.toLowerCase().includes(this.state.search.toLowerCase())
    ));
    return updatedList;
   
  };

 

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      // results: this.state.results,
      search: value,
    });
  };



  render() {
    let filterResults = this.searchEmployee();
  
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <ResultList 
        results={filterResults} />
      </div>
    );
  }
}

export default SearchResultContainer;