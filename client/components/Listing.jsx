Listing = React.createClass({
  propTypes: {
    listing: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <tr>
        <td>{this.props.listing.title}</td>
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
