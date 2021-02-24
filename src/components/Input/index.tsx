import React, {
  useCallback,
  useRef,
  useState,
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container } from './styles';

/*
To extend all properties of the input element and overwrite the property <name>
and declare it as required
*/
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>; //to receive a component as property
  //and to add the properties from react-icons, must pass type as IconBaseProps
}
const Input = ({ name, icon: Icon, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnFocus = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleOnFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
