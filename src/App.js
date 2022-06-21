import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        firstName: "Vũ Văn",
        lastName: "Thắng"
      },
      company: "FPT Software"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello, My name is {this.state.name.firstName}{" "}
            {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({ name: { firstName: "Thang", lastName: "VV6" } });
              console.log(this.state);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
