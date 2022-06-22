import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBoxComponent from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monters: users };
        });
      });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchField
      };
    });
  };
  render() {
    // console.log("render from AppJS");
    const { monters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monters.filter((monter) => {
      return monter.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <SearchBoxComponent
          className={"monters-search-box"}
          onSearchHandler={onSearchChange}
          placeholder={"search monster"}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
