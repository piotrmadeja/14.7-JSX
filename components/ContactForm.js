var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
			<form className = {'contactForm'}>
				<label htmlFor={'name'}>Imię: </label>
				<input className={'formField'} type = {'text'} id = {'name'} placeholder = {'Poadaj imię'} value = {this.props.contact.firstName}></input>
				<label htmlFor={'surname'}> Nazwisko: </label>
				<input className={'formField'} type = {'text'} id = {'surname'} placeholder= {'Podaj nazwisko'} value = {this.props.contact.lastName}></input>
				<label htmlFor = {'email'}>Email:</label>
				<input className = {'formField'} type = {'text'} id = {'email'} placeholder = {'Podaj e-mail'} value = {this.props.contact.email}></input>
				<button	type = {'submit'} className = {'addContact'}>Dodaj kontakt</button>
      </form> 
    );
  }
})