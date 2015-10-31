App = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      filter: ''
    };
  },

  getMeteorData() {
    if(this.validFilter()) {
      Meteor.subscribe('search', this.state.filter);
      return {
        listings: Listings.find({}).fetch()
      };
    } else {
      // If the current filter is too short, just show an empty list
      return {
        listings: []
      };
    }
  },

  renderListings() {
    return this.data.listings.map((listing) => {
      return <Listing key={listing._id} listing={listing} />;
    });
  },

  renderTable() {
    if(this.validFilter()) {
      return (
        <table className='table table-hover table-condensed'>
          <thead>
            <tr>
              <th>제목</th>
              <th>회사명</th>
              <th>경력</th>
              <th className='text-right'>로켓펀치</th>
            </tr>
          </thead>
          <tbody>
            {this.renderListings()}
          </tbody>
        </table>
      );
    } else {
      return (
        <div>
          <br />
          <p className='text-center lead'>필터를 입력해서 검색해 보세요</p>
        </div>
      );
    }
  },

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <header>
            <h1 className='text-center title'>로켓펀치 채용 포스팅 검색기</h1>
            <br />
            <SearchBar
            filter={this.state.filter}
            onFilterValueChange={this.onFilterValueChange}
            />
          </header>
        </div>
        <div className='row table-responsive panel panel-shaded'>
          {this.renderTable()}
        </div>
      </div>
    );
  },

  onFilterValueChange(value) {
    this.setState({
      filter: value
    });
  },

  validFilter() {
    return this.state.filter.length >= 2;
  }
});
