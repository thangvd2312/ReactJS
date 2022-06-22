import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monters: []
    };
    console.log(1);
  }
  componentDidMount() {
    console.log(3);
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
    console.log(2);
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
