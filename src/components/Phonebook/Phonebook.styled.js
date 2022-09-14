import styled from 'styled-components';

export const FormBox = styled.form`
  border: 1px solid white;
  width: 400px;
  padding: ${p => p.theme.space[4]}px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;