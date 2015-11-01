Listing = React.createClass({
  propTypes: {
    listing: React.PropTypes.object.isRequired
  },

  // Checks if the timestamp for when the listing was added is within two days.
  // If so, it should have a 'new' tag
  isNew() {
    let ts = moment(new Date(this.props.listing.timestamp));
    return ts.isAfter(moment().subtract(2, 'days').startOf('day'));
  },

  renderNewTag() {
    if(this.isNew()) {
      return (
        <span className='label label-default'>
          New
        </span>
      )
    } else {
      return '';
    }
  },

  render() {
    return (
      <tr>
        <td>{this.props.listing.title} {this.renderNewTag()}</td>
        <td>{this.props.listing.company}</td>
        <td>{this.props.listing.experience}</td>
        <td>
          <button
          type='button'
          className='btn btn-primary btn-xs viewButton pull-right'
          onClick={_.partial(window.open, this.props.listing.url, '_blank')}>보기</button>
        </td>
      </tr>
    );
  }
});
