import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monters: [
        {
          name: "Thắng",
          id: "1231eerewe"
        },
        {
          name: "Xinh",
          id: "1231eerew1"
        },
        {
          name: "Nhản",
          id: "1231eerewq"
        }
      ]
    };
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
