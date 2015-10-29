SearchBar = React.createClass({
  propTypes: {
    filter: React.PropTypes.string.isRequired,
    onFilterValueChange: React.PropTypes.func.isRequired
  },
  
  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-body'>

          <div className='row'>
            <div className='col-lg-offset-1 col-lg-10 text-center'>
              <p>사용 방법 설명은 여기</p>
            </div>
          </div>

          <Filter
          filter={this.props.filter}
          onFilterValueChange={this.props.onFilterValueChange} />
        </div>
      </div>
    );
  }
});
