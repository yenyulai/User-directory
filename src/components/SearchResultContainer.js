import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  // When this component mounts, search the Giphy API for pictures of kittens
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

  searchEmployee = () => {
    let updatedList = this.state.results.filter((result) =>
      result.name.first.toLowerCase().includes(this.state.search.toLowerCase())
    );
   
    
   
    
    // console.log(this.state.results);
     return updatedList;
   
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      results: this.state.results,
      search: value,
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      results: this.searchEmployee(this.state.search),

    });
    
  };

  render() {
    // console.log(this.state.results);
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
