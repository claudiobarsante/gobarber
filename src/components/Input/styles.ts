import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
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

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--orange);
      color: var(--orange);
    `}

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--error);
      color: var(--error);
    `}  

    

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
