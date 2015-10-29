// Separated into a separate component to allow the use of multiple filters later on
Filter = React.createClass({
  propTypes: {
    filter: React.PropTypes.string.isRequired,
    onFilterValueChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <div className='row filter'>
        <input
        type='text'
        placeholder='필터...'
        className='form-control'
        onChange={_.debounce(this.handleValueChange, 200)}
        defaultValue={this.props.filter.value}
        ref='inputValue'
        />
      </div>
    );
  },

  handleValueChange() {
    let newValue = this.refs.inputValue.getDOMNode().value.trim();
    this.props.onFilterValueChange(newValue);
  }
});
