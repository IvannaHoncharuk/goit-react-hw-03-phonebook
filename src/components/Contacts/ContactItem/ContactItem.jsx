import PropTypes from 'prop-types';
import { Contact } from './ContactItem.styled';

export const ContactsItem = ({ id, name, number, deleteContact }) => (
  <Contact>
    {name}: {number}{' '}
    <button type="button" onClick={() => deleteContact(id)} data-id={id}>
      Delete
    </button>
  </Contact>
);

ContactsItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};