import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = ({ onInputChange }) => (
  <>
    <Label>
      <span>Find contacts by name</span>
      <input onChange={onInputChange} type="text" name="filter" />
    </Label>
  </>
);

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};