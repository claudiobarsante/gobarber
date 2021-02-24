import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

//could use type rather than interface because it's not overwriting
type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: Props) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
