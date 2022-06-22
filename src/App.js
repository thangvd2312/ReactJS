import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monters: [],
      searchField: ""
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monters: users };
          },
          () => console.log(this.state)
        );
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
    console.log("render");
    const { monters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monters.filter((monter) => {
      return monter.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monter) => {
          return (
            <div key={monter.id}>
              <h1>{monter.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
