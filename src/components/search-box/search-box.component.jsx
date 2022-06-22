import { Component } from "react";
class SearchBoxComponent extends Component {
  render() {
    const { onSearchHandler, placeholder, className } = this.props;
    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onSearchHandler}
      />
    );
  }
}

export default SearchBoxComponent;
