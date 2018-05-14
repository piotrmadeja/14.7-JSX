var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },
  render: function(){
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'doge.jpg'}></img>
	  <p className={'contactData'}>Imię: {this.props.item.firstName}
          </p>
	  <p className={'contactData'}>Nazwisko: {this.props.item.lastName}
	  </p>
	  <p className={'contactEmail'}
	    href = {'mailto' + this.props.item.email}>Email: {this.props.item.email}
	  </p>
      </div>
    );
  }
});
