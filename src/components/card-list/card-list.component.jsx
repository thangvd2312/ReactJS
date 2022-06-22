import { Component } from "react";

class CardList extends Component {
  render() {
    console.log(this.props.monters);
    console.log("render from CardList");
    const { monters } = this.props;

    return (
      <div>
        {monters.map((monter) => {
          return <h1 key={monter.id}>{monter.name}</h1>;
        })}
      </div>
    );
  }
}
export default CardList;
