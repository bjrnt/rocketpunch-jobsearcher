SearchBar = React.createClass({
  propTypes: {
    filter: React.PropTypes.string.isRequired,
    onFilterValueChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <div className='panel panel-default panel-shaded'>
        <div className='panel-body'>
          <Filter
          filter={this.props.filter}
          onFilterValueChange={this.props.onFilterValueChange} />
        </div>
      </div>
    );
  }
});
