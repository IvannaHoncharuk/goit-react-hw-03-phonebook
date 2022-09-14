import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => (
  <Box
    as="section"
    p={4}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <SectionTitle>{title}</SectionTitle>
    {children}
  </Box>
);

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};