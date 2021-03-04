import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signInRightSideImage from '../../assets/sign-in.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  @media (min-width: 908px) {
    width: 40%;
  }

  background: var(--background);
  // animation: ${appearFromLeft} 1s;

  img {
    margin-top: 12.2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid red;
  width: 100%;

  h1 {
    font-size: 2.4rem;
    line-height: 3.165rem;
    margin-top: 6rem;
    margin-bottom: 2.4rem;
  }

  a {
    color: var(--white);
    line-height: 2.11rem;
    text-decoration: none;
    margin-top: 2.4rem;
  }
  p {
    color: var(--error);
  }

  p::before {
    display: inline;
    content: '⚠ ';
  }
`;

export const Right = styled.div`
  @media (min-width: 908px) {
    width: 60%;
  }
  width: 0;
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${appearFromLeft} 1s;

  form {
    margin: 8rem 0;
    width: 34rem;
    text-align: center;

    h1 {
      margin-bottom: 2.4rem;
    }

    a {
      color: va(--white);
      display: block; //usar o display block para o margin top funcionar
      margin-top: 2.4rem;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const FrontImage = styled.div`
  background: url(${signInRightSideImage}) no-repeat;
  background-size: cover;
  filter: contrast(150%);
  height: 100vh;
`;
