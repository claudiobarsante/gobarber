import styled from 'styled-components';

export const Container = styled.div`
  width: 34rem;
  height: 5.6rem;
  background: var(--inputs);
  border-radius: 10px;
  border: 2px solid var(--inputs);
  padding: 16px;
  color: var(--gray-hard);

  display: flex;
  align-items: center;
  margin-top: 0.8rem;

  input {
    flex: 1;
    background: transparent;
    border: 1px solid green;
    color: var(--white);

    &::placeholder {
      color: var(--gray-hard);
    }
  }

  svg {
    margin-right: 1.6rem;
  }
`;
