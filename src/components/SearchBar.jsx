import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {
    e.preventDefault();
    this.setState({
      keyword: e.target.value,
    });
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Find notes..."
        className="bg-slate-600 text-slate-300 font-semibold p-2 w-[320px] rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300"
        value={this.state.keyword}
        onChange={this.onSearchChange}
      />
    );
  }
}

export default SearchBar;
