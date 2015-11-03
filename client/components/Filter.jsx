// Separated into a separate component to allow the use of multiple filters later on
Filter = React.createClass({
  propTypes: {
    filter: React.PropTypes.string.isRequired,
    onFilterValueChange: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <div className='row'>
        <div className='col-lg-1'>
        <button type='button' className='btn btn-link' data-toggle='modal' data-target='.modal'>사용 방법</button>

        <div className='modal fade' tabIndex='-1' role='dialog' aria-labelledby=''>
          <div className='modal-dialog model-sm'>
            <div className='modal-content'>
              <div className='modal-header text-left'>
                <h4 className='modal-title'>사용 방법</h4>
              </div>
              <div className='modal-body text-left'>
                <p><strong>이 서비스로는</strong> 로켓펀치의 검색 기능와 달리 채용 포스팅의 모든 내용을 정확하게 검색할 수 있습니다. 필터를 입력하면 필터의 모든 단어가 들어간 포스팅들을 찾아 표시합니다. 최대한 50개의 포스팅이 표시됩니다.
                <br /><br />
                예를 들어 '개발자 iOS 강남구' 입력하면 강남구에 위치되며 iOS 개발자를 찾는 회사의 포스팅을 찾을 수 있습니다. 포스팅의 자세한 내용은 '보기' 버튼을 클릭해서 보세요. 나중에 검색 결과를 다시 보고 싶으면 북마크나 링크 통해 같은 필터로 검색할 수 있습니다.
                <br /><br />
                포스팅 데이터베이스는 이틀마다 업데이트됩니다. 문제가 있으면 <a href='mailto:bjorn@kaist.ac.kr'>이메일 보내 주세요</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='filter col-lg-11'>
          <input
          type='text'
          placeholder='필터...'
          className='form-control filterInput'
          onChange={_.debounce(this.handleValueChange, 200)}
          defaultValue={this.props.filter}
          ref='inputValue'
          />
        </div>
      </div>
    );
  },

  handleValueChange() {
    let newValue = this.refs.inputValue.getDOMNode().value.trim();
    this.props.onFilterValueChange(newValue);
  }
});
