import PropTypes from 'prop-types';
import { ContactsItem } from './ContactItem/ContactItem';
import { Contacts } from './Contacts.styled';

export const ContactsList = ({ contacts, deleteContact }) => (
  <Contacts>
    {contacts.length ? (
      contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
          id={id}
        />
      ))
    ) : (
      <li>No contacts</li>
    )}
  </Contacts>
);

ContactsList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};