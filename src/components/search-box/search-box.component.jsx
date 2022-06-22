import { Component } from "react";
import "./search-box.style.css";
class SearchBoxComponent extends Component {
  render() {
    const { onSearchHandler, placeholder, className } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchHandler}
      />
    );
  }
}

export default SearchBoxComponent;
