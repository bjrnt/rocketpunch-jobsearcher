App = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      filter: decodeURIComponent(getSearchParameters()['filter'] || '')
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
    window.history.replaceState({}, document.title, editParams('filter', value));
    this.setState({
      filter: value
    });
  },

  validFilter() {
    return this.state.filter.length >= 2;
  }
});

// add/change/remove URL parameter
// use a value of false to remove parameter
// returns a url-style string
function editParams (key, value) {
  key = encodeURI(key);

  var params = getSearchParameters();

  if (Object.keys(params).length === 0) {
    if (value !== false)
      return '?' + key + '=' + encodeURI(value);
    else
      return '';
  }

  if (value !== false)
    params[key] = encodeURI(value);
  else
    delete params[key];

  if (Object.keys(params).length === 0)
    return '';

  return '?' + $.map(params, function (value, key) {
    return key + '=' + value;
  }).join('&');
}

// Get object/associative array of URL parameters
function getSearchParameters () {
  var prmstr = window.location.search.substr(1);
  return prmstr !== null && prmstr !== "" ? transformToAssocArray(prmstr) : {};
}

// convert parameters from url-style string to associative array
function transformToAssocArray (prmstr) {
  var params = {},
      prmarr = prmstr.split("&");

  for (var i = 0; i < prmarr.length; i++) {
    var tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
  }
  return params;
}
