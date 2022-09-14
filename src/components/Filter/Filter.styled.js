import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  width: 400px;
`;