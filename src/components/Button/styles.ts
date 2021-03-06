import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 34rem;
  height: 5.6rem;
  border-radius: 1rem;
  border: 0;
  background: var(--orange);
  color: var(--background);
  font-weight: 500;
  margin-top: 2.4rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
