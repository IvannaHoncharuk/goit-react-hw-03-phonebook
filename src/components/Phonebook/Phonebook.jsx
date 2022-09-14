import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Label, FormBox } from './Phonebook.styled';


export class Phonebook extends Component {
  static propTypes = {
    handleNewContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  onInputChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      id: nanoid(),
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
    };

    this.props.handleNewContact(newContact);
    this.resetInputs();
  };

  resetInputs() {
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
        <FormBox onSubmit={this.onFormSubmit} autoComplete="off">
          <Label>
            <span>Name</span>
            <input
              onChange={this.onInputChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            <span>Number</span>
            <input
              onChange={this.onInputChange}
              value={this.state.number}
              name="number"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <button type="submit">Add contact</button>
        </FormBox>
    );
  }
}