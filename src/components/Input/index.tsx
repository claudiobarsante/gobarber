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
1-To extend all properties of the input 
2-If you nedd to  overwrite the property <name> of an input, just declare it
it as required
*/
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  inputRef: any;
  icon?: React.ComponentType<IconBaseProps>; //to receive a component as property
  //and to add the properties from react-icons, must pass type as IconBaseProps
}
const Input = ({ inputRef, icon: Icon, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

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
