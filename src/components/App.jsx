import { Component } from "react";
import { Phonebook } from "./Phonebook/Phonebook";
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { ContactsList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';


export class App extends Component {
 state = {
  contacts: [],
  filter: ''
  }

  getListFromLocalStorage = () => {
    localStorage.getItem('contacts') &&
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
  };
  
  componentDidMount() {
    try {
      this.getListFromLocalStorage();
    } catch (error) {
      console.log(error);
    }
  }

  isContactChange = () => {
    return (
      localStorage.getItem('contacts') &&
      JSON.parse(localStorage.getItem('contacts')) !== this.state.contacts);
  };

  componentDidUpdate() {
    try {
      if (this.isContactChange) {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleNewContact = newContact => {
    if (!this.hasDuplicates(newContact.name)) {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    } else {
      alert(`${newContact.name} is already in contacts.`);
    }
  };

  hasDuplicates(duplicate) {
    return this.state.contacts.find(({ name }) => name === duplicate);
  }

   getFilteredContacts = () => {
    const filterValue = this.state.filter.toLowerCase();

    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue)
    );
  };

  onInputChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  deleteContact = contactIdToDelete => {
    this.setState({
      contacts: this.state.contacts.filter(
        ({ id }) => id !== contactIdToDelete
      ),
    });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <GlobalStyle />
        <Section title="Phonebook">
          <Phonebook handleNewContact={this.handleNewContact} />
        </Section>
        <Section title="Contacts">
          <Filter onInputChange={this.onInputChange} />
          <ContactsList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
};
