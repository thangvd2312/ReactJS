import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monters: []
    };
  }
  componentDidMount() {
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
  render() {
    return (
      <div className="App">
        {this.state.monters.map((monter) => {
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
